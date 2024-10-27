import{q as M,v as W,h as E,w as T,x as A,y as P,z as Y,A as V,B as D,C as L,D as j,H as z,E as G,F as m,G as g,I as O,a as $,J as h,K as F,L as J,M as K,N as Q,O as U,P as x,Q as X,R as Z,p as ee,k as re,c as te,S as ne,n as N,T as ae,g as se}from"./runtime.CcJA_4jj.js";import{b as ie}from"./disclose-version.jyNaTB0a.js";import{s as oe}from"./utils.Dis7B31-.js";const C=new Set,k=new Set;function be(e){if(!E)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const r=e.__e;r!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(r)}))}function ue(e,r,a,n){function s(t){if(n.capture||b.call(r,t),!t.cancelBubble){var u=V,l=D;T(null),A(null);try{return a.call(this,t)}finally{T(u),A(l)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function ye(e,r,a,n,s){var t={capture:n,passive:s},u=ue(e,r,a,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(e,u,t)})}function ge(e){for(var r=0;r<e.length;r++)C.add(e[r]);for(var a of k)a(e)}function b(e){var I;var r=this,a=r.ownerDocument,n=e.type,s=((I=e.composedPath)==null?void 0:I.call(e))||[],t=s[0]||e.target,u=0,l=e.__root;if(l){var d=s.indexOf(l);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var _=s.indexOf(r);if(_===-1)return;d<=_&&(u=d)}if(t=s[u]||e.target,t!==r){P(e,"currentTarget",{configurable:!0,get(){return t||a}});var S=V,c=D;T(null),A(null);try{for(var i,o=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var p=t["__"+n];if(p!==void 0&&!t.disabled)if(Y(p)){var[B,...H]=p;B.apply(t,[e,...H])}else p.call(t,e)}catch(y){i?o.push(y):i=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let y of o)queueMicrotask(()=>{throw y});throw i}}finally{e.__root=r,delete e.currentTarget,T(S),A(c)}}}function we(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ce=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ee(e){return ce.includes(e)}const fe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Te(e){return e=e.toLowerCase(),fe[e]??e}const le=["touchstart","touchmove"];function de(e){return le.includes(e)}function Ae(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function _e(e,r){return q(e,r)}function Se(e,r){L(),r.intro=r.intro??!1;const a=r.target,n=E,s=h;try{for(var t=j(a);t&&(t.nodeType!==8||t.data!==z);)t=G(t);if(!t)throw m;g(!0),O(t),$();const u=q(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==F)throw J(),m;return g(!1),u}catch(u){if(u===m)return r.recover===!1&&K(),L(),Q(a),g(!1),_e(e,r);throw u}finally{g(n),O(s)}}const v=new Map;function q(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:u=!0}){L();var l=new Set,d=c=>{for(var i=0;i<c.length;i++){var o=c[i];if(!l.has(o)){l.add(o);var f=de(o);r.addEventListener(o,b,{passive:f});var p=v.get(o);p===void 0?(document.addEventListener(o,b,{passive:f}),v.set(o,1)):v.set(o,p+1)}}};d(U(C)),k.add(d);var _=void 0,S=x(()=>{var c=a??r.appendChild(X());return Z(()=>{if(t){ee({});var i=te;i.c=t}s&&(n.$$events=s),E&&ie(c,null),_=e(c,n)||{},E&&(D.nodes_end=h),t&&re()}),()=>{var f;for(var i of l){r.removeEventListener(i,b);var o=v.get(i);--o===0?(document.removeEventListener(i,b),v.delete(i)):v.set(i,o)}k.delete(d),R.delete(_),c!==a&&((f=c.parentNode)==null||f.removeChild(c))}});return R.set(_,S),_}let R=new WeakMap;function me(e){const r=R.get(e);r&&r()}let w=!1;function Le(e,r,a){const n=a[r]??(a[r]={store:null,source:ne(void 0),unsubscribe:N});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=N;else{var s=!0;n.unsubscribe=oe(e,t=>{s?n.source.v=t:ae(n.source,t)}),s=!1}return se(n.source)}function Ne(e,r,a){let n=a[r];return n&&n.store!==e&&(n.unsubscribe(),n.unsubscribe=N),e}function ke(){const e={};return M(()=>{for(var r in e)e[r].unsubscribe()}),e}function Re(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{Ae as a,Le as b,Re as c,ue as d,ge as e,Ee as f,Ne as g,Se as h,we as i,ye as j,_e as m,Te as n,be as r,ke as s,me as u};