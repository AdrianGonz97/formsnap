import{s as V,e as $,i as b,d as _,f as p,g,h as v,j as m,l as S,a as w,m as D,c as E,x as h,n as N,y as q,B as Y,C as Z,G as x,H as ee,I as te}from"../chunks/scheduler.9a75ed56.js";import{S as A,i as C,a as k,g as H,t as y,c as M,b as R,d as T,m as U,e as W}from"../chunks/index.7ac402cb.js";import{c as z}from"../chunks/index.96f6542b.js";import"../chunks/index.313e2785.js";import"../chunks/index.3a808bdd.js";import{e as I,u as X,o as le,d as re}from"../chunks/each.69c06c93.js";import{p as se}from"../chunks/stores.d448a2eb.js";import"../chunks/singletons.01533805.js";import{n as ie}from"../chunks/navigation.c449aa38.js";function B(f,e,t){const l=f.slice();return l[1]=e[t],l[3]=t,l}function G(f){let e,t=[],l=new Map,r,i=I(f[0]);const a=s=>s[3];for(let s=0;s<i.length;s+=1){let n=B(f,i,s),o=a(n);l.set(o,t[s]=F(o,n))}return{c(){e=p("nav");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=g(s,"NAV",{class:!0});var n=v(e);for(let o=0;o<t.length;o+=1)t[o].l(n);n.forEach(_),this.h()},h(){m(e,"class","w-full")},m(s,n){b(s,e,n);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null);r=!0},p(s,n){n&1&&(i=I(s[0]),H(),t=X(t,n,a,1,s,i,l,e,le,F,null,B),M())},i(s){if(!r){for(let n=0;n<i.length;n+=1)k(t[n]);r=!0}},o(s){for(let n=0;n<t.length;n+=1)y(t[n]);r=!1},d(s){s&&_(e);for(let n=0;n<t.length;n+=1)t[n].d()}}}function L(f){let e,t;return e=new _e({props:{items:f[1].items}}),{c(){R(e.$$.fragment)},l(l){T(e.$$.fragment,l)},m(l,r){U(e,l,r),t=!0},p(l,r){const i={};r&1&&(i.items=l[1].items),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){y(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function F(f,e){let t,l,r=e[1].title+"",i,a,s,n,o=e[1].items&&L(e);return{key:f,first:null,c(){t=p("div"),l=p("h4"),i=S(r),a=w(),o&&o.c(),s=w(),this.h()},l(c){t=g(c,"DIV",{class:!0});var u=v(t);l=g(u,"H4",{class:!0});var d=v(l);i=D(d,r),d.forEach(_),a=E(u),o&&o.l(u),s=E(u),u.forEach(_),this.h()},h(){m(l,"class","mb-1 rounded-md px-1 py-1 text-sm font-semibold"),m(t,"class","pb-4"),this.first=t},m(c,u){b(c,t,u),h(t,l),h(l,i),h(t,a),o&&o.m(t,null),h(t,s),n=!0},p(c,u){e=c,(!n||u&1)&&r!==(r=e[1].title+"")&&N(i,r),e[1].items?o?(o.p(e,u),u&1&&k(o,1)):(o=L(e),o.c(),k(o,1),o.m(t,s)):o&&(H(),y(o,1,1,()=>{o=null}),M())},i(c){n||(k(o),n=!0)},o(c){y(o),n=!1},d(c){c&&_(t),o&&o.d()}}}function ne(f){let e,t,l=f[0].length&&G(f);return{c(){l&&l.c(),e=$()},l(r){l&&l.l(r),e=$()},m(r,i){l&&l.m(r,i),b(r,e,i),t=!0},p(r,[i]){r[0].length?l?(l.p(r,i),i&1&&k(l,1)):(l=G(r),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(H(),y(l,1,1,()=>{l=null}),M())},i(r){t||(k(l),t=!0)},o(r){y(l),t=!1},d(r){r&&_(e),l&&l.d(r)}}}function ae(f,e,t){let{items:l=[]}=e;return f.$$set=r=>{"items"in r&&t(0,l=r.items)},[l]}class oe extends A{constructor(e){super(),C(this,e,ae,ne,V,{items:0})}}function J(f,e,t){const l=f.slice();return l[2]=e[t],l[4]=t,l}function K(f){let e,t=[],l=new Map,r=I(f[0]);const i=a=>a[4];for(let a=0;a<r.length;a+=1){let s=J(f,r,a),n=i(s);l.set(n,t[a]=Q(n,s))}return{c(){e=p("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var s=v(e);for(let n=0;n<t.length;n+=1)t[n].l(s);s.forEach(_),this.h()},h(){m(e,"class","grid grid-flow-row auto-rows-max text-sm")},m(a,s){b(a,e,s);for(let n=0;n<t.length;n+=1)t[n]&&t[n].m(e,null)},p(a,s){s&3&&(r=I(a[0]),t=X(t,s,i,1,a,r,l,e,re,Q,null,J))},d(a){a&&_(e);for(let s=0;s<t.length;s+=1)t[s].d()}}}function fe(f){let e,t=f[2].title+"",l,r;return{c(){e=p("span"),l=S(t),r=w(),this.h()},l(i){e=g(i,"SPAN",{class:!0});var a=v(e);l=D(a,t),r=E(a),a.forEach(_),this.h()},h(){m(e,"class","flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline")},m(i,a){b(i,e,a),h(e,l),h(e,r)},p(i,a){a&1&&t!==(t=i[2].title+"")&&N(l,t)},d(i){i&&_(e)}}}function ce(f){let e,t=f[2].title+"",l,r,i,a,s,n,o,c=f[2].label&&O(f);return{c(){e=p("a"),l=S(t),r=w(),c&&c.c(),i=w(),this.h()},l(u){e=g(u,"A",{href:!0,class:!0,target:!0,rel:!0});var d=v(e);l=D(d,t),r=E(d),c&&c.l(d),i=E(d),d.forEach(_),this.h()},h(){m(e,"href",a=f[2].href),m(e,"class",s=z("group flex w-full items-center rounded-md px-2 py-1 hover:underline",f[2].disabled&&"cursor-not-allowed opacity-60",f[1].url.pathname===f[2].href?"font-medium text-foreground":"text-muted-foreground")),m(e,"target",n=f[2].external?"_blank":""),m(e,"rel",o=f[2].external?"noreferrer":"")},m(u,d){b(u,e,d),h(e,l),h(e,r),c&&c.m(e,null),h(e,i)},p(u,d){d&1&&t!==(t=u[2].title+"")&&N(l,t),u[2].label?c?c.p(u,d):(c=O(u),c.c(),c.m(e,i)):c&&(c.d(1),c=null),d&1&&a!==(a=u[2].href)&&m(e,"href",a),d&3&&s!==(s=z("group flex w-full items-center rounded-md px-2 py-1 hover:underline",u[2].disabled&&"cursor-not-allowed opacity-60",u[1].url.pathname===u[2].href?"font-medium text-foreground":"text-muted-foreground"))&&m(e,"class",s),d&1&&n!==(n=u[2].external?"_blank":"")&&m(e,"target",n),d&1&&o!==(o=u[2].external?"noreferrer":"")&&m(e,"rel",o)},d(u){u&&_(e),c&&c.d()}}}function O(f){let e,t=f[2].label+"",l;return{c(){e=p("span"),l=S(t),this.h()},l(r){e=g(r,"SPAN",{class:!0});var i=v(e);l=D(i,t),i.forEach(_),this.h()},h(){m(e,"class","ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline")},m(r,i){b(r,e,i),h(e,l)},p(r,i){i&1&&t!==(t=r[2].label+"")&&N(l,t)},d(r){r&&_(e)}}}function Q(f,e){let t,l;function r(s,n){return s[2].href?ce:fe}let i=r(e),a=i(e);return{key:f,first:null,c(){t=$(),a.c(),l=$(),this.h()},l(s){t=$(),a.l(s),l=$(),this.h()},h(){this.first=t},m(s,n){b(s,t,n),a.m(s,n),b(s,l,n)},p(s,n){e=s,i===(i=r(e))&&a?a.p(e,n):(a.d(1),a=i(e),a&&(a.c(),a.m(l.parentNode,l)))},d(s){s&&(_(t),_(l)),a.d(s)}}}function ue(f){let e,t=f[0].length&&K(f);return{c(){t&&t.c(),e=$()},l(l){t&&t.l(l),e=$()},m(l,r){t&&t.m(l,r),b(l,e,r)},p(l,[r]){l[0].length?t?t.p(l,r):(t=K(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:q,o:q,d(l){l&&_(e),t&&t.d(l)}}}function de(f,e,t){let l;Y(f,se,i=>t(1,l=i));let{items:r=[]}=e;return f.$$set=i=>{"items"in i&&t(0,r=i.items)},[r,l]}class _e extends A{constructor(e){super(),C(this,e,de,ue,V,{items:0})}}function me(f){let e,t,l,r,i,a,s;i=new oe({props:{items:ie.sidebar}});const n=f[1].default,o=Z(n,f,f[0],null);return{c(){e=p("div"),t=p("div"),l=p("aside"),r=p("div"),R(i.$$.fragment),a=w(),o&&o.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=v(e);t=g(u,"DIV",{class:!0});var d=v(t);l=g(d,"ASIDE",{class:!0});var P=v(l);r=g(P,"DIV",{class:!0});var j=v(r);T(i.$$.fragment,j),j.forEach(_),P.forEach(_),a=E(d),o&&o.l(d),d.forEach(_),u.forEach(_),this.h()},h(){m(r,"class","relative overflow-hidden h-full py-6 pr-6 pl-8 lg:py-8"),m(l,"class","fixed top-14 z-30 -ml-2 hidden min-h-[calc(100vh-64px)] w-full shrink-0 md:sticky md:block overflow-y-auto"),m(t,"class","container flex-1 items-start md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8"),m(e,"class","border-b")},m(c,u){b(c,e,u),h(e,t),h(t,l),h(l,r),U(i,r,null),h(t,a),o&&o.m(t,null),s=!0},p(c,[u]){o&&o.p&&(!s||u&1)&&x(o,n,c,c[0],s?te(n,c[0],u,null):ee(c[0]),null)},i(c){s||(k(i.$$.fragment,c),k(o,c),s=!0)},o(c){y(i.$$.fragment,c),y(o,c),s=!1},d(c){c&&_(e),W(i),o&&o.d(c)}}}function he(f,e,t){let{$$slots:l={},$$scope:r}=e;return f.$$set=i=>{"$$scope"in i&&t(0,r=i.$$scope)},[r,l]}class Ie extends A{constructor(e){super(),C(this,e,he,me,V,{})}}export{Ie as component};
