import"./index.7ac402cb.js";import{m as Ar}from"./singletons.01533805.js";import{U as Cr}from"./scheduler.9a75ed56.js";import"./index.3a808bdd.js";function Ie(r,t){const e={},o={},s={$$scope:1};let a=r.length;for(;a--;){const n=r[a],i=t[a];if(i){for(const l in n)l in i||(o[l]=1);for(const l in i)s[l]||(e[l]=i[l],s[l]=1);r[a]=i}else for(const l in n)s[l]=1}for(const n in o)n in e||(e[n]=void 0);return e}function je(r){return typeof r=="object"&&r!==null?r:{}}var vr=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,R=r=>!r||typeof r!="object"||Object.keys(r).length===0,_r=(r,t)=>JSON.stringify(r)===JSON.stringify(t);function Er(r,t){r.forEach(function(e){Array.isArray(e)?Er(e,t):t.push(e)})}function kr(r){let t=[];return Er(r,t),t}var Br=(...r)=>kr(r).filter(Boolean),Mr=(r,t)=>{let e={};for(let o in r)t!=null&&t.hasOwnProperty(o)?e[o]=typeof r[o]=="object"?Mr(r[o],t[o]):t[o]+" "+r[o]:e[o]=r[o];for(let o in t)e.hasOwnProperty(o)||(e[o]=t[o]);return e},mr=r=>!r||typeof r!="string"?r:r.replace(/\s+/g," ").trim();function Ur(){for(var r=0,t,e,o="";r<arguments.length;)(t=arguments[r++])&&(e=Sr(t))&&(o&&(o+=" "),o+=e);return o}function Sr(r){if(typeof r=="string")return r;for(var t,e="",o=0;o<r.length;o++)r[o]&&(t=Sr(r[o]))&&(e&&(e+=" "),e+=t);return e}var br="-";function Vr(r){var t=Dr(r),e=r.conflictingClassGroups,o=r.conflictingClassGroupModifiers,s=o===void 0?{}:o;function a(i){var l=i.split(br);return l[0]===""&&l.length!==1&&l.shift(),Tr(l,t)||$r(i)}function n(i,l){var d=e[i]||[];return l&&s[i]?[].concat(d,s[i]):d}return{getClassGroupId:a,getConflictingClassGroupIds:n}}function Tr(r,t){var n;if(r.length===0)return t.classGroupId;var e=r[0],o=t.nextPart.get(e),s=o?Tr(r.slice(1),o):void 0;if(s)return s;if(t.validators.length!==0){var a=r.join(br);return(n=t.validators.find(function(i){var l=i.validator;return l(a)}))==null?void 0:n.classGroupId}}var yr=/^\[(.+)\]$/;function $r(r){if(yr.test(r)){var t=yr.exec(r)[1],e=t==null?void 0:t.substring(0,t.indexOf(":"));if(e)return"arbitrary.."+e}}function Dr(r){var t=r.theme,e=r.prefix,o={nextPart:new Map,validators:[]},s=qr(Object.entries(r.classGroups),e);return s.forEach(function(a){var n=a[0],i=a[1];cr(i,o,n,t)}),o}function cr(r,t,e,o){r.forEach(function(s){if(typeof s=="string"){var a=s===""?t:hr(t,s);a.classGroupId=e;return}if(typeof s=="function"){if(Hr(s)){cr(s(o),t,e,o);return}t.validators.push({validator:s,classGroupId:e});return}Object.entries(s).forEach(function(n){var i=n[0],l=n[1];cr(l,hr(t,i),e,o)})})}function hr(r,t){var e=r;return t.split(br).forEach(function(o){e.nextPart.has(o)||e.nextPart.set(o,{nextPart:new Map,validators:[]}),e=e.nextPart.get(o)}),e}function Hr(r){return r.isThemeGetter}function qr(r,t){return t?r.map(function(e){var o=e[0],s=e[1],a=s.map(function(n){return typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(function(i){var l=i[0],d=i[1];return[t+l,d]})):n});return[o,a]}):r}function Jr(r){if(r<1)return{get:function(){},set:function(){}};var t=0,e=new Map,o=new Map;function s(a,n){e.set(a,n),t++,t>r&&(t=0,o=e,e=new Map)}return{get:function(n){var i=e.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set:function(n,i){e.has(n)?e.set(n,i):s(n,i)}}}var Pr="!";function Yr(r){var t=r.separator||":",e=t.length===1,o=t[0],s=t.length;return function(n){for(var i=[],l=0,d=0,f,p=0;p<n.length;p++){var m=n[p];if(l===0){if(m===o&&(e||n.slice(p,p+s)===t)){i.push(n.slice(d,p)),d=p+s;continue}if(m==="/"){f=p;continue}}m==="["?l++:m==="]"&&l--}var E=i.length===0?n:n.substring(d),h=E.startsWith(Pr),C=h?E.substring(1):E,S=f&&f>d?f-d:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:C,maybePostfixModifierPosition:S}}}function Zr(r){if(r.length<=1)return r;var t=[],e=[];return r.forEach(function(o){var s=o[0]==="[";s?(t.push.apply(t,e.sort().concat([o])),e=[]):e.push(o)}),t.push.apply(t,e.sort()),t}function Kr(r){return{cache:Jr(r.cacheSize),splitModifiers:Yr(r),...Vr(r)}}var Xr=/\s+/;function Qr(r,t){var e=t.splitModifiers,o=t.getClassGroupId,s=t.getConflictingClassGroupIds,a=new Set;return r.trim().split(Xr).map(function(n){var i=e(n),l=i.modifiers,d=i.hasImportantModifier,f=i.baseClassName,p=i.maybePostfixModifierPosition,m=o(p?f.substring(0,p):f),E=!!p;if(!m){if(!p)return{isTailwindClass:!1,originalClassName:n};if(m=o(f),!m)return{isTailwindClass:!1,originalClassName:n};E=!1}var h=Zr(l).join(":"),C=d?h+Pr:h;return{isTailwindClass:!0,modifierId:C,classGroupId:m,originalClassName:n,hasPostfixModifier:E}}).reverse().filter(function(n){if(!n.isTailwindClass)return!0;var i=n.modifierId,l=n.classGroupId,d=n.hasPostfixModifier,f=i+l;return a.has(f)?!1:(a.add(f),s(l,d).forEach(function(p){return a.add(i+p)}),!0)}).reverse().map(function(n){return n.originalClassName}).join(" ")}function ur(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];var o,s,a,n=i;function i(d){var f=t[0],p=t.slice(1),m=p.reduce(function(E,h){return h(E)},f());return o=Kr(m),s=o.cache.get,a=o.cache.set,n=l,l(d)}function l(d){var f=s(d);if(f)return f;var p=Qr(d,o);return a(d,p),p}return function(){return n(Ur.apply(null,arguments))}}function x(r){var t=function(o){return o[r]||[]};return t.isThemeGetter=!0,t}var Rr=/^\[(?:([a-z-]+):)?(.+)\]$/i,re=/^\d+\/\d+$/,ee=new Set(["px","full","screen"]),te=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,oe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ne=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function G(r){return N(r)||ee.has(r)||re.test(r)||dr(r)}function dr(r){return W(r,"length",ue)}function ie(r){return W(r,"size",Gr)}function ae(r){return W(r,"position",Gr)}function se(r){return W(r,"url",de)}function or(r){return W(r,"number",N)}function N(r){return!Number.isNaN(Number(r))}function le(r){return r.endsWith("%")&&N(r.slice(0,-1))}function Z(r){return wr(r)||W(r,"number",wr)}function b(r){return Rr.test(r)}function K(){return!0}function j(r){return te.test(r)}function ce(r){return W(r,"",fe)}function W(r,t,e){var o=Rr.exec(r);return o?o[1]?o[1]===t:e(o[2]):!1}function ue(r){return oe.test(r)}function Gr(){return!1}function de(r){return r.startsWith("url(")}function wr(r){return Number.isInteger(Number(r))}function fe(r){return ne.test(r)}function fr(){var r=x("colors"),t=x("spacing"),e=x("blur"),o=x("brightness"),s=x("borderColor"),a=x("borderRadius"),n=x("borderSpacing"),i=x("borderWidth"),l=x("contrast"),d=x("grayscale"),f=x("hueRotate"),p=x("invert"),m=x("gap"),E=x("gradientColorStops"),h=x("gradientColorStopPositions"),C=x("inset"),S=x("margin"),P=x("opacity"),M=x("padding"),Q=x("saturate"),k=x("scale"),U=x("sepia"),V=x("skew"),$=x("space"),D=x("translate"),H=function(){return["auto","contain","none"]},_=function(){return["auto","hidden","clip","visible","scroll"]},q=function(){return["auto",b,t]},w=function(){return[b,t]},rr=function(){return["",G]},F=function(){return["auto",N,b]},J=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},L=function(){return["solid","dashed","dotted","double","none"]},er=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},Y=function(){return["start","end","center","between","around","evenly","stretch"]},c=function(){return["","0",b]},g=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},y=function(){return[N,or]},v=function(){return[N,b]};return{cacheSize:500,theme:{colors:[K],spacing:[G],blur:["none","",j,b],brightness:y(),borderColor:[r],borderRadius:["none","","full",j,b],borderSpacing:w(),borderWidth:rr(),contrast:y(),grayscale:c(),hueRotate:v(),invert:c(),gap:w(),gradientColorStops:[r],gradientColorStopPositions:[le,dr],inset:q(),margin:q(),opacity:y(),padding:w(),saturate:y(),scale:y(),sepia:c(),skew:v(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",b]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":g()}],"break-before":[{"break-before":g()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(J(),[b])}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:H()}],"overscroll-x":[{"overscroll-x":H()}],"overscroll-y":[{"overscroll-y":H()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[C]}],"inset-x":[{"inset-x":[C]}],"inset-y":[{"inset-y":[C]}],start:[{start:[C]}],end:[{end:[C]}],top:[{top:[C]}],right:[{right:[C]}],bottom:[{bottom:[C]}],left:[{left:[C]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Z]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",b]}],grow:[{grow:c()}],shrink:[{shrink:c()}],order:[{order:["first","last","none",Z]}],"grid-cols":[{"grid-cols":[K]}],"col-start-end":[{col:["auto",{span:["full",Z]},b]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[K]}],"row-start-end":[{row:["auto",{span:[Z]},b]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",b]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",b]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal"].concat(Y())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(Y(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(Y(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[S]}],mx:[{mx:[S]}],my:[{my:[S]}],ms:[{ms:[S]}],me:[{me:[S]}],mt:[{mt:[S]}],mr:[{mr:[S]}],mb:[{mb:[S]}],ml:[{ml:[S]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",b,t]}],"min-w":[{"min-w":["min","max","fit",b,G]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,b]}],h:[{h:[b,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",b,G]}],"max-h":[{"max-h":[b,t,"min","max","fit"]}],"font-size":[{text:["base",j,dr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",or]}],"font-family":[{font:[K]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",b]}],"line-clamp":[{"line-clamp":["none",N,or]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",b,G]}],"list-image":[{"list-image":["none",b]}],"list-style-type":[{list:["none","disc","decimal",b]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[r]}],"placeholder-opacity":[{"placeholder-opacity":[P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[r]}],"text-opacity":[{"text-opacity":[P]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(L(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",G]}],"underline-offset":[{"underline-offset":["auto",b,G]}],"text-decoration-color":[{decoration:[r]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",b]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",b]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[P]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(J(),[ae])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",ie]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},se]}],"bg-color":[{bg:[r]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[E]}],"gradient-via":[{via:[E]}],"gradient-to":[{to:[E]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[P]}],"border-style":[{border:[].concat(L(),["hidden"])}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[P]}],"divide-style":[{divide:L()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:[""].concat(L())}],"outline-offset":[{"outline-offset":[b,G]}],"outline-w":[{outline:[G]}],"outline-color":[{outline:[r]}],"ring-w":[{ring:rr()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[r]}],"ring-opacity":[{"ring-opacity":[P]}],"ring-offset-w":[{"ring-offset":[G]}],"ring-offset-color":[{"ring-offset":[r]}],shadow:[{shadow:["","inner","none",j,ce]}],"shadow-color":[{shadow:[K]}],opacity:[{opacity:[P]}],"mix-blend":[{"mix-blend":er()}],"bg-blend":[{"bg-blend":er()}],filter:[{filter:["","none"]}],blur:[{blur:[e]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",j,b]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[Q]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[e]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[P]}],"backdrop-saturate":[{"backdrop-saturate":[Q]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",b]}],duration:[{duration:v()}],ease:[{ease:["linear","in","out","in-out",b]}],delay:[{delay:v()}],animate:[{animate:["none","spin","ping","pulse","bounce",b]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[k]}],"scale-x":[{"scale-x":[k]}],"scale-y":[{"scale-y":[k]}],rotate:[{rotate:[Z,b]}],"translate-x":[{"translate-x":[D]}],"translate-y":[{"translate-y":[D]}],"skew-x":[{"skew-x":[V]}],"skew-y":[{"skew-y":[V]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",b]}],accent:[{accent:["auto",r]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",b]}],"caret-color":[{caret:[r]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",b]}],fill:[{fill:[r,"none"]}],"stroke-w":[{stroke:[G,or]}],stroke:[{stroke:[r,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function pe(r,t){for(var e in t)Or(r,e,t[e]);return r}var be=Object.prototype.hasOwnProperty,ge=new Set(["string","number","boolean"]);function Or(r,t,e){if(!be.call(r,t)||ge.has(typeof e)||e===null){r[t]=e;return}if(Array.isArray(e)&&Array.isArray(r[t])){r[t]=r[t].concat(e);return}if(typeof e=="object"&&typeof r[t]=="object"){if(r[t]===null){r[t]=e;return}for(var o in e)Or(r[t],o,e[o])}}function ve(r){for(var t=arguments.length,e=new Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return typeof r=="function"?ur.apply(void 0,[fr,r].concat(e)):ur.apply(void 0,[function(){return pe(fr(),r)}].concat(e))}var zr=ur(fr),me={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ir=r=>r||void 0,nr=(...r)=>Ir(kr(r).filter(Boolean).join(" ")),lr=null,ir={},pr=!1,X=(...r)=>t=>t.twMerge?((!lr||pr)&&(pr=!1,lr=R(ir)?zr:ve(ir)),Ir(lr(nr(r)))):nr(r),xr=(r,t)=>{for(let e in t)r.hasOwnProperty(e)?r[e]=nr(r[e],t[e]):r[e]=t[e];return r},ye=(r,t)=>{var e,o,s,a,n;let{slots:i={},variants:l={},compoundVariants:d=[],compoundSlots:f=[],defaultVariants:p={}}=r,m={...me,...t},E=nr((e=r==null?void 0:r.extend)==null?void 0:e.base,r==null?void 0:r.base),h=Mr(l,(o=r==null?void 0:r.extend)==null?void 0:o.variants),C={...(s=r==null?void 0:r.extend)==null?void 0:s.defaultVariants,...p};!R(m.twMergeConfig)&&!_r(m.twMergeConfig,ir)&&(pr=!0,ir=m.twMergeConfig);let S=R(i)?{}:{base:r==null?void 0:r.base,...i},P=R((a=r==null?void 0:r.extend)==null?void 0:a.slots)?S:xr((n=r==null?void 0:r.extend)==null?void 0:n.slots,R(S)?{base:r==null?void 0:r.base}:S),M=k=>{var U,V,$,D;if(R(h)&&R(i)&&R((U=r==null?void 0:r.extend)==null?void 0:U.slots))return X(E,k==null?void 0:k.class,k==null?void 0:k.className)(m);if(d&&!Array.isArray(d))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof d}`);if(f&&!Array.isArray(f))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);let H=(c,g,y=[],v)=>{let u=y;if(typeof g=="string")u.push(mr(g).split(" ").map(A=>`${c}:${A}`));else if(Array.isArray(g))u.push(g.flatMap(A=>`${c}:${A}`));else if(typeof g=="object"&&typeof v=="string"){let A=g==null?void 0:g[v];if(A&&typeof A=="string"){let T=mr(A);u[v]=u[v]?[...u[v],...T.split(" ").map(O=>`${c}:${O}`)]:T.split(" ").map(O=>`${c}:${O}`)}else Array.isArray(A)&&A.length>0&&(u[v]=A.flatMap(T=>`${c}:${T}`))}return u},_=(c,g=h,y=null)=>{let v=g==null?void 0:g[c];if(!v||R(v))return null;let u=k==null?void 0:k[c];if(u===null)return null;let A=vr(u),T=Array.isArray(m.responsiveVariants)&&m.responsiveVariants.length>0||m.responsiveVariants===!0,O=C==null?void 0:C[c],z=[];typeof A=="object"&&T&&(z=Object.keys(A).reduce((sr,tr)=>{let gr=A[tr],Wr=v==null?void 0:v[gr];return tr==="initial"?(O=gr,sr):Array.isArray(m.responsiveVariants)&&!m.responsiveVariants.includes(tr)?sr:H(tr,Wr,sr,y)},[]));let ar=v[A]||v[vr(O)];return typeof z=="object"&&typeof y=="string"&&z[y]?xr(z,ar):z.length>0?[ar,...z]:ar},q=()=>h?Object.keys(h).map(c=>_(c,h)):null,w=c=>!h||typeof h!="object"?null:Object.keys(h).reduce((g,y)=>{let v=_(y,h,c),u=c==="base"&&typeof v=="string"?v:v&&v[c];return u&&g.push(u),g},[]),rr=k&&Object.fromEntries(Object.entries(k).filter(([,c])=>c!==void 0)),F=c=>{var g;let y=typeof(k==null?void 0:k[c])=="object"?{[c]:(g=k[c])==null?void 0:g.initial}:{};return{...C,...rr,...y}},J=(c=[])=>c==null?void 0:c.filter(({class:g,className:y,...v})=>Object.entries(v).every(([u,A])=>{let T=F(u);return Array.isArray(A)?A.includes(T[u]):T[u]===A})).flatMap(({class:g,className:y})=>[g,y]),L=()=>{var c;let g=J(d),y=J((c=r==null?void 0:r.extend)==null?void 0:c.compoundVariants);return Br(y,g)},er=()=>{let c=L();return Array.isArray(c)?c.reduce((g,y)=>{if(typeof y=="string"&&(g.base=X(g.base,y)(m)),typeof y=="object"){let v=Object.keys(y);for(let u of v)g[u]=X(g[u],y[u])(m)}return g},{}):c},Y=()=>f.length<1?null:f.reduce((c,g)=>{let{slots:y=[],class:v,className:u,...A}=g;if(!R(A)){let T=Object.keys(A);for(let O of T){let z=F(O)[O];if(!z||z!==A[O])return c}}for(let T of y)c[T]||(c[T]=[]),c[T].push([v,u]);return c},{});if(!R(i)||!R((V=r==null?void 0:r.extend)==null?void 0:V.slots)){let c=($=er())!=null?$:[],g=(D=Y())!=null?D:[];return{...typeof P=="object"&&!R(P)?Object.keys(P).reduce((y,v)=>(y[v]=u=>X(P[v],w(v),c==null?void 0:c[v],g==null?void 0:g[v],u==null?void 0:u.class,u==null?void 0:u.className)(m),y),{}):{}}}return X(E,q(),L(),k==null?void 0:k.class,k==null?void 0:k.className)(m)},Q=()=>{if(!(!h||typeof h!="object"))return Object.keys(h)};return M.variantKeys=Q(),M.base=E,M.slots=P,M.variants=h,M.defaultVariants=C,M.compoundSlots=f,M.compoundVariants=d,M};const Fe=typeof document<"u",jr=r=>typeof r=="function";function Fr(r){return r instanceof HTMLElement}function Le(r){const t=r.getAttribute("aria-disabled"),e=r.getAttribute("disabled"),o=r.hasAttribute("data-disabled");return!!(t==="true"||e!==null||o)}function Ne(...r){return(...t)=>{for(const e of r)typeof e=="function"&&e(...t)}}function We(){}function Lr(r,t,e,o){const s=Array.isArray(t)?t:[t];return s.forEach(a=>r.addEventListener(a,e,o)),()=>{s.forEach(a=>r.removeEventListener(a,e,o))}}function _e(r,t,e,o){const s=Array.isArray(t)?t:[t];if(typeof e=="function"){const a=we(n=>e(n));return s.forEach(n=>r.addEventListener(n,a,o)),()=>{s.forEach(n=>r.removeEventListener(n,a,o))}}return()=>void 0}function he(r){const t=r.currentTarget;if(!Fr(t))return null;const e=new CustomEvent(`m-${r.type}`,{detail:{originalEvent:r},cancelable:!0});return t.dispatchEvent(e),e}function we(r){return t=>{const e=he(t);if(!(e!=null&&e.defaultPrevented))return r(t)}}let xe="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",Ae=(r=21)=>{let t="",e=r;for(;e--;)t+=xe[Math.random()*64|0];return t};const I={ALT:"Alt",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",BACKSPACE:"Backspace",CAPS_LOCK:"CapsLock",CONTROL:"Control",DELETE:"Delete",END:"End",ENTER:"Enter",ESCAPE:"Escape",F1:"F1",F10:"F10",F11:"F11",F12:"F12",F2:"F2",F3:"F3",F4:"F4",F5:"F5",F6:"F6",F7:"F7",F8:"F8",F9:"F9",HOME:"Home",META:"Meta",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SHIFT:"Shift",SPACE:" ",TAB:"Tab",CTRL:"Control"},Ce=[I.ARROW_DOWN,I.PAGE_UP,I.HOME],Ee=[I.ARROW_UP,I.PAGE_DOWN,I.END],Be=[...Ce,...Ee],Ue=[I.ENTER,I.SPACE],ke=Ar(void 0,r=>{function t(o){r(o),r(void 0)}return Lr(document,"pointerdown",t,{passive:!1,capture:!0})}),Ve=(r,t={})=>{let e={enabled:!0,...t};function o(){return typeof e.enabled=="boolean"?e.enabled:Cr(e.enabled)}const s=ke.subscribe(a=>{var i;if(!o()||!a||a.target===r)return;const n=a.composedPath();if(!n.includes(r)){if(e.ignore){if(jr(e.ignore)){if(e.ignore(a))return}else if(Array.isArray(e.ignore)&&e.ignore.length>0&&e.ignore.some(l=>l&&(a.target===l||n.includes(l))))return}(i=e.handler)==null||i.call(e,a)}});return{update(a){e={...e,...a}},destroy(){s()}}},Me=Ar(void 0,r=>{function t(o){o&&o.key===I.ESCAPE&&r(o),r(void 0)}return Lr(document,"keydown",t,{passive:!1,capture:!0})}),$e=(r,t={})=>{r.dataset.escapee="";let e={enabled:!0,...t};function o(){return typeof e.enabled=="boolean"?e.enabled:Cr(e.enabled)}const s=Me.subscribe(a=>{var i;if(!a||!o())return;const n=a.target;if(!(!Fr(n)||n.closest("[data-escapee]")!==r)){if(e.ignore){if(jr(e.ignore)){if(e.ignore(a))return}else if(Array.isArray(e.ignore)&&e.ignore.length>0&&e.ignore.some(l=>l&&n===l))return}(i=e.handler)==null||i.call(e,a)}});return{update(a){e={...e,...a}},destroy(){r.removeAttribute("data-escapee"),s()}}},Se=typeof document<"u";function De(){return Ae(10)}function He(r){const t={};for(const e in r){const o=r[e];o!==void 0&&(t[e]=o)}return t}function qe(r){return function(t,e){if(e===void 0)return;r[t].set(e)}}function Je(r,t){const e=[];return t.builders.forEach(o=>{const s=o.action(r);s&&e.push(s)}),{destroy:()=>{e.forEach(o=>{o.destroy&&o.destroy()})}}}function Ye(r){const t={};return r.forEach(e=>{Object.keys(e).forEach(o=>{o!=="action"&&(t[o]=e[o])})}),t}function Ze(r,t){if(!Se)return;const{transition:e,transitionConfig:o,inTransition:s,inTransitionConfig:a,outTransition:n,outTransitionConfig:i}=t;if(e){if(o){const{delay:E,duration:h}=e(document.body,o),C=B(E,h);r.set({in:C,out:C});return}const{delay:f,duration:p}=e(document.body),m=B(f,p);r.set({in:m,out:m});return}let l=0,d=0;if(s)if(a){const{delay:f,duration:p}=s(document.body,a);l=B(f,p)}else{const{delay:f,duration:p}=s(document.body);l=B(f,p)}if(n)if(i){const{delay:f,duration:p}=n(document.body,i);d=B(f,p)}else{const{delay:f,duration:p}=n(document.body);d=B(f,p)}r.set({in:l,out:d})}function B(r,t){return(r??0)+(t??0)}function Nr(r){var t,e,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(e=Nr(r[t]))&&(o&&(o+=" "),o+=e);else for(t in r)r[t]&&(o&&(o+=" "),o+=t);return o}function Te(){for(var r,t,e=0,o="";e<arguments.length;)(r=arguments[e++])&&(t=Nr(r))&&(o&&(o+=" "),o+=t);return o}function Pe(r){const t=r-1;return t*t*t+1}function Ke(...r){return zr(Te(r))}const Xe=(r,t={y:-8,x:0,start:.95,duration:150})=>{const e=getComputedStyle(r),o=e.transform==="none"?"":e.transform,s=(n,i,l)=>{const[d,f]=i,[p,m]=l;return(n-d)/(f-d)*(m-p)+p},a=n=>Object.keys(n).reduce((i,l)=>n[l]===void 0?i:i+`${l}:${n[l]};`,"");return{duration:t.duration??200,delay:0,css:n=>{const i=s(n,[0,1],[t.y??5,0]),l=s(n,[0,1],[t.x??0,0]),d=s(n,[0,1],[t.start??.95,1]);return a({transform:`${o} translate3d(${l}px, ${i}px, 0) scale(${d})`,opacity:n})},easing:Pe}},Qe=ye({base:"inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});export{Be as F,Ue as S,je as a,_e as b,Ke as c,Ve as d,Ne as e,Fr as f,Ie as g,qe as h,Fe as i,Se as j,I as k,Lr as l,ye as m,We as n,Le as o,De as p,Pe as q,He as r,Ze as s,Xe as t,$e as u,Ae as v,Ye as w,Je as x,Qe as y};
