const Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};Ue();const R={},je=(e,t)=>e===t,Ye=Symbol("solid-track"),Z={equals:je};let Ke=De;const q={},H=1,z=2,Ee={owned:null,cleanups:null,context:null,owner:null};var S=null;let V=null,v=null,K=null,x=null,M=null,ue=0;function se(e,t){const n=v,i=S,o=e.length===0?Ee:{owned:null,cleanups:null,context:null,owner:t||i};S=o,v=null;try{return fe(()=>e(()=>de(o)),!0)}finally{v=n,S=i}}function A(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,pending:q,comparator:t.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.pending!==q?n.pending:n.value)),ce(n,o));return[Me.bind(n),i]}function B(e,t,n){const i=Re(e,t,!1,H);oe(i)}function I(e,t,n){n=n?Object.assign({},Z,n):Z;const i=Re(e,t,!0,0);return i.pending=q,i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,oe(i),Me.bind(i)}function He(e){if(K)return e();let t;const n=K=[];try{t=e()}finally{K=null}return fe(()=>{for(let i=0;i<n.length;i+=1){const o=n[i];if(o.pending!==q){const l=o.pending;o.pending=q,ce(o,l)}}},!1),t}function ie(e){let t,n=v;return v=null,t=e(),v=n,t}function Be(e){return S===null||(S.cleanups===null?S.cleanups=[e]:S.cleanups.push(e)),e}function Me(){const e=V;if(this.sources&&(this.state||e)){const t=x;x=null,this.state===H||e?oe(this):ee(this),x=t}if(v){const t=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(t)):(v.sources=[this],v.sourceSlots=[t]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function ce(e,t,n){if(K)return e.pending===q&&K.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let i=!1;return e.value=t,e.observers&&e.observers.length&&fe(()=>{for(let o=0;o<e.observers.length;o+=1){const l=e.observers[o];i&&V.disposed.has(l),(i&&!l.tState||!i&&!l.state)&&(l.pure?x.push(l):M.push(l),l.observers&&Le(l)),i||(l.state=H)}if(x.length>1e6)throw x=[],new Error},!1),t}function oe(e){if(!e.fn)return;de(e);const t=S,n=v,i=ue;v=S=e,Ve(e,e.value,i),v=n,S=t}function Ve(e,t,n){let i;try{i=e.fn(t)}catch(o){Oe(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ce(e,i):e.value=i,e.updatedAt=n)}function Re(e,t,n,i,o){const l={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:S,context:null,pure:n};return S===null||S!==Ee&&(S.owned?S.owned.push(l):S.owned=[l]),l}function Ie(e){const t=V;if(e.state===0||t)return;if(e.state===z||t)return ee(e);if(e.suspense&&ie(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===H||t)oe(e);else if(e.state===z||t){const o=x;x=null,ee(e,n[0]),x=o}}function fe(e,t){if(x)return e();let n=!1;t||(x=[]),M?n=!0:M=[],ue++;try{const i=e();return Qe(n),i}catch(i){Oe(i)}finally{x=null,n||(M=null)}}function Qe(e){x&&(De(x),x=null),!e&&(M.length?He(()=>{Ke(M),M=null}):M=null)}function De(e){for(let t=0;t<e.length;t++)Ie(e[t])}function ee(e,t){const n=V;e.state=0;for(let i=0;i<e.sources.length;i+=1){const o=e.sources[i];o.sources&&(o.state===H||n?o!==t&&Ie(o):(o.state===z||n)&&ee(o,t))}}function Le(e){const t=V;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=z,i.pure?x.push(i):M.push(i),i.observers&&Le(i))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const l=o.pop(),r=n.observerSlots.pop();i<o.length&&(l.sourceSlots[r]=i,o[i]=l,n.observerSlots[i]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Oe(e){throw e}const Pe=Symbol("fallback");function Ce(e){for(let t=0;t<e.length;t++)e[t]()}function Xe(e,t,n={}){let i=[],o=[],l=[],r=[],s=0,a;return Be(()=>Ce(l)),()=>{const b=e()||[];return b[Ye],ie(()=>{if(b.length===0)return s!==0&&(Ce(l),l=[],i=[],o=[],s=0,r=[]),n.fallback&&(i=[Pe],o[0]=se(c=>(l[0]=c,n.fallback())),s=1),o;for(i[0]===Pe&&(l[0](),l=[],i=[],o=[],s=0),a=0;a<b.length;a++)a<i.length&&i[a]!==b[a]?r[a](()=>b[a]):a>=i.length&&(o[a]=se(h));for(;a<i.length;a++)l[a]();return s=r.length=l.length=b.length,i=b.slice(0),o=o.slice(0,s)});function h(c){l[a]=c;const[d,g]=A(b[a]);return r[a]=g,t(d,a)}}}function w(e,t){return ie(()=>e(t||{}))}function Ae(e){const t="fallback"in e&&{fallback:()=>e.fallback};return I(Xe(()=>e.each,e.children,t||void 0))}function te(e){let t=!1;const n=I(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return I(()=>{const i=n();if(i){const o=e.children;return(t=typeof o=="function"&&o.length>0)?ie(()=>o(i)):o}return e.fallback})}function Ge(e,t,n){let i=n.length,o=t.length,l=i,r=0,s=0,a=t[o-1].nextSibling,b=null;for(;r<o||s<l;){if(t[r]===n[s]){r++,s++;continue}for(;t[o-1]===n[l-1];)o--,l--;if(o===r){const h=l<i?s?n[s-1].nextSibling:n[l-s]:a;for(;s<l;)e.insertBefore(n[s++],h)}else if(l===s)for(;r<o;)(!b||!b.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[s]===t[o-1]){const h=t[--o].nextSibling;e.insertBefore(n[s++],t[r++].nextSibling),e.insertBefore(n[--l],h),t[o]=n[l]}else{if(!b){b=new Map;let c=s;for(;c<l;)b.set(n[c],c++)}const h=b.get(t[r]);if(h!=null)if(s<h&&h<l){let c=r,d=1,g;for(;++c<o&&c<l&&!((g=b.get(t[c]))==null||g!==h+d);)d++;if(d>h-s){const P=t[r];for(;s<h;)e.insertBefore(n[s++],P)}else e.replaceChild(n[s++],t[r++])}else r++;else t[r++].remove()}}}const ke="_$DX_DELEGATE";function Je(e,t,n){let i;return se(o=>{i=o,t===document?e():y(t,e(),t.firstChild?null:void 0,n)}),()=>{i(),t.textContent=""}}function T(e,t,n){const i=document.createElement("template");i.innerHTML=e;let o=i.content.firstChild;return n&&(o=o.firstChild),o}function Fe(e,t=window.document){const n=t[ke]||(t[ke]=new Set);for(let i=0,o=e.length;i<o;i++){const l=e[i];n.has(l)||(n.add(l),t.addEventListener(l,ze))}}function Ze(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function N(e,t){t==null?e.removeAttribute("class"):e.className=t}function y(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return ne(e,t,i,n);B(o=>ne(e,t(),o,n),i)}function ze(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),R.registry&&!R.done&&(R.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));n!==null;){const i=n[t];if(i&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?i(o,e):i(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ne(e,t,n,i,o){for(R.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=i!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(R.context)return n;if(l==="number"&&(t=t.toString()),r){let s=n[0];s&&s.nodeType===3?s.data=t:s=document.createTextNode(t),n=W(e,n,i,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(R.context)return n;n=W(e,n,i)}else{if(l==="function")return B(()=>{let s=t();for(;typeof s=="function";)s=s();n=ne(e,s,n,i)}),()=>n;if(Array.isArray(t)){const s=[];if(ae(s,t,o))return B(()=>n=ne(e,s,n,i,!0)),()=>n;if(R.context){for(let a=0;a<s.length;a++)if(s[a].parentNode)return n=s}if(s.length===0){if(n=W(e,n,i),r)return n}else Array.isArray(n)?n.length===0?Te(e,s,i):Ge(e,n,s):(n&&W(e),Te(e,s));n=s}else if(t instanceof Node){if(R.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=W(e,n,i,t);W(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n){let i=!1;for(let o=0,l=t.length;o<l;o++){let r=t[o],s;if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))i=ae(e,r)||i;else if((s=typeof r)=="string")e.push(document.createTextNode(r));else if(s==="function")if(n){for(;typeof r=="function";)r=r();i=ae(e,Array.isArray(r)?r:[r])||i}else e.push(r),i=!0;else e.push(document.createTextNode(r.toString()))}return i}function Te(e,t,n){for(let i=0,o=t.length;i<o;i++)e.insertBefore(t[i],n)}function W(e,t,n,i){if(n===void 0)return e.textContent="";const o=i||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const s=t[r];if(o!==s){const a=s.parentNode===e;!l&&!r?a?e.replaceChild(o,s):e.insertBefore(o,n):a&&s.remove()}else l=!0}}else e.insertBefore(o,n);return[o]}const et="_App_17yrd_1",tt="_header_17yrd_11",nt="_pyramid_17yrd_18",it="_stats_17yrd_22",ot="_info_17yrd_26",lt="_bottomButtons_17yrd_31",rt="_newsTicker_17yrd_36",st="_numbers_17yrd_43",at="_red_17yrd_47";var E={App:et,header:tt,pyramid:nt,stats:it,info:ot,bottomButtons:lt,newsTicker:rt,numbers:st,red:at};const ut=T("<table></table>"),ct=T("<tr></tr>"),ft=T("<span>%</span>"),dt=T('<td><div class="bar"></div></td>'),ht=T('<td><span class="bar-label"> - </span></td>'),pt=e=>{const t=I(()=>{let o={};for(let l in e.people){const r=e.people[l];o[r.age]||(o[r.age]=[]),o[r.age].push(r)}return o}),n=I(()=>Object.keys(t()).reverse()),i=I(()=>{let o=0;for(let l in e.people)o=Math.max(o,e.people[l].percentage(e.people));return o});return(()=>{const o=ut.cloneNode(!0);return o.style.setProperty("display","block"),o.style.setProperty("row-gap","10px"),o.style.setProperty("margin","auto"),o.style.setProperty("min-width","400px"),y(o,w(Ae,{get each(){return n()},children:(l,r)=>(()=>{const s=ct.cloneNode(!0);return y(s,w(Ae,{get each(){return t()[l()]},children:(a,b)=>[(()=>{const h=dt.cloneNode(!0),c=h.firstChild;return c.style.setProperty("height","20px"),c.style.setProperty("display","block"),c.style.setProperty("transition","0.4s ease"),c.style.setProperty("will-change","width"),y(c,w(te,{get when(){return a().percentage(e.people)>1},get children(){const d=ft.cloneNode(!0),g=d.firstChild;return d.style.setProperty("color","black"),y(d,()=>Math.round(a().percentage(e.people)*10)/10,g),d}})),B(d=>{const g=["Men","Women"][a().gender]+" aged "+a().age+"-"+(+a().age+5)+`
`+a().percentage(e.people).toPrecision(5)+`% of total
`+a().population.toLocaleString("en-US")+" people",P=a().gender==k.Male?"lightblue":"pink",_=a().percentage(e.people)/i()*150+"px",D=a().gender==k.Male?"auto":"initial",O=a().gender==k.Male?"left":"right";return g!==d._v$&&Ze(h,"title",d._v$=g),P!==d._v$2&&c.style.setProperty("background",d._v$2=P),_!==d._v$3&&c.style.setProperty("width",d._v$3=_),D!==d._v$4&&c.style.setProperty("margin-left",d._v$4=D),O!==d._v$5&&c.style.setProperty("text-align",d._v$5=O),d},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),h})(),w(te,{when:b===0,get children(){const h=ht.cloneNode(!0),c=h.firstChild,d=c.firstChild;return h.style.setProperty("text-align","center"),y(c,l,d),y(c,()=>+l()+5,null),h}})]})),s})()})),B(()=>N(o,E.pyramid)),o})()},gt=T("<ul><li>Total Population: <!> </li><ul><li>Young Population: </li><li>Working Population: </li><li>Retired Population: </li></ul><li>Crude Birth Rate: <!> </li><li>Crude Death Rate: <!> </li><li>Average Age: </li></ul>"),mt=e=>{const t=I(()=>{let n=0,i=0;for(const o of e.people)n+=o.age*o.population,i+=o.population;return Math.round(n/i*100)/100});return(()=>{const n=gt.cloneNode(!0),i=n.firstChild,o=i.firstChild,l=o.nextSibling;l.nextSibling;const r=i.nextSibling,s=r.firstChild;s.firstChild;const a=s.nextSibling;a.firstChild;const b=a.nextSibling;b.firstChild;const h=r.nextSibling,c=h.firstChild,d=c.nextSibling;d.nextSibling;const g=h.nextSibling,P=g.firstChild,_=P.nextSibling;_.nextSibling;const D=g.nextSibling;return D.firstChild,y(i,()=>e.population.toLocaleString("en-US"),l),y(i,()=>e.populationTrend==0?"\u2796":e.populationTrend==1?"\u2B06\uFE0F":"\u2B07\uFE0F",null),y(s,()=>e.youngPopulation.toLocaleString("en-US"),null),y(a,()=>e.workingPopulation.toLocaleString("en-US"),null),y(b,()=>e.retiredPopulation.toLocaleString("en-US"),null),y(h,()=>(e.births/(e.population/1e3)).toPrecision(4),d),y(g,()=>(e.deaths/(e.population/1e3)).toPrecision(4),_),y(D,t,null),B(()=>N(n,E.stats)),n})()},bt=T('<marquee direction="left"></marquee>'),yt=e=>(()=>{const t=bt.cloneNode(!0);return y(t,()=>e.newsStory),B(()=>N(t,E.newsTicker)),t})(),$t=T(`<div><h1>What is a Population Pyramid?</h1><p>A population pyramid is a graphic used by demographers and geographers to determine demographic information about a country. It shows the population of each age group (also called a cohort) in a country compared to the other age groups. Then, males and females are divided to show other demographic trends. Population pyramids can help demographers understand the makeup of a country and can make inferences about recent events in a country's history, like a war, famine, epidemic, or a heavy demand for immigrant labor.</p><h1>What are the metrics shown to the right of the pyramid?</h1><b>Crude Birth Rate:</b><p>The amount of births per 1000 people in a country.</p><b>Crude Death Rate:</b><p>The amount of deaths per 1000 people in a country.</p><b>Shortcomings:</b><p>Crude birth rate (CBR) and crude death rate (CDR) can give some useful infrmation about a country, but these metrics typically don't tell the full story. This is why composite metrics like total fertility rate (TFR) are used. This metric measures the amount of children born per woman, assuming every woman lives through her child-bearing years.</p><h1>What do different pyramid shapes mean?</h1><p><b>Pyramid</b>: A rapidly-growing country with a very young population. Typically represents a less-developed country.</p><p><b>Inverted Pyramid</b>: A stage 4/5 country (see the <a href="https://en.wikipedia.org/wiki/Demographic_transition">DTM</a>); one that is declining in population and has a very high average age.</p><p><b>Column</b>: A shape in between a pyramid and an inverted pyramid. These countries are more developed and have not started to decline.</p><p><b>Asymmetric Shape</b>: Asymmetry can represent many things. For example, in the United Arab Emirates, there is a much greater population of men than women because of high demand for immigrant construction jobs in the country. Most of these people are temporary workers who will return home someday.</p></div>`),vt=()=>(()=>{const e=$t.cloneNode(!0);return B(()=>N(e,E.info)),e})(),_t=T("<div><h1>Policies and Actions</h1><button>Pronatalist Policy</button><button>Antinatalist Policy</button><button>Open-border Policy</button><button>Closed-border Policy</button><button>War</button><br><button>Skip 10 Years</button><button>Skip 100 Years</button><button>Randomize</button><button>Uniform</button></div>"),wt=e=>(()=>{const t=_t.cloneNode(!0),n=t.firstChild,i=n.nextSibling,o=i.nextSibling,l=o.nextSibling,r=l.nextSibling,s=r.nextSibling,a=s.nextSibling,b=a.nextSibling,h=b.nextSibling,c=h.nextSibling,d=c.nextSibling;return i.$$click=()=>{e.setBirthRate(.06)},o.$$click=()=>{e.setBirthRate(.03),e.setEmigration(1e3)},l.$$click=()=>{e.setImmigration(6e3)},r.$$click=()=>{e.setImmigration(100)},s.$$click=()=>{e.setEvent(L.War,Math.floor(Math.random()*5)+3)},b.$$click=()=>{for(let g=0;g<10;g++)e.tick()},h.$$click=()=>{for(let g=0;g<100;g++)e.tick()},c.$$click=()=>{const P=e.population/e.people.length;for(let _=0;_<e.people.length;_++)e.people[_].population=Math.floor(Math.random()*P*2)},d.$$click=()=>{const P=e.population/e.people.length;for(let _=0;_<e.people.length;_++)e.people[_].population=P},B(g=>{const P=E.bottomButtons,_=E.red;return P!==g._v$&&N(t,g._v$=P),_!==g._v$2&&N(s,g._v$2=_),g},{_v$:void 0,_v$2:void 0}),t})();Fe(["click"]);const St=T("<div><button>\u2B06</button><span></span><button>\u2B07</button><span></span></div>"),Y=e=>(()=>{const t=St.cloneNode(!0),n=t.firstChild,i=n.nextSibling,o=i.nextSibling,l=o.nextSibling;return n.$$click=()=>{e.setter(e.number+e.increment)},i.style.setProperty("display","inline-block"),i.style.setProperty("min-width","50px"),i.style.setProperty("text-align","center"),y(i,()=>Math.round(e.number*1e3)/1e3),o.$$click=()=>{e.setter(e.number-e.increment)},y(l,()=>e.name),t})();Fe(["click"]);const xt=T("<div><header><h1>Popusim\u2122 - </h1></header><div></div></div>"),Pt=T("<div><header><h1>You Failed!</h1><p>Somehow you managed to make your whole country die. Great job!</p></header></div>");let k;(function(e){e[e.Male=0]="Male",e[e.Female=1]="Female"})(k||(k={}));class Ne{constructor(t,n,i=t===0?1e6:0){this.age=t,this.population=i,this.gender=n}getTotalPopulation(t,n){let i=0;for(let o in n)i+=n[o].population;return i}percentage(t){return this.population/this.getTotalPopulation(this.gender,t)*100}}let L;(function(e){e[e.War=0]="War",e[e.BabyBoom=1]="BabyBoom"})(L||(L={}));const Ct=()=>{function e(){let m=[];return[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95].map($=>{m.push(new Ne($,k.Male)),m.push(new Ne($,k.Female))}),m}const[t,n]=A(e(),{equals:!1}),[i,o]=A(2022),[l,r]=A(1),[s,a]=A(""),[b,h]=A([]),[c,d]=A(0),[g,P]=A(0),[_,D]=A(0),[O,he]=A(.01),[F,pe]=A(.04),[ge,me]=A(1e3),[be,ye]=A(200),[le,$e]=A(.55),ve=(m,$)=>{let p=b();p.push({type:m,duration:$}),h(p)};function Q(){var m=0;for(var $ in t())m+=t()[$].population;return m}function re(m,$){var p=0;for(var u in t())t()[u].age>=m&&t()[u].age<=$&&(p+=t()[u].population);return p}const We=()=>{let m=0,$=0;for(const p of b()){if(p.duration--,console.log("processing event "+p),p.duration<=0){let u=b();u.splice(u.indexOf(p),1),h(u),a(""),console.log(`Event ended: ${p}; type ${p.type}`),p.type==L.War&&ve(L.BabyBoom,10);continue}if(p.type==L.War){a("War has broken out!");for(const u of t())u.age>15&&u.age<30&&u.gender==k.Male&&($+=u.population/(1/.25),u.population*=.25)}else if(p.type==L.BabyBoom){a("After the war, people are having many more kids!");for(const u of t())u.age>15&&u.age<45&&(m+=u.population*F(),u.population+=u.population*F())}}return{eventBirths:m,eventDeaths:$}},_e=function(){const m=Q();let $=0,p=0,u=0;o(i()+1);for(let f in t()){let J=t()[f],j=Math.ceil(J.population/5);if(j===0)continue;J.population-=j;let xe=t()[+f+2];xe!==void 0?xe.population+=j:p++}for(const f of t()){const J=f.gender==k.Male?O()*1.2:O(),j=f.population;f.population*=1-f.age/(1/J*10),p+=j-f.population}for(const f of t())f.age>=20&&f.age<=45&&f.gender==k.Female&&(t()[0].population+=F()*f.population,t()[1].population+=F()*f.population,$+=F()*f.population*2,u+=f.gender==k.Female?f.population:0),f.age==0&&(f.population*=1-le()/5,p+=le()/5);const C=ge()*Math.random(),U=be()*Math.random();for(const f of t())f.age>=20&&f.age<=30?f.population+=f.gender==k.Female?C*.5:C:f.age>=15&&f.age<=25&&(f.population-=f.gender==k.Female?U*.5:U);const{eventBirths:X,eventDeaths:G}=We();$+=X,p+=G;for(const f of t())f.population=Math.floor(f.population<0?0:f.population);n(t());const Se=Q()-m;r(Math.abs(Se)<5e3?0:Se>0?1:-1),d($),P(p),D(u)},we=I(()=>{for(const m of t())if(m.population>0)return!0;return!1}),qe=setInterval(_e,750);return Be(()=>clearInterval(qe)),[w(te,{get when(){return we()},get children(){return[w(yt,{get newsStory(){return s()}}),(()=>{const m=xt.cloneNode(!0),$=m.firstChild,p=$.firstChild;p.firstChild;const u=$.nextSibling;return y(p,i,null),y(m,w(pt,{get people(){return t()}}),u),y(m,w(mt,{get people(){return t()},get populationTrend(){return l()},get population(){return Q()},get youngPopulation(){return re(0,15)},get workingPopulation(){return re(20,60)},get retiredPopulation(){return re(65,95)},get births(){return c()},get deaths(){return g()},get childbearers(){return _()}}),u),y(m,w(wt,{get people(){return t()},setEvent:ve,tick:_e,setBirthRate:pe,setDeathRate:he,setImmigration:me,setEmigration:ye,setIMR:$e,get population(){return Q()}}),u),y(u,w(Y,{get number(){return F()},setter:pe,increment:.01,name:"Birth Rate"}),null),y(u,w(Y,{get number(){return O()},setter:he,increment:.01,name:"Death Rate"}),null),y(u,w(Y,{get number(){return ge()},setter:me,increment:100,name:"Immigrants"}),null),y(u,w(Y,{get number(){return be()},setter:ye,increment:100,name:"Emigrants"}),null),y(u,w(Y,{get number(){return le()},setter:$e,increment:.05,name:"Infant Mortality"}),null),y(m,w(vt,{}),null),B(C=>{const U=E.App,X=E.header,G=E.numbers;return U!==C._v$&&N(m,C._v$=U),X!==C._v$2&&N($,C._v$2=X),G!==C._v$3&&N(u,C._v$3=G),C},{_v$:void 0,_v$2:void 0,_v$3:void 0}),m})()]}}),w(te,{get when(){return!we()},get children(){const m=Pt.cloneNode(!0),$=m.firstChild;return B(p=>{const u=E.App,C=E.header;return u!==p._v$4&&N(m,p._v$4=u),C!==p._v$5&&N($,p._v$5=C),p},{_v$4:void 0,_v$5:void 0}),m}})]};Je(()=>w(Ct,{}),document.getElementById("root"));
