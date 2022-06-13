const Ge=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};Ge();const F={},Je=(e,n)=>e===n,Qe=Symbol("solid-track"),ue={equals:Je};let Xe=Ue;const G={},ne=1,ce=2,qe={owned:null,cleanups:null,context:null,owner:null};var C=null;let ie=null,w=null,te=null,A=null,q=null,ve=0;function me(e,n){const t=w,i=C,o=e.length===0?qe:{owned:null,cleanups:null,context:null,owner:n||i};C=o,w=null;try{return Se(()=>e(()=>we(o)),!0)}finally{w=t,C=i}}function L(e,n){n=n?Object.assign({},ue,n):ue;const t={value:e,observers:null,observerSlots:null,pending:G,comparator:n.equals||void 0},i=o=>(typeof o=="function"&&(o=o(t.pending!==G?t.pending:t.value)),ye(t,o));return[Oe.bind(t),i]}function N(e,n,t){const i=Fe(e,n,!1,ne);pe(i)}function W(e,n,t){t=t?Object.assign({},ue,t):ue;const i=Fe(e,n,!0,0);return i.pending=G,i.observers=null,i.observerSlots=null,i.comparator=t.equals||void 0,pe(i),Oe.bind(i)}function Ze(e){if(te)return e();let n;const t=te=[];try{n=e()}finally{te=null}return Se(()=>{for(let i=0;i<t.length;i+=1){const o=t[i];if(o.pending!==G){const r=o.pending;o.pending=G,ye(o,r)}}},!1),n}function ge(e){let n,t=w;return w=null,n=e(),w=t,n}function De(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function Oe(){const e=ie;if(this.sources&&(this.state||e)){const n=A;A=null,this.state===ne||e?pe(this):fe(this),A=n}if(w){const n=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(n)):(w.sources=[this],w.sourceSlots=[n]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function ye(e,n,t){if(te)return e.pending===G&&te.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let i=!1;return e.value=n,e.observers&&e.observers.length&&Se(()=>{for(let o=0;o<e.observers.length;o+=1){const r=e.observers[o];i&&ie.disposed.has(r),(i&&!r.tState||!i&&!r.state)&&(r.pure?A.push(r):q.push(r),r.observers&&je(r)),i||(r.state=ne)}if(A.length>1e6)throw A=[],new Error},!1),n}function pe(e){if(!e.fn)return;we(e);const n=C,t=w,i=ve;w=C=e,ze(e,e.value,i),w=t,C=n}function ze(e,n,t){let i;try{i=e.fn(n)}catch(o){Ye(o)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?ye(e,i):e.value=i,e.updatedAt=t)}function Fe(e,n,t,i,o){const r={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:C,context:null,pure:t};return C===null||C!==qe&&(C.owned?C.owned.push(r):C.owned=[r]),r}function We(e){const n=ie;if(e.state===0||n)return;if(e.state===ce||n)return fe(e);if(e.suspense&&ge(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ve);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===ne||n)pe(e);else if(e.state===ce||n){const o=A;A=null,fe(e,t[0]),A=o}}function Se(e,n){if(A)return e();let t=!1;n||(A=[]),q?t=!0:q=[],ve++;try{const i=e();return et(t),i}catch(i){Ye(i)}finally{A=null,t||(q=null)}}function et(e){A&&(Ue(A),A=null),!e&&(q.length?Ze(()=>{Xe(q),q=null}):q=null)}function Ue(e){for(let n=0;n<e.length;n++)We(e[n])}function fe(e,n){const t=ie;e.state=0;for(let i=0;i<e.sources.length;i+=1){const o=e.sources[i];o.sources&&(o.state===ne||t?o!==n&&We(o):(o.state===ce||t)&&fe(o,n))}}function je(e){const n=ie;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=ce,i.pure?A.push(i):q.push(i),i.observers&&je(i))}}function we(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),o=t.observers;if(o&&o.length){const r=o.pop(),l=t.observerSlots.pop();i<o.length&&(r.sourceSlots[l]=i,o[i]=r,t.observerSlots[i]=l)}}if(e.owned){for(n=0;n<e.owned.length;n++)we(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Ye(e){throw e}const ke=Symbol("fallback");function Te(e){for(let n=0;n<e.length;n++)e[n]()}function tt(e,n,t={}){let i=[],o=[],r=[],l=[],s=0,u;return De(()=>Te(r)),()=>{const f=e()||[];return f[Qe],ge(()=>{if(f.length===0)return s!==0&&(Te(r),r=[],i=[],o=[],s=0,l=[]),t.fallback&&(i=[ke],o[0]=me(v=>(r[0]=v,t.fallback())),s=1),o;for(i[0]===ke&&(r[0](),r=[],i=[],o=[],s=0),u=0;u<f.length;u++)u<i.length&&i[u]!==f[u]?l[u](()=>f[u]):u>=i.length&&(o[u]=me(d));for(;u<i.length;u++)r[u]();return s=l.length=r.length=f.length,i=f.slice(0),o=o.slice(0,s)});function d(v){r[u]=v;const[$,a]=L(f[u]);return l[u]=a,n($,u)}}}function x(e,n){return ge(()=>e(n||{}))}function Ne(e){const n="fallback"in e&&{fallback:()=>e.fallback};return W(tt(()=>e.each,e.children,n||void 0))}function de(e){let n=!1;const t=W(()=>e.when,void 0,{equals:(i,o)=>n?i===o:!i==!o});return W(()=>{const i=t();if(i){const o=e.children;return(n=typeof o=="function"&&o.length>0)?ge(()=>o(i)):o}return e.fallback})}function nt(e,n,t){let i=t.length,o=n.length,r=i,l=0,s=0,u=n[o-1].nextSibling,f=null;for(;l<o||s<r;){if(n[l]===t[s]){l++,s++;continue}for(;n[o-1]===t[r-1];)o--,r--;if(o===l){const d=r<i?s?t[s-1].nextSibling:t[r-s]:u;for(;s<r;)e.insertBefore(t[s++],d)}else if(r===s)for(;l<o;)(!f||!f.has(n[l]))&&n[l].remove(),l++;else if(n[l]===t[r-1]&&t[s]===n[o-1]){const d=n[--o].nextSibling;e.insertBefore(t[s++],n[l++].nextSibling),e.insertBefore(t[--r],d),n[o]=t[r]}else{if(!f){f=new Map;let v=s;for(;v<r;)f.set(t[v],v++)}const d=f.get(n[l]);if(d!=null)if(s<d&&d<r){let v=l,$=1,a;for(;++v<o&&v<r&&!((a=f.get(n[v]))==null||a!==d+$);)$++;if($>d-s){const m=n[l];for(;s<d;)e.insertBefore(t[s++],m)}else e.replaceChild(t[s++],n[l++])}else l++;else n[l++].remove()}}}const Le="_$DX_DELEGATE";function it(e,n,t){let i;return me(o=>{i=o,n===document?e():p(n,e(),n.firstChild?null:void 0,t)}),()=>{i(),n.textContent=""}}function B(e,n,t){const i=document.createElement("template");i.innerHTML=e;let o=i.content.firstChild;return t&&(o=o.firstChild),o}function He(e,n=window.document){const t=n[Le]||(n[Le]=new Set);for(let i=0,o=e.length;i<o;i++){const r=e[i];t.has(r)||(t.add(r),n.addEventListener(r,ot))}}function _e(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function b(e,n){n==null?e.removeAttribute("class"):e.className=n}function p(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return he(e,n,i,t);N(o=>he(e,n(),o,t),i)}function ot(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),F.registry&&!F.done&&(F.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const o=t[`${n}Data`];if(o!==void 0?i(o,e):i(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function he(e,n,t,i,o){for(F.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const r=typeof n,l=i!==void 0;if(e=l&&t[0]&&t[0].parentNode||e,r==="string"||r==="number"){if(F.context)return t;if(r==="number"&&(n=n.toString()),l){let s=t[0];s&&s.nodeType===3?s.data=n:s=document.createTextNode(n),t=V(e,t,i,s)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||r==="boolean"){if(F.context)return t;t=V(e,t,i)}else{if(r==="function")return N(()=>{let s=n();for(;typeof s=="function";)s=s();t=he(e,s,t,i)}),()=>t;if(Array.isArray(n)){const s=[];if($e(s,n,o))return N(()=>t=he(e,s,t,i,!0)),()=>t;if(F.context){for(let u=0;u<s.length;u++)if(s[u].parentNode)return t=s}if(s.length===0){if(t=V(e,t,i),l)return t}else Array.isArray(t)?t.length===0?Be(e,s,i):nt(e,t,s):(t&&V(e),Be(e,s));t=s}else if(n instanceof Node){if(F.context&&n.parentNode)return t=l?[n]:n;if(Array.isArray(t)){if(l)return t=V(e,t,i,n);V(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function $e(e,n,t){let i=!1;for(let o=0,r=n.length;o<r;o++){let l=n[o],s;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=$e(e,l)||i;else if((s=typeof l)=="string")e.push(document.createTextNode(l));else if(s==="function")if(t){for(;typeof l=="function";)l=l();i=$e(e,Array.isArray(l)?l:[l])||i}else e.push(l),i=!0;else e.push(document.createTextNode(l.toString()))}return i}function Be(e,n,t){for(let i=0,o=n.length;i<o;i++)e.insertBefore(n[i],t)}function V(e,n,t,i){if(t===void 0)return e.textContent="";const o=i||document.createTextNode("");if(n.length){let r=!1;for(let l=n.length-1;l>=0;l--){const s=n[l];if(o!==s){const u=s.parentNode===e;!r&&!l?u?e.replaceChild(o,s):e.insertBefore(o,t):u&&s.remove()}else r=!0}}else e.insertBefore(o,t);return[o]}const lt="_pyramid_elmuq_1",rt="_bar_elmuq_8",st="_male_elmuq_15",at="_female_elmuq_20",ut="_barLabel_elmuq_25",ct="_cohortLabel_elmuq_29";var z={pyramid:lt,bar:rt,male:st,female:at,barLabel:ut,cohortLabel:ct};const ft=B("<table></table>"),dt=B("<tr></tr>"),ht=B("<span>%</span>"),gt=B("<td><div></div></td>"),pt=B("<td> - </td>"),bt=e=>{const n=W(()=>{let l={};for(let s in e.people){const u=e.people[s];l[u.age]||(l[u.age]=[]),l[u.age].push(u)}return l}),t=W(()=>Object.keys(n()).reverse().map(l=>+l)),i=W(()=>{let l=0;for(let s in e.people)l=Math.max(l,e.people[s].percentage(e.people));return l}),o=l=>["male","female"][l.gender],r=l=>`${["Men","Women"][l.gender]} aged ${l.age}-${+l.age+5}
${l.percentage(e.people).toPrecision(5)}% of total
${l.population.toLocaleString("en-US")} people`;return(()=>{const l=ft.cloneNode(!0);return p(l,x(Ne,{get each(){return t()},children:(s,u)=>(()=>{const f=dt.cloneNode(!0);return p(f,x(Ne,{get each(){return n()[s()]},children:(d,v)=>[(()=>{const $=gt.cloneNode(!0),a=$.firstChild;return p(a,x(de,{get when(){return d().percentage(e.people)>1},get children(){const m=ht.cloneNode(!0),y=m.firstChild;return p(m,()=>Math.round(d().percentage(e.people)*10)/10,y),N(()=>b(m,z.barLabel)),m}})),N(m=>{const y=r(d()),k=`${z.bar} ${z[o(d())]}`,M=d().percentage(e.people)/i()*150+"px";return y!==m._v$&&_e($,"title",m._v$=y),k!==m._v$2&&b(a,m._v$2=k),M!==m._v$3&&a.style.setProperty("width",m._v$3=M),m},{_v$:void 0,_v$2:void 0,_v$3:void 0}),$})(),x(de,{when:v===0,get children(){const $=pt.cloneNode(!0),a=$.firstChild;return p($,s,a),p($,()=>+s()+5,null),N(()=>b($,z.cohortLabel)),$}})]})),f})()})),N(()=>b(l,z.pyramid)),l})()},mt="_App_ocy9d_1",_t="_header_ocy9d_19",$t="_stats_ocy9d_26",vt="_numbers_ocy9d_30";var Y={App:mt,header:_t,stats:$t,numbers:vt};const yt=B("<ul><li>Total Population: <!> </li><ul><li>Young Population: </li><li>Working Population: </li><li>Retired Population: </li></ul><li>Crude Birth Rate: <!> </li><li>Crude Death Rate: <!> </li><li>Average Age: </li></ul>"),St=e=>{const n=W(()=>{let t=0,i=0;for(const o of e.people)t+=o.age*o.population,i+=o.population;return Math.round(t/i*100)/100});return(()=>{const t=yt.cloneNode(!0),i=t.firstChild,o=i.firstChild,r=o.nextSibling;r.nextSibling;const l=i.nextSibling,s=l.firstChild;s.firstChild;const u=s.nextSibling;u.firstChild;const f=u.nextSibling;f.firstChild;const d=l.nextSibling,v=d.firstChild,$=v.nextSibling;$.nextSibling;const a=d.nextSibling,m=a.firstChild,y=m.nextSibling;y.nextSibling;const k=a.nextSibling;return k.firstChild,p(i,()=>e.population.toLocaleString("en-US"),r),p(i,()=>e.populationTrend==0?"\u2796":e.populationTrend==1?"\u2B06\uFE0F":"\u2B07\uFE0F",null),p(s,()=>e.youngPopulation.toLocaleString("en-US"),null),p(u,()=>e.workingPopulation.toLocaleString("en-US"),null),p(f,()=>e.retiredPopulation.toLocaleString("en-US"),null),p(d,()=>(e.births/(e.population/1e3)).toPrecision(4),$),p(a,()=>(e.deaths/(e.population/1e3)).toPrecision(4),y),p(k,n,null),N(()=>b(t,Y.stats)),t})()},wt="_newsTicker_ni95v_1";var Ee={newsTicker:wt};const xt=B('<div><marquee direction="left"></marquee></div>'),Ct=B("<br>"),At=e=>(()=>{const n=xt.cloneNode(!0),t=n.firstChild;return p(t,()=>e.newsStory||Ct.cloneNode(!0)),N(i=>{const o=Ee.newsTicker,r=Ee.newsTicker;return o!==i._v$&&b(n,i._v$=o),r!==i._v$2&&b(t,i._v$2=r),i},{_v$:void 0,_v$2:void 0}),n})();var Pt="/popusim/assets/solidjs-logo.123b04bc.svg",kt="/popusim/assets/github-logo.7ee145a0.svg";const Tt="_info_1s3d7_1",Nt="_solidLogo_1s3d7_6",Lt="_githubLogo_1s3d7_6",Bt="_credits_1s3d7_11";var ae={info:Tt,solidLogo:Nt,githubLogo:Lt,credits:Bt};const Et=B(`<div><h1>What is a Population Pyramid?</h1><p>A population pyramid is a graphic used by demographers and geographers to determine demographic information about a country. It shows the population of each age group (also called a cohort) in a country compared to the other age groups. Then, males and females are divided to show other demographic trends. Population pyramids can help demographers understand the makeup of a country and can make inferences about recent events in a country's history, like a war, famine, epidemic, or a heavy demand for immigrant labor.</p><h1>What are the metrics shown to the right of the pyramid?</h1><b>Crude Birth Rate:</b><p>The amount of births per 1000 people in a country.</p><b>Crude Death Rate:</b><p>The amount of deaths per 1000 people in a country.</p><b>Shortcomings:</b><p>Crude birth rate (CBR) and crude death rate (CDR) can give some useful information about a country, but these metrics typically don't tell the full story. This is why composite metrics like <b>total fertility rate</b> (TFR) are used. This metric measures the amount of children born per woman, assuming every woman lives through her child-bearing years.</p><h1>What do different pyramid shapes mean?</h1><p><b>Pyramid</b>: A rapidly-growing country with a very young population. Typically represents a less-developed country.</p><p><b>Inverted Pyramid</b>: A stage 4/5 country (see the <a href="https://en.wikipedia.org/wiki/Demographic_transition">DTM</a>); one that is declining in population and has a very high average age.</p><p><b>Column</b>: A shape in between a pyramid and an inverted pyramid. These countries are more developed and have not started to decline.</p><p><b>Asymmetric Shape</b>: Asymmetry can represent many things. For example, in the United Arab Emirates, there is a much greater population of men than women because of high demand for immigrant construction jobs in the country. Most of these people are temporary workers who will return home someday.</p><p>Built with&nbsp;<a href="https://www.solidjs.com/"><img> SolidJS</a> &middot; View source on&nbsp;<a href="https://github.com/tylerswanson2/popusim"><img> GitHub</a> &middot; See&nbsp;\u{1F30E}&nbsp;<a href="https://www.populationpyramid.net/">real-world examples</a> of population pyramids.</p></div>`),Me=()=>(()=>{const e=Et.cloneNode(!0),n=e.firstChild,t=n.nextSibling,i=t.nextSibling,o=i.nextSibling,r=o.nextSibling,l=r.nextSibling,s=l.nextSibling,u=s.nextSibling,f=u.nextSibling,d=f.nextSibling,v=d.nextSibling,$=v.nextSibling,a=$.nextSibling,m=a.nextSibling,y=m.nextSibling,k=y.firstChild,M=k.nextSibling,E=M.firstChild,U=M.nextSibling,j=U.nextSibling,D=j.firstChild;return _e(E,"src",Pt),_e(D,"src",kt),N(P=>{const O=ae.info,K=ae.credits,J=ae.solidLogo,Q=ae.githubLogo;return O!==P._v$&&b(e,P._v$=O),K!==P._v$2&&b(y,P._v$2=K),J!==P._v$3&&b(E,P._v$3=J),Q!==P._v$4&&b(D,P._v$4=Q),P},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})(),Mt="_bottomButtons_gpw3h_1",Rt="_button_gpw3h_6",It="_red_gpw3h_6";var R={bottomButtons:Mt,button:Rt,red:It};const qt=B("<div><h1>Policies and Actions</h1><button>Pronatalist Policy</button><button>Antinatalist Policy</button><button>Open-border Policy</button><button>Closed-border Policy</button><button>War</button><br><button>Skip 10 Years</button><button>Skip 100 Years</button><button>Randomize</button><button>Uniform</button></div>"),Dt=e=>(()=>{const n=qt.cloneNode(!0),t=n.firstChild,i=t.nextSibling,o=i.nextSibling,r=o.nextSibling,l=r.nextSibling,s=l.nextSibling,u=s.nextSibling,f=u.nextSibling,d=f.nextSibling,v=d.nextSibling,$=v.nextSibling;return i.$$click=()=>{e.setBirthRate(.06)},o.$$click=()=>{e.setBirthRate(.03),e.setEmigration(1e3)},r.$$click=()=>{e.setImmigration(6e3)},l.$$click=()=>{e.setImmigration(100)},s.$$click=()=>{e.setEvent(H.War,Math.floor(Math.random()*5)+3)},f.$$click=()=>{for(let a=0;a<10;a++)e.tick()},d.$$click=()=>{for(let a=0;a<100;a++)e.tick()},v.$$click=()=>{const m=e.population/e.people.length;for(let y=0;y<e.people.length;y++)e.people[y].population=Math.floor(Math.random()*m*2)},$.$$click=()=>{const m=e.population/e.people.length;for(let y=0;y<e.people.length;y++)e.people[y].population=m},N(a=>{const m=R.bottomButtons,y=R.button,k=R.button,M=R.button,E=R.button,U=`${R.button} ${R.red}`,j=R.button,D=R.button,P=R.button,O=R.button;return m!==a._v$&&b(n,a._v$=m),y!==a._v$2&&b(i,a._v$2=y),k!==a._v$3&&b(o,a._v$3=k),M!==a._v$4&&b(r,a._v$4=M),E!==a._v$5&&b(l,a._v$5=E),U!==a._v$6&&b(s,a._v$6=U),j!==a._v$7&&b(f,a._v$7=j),D!==a._v$8&&b(d,a._v$8=D),P!==a._v$9&&b(v,a._v$9=P),O!==a._v$10&&b($,a._v$10=O),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),n})();He(["click"]);const Ot="_button_1i83c_1";var Re={button:Ot};const Ft=B("<div><button>\u2B06</button><span></span><button>\u2B07</button><span></span></div>"),ee=e=>(()=>{const n=Ft.cloneNode(!0),t=n.firstChild,i=t.nextSibling,o=i.nextSibling,r=o.nextSibling;return t.$$click=()=>{e.setter(e.number+e.increment)},i.style.setProperty("display","inline-block"),i.style.setProperty("min-width","50px"),i.style.setProperty("text-align","center"),p(i,()=>Math.round(e.number*1e3)/1e3),o.$$click=()=>{e.setter(e.number-e.increment)},p(r,()=>e.name),N(l=>{const s=Re.button,u=Re.button;return s!==l._v$&&b(t,l._v$=s),u!==l._v$2&&b(o,l._v$2=u),l},{_v$:void 0,_v$2:void 0}),n})();He(["click"]);const Wt=B("<div><header><h1>Popusim\u2122 - </h1></header><div></div></div>"),Ut=B("<div><header><h1>You Failed!</h1><p>Somehow you managed to make your whole country die. Great job!</p></header></div>");let I;(function(e){e[e.Male=0]="Male",e[e.Female=1]="Female"})(I||(I={}));class Ie{constructor(n,t,i=n===0?1e6:0){this.age=n,this.population=i,this.gender=t}getTotalPopulation(n,t){let i=0;for(let o in t)i+=t[o].population;return i}percentage(n){return this.population/this.getTotalPopulation(this.gender,n)*100}}let H;(function(e){e[e.War=0]="War",e[e.BabyBoom=1]="BabyBoom"})(H||(H={}));const jt=()=>{function e(){let g=[];return[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95].map(S=>{g.push(new Ie(S,I.Male)),g.push(new Ie(S,I.Female))}),g}function n(){return[]}const[t,i]=L(e(),{equals:!1}),[o,r]=L(2022),[l,s]=L(1),[u,f]=L(""),[d,v]=L(n()),[$,a]=L(0),[m,y]=L(0),[k,M]=L(.01),[E,U]=L(.04),[j,D]=L(1e3),[P,O]=L(200),[K,J]=L(.55),Q=(g,S)=>{let _=d();_.push({type:g,duration:S}),v(_)};function oe(){var g=0;for(var S in t())g+=t()[S].population;return g}function be(g,S){var _=0;for(var c in t())t()[c].age>=g&&t()[c].age<=S&&(_+=t()[c].population);return _}const Ke=()=>{let g=0,S=0;for(const _ of d()){if(_.duration--,_.duration<=0){let c=d();c.splice(c.indexOf(_),1),v(c),f(""),_.type==H.War&&Q(H.BabyBoom,10);continue}if(_.type==H.War){f("War has broken out!");for(const c of t())c.age>15&&c.age<30&&c.gender==I.Male&&(S+=c.population/(1/.25),c.population*=.25)}else if(_.type==H.BabyBoom){f("After the war, people are having many more kids!");for(const c of t())c.age>15&&c.age<45&&(g+=c.population*E(),c.population+=c.population*E())}}return{eventBirths:g,eventDeaths:S}},xe=function(){const g=oe();let S=0,_=0,c=0;r(o()+1);for(let h in t()){let se=t()[h],Z=Math.ceil(se.population/5);if(Z===0)continue;se.population-=Z;let Pe=t()[+h+2];Pe!==void 0?Pe.population+=Z:_++}for(const h of t()){const se=h.gender==I.Male?k()*1.2:k(),Z=h.population;h.population*=1-h.age/(1/se*10),_+=Z-h.population}for(const h of t())h.age>=20&&h.age<=45&&h.gender==I.Female&&(t()[0].population+=E()*h.population,t()[1].population+=E()*h.population,S+=E()*h.population*2,c+=h.gender==I.Female?h.population:0),h.age==0&&(h.population*=1-K()/5,_+=K()/5);const T=j()*Math.random(),X=P()*Math.random();for(const h of t())h.age>=20&&h.age<=30?h.population+=h.gender==I.Female?T*.5:T:h.age>=15&&h.age<=25&&(h.population-=h.gender==I.Female?X*.5:X);const{eventBirths:le,eventDeaths:re}=Ke();S+=le,_+=re;for(const h of t())h.population=Math.floor(h.population<0?0:h.population);i(t());const Ae=oe()-g;s(Math.abs(Ae)<5e3?0:Ae>0?1:-1),a(S),y(_)},Ce=W(()=>{for(const g of t())if(g.population>0)return!0;return!1}),Ve=setInterval(xe,750);return De(()=>clearInterval(Ve)),[x(de,{get when(){return Ce()},get children(){return[x(At,{get newsStory(){return u()}}),(()=>{const g=Wt.cloneNode(!0),S=g.firstChild,_=S.firstChild;_.firstChild;const c=S.nextSibling;return p(_,o,null),p(g,x(bt,{get people(){return t()}}),c),p(g,x(St,{get people(){return t()},get populationTrend(){return l()},get population(){return oe()},get youngPopulation(){return be(0,15)},get workingPopulation(){return be(20,60)},get retiredPopulation(){return be(65,95)},get births(){return $()},get deaths(){return m()}}),c),p(g,x(Dt,{get class(){return Y.bottomButtons},get people(){return t()},get population(){return oe()},setEvent:Q,tick:xe,setBirthRate:U,setDeathRate:M,setImmigration:D,setEmigration:O,setIMR:J}),c),p(c,x(ee,{get number(){return E()},setter:U,increment:.01,name:"Birth Rate"}),null),p(c,x(ee,{get number(){return k()},setter:M,increment:.01,name:"Death Rate"}),null),p(c,x(ee,{get number(){return j()},setter:D,increment:100,name:"Immigrants"}),null),p(c,x(ee,{get number(){return P()},setter:O,increment:100,name:"Emigrants"}),null),p(c,x(ee,{get number(){return K()},setter:J,increment:.05,name:"Infant Mortality"}),null),p(g,x(Me,{}),null),N(T=>{const X=Y.App,le=Y.header,re=Y.numbers;return X!==T._v$&&b(g,T._v$=X),le!==T._v$2&&b(S,T._v$2=le),re!==T._v$3&&b(c,T._v$3=re),T},{_v$:void 0,_v$2:void 0,_v$3:void 0}),g})()]}}),x(de,{get when(){return!Ce()},get children(){const g=Ut.cloneNode(!0),S=g.firstChild;return p(g,x(Me,{}),null),N(_=>{const c=Y.App,T=Y.header;return c!==_._v$4&&b(g,_._v$4=c),T!==_._v$5&&b(S,_._v$5=T),_},{_v$4:void 0,_v$5:void 0}),g}})]};it(()=>x(jt,{}),document.getElementById("root"));