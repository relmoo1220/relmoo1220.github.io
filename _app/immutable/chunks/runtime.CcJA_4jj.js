var Rn=Array.isArray,On=Array.from,kn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,In=Array.prototype,$t=Object.getPrototypeOf;function Cn(t){return typeof t=="function"}const bn=()=>{};function Pn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const T=2,vt=4,j=8,tt=16,w=32,Z=64,R=128,V=256,p=512,A=1024,b=2048,C=4096,B=8192,zt=16384,pt=32768,Fn=65536,Wt=1<<18,ht=1<<19,it=Symbol("$state"),qn=Symbol("");function dt(t){return t===this.v}function Jt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function yt(t){return!Jt(t,this.v)}function Qt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Ln(){throw new Error("hydration_failed")}function Mn(t){throw new Error("props_invalid_value")}function Yn(){throw new Error("state_descriptors_fixed")}function jn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function Bn(t){return Et(nt(t))}function sn(t,n=!1){var e;const r=nt(t);return n||(r.equals=yt),l!==null&&l.l!==null&&((e=l.l).s??(e.s=[])).push(r),r}function Hn(t,n=!1){return Et(sn(t,n))}function Et(t){return i!==null&&i.f&T&&(E===null?En([t]):E.push(t)),t}function wt(t,n){return i!==null&&at()&&i.f&(T|tt)&&(E===null||!E.includes(t))&&en(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=Yt(),mt(t,A),at()&&u!==null&&u.f&p&&!(u.f&w)&&(_!==null&&_.includes(t)?(y(u,A),z(u)):g===null?wn([t]):g.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var o=r[a],f=o.f;f&A||!e&&o===u||(y(o,n),f&(p|R)&&(f&T?mt(o,b):z(o)))}}const Un=1,Vn=2,Gn=4,Kn=8,$n=16,Zn=1,zn=2,on="[",un="[!",ln="]",Tt={},Wn=Symbol(),Jn="http://www.w3.org/2000/svg";function xt(t){console.warn("hydration_mismatch")}let D=!1;function Qn(t){D=t}let d;function L(t){if(t===null)throw xt(),Tt;return d=t}function Xn(){return L(O(d))}function tr(t){if(D){if(O(d)!==null)throw xt(),Tt;d=t}}function nr(t=1){if(D){for(var n=t,r=d;n--;)r=O(r);d=r}}function rr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===on||r===un)&&(t+=1)}var e=O(n);n.remove(),n=e}}var ft,gt,At;function er(){if(ft===void 0){ft=window;var t=Element.prototype,n=Node.prototype;gt=lt(n,"firstChild").get,At=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function J(t){return gt.call(t)}function O(t){return At.call(t)}function sr(t,n){if(!D)return J(t);var r=J(d);if(r===null)r=d.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),L(e),e}return L(r),r}function ar(t,n){if(!D){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function or(t,n=1,r=!1){let e=D?d:t;for(;n--;)e=O(e);if(!D)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),L(a),a}return L(e),e}function ur(t){t.textContent=""}function fn(t){var n=T|A;u===null?n|=R:u.f|=ht;const r={children:null,ctx:l,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(i!==null&&i.f&T){var e=i;(e.children??(e.children=[])).push(r)}return r}function lr(t){const n=fn(t);return n.equals=yt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&T?rt(e):F(e)}}}function Dt(t){var n,r=u;$(t.parent);try{St(t),n=jt(t)}finally{$(r)}return n}function Rt(t){var n=Dt(t),r=(k||t.f&R)&&t.deps!==null?b:p;y(t,r),t.equals(n)||(t.v=n,t.version=Yt())}function rt(t){St(t),Y(t,0),y(t,B),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&i===null&&tn(),i!==null&&i.f&R&&Xt(),st&&Qt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&Z)!==0,a=u,o={ctx:l,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|A,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=N;try{_t(!0),H(o),o.f|=zt}catch(c){throw F(o),c}finally{_t(f)}}else n!==null&&z(o);var m=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ht)===0;if(!m&&!s&&e&&(a!==null&&_n(o,a),i!==null&&i.f&T)){var x=i;(x.children??(x.children=[])).push(o)}return o}function ir(t){const n=P(j,null,!1);return y(n,p),n.teardown=t,n}function fr(t){Ot();var n=u!==null&&(u.f&w)!==0&&l!==null&&!l.m;if(n){var r=l;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=kt(t);return e}}function _r(t){return Ot(),et(t)}function cr(t){const n=P(Z,t,!0);return()=>{F(n)}}function kt(t){return P(vt,t,!1)}function vr(t,n){var r=l,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=et(()=>{t(),!e.ran&&(e.ran=!0,wt(r.l.r2,!0),An(n))})}function pr(){var t=l;et(()=>{if(Gt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&y(r,b),q(r)&&H(r),n.ran=!1}t.l.r2.v=!1}})}function et(t){return P(j,t,!0)}function hr(t){return cn(t)}function cn(t,n=0){return P(j|tt|n,t,!0)}function dr(t,n=!0){return P(j|w,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=st,e=i;ct(!0),K(null);try{n.call(null)}finally{ct(r),K(e)}}}function It(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&w||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}It(t),Ct(t,n&&!r),Y(t,0),y(t,B);var o=t.transitions;if(o!==null)for(const m of o)m.stop();Nt(t);var f=t.parent;f!==null&&f.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function yr(t,n){var r=[];Pt(t,r,!0),pn(r,()=>{F(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Pt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&pt)!==0||(e.f&w)!==0;Pt(e,n,a?r:!1),e=s}}}function Er(t){Ft(t,!0)}function Ft(t,n){if(t.f&C){t.f^=C,q(t)&&H(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&w)!==0;Ft(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,Q=[];function qt(){G=!1;const t=Q.slice();Q=[],Zt(t)}function wr(t){G||(G=!0,queueMicrotask(qt)),Q.push(t)}function hn(){G&&qt()}function dn(t){throw new Error("lifecycle_outside_component")}const Lt=0,yn=1;let U=Lt,M=!1,N=!1,st=!1;function _t(t){N=t}function ct(t){st=t}let S=[],I=0;let i=null;function K(t){i=t}let u=null;function $(t){u=t}let E=null;function En(t){E=t}let _=null,h=0,g=null;function wn(t){g=t}let Mt=0,k=!1,l=null;function Yt(){return++Mt}function at(){return l!==null&&l.l===null}function q(t){var o,f;var n=t.f;if(n&A)return!0;if(n&b){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(q(a)&&Rt(a),e&&u!==null&&!k&&!((f=a==null?void 0:a.reactions)!=null&&f.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||y(t,p)}return!1}function mn(t,n,r){throw t}function jt(t){var ut;var n=_,r=h,e=g,s=i,a=k,o=E,f=l,m=t.f;_=null,h=0,g=null,i=m&(w|Z)?null:t,k=!N&&(m&R)!==0,E=null,l=t.ctx;try{var x=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(Y(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(Y(t,h),c.length=h);return x}finally{_=n,h=r,g=e,i=s,k=a,E=o,l=f}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&T&&(_===null||!_.includes(n))&&(y(n,b),n.f&(R|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function H(t){var n=t.f;if(!(n&B)){y(t,p);var r=u;u=t;try{It(t),n&tt?vn(t):Ct(t),Nt(t);var e=jt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(s){mn(s)}finally{u=r}}}function Bt(){I>1e3&&(I=0,nn()),I++}function Ht(t){var n=t.length;if(n!==0){Bt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ut(s,a),xn(a)}}finally{N=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(B|C))&&q(e)&&(H(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}}function gn(){if(M=!1,I>1001)return;const t=S;S=[],Ht(t),M||(I=0)}function z(t){U===Lt&&(M||(M=!0,queueMicrotask(gn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|w)){if(!(r&p))return;n.f^=p}}S.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&w)!==0,o=a&&(s&p)!==0;if(!o&&!(s&C))if(s&j){a?r.f^=p:q(r)&&H(r);var f=r.first;if(f!==null){r=f;continue}}else s&vt&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var x=v.next;if(x!==null){r=x;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)f=e[c],n.push(f),Ut(f,n)}function Vt(t){var n=U,r=S;try{Bt();const s=[];U=yn,S=s,M=!1,Ht(r);var e=t==null?void 0:t();return hn(),(S.length>0||s.length>0)&&Vt(),I=0,e}finally{U=n,S=r}}async function mr(){await Promise.resolve(),Vt()}function Gt(t){var f;var n=t.f,r=(n&T)!==0;if(r&&n&B){var e=Dt(t);return rt(t),e}if(i!==null){E!==null&&E.includes(t)&&rn();var s=i.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&u!==null&&u.f&p&&!(u.f&w)&&g.includes(t)&&(y(u,A),z(u))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((f=o.deriveds)!=null&&f.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,q(a)&&Rt(a)),t.v}function An(t){const n=i;try{return i=null,t()}finally{i=n}}const Sn=~(A|b|p);function y(t,n){t.f=t.f&Sn|n}function Tr(t){return ot().get(t)}function xr(t,n){return ot().set(t,n),n}function gr(t){return ot().has(t)}function ot(t){return l===null&&dn(),l.c??(l.c=new Map(Dn(l)||void 0))}function Dn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Ar(t,n=1){var r=+Gt(t);return wt(t,r+n),r}function Sr(t,n=!1,r){l={p:l,c:null,e:null,m:!1,s:t,x:null,l:null},n||(l.l={s:null,u:null,r1:[],r2:nt(!1)})}function Dr(t){const n=l;if(n!==null){const o=n.e;if(o!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];$(a.effect),K(a.reaction),kt(a.fn)}}finally{$(r),K(e)}}l=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Wn as $,i as A,u as B,er as C,J as D,O as E,Tt as F,Qn as G,on as H,L as I,d as J,ln as K,xt as L,Ln as M,ur as N,On as O,cr as P,W as Q,dr as R,sn as S,wt as T,Zn as U,zn as V,it as W,Nn as X,In as Y,nt as Z,Yn as _,Xn as a,lt as a0,jn as a1,$t as a2,cn as a3,Er as a4,yr as a5,pt as a6,un as a7,rr as a8,kt as a9,pr as aA,Hn as aB,gr as aC,nr as aD,et as aa,Mn as ab,Fn as ac,Gn as ad,yt as ae,Ar as af,Cn as ag,w as ah,Z as ai,Un as aj,Vn as ak,Kn as al,lr as am,B as an,$n as ao,dn as ap,Vt as aq,mr as ar,Bn as as,Jn as at,F as au,qn as av,Kt as aw,xr as ax,Tr as ay,vr as az,fr as b,l as c,An as d,Zt as e,Rr as f,Gt as g,D as h,fn as i,ar as j,Dr as k,sr as l,tr as m,bn as n,or as o,Sr as p,ir as q,Pn as r,Jt as s,hr as t,_r as u,wr as v,K as w,$ as x,kn as y,Rn as z};