import"./modulepreload-polyfill-ec808ebb.js";import{s as Z}from"./ArrayTools-805bd6b4.js";import{z as p,p as v,r as f}from"./IterTools-25bf003b.js";const R="data:text/plain;base64,TW9ua2V5IDA6CiAgU3RhcnRpbmcgaXRlbXM6IDk5LCA2NywgOTIsIDYxLCA4MywgNjQsIDk4CiAgT3BlcmF0aW9uOiBuZXcgPSBvbGQgKiAxNwogIFRlc3Q6IGRpdmlzaWJsZSBieSAzCiAgICBJZiB0cnVlOiB0aHJvdyB0byBtb25rZXkgNAogICAgSWYgZmFsc2U6IHRocm93IHRvIG1vbmtleSAyCgpNb25rZXkgMToKICBTdGFydGluZyBpdGVtczogNzgsIDc0LCA4OCwgODksIDUwCiAgT3BlcmF0aW9uOiBuZXcgPSBvbGQgKiAxMQogIFRlc3Q6IGRpdmlzaWJsZSBieSA1CiAgICBJZiB0cnVlOiB0aHJvdyB0byBtb25rZXkgMwogICAgSWYgZmFsc2U6IHRocm93IHRvIG1vbmtleSA1CgpNb25rZXkgMjoKICBTdGFydGluZyBpdGVtczogOTgsIDkxCiAgT3BlcmF0aW9uOiBuZXcgPSBvbGQgKyA0CiAgVGVzdDogZGl2aXNpYmxlIGJ5IDIKICAgIElmIHRydWU6IHRocm93IHRvIG1vbmtleSA2CiAgICBJZiBmYWxzZTogdGhyb3cgdG8gbW9ua2V5IDQKCk1vbmtleSAzOgogIFN0YXJ0aW5nIGl0ZW1zOiA1OSwgNzIsIDk0LCA5MSwgNzksIDg4LCA5NCwgNTEKICBPcGVyYXRpb246IG5ldyA9IG9sZCAqIG9sZAogIFRlc3Q6IGRpdmlzaWJsZSBieSAxMwogICAgSWYgdHJ1ZTogdGhyb3cgdG8gbW9ua2V5IDAKICAgIElmIGZhbHNlOiB0aHJvdyB0byBtb25rZXkgNQoKTW9ua2V5IDQ6CiAgU3RhcnRpbmcgaXRlbXM6IDk1LCA3MiwgNzgKICBPcGVyYXRpb246IG5ldyA9IG9sZCArIDcKICBUZXN0OiBkaXZpc2libGUgYnkgMTEKICAgIElmIHRydWU6IHRocm93IHRvIG1vbmtleSA3CiAgICBJZiBmYWxzZTogdGhyb3cgdG8gbW9ua2V5IDYKCk1vbmtleSA1OgogIFN0YXJ0aW5nIGl0ZW1zOiA3NgogIE9wZXJhdGlvbjogbmV3ID0gb2xkICsgOAogIFRlc3Q6IGRpdmlzaWJsZSBieSAxNwogICAgSWYgdHJ1ZTogdGhyb3cgdG8gbW9ua2V5IDAKICAgIElmIGZhbHNlOiB0aHJvdyB0byBtb25rZXkgMgoKTW9ua2V5IDY6CiAgU3RhcnRpbmcgaXRlbXM6IDY5LCA2MCwgNTMsIDg5LCA3MSwgODgKICBPcGVyYXRpb246IG5ldyA9IG9sZCArIDUKICBUZXN0OiBkaXZpc2libGUgYnkgMTkKICAgIElmIHRydWU6IHRocm93IHRvIG1vbmtleSA3CiAgICBJZiBmYWxzZTogdGhyb3cgdG8gbW9ua2V5IDEKCk1vbmtleSA3OgogIFN0YXJ0aW5nIGl0ZW1zOiA3MiwgNTQsIDYzLCA4MAogIE9wZXJhdGlvbjogbmV3ID0gb2xkICsgMwogIFRlc3Q6IGRpdmlzaWJsZSBieSA3CiAgICBJZiB0cnVlOiB0aHJvdyB0byBtb25rZXkgMQogICAgSWYgZmFsc2U6IHRocm93IHRvIG1vbmtleSAz",k="/assets/monke-9bf3210e.png";fetch(R).then(a=>{a.text().then(c=>{x(c.split(`
`))})});function x(a){const c=Z(a,""),s=new Map,r=[];for(let g of c){const o=Number.parseInt(g[0].split(" ")[1][0]),e=g[1].split(": ")[1].split(", ").map(m=>Number.parseInt(m)),l=[];for(let[m,G]of p(e)){const i=document.createElement("div");i.textContent=""+m,i.style.background="gray",i.style.position="absolute",i.style.left=90+o*175+"px",i.style.top=470-G*25+"px",i.style.padding="2px 5px",l.push({val:m,element:document.body.appendChild(i)})}const[n,t]=g[2].split("old ")[1].split(" "),I=t==="old"?-1:Number.parseInt(t),y=Number.parseInt(g[3].split("by ")[1]),u=Number.parseInt(g[4].split("monkey ")[1]),B=Number.parseInt(g[5].split("monkey ")[1]);s.set(o,{items:l,operator:n,opnumber:I,divisor:y,truetarget:u,falsetarget:B,inspections:0}),r.push(o)}const d=v(Array.from(s.values()).map(g=>g.divisor));for(let g of r){const o=document.createElement("img");o.src=k,o.style.position="absolute",o.style.top="500px",o.style.left=50+g*175+"px",document.body.appendChild(o)}function*A(){for(let g of f(0,1e4))for(let o of r){const e=s.get(o);for(;e.items.length>0;){let l=e.items.shift();e.inspections++,l.val%=d;let n=e.opnumber===-1?l.val:e.opnumber;if(e.operator==="*"?l.val*=n:l.val+=n,l.val%e.divisor===0){s.get(e.truetarget).items.push(l);for(let[t,I]of p(s.get(e.truetarget).items))t.element.style.left=90+e.truetarget*175+"px",t.element.style.top=470-I*25+"px",t.element.textContent=""+t.val}else{s.get(e.falsetarget).items.push(l);for(let[t,I]of p(s.get(e.falsetarget).items))t.element.style.left=90+e.falsetarget*175+"px",t.element.style.top=470-I*25+"px",t.element.textContent=""+t.val}for(let[t,I]of p(e.items))t.element.style.left=90+o*175+"px",t.element.style.top=470-I*25+"px",t.element.textContent=""+t.val;yield}}}const C=A();function b(){C.next().done||setTimeout(()=>{b()},50)}setTimeout(()=>{b()},1e3)}