import{v as Lt,c as We,g as Tt,a as St,u as _t,b as xt,Q as Et,d as Bt}from"./QBtn.fa8fa209.js";import{c as P,h as N,a as ot,b as $t,d as Fe,e as zt}from"./render.72cf3a56.js";import{c as v,h as C,r as S,i as nt,o as U,a as A,n as $e,b as Y,g as M,l as V,e as Q,w as k,d as ze,f as ce,H as Ae,j as O,s as Pe,k as Pt,m as Ot,P as Vt,p as Mt,q as ne,t as ye,u as Ne,v as ge,x as _e,y as we,z as Dt,A as it,B as Qt,C as ie,D as Ht,E as Rt,F as lt,_ as at,G as ee,I as ue,J as $,K as B,L as Wt,M as se,N as xe,O as Ft,Q as At,R as Nt,S as It,T as Ie,U as Xt}from"./index.0c3e3b5a.js";var jt=P({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>C("div",{class:n.value},N(o.default))}}),Ut=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:o}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>C("div",{class:n.value,role:"toolbar"},N(o.default))}});function Yt(){const e=S(!nt.value);return e.value===!1&&U(()=>{e.value=!0}),e}const rt=typeof ResizeObserver!="undefined",Xe=rt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ee=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let n=null,l,t={width:-1,height:-1};function i(d){d===!0||e.debounce===0||e.debounce==="0"?s():n===null&&(n=setTimeout(s,e.debounce))}function s(){if(clearTimeout(n),n=null,l){const{offsetWidth:d,offsetHeight:c}=l;(d!==t.width||c!==t.height)&&(t={width:d,height:c},o("resize",t))}}const{proxy:f}=M();if(rt===!0){let d;const c=r=>{l=f.$el.parentNode,l?(d=new ResizeObserver(i),d.observe(l),s()):r!==!0&&Y(()=>{c(!0)})};return U(()=>{c()}),A(()=>{clearTimeout(n),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),$e}else{let r=function(){clearTimeout(n),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",i,V.passive),c=void 0)},w=function(){r(),l&&l.contentDocument&&(c=l.contentDocument.defaultView,c.addEventListener("resize",i,V.passive),s())};const d=Yt();let c;return U(()=>{Y(()=>{l=f.$el,l&&w()})}),A(r),f.trigger=i,()=>{if(d.value===!0)return C("object",{style:Xe.style,tabindex:-1,type:"text/html",data:Xe.url,"aria-hidden":"true",onLoad:w})}}}}),Kt=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=M(),t=ze(ce,Q);if(t===Q)return console.error("QHeader needs to be child of QLayout"),Q;const i=S(parseInt(e.heightHint,10)),s=S(!0),f=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||l.platform.is.ios&&t.isContainer.value===!0),d=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?i.value:0;const u=i.value-t.scroll.value.position;return u>0?u:0}),c=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),r=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),w=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),q=v(()=>{const u=t.rows.value.top,p={};return u[0]==="l"&&t.left.space===!0&&(p[l.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),u[2]==="r"&&t.right.space===!0&&(p[l.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function m(u,p){t.update("header",u,p)}function h(u,p){u.value!==p&&(u.value=p)}function _({height:u}){h(i,u),m("size",u)}function L(u){r.value===!0&&h(s,!0),n("focusin",u)}k(()=>e.modelValue,u=>{m("space",u),h(s,!0),t.animate()}),k(d,u=>{m("offset",u)}),k(()=>e.reveal,u=>{u===!1&&h(s,e.modelValue)}),k(s,u=>{t.animate(),n("reveal",u)}),k(t.scroll,u=>{e.reveal===!0&&h(s,u.direction==="up"||u.position<=e.revealOffset||u.position-u.inflectionPoint<100)});const g={};return t.instances.header=g,e.modelValue===!0&&m("size",i.value),m("space",e.modelValue),m("offset",d.value),A(()=>{t.instances.header===g&&(t.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const u=ot(o.default,[]);return e.elevated===!0&&u.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),u.push(C(Ee,{debounce:0,onResize:_})),C("header",{class:w.value,style:q.value,onFocusin:L},u)}}}),Be=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const n=v(()=>parseInt(e.lines,10)),l=v(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),t=v(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>C("div",{style:t.value,class:l.value},N(o.default))}});const Oe={dark:{type:Boolean,default:null}};function Ve(e,o){return v(()=>e.dark===null?o.dark.isActive:e.dark)}var Gt=P({name:"QList",props:{...Oe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:o}){const n=M(),l=Ve(e,n.proxy.$q),t=v(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C("div",{class:t.value,role:"list"},N(o.default))}});function Jt(e,o,n){let l;function t(){l!==void 0&&(Ae.remove(l),l=void 0)}return A(()=>{e.value===!0&&t()}),{removeFromHistory:t,addToHistory(){l={condition:()=>n.value===!0,handler:o},Ae.add(l)}}}const Zt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},eo=["before-show","show","before-hide","hide"];function to({showing:e,canShow:o,hideOnRouteChange:n,handleShow:l,handleHide:t,processOnMount:i}){const s=M(),{props:f,emit:d,proxy:c}=s;let r;function w(u){e.value===!0?h(u):q(u)}function q(u){if(f.disable===!0||u!==void 0&&u.qAnchorHandled===!0||o!==void 0&&o(u)!==!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!0),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&m(u)}function m(u){e.value!==!0&&(e.value=!0,d("before-show",u),l!==void 0?l(u):d("show",u))}function h(u){if(f.disable===!0)return;const p=f["onUpdate:modelValue"]!==void 0;p===!0&&(d("update:modelValue",!1),r=u,Y(()=>{r===u&&(r=void 0)})),(f.modelValue===null||p===!1)&&_(u)}function _(u){e.value!==!1&&(e.value=!1,d("before-hide",u),t!==void 0?t(u):d("hide",u))}function L(u){f.disable===!0&&u===!0?f["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):u===!0!==e.value&&(u===!0?m:_)(r)}k(()=>f.modelValue,L),n!==void 0&&Lt(s)===!0&&k(()=>c.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),i===!0&&U(()=>{L(f.modelValue)});const g={show:q,hide:h,toggle:w};return Object.assign(c,g),g}const oo=[null,document,document.body,document.scrollingElement,document.documentElement];function no(e,o){let n=Tt(o);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return oo.includes(n)?window:n}function ut(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function st(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let le;function qe(){if(le!==void 0)return le;const e=document.createElement("p"),o=document.createElement("div");We(e,{width:"100%",height:"200px"}),We(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const n=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return n===l&&(l=o.clientWidth),o.remove(),le=n-l,le}function io(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let J=0,ke,Ce,Z,Le=!1,je,Ue,j;function lo(e){ao(e)&&Pe(e)}function ao(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=Pt(e),n=e.shiftKey&&!e.deltaX,l=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),t=n||l?e.deltaY:e.deltaX;for(let i=0;i<o.length;i++){const s=o[i];if(io(s,l))return l?t<0&&s.scrollTop===0?!0:t>0&&s.scrollTop+s.clientHeight===s.scrollHeight:t<0&&s.scrollLeft===0?!0:t>0&&s.scrollLeft+s.clientWidth===s.scrollWidth}return!0}function Ye(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function ae(e){Le!==!0&&(Le=!0,requestAnimationFrame(()=>{Le=!1;const{height:o}=e.target,{clientHeight:n,scrollTop:l}=document.scrollingElement;(Z===void 0||o!==window.innerHeight)&&(Z=n-o,document.scrollingElement.scrollTop=l),l>Z&&(document.scrollingElement.scrollTop-=Math.ceil((l-Z)/8))}))}function Ke(e){const o=document.body,n=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:t}=window.getComputedStyle(o);ke=st(window),Ce=ut(window),je=o.style.left,Ue=o.style.top,o.style.left=`-${ke}px`,o.style.top=`-${Ce}px`,t!=="hidden"&&(t==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,O.is.ios===!0&&(n===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",ae,V.passiveCapture),window.visualViewport.addEventListener("scroll",ae,V.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",Ye,V.passiveCapture))}O.is.desktop===!0&&O.is.mac===!0&&window[`${e}EventListener`]("wheel",lo,V.notPassive),e==="remove"&&(O.is.ios===!0&&(n===!0?(window.visualViewport.removeEventListener("resize",ae,V.passiveCapture),window.visualViewport.removeEventListener("scroll",ae,V.passiveCapture)):window.removeEventListener("scroll",Ye,V.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=je,o.style.top=Ue,window.scrollTo(ke,Ce),Z=void 0)}function ro(e){let o="add";if(e===!0){if(J++,j!==void 0){clearTimeout(j),j=void 0;return}if(J>1)return}else{if(J===0||(J--,J>0))return;if(o="remove",O.is.ios===!0&&O.is.nativeMobile===!0){clearTimeout(j),j=setTimeout(()=>{Ke(o),j=void 0},100);return}}Ke(o)}function uo(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,ro(o))}}}function so(){let e;const o=M();function n(){clearTimeout(e)}return Ot(n),A(n),{removeTimeout:n,registerTimeout(l,t){clearTimeout(e),St(o)===!1&&(e=setTimeout(l,t))}}}const Me={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},co=Object.keys(Me);Me.all=!0;function Ge(e){const o={};for(const n of co)e[n]===!0&&(o[n]=!0);return Object.keys(o).length===0?Me:(o.horizontal===!0?o.left=o.right=!0:o.left===!0&&o.right===!0&&(o.horizontal=!0),o.vertical===!0?o.up=o.down=!0:o.up===!0&&o.down===!0&&(o.vertical=!0),o.horizontal===!0&&o.vertical===!0&&(o.all=!0),o)}function Je(e,o){return o.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof o.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(o.uid)===-1)}function fo(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Vt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Te(e,o,n){const l=_e(e);let t,i=l.left-o.event.x,s=l.top-o.event.y,f=Math.abs(i),d=Math.abs(s);const c=o.direction;c.horizontal===!0&&c.vertical!==!0?t=i<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.down===!0&&s>0?(t="down",f>d&&(c.left===!0&&i<0?t="left":c.right===!0&&i>0&&(t="right"))):c.left===!0&&i<0?(t="left",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&i>0&&(t="right",f<d&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let r=!1;if(t===void 0&&n===!1){if(o.event.isFirst===!0||o.event.lastDir===void 0)return{};t=o.event.lastDir,r=!0,t==="left"||t==="right"?(l.left-=i,f=0,i=0):(l.top-=s,d=0,s=0)}return{synthetic:r,payload:{evt:e,touch:o.event.mouse!==!0,mouse:o.event.mouse===!0,position:l,direction:t,isFirst:o.event.isFirst,isFinal:n===!0,duration:Date.now()-o.event.time,distance:{x:f,y:d},offset:{x:i,y:s},delta:{x:l.left-o.event.lastX,y:l.top-o.event.lastY}}}}let vo=0;var Se=$t({name:"touch-pan",beforeMount(e,{value:o,modifiers:n}){if(n.mouse!==!0&&O.has.touch!==!0)return;function l(i,s){n.mouse===!0&&s===!0?Pe(i):(n.stop===!0&&ge(i),n.prevent===!0&&Ne(i))}const t={uid:"qvtp_"+vo++,handler:o,modifiers:n,direction:Ge(n),noop:$e,mouseStart(i){Je(i,t)&&Mt(i)&&(ne(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(i,!0))},touchStart(i){if(Je(i,t)){const s=i.target;ne(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(i)}},start(i,s){if(O.is.firefox===!0&&ye(e,!0),t.lastEvt=i,s===!0||n.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=i.type.indexOf("mouse")>-1?new MouseEvent(i.type,i):new TouchEvent(i.type,i);i.defaultPrevented===!0&&Ne(c),i.cancelBubble===!0&&ge(c),Object.assign(c,{qKeyEvent:i.qKeyEvent,qClickOutside:i.qClickOutside,qAnchorHandled:i.qAnchorHandled,qClonedBy:i.qClonedBy===void 0?[t.uid]:i.qClonedBy.concat(t.uid)}),t.initialEvent={target:i.target,event:c}}ge(i)}const{left:f,top:d}=_e(i);t.event={x:f,y:d,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:f,lastY:d}},move(i){if(t.event===void 0)return;const s=_e(i),f=s.left-t.event.x,d=s.top-t.event.y;if(f===0&&d===0)return;t.lastEvt=i;const c=t.event.mouse===!0,r=()=>{l(i,c);let m;n.preserveCursor!==!0&&n.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),fo(),t.styleCleanup=h=>{if(t.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};h!==void 0?setTimeout(()=>{_(),h()},50):_()}else h!==void 0&&h()}};if(t.event.detected===!0){t.event.isFirst!==!0&&l(i,t.event.mouse);const{payload:m,synthetic:h}=Te(i,t,!1);m!==void 0&&(t.handler(m)===!1?t.end(i):(t.styleCleanup===void 0&&t.event.isFirst===!0&&r(),t.event.lastX=m.position.left,t.event.lastY=m.position.top,t.event.lastDir=h===!0?void 0:m.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){r(),t.event.detected=!0,t.move(i);return}const w=Math.abs(f),q=Math.abs(d);w!==q&&(t.direction.horizontal===!0&&w>q||t.direction.vertical===!0&&w<q||t.direction.up===!0&&w<q&&d<0||t.direction.down===!0&&w<q&&d>0||t.direction.left===!0&&w>q&&f<0||t.direction.right===!0&&w>q&&f>0?(t.event.detected=!0,t.move(i)):t.end(i,!0))},end(i,s){if(t.event!==void 0){if(we(t,"temp"),O.is.firefox===!0&&ye(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(Te(i===void 0?t.lastEvt:i,t).payload);const{payload:f}=Te(i===void 0?t.lastEvt:i,t,!0),d=()=>{t.handler(f)};t.styleCleanup!==void 0?t.styleCleanup(d):d()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const i=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";ne(t,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}O.has.touch===!0&&ne(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,o){const n=e.__qtouchpan;n!==void 0&&(o.oldValue!==o.value&&(typeof value!="function"&&n.end(),n.handler=o.value),n.direction=Ge(o.modifiers))},beforeUnmount(e){const o=e.__qtouchpan;o!==void 0&&(o.event!==void 0&&o.end(),we(o,"main"),we(o,"temp"),O.is.firefox===!0&&ye(e,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchpan)}});function re(e,o,n){return n<=o?o:Math.min(n,Math.max(o,e))}const Ze=150;var mo=P({name:"QDrawer",inheritAttrs:!1,props:{...Zt,...Oe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...eo,"on-layout","mini-state"],setup(e,{slots:o,emit:n,attrs:l}){const t=M(),{proxy:{$q:i}}=t,s=Ve(e,i),{preventBodyScroll:f}=uo(),{registerTimeout:d,removeTimeout:c}=so(),r=ze(ce,Q);if(r===Q)return console.error("QDrawer needs to be child of QLayout"),Q;let w,q,m;const h=S(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),_=v(()=>e.mini===!0&&h.value!==!0),L=v(()=>_.value===!0?e.miniWidth:e.width),g=S(e.showIfAbove===!0&&h.value===!1?!0:e.modelValue===!0),u=v(()=>e.persistent!==!0&&(h.value===!0||ct.value===!0));function p(a,y){if(W(),a!==!1&&r.animate(),z(0),h.value===!0){const x=r.instances[te.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),H(1),r.isContainer.value!==!0&&f(!0)}else H(0),a!==!1&&he(!1);d(()=>{a!==!1&&he(!0),y!==!0&&n("show",a)},Ze)}function b(a,y){K(),a!==!1&&r.animate(),H(0),z(I.value*L.value),pe(),y!==!0?d(()=>{n("hide",a)},Ze):c()}const{show:T,hide:E}=to({showing:g,hideOnRouteChange:u,handleShow:p,handleHide:b}),{addToHistory:W,removeFromHistory:K}=Jt(g,E,u),F={belowBreakpoint:h,hide:E},D=v(()=>e.side==="right"),I=v(()=>(i.lang.rtl===!0?-1:1)*(D.value===!0?1:-1)),De=S(0),X=S(!1),de=S(!1),Qe=S(L.value*I.value),te=v(()=>D.value===!0?"left":"right"),fe=v(()=>g.value===!0&&h.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),ve=v(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(D.value?"R":"L")>-1||i.platform.is.ios===!0&&r.isContainer.value===!0),G=v(()=>e.overlay===!1&&g.value===!0&&h.value===!1),ct=v(()=>e.overlay===!0&&g.value===!0&&h.value===!1),dt=v(()=>"fullscreen q-drawer__backdrop"+(g.value===!1&&X.value===!1?" hidden":"")),ft=v(()=>({backgroundColor:`rgba(0,0,0,${De.value*.4})`})),He=v(()=>D.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),vt=v(()=>D.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),mt=v(()=>{const a={};return r.header.space===!0&&He.value===!1&&(ve.value===!0?a.top=`${r.header.offset}px`:r.header.space===!0&&(a.top=`${r.header.size}px`)),r.footer.space===!0&&vt.value===!1&&(ve.value===!0?a.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(a.bottom=`${r.footer.size}px`)),a}),ht=v(()=>{const a={width:`${L.value}px`,transform:`translateX(${Qe.value}px)`};return h.value===!0?a:Object.assign(a,mt.value)}),pt=v(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),bt=v(()=>`q-drawer q-drawer--${e.side}`+(de.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(X.value===!0?" no-transition":g.value===!0?"":" q-layout--prevent-focus")+(h.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${_.value===!0?"mini":"standard"}`+(ve.value===!0||G.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(He.value===!0?" q-drawer--top-padding":""))),yt=v(()=>{const a=i.lang.rtl===!0?e.side:te.value;return[[Se,kt,void 0,{[a]:!0,mouse:!0}]]}),gt=v(()=>{const a=i.lang.rtl===!0?te.value:e.side;return[[Se,Re,void 0,{[a]:!0,mouse:!0}]]}),wt=v(()=>{const a=i.lang.rtl===!0?te.value:e.side;return[[Se,Re,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function me(){Ct(h,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}k(h,a=>{a===!0?(w=g.value,g.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(g.value===!0?(z(0),H(0),pe()):T(!1))}),k(()=>e.side,(a,y)=>{r.instances[y]===F&&(r.instances[y]=void 0,r[y].space=!1,r[y].offset=0),r.instances[a]=F,r[a].size=L.value,r[a].space=G.value,r[a].offset=fe.value}),k(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&me()}),k(()=>e.behavior+e.breakpoint,me),k(r.isContainer,a=>{g.value===!0&&f(a!==!0),a===!0&&me()}),k(r.scrollbarWidth,()=>{z(g.value===!0?0:void 0)}),k(fe,a=>{R("offset",a)}),k(G,a=>{n("on-layout",a),R("space",a)}),k(D,()=>{z()}),k(L,a=>{z(),be(e.miniToOverlay,a)}),k(()=>e.miniToOverlay,a=>{be(a,L.value)}),k(()=>i.lang.rtl,()=>{z()}),k(()=>e.mini,()=>{e.modelValue===!0&&(qt(),r.animate())}),k(_,a=>{n("mini-state",a)});function z(a){a===void 0?Y(()=>{a=g.value===!0?0:L.value,z(I.value*a)}):(r.isContainer.value===!0&&D.value===!0&&(h.value===!0||Math.abs(a)===L.value)&&(a+=I.value*r.scrollbarWidth.value),Qe.value=a)}function H(a){De.value=a}function he(a){const y=a===!0?"remove":r.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function qt(){clearTimeout(q),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),de.value=!0,q=setTimeout(()=>{de.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function kt(a){if(g.value!==!1)return;const y=L.value,x=re(a.distance.x,0,y);if(a.isFinal===!0){x>=Math.min(75,y)===!0?T():(r.animate(),H(0),z(I.value*y)),X.value=!1;return}z((i.lang.rtl===!0?D.value!==!0:D.value)?Math.max(y-x,0):Math.min(0,x-y)),H(re(x/y,0,1)),a.isFirst===!0&&(X.value=!0)}function Re(a){if(g.value!==!0)return;const y=L.value,x=a.direction===e.side,oe=(i.lang.rtl===!0?x!==!0:x)?re(a.distance.x,0,y):0;if(a.isFinal===!0){Math.abs(oe)<Math.min(75,y)===!0?(r.animate(),H(1),z(0)):E(),X.value=!1;return}z(I.value*oe),H(re(1-oe/y,0,1)),a.isFirst===!0&&(X.value=!0)}function pe(){f(!1),he(!0)}function R(a,y){r.update(e.side,a,y)}function Ct(a,y){a.value!==y&&(a.value=y)}function be(a,y){R("size",a===!0?e.miniWidth:y)}return r.instances[e.side]=F,be(e.miniToOverlay,L.value),R("space",G.value),R("offset",fe.value),e.showIfAbove===!0&&e.modelValue!==!0&&g.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),U(()=>{n("on-layout",G.value),n("mini-state",_.value),w=e.showIfAbove===!0;const a=()=>{(g.value===!0?p:b)(!1,!0)};if(r.totalWidth.value!==0){Y(a);return}m=k(r.totalWidth,()=>{m(),m=void 0,g.value===!1&&e.showIfAbove===!0&&h.value===!1?T(!1):a()})}),A(()=>{m!==void 0&&m(),clearTimeout(q),g.value===!0&&pe(),r.instances[e.side]===F&&(r.instances[e.side]=void 0,R("size",0),R("offset",0),R("space",!1))}),()=>{const a=[];h.value===!0&&(e.noSwipeOpen===!1&&a.push(Dt(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),yt.value)),a.push(Fe("div",{ref:"backdrop",class:dt.value,style:ft.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&g.value===!0,()=>wt.value)));const y=_.value===!0&&o.mini!==void 0,x=[C("div",{...l,key:""+y,class:[pt.value,l.class]},y===!0?o.mini():N(o.default))];return e.elevated===!0&&g.value===!0&&x.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(Fe("aside",{ref:"content",class:bt.value,style:ht.value},x,"contentclose",e.noSwipeClose!==!0&&h.value===!0,()=>gt.value)),C("div",{class:"q-drawer-container"},a)}}}),ho=P({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:n}}=M(),l=ze(ce,Q);if(l===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;it(Qt,!0);const t=v(()=>{const i={};return l.header.space===!0&&(i.paddingTop=`${l.header.size}px`),l.right.space===!0&&(i[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(i.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(i[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),i});return()=>C("div",{class:"q-page-container",style:t.value},N(o.default))}});const{passive:et}=V,po=["both","horizontal","vertical"];var bo=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>po.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:o}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,t,i;k(()=>e.scrollTarget,()=>{d(),f()});function s(){l!==null&&l();const w=Math.max(0,ut(t)),q=st(t),m={top:w-n.position.top,left:q-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const h=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:w,left:q},n.directionChanged=n.direction!==h,n.delta=m,n.directionChanged===!0&&(n.direction=h,n.inflectionPoint=n.position),o("scroll",{...n})}function f(){t=no(i,e.scrollTarget),t.addEventListener("scroll",c,et),c(!0)}function d(){t!==void 0&&(t.removeEventListener("scroll",c,et),t=void 0)}function c(w){if(w===!0||e.debounce===0||e.debounce==="0")s();else if(l===null){const[q,m]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];l=()=>{m(q),l=null}}}const{proxy:r}=M();return U(()=>{i=r.$el.parentNode,f()}),A(()=>{l!==null&&l(),d()}),Object.assign(r,{trigger:c,getPosition:()=>n}),$e}}),yo=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=M(),t=S(null),i=S(l.screen.height),s=S(e.container===!0?0:l.screen.width),f=S({position:0,direction:"down",inflectionPoint:0}),d=S(0),c=S(nt.value===!0?0:qe()),r=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=v(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),q=v(()=>c.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),m=v(()=>c.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function h(b){if(e.container===!0||document.qScrollPrevented!==!0){const T={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};f.value=T,e.onScroll!==void 0&&n("scroll",T)}}function _(b){const{height:T,width:E}=b;let W=!1;i.value!==T&&(W=!0,i.value=T,e.onScrollHeight!==void 0&&n("scroll-height",T),g()),s.value!==E&&(W=!0,s.value=E),W===!0&&e.onResize!==void 0&&n("resize",b)}function L({height:b}){d.value!==b&&(d.value=b,g())}function g(){if(e.container===!0){const b=i.value>d.value?qe():0;c.value!==b&&(c.value=b)}}let u;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:i,containerHeight:d,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ie({size:0,offset:0,space:!1}),right:ie({size:300,offset:0,space:!1}),footer:ie({size:0,offset:0,space:!1}),left:ie({size:300,offset:0,space:!1}),scroll:f,animate(){u!==void 0?clearTimeout(u):document.body.classList.add("q-body--layout-animate"),u=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),u=void 0},155)},update(b,T,E){p[b][T]=E}};if(it(ce,p),qe()>0){let E=function(){b=null,T.classList.remove("hide-scrollbar")},W=function(){if(b===null){if(T.scrollHeight>l.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(E,300)},K=function(F){b!==null&&F==="remove"&&(clearTimeout(b),E()),window[`${F}EventListener`]("resize",W)},b=null;const T=document.body;k(()=>e.container!==!0?"add":"remove",K),e.container!==!0&&K("add"),Ht(()=>{K("remove")})}return()=>{const b=zt(o.default,[C(bo,{onScroll:h}),C(Ee,{onResize:_})]),T=C("div",{class:r.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(Ee,{onResize:L}),C("div",{class:"absolute-full",style:q.value},[C("div",{class:"scroll",style:m.value},[T])])]):T}}}),tt=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:o}){const n=v(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},N(o.default))}}),go=P({name:"QItem",props:{...Oe,..._t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:o,emit:n}){const{proxy:{$q:l}}=M(),t=Ve(e,l),{hasLink:i,linkAttrs:s,linkClass:f,linkTag:d,navigateOnClick:c}=xt(),r=S(null),w=S(null),q=v(()=>e.clickable===!0||i.value===!0||e.tag==="label"),m=v(()=>e.disable!==!0&&q.value===!0),h=v(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(i.value===!0&&e.active===null?f.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=v(()=>{if(e.insetLevel===void 0)return null;const p=l.lang.rtl===!0?"Right":"Left";return{["padding"+p]:16+e.insetLevel*56+"px"}});function L(p){m.value===!0&&(w.value!==null&&(p.qKeyEvent!==!0&&document.activeElement===r.value?w.value.focus():document.activeElement===w.value&&r.value.focus()),c(p))}function g(p){if(m.value===!0&&Rt(p,13)===!0){Pe(p),p.qKeyEvent=!0;const b=new MouseEvent("click",p);b.qKeyEvent=!0,r.value.dispatchEvent(b)}n("keyup",p)}function u(){const p=ot(o.default,[]);return m.value===!0&&p.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:w})),p}return()=>{const p={ref:r,class:h.value,style:_.value,role:"listitem",onClick:L,onKeyup:g};return m.value===!0?(p.tabindex=e.tabindex||"0",Object.assign(p,s.value)):q.value===!0&&(p["aria-disabled"]="true"),C(d.value,p,u())}}});const wo=lt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function qo(e,o,n,l,t,i){return ee(),ue(go,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:$(()=>[e.icon?(ee(),ue(tt,{key:0,avatar:""},{default:$(()=>[B(Et,{name:e.icon},null,8,["name"])]),_:1})):Wt("",!0),B(tt,null,{default:$(()=>[B(Be,null,{default:$(()=>[se(xe(e.title),1)]),_:1}),B(Be,{caption:""},{default:$(()=>[se(xe(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var ko=at(wo,[["render",qo]]);const Co=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Lo=lt({name:"MainLayout",components:{EssentialLink:ko},setup(){const e=S(!1);return{essentialLinks:Co,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});function To(e,o,n,l,t,i){const s=Ie("EssentialLink"),f=Ie("router-view");return ee(),ue(yo,{view:"lHh Lpr lFf"},{default:$(()=>[B(Kt,{elevated:""},{default:$(()=>[B(Ut,null,{default:$(()=>[B(Bt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),B(jt,null,{default:$(()=>[se(" Quasar App ")]),_:1}),Ft("div",null,"Quasar v"+xe(e.$q.version),1)]),_:1})]),_:1}),B(mo,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":o[0]||(o[0]=d=>e.leftDrawerOpen=d),"show-if-above":"",bordered:""},{default:$(()=>[B(Gt,null,{default:$(()=>[B(Be,{header:""},{default:$(()=>[se(" Essential Links ")]),_:1}),(ee(!0),At(It,null,Nt(e.essentialLinks,d=>(ee(),ue(s,Xt({key:d.title},d),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),B(ho,null,{default:$(()=>[B(f)]),_:1})]),_:1})}var Bo=at(Lo,[["render",To]]);export{Bo as default};
