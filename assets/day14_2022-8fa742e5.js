import"./modulepreload-polyfill-ec808ebb.js";import{b as g,a as v}from"./ArrayTools-805bd6b4.js";import{b as w,r as u}from"./IterTools-25bf003b.js";const k="/assets/input-a4451416.txt";fetch(k).then(f=>{f.text().then(x=>{M(x.split(`
`))})});function M(f){const x=f.map(e=>e.split(" -> ").map(o=>o.split(",").map(s=>Number.parseInt(s)))),n=new Map;for(let e of x){const o=w(e,g(e,1));for(let[[s,a],[i,b]]of o)if(s===i)for(let r of u(a,b,1,!0))n.set(s+","+r,{x:s,y:r});else for(let r of u(s,i,1,!0))n.set(r+","+a,{x:r,y:a})}const p=Array.from(n.values()).map(e=>e.y).reduce((e,o)=>Math.max(e,o))+1+1,l=Array.from(n.values()).map(e=>e.x).reduce((e,o)=>Math.min(e,o))-100,y=Array.from(n.values()).map(e=>e.x).reduce((e,o)=>Math.max(e,o))+100,c=[];for(let e=0;e<p;e++){const o=[];for(let s=0;s<y-l;s++){let a=document.createElement("div");a.style.top=5*e+"px",a.style.left=5*s+"px",a=document.body.appendChild(a),o.push(a)}c.push(o)}console.log(l),console.log(y),v(c,(e,o,s)=>{n.has(s+l+","+o)&&(e.style.background="black")});const t={x:500,y:0};function*d(){let e=0,o=100;for(;!n.has("500,0");){t.x-l>=0&&t.x<y&&c[t.y][t.x-l].style.background!=="white"&&(c[t.y][t.x-l].style.background="white");const s=t.y+1,a=t.x-1,i=t.x+1;s!==p?n.has(t.x+","+s)?n.has(a+","+s)?n.has(i+","+s)?(n.set(t.x+","+t.y,{x:t.x,y:t.y}),t.x=500,t.y=0):(t.y=s,t.x=i):(t.y=s,t.x=a):t.y=s:(n.set(t.x+","+t.y,{x:t.x,y:t.y}),t.x=500,t.y=0,o=500),e=(e+1)%o,e%o===0&&(yield)}}const h=d();function m(){h.next().done||setTimeout(()=>m(),1)}setTimeout(()=>m(),10)}