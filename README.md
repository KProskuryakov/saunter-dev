https://cloud.google.com/sdk/docs/quickstart#deb
```
gcloud auth login

gcloud beta compute ssh --zone "us-east1-b" "instance-1" --project "kostyapro-website"
```

https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx

https://github.com/nodesource/distributions/blob/master/README.md

```
npm run build
gcloud beta compute scp --zone "us-east1-b" --project "kostyapro-website" saunter-dev.tar.gz instance-1:saunter-dev.tar.gz
gcloud beta compute ssh --zone "us-east1-b" "instance-1" --project "kostyapro-website" --command='mkdir -p saunter-dev && rm -rf saunter-dev/* && tar -xvf saunter-dev.tar.gz -C saunter-dev && cd saunter-dev && npm install && nohup npm start &'
```

Sample server.conf for nginx. Now I totally forgot to write down like anything I did while I was setting this thing up.

```
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    server_name saunter.dev;

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/saunter.dev/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/saunter.dev/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 86400;
    }
}
server {
    if ($host = saunter.dev) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    server_name saunter.dev;
    return 404; # managed by Certbot


}
```