const e=window,t=document,n={t:0,o:"",raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},o=!!t.documentElement.attachShadow,s=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),l=new WeakMap,r=e=>l.get(e),i=(e,t)=>l.set(t.s=e,t),c=(e,t)=>t in e,a=e=>console.error(e),f=new Map,u=e.__stencil_cssshim;let $=0,d=!1;const p=[],y=[],m=[],h=e=>t=>{e.push(t),d||(d=!0,n.raf(b))},w=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){a(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},b=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){a(e)}e.length=0})(p);const e=2==(6&n.t)?performance.now()+7*Math.ceil($*(1/22)):1/0;w(y,e),w(m,e),y.length>0&&(m.push(...y),y.length=0),(d=p.length+y.length+m.length>0)?n.raf(b):$=0},g=h(y),_={},v=e=>null!=e,j=e=>e.toLowerCase(),k=e=>["object","function"].includes(typeof e),S=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_core_playground("./p-f7ddb189.js"),R=async()=>{{const n=Array.from(t.querySelectorAll("script")).find(e=>e.src.includes("/core-playground.esm.js")||"core-playground"===e.getAttribute("data-namespace")),o=new URL(".",new URL(n.getAttribute("data-resources-url")||n.src,e.location.href));return M(o.href),window.customElements||await __sc_import_core_playground("./p-a0c82e31.js"),o.href}},M=n=>{const o=`__sc_import_${"core-playground".replace(/\s|-/g,"_")}`;try{e[o]=new Function("w","return import(w);")}catch(s){const l=new Map;e[o]=s=>{const r=new URL(s,n).href;let i=l.get(r);if(!i){const n=t.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${r}'; window.${o}.m = m;`],{type:"application/javascript"})),i=new Promise(t=>{n.onload=()=>{t(e[o].m),n.remove()}}),l.set(r,i),t.head.appendChild(n)}return i}}},O=new WeakMap,U=e=>"sc-"+e,L=(e,t,...n)=>{let o,s,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!k(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,C);const f={t:0,i:e,u:c.length>0?c:null,$:void 0,p:t};return f.h=o,f.g=s,f},x={},C={forEach:(e,t)=>e.map(E).forEach(t),map:(e,t)=>e.map(E).map(t).map(A)},E=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.l}),A=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,l:e.vtext}),P=(e,t,o,s,l,r)=>{if(o!==s)if("class"!==t||l)if("style"===t){for(const t in o)s&&null!=s[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in s)o&&s[t]===o[t]||(t.includes("-")?e.style.setProperty(t,s[t]):e.style[t]=s[t])}else if("key"===t);else if("ref"===t)s&&s(e);else if(t.startsWith("on")&&!c(e,t))t=c(e,j(t))?j(t.substring(2)):j(t[2])+t.substring(3),o&&n.rel(e,t,o,!1),s&&n.ael(e,t,s,!1);else{const n=c(e,t),o=k(s);if((n||o&&null!==s)&&!l)try{e[t]=null==s&&-1===e.tagName.indexOf("-")?"":s}catch(e){}null==s||!1===s?e.removeAttribute(t):(!n||4&r||l)&&!o&&(s=!0===s?"":s.toString(),e.setAttribute(t,s))}else{const t=T(o),n=T(e.className).filter(e=>!t.includes(e));e.className=n.concat(T(s).filter(e=>!n.includes(e))).join(" ")}},T=e=>e?e.split(" "):[],F=(e,t,n,o)=>{const s=11===t.$.nodeType&&t.$.host?t.$.host:t.$,l=e&&e.p||_,r=t.p||_;for(o in l)null==r[o]&&null!=l[o]&&P(s,o,l[o],void 0,n,t.t);for(o in r)P(s,o,l[o],r[o],n,t.t)};let N,W,q,B=!1,H=!1,V=!1;const z=(e,n,o,s)=>{let l,r,i,c=n.u[o],a=0;if(B||(V=!0,"slot"===c.i&&(N&&s.classList.add(N+"-s"),c.t|=c.u?2:1)),v(c.l))c.$=t.createTextNode(c.l);else if(1&c.t)c.$=t.createTextNode("");else if(l=c.$=t.createElement(2&c.t?"slot-fb":c.i),F(null,c,!1),v(N)&&l["s-si"]!==N&&l.classList.add(l["s-si"]=N),c.u)for(a=0;a<c.u.length;++a)(r=z(e,c,a,l))&&l.appendChild(r);return c.$["s-hn"]=q,3&c.t&&(c.$["s-sr"]=!0,c.$["s-cr"]=W,c.$["s-sn"]=c.g||"",(i=e&&e.u&&e.u[o])&&i.i===c.i&&e.$&&D(e.$,!1)),c.$},D=(e,t)=>{n.t|=1;const o=e.childNodes;for(let e=o.length-1;e>=0;e--){const n=o[e];n["s-hn"]!==q&&n["s-ol"]&&(Q(n).insertBefore(n,K(n)),n["s-ol"].remove(),n["s-ol"]=void 0,V=!0),t&&D(n,t)}n.t&=-2},G=(e,t,n,o,s,l)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&j(i.tagName)===q&&(i=i.shadowRoot);s<=l;++s)o[s]&&(r=z(null,n,s,e))&&(o[s].$=r,i.insertBefore(r,K(t)))},I=(e,t,n,o)=>{for(;t<=n;++t)v(e[t])&&(o=e[t].$,te(e[t],!0),H=!0,o["s-ol"]?o["s-ol"].remove():D(o,!0),o.remove())},J=(e,t)=>e.i===t.i&&("slot"===e.i?e.g===t.g:e.h===t.h),K=e=>e&&e["s-ol"]||e,Q=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,X=(e,t)=>{const n=t.$=e.$,o=e.u,s=t.u;let l;v(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||F(e,t,!1),v(o)&&v(s)?((e,t,n,o)=>{let s,l,r=0,i=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],d=o.length-1,p=o[0],y=o[d];for(;r<=f&&i<=d;)if(null==u)u=t[++r];else if(null==$)$=t[--f];else if(null==p)p=o[++i];else if(null==y)y=o[--d];else if(J(u,p))X(u,p),u=t[++r],p=o[++i];else if(J($,y))X($,y),$=t[--f],y=o[--d];else if(J(u,y))"slot"!==u.i&&"slot"!==y.i||D(u.$.parentNode,!1),X(u,y),e.insertBefore(u.$,$.$.nextSibling),u=t[++r],y=o[--d];else if(J($,p))"slot"!==u.i&&"slot"!==y.i||D($.$.parentNode,!1),X($,p),e.insertBefore($.$,u.$),$=t[--f],p=o[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&v(t[a].h)&&t[a].h===p.h){c=a;break}c>=0?((l=t[c]).i!==p.i?s=z(t&&t[i],n,c,e):(X(l,p),t[c]=void 0,s=l.$),p=o[++i]):(s=z(t&&t[i],n,i,e),p=o[++i]),s&&Q(u.$).insertBefore(s,K(u.$))}r>f?G(e,null==o[d+1]?null:o[d+1].$,n,o,i,d):i>d&&I(t,r,f)})(n,o,t,s):v(s)?(v(e.l)&&(n.textContent=""),G(n,null,t,s,0,s.length-1)):v(o)&&I(o,0,o.length-1))},Y=(e,t,n,o,s,l,r,i)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}Y(t)}},Z=[],ee=e=>{let t,n,o,s,l=e.childNodes,r=l.length,i=0,c=0,a=0;for(r=l.length;i<r;i++){if((t=l[i])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],c=(o=n.parentNode.childNodes).length-1;c>=0;c--)(n=o[c])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(a=n.nodeType)||8===a)&&""===s||1===a&&null===n.getAttribute("slot")&&""===s||1===a&&n.getAttribute("slot")===s)&&(Z.some(e=>e.nodeToRelocate===n)||(H=!0,n["s-sn"]=s,Z.push({slotRefNode:t,nodeToRelocate:n})));1===t.nodeType&&ee(t)}},te=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{te(e,t)}))},ne=async(e,t,n,o)=>{t.t|=16;const s=t.s;g(()=>oe(e,t,n,s,o))},oe=(e,s,l,r,i)=>{s.t&=-17,e["s-lr"]=!1,i&&((e,n)=>{const s=((e,o,s,l)=>{let r=U(n._),i=f.get(r);if(e=11===e.nodeType?e:t,i)if("string"==typeof i){let n,o=O.get(e=e.head||e);if(o||O.set(e,o=new Set),!o.has(r)){if(u){const e=(n=u.createHostStyle(l,r,i))["s-sc"];e&&(r=e,o=null)}else(n=t.createElement("style")).innerHTML=i;e.insertBefore(n,e.querySelector("link")),o&&o.add(r)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]);return r})(o&&e.shadowRoot?e.shadowRoot:e.getRootNode(),0,0,e);10&n.t&&(e["s-sc"]=s,e.classList.add(s+"-h"))})(e,l),s.t|=4;try{((e,s,l,r)=>{const i=s.v||{t:0};if(q=j(e.tagName),(e=>e&&e.i===x)(r)?r.i=null:r=L(null,null,r),r.t|=4,s.v=r,r.$=i.$=e.shadowRoot||e,N=e["s-sc"],W=e["s-cr"],B=o&&0!=(1&l.t),V=H=!1,X(i,r),V){ee(r.$);for(let e=0;e<Z.length;e++){const n=Z[e];if(!n.nodeToRelocate["s-ol"]){const e=t.createTextNode("");e["s-nr"]=n.nodeToRelocate,n.nodeToRelocate.parentNode.insertBefore(n.nodeToRelocate["s-ol"]=e,n.nodeToRelocate)}}n.t|=1;for(let e=0;e<Z.length;e++){const t=Z[e],n=t.slotRefNode.parentNode;let o=t.slotRefNode.nextSibling,s=t.nodeToRelocate["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e&&e["s-sn"]===t.nodeToRelocate["s-sn"]&&n===e.parentNode&&(e=e.nextSibling)&&e&&!e["s-nr"]){o=e;break}}(!o&&n!==t.nodeToRelocate.parentNode||t.nodeToRelocate.nextSibling!==o)&&t.nodeToRelocate!==o&&n.insertBefore(t.nodeToRelocate,o)}n.t&=-2}H&&Y(r.$),Z.length=0})(e,s,l,r.render())}catch(e){a(e)}s.t&=-5,u&&u.updateHost(e),e["s-lr"]=!0,s.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),se(e,s)},se=(e,o,s)=>{if(!e["s-al"]){const l=o.s,r=o.j;512&o.t||(o.t|=512,e.classList.add("hydrated"),(async e=>{if(e&&e.componentDidLoad)try{await e.componentDidLoad()}catch(e){a(e)}})(l),o.k(e),r||(t.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999))),r&&((s=r["s-al"])&&(s.delete(e),0===s.size&&(r["s-al"]=void 0,r["s-init"]())),o.j=void 0)}},le=(e,t,n)=>{if(t.S){const o=Object.entries(t.S),s=e.prototype;if(o.forEach(([e,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,e,{get(){return((e,t)=>r(e).R.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=r(this),l=s.M,i=s.R.get(t),c=s.t;(n=((e,t)=>null==e||k(e)?e:1&t?String(e):e)(n,o.S[t][0]))===i||8&c&&void 0!==i||(s.R.set(t,n),s.s&&2==(22&c)&&ne(l,s,o,!1))})(0,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,e,{value(...t){const n=r(this);return n.O.then(()=>n.s[e](...t))}})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,o){const s=t.get(e);this[s]=(null!==o||"boolean"!=typeof this[s])&&o},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,n])=>{const o=n[1]||e;return t.set(o,e),o})}}return e},re=async(e,t,n,o,l)=>{if(0==(256&t.t)){t.t|=256,(l=await(e=>__sc_import_core_playground(`./${e.U}.entry.js`).then(t=>t[e._.replace(/-/g,"_")],a))(n)).isProxied||(le(l,n,2),l.isProxied=!0),t.t|=8;try{new l(t)}catch(e){a(e)}if(t.t&=-9,ie(t.s),!l.isStyleRegistered&&l.style){let e=l.style,t=U(n._);8&n.t&&(e=await __sc_import_core_playground("./p-549b16dd.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let o=f.get(e);s&&n?(o=o||new CSSStyleSheet).replace(t):o=t,f.set(e,o)})(t,e,!!(1&n.t)),l.isStyleRegistered=!0}}const r=t.j;r&&!r["s-lr"]&&r["s-rc"]?r["s-rc"].push(()=>re(e,t,n)):ne(e,t,n,!0)},ie=()=>{},ce=(s,i={})=>{const c=[],a=i.exclude||[],f=t.head,$=e.customElements,d=f.querySelector("meta[charset]"),p=t.createElement("style");Object.assign(n,i),n.o=new URL(i.resourcesUrl||"/",e.location.href).href,i.syncQueue&&(n.t|=4),s.forEach(e=>e[1].forEach(s=>{const i={t:s[0],_:s[1],S:s[2],L:s[3]};!o&&1&i.t&&(i.t|=8);const f=i._;i.U=e[0],a.includes(f)||$.get(f)||(c.push(f),$.define(f,le(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,M:e,R:new Map};t.O=new Promise(e=>t.k=e),l.set(e,t)}})(e),1&i.t&&(o?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){((e,o)=>{if(0==(1&n.t)){const n=r(e);if(!(1&n.t)){let s;n.t|=1,s||(4&o.t||8&o.t)&&((e,n)=>{let o;o="",(n=e["s-cr"]=t.createComment(""))["s-cn"]=!0,e.insertBefore(n,e.firstChild)})(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!t["s-lr"]){n.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}o.S&&Object.entries(o.S).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),re(e,n,o)}ie(n.s)}})(this,i)}disconnectedCallback(){0==(1&n.t)&&u&&u.removeHost(this)}"s-init"(){const e=r(this);e.s&&se(this,e)}"s-hmr"(e){}forceUpdate(){ne(this,r(this),i,!1)}componentOnReady(){return r(this).O}},i,1)))})),p.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",p.setAttribute("data-styles",""),f.insertBefore(p,d?d.nextSibling:f.firstChild)},ae=(e,t,n)=>{const o=fe(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},fe=e=>r(e).M;export{S as a,ce as b,ae as c,fe as g,L as h,R as p,i as r};