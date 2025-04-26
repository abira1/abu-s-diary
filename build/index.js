function iw(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in r)){const a=Object.getOwnPropertyDescriptor(s,l);a&&Object.defineProperty(r,l,a.get?a:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}})();function sw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var su={exports:{}},xs={},ou={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function ow(){if(Zp)return ie;Zp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function x(C){return C===null||typeof C!="object"?null:(C=_&&C[_]||C["@@iterator"],typeof C=="function"?C:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,P={};function A(C,O,re){this.props=C,this.context=O,this.refs=P,this.updater=re||b}A.prototype.isReactComponent={},A.prototype.setState=function(C,O){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,O,"setState")},A.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function H(){}H.prototype=A.prototype;function ne(C,O,re){this.props=C,this.context=O,this.refs=P,this.updater=re||b}var ee=ne.prototype=new H;ee.constructor=ne,k(ee,A.prototype),ee.isPureReactComponent=!0;var ce=Array.isArray,Pe=Object.prototype.hasOwnProperty,Me={current:null},We={key:!0,ref:!0,__self:!0,__source:!0};function tt(C,O,re){var le,de={},he=null,Ee=null;if(O!=null)for(le in O.ref!==void 0&&(Ee=O.ref),O.key!==void 0&&(he=""+O.key),O)Pe.call(O,le)&&!We.hasOwnProperty(le)&&(de[le]=O[le]);var me=arguments.length-2;if(me===1)de.children=re;else if(1<me){for(var be=Array(me),Et=0;Et<me;Et++)be[Et]=arguments[Et+2];de.children=be}if(C&&C.defaultProps)for(le in me=C.defaultProps,me)de[le]===void 0&&(de[le]=me[le]);return{$$typeof:r,type:C,key:he,ref:Ee,props:de,_owner:Me.current}}function ut(C,O){return{$$typeof:r,type:C.type,key:O,ref:C.ref,props:C.props,_owner:C._owner}}function xt(C){return typeof C=="object"&&C!==null&&C.$$typeof===r}function cn(C){var O={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(re){return O[re]})}var Rt=/\/+/g;function U(C,O){return typeof C=="object"&&C!==null&&C.key!=null?cn(""+C.key):O.toString(36)}function te(C,O,re,le,de){var he=typeof C;(he==="undefined"||he==="boolean")&&(C=null);var Ee=!1;if(C===null)Ee=!0;else switch(he){case"string":case"number":Ee=!0;break;case"object":switch(C.$$typeof){case r:case e:Ee=!0}}if(Ee)return Ee=C,de=de(Ee),C=le===""?"."+U(Ee,0):le,ce(de)?(re="",C!=null&&(re=C.replace(Rt,"$&/")+"/"),te(de,O,re,"",function(Et){return Et})):de!=null&&(xt(de)&&(de=ut(de,re+(!de.key||Ee&&Ee.key===de.key?"":(""+de.key).replace(Rt,"$&/")+"/")+C)),O.push(de)),1;if(Ee=0,le=le===""?".":le+":",ce(C))for(var me=0;me<C.length;me++){he=C[me];var be=le+U(he,me);Ee+=te(he,O,re,be,de)}else if(be=x(C),typeof be=="function")for(C=be.call(C),me=0;!(he=C.next()).done;)he=he.value,be=le+U(he,me++),Ee+=te(he,O,re,be,de);else if(he==="object")throw O=String(C),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ee}function xe(C,O,re){if(C==null)return C;var le=[],de=0;return te(C,le,"","",function(he){return O.call(re,he,de++)}),le}function _e(C){if(C._status===-1){var O=C._result;O=O(),O.then(function(re){(C._status===0||C._status===-1)&&(C._status=1,C._result=re)},function(re){(C._status===0||C._status===-1)&&(C._status=2,C._result=re)}),C._status===-1&&(C._status=0,C._result=O)}if(C._status===1)return C._result.default;throw C._result}var Te={current:null},z={transition:null},Y={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:z,ReactCurrentOwner:Me};function V(){throw Error("act(...) is not supported in production builds of React.")}return ie.Children={map:xe,forEach:function(C,O,re){xe(C,function(){O.apply(this,arguments)},re)},count:function(C){var O=0;return xe(C,function(){O++}),O},toArray:function(C){return xe(C,function(O){return O})||[]},only:function(C){if(!xt(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ie.Component=A,ie.Fragment=n,ie.Profiler=l,ie.PureComponent=ne,ie.StrictMode=s,ie.Suspense=m,ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y,ie.act=V,ie.cloneElement=function(C,O,re){if(C==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+C+".");var le=k({},C.props),de=C.key,he=C.ref,Ee=C._owner;if(O!=null){if(O.ref!==void 0&&(he=O.ref,Ee=Me.current),O.key!==void 0&&(de=""+O.key),C.type&&C.type.defaultProps)var me=C.type.defaultProps;for(be in O)Pe.call(O,be)&&!We.hasOwnProperty(be)&&(le[be]=O[be]===void 0&&me!==void 0?me[be]:O[be])}var be=arguments.length-2;if(be===1)le.children=re;else if(1<be){me=Array(be);for(var Et=0;Et<be;Et++)me[Et]=arguments[Et+2];le.children=me}return{$$typeof:r,type:C.type,key:de,ref:he,props:le,_owner:Ee}},ie.createContext=function(C){return C={$$typeof:u,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},C.Provider={$$typeof:a,_context:C},C.Consumer=C},ie.createElement=tt,ie.createFactory=function(C){var O=tt.bind(null,C);return O.type=C,O},ie.createRef=function(){return{current:null}},ie.forwardRef=function(C){return{$$typeof:p,render:C}},ie.isValidElement=xt,ie.lazy=function(C){return{$$typeof:y,_payload:{_status:-1,_result:C},_init:_e}},ie.memo=function(C,O){return{$$typeof:g,type:C,compare:O===void 0?null:O}},ie.startTransition=function(C){var O=z.transition;z.transition={};try{C()}finally{z.transition=O}},ie.unstable_act=V,ie.useCallback=function(C,O){return Te.current.useCallback(C,O)},ie.useContext=function(C){return Te.current.useContext(C)},ie.useDebugValue=function(){},ie.useDeferredValue=function(C){return Te.current.useDeferredValue(C)},ie.useEffect=function(C,O){return Te.current.useEffect(C,O)},ie.useId=function(){return Te.current.useId()},ie.useImperativeHandle=function(C,O,re){return Te.current.useImperativeHandle(C,O,re)},ie.useInsertionEffect=function(C,O){return Te.current.useInsertionEffect(C,O)},ie.useLayoutEffect=function(C,O){return Te.current.useLayoutEffect(C,O)},ie.useMemo=function(C,O){return Te.current.useMemo(C,O)},ie.useReducer=function(C,O,re){return Te.current.useReducer(C,O,re)},ie.useRef=function(C){return Te.current.useRef(C)},ie.useState=function(C){return Te.current.useState(C)},ie.useSyncExternalStore=function(C,O,re){return Te.current.useSyncExternalStore(C,O,re)},ie.useTransition=function(){return Te.current.useTransition()},ie.version="18.3.1",ie}var em;function Xu(){return em||(em=1,ou.exports=ow()),ou.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function lw(){if(tm)return xs;tm=1;var r=Xu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(p,m,g){var y,_={},x=null,b=null;g!==void 0&&(x=""+g),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(b=m.ref);for(y in m)s.call(m,y)&&!a.hasOwnProperty(y)&&(_[y]=m[y]);if(p&&p.defaultProps)for(y in m=p.defaultProps,m)_[y]===void 0&&(_[y]=m[y]);return{$$typeof:e,type:p,key:x,ref:b,props:_,_owner:l.current}}return xs.Fragment=n,xs.jsx=u,xs.jsxs=u,xs}var nm;function aw(){return nm||(nm=1,su.exports=lw()),su.exports}var h=aw(),R=Xu();const Ag=sw(R),cw=iw({__proto__:null,default:Ag},[R]);var ml={},lu={exports:{}},gt={},au={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function uw(){return rm||(rm=1,function(r){function e(z,Y){var V=z.length;z.push(Y);e:for(;0<V;){var C=V-1>>>1,O=z[C];if(0<l(O,Y))z[C]=Y,z[V]=O,V=C;else break e}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var Y=z[0],V=z.pop();if(V!==Y){z[0]=V;e:for(var C=0,O=z.length,re=O>>>1;C<re;){var le=2*(C+1)-1,de=z[le],he=le+1,Ee=z[he];if(0>l(de,V))he<O&&0>l(Ee,de)?(z[C]=Ee,z[he]=V,C=he):(z[C]=de,z[le]=V,C=le);else if(he<O&&0>l(Ee,V))z[C]=Ee,z[he]=V,C=he;else break e}}return Y}function l(z,Y){var V=z.sortIndex-Y.sortIndex;return V!==0?V:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;r.unstable_now=function(){return a.now()}}else{var u=Date,p=u.now();r.unstable_now=function(){return u.now()-p}}var m=[],g=[],y=1,_=null,x=3,b=!1,k=!1,P=!1,A=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(z){for(var Y=n(g);Y!==null;){if(Y.callback===null)s(g);else if(Y.startTime<=z)s(g),Y.sortIndex=Y.expirationTime,e(m,Y);else break;Y=n(g)}}function ce(z){if(P=!1,ee(z),!k)if(n(m)!==null)k=!0,_e(Pe);else{var Y=n(g);Y!==null&&Te(ce,Y.startTime-z)}}function Pe(z,Y){k=!1,P&&(P=!1,H(tt),tt=-1),b=!0;var V=x;try{for(ee(Y),_=n(m);_!==null&&(!(_.expirationTime>Y)||z&&!cn());){var C=_.callback;if(typeof C=="function"){_.callback=null,x=_.priorityLevel;var O=C(_.expirationTime<=Y);Y=r.unstable_now(),typeof O=="function"?_.callback=O:_===n(m)&&s(m),ee(Y)}else s(m);_=n(m)}if(_!==null)var re=!0;else{var le=n(g);le!==null&&Te(ce,le.startTime-Y),re=!1}return re}finally{_=null,x=V,b=!1}}var Me=!1,We=null,tt=-1,ut=5,xt=-1;function cn(){return!(r.unstable_now()-xt<ut)}function Rt(){if(We!==null){var z=r.unstable_now();xt=z;var Y=!0;try{Y=We(!0,z)}finally{Y?U():(Me=!1,We=null)}}else Me=!1}var U;if(typeof ne=="function")U=function(){ne(Rt)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,xe=te.port2;te.port1.onmessage=Rt,U=function(){xe.postMessage(null)}}else U=function(){A(Rt,0)};function _e(z){We=z,Me||(Me=!0,U())}function Te(z,Y){tt=A(function(){z(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){k||b||(k=!0,_e(Pe))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ut=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return n(m)},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Y=3;break;default:Y=x}var V=x;x=Y;try{return z()}finally{x=V}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var V=x;x=z;try{return Y()}finally{x=V}},r.unstable_scheduleCallback=function(z,Y,V){var C=r.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?C+V:C):V=C,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=V+O,z={id:y++,callback:Y,priorityLevel:z,startTime:V,expirationTime:O,sortIndex:-1},V>C?(z.sortIndex=V,e(g,z),n(m)===null&&z===n(g)&&(P?(H(tt),tt=-1):P=!0,Te(ce,V-C))):(z.sortIndex=O,e(m,z),k||b||(k=!0,_e(Pe))),z},r.unstable_shouldYield=cn,r.unstable_wrapCallback=function(z){var Y=x;return function(){var V=x;x=Y;try{return z.apply(this,arguments)}finally{x=V}}}}(cu)),cu}var im;function dw(){return im||(im=1,au.exports=uw()),au.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function hw(){if(sm)return gt;sm=1;var r=Xu(),e=dw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function a(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(l[t]=i,t=0;t<i.length;t++)s.add(i[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function x(t){return m.call(_,t)?!0:m.call(y,t)?!1:g.test(t)?_[t]=!0:(y[t]=!0,!1)}function b(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k(t,i,o,c){if(i===null||typeof i>"u"||b(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function P(t,i,o,c,d,f,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=f,this.removeEmptyString=v}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){A[t]=new P(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];A[i]=new P(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){A[t]=new P(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){A[t]=new P(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){A[t]=new P(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){A[t]=new P(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){A[t]=new P(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){A[t]=new P(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){A[t]=new P(t,5,!1,t.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function ne(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(H,ne);A[i]=new P(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(H,ne);A[i]=new P(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(H,ne);A[i]=new P(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){A[t]=new P(t,1,!1,t.toLowerCase(),null,!1,!1)}),A.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){A[t]=new P(t,1,!1,t.toLowerCase(),null,!0,!0)});function ee(t,i,o,c){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(k(i,o,d,c)&&(o=null),c||d===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):d.mustUseProperty?t[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?t.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var ce=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pe=Symbol.for("react.element"),Me=Symbol.for("react.portal"),We=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),cn=Symbol.for("react.context"),Rt=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),z=Symbol.iterator;function Y(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,C;function O(t){if(C===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);C=i&&i[1]||""}return`
`+C+t}var re=!1;function le(t,i){if(!t||re)return"";re=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(T){var c=T}Reflect.construct(t,[],i)}else{try{i.call()}catch(T){c=T}t.call(i.prototype)}else{try{throw Error()}catch(T){c=T}t()}}catch(T){if(T&&c&&typeof T.stack=="string"){for(var d=T.stack.split(`
`),f=c.stack.split(`
`),v=d.length-1,w=f.length-1;1<=v&&0<=w&&d[v]!==f[w];)w--;for(;1<=v&&0<=w;v--,w--)if(d[v]!==f[w]){if(v!==1||w!==1)do if(v--,w--,0>w||d[v]!==f[w]){var E=`
`+d[v].replace(" at new "," at ");return t.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",t.displayName)),E}while(1<=v&&0<=w);break}}}finally{re=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?O(t):""}function de(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=le(t.type,!1),t;case 11:return t=le(t.type.render,!1),t;case 1:return t=le(t.type,!0),t;default:return""}}function he(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case We:return"Fragment";case Me:return"Portal";case ut:return"Profiler";case tt:return"StrictMode";case U:return"Suspense";case te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cn:return(t.displayName||"Context")+".Consumer";case xt:return(t._context.displayName||"Context")+".Provider";case Rt:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xe:return i=t.displayName||null,i!==null?i:he(t.type)||"Memo";case _e:i=t._payload,t=t._init;try{return he(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(i);case 8:return i===tt?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Et(t){var i=be(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,f=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,f.call(this,v)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function io(t){t._valueTracker||(t._valueTracker=Et(t))}function ih(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=be(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function so(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ha(t,i){var o=i.checked;return V({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function sh(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=me(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function oh(t,i){i=i.checked,i!=null&&ee(t,"checked",i,!1)}function fa(t,i){oh(t,i);var o=me(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?pa(t,i.type,o):i.hasOwnProperty("defaultValue")&&pa(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function lh(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function pa(t,i,o){(i!=="number"||so(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Mi=Array.isArray;function zr(t,i,o,c){if(t=t.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<t.length;o++)d=i.hasOwnProperty("$"+t[o].value),t[o].selected!==d&&(t[o].selected=d),d&&c&&(t[o].defaultSelected=!0)}else{for(o=""+me(o),i=null,d=0;d<t.length;d++){if(t[d].value===o){t[d].selected=!0,c&&(t[d].defaultSelected=!0);return}i!==null||t[d].disabled||(i=t[d])}i!==null&&(i.selected=!0)}}function ma(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return V({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ah(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Mi(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:me(o)}}function ch(t,i){var o=me(i.value),c=me(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function uh(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function dh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ga(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?dh(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oo,hh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,d)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Li(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){ay.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Fi[i]=Fi[t]})});function fh(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+i).trim():i+"px"}function ph(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=fh(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,d):t[o]=d}}var cy=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function va(t,i){if(i){if(cy[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function _a(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ya=null;function wa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xa=null,Wr=null,Br=null;function mh(t){if(t=os(t)){if(typeof xa!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ro(i),xa(t.stateNode,t.type,i))}}function gh(t){Wr?Br?Br.push(t):Br=[t]:Wr=t}function vh(){if(Wr){var t=Wr,i=Br;if(Br=Wr=null,mh(t),i)for(t=0;t<i.length;t++)mh(i[t])}}function _h(t,i){return t(i)}function yh(){}var Ea=!1;function wh(t,i,o){if(Ea)return t(i,o);Ea=!0;try{return _h(t,i,o)}finally{Ea=!1,(Wr!==null||Br!==null)&&(yh(),vh())}}function Ui(t,i){var o=t.stateNode;if(o===null)return null;var c=Ro(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Sa=!1;if(p)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Sa=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Sa=!1}function uy(t,i,o,c,d,f,v,w,E){var T=Array.prototype.slice.call(arguments,3);try{i.apply(o,T)}catch(D){this.onError(D)}}var Wi=!1,lo=null,ao=!1,Ca=null,dy={onError:function(t){Wi=!0,lo=t}};function hy(t,i,o,c,d,f,v,w,E){Wi=!1,lo=null,uy.apply(dy,arguments)}function fy(t,i,o,c,d,f,v,w,E){if(hy.apply(this,arguments),Wi){if(Wi){var T=lo;Wi=!1,lo=null}else throw Error(n(198));ao||(ao=!0,Ca=T)}}function dr(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function xh(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Eh(t){if(dr(t)!==t)throw Error(n(188))}function py(t){var i=t.alternate;if(!i){if(i=dr(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var d=o.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===o)return Eh(d),t;if(f===c)return Eh(d),i;f=f.sibling}throw Error(n(188))}if(o.return!==c.return)o=d,c=f;else{for(var v=!1,w=d.child;w;){if(w===o){v=!0,o=d,c=f;break}if(w===c){v=!0,c=d,o=f;break}w=w.sibling}if(!v){for(w=f.child;w;){if(w===o){v=!0,o=f,c=d;break}if(w===c){v=!0,c=f,o=d;break}w=w.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Sh(t){return t=py(t),t!==null?Ch(t):null}function Ch(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ch(t);if(i!==null)return i;t=t.sibling}return null}var Nh=e.unstable_scheduleCallback,Ih=e.unstable_cancelCallback,my=e.unstable_shouldYield,gy=e.unstable_requestPaint,Le=e.unstable_now,vy=e.unstable_getCurrentPriorityLevel,Na=e.unstable_ImmediatePriority,kh=e.unstable_UserBlockingPriority,co=e.unstable_NormalPriority,_y=e.unstable_LowPriority,Th=e.unstable_IdlePriority,uo=null,Xt=null;function yy(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(uo,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Ey,wy=Math.log,xy=Math.LN2;function Ey(t){return t>>>=0,t===0?32:31-(wy(t)/xy|0)|0}var ho=64,fo=4194304;function Bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function po(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,d=t.suspendedLanes,f=t.pingedLanes,v=o&268435455;if(v!==0){var w=v&~d;w!==0?c=Bi(w):(f&=v,f!==0&&(c=Bi(f)))}else v=o&~d,v!==0?c=Bi(v):f!==0&&(c=Bi(f));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,f=i&-i,d>=f||d===16&&(f&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Lt(i),d=1<<o,c|=t[o],i&=~d;return c}function Sy(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cy(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,d=t.expirationTimes,f=t.pendingLanes;0<f;){var v=31-Lt(f),w=1<<v,E=d[v];E===-1?((w&o)===0||(w&c)!==0)&&(d[v]=Sy(w,i)):E<=i&&(t.expiredLanes|=w),f&=~w}}function Ia(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bh(){var t=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),t}function ka(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Vi(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Lt(i),t[i]=o}function Ny(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var d=31-Lt(o),f=1<<d;i[d]=0,c[d]=-1,t[d]=-1,o&=~f}}function Ta(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Lt(o),d=1<<c;d&i|t[c]&i&&(t[c]|=i),o&=~d}}var ge=0;function Rh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ph,ba,Ah,jh,Oh,Ra=!1,mo=[],kn=null,Tn=null,bn=null,Hi=new Map,$i=new Map,Rn=[],Iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Dh(t,i){switch(t){case"focusin":case"focusout":kn=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Hi.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(i.pointerId)}}function Gi(t,i,o,c,d,f){return t===null||t.nativeEvent!==f?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},i!==null&&(i=os(i),i!==null&&ba(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),t)}function ky(t,i,o,c,d){switch(i){case"focusin":return kn=Gi(kn,t,i,o,c,d),!0;case"dragenter":return Tn=Gi(Tn,t,i,o,c,d),!0;case"mouseover":return bn=Gi(bn,t,i,o,c,d),!0;case"pointerover":var f=d.pointerId;return Hi.set(f,Gi(Hi.get(f)||null,t,i,o,c,d)),!0;case"gotpointercapture":return f=d.pointerId,$i.set(f,Gi($i.get(f)||null,t,i,o,c,d)),!0}return!1}function Mh(t){var i=hr(t.target);if(i!==null){var o=dr(i);if(o!==null){if(i=o.tag,i===13){if(i=xh(o),i!==null){t.blockedOn=i,Oh(t.priority,function(){Ah(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function go(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Aa(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);ya=c,o.target.dispatchEvent(c),ya=null}else return i=os(o),i!==null&&ba(i),t.blockedOn=o,!1;i.shift()}return!0}function Lh(t,i,o){go(t)&&o.delete(i)}function Ty(){Ra=!1,kn!==null&&go(kn)&&(kn=null),Tn!==null&&go(Tn)&&(Tn=null),bn!==null&&go(bn)&&(bn=null),Hi.forEach(Lh),$i.forEach(Lh)}function Ki(t,i){t.blockedOn===i&&(t.blockedOn=null,Ra||(Ra=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ty)))}function qi(t){function i(d){return Ki(d,t)}if(0<mo.length){Ki(mo[0],t);for(var o=1;o<mo.length;o++){var c=mo[o];c.blockedOn===t&&(c.blockedOn=null)}}for(kn!==null&&Ki(kn,t),Tn!==null&&Ki(Tn,t),bn!==null&&Ki(bn,t),Hi.forEach(i),$i.forEach(i),o=0;o<Rn.length;o++)c=Rn[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Rn.length&&(o=Rn[0],o.blockedOn===null);)Mh(o),o.blockedOn===null&&Rn.shift()}var Vr=ce.ReactCurrentBatchConfig,vo=!0;function by(t,i,o,c){var d=ge,f=Vr.transition;Vr.transition=null;try{ge=1,Pa(t,i,o,c)}finally{ge=d,Vr.transition=f}}function Ry(t,i,o,c){var d=ge,f=Vr.transition;Vr.transition=null;try{ge=4,Pa(t,i,o,c)}finally{ge=d,Vr.transition=f}}function Pa(t,i,o,c){if(vo){var d=Aa(t,i,o,c);if(d===null)Qa(t,i,c,_o,o),Dh(t,c);else if(ky(d,t,i,o,c))c.stopPropagation();else if(Dh(t,c),i&4&&-1<Iy.indexOf(t)){for(;d!==null;){var f=os(d);if(f!==null&&Ph(f),f=Aa(t,i,o,c),f===null&&Qa(t,i,c,_o,o),f===d)break;d=f}d!==null&&c.stopPropagation()}else Qa(t,i,c,null,o)}}var _o=null;function Aa(t,i,o,c){if(_o=null,t=wa(c),t=hr(t),t!==null)if(i=dr(t),i===null)t=null;else if(o=i.tag,o===13){if(t=xh(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return _o=t,null}function Fh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case Na:return 1;case kh:return 4;case co:case _y:return 16;case Th:return 536870912;default:return 16}default:return 16}}var Pn=null,ja=null,yo=null;function Uh(){if(yo)return yo;var t,i=ja,o=i.length,c,d="value"in Pn?Pn.value:Pn.textContent,f=d.length;for(t=0;t<o&&i[t]===d[t];t++);var v=o-t;for(c=1;c<=v&&i[o-c]===d[f-c];c++);return yo=d.slice(t,1<c?1-c:void 0)}function wo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function zh(){return!1}function St(t){function i(o,c,d,f,v){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?xo:zh,this.isPropagationStopped=zh,this}return V(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=St(Hr),Qi=V({},Hr,{view:0,detail:0}),Py=St(Qi),Da,Ma,Yi,Eo=V({},Qi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yi&&(Yi&&t.type==="mousemove"?(Da=t.screenX-Yi.screenX,Ma=t.screenY-Yi.screenY):Ma=Da=0,Yi=t),Da)},movementY:function(t){return"movementY"in t?t.movementY:Ma}}),Wh=St(Eo),Ay=V({},Eo,{dataTransfer:0}),jy=St(Ay),Oy=V({},Qi,{relatedTarget:0}),La=St(Oy),Dy=V({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),My=St(Dy),Ly=V({},Hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fy=St(Ly),Uy=V({},Hr,{data:0}),Bh=St(Uy),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},By={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=By[t])?!!i[t]:!1}function Fa(){return Vy}var Hy=V({},Qi,{key:function(t){if(t.key){var i=zy[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fa,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=St(Hy),Gy=V({},Eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=St(Gy),Ky=V({},Qi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fa}),qy=St(Ky),Qy=V({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=St(Qy),Jy=V({},Eo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xy=St(Jy),Zy=[9,13,27,32],Ua=p&&"CompositionEvent"in window,Ji=null;p&&"documentMode"in document&&(Ji=document.documentMode);var e0=p&&"TextEvent"in window&&!Ji,Hh=p&&(!Ua||Ji&&8<Ji&&11>=Ji),$h=" ",Gh=!1;function Kh(t,i){switch(t){case"keyup":return Zy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function t0(t,i){switch(t){case"compositionend":return qh(i);case"keypress":return i.which!==32?null:(Gh=!0,$h);case"textInput":return t=i.data,t===$h&&Gh?null:t;default:return null}}function n0(t,i){if($r)return t==="compositionend"||!Ua&&Kh(t,i)?(t=Uh(),yo=ja=Pn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hh&&i.locale!=="ko"?null:i.data;default:return null}}var r0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!r0[t.type]:i==="textarea"}function Yh(t,i,o,c){gh(c),i=ko(i,"onChange"),0<i.length&&(o=new Oa("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var Xi=null,Zi=null;function i0(t){mf(t,0)}function So(t){var i=Yr(t);if(ih(i))return t}function s0(t,i){if(t==="change")return i}var Jh=!1;if(p){var za;if(p){var Wa="oninput"in document;if(!Wa){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Wa=typeof Xh.oninput=="function"}za=Wa}else za=!1;Jh=za&&(!document.documentMode||9<document.documentMode)}function Zh(){Xi&&(Xi.detachEvent("onpropertychange",ef),Zi=Xi=null)}function ef(t){if(t.propertyName==="value"&&So(Zi)){var i=[];Yh(i,Zi,t,wa(t)),wh(i0,i)}}function o0(t,i,o){t==="focusin"?(Zh(),Xi=i,Zi=o,Xi.attachEvent("onpropertychange",ef)):t==="focusout"&&Zh()}function l0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(Zi)}function a0(t,i){if(t==="click")return So(i)}function c0(t,i){if(t==="input"||t==="change")return So(i)}function u0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Ft=typeof Object.is=="function"?Object.is:u0;function es(t,i){if(Ft(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!m.call(i,d)||!Ft(t[d],i[d]))return!1}return!0}function tf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,i){var o=tf(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tf(o)}}function rf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function sf(){for(var t=window,i=so();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=so(t.document)}return i}function Ba(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function d0(t){var i=sf(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rf(o.ownerDocument.documentElement,o)){if(c!==null&&Ba(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var d=o.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!t.extend&&f>c&&(d=c,c=f,f=d),d=nf(o,f);var v=nf(o,c);d&&v&&(t.rangeCount!==1||t.anchorNode!==d.node||t.anchorOffset!==d.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),t.removeAllRanges(),f>c?(t.addRange(i),t.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var h0=p&&"documentMode"in document&&11>=document.documentMode,Gr=null,Va=null,ts=null,Ha=!1;function of(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ha||Gr==null||Gr!==so(c)||(c=Gr,"selectionStart"in c&&Ba(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ts&&es(ts,c)||(ts=c,c=ko(Va,"onSelect"),0<c.length&&(i=new Oa("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=Gr)))}function Co(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var Kr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},$a={},lf={};p&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function No(t){if($a[t])return $a[t];if(!Kr[t])return t;var i=Kr[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in lf)return $a[t]=i[o];return t}var af=No("animationend"),cf=No("animationiteration"),uf=No("animationstart"),df=No("transitionend"),hf=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function An(t,i){hf.set(t,i),a(i,[t])}for(var Ga=0;Ga<ff.length;Ga++){var Ka=ff[Ga],f0=Ka.toLowerCase(),p0=Ka[0].toUpperCase()+Ka.slice(1);An(f0,"on"+p0)}An(af,"onAnimationEnd"),An(cf,"onAnimationIteration"),An(uf,"onAnimationStart"),An("dblclick","onDoubleClick"),An("focusin","onFocus"),An("focusout","onBlur"),An(df,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function pf(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,fy(c,i,void 0,t),t.currentTarget=null}function mf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],d=c.event;c=c.listeners;e:{var f=void 0;if(i)for(var v=c.length-1;0<=v;v--){var w=c[v],E=w.instance,T=w.currentTarget;if(w=w.listener,E!==f&&d.isPropagationStopped())break e;pf(d,w,T),f=E}else for(v=0;v<c.length;v++){if(w=c[v],E=w.instance,T=w.currentTarget,w=w.listener,E!==f&&d.isPropagationStopped())break e;pf(d,w,T),f=E}}}if(ao)throw t=Ca,ao=!1,Ca=null,t}function Ne(t,i){var o=i[tc];o===void 0&&(o=i[tc]=new Set);var c=t+"__bubble";o.has(c)||(gf(i,t,2,!1),o.add(c))}function qa(t,i,o){var c=0;i&&(c|=4),gf(o,t,c,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Io]){t[Io]=!0,s.forEach(function(o){o!=="selectionchange"&&(m0.has(o)||qa(o,!1,t),qa(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Io]||(i[Io]=!0,qa("selectionchange",!1,i))}}function gf(t,i,o,c){switch(Fh(i)){case 1:var d=by;break;case 4:d=Ry;break;default:d=Pa}o=d.bind(null,i,o,t),d=void 0,!Sa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?t.addEventListener(i,o,{capture:!0,passive:d}):t.addEventListener(i,o,!0):d!==void 0?t.addEventListener(i,o,{passive:d}):t.addEventListener(i,o,!1)}function Qa(t,i,o,c,d){var f=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var w=c.stateNode.containerInfo;if(w===d||w.nodeType===8&&w.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;v=v.return}for(;w!==null;){if(v=hr(w),v===null)return;if(E=v.tag,E===5||E===6){c=f=v;continue e}w=w.parentNode}}c=c.return}wh(function(){var T=f,D=wa(o),M=[];e:{var j=hf.get(t);if(j!==void 0){var W=Oa,$=t;switch(t){case"keypress":if(wo(o)===0)break e;case"keydown":case"keyup":W=$y;break;case"focusin":$="focus",W=La;break;case"focusout":$="blur",W=La;break;case"beforeblur":case"afterblur":W=La;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=qy;break;case af:case cf:case uf:W=My;break;case df:W=Yy;break;case"scroll":W=Py;break;case"wheel":W=Xy;break;case"copy":case"cut":case"paste":W=Fy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Vh}var G=(i&4)!==0,Fe=!G&&t==="scroll",N=G?j!==null?j+"Capture":null:j;G=[];for(var S=T,I;S!==null;){I=S;var L=I.stateNode;if(I.tag===5&&L!==null&&(I=L,N!==null&&(L=Ui(S,N),L!=null&&G.push(is(S,L,I)))),Fe)break;S=S.return}0<G.length&&(j=new W(j,$,null,o,D),M.push({event:j,listeners:G}))}}if((i&7)===0){e:{if(j=t==="mouseover"||t==="pointerover",W=t==="mouseout"||t==="pointerout",j&&o!==ya&&($=o.relatedTarget||o.fromElement)&&(hr($)||$[un]))break e;if((W||j)&&(j=D.window===D?D:(j=D.ownerDocument)?j.defaultView||j.parentWindow:window,W?($=o.relatedTarget||o.toElement,W=T,$=$?hr($):null,$!==null&&(Fe=dr($),$!==Fe||$.tag!==5&&$.tag!==6)&&($=null)):(W=null,$=T),W!==$)){if(G=Wh,L="onMouseLeave",N="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(G=Vh,L="onPointerLeave",N="onPointerEnter",S="pointer"),Fe=W==null?j:Yr(W),I=$==null?j:Yr($),j=new G(L,S+"leave",W,o,D),j.target=Fe,j.relatedTarget=I,L=null,hr(D)===T&&(G=new G(N,S+"enter",$,o,D),G.target=I,G.relatedTarget=Fe,L=G),Fe=L,W&&$)t:{for(G=W,N=$,S=0,I=G;I;I=qr(I))S++;for(I=0,L=N;L;L=qr(L))I++;for(;0<S-I;)G=qr(G),S--;for(;0<I-S;)N=qr(N),I--;for(;S--;){if(G===N||N!==null&&G===N.alternate)break t;G=qr(G),N=qr(N)}G=null}else G=null;W!==null&&vf(M,j,W,G,!1),$!==null&&Fe!==null&&vf(M,Fe,$,G,!0)}}e:{if(j=T?Yr(T):window,W=j.nodeName&&j.nodeName.toLowerCase(),W==="select"||W==="input"&&j.type==="file")var K=s0;else if(Qh(j))if(Jh)K=c0;else{K=l0;var q=o0}else(W=j.nodeName)&&W.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(K=a0);if(K&&(K=K(t,T))){Yh(M,K,o,D);break e}q&&q(t,j,T),t==="focusout"&&(q=j._wrapperState)&&q.controlled&&j.type==="number"&&pa(j,"number",j.value)}switch(q=T?Yr(T):window,t){case"focusin":(Qh(q)||q.contentEditable==="true")&&(Gr=q,Va=T,ts=null);break;case"focusout":ts=Va=Gr=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,of(M,o,D);break;case"selectionchange":if(h0)break;case"keydown":case"keyup":of(M,o,D)}var Q;if(Ua)e:{switch(t){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else $r?Kh(t,o)&&(Z="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Z="onCompositionStart");Z&&(Hh&&o.locale!=="ko"&&($r||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&$r&&(Q=Uh()):(Pn=D,ja="value"in Pn?Pn.value:Pn.textContent,$r=!0)),q=ko(T,Z),0<q.length&&(Z=new Bh(Z,t,null,o,D),M.push({event:Z,listeners:q}),Q?Z.data=Q:(Q=qh(o),Q!==null&&(Z.data=Q)))),(Q=e0?t0(t,o):n0(t,o))&&(T=ko(T,"onBeforeInput"),0<T.length&&(D=new Bh("onBeforeInput","beforeinput",null,o,D),M.push({event:D,listeners:T}),D.data=Q))}mf(M,i)})}function is(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ko(t,i){for(var o=i+"Capture",c=[];t!==null;){var d=t,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ui(t,o),f!=null&&c.unshift(is(t,f,d)),f=Ui(t,i),f!=null&&c.push(is(t,f,d))),t=t.return}return c}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vf(t,i,o,c,d){for(var f=i._reactName,v=[];o!==null&&o!==c;){var w=o,E=w.alternate,T=w.stateNode;if(E!==null&&E===c)break;w.tag===5&&T!==null&&(w=T,d?(E=Ui(o,f),E!=null&&v.unshift(is(o,E,w))):d||(E=Ui(o,f),E!=null&&v.push(is(o,E,w)))),o=o.return}v.length!==0&&t.push({event:i,listeners:v})}var g0=/\r\n?/g,v0=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(g0,`
`).replace(v0,"")}function To(t,i,o){if(i=_f(i),_f(t)!==i&&o)throw Error(n(425))}function bo(){}var Ya=null,Ja=null;function Xa(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,_0=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,y0=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(w0)}:Za;function w0(t){setTimeout(function(){throw t})}function ec(t,i){var o=i,c=0;do{var d=o.nextSibling;if(t.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){t.removeChild(d),qi(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);qi(i)}function jn(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Qr,ss="__reactProps$"+Qr,un="__reactContainer$"+Qr,tc="__reactEvents$"+Qr,x0="__reactListeners$"+Qr,E0="__reactHandles$"+Qr;function hr(t){var i=t[Zt];if(i)return i;for(var o=t.parentNode;o;){if(i=o[un]||o[Zt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=wf(t);t!==null;){if(o=t[Zt])return o;t=wf(t)}return i}t=o,o=t.parentNode}return null}function os(t){return t=t[Zt]||t[un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ro(t){return t[ss]||null}var nc=[],Jr=-1;function On(t){return{current:t}}function Ie(t){0>Jr||(t.current=nc[Jr],nc[Jr]=null,Jr--)}function Se(t,i){Jr++,nc[Jr]=t.current,t.current=i}var Dn={},nt=On(Dn),dt=On(!1),fr=Dn;function Xr(t,i){var o=t.type.contextTypes;if(!o)return Dn;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in o)d[f]=i[f];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=d),d}function ht(t){return t=t.childContextTypes,t!=null}function Po(){Ie(dt),Ie(nt)}function xf(t,i,o){if(nt.current!==Dn)throw Error(n(168));Se(nt,i),Se(dt,o)}function Ef(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(n(108,Ee(t)||"Unknown",d));return V({},o,c)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,fr=nt.current,Se(nt,t),Se(dt,dt.current),!0}function Sf(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=Ef(t,i,fr),c.__reactInternalMemoizedMergedChildContext=t,Ie(dt),Ie(nt),Se(nt,t)):Ie(dt),Se(dt,o)}var dn=null,jo=!1,rc=!1;function Cf(t){dn===null?dn=[t]:dn.push(t)}function S0(t){jo=!0,Cf(t)}function Mn(){if(!rc&&dn!==null){rc=!0;var t=0,i=ge;try{var o=dn;for(ge=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}dn=null,jo=!1}catch(d){throw dn!==null&&(dn=dn.slice(t+1)),Nh(Na,Mn),d}finally{ge=i,rc=!1}}return null}var Zr=[],ei=0,Oo=null,Do=0,Pt=[],At=0,pr=null,hn=1,fn="";function mr(t,i){Zr[ei++]=Do,Zr[ei++]=Oo,Oo=t,Do=i}function Nf(t,i,o){Pt[At++]=hn,Pt[At++]=fn,Pt[At++]=pr,pr=t;var c=hn;t=fn;var d=32-Lt(c)-1;c&=~(1<<d),o+=1;var f=32-Lt(i)+d;if(30<f){var v=d-d%5;f=(c&(1<<v)-1).toString(32),c>>=v,d-=v,hn=1<<32-Lt(i)+d|o<<d|c,fn=f+t}else hn=1<<f|o<<d|c,fn=t}function ic(t){t.return!==null&&(mr(t,1),Nf(t,1,0))}function sc(t){for(;t===Oo;)Oo=Zr[--ei],Zr[ei]=null,Do=Zr[--ei],Zr[ei]=null;for(;t===pr;)pr=Pt[--At],Pt[At]=null,fn=Pt[--At],Pt[At]=null,hn=Pt[--At],Pt[At]=null}var Ct=null,Nt=null,Re=!1,Ut=null;function If(t,i){var o=Mt(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function kf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ct=t,Nt=jn(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ct=t,Nt=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=pr!==null?{id:hn,overflow:fn}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Mt(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Ct=t,Nt=null,!0):!1;default:return!1}}function oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lc(t){if(Re){var i=Nt;if(i){var o=i;if(!kf(t,i)){if(oc(t))throw Error(n(418));i=jn(o.nextSibling);var c=Ct;i&&kf(t,i)?If(c,o):(t.flags=t.flags&-4097|2,Re=!1,Ct=t)}}else{if(oc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Re=!1,Ct=t}}}function Tf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Mo(t){if(t!==Ct)return!1;if(!Re)return Tf(t),Re=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Xa(t.type,t.memoizedProps)),i&&(i=Nt)){if(oc(t))throw bf(),Error(n(418));for(;i;)If(t,i),i=jn(i.nextSibling)}if(Tf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Nt=jn(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Nt=null}}else Nt=Ct?jn(t.stateNode.nextSibling):null;return!0}function bf(){for(var t=Nt;t;)t=jn(t.nextSibling)}function ti(){Nt=Ct=null,Re=!1}function ac(t){Ut===null?Ut=[t]:Ut.push(t)}var C0=ce.ReactCurrentBatchConfig;function ls(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var d=c,f=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===f?i.ref:(i=function(v){var w=d.refs;v===null?delete w[f]:w[f]=v},i._stringRef=f,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Lo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Rf(t){var i=t._init;return i(t._payload)}function Pf(t){function i(N,S){if(t){var I=N.deletions;I===null?(N.deletions=[S],N.flags|=16):I.push(S)}}function o(N,S){if(!t)return null;for(;S!==null;)i(N,S),S=S.sibling;return null}function c(N,S){for(N=new Map;S!==null;)S.key!==null?N.set(S.key,S):N.set(S.index,S),S=S.sibling;return N}function d(N,S){return N=Hn(N,S),N.index=0,N.sibling=null,N}function f(N,S,I){return N.index=I,t?(I=N.alternate,I!==null?(I=I.index,I<S?(N.flags|=2,S):I):(N.flags|=2,S)):(N.flags|=1048576,S)}function v(N){return t&&N.alternate===null&&(N.flags|=2),N}function w(N,S,I,L){return S===null||S.tag!==6?(S=Zc(I,N.mode,L),S.return=N,S):(S=d(S,I),S.return=N,S)}function E(N,S,I,L){var K=I.type;return K===We?D(N,S,I.props.children,L,I.key):S!==null&&(S.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_e&&Rf(K)===S.type)?(L=d(S,I.props),L.ref=ls(N,S,I),L.return=N,L):(L=ll(I.type,I.key,I.props,null,N.mode,L),L.ref=ls(N,S,I),L.return=N,L)}function T(N,S,I,L){return S===null||S.tag!==4||S.stateNode.containerInfo!==I.containerInfo||S.stateNode.implementation!==I.implementation?(S=eu(I,N.mode,L),S.return=N,S):(S=d(S,I.children||[]),S.return=N,S)}function D(N,S,I,L,K){return S===null||S.tag!==7?(S=Sr(I,N.mode,L,K),S.return=N,S):(S=d(S,I),S.return=N,S)}function M(N,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Zc(""+S,N.mode,I),S.return=N,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Pe:return I=ll(S.type,S.key,S.props,null,N.mode,I),I.ref=ls(N,null,S),I.return=N,I;case Me:return S=eu(S,N.mode,I),S.return=N,S;case _e:var L=S._init;return M(N,L(S._payload),I)}if(Mi(S)||Y(S))return S=Sr(S,N.mode,I,null),S.return=N,S;Lo(N,S)}return null}function j(N,S,I,L){var K=S!==null?S.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return K!==null?null:w(N,S,""+I,L);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Pe:return I.key===K?E(N,S,I,L):null;case Me:return I.key===K?T(N,S,I,L):null;case _e:return K=I._init,j(N,S,K(I._payload),L)}if(Mi(I)||Y(I))return K!==null?null:D(N,S,I,L,null);Lo(N,I)}return null}function W(N,S,I,L,K){if(typeof L=="string"&&L!==""||typeof L=="number")return N=N.get(I)||null,w(S,N,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Pe:return N=N.get(L.key===null?I:L.key)||null,E(S,N,L,K);case Me:return N=N.get(L.key===null?I:L.key)||null,T(S,N,L,K);case _e:var q=L._init;return W(N,S,I,q(L._payload),K)}if(Mi(L)||Y(L))return N=N.get(I)||null,D(S,N,L,K,null);Lo(S,L)}return null}function $(N,S,I,L){for(var K=null,q=null,Q=S,Z=S=0,qe=null;Q!==null&&Z<I.length;Z++){Q.index>Z?(qe=Q,Q=null):qe=Q.sibling;var fe=j(N,Q,I[Z],L);if(fe===null){Q===null&&(Q=qe);break}t&&Q&&fe.alternate===null&&i(N,Q),S=f(fe,S,Z),q===null?K=fe:q.sibling=fe,q=fe,Q=qe}if(Z===I.length)return o(N,Q),Re&&mr(N,Z),K;if(Q===null){for(;Z<I.length;Z++)Q=M(N,I[Z],L),Q!==null&&(S=f(Q,S,Z),q===null?K=Q:q.sibling=Q,q=Q);return Re&&mr(N,Z),K}for(Q=c(N,Q);Z<I.length;Z++)qe=W(Q,N,Z,I[Z],L),qe!==null&&(t&&qe.alternate!==null&&Q.delete(qe.key===null?Z:qe.key),S=f(qe,S,Z),q===null?K=qe:q.sibling=qe,q=qe);return t&&Q.forEach(function($n){return i(N,$n)}),Re&&mr(N,Z),K}function G(N,S,I,L){var K=Y(I);if(typeof K!="function")throw Error(n(150));if(I=K.call(I),I==null)throw Error(n(151));for(var q=K=null,Q=S,Z=S=0,qe=null,fe=I.next();Q!==null&&!fe.done;Z++,fe=I.next()){Q.index>Z?(qe=Q,Q=null):qe=Q.sibling;var $n=j(N,Q,fe.value,L);if($n===null){Q===null&&(Q=qe);break}t&&Q&&$n.alternate===null&&i(N,Q),S=f($n,S,Z),q===null?K=$n:q.sibling=$n,q=$n,Q=qe}if(fe.done)return o(N,Q),Re&&mr(N,Z),K;if(Q===null){for(;!fe.done;Z++,fe=I.next())fe=M(N,fe.value,L),fe!==null&&(S=f(fe,S,Z),q===null?K=fe:q.sibling=fe,q=fe);return Re&&mr(N,Z),K}for(Q=c(N,Q);!fe.done;Z++,fe=I.next())fe=W(Q,N,Z,fe.value,L),fe!==null&&(t&&fe.alternate!==null&&Q.delete(fe.key===null?Z:fe.key),S=f(fe,S,Z),q===null?K=fe:q.sibling=fe,q=fe);return t&&Q.forEach(function(rw){return i(N,rw)}),Re&&mr(N,Z),K}function Fe(N,S,I,L){if(typeof I=="object"&&I!==null&&I.type===We&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Pe:e:{for(var K=I.key,q=S;q!==null;){if(q.key===K){if(K=I.type,K===We){if(q.tag===7){o(N,q.sibling),S=d(q,I.props.children),S.return=N,N=S;break e}}else if(q.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===_e&&Rf(K)===q.type){o(N,q.sibling),S=d(q,I.props),S.ref=ls(N,q,I),S.return=N,N=S;break e}o(N,q);break}else i(N,q);q=q.sibling}I.type===We?(S=Sr(I.props.children,N.mode,L,I.key),S.return=N,N=S):(L=ll(I.type,I.key,I.props,null,N.mode,L),L.ref=ls(N,S,I),L.return=N,N=L)}return v(N);case Me:e:{for(q=I.key;S!==null;){if(S.key===q)if(S.tag===4&&S.stateNode.containerInfo===I.containerInfo&&S.stateNode.implementation===I.implementation){o(N,S.sibling),S=d(S,I.children||[]),S.return=N,N=S;break e}else{o(N,S);break}else i(N,S);S=S.sibling}S=eu(I,N.mode,L),S.return=N,N=S}return v(N);case _e:return q=I._init,Fe(N,S,q(I._payload),L)}if(Mi(I))return $(N,S,I,L);if(Y(I))return G(N,S,I,L);Lo(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,S!==null&&S.tag===6?(o(N,S.sibling),S=d(S,I),S.return=N,N=S):(o(N,S),S=Zc(I,N.mode,L),S.return=N,N=S),v(N)):o(N,S)}return Fe}var ni=Pf(!0),Af=Pf(!1),Fo=On(null),Uo=null,ri=null,cc=null;function uc(){cc=ri=Uo=null}function dc(t){var i=Fo.current;Ie(Fo),t._currentValue=i}function hc(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function ii(t,i){Uo=t,cc=ri=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(ft=!0),t.firstContext=null)}function jt(t){var i=t._currentValue;if(cc!==t)if(t={context:t,memoizedValue:i,next:null},ri===null){if(Uo===null)throw Error(n(308));ri=t,Uo.dependencies={lanes:0,firstContext:t}}else ri=ri.next=t;return i}var gr=null;function fc(t){gr===null?gr=[t]:gr.push(t)}function jf(t,i,o,c){var d=i.interleaved;return d===null?(o.next=o,fc(i)):(o.next=d.next,d.next=o),i.interleaved=o,pn(t,c)}function pn(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Ln=!1;function pc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Of(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Fn(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(ue&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,pn(t,o)}return d=c.interleaved,d===null?(i.next=i,fc(c)):(i.next=d.next,d.next=i),c.interleaved=i,pn(t,o)}function zo(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Ta(t,o)}}function Df(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?d=f=v:f=f.next=v,o=o.next}while(o!==null);f===null?d=f=i:f=f.next=i}else d=f=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Wo(t,i,o,c){var d=t.updateQueue;Ln=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var E=w,T=E.next;E.next=null,v===null?f=T:v.next=T,v=E;var D=t.alternate;D!==null&&(D=D.updateQueue,w=D.lastBaseUpdate,w!==v&&(w===null?D.firstBaseUpdate=T:w.next=T,D.lastBaseUpdate=E))}if(f!==null){var M=d.baseState;v=0,D=T=E=null,w=f;do{var j=w.lane,W=w.eventTime;if((c&j)===j){D!==null&&(D=D.next={eventTime:W,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var $=t,G=w;switch(j=i,W=o,G.tag){case 1:if($=G.payload,typeof $=="function"){M=$.call(W,M,j);break e}M=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=G.payload,j=typeof $=="function"?$.call(W,M,j):$,j==null)break e;M=V({},M,j);break e;case 2:Ln=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,j=d.effects,j===null?d.effects=[w]:j.push(w))}else W={eventTime:W,lane:j,tag:w.tag,payload:w.payload,callback:w.callback,next:null},D===null?(T=D=W,E=M):D=D.next=W,v|=j;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;j=w,w=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);if(D===null&&(E=M),d.baseState=E,d.firstBaseUpdate=T,d.lastBaseUpdate=D,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else f===null&&(d.shared.lanes=0);yr|=v,t.lanes=v,t.memoizedState=M}}function Mf(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var as={},en=On(as),cs=On(as),us=On(as);function vr(t){if(t===as)throw Error(n(174));return t}function mc(t,i){switch(Se(us,i),Se(cs,t),Se(en,as),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ga(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ga(i,t)}Ie(en),Se(en,i)}function si(){Ie(en),Ie(cs),Ie(us)}function Lf(t){vr(us.current);var i=vr(en.current),o=ga(i,t.type);i!==o&&(Se(cs,t),Se(en,o))}function gc(t){cs.current===t&&(Ie(en),Ie(cs))}var Ae=On(0);function Bo(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vc=[];function _c(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var Vo=ce.ReactCurrentDispatcher,yc=ce.ReactCurrentBatchConfig,_r=0,je=null,Be=null,Ge=null,Ho=!1,ds=!1,hs=0,N0=0;function rt(){throw Error(n(321))}function wc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!Ft(t[o],i[o]))return!1;return!0}function xc(t,i,o,c,d,f){if(_r=f,je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=t===null||t.memoizedState===null?b0:R0,t=o(c,d),ds){f=0;do{if(ds=!1,hs=0,25<=f)throw Error(n(301));f+=1,Ge=Be=null,i.updateQueue=null,Vo.current=P0,t=o(c,d)}while(ds)}if(Vo.current=Ko,i=Be!==null&&Be.next!==null,_r=0,Ge=Be=je=null,Ho=!1,i)throw Error(n(300));return t}function Ec(){var t=hs!==0;return hs=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?je.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Ot(){if(Be===null){var t=je.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var i=Ge===null?je.memoizedState:Ge.next;if(i!==null)Ge=i,Be=t;else{if(t===null)throw Error(n(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?je.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function fs(t,i){return typeof i=="function"?i(t):i}function Sc(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=Be,d=c.baseQueue,f=o.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}c.baseQueue=d=f,o.pending=null}if(d!==null){f=d.next,c=c.baseState;var w=v=null,E=null,T=f;do{var D=T.lane;if((_r&D)===D)E!==null&&(E=E.next={lane:0,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null}),c=T.hasEagerState?T.eagerState:t(c,T.action);else{var M={lane:D,action:T.action,hasEagerState:T.hasEagerState,eagerState:T.eagerState,next:null};E===null?(w=E=M,v=c):E=E.next=M,je.lanes|=D,yr|=D}T=T.next}while(T!==null&&T!==f);E===null?v=c:E.next=w,Ft(c,i.memoizedState)||(ft=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=E,o.lastRenderedState=c}if(t=o.interleaved,t!==null){d=t;do f=d.lane,je.lanes|=f,yr|=f,d=d.next;while(d!==t)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cc(t){var i=Ot(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,d=o.pending,f=i.memoizedState;if(d!==null){o.pending=null;var v=d=d.next;do f=t(f,v.action),v=v.next;while(v!==d);Ft(f,i.memoizedState)||(ft=!0),i.memoizedState=f,i.baseQueue===null&&(i.baseState=f),o.lastRenderedState=f}return[f,c]}function Ff(){}function Uf(t,i){var o=je,c=Ot(),d=i(),f=!Ft(c.memoizedState,d);if(f&&(c.memoizedState=d,ft=!0),c=c.queue,Nc(Bf.bind(null,o,c,t),[t]),c.getSnapshot!==i||f||Ge!==null&&Ge.memoizedState.tag&1){if(o.flags|=2048,ps(9,Wf.bind(null,o,c,d,i),void 0,null),Ke===null)throw Error(n(349));(_r&30)!==0||zf(o,i,d)}return d}function zf(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function Wf(t,i,o,c){i.value=o,i.getSnapshot=c,Vf(i)&&Hf(t)}function Bf(t,i,o){return o(function(){Vf(i)&&Hf(t)})}function Vf(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!Ft(t,o)}catch{return!0}}function Hf(t){var i=pn(t,1);i!==null&&Vt(i,t,1,-1)}function $f(t){var i=tn();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:t},i.queue=t,t=t.dispatch=T0.bind(null,je,t),[i.memoizedState,t]}function ps(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=je.updateQueue,i===null?(i={lastEffect:null,stores:null},je.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function Gf(){return Ot().memoizedState}function $o(t,i,o,c){var d=tn();je.flags|=t,d.memoizedState=ps(1|i,o,void 0,c===void 0?null:c)}function Go(t,i,o,c){var d=Ot();c=c===void 0?null:c;var f=void 0;if(Be!==null){var v=Be.memoizedState;if(f=v.destroy,c!==null&&wc(c,v.deps)){d.memoizedState=ps(i,o,f,c);return}}je.flags|=t,d.memoizedState=ps(1|i,o,f,c)}function Kf(t,i){return $o(8390656,8,t,i)}function Nc(t,i){return Go(2048,8,t,i)}function qf(t,i){return Go(4,2,t,i)}function Qf(t,i){return Go(4,4,t,i)}function Yf(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Jf(t,i,o){return o=o!=null?o.concat([t]):null,Go(4,4,Yf.bind(null,i,t),o)}function Ic(){}function Xf(t,i){var o=Ot();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&wc(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Zf(t,i){var o=Ot();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&wc(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function ep(t,i,o){return(_r&21)===0?(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=o):(Ft(o,i)||(o=bh(),je.lanes|=o,yr|=o,t.baseState=!0),i)}function I0(t,i){var o=ge;ge=o!==0&&4>o?o:4,t(!0);var c=yc.transition;yc.transition={};try{t(!1),i()}finally{ge=o,yc.transition=c}}function tp(){return Ot().memoizedState}function k0(t,i,o){var c=Bn(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},np(t))rp(i,o);else if(o=jf(t,i,o,c),o!==null){var d=at();Vt(o,t,c,d),ip(o,i,c)}}function T0(t,i,o){var c=Bn(t),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(np(t))rp(i,d);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=i.lastRenderedReducer,f!==null))try{var v=i.lastRenderedState,w=f(v,o);if(d.hasEagerState=!0,d.eagerState=w,Ft(w,v)){var E=i.interleaved;E===null?(d.next=d,fc(i)):(d.next=E.next,E.next=d),i.interleaved=d;return}}catch{}finally{}o=jf(t,i,d,c),o!==null&&(d=at(),Vt(o,t,c,d),ip(o,i,c))}}function np(t){var i=t.alternate;return t===je||i!==null&&i===je}function rp(t,i){ds=Ho=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function ip(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,Ta(t,o)}}var Ko={readContext:jt,useCallback:rt,useContext:rt,useEffect:rt,useImperativeHandle:rt,useInsertionEffect:rt,useLayoutEffect:rt,useMemo:rt,useReducer:rt,useRef:rt,useState:rt,useDebugValue:rt,useDeferredValue:rt,useTransition:rt,useMutableSource:rt,useSyncExternalStore:rt,useId:rt,unstable_isNewReconciler:!1},b0={readContext:jt,useCallback:function(t,i){return tn().memoizedState=[t,i===void 0?null:i],t},useContext:jt,useEffect:Kf,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,$o(4194308,4,Yf.bind(null,i,t),o)},useLayoutEffect:function(t,i){return $o(4194308,4,t,i)},useInsertionEffect:function(t,i){return $o(4,2,t,i)},useMemo:function(t,i){var o=tn();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=tn();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=k0.bind(null,je,t),[c.memoizedState,t]},useRef:function(t){var i=tn();return t={current:t},i.memoizedState=t},useState:$f,useDebugValue:Ic,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=$f(!1),i=t[0];return t=I0.bind(null,t[1]),tn().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=je,d=tn();if(Re){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),Ke===null)throw Error(n(349));(_r&30)!==0||zf(c,i,o)}d.memoizedState=o;var f={value:o,getSnapshot:i};return d.queue=f,Kf(Bf.bind(null,c,f,t),[t]),c.flags|=2048,ps(9,Wf.bind(null,c,f,o,i),void 0,null),o},useId:function(){var t=tn(),i=Ke.identifierPrefix;if(Re){var o=fn,c=hn;o=(c&~(1<<32-Lt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=hs++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=N0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},R0={readContext:jt,useCallback:Xf,useContext:jt,useEffect:Nc,useImperativeHandle:Jf,useInsertionEffect:qf,useLayoutEffect:Qf,useMemo:Zf,useReducer:Sc,useRef:Gf,useState:function(){return Sc(fs)},useDebugValue:Ic,useDeferredValue:function(t){var i=Ot();return ep(i,Be.memoizedState,t)},useTransition:function(){var t=Sc(fs)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:tp,unstable_isNewReconciler:!1},P0={readContext:jt,useCallback:Xf,useContext:jt,useEffect:Nc,useImperativeHandle:Jf,useInsertionEffect:qf,useLayoutEffect:Qf,useMemo:Zf,useReducer:Cc,useRef:Gf,useState:function(){return Cc(fs)},useDebugValue:Ic,useDeferredValue:function(t){var i=Ot();return Be===null?i.memoizedState=t:ep(i,Be.memoizedState,t)},useTransition:function(){var t=Cc(fs)[0],i=Ot().memoizedState;return[t,i]},useMutableSource:Ff,useSyncExternalStore:Uf,useId:tp,unstable_isNewReconciler:!1};function zt(t,i){if(t&&t.defaultProps){i=V({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function kc(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:V({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var qo={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=at(),d=Bn(t),f=mn(c,d);f.payload=i,o!=null&&(f.callback=o),i=Fn(t,f,d),i!==null&&(Vt(i,t,d,c),zo(i,t,d))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=at(),d=Bn(t),f=mn(c,d);f.tag=1,f.payload=i,o!=null&&(f.callback=o),i=Fn(t,f,d),i!==null&&(Vt(i,t,d,c),zo(i,t,d))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=at(),c=Bn(t),d=mn(o,c);d.tag=2,i!=null&&(d.callback=i),i=Fn(t,d,c),i!==null&&(Vt(i,t,c,o),zo(i,t,c))}};function sp(t,i,o,c,d,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,f,v):i.prototype&&i.prototype.isPureReactComponent?!es(o,c)||!es(d,f):!0}function op(t,i,o){var c=!1,d=Dn,f=i.contextType;return typeof f=="object"&&f!==null?f=jt(f):(d=ht(i)?fr:nt.current,c=i.contextTypes,f=(c=c!=null)?Xr(t,d):Dn),i=new i(o,f),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=d,t.__reactInternalMemoizedMaskedChildContext=f),i}function lp(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&qo.enqueueReplaceState(i,i.state,null)}function Tc(t,i,o,c){var d=t.stateNode;d.props=o,d.state=t.memoizedState,d.refs={},pc(t);var f=i.contextType;typeof f=="object"&&f!==null?d.context=jt(f):(f=ht(i)?fr:nt.current,d.context=Xr(t,f)),d.state=t.memoizedState,f=i.getDerivedStateFromProps,typeof f=="function"&&(kc(t,i,f,o),d.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&qo.enqueueReplaceState(d,d.state,null),Wo(t,o,d,c),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308)}function oi(t,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var d=o}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:i,stack:d,digest:null}}function bc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Rc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var A0=typeof WeakMap=="function"?WeakMap:Map;function ap(t,i,o){o=mn(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){tl||(tl=!0,$c=c),Rc(t,i)},o}function cp(t,i,o){o=mn(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Rc(t,i)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Rc(t,i),typeof c!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),o}function up(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new A0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),t=G0.bind(null,t,i,o),i.then(t,t))}function dp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function hp(t,i,o,c,d){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=mn(-1,1),i.tag=2,Fn(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=d,t)}var j0=ce.ReactCurrentOwner,ft=!1;function lt(t,i,o,c){i.child=t===null?Af(i,null,o,c):ni(i,t.child,o,c)}function fp(t,i,o,c,d){o=o.render;var f=i.ref;return ii(i,d),c=xc(t,i,o,c,f,d),o=Ec(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Re&&o&&ic(i),i.flags|=1,lt(t,i,c,d),i.child)}function pp(t,i,o,c,d){if(t===null){var f=o.type;return typeof f=="function"&&!Xc(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=f,mp(t,i,f,c,d)):(t=ll(o.type,null,c,i,i.mode,d),t.ref=i.ref,t.return=i,i.child=t)}if(f=t.child,(t.lanes&d)===0){var v=f.memoizedProps;if(o=o.compare,o=o!==null?o:es,o(v,c)&&t.ref===i.ref)return gn(t,i,d)}return i.flags|=1,t=Hn(f,c),t.ref=i.ref,t.return=i,i.child=t}function mp(t,i,o,c,d){if(t!==null){var f=t.memoizedProps;if(es(f,c)&&t.ref===i.ref)if(ft=!1,i.pendingProps=c=f,(t.lanes&d)!==0)(t.flags&131072)!==0&&(ft=!0);else return i.lanes=t.lanes,gn(t,i,d)}return Pc(t,i,o,c,d)}function gp(t,i,o){var c=i.pendingProps,d=c.children,f=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(ai,It),It|=o;else{if((o&1073741824)===0)return t=f!==null?f.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Se(ai,It),It|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:o,Se(ai,It),It|=c}else f!==null?(c=f.baseLanes|o,i.memoizedState=null):c=o,Se(ai,It),It|=c;return lt(t,i,d,o),i.child}function vp(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Pc(t,i,o,c,d){var f=ht(o)?fr:nt.current;return f=Xr(i,f),ii(i,d),o=xc(t,i,o,c,f,d),c=Ec(),t!==null&&!ft?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~d,gn(t,i,d)):(Re&&c&&ic(i),i.flags|=1,lt(t,i,o,d),i.child)}function _p(t,i,o,c,d){if(ht(o)){var f=!0;Ao(i)}else f=!1;if(ii(i,d),i.stateNode===null)Yo(t,i),op(i,o,c),Tc(i,o,c,d),c=!0;else if(t===null){var v=i.stateNode,w=i.memoizedProps;v.props=w;var E=v.context,T=o.contextType;typeof T=="object"&&T!==null?T=jt(T):(T=ht(o)?fr:nt.current,T=Xr(i,T));var D=o.getDerivedStateFromProps,M=typeof D=="function"||typeof v.getSnapshotBeforeUpdate=="function";M||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==c||E!==T)&&lp(i,v,c,T),Ln=!1;var j=i.memoizedState;v.state=j,Wo(i,c,v,d),E=i.memoizedState,w!==c||j!==E||dt.current||Ln?(typeof D=="function"&&(kc(i,o,D,c),E=i.memoizedState),(w=Ln||sp(i,o,w,c,j,E,T))?(M||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=E),v.props=c,v.state=E,v.context=T,c=w):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Of(t,i),w=i.memoizedProps,T=i.type===i.elementType?w:zt(i.type,w),v.props=T,M=i.pendingProps,j=v.context,E=o.contextType,typeof E=="object"&&E!==null?E=jt(E):(E=ht(o)?fr:nt.current,E=Xr(i,E));var W=o.getDerivedStateFromProps;(D=typeof W=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(w!==M||j!==E)&&lp(i,v,c,E),Ln=!1,j=i.memoizedState,v.state=j,Wo(i,c,v,d);var $=i.memoizedState;w!==M||j!==$||dt.current||Ln?(typeof W=="function"&&(kc(i,o,W,c),$=i.memoizedState),(T=Ln||sp(i,o,T,c,j,$,E)||!1)?(D||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,$,E),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,$,E)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$),v.props=c,v.state=$,v.context=E,c=T):(typeof v.componentDidUpdate!="function"||w===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),c=!1)}return Ac(t,i,o,c,f,d)}function Ac(t,i,o,c,d,f){vp(t,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Sf(i,o,!1),gn(t,i,f);c=i.stateNode,j0.current=i;var w=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&v?(i.child=ni(i,t.child,null,f),i.child=ni(i,null,w,f)):lt(t,i,w,f),i.memoizedState=c.state,d&&Sf(i,o,!0),i.child}function yp(t){var i=t.stateNode;i.pendingContext?xf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&xf(t,i.context,!1),mc(t,i.containerInfo)}function wp(t,i,o,c,d){return ti(),ac(d),i.flags|=256,lt(t,i,o,c),i.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function Oc(t){return{baseLanes:t,cachePool:null,transitions:null}}function xp(t,i,o){var c=i.pendingProps,d=Ae.current,f=!1,v=(i.flags&128)!==0,w;if((w=v)||(w=t!==null&&t.memoizedState===null?!1:(d&2)!==0),w?(f=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(d|=1),Se(Ae,d&1),t===null)return lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,t=c.fallback,f?(c=i.mode,f=i.child,v={mode:"hidden",children:v},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=v):f=al(v,c,0,null),t=Sr(t,c,o,null),f.return=i,t.return=i,f.sibling=t,i.child=f,i.child.memoizedState=Oc(o),i.memoizedState=jc,t):Dc(i,v));if(d=t.memoizedState,d!==null&&(w=d.dehydrated,w!==null))return O0(t,i,v,c,w,d,o);if(f){f=c.fallback,v=i.mode,d=t.child,w=d.sibling;var E={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=E,i.deletions=null):(c=Hn(d,E),c.subtreeFlags=d.subtreeFlags&14680064),w!==null?f=Hn(w,f):(f=Sr(f,v,o,null),f.flags|=2),f.return=i,c.return=i,c.sibling=f,i.child=c,c=f,f=i.child,v=t.child.memoizedState,v=v===null?Oc(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},f.memoizedState=v,f.childLanes=t.childLanes&~o,i.memoizedState=jc,c}return f=t.child,t=f.sibling,c=Hn(f,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Dc(t,i){return i=al({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Qo(t,i,o,c){return c!==null&&ac(c),ni(i,t.child,null,o),t=Dc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function O0(t,i,o,c,d,f,v){if(o)return i.flags&256?(i.flags&=-257,c=bc(Error(n(422))),Qo(t,i,v,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(f=c.fallback,d=i.mode,c=al({mode:"visible",children:c.children},d,0,null),f=Sr(f,d,v,null),f.flags|=2,c.return=i,f.return=i,c.sibling=f,i.child=c,(i.mode&1)!==0&&ni(i,t.child,null,v),i.child.memoizedState=Oc(v),i.memoizedState=jc,f);if((i.mode&1)===0)return Qo(t,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var w=c.dgst;return c=w,f=Error(n(419)),c=bc(f,c,void 0),Qo(t,i,v,c)}if(w=(v&t.childLanes)!==0,ft||w){if(c=Ke,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,pn(t,d),Vt(c,t,d,-1))}return Jc(),c=bc(Error(n(421))),Qo(t,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=t.child,i=K0.bind(null,t),d._reactRetry=i,null):(t=f.treeContext,Nt=jn(d.nextSibling),Ct=i,Re=!0,Ut=null,t!==null&&(Pt[At++]=hn,Pt[At++]=fn,Pt[At++]=pr,hn=t.id,fn=t.overflow,pr=i),i=Dc(i,c.children),i.flags|=4096,i)}function Ep(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),hc(t.return,i,o)}function Mc(t,i,o,c,d){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(f.isBackwards=i,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=o,f.tailMode=d)}function Sp(t,i,o){var c=i.pendingProps,d=c.revealOrder,f=c.tail;if(lt(t,i,c.children,o),c=Ae.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,o,i);else if(t.tag===19)Ep(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Se(Ae,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)t=o.alternate,t!==null&&Bo(t)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Mc(i,!1,d,o,f);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(t=d.alternate,t!==null&&Bo(t)===null){i.child=d;break}t=d.sibling,d.sibling=o,o=d,d=t}Mc(i,!0,o,null,f);break;case"together":Mc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function gn(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),yr|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=Hn(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=Hn(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function D0(t,i,o){switch(i.tag){case 3:yp(i),ti();break;case 5:Lf(i);break;case 1:ht(i.type)&&Ao(i);break;case 4:mc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Se(Fo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Se(Ae,Ae.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?xp(t,i,o):(Se(Ae,Ae.current&1),t=gn(t,i,o),t!==null?t.sibling:null);Se(Ae,Ae.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Sp(t,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Ae,Ae.current),c)break;return null;case 22:case 23:return i.lanes=0,gp(t,i,o)}return gn(t,i,o)}var Cp,Lc,Np,Ip;Cp=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Lc=function(){},Np=function(t,i,o,c){var d=t.memoizedProps;if(d!==c){t=i.stateNode,vr(en.current);var f=null;switch(o){case"input":d=ha(t,d),c=ha(t,c),f=[];break;case"select":d=V({},d,{value:void 0}),c=V({},c,{value:void 0}),f=[];break;case"textarea":d=ma(t,d),c=ma(t,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=bo)}va(o,c);var v;o=null;for(T in d)if(!c.hasOwnProperty(T)&&d.hasOwnProperty(T)&&d[T]!=null)if(T==="style"){var w=d[T];for(v in w)w.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else T!=="dangerouslySetInnerHTML"&&T!=="children"&&T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&T!=="autoFocus"&&(l.hasOwnProperty(T)?f||(f=[]):(f=f||[]).push(T,null));for(T in c){var E=c[T];if(w=d!=null?d[T]:void 0,c.hasOwnProperty(T)&&E!==w&&(E!=null||w!=null))if(T==="style")if(w){for(v in w)!w.hasOwnProperty(v)||E&&E.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in E)E.hasOwnProperty(v)&&w[v]!==E[v]&&(o||(o={}),o[v]=E[v])}else o||(f||(f=[]),f.push(T,o)),o=E;else T==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,w=w?w.__html:void 0,E!=null&&w!==E&&(f=f||[]).push(T,E)):T==="children"?typeof E!="string"&&typeof E!="number"||(f=f||[]).push(T,""+E):T!=="suppressContentEditableWarning"&&T!=="suppressHydrationWarning"&&(l.hasOwnProperty(T)?(E!=null&&T==="onScroll"&&Ne("scroll",t),f||w===E||(f=[])):(f=f||[]).push(T,E))}o&&(f=f||[]).push("style",o);var T=f;(i.updateQueue=T)&&(i.flags|=4)}},Ip=function(t,i,o,c){o!==c&&(i.flags|=4)};function ms(t,i){if(!Re)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function it(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=t,d=d.sibling;else for(d=t.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=t,d=d.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function M0(t,i,o){var c=i.pendingProps;switch(sc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return ht(i.type)&&Po(),it(i),null;case 3:return c=i.stateNode,si(),Ie(dt),Ie(nt),_c(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Mo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ut!==null&&(qc(Ut),Ut=null))),Lc(t,i),it(i),null;case 5:gc(i);var d=vr(us.current);if(o=i.type,t!==null&&i.stateNode!=null)Np(t,i,o,c,d),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return it(i),null}if(t=vr(en.current),Mo(i)){c=i.stateNode,o=i.type;var f=i.memoizedProps;switch(c[Zt]=i,c[ss]=f,t=(i.mode&1)!==0,o){case"dialog":Ne("cancel",c),Ne("close",c);break;case"iframe":case"object":case"embed":Ne("load",c);break;case"video":case"audio":for(d=0;d<ns.length;d++)Ne(ns[d],c);break;case"source":Ne("error",c);break;case"img":case"image":case"link":Ne("error",c),Ne("load",c);break;case"details":Ne("toggle",c);break;case"input":sh(c,f),Ne("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ne("invalid",c);break;case"textarea":ah(c,f),Ne("invalid",c)}va(o,f),d=null;for(var v in f)if(f.hasOwnProperty(v)){var w=f[v];v==="children"?typeof w=="string"?c.textContent!==w&&(f.suppressHydrationWarning!==!0&&To(c.textContent,w,t),d=["children",w]):typeof w=="number"&&c.textContent!==""+w&&(f.suppressHydrationWarning!==!0&&To(c.textContent,w,t),d=["children",""+w]):l.hasOwnProperty(v)&&w!=null&&v==="onScroll"&&Ne("scroll",c)}switch(o){case"input":io(c),lh(c,f,!0);break;case"textarea":io(c),uh(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=bo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dh(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=v.createElement(o,{is:c.is}):(t=v.createElement(o),o==="select"&&(v=t,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):t=v.createElementNS(t,o),t[Zt]=i,t[ss]=c,Cp(t,i,!1,!1),i.stateNode=t;e:{switch(v=_a(o,c),o){case"dialog":Ne("cancel",t),Ne("close",t),d=c;break;case"iframe":case"object":case"embed":Ne("load",t),d=c;break;case"video":case"audio":for(d=0;d<ns.length;d++)Ne(ns[d],t);d=c;break;case"source":Ne("error",t),d=c;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),d=c;break;case"details":Ne("toggle",t),d=c;break;case"input":sh(t,c),d=ha(t,c),Ne("invalid",t);break;case"option":d=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},d=V({},c,{value:void 0}),Ne("invalid",t);break;case"textarea":ah(t,c),d=ma(t,c),Ne("invalid",t);break;default:d=c}va(o,d),w=d;for(f in w)if(w.hasOwnProperty(f)){var E=w[f];f==="style"?ph(t,E):f==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&hh(t,E)):f==="children"?typeof E=="string"?(o!=="textarea"||E!=="")&&Li(t,E):typeof E=="number"&&Li(t,""+E):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?E!=null&&f==="onScroll"&&Ne("scroll",t):E!=null&&ee(t,f,E,v))}switch(o){case"input":io(t),lh(t,c,!1);break;case"textarea":io(t),uh(t);break;case"option":c.value!=null&&t.setAttribute("value",""+me(c.value));break;case"select":t.multiple=!!c.multiple,f=c.value,f!=null?zr(t,!!c.multiple,f,!1):c.defaultValue!=null&&zr(t,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(t.onclick=bo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return it(i),null;case 6:if(t&&i.stateNode!=null)Ip(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=vr(us.current),vr(en.current),Mo(i)){if(c=i.stateNode,o=i.memoizedProps,c[Zt]=i,(f=c.nodeValue!==o)&&(t=Ct,t!==null))switch(t.tag){case 3:To(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(c.nodeValue,o,(t.mode&1)!==0)}f&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Zt]=i,i.stateNode=c}return it(i),null;case 13:if(Ie(Ae),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Nt!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bf(),ti(),i.flags|=98560,f=!1;else if(f=Mo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!f)throw Error(n(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[Zt]=i}else ti(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),f=!1}else Ut!==null&&(qc(Ut),Ut=null),f=!0;if(!f)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ae.current&1)!==0?Ve===0&&(Ve=3):Jc())),i.updateQueue!==null&&(i.flags|=4),it(i),null);case 4:return si(),Lc(t,i),t===null&&rs(i.stateNode.containerInfo),it(i),null;case 10:return dc(i.type._context),it(i),null;case 17:return ht(i.type)&&Po(),it(i),null;case 19:if(Ie(Ae),f=i.memoizedState,f===null)return it(i),null;if(c=(i.flags&128)!==0,v=f.rendering,v===null)if(c)ms(f,!1);else{if(Ve!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(v=Bo(t),v!==null){for(i.flags|=128,ms(f,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)f=o,t=c,f.flags&=14680066,v=f.alternate,v===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=v.childLanes,f.lanes=v.lanes,f.child=v.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=v.memoizedProps,f.memoizedState=v.memoizedState,f.updateQueue=v.updateQueue,f.type=v.type,t=v.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Se(Ae,Ae.current&1|2),i.child}t=t.sibling}f.tail!==null&&Le()>ci&&(i.flags|=128,c=!0,ms(f,!1),i.lanes=4194304)}else{if(!c)if(t=Bo(v),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ms(f,!0),f.tail===null&&f.tailMode==="hidden"&&!v.alternate&&!Re)return it(i),null}else 2*Le()-f.renderingStartTime>ci&&o!==1073741824&&(i.flags|=128,c=!0,ms(f,!1),i.lanes=4194304);f.isBackwards?(v.sibling=i.child,i.child=v):(o=f.last,o!==null?o.sibling=v:i.child=v,f.last=v)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=Le(),i.sibling=null,o=Ae.current,Se(Ae,c?o&1|2:o&1),i):(it(i),null);case 22:case 23:return Yc(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(It&1073741824)!==0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function L0(t,i){switch(sc(i),i.tag){case 1:return ht(i.type)&&Po(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return si(),Ie(dt),Ie(nt),_c(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return gc(i),null;case 13:if(Ie(Ae),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ti()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ie(Ae),null;case 4:return si(),null;case 10:return dc(i.type._context),null;case 22:case 23:return Yc(),null;case 24:return null;default:return null}}var Jo=!1,st=!1,F0=typeof WeakSet=="function"?WeakSet:Set,B=null;function li(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Oe(t,i,c)}else o.current=null}function Fc(t,i,o){try{o()}catch(c){Oe(t,i,c)}}var kp=!1;function U0(t,i){if(Ya=vo,t=sf(),Ba(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var v=0,w=-1,E=-1,T=0,D=0,M=t,j=null;t:for(;;){for(var W;M!==o||d!==0&&M.nodeType!==3||(w=v+d),M!==f||c!==0&&M.nodeType!==3||(E=v+c),M.nodeType===3&&(v+=M.nodeValue.length),(W=M.firstChild)!==null;)j=M,M=W;for(;;){if(M===t)break t;if(j===o&&++T===d&&(w=v),j===f&&++D===c&&(E=v),(W=M.nextSibling)!==null)break;M=j,j=M.parentNode}M=W}o=w===-1||E===-1?null:{start:w,end:E}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ja={focusedElem:t,selectionRange:o},vo=!1,B=i;B!==null;)if(i=B,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,B=t;else for(;B!==null;){i=B;try{var $=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($!==null){var G=$.memoizedProps,Fe=$.memoizedState,N=i.stateNode,S=N.getSnapshotBeforeUpdate(i.elementType===i.type?G:zt(i.type,G),Fe);N.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var I=i.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(L){Oe(i,i.return,L)}if(t=i.sibling,t!==null){t.return=i.return,B=t;break}B=i.return}return $=kp,kp=!1,$}function gs(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&t)===t){var f=d.destroy;d.destroy=void 0,f!==void 0&&Fc(i,o,f)}d=d.next}while(d!==c)}}function Xo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function Uc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Tp(t){var i=t.alternate;i!==null&&(t.alternate=null,Tp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Zt],delete i[ss],delete i[tc],delete i[x0],delete i[E0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bp(t){return t.tag===5||t.tag===3||t.tag===4}function Rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zc(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(t=t.child,t!==null))for(zc(t,i,o),t=t.sibling;t!==null;)zc(t,i,o),t=t.sibling}function Wc(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Wc(t,i,o),t=t.sibling;t!==null;)Wc(t,i,o),t=t.sibling}var Xe=null,Wt=!1;function Un(t,i,o){for(o=o.child;o!==null;)Pp(t,i,o),o=o.sibling}function Pp(t,i,o){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(uo,o)}catch{}switch(o.tag){case 5:st||li(o,i);case 6:var c=Xe,d=Wt;Xe=null,Un(t,i,o),Xe=c,Wt=d,Xe!==null&&(Wt?(t=Xe,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Xe.removeChild(o.stateNode));break;case 18:Xe!==null&&(Wt?(t=Xe,o=o.stateNode,t.nodeType===8?ec(t.parentNode,o):t.nodeType===1&&ec(t,o),qi(t)):ec(Xe,o.stateNode));break;case 4:c=Xe,d=Wt,Xe=o.stateNode.containerInfo,Wt=!0,Un(t,i,o),Xe=c,Wt=d;break;case 0:case 11:case 14:case 15:if(!st&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,v=f.destroy;f=f.tag,v!==void 0&&((f&2)!==0||(f&4)!==0)&&Fc(o,i,v),d=d.next}while(d!==c)}Un(t,i,o);break;case 1:if(!st&&(li(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(w){Oe(o,i,w)}Un(t,i,o);break;case 21:Un(t,i,o);break;case 22:o.mode&1?(st=(c=st)||o.memoizedState!==null,Un(t,i,o),st=c):Un(t,i,o);break;default:Un(t,i,o)}}function Ap(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new F0),i.forEach(function(c){var d=q0.bind(null,t,c);o.has(c)||(o.add(c),c.then(d,d))})}}function Bt(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var f=t,v=i,w=v;e:for(;w!==null;){switch(w.tag){case 5:Xe=w.stateNode,Wt=!1;break e;case 3:Xe=w.stateNode.containerInfo,Wt=!0;break e;case 4:Xe=w.stateNode.containerInfo,Wt=!0;break e}w=w.return}if(Xe===null)throw Error(n(160));Pp(f,v,d),Xe=null,Wt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(T){Oe(d,i,T)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,t),i=i.sibling}function jp(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(i,t),nn(t),c&4){try{gs(3,t,t.return),Xo(3,t)}catch(G){Oe(t,t.return,G)}try{gs(5,t,t.return)}catch(G){Oe(t,t.return,G)}}break;case 1:Bt(i,t),nn(t),c&512&&o!==null&&li(o,o.return);break;case 5:if(Bt(i,t),nn(t),c&512&&o!==null&&li(o,o.return),t.flags&32){var d=t.stateNode;try{Li(d,"")}catch(G){Oe(t,t.return,G)}}if(c&4&&(d=t.stateNode,d!=null)){var f=t.memoizedProps,v=o!==null?o.memoizedProps:f,w=t.type,E=t.updateQueue;if(t.updateQueue=null,E!==null)try{w==="input"&&f.type==="radio"&&f.name!=null&&oh(d,f),_a(w,v);var T=_a(w,f);for(v=0;v<E.length;v+=2){var D=E[v],M=E[v+1];D==="style"?ph(d,M):D==="dangerouslySetInnerHTML"?hh(d,M):D==="children"?Li(d,M):ee(d,D,M,T)}switch(w){case"input":fa(d,f);break;case"textarea":ch(d,f);break;case"select":var j=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var W=f.value;W!=null?zr(d,!!f.multiple,W,!1):j!==!!f.multiple&&(f.defaultValue!=null?zr(d,!!f.multiple,f.defaultValue,!0):zr(d,!!f.multiple,f.multiple?[]:"",!1))}d[ss]=f}catch(G){Oe(t,t.return,G)}}break;case 6:if(Bt(i,t),nn(t),c&4){if(t.stateNode===null)throw Error(n(162));d=t.stateNode,f=t.memoizedProps;try{d.nodeValue=f}catch(G){Oe(t,t.return,G)}}break;case 3:if(Bt(i,t),nn(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{qi(i.containerInfo)}catch(G){Oe(t,t.return,G)}break;case 4:Bt(i,t),nn(t);break;case 13:Bt(i,t),nn(t),d=t.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(Hc=Le())),c&4&&Ap(t);break;case 22:if(D=o!==null&&o.memoizedState!==null,t.mode&1?(st=(T=st)||D,Bt(i,t),st=T):Bt(i,t),nn(t),c&8192){if(T=t.memoizedState!==null,(t.stateNode.isHidden=T)&&!D&&(t.mode&1)!==0)for(B=t,D=t.child;D!==null;){for(M=B=D;B!==null;){switch(j=B,W=j.child,j.tag){case 0:case 11:case 14:case 15:gs(4,j,j.return);break;case 1:li(j,j.return);var $=j.stateNode;if(typeof $.componentWillUnmount=="function"){c=j,o=j.return;try{i=c,$.props=i.memoizedProps,$.state=i.memoizedState,$.componentWillUnmount()}catch(G){Oe(c,o,G)}}break;case 5:li(j,j.return);break;case 22:if(j.memoizedState!==null){Mp(M);continue}}W!==null?(W.return=j,B=W):Mp(M)}D=D.sibling}e:for(D=null,M=t;;){if(M.tag===5){if(D===null){D=M;try{d=M.stateNode,T?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(w=M.stateNode,E=M.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null,w.style.display=fh("display",v))}catch(G){Oe(t,t.return,G)}}}else if(M.tag===6){if(D===null)try{M.stateNode.nodeValue=T?"":M.memoizedProps}catch(G){Oe(t,t.return,G)}}else if((M.tag!==22&&M.tag!==23||M.memoizedState===null||M===t)&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===t)break e;for(;M.sibling===null;){if(M.return===null||M.return===t)break e;D===M&&(D=null),M=M.return}D===M&&(D=null),M.sibling.return=M.return,M=M.sibling}}break;case 19:Bt(i,t),nn(t),c&4&&Ap(t);break;case 21:break;default:Bt(i,t),nn(t)}}function nn(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(bp(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Li(d,""),c.flags&=-33);var f=Rp(t);Wc(t,f,d);break;case 3:case 4:var v=c.stateNode.containerInfo,w=Rp(t);zc(t,w,v);break;default:throw Error(n(161))}}catch(E){Oe(t,t.return,E)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function z0(t,i,o){B=t,Op(t)}function Op(t,i,o){for(var c=(t.mode&1)!==0;B!==null;){var d=B,f=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Jo;if(!v){var w=d.alternate,E=w!==null&&w.memoizedState!==null||st;w=Jo;var T=st;if(Jo=v,(st=E)&&!T)for(B=d;B!==null;)v=B,E=v.child,v.tag===22&&v.memoizedState!==null?Lp(d):E!==null?(E.return=v,B=E):Lp(d);for(;f!==null;)B=f,Op(f),f=f.sibling;B=d,Jo=w,st=T}Dp(t)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,B=f):Dp(t)}}function Dp(t){for(;B!==null;){var i=B;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:st||Xo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!st)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:zt(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=i.updateQueue;f!==null&&Mf(i,f,c);break;case 3:var v=i.updateQueue;if(v!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Mf(i,v,o)}break;case 5:var w=i.stateNode;if(o===null&&i.flags&4){o=w;var E=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&o.focus();break;case"img":E.src&&(o.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var T=i.alternate;if(T!==null){var D=T.memoizedState;if(D!==null){var M=D.dehydrated;M!==null&&qi(M)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}st||i.flags&512&&Uc(i)}catch(j){Oe(i,i.return,j)}}if(i===t){B=null;break}if(o=i.sibling,o!==null){o.return=i.return,B=o;break}B=i.return}}function Mp(t){for(;B!==null;){var i=B;if(i===t){B=null;break}var o=i.sibling;if(o!==null){o.return=i.return,B=o;break}B=i.return}}function Lp(t){for(;B!==null;){var i=B;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Xo(4,i)}catch(E){Oe(i,o,E)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(E){Oe(i,d,E)}}var f=i.return;try{Uc(i)}catch(E){Oe(i,f,E)}break;case 5:var v=i.return;try{Uc(i)}catch(E){Oe(i,v,E)}}}catch(E){Oe(i,i.return,E)}if(i===t){B=null;break}var w=i.sibling;if(w!==null){w.return=i.return,B=w;break}B=i.return}}var W0=Math.ceil,Zo=ce.ReactCurrentDispatcher,Bc=ce.ReactCurrentOwner,Dt=ce.ReactCurrentBatchConfig,ue=0,Ke=null,ze=null,Ze=0,It=0,ai=On(0),Ve=0,vs=null,yr=0,el=0,Vc=0,_s=null,pt=null,Hc=0,ci=1/0,vn=null,tl=!1,$c=null,zn=null,nl=!1,Wn=null,rl=0,ys=0,Gc=null,il=-1,sl=0;function at(){return(ue&6)!==0?Le():il!==-1?il:il=Le()}function Bn(t){return(t.mode&1)===0?1:(ue&2)!==0&&Ze!==0?Ze&-Ze:C0.transition!==null?(sl===0&&(sl=bh()),sl):(t=ge,t!==0||(t=window.event,t=t===void 0?16:Fh(t.type)),t)}function Vt(t,i,o,c){if(50<ys)throw ys=0,Gc=null,Error(n(185));Vi(t,o,c),((ue&2)===0||t!==Ke)&&(t===Ke&&((ue&2)===0&&(el|=o),Ve===4&&Vn(t,Ze)),mt(t,c),o===1&&ue===0&&(i.mode&1)===0&&(ci=Le()+500,jo&&Mn()))}function mt(t,i){var o=t.callbackNode;Cy(t,i);var c=po(t,t===Ke?Ze:0);if(c===0)o!==null&&Ih(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&Ih(o),i===1)t.tag===0?S0(Up.bind(null,t)):Cf(Up.bind(null,t)),y0(function(){(ue&6)===0&&Mn()}),o=null;else{switch(Rh(c)){case 1:o=Na;break;case 4:o=kh;break;case 16:o=co;break;case 536870912:o=Th;break;default:o=co}o=Kp(o,Fp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function Fp(t,i){if(il=-1,sl=0,(ue&6)!==0)throw Error(n(327));var o=t.callbackNode;if(ui()&&t.callbackNode!==o)return null;var c=po(t,t===Ke?Ze:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=ol(t,c);else{i=c;var d=ue;ue|=2;var f=Wp();(Ke!==t||Ze!==i)&&(vn=null,ci=Le()+500,xr(t,i));do try{H0();break}catch(w){zp(t,w)}while(!0);uc(),Zo.current=f,ue=d,ze!==null?i=0:(Ke=null,Ze=0,i=Ve)}if(i!==0){if(i===2&&(d=Ia(t),d!==0&&(c=d,i=Kc(t,d))),i===1)throw o=vs,xr(t,0),Vn(t,c),mt(t,Le()),o;if(i===6)Vn(t,c);else{if(d=t.current.alternate,(c&30)===0&&!B0(d)&&(i=ol(t,c),i===2&&(f=Ia(t),f!==0&&(c=f,i=Kc(t,f))),i===1))throw o=vs,xr(t,0),Vn(t,c),mt(t,Le()),o;switch(t.finishedWork=d,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Er(t,pt,vn);break;case 3:if(Vn(t,c),(c&130023424)===c&&(i=Hc+500-Le(),10<i)){if(po(t,0)!==0)break;if(d=t.suspendedLanes,(d&c)!==c){at(),t.pingedLanes|=t.suspendedLanes&d;break}t.timeoutHandle=Za(Er.bind(null,t,pt,vn),i);break}Er(t,pt,vn);break;case 4:if(Vn(t,c),(c&4194240)===c)break;for(i=t.eventTimes,d=-1;0<c;){var v=31-Lt(c);f=1<<v,v=i[v],v>d&&(d=v),c&=~f}if(c=d,c=Le()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*W0(c/1960))-c,10<c){t.timeoutHandle=Za(Er.bind(null,t,pt,vn),c);break}Er(t,pt,vn);break;case 5:Er(t,pt,vn);break;default:throw Error(n(329))}}}return mt(t,Le()),t.callbackNode===o?Fp.bind(null,t):null}function Kc(t,i){var o=_s;return t.current.memoizedState.isDehydrated&&(xr(t,i).flags|=256),t=ol(t,i),t!==2&&(i=pt,pt=o,i!==null&&qc(i)),t}function qc(t){pt===null?pt=t:pt.push.apply(pt,t)}function B0(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],f=d.getSnapshot;d=d.value;try{if(!Ft(f(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vn(t,i){for(i&=~Vc,i&=~el,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Lt(i),c=1<<o;t[o]=-1,i&=~c}}function Up(t){if((ue&6)!==0)throw Error(n(327));ui();var i=po(t,0);if((i&1)===0)return mt(t,Le()),null;var o=ol(t,i);if(t.tag!==0&&o===2){var c=Ia(t);c!==0&&(i=c,o=Kc(t,c))}if(o===1)throw o=vs,xr(t,0),Vn(t,i),mt(t,Le()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Er(t,pt,vn),mt(t,Le()),null}function Qc(t,i){var o=ue;ue|=1;try{return t(i)}finally{ue=o,ue===0&&(ci=Le()+500,jo&&Mn())}}function wr(t){Wn!==null&&Wn.tag===0&&(ue&6)===0&&ui();var i=ue;ue|=1;var o=Dt.transition,c=ge;try{if(Dt.transition=null,ge=1,t)return t()}finally{ge=c,Dt.transition=o,ue=i,(ue&6)===0&&Mn()}}function Yc(){It=ai.current,Ie(ai)}function xr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,_0(o)),ze!==null)for(o=ze.return;o!==null;){var c=o;switch(sc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Po();break;case 3:si(),Ie(dt),Ie(nt),_c();break;case 5:gc(c);break;case 4:si();break;case 13:Ie(Ae);break;case 19:Ie(Ae);break;case 10:dc(c.type._context);break;case 22:case 23:Yc()}o=o.return}if(Ke=t,ze=t=Hn(t.current,null),Ze=It=i,Ve=0,vs=null,Vc=el=yr=0,pt=_s=null,gr!==null){for(i=0;i<gr.length;i++)if(o=gr[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,f=o.pending;if(f!==null){var v=f.next;f.next=d,c.next=v}o.pending=c}gr=null}return t}function zp(t,i){do{var o=ze;try{if(uc(),Vo.current=Ko,Ho){for(var c=je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ho=!1}if(_r=0,Ge=Be=je=null,ds=!1,hs=0,Bc.current=null,o===null||o.return===null){Ve=1,vs=i,ze=null;break}e:{var f=t,v=o.return,w=o,E=i;if(i=Ze,w.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var T=E,D=w,M=D.tag;if((D.mode&1)===0&&(M===0||M===11||M===15)){var j=D.alternate;j?(D.updateQueue=j.updateQueue,D.memoizedState=j.memoizedState,D.lanes=j.lanes):(D.updateQueue=null,D.memoizedState=null)}var W=dp(v);if(W!==null){W.flags&=-257,hp(W,v,w,f,i),W.mode&1&&up(f,T,i),i=W,E=T;var $=i.updateQueue;if($===null){var G=new Set;G.add(E),i.updateQueue=G}else $.add(E);break e}else{if((i&1)===0){up(f,T,i),Jc();break e}E=Error(n(426))}}else if(Re&&w.mode&1){var Fe=dp(v);if(Fe!==null){(Fe.flags&65536)===0&&(Fe.flags|=256),hp(Fe,v,w,f,i),ac(oi(E,w));break e}}f=E=oi(E,w),Ve!==4&&(Ve=2),_s===null?_s=[f]:_s.push(f),f=v;do{switch(f.tag){case 3:f.flags|=65536,i&=-i,f.lanes|=i;var N=ap(f,E,i);Df(f,N);break e;case 1:w=E;var S=f.type,I=f.stateNode;if((f.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(zn===null||!zn.has(I)))){f.flags|=65536,i&=-i,f.lanes|=i;var L=cp(f,w,i);Df(f,L);break e}}f=f.return}while(f!==null)}Vp(o)}catch(K){i=K,ze===o&&o!==null&&(ze=o=o.return);continue}break}while(!0)}function Wp(){var t=Zo.current;return Zo.current=Ko,t===null?Ko:t}function Jc(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ke===null||(yr&268435455)===0&&(el&268435455)===0||Vn(Ke,Ze)}function ol(t,i){var o=ue;ue|=2;var c=Wp();(Ke!==t||Ze!==i)&&(vn=null,xr(t,i));do try{V0();break}catch(d){zp(t,d)}while(!0);if(uc(),ue=o,Zo.current=c,ze!==null)throw Error(n(261));return Ke=null,Ze=0,Ve}function V0(){for(;ze!==null;)Bp(ze)}function H0(){for(;ze!==null&&!my();)Bp(ze)}function Bp(t){var i=Gp(t.alternate,t,It);t.memoizedProps=t.pendingProps,i===null?Vp(t):ze=i,Bc.current=null}function Vp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=M0(o,i,It),o!==null){ze=o;return}}else{if(o=L0(o,i),o!==null){o.flags&=32767,ze=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,ze=null;return}}if(i=i.sibling,i!==null){ze=i;return}ze=i=t}while(i!==null);Ve===0&&(Ve=5)}function Er(t,i,o){var c=ge,d=Dt.transition;try{Dt.transition=null,ge=1,$0(t,i,o,c)}finally{Dt.transition=d,ge=c}return null}function $0(t,i,o,c){do ui();while(Wn!==null);if((ue&6)!==0)throw Error(n(327));o=t.finishedWork;var d=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var f=o.lanes|o.childLanes;if(Ny(t,f),t===Ke&&(ze=Ke=null,Ze=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||nl||(nl=!0,Kp(co,function(){return ui(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=Dt.transition,Dt.transition=null;var v=ge;ge=1;var w=ue;ue|=4,Bc.current=null,U0(t,o),jp(o,t),d0(Ja),vo=!!Ya,Ja=Ya=null,t.current=o,z0(o),gy(),ue=w,ge=v,Dt.transition=f}else t.current=o;if(nl&&(nl=!1,Wn=t,rl=d),f=t.pendingLanes,f===0&&(zn=null),yy(o.stateNode),mt(t,Le()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(tl)throw tl=!1,t=$c,$c=null,t;return(rl&1)!==0&&t.tag!==0&&ui(),f=t.pendingLanes,(f&1)!==0?t===Gc?ys++:(ys=0,Gc=t):ys=0,Mn(),null}function ui(){if(Wn!==null){var t=Rh(rl),i=Dt.transition,o=ge;try{if(Dt.transition=null,ge=16>t?16:t,Wn===null)var c=!1;else{if(t=Wn,Wn=null,rl=0,(ue&6)!==0)throw Error(n(331));var d=ue;for(ue|=4,B=t.current;B!==null;){var f=B,v=f.child;if((B.flags&16)!==0){var w=f.deletions;if(w!==null){for(var E=0;E<w.length;E++){var T=w[E];for(B=T;B!==null;){var D=B;switch(D.tag){case 0:case 11:case 15:gs(8,D,f)}var M=D.child;if(M!==null)M.return=D,B=M;else for(;B!==null;){D=B;var j=D.sibling,W=D.return;if(Tp(D),D===T){B=null;break}if(j!==null){j.return=W,B=j;break}B=W}}}var $=f.alternate;if($!==null){var G=$.child;if(G!==null){$.child=null;do{var Fe=G.sibling;G.sibling=null,G=Fe}while(G!==null)}}B=f}}if((f.subtreeFlags&2064)!==0&&v!==null)v.return=f,B=v;else e:for(;B!==null;){if(f=B,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:gs(9,f,f.return)}var N=f.sibling;if(N!==null){N.return=f.return,B=N;break e}B=f.return}}var S=t.current;for(B=S;B!==null;){v=B;var I=v.child;if((v.subtreeFlags&2064)!==0&&I!==null)I.return=v,B=I;else e:for(v=S;B!==null;){if(w=B,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:Xo(9,w)}}catch(K){Oe(w,w.return,K)}if(w===v){B=null;break e}var L=w.sibling;if(L!==null){L.return=w.return,B=L;break e}B=w.return}}if(ue=d,Mn(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(uo,t)}catch{}c=!0}return c}finally{ge=o,Dt.transition=i}}return!1}function Hp(t,i,o){i=oi(o,i),i=ap(t,i,1),t=Fn(t,i,1),i=at(),t!==null&&(Vi(t,1,i),mt(t,i))}function Oe(t,i,o){if(t.tag===3)Hp(t,t,o);else for(;i!==null;){if(i.tag===3){Hp(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zn===null||!zn.has(c))){t=oi(o,t),t=cp(i,t,1),i=Fn(i,t,1),t=at(),i!==null&&(Vi(i,1,t),mt(i,t));break}}i=i.return}}function G0(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=at(),t.pingedLanes|=t.suspendedLanes&o,Ke===t&&(Ze&o)===o&&(Ve===4||Ve===3&&(Ze&130023424)===Ze&&500>Le()-Hc?xr(t,0):Vc|=o),mt(t,i)}function $p(t,i){i===0&&((t.mode&1)===0?i=1:(i=fo,fo<<=1,(fo&130023424)===0&&(fo=4194304)));var o=at();t=pn(t,i),t!==null&&(Vi(t,i,o),mt(t,o))}function K0(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),$p(t,o)}function q0(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,d=t.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),$p(t,o)}var Gp;Gp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||dt.current)ft=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return ft=!1,D0(t,i,o);ft=(t.flags&131072)!==0}else ft=!1,Re&&(i.flags&1048576)!==0&&Nf(i,Do,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(t,i),t=i.pendingProps;var d=Xr(i,nt.current);ii(i,o),d=xc(null,i,c,t,d,o);var f=Ec();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ht(c)?(f=!0,Ao(i)):f=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,pc(i),d.updater=qo,i.stateNode=d,d._reactInternals=i,Tc(i,c,t,o),i=Ac(null,i,c,!0,f,o)):(i.tag=0,Re&&f&&ic(i),lt(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(t,i),t=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Y0(c),t=zt(c,t),d){case 0:i=Pc(null,i,c,t,o);break e;case 1:i=_p(null,i,c,t,o);break e;case 11:i=fp(null,i,c,t,o);break e;case 14:i=pp(null,i,c,zt(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zt(c,d),Pc(t,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zt(c,d),_p(t,i,c,d,o);case 3:e:{if(yp(i),t===null)throw Error(n(387));c=i.pendingProps,f=i.memoizedState,d=f.element,Of(t,i),Wo(i,c,null,o);var v=i.memoizedState;if(c=v.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=f,i.memoizedState=f,i.flags&256){d=oi(Error(n(423)),i),i=wp(t,i,c,o,d);break e}else if(c!==d){d=oi(Error(n(424)),i),i=wp(t,i,c,o,d);break e}else for(Nt=jn(i.stateNode.containerInfo.firstChild),Ct=i,Re=!0,Ut=null,o=Af(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ti(),c===d){i=gn(t,i,o);break e}lt(t,i,c,o)}i=i.child}return i;case 5:return Lf(i),t===null&&lc(i),c=i.type,d=i.pendingProps,f=t!==null?t.memoizedProps:null,v=d.children,Xa(c,d)?v=null:f!==null&&Xa(c,f)&&(i.flags|=32),vp(t,i),lt(t,i,v,o),i.child;case 6:return t===null&&lc(i),null;case 13:return xp(t,i,o);case 4:return mc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=ni(i,null,c,o):lt(t,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zt(c,d),fp(t,i,c,d,o);case 7:return lt(t,i,i.pendingProps,o),i.child;case 8:return lt(t,i,i.pendingProps.children,o),i.child;case 12:return lt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,f=i.memoizedProps,v=d.value,Se(Fo,c._currentValue),c._currentValue=v,f!==null)if(Ft(f.value,v)){if(f.children===d.children&&!dt.current){i=gn(t,i,o);break e}}else for(f=i.child,f!==null&&(f.return=i);f!==null;){var w=f.dependencies;if(w!==null){v=f.child;for(var E=w.firstContext;E!==null;){if(E.context===c){if(f.tag===1){E=mn(-1,o&-o),E.tag=2;var T=f.updateQueue;if(T!==null){T=T.shared;var D=T.pending;D===null?E.next=E:(E.next=D.next,D.next=E),T.pending=E}}f.lanes|=o,E=f.alternate,E!==null&&(E.lanes|=o),hc(f.return,o,i),w.lanes|=o;break}E=E.next}}else if(f.tag===10)v=f.type===i.type?null:f.child;else if(f.tag===18){if(v=f.return,v===null)throw Error(n(341));v.lanes|=o,w=v.alternate,w!==null&&(w.lanes|=o),hc(v,o,i),v=f.sibling}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===i){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}lt(t,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ii(i,o),d=jt(d),c=c(d),i.flags|=1,lt(t,i,c,o),i.child;case 14:return c=i.type,d=zt(c,i.pendingProps),d=zt(c.type,d),pp(t,i,c,d,o);case 15:return mp(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:zt(c,d),Yo(t,i),i.tag=1,ht(c)?(t=!0,Ao(i)):t=!1,ii(i,o),op(i,c,d),Tc(i,c,d,o),Ac(null,i,c,!0,t,o);case 19:return Sp(t,i,o);case 22:return gp(t,i,o)}throw Error(n(156,i.tag))};function Kp(t,i){return Nh(t,i)}function Q0(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(t,i,o,c){return new Q0(t,i,o,c)}function Xc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Y0(t){if(typeof t=="function")return Xc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rt)return 11;if(t===xe)return 14}return 2}function Hn(t,i){var o=t.alternate;return o===null?(o=Mt(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ll(t,i,o,c,d,f){var v=2;if(c=t,typeof t=="function")Xc(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case We:return Sr(o.children,d,f,i);case tt:v=8,d|=8;break;case ut:return t=Mt(12,o,i,d|2),t.elementType=ut,t.lanes=f,t;case U:return t=Mt(13,o,i,d),t.elementType=U,t.lanes=f,t;case te:return t=Mt(19,o,i,d),t.elementType=te,t.lanes=f,t;case Te:return al(o,d,f,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xt:v=10;break e;case cn:v=9;break e;case Rt:v=11;break e;case xe:v=14;break e;case _e:v=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Mt(v,o,i,d),i.elementType=t,i.type=c,i.lanes=f,i}function Sr(t,i,o,c){return t=Mt(7,t,c,i),t.lanes=o,t}function al(t,i,o,c){return t=Mt(22,t,c,i),t.elementType=Te,t.lanes=o,t.stateNode={isHidden:!1},t}function Zc(t,i,o){return t=Mt(6,t,null,i),t.lanes=o,t}function eu(t,i,o){return i=Mt(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function J0(t,i,o,c,d){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ka(0),this.expirationTimes=ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ka(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function tu(t,i,o,c,d,f,v,w,E){return t=new J0(t,i,o,w,E),i===1?(i=1,f===!0&&(i|=8)):i=0,f=Mt(3,null,null,i),t.current=f,f.stateNode=t,f.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},pc(f),t}function X0(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Me,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function qp(t){if(!t)return Dn;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(ht(o))return Ef(t,o,i)}return i}function Qp(t,i,o,c,d,f,v,w,E){return t=tu(o,c,!0,t,d,f,v,w,E),t.context=qp(null),o=t.current,c=at(),d=Bn(o),f=mn(c,d),f.callback=i??null,Fn(o,f,d),t.current.lanes=d,Vi(t,d,c),mt(t,c),t}function cl(t,i,o,c){var d=i.current,f=at(),v=Bn(d);return o=qp(o),i.context===null?i.context=o:i.pendingContext=o,i=mn(f,v),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Fn(d,i,v),t!==null&&(Vt(t,d,v,f),zo(t,d,v)),v}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function nu(t,i){Yp(t,i),(t=t.alternate)&&Yp(t,i)}function Z0(){return null}var Jp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ru(t){this._internalRoot=t}dl.prototype.render=ru.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));cl(t,i,null,null)},dl.prototype.unmount=ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;wr(function(){cl(null,t,null,null)}),i[un]=null}};function dl(t){this._internalRoot=t}dl.prototype.unstable_scheduleHydration=function(t){if(t){var i=jh();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Rn.length&&i!==0&&i<Rn[o].priority;o++);Rn.splice(o,0,t),o===0&&Mh(t)}};function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function ew(t,i,o,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var T=ul(v);f.call(T)}}var v=Qp(i,c,t,0,null,!1,!1,"",Xp);return t._reactRootContainer=v,t[un]=v.current,rs(t.nodeType===8?t.parentNode:t),wr(),v}for(;d=t.lastChild;)t.removeChild(d);if(typeof c=="function"){var w=c;c=function(){var T=ul(E);w.call(T)}}var E=tu(t,0,!1,null,null,!1,!1,"",Xp);return t._reactRootContainer=E,t[un]=E.current,rs(t.nodeType===8?t.parentNode:t),wr(function(){cl(i,E,o,c)}),E}function fl(t,i,o,c,d){var f=o._reactRootContainer;if(f){var v=f;if(typeof d=="function"){var w=d;d=function(){var E=ul(v);w.call(E)}}cl(i,v,t,d)}else v=ew(o,i,t,d,c);return ul(v)}Ph=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=Bi(i.pendingLanes);o!==0&&(Ta(i,o|1),mt(i,Le()),(ue&6)===0&&(ci=Le()+500,Mn()))}break;case 13:wr(function(){var c=pn(t,1);if(c!==null){var d=at();Vt(c,t,1,d)}}),nu(t,1)}},ba=function(t){if(t.tag===13){var i=pn(t,134217728);if(i!==null){var o=at();Vt(i,t,134217728,o)}nu(t,134217728)}},Ah=function(t){if(t.tag===13){var i=Bn(t),o=pn(t,i);if(o!==null){var c=at();Vt(o,t,i,c)}nu(t,i)}},jh=function(){return ge},Oh=function(t,i){var o=ge;try{return ge=t,i()}finally{ge=o}},xa=function(t,i,o){switch(i){case"input":if(fa(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var d=Ro(c);if(!d)throw Error(n(90));ih(c),fa(c,d)}}}break;case"textarea":ch(t,o);break;case"select":i=o.value,i!=null&&zr(t,!!o.multiple,i,!1)}},_h=Qc,yh=wr;var tw={usingClientEntryPoint:!1,Events:[os,Yr,Ro,gh,vh,Qc]},ws={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nw={bundleType:ws.bundleType,version:ws.version,rendererPackageName:ws.rendererPackageName,rendererConfig:ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sh(t),t===null?null:t.stateNode},findFiberByHostInstance:ws.findFiberByHostInstance||Z0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{uo=pl.inject(nw),Xt=pl}catch{}}return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tw,gt.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(i))throw Error(n(200));return X0(t,i,null,o)},gt.createRoot=function(t,i){if(!iu(t))throw Error(n(299));var o=!1,c="",d=Jp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=tu(t,1,!1,null,null,o,!1,c,d),t[un]=i.current,rs(t.nodeType===8?t.parentNode:t),new ru(i)},gt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Sh(i),t=t===null?null:t.stateNode,t},gt.flushSync=function(t){return wr(t)},gt.hydrate=function(t,i,o){if(!hl(i))throw Error(n(200));return fl(null,t,i,!0,o)},gt.hydrateRoot=function(t,i,o){if(!iu(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,d=!1,f="",v=Jp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),i=Qp(i,null,t,1,o??null,d,!1,f,v),t[un]=i.current,rs(t),c)for(t=0;t<c.length;t++)o=c[t],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new dl(i)},gt.render=function(t,i,o){if(!hl(i))throw Error(n(200));return fl(null,t,i,!1,o)},gt.unmountComponentAtNode=function(t){if(!hl(t))throw Error(n(40));return t._reactRootContainer?(wr(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[un]=null})}),!0):!1},gt.unstable_batchedUpdates=Qc,gt.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!hl(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return fl(t,i,o,!1,c)},gt.version="18.3.1-next-f1338f8080-20240426",gt}var om;function jg(){if(om)return lu.exports;om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),lu.exports=hw(),lu.exports}var lm;function fw(){if(lm)return ml;lm=1;var r=jg();return ml.createRoot=r.createRoot,ml.hydrateRoot=r.hydrateRoot,ml}var pw=fw();jg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ds(){return Ds=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ds.apply(this,arguments)}var Jn;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Jn||(Jn={}));const am="popstate";function mw(r){r===void 0&&(r={});function e(s,l){let{pathname:a,search:u,hash:p}=s.location;return ku("",{pathname:a,search:u,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(s,l){return typeof l=="string"?l:Il(l)}return vw(e,n,null,r)}function Ue(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Og(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gw(){return Math.random().toString(36).substr(2,8)}function cm(r,e){return{usr:r.state,key:r.key,idx:e}}function ku(r,e,n,s){return n===void 0&&(n=null),Ds({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?Ii(e):e,{state:n,key:e&&e.key||s||gw()})}function Il(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function Ii(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function vw(r,e,n,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:a=!1}=s,u=l.history,p=Jn.Pop,m=null,g=y();g==null&&(g=0,u.replaceState(Ds({},u.state,{idx:g}),""));function y(){return(u.state||{idx:null}).idx}function _(){p=Jn.Pop;let A=y(),H=A==null?null:A-g;g=A,m&&m({action:p,location:P.location,delta:H})}function x(A,H){p=Jn.Push;let ne=ku(P.location,A,H);g=y()+1;let ee=cm(ne,g),ce=P.createHref(ne);try{u.pushState(ee,"",ce)}catch(Pe){if(Pe instanceof DOMException&&Pe.name==="DataCloneError")throw Pe;l.location.assign(ce)}a&&m&&m({action:p,location:P.location,delta:1})}function b(A,H){p=Jn.Replace;let ne=ku(P.location,A,H);g=y();let ee=cm(ne,g),ce=P.createHref(ne);u.replaceState(ee,"",ce),a&&m&&m({action:p,location:P.location,delta:0})}function k(A){let H=l.location.origin!=="null"?l.location.origin:l.location.href,ne=typeof A=="string"?A:Il(A);return ne=ne.replace(/ $/,"%20"),Ue(H,"No window.location.(origin|href) available to create URL for href: "+ne),new URL(ne,H)}let P={get action(){return p},get location(){return r(l,u)},listen(A){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(am,_),m=A,()=>{l.removeEventListener(am,_),m=null}},createHref(A){return e(l,A)},createURL:k,encodeLocation(A){let H=k(A);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:x,replace:b,go(A){return u.go(A)}};return P}var um;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(um||(um={}));function _w(r,e,n){return n===void 0&&(n="/"),yw(r,e,n)}function yw(r,e,n,s){let l=typeof e=="string"?Ii(e):e,a=Zu(l.pathname||"/",n);if(a==null)return null;let u=Dg(r);ww(u);let p=null;for(let m=0;p==null&&m<u.length;++m){let g=Aw(a);p=bw(u[m],g)}return p}function Dg(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let l=(a,u,p)=>{let m={relativePath:p===void 0?a.path||"":p,caseSensitive:a.caseSensitive===!0,childrenIndex:u,route:a};m.relativePath.startsWith("/")&&(Ue(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let g=Xn([s,m.relativePath]),y=n.concat(m);a.children&&a.children.length>0&&(Ue(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Dg(a.children,e,y,g)),!(a.path==null&&!a.index)&&e.push({path:g,score:kw(g,a.index),routesMeta:y})};return r.forEach((a,u)=>{var p;if(a.path===""||!((p=a.path)!=null&&p.includes("?")))l(a,u);else for(let m of Mg(a.path))l(a,u,m)}),e}function Mg(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,l=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return l?[a,""]:[a];let u=Mg(s.join("/")),p=[];return p.push(...u.map(m=>m===""?a:[a,m].join("/"))),l&&p.push(...u),p.map(m=>r.startsWith("/")&&m===""?"/":m)}function ww(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Tw(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const xw=/^:[\w-]+$/,Ew=3,Sw=2,Cw=1,Nw=10,Iw=-2,dm=r=>r==="*";function kw(r,e){let n=r.split("/"),s=n.length;return n.some(dm)&&(s+=Iw),e&&(s+=Sw),n.filter(l=>!dm(l)).reduce((l,a)=>l+(xw.test(a)?Ew:a===""?Cw:Nw),s)}function Tw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function bw(r,e,n){let{routesMeta:s}=r,l={},a="/",u=[];for(let p=0;p<s.length;++p){let m=s[p],g=p===s.length-1,y=a==="/"?e:e.slice(a.length)||"/",_=Rw({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),x=m.route;if(!_)return null;Object.assign(l,_.params),u.push({params:l,pathname:Xn([a,_.pathname]),pathnameBase:Mw(Xn([a,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(a=Xn([a,_.pathnameBase]))}return u}function Rw(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=Pw(r.path,r.caseSensitive,r.end),l=e.match(n);if(!l)return null;let a=l[0],u=a.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((g,y,_)=>{let{paramName:x,isOptional:b}=y;if(x==="*"){let P=p[_]||"";u=a.slice(0,a.length-P.length).replace(/(.)\/+$/,"$1")}const k=p[_];return b&&!k?g[x]=void 0:g[x]=(k||"").replace(/%2F/g,"/"),g},{}),pathname:a,pathnameBase:u,pattern:r}}function Pw(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Og(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,p,m)=>(s.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function Aw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Og(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Zu(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function jw(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:l=""}=typeof r=="string"?Ii(r):r;return{pathname:n?n.startsWith("/")?n:Ow(n,e):e,search:Lw(s),hash:Fw(l)}}function Ow(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function uu(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dw(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ed(r,e){let n=Dw(r);return e?n.map((s,l)=>l===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function td(r,e,n,s){s===void 0&&(s=!1);let l;typeof r=="string"?l=Ii(r):(l=Ds({},r),Ue(!l.pathname||!l.pathname.includes("?"),uu("?","pathname","search",l)),Ue(!l.pathname||!l.pathname.includes("#"),uu("#","pathname","hash",l)),Ue(!l.search||!l.search.includes("#"),uu("#","search","hash",l)));let a=r===""||l.pathname==="",u=a?"/":l.pathname,p;if(u==null)p=n;else{let _=e.length-1;if(!s&&u.startsWith("..")){let x=u.split("/");for(;x[0]==="..";)x.shift(),_-=1;l.pathname=x.join("/")}p=_>=0?e[_]:"/"}let m=jw(l,p),g=u&&u!=="/"&&u.endsWith("/"),y=(a||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}const Xn=r=>r.join("/").replace(/\/\/+/g,"/"),Mw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Lw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Fw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Uw(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const Lg=["post","put","patch","delete"];new Set(Lg);const zw=["get",...Lg];new Set(zw);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ms.apply(this,arguments)}const nd=R.createContext(null),Ww=R.createContext(null),or=R.createContext(null),Yl=R.createContext(null),an=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Fg=R.createContext(null);function Bw(r,e){let{relative:n}=e===void 0?{}:e;ki()||Ue(!1);let{basename:s,navigator:l}=R.useContext(or),{hash:a,pathname:u,search:p}=zg(r,{relative:n}),m=u;return s!=="/"&&(m=u==="/"?s:Xn([s,u])),l.createHref({pathname:m,search:p,hash:a})}function ki(){return R.useContext(Yl)!=null}function Lr(){return ki()||Ue(!1),R.useContext(Yl).location}function Ug(r){R.useContext(or).static||R.useLayoutEffect(r)}function lr(){let{isDataRoute:r}=R.useContext(an);return r?ix():Vw()}function Vw(){ki()||Ue(!1);let r=R.useContext(nd),{basename:e,future:n,navigator:s}=R.useContext(or),{matches:l}=R.useContext(an),{pathname:a}=Lr(),u=JSON.stringify(ed(l,n.v7_relativeSplatPath)),p=R.useRef(!1);return Ug(()=>{p.current=!0}),R.useCallback(function(g,y){if(y===void 0&&(y={}),!p.current)return;if(typeof g=="number"){s.go(g);return}let _=td(g,JSON.parse(u),a,y.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Xn([e,_.pathname])),(y.replace?s.replace:s.push)(_,y.state,y)},[e,s,u,a,r])}const Hw=R.createContext(null);function $w(r){let e=R.useContext(an).outlet;return e&&R.createElement(Hw.Provider,{value:r},e)}function Gw(){let{matches:r}=R.useContext(an),e=r[r.length-1];return e?e.params:{}}function zg(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=R.useContext(or),{matches:l}=R.useContext(an),{pathname:a}=Lr(),u=JSON.stringify(ed(l,s.v7_relativeSplatPath));return R.useMemo(()=>td(r,JSON.parse(u),a,n==="path"),[r,u,a,n])}function Kw(r,e){return qw(r,e)}function qw(r,e,n,s){ki()||Ue(!1);let{navigator:l,static:a}=R.useContext(or),{matches:u}=R.useContext(an),p=u[u.length-1],m=p?p.params:{};p&&p.pathname;let g=p?p.pathnameBase:"/";p&&p.route;let y=Lr(),_;if(e){var x;let H=typeof e=="string"?Ii(e):e;g==="/"||(x=H.pathname)!=null&&x.startsWith(g)||Ue(!1),_=H}else _=y;let b=_.pathname||"/",k=b;if(g!=="/"){let H=g.replace(/^\//,"").split("/");k="/"+b.replace(/^\//,"").split("/").slice(H.length).join("/")}let P=_w(r,{pathname:k}),A=Zw(P&&P.map(H=>Object.assign({},H,{params:Object.assign({},m,H.params),pathname:Xn([g,l.encodeLocation?l.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:Xn([g,l.encodeLocation?l.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),u,n,s);return e&&A?R.createElement(Yl.Provider,{value:{location:Ms({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Jn.Pop}},A):A}function Qw(){let r=rx(),e=Uw(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:l},n):null,null)}const Yw=R.createElement(Qw,null);class Jw extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?R.createElement(an.Provider,{value:this.props.routeContext},R.createElement(Fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xw(r){let{routeContext:e,match:n,children:s}=r,l=R.useContext(nd);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(an.Provider,{value:e},s)}function Zw(r,e,n,s){var l;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var a;if(!n)return null;if(n.errors)r=n.matches;else if((a=s)!=null&&a.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,p=(l=n)==null?void 0:l.errors;if(p!=null){let y=u.findIndex(_=>_.route.id&&(p==null?void 0:p[_.route.id])!==void 0);y>=0||Ue(!1),u=u.slice(0,Math.min(u.length,y+1))}let m=!1,g=-1;if(n&&s&&s.v7_partialHydration)for(let y=0;y<u.length;y++){let _=u[y];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(g=y),_.route.id){let{loaderData:x,errors:b}=n,k=_.route.loader&&x[_.route.id]===void 0&&(!b||b[_.route.id]===void 0);if(_.route.lazy||k){m=!0,g>=0?u=u.slice(0,g+1):u=[u[0]];break}}}return u.reduceRight((y,_,x)=>{let b,k=!1,P=null,A=null;n&&(b=p&&_.route.id?p[_.route.id]:void 0,P=_.route.errorElement||Yw,m&&(g<0&&x===0?(sx("route-fallback"),k=!0,A=null):g===x&&(k=!0,A=_.route.hydrateFallbackElement||null)));let H=e.concat(u.slice(0,x+1)),ne=()=>{let ee;return b?ee=P:k?ee=A:_.route.Component?ee=R.createElement(_.route.Component,null):_.route.element?ee=_.route.element:ee=y,R.createElement(Xw,{match:_,routeContext:{outlet:y,matches:H,isDataRoute:n!=null},children:ee})};return n&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?R.createElement(Jw,{location:n.location,revalidation:n.revalidation,component:P,error:b,children:ne(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):ne()},null)}var Wg=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Wg||{}),Bg=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Bg||{});function ex(r){let e=R.useContext(nd);return e||Ue(!1),e}function tx(r){let e=R.useContext(Ww);return e||Ue(!1),e}function nx(r){let e=R.useContext(an);return e||Ue(!1),e}function Vg(r){let e=nx(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function rx(){var r;let e=R.useContext(Fg),n=tx(),s=Vg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function ix(){let{router:r}=ex(Wg.UseNavigateStable),e=Vg(Bg.UseNavigateStable),n=R.useRef(!1);return Ug(()=>{n.current=!0}),R.useCallback(function(l,a){a===void 0&&(a={}),n.current&&(typeof l=="number"?r.navigate(l):r.navigate(l,Ms({fromRouteId:e},a)))},[r,e])}const hm={};function sx(r,e,n){hm[r]||(hm[r]=!0)}function ox(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Hg(r){let{to:e,replace:n,state:s,relative:l}=r;ki()||Ue(!1);let{future:a,static:u}=R.useContext(or),{matches:p}=R.useContext(an),{pathname:m}=Lr(),g=lr(),y=td(e,ed(p,a.v7_relativeSplatPath),m,l==="path"),_=JSON.stringify(y);return R.useEffect(()=>g(JSON.parse(_),{replace:n,state:s,relative:l}),[g,_,l,n,s]),null}function $g(r){return $w(r.context)}function He(r){Ue(!1)}function lx(r){let{basename:e="/",children:n=null,location:s,navigationType:l=Jn.Pop,navigator:a,static:u=!1,future:p}=r;ki()&&Ue(!1);let m=e.replace(/^\/*/,"/"),g=R.useMemo(()=>({basename:m,navigator:a,static:u,future:Ms({v7_relativeSplatPath:!1},p)}),[m,p,a,u]);typeof s=="string"&&(s=Ii(s));let{pathname:y="/",search:_="",hash:x="",state:b=null,key:k="default"}=s,P=R.useMemo(()=>{let A=Zu(y,m);return A==null?null:{location:{pathname:A,search:_,hash:x,state:b,key:k},navigationType:l}},[m,y,_,x,b,k,l]);return P==null?null:R.createElement(or.Provider,{value:g},R.createElement(Yl.Provider,{children:n,value:P}))}function ax(r){let{children:e,location:n}=r;return Kw(Tu(e),n)}new Promise(()=>{});function Tu(r,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(r,(s,l)=>{if(!R.isValidElement(s))return;let a=[...e,l];if(s.type===R.Fragment){n.push.apply(n,Tu(s.props.children,a));return}s.type!==He&&Ue(!1),!s.props.index||!s.props.children||Ue(!1);let u={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Tu(s.props.children,a)),n.push(u)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bu(){return bu=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},bu.apply(this,arguments)}function cx(r,e){if(r==null)return{};var n={},s=Object.keys(r),l,a;for(a=0;a<s.length;a++)l=s[a],!(e.indexOf(l)>=0)&&(n[l]=r[l]);return n}function ux(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function dx(r,e){return r.button===0&&(!e||e==="_self")&&!ux(r)}const hx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fx="6";try{window.__reactRouterVersion=fx}catch{}const px="startTransition",fm=cw[px];function mx(r){let{basename:e,children:n,future:s,window:l}=r,a=R.useRef();a.current==null&&(a.current=mw({window:l,v5Compat:!0}));let u=a.current,[p,m]=R.useState({action:u.action,location:u.location}),{v7_startTransition:g}=s||{},y=R.useCallback(_=>{g&&fm?fm(()=>m(_)):m(_)},[m,g]);return R.useLayoutEffect(()=>u.listen(y),[u,y]),R.useEffect(()=>ox(s),[s]),R.createElement(lx,{basename:e,children:n,location:p.location,navigationType:p.action,navigator:u,future:s})}const gx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kt=R.forwardRef(function(e,n){let{onClick:s,relative:l,reloadDocument:a,replace:u,state:p,target:m,to:g,preventScrollReset:y,viewTransition:_}=e,x=cx(e,hx),{basename:b}=R.useContext(or),k,P=!1;if(typeof g=="string"&&vx.test(g)&&(k=g,gx))try{let ee=new URL(window.location.href),ce=g.startsWith("//")?new URL(ee.protocol+g):new URL(g),Pe=Zu(ce.pathname,b);ce.origin===ee.origin&&Pe!=null?g=Pe+ce.search+ce.hash:P=!0}catch{}let A=Bw(g,{relative:l}),H=_x(g,{replace:u,state:p,target:m,preventScrollReset:y,relative:l,viewTransition:_});function ne(ee){s&&s(ee),ee.defaultPrevented||H(ee)}return R.createElement("a",bu({},x,{href:k||A,onClick:P||a?s:ne,ref:n,target:m}))});var pm;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(pm||(pm={}));var mm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(mm||(mm={}));function _x(r,e){let{target:n,replace:s,state:l,preventScrollReset:a,relative:u,viewTransition:p}=e===void 0?{}:e,m=lr(),g=Lr(),y=zg(r,{relative:u});return R.useCallback(_=>{if(dx(_,n)){_.preventDefault();let x=s!==void 0?s:Il(g)===Il(y);m(r,{replace:x,state:l,preventScrollReset:a,relative:u,viewTransition:p})}},[g,m,y,s,l,n,r,a,u,p])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gg=(...r)=>r.filter((e,n,s)=>!!e&&s.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=R.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:a,iconNode:u,...p},m)=>R.createElement("svg",{ref:m,...wx,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:Gg("lucide",l),...p},[...u.map(([g,y])=>R.createElement(g,y)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(r,e)=>{const n=R.forwardRef(({className:s,...l},a)=>R.createElement(xx,{ref:a,iconNode:e,className:Gg(`lucide-${yx(r)}`,s),...l}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=ve("AlarmClock",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=ve("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=ve("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=ve("Dices",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=ve("Gamepad",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=ve("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=ve("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=ve("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=ve("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=ve("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=ve("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ve("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=ve("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=ve("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=ve("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=ve("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=ve("StickyNote",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=ve("ToggleLeft",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=ve("ToggleRight",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=ve("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=ve("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ve("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ve("Volume",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Dx=()=>{const r=Lr(),e=["/","/gallery","/games","/chat","/notes"].includes(r.pathname);return h.jsxs("div",{className:"fixed inset-0 flex flex-col bg-[#f8f0e3] w-full overflow-hidden",children:[h.jsxs("div",{className:"relative flex-1 overflow-hidden",children:[h.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[h.jsx("div",{className:"absolute top-0 left-0 w-16 md:w-24 h-full bg-[#d9c5b2] rounded-r-full opacity-80"}),h.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-[#d9c5b2] rounded-t-full opacity-50"}),h.jsx("div",{className:"absolute top-[30%] left-6 md:left-10 w-12 h-12 md:w-16 md:h-16",children:h.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full text-[#777] animate-pulse",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[h.jsx("path",{d:"M50,10 C70,25 70,40 50,55 C30,40 30,25 50,10 Z"}),h.jsx("path",{d:"M30,30 C50,45 50,60 30,75 C10,60 10,45 30,30 Z"}),h.jsx("path",{d:"M70,30 C90,45 90,60 70,75 C50,60 50,45 70,30 Z"}),h.jsx("path",{d:"M50,50 C70,65 70,80 50,95 C30,80 30,65 50,50 Z"})]})}),h.jsx("div",{className:"absolute bottom-[20%] right-6 md:right-10 w-16 h-16 md:w-24 md:h-24",children:h.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full text-[#777] animate-pulse",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[h.jsx("path",{d:"M50,10 C70,25 70,40 50,55 C30,40 30,25 50,10 Z"}),h.jsx("path",{d:"M30,30 C50,45 50,60 30,75 C10,60 10,45 30,30 Z"}),h.jsx("path",{d:"M70,30 C90,45 90,60 70,75 C50,60 50,45 70,30 Z"}),h.jsx("path",{d:"M50,50 C70,65 70,80 50,95 C30,80 30,65 50,50 Z"})]})})]}),h.jsx("div",{className:"relative h-full overflow-hidden pt-4 pb-24",children:h.jsx("div",{className:"h-full overflow-auto",children:h.jsx("div",{className:"w-full max-w-md mx-auto px-4",children:h.jsx($g,{})})})})]}),e&&h.jsx("div",{className:"fixed bottom-0 left-0 right-0 bg-[#f8f0e3] pb-safe",children:h.jsxs("div",{className:"flex justify-between items-center max-w-md mx-auto px-4 py-2",children:[h.jsxs(kt,{to:"/chat",className:"flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation",children:[h.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]",children:h.jsx(Ix,{className:"w-6 h-6 md:w-7 md:h-7 text-[#d9b382]"})}),h.jsx("span",{className:"mt-1 text-[#a67c52] font-bold text-xs md:text-sm",children:"CHAT"})]}),h.jsxs(kt,{to:"/notes",className:"flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation",children:[h.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]",children:h.jsx(br,{className:"w-6 h-6 md:w-7 md:h-7 text-[#d9b382]"})}),h.jsx("span",{className:"mt-1 text-[#a67c52] font-bold text-xs md:text-sm",children:"NOTES"})]}),h.jsxs(kt,{to:"/gallery",className:"flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation",children:[h.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]",children:h.jsx(sn,{className:"w-6 h-6 md:w-7 md:h-7 text-[#d9b382]"})}),h.jsx("span",{className:"mt-1 text-[#a67c52] font-bold text-xs md:text-sm",children:"GALLERY"})]}),h.jsxs(kt,{to:"/games",className:"flex flex-col items-center transform transition-all duration-300 hover:scale-105 active:scale-95 touch-action-manipulation",children:[h.jsx("div",{className:"w-12 h-12 md:w-14 md:h-14 bg-[#f8e8c8] rounded-2xl flex items-center justify-center shadow-md border border-[#d9b382]",children:h.jsx(Cx,{className:"w-6 h-6 md:w-7 md:h-7 text-[#d9b382]"})}),h.jsx("span",{className:"mt-1 text-[#a67c52] font-bold text-xs md:text-sm",children:"GAME"})]})]})})]})},Mx=()=>{const[r,e]=R.useState(!1),[n,s]=R.useState(null),l=lr();R.useEffect(()=>{e(!0);const u=localStorage.getItem("pendingNotes");u&&JSON.parse(u).length>0&&(l("/notes"),localStorage.removeItem("pendingNotes"))},[l]);const a=()=>{l("/surprise-message")};return h.jsx("div",{className:"flex flex-col items-center justify-center min-h-[70vh]",children:h.jsxs("div",{className:`transition-all duration-1000 ${r?"opacity-100 scale-100":"opacity-0 scale-90"}`,children:[h.jsx("img",{src:"https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif",alt:"Birthday celebration",className:"w-64 h-64 object-cover rounded-full border-4 border-[#ffcb85] shadow-lg mb-8"}),h.jsxs("div",{className:"text-center",children:[h.jsx("h1",{className:"text-3xl font-bold mb-2 text-[#a67c52]",children:"Happy Birthday!"}),h.jsx("p",{className:"text-[#8a6f5c] mb-6",children:"A special gift just for you"}),n&&h.jsxs("div",{className:"mb-6 bg-[#fff] rounded-xl p-4 shadow-md border border-[#d9c5b2]",children:[h.jsxs("div",{className:"flex items-center mb-2",children:[h.jsx(br,{className:"w-5 h-5 text-[#8a6f5c] mr-2"}),h.jsx("span",{className:"text-sm text-[#8a6f5c]",children:n.date})]}),h.jsx("p",{className:"text-[#333] whitespace-pre-wrap font-handwriting",children:n.content})]}),h.jsx("button",{onClick:a,className:"inline-block px-8 py-3 bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold rounded-full shadow-md transition-all transform hover:scale-105",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx(kx,{className:"mr-2"}),h.jsx("span",{children:"Start Celebration"})]})})]})]})})},Lx=()=>{};var gm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=function(r,e){if(!r)throw Ti(e)},Ti=function(r){return new Error("Firebase Database ("+Jg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Fx=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const a=r[n++];e[s++]=String.fromCharCode((l&31)<<6|a&63)}else if(l>239&&l<365){const a=r[n++],u=r[n++],p=r[n++],m=((l&7)<<18|(a&63)<<12|(u&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const a=r[n++],u=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(a&63)<<6|u&63)}}return e.join("")},ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const a=r[l],u=l+1<r.length,p=u?r[l+1]:0,m=l+2<r.length,g=m?r[l+2]:0,y=a>>2,_=(a&3)<<4|p>>4;let x=(p&15)<<2|g>>6,b=g&63;m||(b=64,u||(x=64)),s.push(n[y],n[_],n[x],n[b])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Xg(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Fx(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const a=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const _=l<r.length?n[r.charAt(l)]:64;if(++l,a==null||p==null||g==null||_==null)throw new Ux;const x=a<<2|p>>4;if(s.push(x),g!==64){const b=p<<4&240|g>>2;if(s.push(b),_!==64){const k=g<<6&192|_;s.push(k)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Ux extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zg=function(r){const e=Xg(r);return ad.encodeByteArray(e,!0)},kl=function(r){return Zg(r).replace(/\./g,"")},Tl=function(r){try{return ad.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(r){return ev(void 0,r)}function ev(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wx(n)||(r[n]=ev(r[n],e[n]));return r}function Wx(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vx=()=>Bx().__FIREBASE_DEFAULTS__,Hx=()=>{if(typeof process>"u"||typeof gm>"u")return;const r=gm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},$x=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Tl(r[1]);return e&&JSON.parse(e)},cd=()=>{try{return Lx()||Vx()||Hx()||$x()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},tv=r=>{var e,n;return(n=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},Gx=r=>{const e=tv(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nv=()=>{var r;return(r=cd())===null||r===void 0?void 0:r.config},rv=r=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,a=r.sub||r.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},r);return[kl(JSON.stringify(n)),kl(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ud(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function qx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qx(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yx(){const r=ct();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Jx(){return Jg.NODE_ADMIN===!0}function Xx(){try{return typeof indexedDB=="object"}catch{return!1}}function Zx(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var a;e(((a=l.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="FirebaseError";class ar extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=eE,Object.setPrototypeOf(this,ar.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,a=this.errors[e],u=a?tE(a,s):"Error",p=`${this.serviceName}: ${u} (${l}).`;return new ar(l,p,s)}}function tE(r,e){return r.replace(nE,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const nE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(r){return JSON.parse(r)}function Je(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=function(r){let e={},n={},s={},l="";try{const a=r.split(".");e=Fs(Tl(a[0])||""),n=Fs(Tl(a[1])||""),l=a[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:l}},rE=function(r){const e=sv(r),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iE=function(r){const e=sv(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function wi(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function Ru(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function bl(r,e,n){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(n,r[l],l,r));return s}function Rr(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const a=r[l],u=e[l];if(vm(a)&&vm(u)){if(!Rr(a,u))return!1}else if(a!==u)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function vm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function ks(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,a]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(a)}}),e}function Ts(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)s[_]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let _=0;_<16;_++)s[_]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let _=16;_<80;_++){const x=s[_-3]^s[_-8]^s[_-14]^s[_-16];s[_]=(x<<1|x>>>31)&4294967295}let l=this.chain_[0],a=this.chain_[1],u=this.chain_[2],p=this.chain_[3],m=this.chain_[4],g,y;for(let _=0;_<80;_++){_<40?_<20?(g=p^a&(u^p),y=1518500249):(g=a^u^p,y=1859775393):_<60?(g=a&u|p&(a|u),y=2400959708):(g=a^u^p,y=3395469782);const x=(l<<5|l>>>27)+g+m+y+s[_]&4294967295;m=p,p=u,u=(a<<30|a>>>2)&4294967295,a=l,l=x}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+p&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let l=0;const a=this.buf_;let u=this.inbuf_;for(;l<n;){if(u===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<n;)if(a[u]=e.charCodeAt(l),++u,++l,u===this.blockSize){this.compress_(a),u=0;break}}else for(;l<n;)if(a[u]=e[l],++u,++l,u===this.blockSize){this.compress_(a),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let a=24;a>=0;a-=8)e[s]=this.chain_[l]>>a&255,++s;return e}}function oE(r,e){const n=new lE(r,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");aE(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=hu),l.error===void 0&&(l.error=hu),l.complete===void 0&&(l.complete=hu);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aE(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function hu(){}function dd(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const a=l-55296;s++,F(s<r.length,"Surrogate pair missing trail surrogate.");const u=r.charCodeAt(s)-56320;l=65536+(a<<10)+u}l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):l<65536?(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},Zl=function(r){let e=0;for(let n=0;n<r.length;n++){const s=r.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(r){return r&&r._delegate?r._delegate:r}class Pr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xl;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),l=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(l)return null;throw a}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hE(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:l});s.resolve(a)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,u]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);s===p&&u.resolve(l)}return l}onInit(e,n){var s;const l=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(l,a);const u=this.instances.get(l);return u&&e(u,l),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dE(r){return r===Nr?void 0:r}function hE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ye||(ye={}));const pE={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},mE=ye.INFO,gE={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},vE=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=gE[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=mE,this._logHandler=vE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const _E=(r,e)=>e.some(n=>r instanceof n);let _m,ym;function yE(){return _m||(_m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wE(){return ym||(ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ov=new WeakMap,Pu=new WeakMap,lv=new WeakMap,fu=new WeakMap,fd=new WeakMap;function xE(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",a),r.removeEventListener("error",u)},a=()=>{n(Zn(r.result)),l()},u=()=>{s(r.error),l()};r.addEventListener("success",a),r.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&ov.set(n,r)}).catch(()=>{}),fd.set(e,r),e}function EE(r){if(Pu.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",u),r.removeEventListener("abort",u)},a=()=>{n(),l()},u=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",a),r.addEventListener("error",u),r.addEventListener("abort",u)});Pu.set(r,e)}let Au={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Pu.get(r);if(e==="objectStoreNames")return r.objectStoreNames||lv.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function SE(r){Au=r(Au)}function CE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(pu(this),e,...n);return lv.set(s,e.sort?e.sort():[e]),Zn(s)}:wE().includes(r)?function(...e){return r.apply(pu(this),e),Zn(ov.get(this))}:function(...e){return Zn(r.apply(pu(this),e))}}function NE(r){return typeof r=="function"?CE(r):(r instanceof IDBTransaction&&EE(r),_E(r,yE())?new Proxy(r,Au):r)}function Zn(r){if(r instanceof IDBRequest)return xE(r);if(fu.has(r))return fu.get(r);const e=NE(r);return e!==r&&(fu.set(r,e),fd.set(e,r)),e}const pu=r=>fd.get(r);function IE(r,e,{blocked:n,upgrade:s,blocking:l,terminated:a}={}){const u=indexedDB.open(r,e),p=Zn(u);return s&&u.addEventListener("upgradeneeded",m=>{s(Zn(u.result),m.oldVersion,m.newVersion,Zn(u.transaction),m)}),n&&u.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{a&&m.addEventListener("close",()=>a()),l&&m.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}const kE=["get","getKey","getAll","getAllKeys","count"],TE=["put","add","delete","clear"],mu=new Map;function wm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(mu.get(e))return mu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=TE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||kE.includes(n)))return;const a=async function(u,...p){const m=this.transaction(u,l?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[n](...p),l&&m.done]))[0]};return mu.set(e,a),a}SE(r=>({...r,get:(e,n,s)=>wm(e,n)||r.get(e,n,s),has:(e,n)=>!!wm(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function RE(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ju="@firebase/app",xm="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new hd("@firebase/app"),PE="@firebase/app-compat",AE="@firebase/analytics-compat",jE="@firebase/analytics",OE="@firebase/app-check-compat",DE="@firebase/app-check",ME="@firebase/auth",LE="@firebase/auth-compat",FE="@firebase/database",UE="@firebase/data-connect",zE="@firebase/database-compat",WE="@firebase/functions",BE="@firebase/functions-compat",VE="@firebase/installations",HE="@firebase/installations-compat",$E="@firebase/messaging",GE="@firebase/messaging-compat",KE="@firebase/performance",qE="@firebase/performance-compat",QE="@firebase/remote-config",YE="@firebase/remote-config-compat",JE="@firebase/storage",XE="@firebase/storage-compat",ZE="@firebase/firestore",eS="@firebase/vertexai",tS="@firebase/firestore-compat",nS="firebase",rS="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="[DEFAULT]",iS={[ju]:"fire-core",[PE]:"fire-core-compat",[jE]:"fire-analytics",[AE]:"fire-analytics-compat",[DE]:"fire-app-check",[OE]:"fire-app-check-compat",[ME]:"fire-auth",[LE]:"fire-auth-compat",[FE]:"fire-rtdb",[UE]:"fire-data-connect",[zE]:"fire-rtdb-compat",[WE]:"fire-fn",[BE]:"fire-fn-compat",[VE]:"fire-iid",[HE]:"fire-iid-compat",[$E]:"fire-fcm",[GE]:"fire-fcm-compat",[KE]:"fire-perf",[qE]:"fire-perf-compat",[QE]:"fire-rc",[YE]:"fire-rc-compat",[JE]:"fire-gcs",[XE]:"fire-gcs-compat",[ZE]:"fire-fst",[tS]:"fire-fst-compat",[eS]:"fire-vertex","fire-js":"fire-js",[nS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=new Map,sS=new Map,Du=new Map;function Em(r,e){try{r.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function xi(r){const e=r.name;if(Du.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,r);for(const n of Rl.values())Em(n,r);for(const n of sS.values())Em(n,r);return!0}function pd(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function Ht(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Qs("app","Firebase",oS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=rS;function av(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),l=s.name;if(typeof l!="string"||!l)throw er.create("bad-app-name",{appName:String(l)});if(n||(n=nv()),!n)throw er.create("no-options");const a=Rl.get(l);if(a){if(Rr(n,a.options)&&Rr(s,a.config))return a;throw er.create("duplicate-app",{appName:l})}const u=new fE(l);for(const m of Du.values())u.addComponent(m);const p=new lS(n,s,u);return Rl.set(l,p),p}function cv(r=Ou){const e=Rl.get(r);if(!e&&r===Ou&&nv())return av();if(!e)throw er.create("no-app",{appName:r});return e}function tr(r,e,n){var s;let l=(s=iS[r])!==null&&s!==void 0?s:r;n&&(l+=`-${n}`);const a=l.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const p=[`Unable to register library "${l}" with version "${e}":`];a&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),a&&u&&p.push("and"),u&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(p.join(" "));return}xi(new Pr(`${l}-version`,()=>({library:l,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebase-heartbeat-database",cS=1,Us="firebase-heartbeat-store";let gu=null;function uv(){return gu||(gu=IE(aS,cS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Us)}catch(n){console.warn(n)}}}}).catch(r=>{throw er.create("idb-open",{originalErrorMessage:r.message})})),gu}async function uS(r){try{const n=(await uv()).transaction(Us),s=await n.objectStore(Us).get(dv(r));return await n.done,s}catch(e){if(e instanceof ar)En.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Sm(r,e){try{const s=(await uv()).transaction(Us,"readwrite");await s.objectStore(Us).put(e,dv(r)),await s.done}catch(n){if(n instanceof ar)En.warn(n.message);else{const s=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(s.message)}}}function dv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=1024,hS=30;class fS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Cm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:l}),this._heartbeatsCache.heartbeats.length>hS){const u=gS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){En.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cm(),{heartbeatsToSend:s,unsentEntries:l}=pS(this._heartbeatsCache.heartbeats),a=kl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return En.warn(n),""}}}function Cm(){return new Date().toISOString().substring(0,10)}function pS(r,e=dS){const n=[];let s=r.slice();for(const l of r){const a=n.find(u=>u.agent===l.agent);if(a){if(a.dates.push(l.date),Nm(n)>e){a.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Nm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class mS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xx()?Zx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const l=await this.read();return Sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...e.heartbeats]})}else return}}function Nm(r){return kl(JSON.stringify({version:2,heartbeats:r})).length}function gS(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(r){xi(new Pr("platform-logger",e=>new bE(e),"PRIVATE")),xi(new Pr("heartbeat",e=>new fS(e),"PRIVATE")),tr(ju,xm,r),tr(ju,xm,"esm2017"),tr("fire-js","")}vS("");var Im={};const km="@firebase/database",Tm="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hv="";function _S(r){hv=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yS(e)}}catch{}return new wS},kr=fv("localStorage"),xS=fv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new hd("@firebase/database"),ES=function(){let r=1;return function(){return r++}}(),pv=function(r){const e=cE(r),n=new sE;n.update(e);const s=n.digest();return ad.encodeByteArray(s)},Ys=function(...r){let e="";for(let n=0;n<r.length;n++){const s=r[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ys.apply(null,s):typeof s=="object"?e+=Je(s):e+=s,e+=" "}return e};let bs=null,bm=!0;const SS=function(r,e){F(!0,"Can't turn on custom loggers persistently."),pi.logLevel=ye.VERBOSE,bs=pi.log.bind(pi)},ot=function(...r){if(bm===!0&&(bm=!1,bs===null&&xS.get("logging_enabled")===!0&&SS()),bs){const e=Ys.apply(null,r);bs(e)}},Js=function(r){return function(...e){ot(r,...e)}},Mu=function(...r){const e="FIREBASE INTERNAL ERROR: "+Ys(...r);pi.error(e)},Sn=function(...r){const e=`FIREBASE FATAL ERROR: ${Ys(...r)}`;throw pi.error(e),new Error(e)},yt=function(...r){const e="FIREBASE WARNING: "+Ys(...r);pi.warn(e)},CS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mv=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},NS=function(r){if(document.readyState==="complete")r();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ei="[MIN_NAME]",Ar="[MAX_NAME]",Pi=function(r,e){if(r===e)return 0;if(r===Ei||e===Ar)return-1;if(e===Ei||r===Ar)return 1;{const n=Rm(r),s=Rm(e);return n!==null?s!==null?n-s===0?r.length-e.length:n-s:-1:s!==null?1:r<e?-1:1}},IS=function(r,e){return r===e?0:r<e?-1:1},Ss=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+Je(e))},md=function(r){if(typeof r!="object"||r===null)return Je(r);const e=[];for(const s in r)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Je(e[s]),n+=":",n+=md(r[e[s]]);return n+="}",n},gv=function(r,e){const n=r.length;if(n<=e)return[r];const s=[];for(let l=0;l<n;l+=e)l+e>n?s.push(r.substring(l,n)):s.push(r.substring(l,l+e));return s};function wt(r,e){for(const n in r)r.hasOwnProperty(n)&&e(n,r[n])}const vv=function(r){F(!mv(r),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let l,a,u,p,m;r===0?(a=0,u=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(p=Math.min(Math.floor(Math.log(r)/Math.LN2),s),a=p+s,u=Math.round(r*Math.pow(2,n-p)-Math.pow(2,n))):(a=0,u=Math.round(r/Math.pow(2,1-s-n))));const g=[];for(m=n;m;m-=1)g.push(u%2?1:0),u=Math.floor(u/2);for(m=e;m;m-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(l?1:0),g.reverse();const y=g.join("");let _="";for(m=0;m<64;m+=8){let x=parseInt(y.substr(m,8),2).toString(16);x.length===1&&(x="0"+x),_=_+x}return _.toLowerCase()},kS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},TS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function bS(r,e){let n="Unknown Error";r==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?n="Client doesn't have permission to access the desired data.":r==="unavailable"&&(n="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+n);return s.code=r.toUpperCase(),s}const RS=new RegExp("^-?(0*)\\d{1,10}$"),PS=-2147483648,AS=2147483647,Rm=function(r){if(RS.test(r)){const e=Number(r);if(e>=PS&&e<=AS)return e}return null},Ai=function(r){try{r()}catch(e){setTimeout(()=>{const n=e.stack||"";throw yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},jS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(r,e){const n=setTimeout(r,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ht(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){yt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ot("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',yt(e)}}class yl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}yl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="5",_v="v",yv="s",wv="r",xv="f",Ev=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Sv="ls",Cv="p",Lu="ac",Nv="websocket",Iv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e,n,s,l,a=!1,u="",p=!1,m=!1,g=null){this.secure=n,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=a,this.persistenceKey=u,this.includeNamespaceInQueryParams=p,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MS(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function Tv(r,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let s;if(e===Nv)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===Iv)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MS(r)&&(n.ns=r.namespace);const l=[];return wt(n,(a,u)=>{l.push(a+"="+u)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.counters_={}}incrementCounter(e,n=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={},_u={};function vd(r){const e=r.toString();return vu[e]||(vu[e]=new LS),vu[e]}function FS(r,e){const n=r.toString();return _u[n]||(_u[n]=e()),_u[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Ai(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="start",zS="close",WS="pLPCommand",BS="pRTLPCB",bv="id",Rv="pw",Pv="ser",VS="cb",HS="seg",$S="ts",GS="d",KS="dframe",Av=1870,jv=30,qS=Av-jv,QS=25e3,YS=3e4;class hi{constructor(e,n,s,l,a,u,p){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.transportSessionId=u,this.lastSessionId=p,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Js(e),this.stats_=vd(n),this.urlFn=m=>(this.appCheckToken&&(m[Lu]=this.appCheckToken),Tv(n,Iv,m))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new US(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(YS)),NS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _d((...a)=>{const[u,p,m,g,y]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Pm)this.id=p,this.password=m;else if(u===zS)p?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(p,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...a)=>{const[u,p]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(u,p)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pm]="t",s[Pv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[VS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_v]=gd,this.transportSessionId&&(s[yv]=this.transportSessionId),this.lastSessionId&&(s[Sv]=this.lastSessionId),this.applicationId&&(s[Cv]=this.applicationId),this.appCheckToken&&(s[Lu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(s[wv]=xv);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){hi.forceAllow_=!0}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){return hi.forceAllow_?!0:!hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kS()&&!TS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zg(n),l=gv(s,qS);for(let a=0;a<l.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[a]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[KS]="t",s[bv]=e,s[Rv]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _d{constructor(e,n,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ES(),window[WS+this.uniqueCallbackIdentifier]=e,window[BS+this.uniqueCallbackIdentifier]=n,this.myIFrame=_d.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(p){ot("frame writing exception"),p.stack&&ot(p.stack),ot(p)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ot("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bv]=this.myID,e[Rv]=this.myPW,e[Pv]=this.currentSerial;let n=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jv+s.length<=Av;){const u=this.pendingSegs.shift();s=s+"&"+HS+l+"="+u.seg+"&"+$S+l+"="+u.ts+"&"+GS+l+"="+u.d,l++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},l=setTimeout(s,Math.floor(QS)),a=()=>{clearTimeout(l),s()};this.addTag(e,a)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ot("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=16384,XS=45e3;let Pl=null;typeof MozWebSocket<"u"?Pl=MozWebSocket:typeof WebSocket<"u"&&(Pl=WebSocket);class $t{constructor(e,n,s,l,a,u,p){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Js(this.connId),this.stats_=vd(n),this.connURL=$t.connectionURL_(n,u,p,l,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,l,a){const u={};return u[_v]=gd,typeof location<"u"&&location.hostname&&Ev.test(location.hostname)&&(u[wv]=xv),n&&(u[yv]=n),s&&(u[Sv]=s),l&&(u[Lu]=l),a&&(u[Cv]=a),Tv(e,Nv,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,kr.set("previous_websocket_failure",!0);try{let s;Jx(),this.mySock=new Pl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){$t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pl!==null&&!$t.forceDisallow_}static previouslyFailed(){return kr.isInMemoryStorage||kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gv(n,JS);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(XS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$t.responsesRequiredToBeHealthy=2;$t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static get ALL_TRANSPORTS(){return[hi,$t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=$t&&$t.isAvailable();let s=n&&!$t.previouslyFailed();if(e.webSocketOnly&&(n||yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[$t];else{const l=this.transports_=[];for(const a of zs.ALL_TRANSPORTS)a&&a.isAvailable()&&l.push(a);zs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=6e4,eC=5e3,tC=10*1024,nC=100*1024,yu="t",Am="d",rC="s",jm="r",iC="e",Om="o",Dm="a",Mm="n",Lm="p",sC="h";class oC{constructor(e,n,s,l,a,u,p,m,g,y){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=a,this.onMessage_=u,this.onReady_=p,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Js("c:"+this.id+":"),this.transportManager_=new zs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(yu in e){const n=e[yu];n===Dm?this.upgradeIfSecondaryHealthy_():n===jm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Om&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Lm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Mm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ss("t",e),s=Ss("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ss(yu,e);if(Am in e){const s=e[Am];if(n===sC){const l=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(n===Mm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rC?this.onConnectionShutdown_(s):n===jm?this.onReset_(s):n===iC?Mu("Server Error: "+s):n===Om?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Mu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),gd!==s&&yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Lm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{put(e,n,s,l){}merge(e,n,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const l=this.getInitialEvent(e);l&&n.apply(s,l)}off(e,n,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let a=0;a<l.length;a++)if(l[a].callback===n&&(!s||s===l[a].context)){l.splice(a,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends Dv{static getInstance(){return new Al}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ud()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=32,Um=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new we("")}function se(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function ir(r){return r.pieces_.length-r.pieceNum_}function Ce(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new we(r.pieces_,e)}function Mv(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function lC(r){let e="";for(let n=r.pieceNum_;n<r.pieces_.length;n++)r.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[n])));return e||"/"}function Lv(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Fv(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let n=r.pieceNum_;n<r.pieces_.length-1;n++)e.push(r.pieces_[n]);return new we(e,0)}function $e(r,e){const n=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)n.push(r.pieces_[s]);if(e instanceof we)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&n.push(s[l])}return new we(n,0)}function ae(r){return r.pieceNum_>=r.pieces_.length}function vt(r,e){const n=se(r),s=se(e);if(n===null)return e;if(n===s)return vt(Ce(r),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function yd(r,e){if(ir(r)!==ir(e))return!1;for(let n=r.pieceNum_,s=e.pieceNum_;n<=r.pieces_.length;n++,s++)if(r.pieces_[n]!==e.pieces_[s])return!1;return!0}function Gt(r,e){let n=r.pieceNum_,s=e.pieceNum_;if(ir(r)>ir(e))return!1;for(;n<r.pieces_.length;){if(r.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class aC{constructor(e,n){this.errorPrefix_=n,this.parts_=Lv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Zl(this.parts_[s]);Uv(this)}}function cC(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=Zl(e),Uv(r)}function uC(r){const e=r.parts_.pop();r.byteLength_-=Zl(e),r.parts_.length>0&&(r.byteLength_-=1)}function Uv(r){if(r.byteLength_>Um)throw new Error(r.errorPrefix_+"has a key path longer than "+Um+" bytes ("+r.byteLength_+").");if(r.parts_.length>Fm)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fm+") or object contains a cycle "+Ir(r))}function Ir(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Dv{static getInstance(){return new wd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=1e3,dC=60*5*1e3,zm=30*1e3,hC=1.3,fC=3e4,pC="server_kill",Wm=3;class xn extends Ov{constructor(e,n,s,l,a,u,p,m){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=a,this.authTokenProvider_=u,this.appCheckTokenProvider_=p,this.authOverride_=m,this.id=xn.nextPersistentConnectionId_++,this.log_=Js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Cs,this.maxReconnectDelay_=dC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");wd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Al.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const l=++this.requestNumber_,a={r:l,a:e,b:n};this.log_(Je(a)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const n=new Xl,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const p=u.d;u.s==="ok"?n.resolve(p):n.reject(p)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),n.promise}listen(e,n,s,l){this.initConnection_();const a=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+a),this.listens.has(u)||this.listens.set(u,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(u).has(a),"listen() called twice for same path/queryId.");const p={onComplete:l,hashFn:n,query:e,tag:s};this.listens.get(u).set(a,p),this.connected_&&this.sendListen_(p)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),l=n._queryIdentifier;this.log_("Listen on "+s+" for "+l);const a={p:s},u="q";e.tag&&(a.q=n._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(u,a,p=>{const m=p.d,g=p.s;xn.warnOnListenWarnings_(m,n),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",p),g!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&In(e,"w")){const s=wi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+n._queryParams.getIndex().toString()+'"',a=n._path.toString();yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,l=>{const a=l.s,u=l.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,n)}sendUnlisten_(e,n,s,l){this.log_("Unlisten on "+e+" for "+n);const a={p:e},u="n";l&&(a.q=s,a.t=l),this.sendRequest(u,a)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,l){const a={p:n,d:s};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,u=>{l&&setTimeout(()=>{l(u.s,u.d)},Math.floor(0))})}put(e,n,s,l){this.putInternal("p",e,n,s,l)}merge(e,n,s,l){this.putInternal("m",e,n,s,l)}putInternal(e,n,s,l,a){this.initConnection_();const u={p:n,d:s};a!==void 0&&(u.h=a),this.outstandingPuts_.push({action:e,request:u,onComplete:l}),this.outstandingPutCount_++;const p=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(p):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,a=>{this.log_(n+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(a.s,a.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const a=s.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Mu("Unrecognized action received from server: "+Je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fC&&(this.reconnectDelay_=Cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+xn.nextConnectionId_++,a=this.lastSessionId;let u=!1,p=null;const m=function(){p?p.close():(u=!0,s())},g=function(_){F(p,"sendRequest call when we're not connected not allowed."),p.sendRequest(_)};this.realtime_={close:m,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,x]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?ot("getToken() completed but was canceled"):(ot("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=x&&x.token,p=new oC(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,b=>{yt(b+" ("+this.repoInfo_.toString()+")"),this.interrupt(pC)},a))}catch(_){this.log_("Failed to get token: "+_),u||(this.repoInfo_.nodeAdmin&&yt(_),m())}}}interrupt(e){ot("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ot("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ru(this.interruptReasons_)&&(this.reconnectDelay_=Cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(a=>md(a)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,n){const s=new we(e).toString();let l;if(this.listens.has(s)){const a=this.listens.get(s);l=a.get(n),a.delete(n),a.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,n){ot("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wm&&(this.reconnectDelay_=zm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ot("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hv.replace(/\./g,"-")]=1,ud()?e["framework.cordova"]=1:iv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Al.getInstance().currentlyOnline();return Ru(this.interruptReasons_)&&e}}xn.nextPersistentConnectionId_=0;xn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(Ei,e),l=new oe(Ei,n);return this.compare(s,l)!==0}minPost(){return oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;class zv extends ea{static get __EMPTY_NODE(){return gl}static set __EMPTY_NODE(e){gl=e}compare(e,n){return Pi(e.name,n.name)}isDefinedOn(e){throw Ti("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(Ar,gl)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,gl)}toString(){return".key"}}const mi=new zv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n,s,l,a=null){this.isReverse_=l,this.resultGenerator_=a,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?s(e.key,n):1,l&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,l,a){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=l??_t.EMPTY_NODE,this.right=a??_t.EMPTY_NODE}copy(e,n,s,l,a){return new Ye(e??this.key,n??this.value,s??this.color,l??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const a=s(e,l.key);return a<0?l=l.copy(null,null,null,l.left.insert(e,n,s),null):a===0?l=l.copy(null,n,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,l;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class mC{copy(e,n,s,l,a){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,l=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new mC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r,e){return Pi(r.name,e.name)}function xd(r,e){return Pi(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu;function vC(r){Fu=r}const Wv=function(r){return typeof r=="number"?"number:"+vv(r):"string:"+r},Bv=function(r){if(r.isLeafNode()){const e=r.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else F(r===Fu||r.isEmpty(),"priority of unexpected type.");F(r===Fu||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;class Qe{static set __childrenNodeConstructor(e){Bm=e}static get __childrenNodeConstructor(){return Bm}constructor(e,n=Qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bv(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ae(e)?this:se(e)===".priority"?this.priorityNode_:Qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(F(s!==".priority"||ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vv(this.value_):e+=this.value_,this.lazyHash_=pv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qe.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,l=Qe.VALUE_TYPE_ORDER.indexOf(n),a=Qe.VALUE_TYPE_ORDER.indexOf(s);return F(l>=0,"Unknown leaf type: "+n),F(a>=0,"Unknown leaf type: "+s),l===a?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vv,Hv;function _C(r){Vv=r}function yC(r){Hv=r}class wC extends ea{compare(e,n){const s=e.node.getPriority(),l=n.node.getPriority(),a=s.compareTo(l);return a===0?Pi(e.name,n.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(Ar,new Qe("[PRIORITY-POST]",Hv))}makePost(e,n){const s=Vv(e);return new oe(n,new Qe("[PRIORITY-POST]",s))}toString(){return".priority"}}const De=new wC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC=Math.log(2);class EC{constructor(e){const n=a=>parseInt(Math.log(a)/xC,10),s=a=>parseInt(Array(a+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jl=function(r,e,n,s){r.sort(e);const l=function(m,g){const y=g-m;let _,x;if(y===0)return null;if(y===1)return _=r[m],x=n?n(_):_,new Ye(x,_.node,Ye.BLACK,null,null);{const b=parseInt(y/2,10)+m,k=l(m,b),P=l(b+1,g);return _=r[b],x=n?n(_):_,new Ye(x,_.node,Ye.BLACK,k,P)}},a=function(m){let g=null,y=null,_=r.length;const x=function(k,P){const A=_-k,H=_;_-=k;const ne=l(A+1,H),ee=r[A],ce=n?n(ee):ee;b(new Ye(ce,ee.node,P,null,ne))},b=function(k){g?(g.left=k,g=k):(y=k,g=k)};for(let k=0;k<m.count;++k){const P=m.nextBitIsOne(),A=Math.pow(2,m.count-(k+1));P?x(A,Ye.BLACK):(x(A,Ye.BLACK),x(A,Ye.RED))}return y},u=new EC(r.length),p=a(u);return new _t(s||e,p)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu;const di={};class _n{static get Default(){return F(di&&De,"ChildrenNode.ts has not been loaded"),wu=wu||new _n({".priority":di},{".priority":De}),wu}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,n){F(e!==mi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const a=n.getIterator(oe.Wrap);let u=a.getNext();for(;u;)l=l||e.isDefinedOn(u.node),s.push(u),u=a.getNext();let p;l?p=jl(s,e.getCompare()):p=di;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const y=Object.assign({},this.indexes_);return y[m]=p,new _n(y,g)}addToIndexes(e,n){const s=bl(this.indexes_,(l,a)=>{const u=wi(this.indexSet_,a);if(F(u,"Missing index implementation for "+a),l===di)if(u.isDefinedOn(e.node)){const p=[],m=n.getIterator(oe.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&p.push(g),g=m.getNext();return p.push(e),jl(p,u.getCompare())}else return di;else{const p=n.get(e.name);let m=l;return p&&(m=m.remove(new oe(e.name,p))),m.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=bl(this.indexes_,l=>{if(l===di)return l;{const a=n.get(e.name);return a?l.remove(new oe(e.name,a)):l}});return new _n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns;class X{static get EMPTY_NODE(){return Ns||(Ns=new X(new _t(xd),null,_n.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bv(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ns}updatePriority(e){return this.children_.isEmpty()?this:new X(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ns:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let l,a;n.isEmpty()?(l=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,n),a=this.indexMap_.addToIndexes(s,this.children_));const u=l.isEmpty()?Ns:this.priorityNode_;return new X(l,u,a)}}updateChild(e,n){const s=se(e);if(s===null)return n;{F(se(e)!==".priority"||ir(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(Ce(e),n);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,l=0,a=!0;if(this.forEachChild(De,(u,p)=>{n[u]=p.val(e),s++,a&&X.INTEGER_REGEXP_.test(u)?l=Math.max(l,Number(u)):a=!1}),!e&&a&&l<2*s){const u=[];for(const p in n)u[p]=n[p];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wv(this.getPriority().val())+":"),this.forEachChild(De,(n,s)=>{const l=s.hash();l!==""&&(e+=":"+n+":"+l)}),this.lazyHash_=e===""?"":pv(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const l=this.resolveIndex_(s);if(l){const a=l.getPredecessorKey(new oe(e,n));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>n(l.name,l.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,oe.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)<0;)l.getNext(),a=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let a=l.peek();for(;a!=null&&n.compare(a,e)>0;)l.getNext(),a=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xs?-1:0}withIndex(e){if(e===mi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new X(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(De),l=n.getIterator(De);let a=s.getNext(),u=l.getNext();for(;a&&u;){if(a.name!==u.name||!a.node.equals(u.node))return!1;a=s.getNext(),u=l.getNext()}return a===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===mi?null:this.indexMap_.get(e.toString())}}X.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SC extends X{constructor(){super(new _t(xd),X.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return X.EMPTY_NODE}isEmpty(){return!1}}const Xs=new SC;Object.defineProperties(oe,{MIN:{value:new oe(Ei,X.EMPTY_NODE)},MAX:{value:new oe(Ar,Xs)}});zv.__EMPTY_NODE=X.EMPTY_NODE;Qe.__childrenNodeConstructor=X;vC(Xs);yC(Xs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=!0;function et(r,e=null){if(r===null)return X.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const n=r;return new Qe(n,et(e))}if(!(r instanceof Array)&&CC){const n=[];let s=!1;if(wt(r,(u,p)=>{if(u.substring(0,1)!=="."){const m=et(p);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),n.push(new oe(u,m)))}}),n.length===0)return X.EMPTY_NODE;const a=jl(n,gC,u=>u.name,xd);if(s){const u=jl(n,De.getCompare());return new X(a,et(e),new _n({".priority":u},{".priority":De}))}else return new X(a,et(e),_n.Default)}else{let n=X.EMPTY_NODE;return wt(r,(s,l)=>{if(In(r,s)&&s.substring(0,1)!=="."){const a=et(l);(a.isLeafNode()||!a.isEmpty())&&(n=n.updateImmediateChild(s,a))}}),n.updatePriority(et(e))}}_C(et);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends ea{constructor(e){super(),this.indexPath_=e,F(!ae(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),l=this.extractChild(n.node),a=s.compareTo(l);return a===0?Pi(e.name,n.name):a}makePost(e,n){const s=et(e),l=X.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,l)}maxPost(){const e=X.EMPTY_NODE.updateChild(this.indexPath_,Xs);return new oe(Ar,e)}toString(){return Lv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends ea{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Pi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=et(e);return new oe(n,s)}toString(){return".value"}}const kC=new IC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(r){return{type:"value",snapshotNode:r}}function Si(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ws(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Bs(r,e,n){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:n}}function TC(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.index_=e}updateChild(e,n,s,l,a,u){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const p=e.getImmediateChild(n);return p.getChild(l).equals(s.getChild(l))&&p.isEmpty()===s.isEmpty()||(u!=null&&(s.isEmpty()?e.hasChild(n)?u.trackChildChange(Ws(n,p)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):p.isEmpty()?u.trackChildChange(Si(n,s)):u.trackChildChange(Bs(n,s,p))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(De,(l,a)=>{n.hasChild(l)||s.trackChildChange(Ws(l,a))}),n.isLeafNode()||n.forEachChild(De,(l,a)=>{if(e.hasChild(l)){const u=e.getImmediateChild(l);u.equals(a)||s.trackChildChange(Bs(l,a,u))}else s.trackChildChange(Si(l,a))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?X.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.indexedFilter_=new Ed(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vs.getStartPost_(e),this.endPost_=Vs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,l,a,u){return this.matches(new oe(n,s))||(s=X.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,l,a,u)}updateFullNode(e,n,s){n.isLeafNode()&&(n=X.EMPTY_NODE);let l=n.withIndex(this.index_);l=l.updatePriority(X.EMPTY_NODE);const a=this;return n.forEachChild(De,(u,p)=>{a.matches(new oe(u,p))||(l=l.updateImmediateChild(u,X.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Vs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,l,a,u){return this.rangedFilter_.matches(new oe(n,s))||(s=X.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,l,a,u):this.fullLimitUpdateChild_(e,n,s,a,u)}updateFullNode(e,n,s){let l;if(n.isLeafNode()||n.isEmpty())l=X.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){l=X.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;a.hasNext()&&u<this.limit_;){const p=a.getNext();if(this.withinDirectionalStart(p))if(this.withinDirectionalEnd(p))l=l.updateImmediateChild(p.name,p.node),u++;else break;else continue}}else{l=n.withIndex(this.index_),l=l.updatePriority(X.EMPTY_NODE);let a;this.reverse_?a=l.getReverseIterator(this.index_):a=l.getIterator(this.index_);let u=0;for(;a.hasNext();){const p=a.getNext();u<this.limit_&&this.withinDirectionalStart(p)&&this.withinDirectionalEnd(p)?u++:l=l.updateImmediateChild(p.name,X.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,l,a){let u;if(this.reverse_){const _=this.index_.getCompare();u=(x,b)=>_(b,x)}else u=this.index_.getCompare();const p=e;F(p.numChildren()===this.limit_,"");const m=new oe(n,s),g=this.reverse_?p.getFirstChild(this.index_):p.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(p.hasChild(n)){const _=p.getImmediateChild(n);let x=l.getChildAfterChild(this.index_,g,this.reverse_);for(;x!=null&&(x.name===n||p.hasChild(x.name));)x=l.getChildAfterChild(this.index_,x,this.reverse_);const b=x==null?1:u(x,m);if(y&&!s.isEmpty()&&b>=0)return a!=null&&a.trackChildChange(Bs(n,s,_)),p.updateImmediateChild(n,s);{a!=null&&a.trackChildChange(Ws(n,_));const P=p.updateImmediateChild(n,X.EMPTY_NODE);return x!=null&&this.rangedFilter_.matches(x)?(a!=null&&a.trackChildChange(Si(x.name,x.node)),P.updateImmediateChild(x.name,x.node)):P}}else return s.isEmpty()?e:y&&u(g,m)>=0?(a!=null&&(a.trackChildChange(Ws(g.name,g.node)),a.trackChildChange(Si(n,s))),p.updateImmediateChild(n,s).updateImmediateChild(g.name,X.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=De}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ei}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ar}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===De}copy(){const e=new Sd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function RC(r){return r.loadsAllData()?new Ed(r.getIndex()):r.hasLimit()?new bC(r):new Vs(r)}function Vm(r){const e={};if(r.isDefault())return e;let n;if(r.index_===De?n="$priority":r.index_===kC?n="$value":r.index_===mi?n="$key":(F(r.index_ instanceof NC,"Unrecognized index type!"),n=r.index_.toString()),e.orderBy=Je(n),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=Je(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+Je(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=Je(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+Je(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function Hm(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let n=r.viewFrom_;n===""&&(r.isViewFromLeft()?n="l":n="r"),e.vf=n}return r.index_!==De&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends Ov{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=Js("p:rest:"),this.listens_={}}listen(e,n,s,l){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const u=Ol.getListenId_(e,s),p={};this.listens_[u]=p;const m=Vm(e._queryParams);this.restRequest_(a+".json",m,(g,y)=>{let _=y;if(g===404&&(_=null,g=null),g===null&&this.onDataUpdate_(a,_,!1,s),wi(this.listens_,u)===p){let x;g?g===401?x="permission_denied":x="rest_error:"+g:x="ok",l(x,null)}})}unlisten(e,n){const s=Ol.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vm(e._queryParams),s=e._path.toString(),l=new Xl;return this.restRequest_(s+".json",n,(a,u)=>{let p=u;a===404&&(p=null,a=null),a===null?(this.onDataUpdate_(s,p,!1,null),l.resolve(p)):l.reject(new Error(p))}),l.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,a])=>{l&&l.accessToken&&(n.auth=l.accessToken),a&&a.token&&(n.ac=a.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+u);const p=new XMLHttpRequest;p.onreadystatechange=()=>{if(s&&p.readyState===4){this.log_("REST Response for "+u+" received. status:",p.status,"response:",p.responseText);let m=null;if(p.status>=200&&p.status<300){try{m=Fs(p.responseText)}catch{yt("Failed to parse JSON response for "+u+": "+p.responseText)}s(null,m)}else p.status!==401&&p.status!==404&&yt("Got unsuccessful REST response for "+u+" Status: "+p.status),s(p.status);s=null}},p.open("GET",u,!0),p.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.rootNode_=X.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(){return{value:null,children:new Map}}function Gv(r,e,n){if(ae(e))r.value=n,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,n);else{const s=se(e);r.children.has(s)||r.children.set(s,Dl());const l=r.children.get(s);e=Ce(e),Gv(l,e,n)}}function Uu(r,e,n){r.value!==null?n(e,r.value):AC(r,(s,l)=>{const a=new we(e.toString()+"/"+s);Uu(l,a,n)})}function AC(r,e){r.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&wt(this.last_,(s,l)=>{n[s]=n[s]-l}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=10*1e3,OC=30*1e3,DC=5*60*1e3;class MC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new jC(e);const s=$m+(OC-$m)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;wt(e,(l,a)=>{a>0&&In(this.statsToReport_,l)&&(n[l]=a,s=!0)}),s&&this.server_.reportStats(n),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*DC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Kt||(Kt={}));function Kv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Nd(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Kt.ACK_USER_WRITE,this.source=Kv()}operationForChild(e){if(ae(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new Ml(pe(),n,this.revert)}}else return F(se(this.path)===e,"operationForChild called for unrelated child."),new Ml(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.source=e,this.path=n,this.type=Kt.LISTEN_COMPLETE}operationForChild(e){return ae(this.path)?new Hs(this.source,pe()):new Hs(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Kt.OVERWRITE}operationForChild(e){return ae(this.path)?new jr(this.source,pe(),this.snap.getImmediateChild(e)):new jr(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Kt.MERGE}operationForChild(e){if(ae(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new jr(this.source,pe(),n.value):new $s(this.source,pe(),n)}else return F(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $s(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FC(r,e,n,s){const l=[],a=[];return e.forEach(u=>{u.type==="child_changed"&&r.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&a.push(TC(u.childName,u.snapshotNode))}),Is(r,l,"child_removed",e,s,n),Is(r,l,"child_added",e,s,n),Is(r,l,"child_moved",a,s,n),Is(r,l,"child_changed",e,s,n),Is(r,l,"value",e,s,n),l}function Is(r,e,n,s,l,a){const u=s.filter(p=>p.type===n);u.sort((p,m)=>zC(r,p,m)),u.forEach(p=>{const m=UC(r,p,a);l.forEach(g=>{g.respondsTo(p.type)&&e.push(g.createEvent(m,r.query_))})})}function UC(r,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function zC(r,e,n){if(e.childName==null||n.childName==null)throw Ti("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),l=new oe(n.childName,n.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(r,e){return{eventCache:r,serverCache:e}}function Ps(r,e,n,s){return ta(new Or(e,n,s),r.serverCache)}function qv(r,e,n,s){return ta(r.eventCache,new Or(e,n,s))}function zu(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function Dr(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;const WC=()=>(xu||(xu=new _t(IS)),xu);class ke{static fromObject(e){let n=new ke(null);return wt(e,(s,l)=>{n=n.set(new we(s),l)}),n}constructor(e,n=WC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ae(e))return null;{const s=se(e),l=this.children.get(s);if(l!==null){const a=l.findRootMostMatchingPathAndValue(Ce(e),n);return a!=null?{path:$e(new we(s),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ae(e))return this;{const n=se(e),s=this.children.get(n);return s!==null?s.subtree(Ce(e)):new ke(null)}}set(e,n){if(ae(e))return new ke(n,this.children);{const s=se(e),a=(this.children.get(s)||new ke(null)).set(Ce(e),n),u=this.children.insert(s,a);return new ke(this.value,u)}}remove(e){if(ae(e))return this.children.isEmpty()?new ke(null):new ke(null,this.children);{const n=se(e),s=this.children.get(n);if(s){const l=s.remove(Ce(e));let a;return l.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,l),this.value===null&&a.isEmpty()?new ke(null):new ke(this.value,a)}else return this}}get(e){if(ae(e))return this.value;{const n=se(e),s=this.children.get(n);return s?s.get(Ce(e)):null}}setTree(e,n){if(ae(e))return n;{const s=se(e),a=(this.children.get(s)||new ke(null)).setTree(Ce(e),n);let u;return a.isEmpty()?u=this.children.remove(s):u=this.children.insert(s,a),new ke(this.value,u)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((l,a)=>{s[l]=a.fold_($e(e,l),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,s){const l=this.value?s(n,this.value):!1;if(l)return l;if(ae(e))return null;{const a=se(e),u=this.children.get(a);return u?u.findOnPath_(Ce(e),$e(n,a),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,s){if(ae(e))return this;{this.value&&s(n,this.value);const l=se(e),a=this.children.get(l);return a?a.foreachOnPath_(Ce(e),$e(n,l),s):new ke(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((s,l)=>{l.foreach_($e(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new ke(null))}}function As(r,e,n){if(ae(e))return new Yt(new ke(n));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let a=s.value;const u=vt(l,e);return a=a.updateChild(u,n),new Yt(r.writeTree_.set(l,a))}else{const l=new ke(n),a=r.writeTree_.setTree(e,l);return new Yt(a)}}}function Gm(r,e,n){let s=r;return wt(n,(l,a)=>{s=As(s,$e(e,l),a)}),s}function Km(r,e){if(ae(e))return Yt.empty();{const n=r.writeTree_.setTree(e,new ke(null));return new Yt(n)}}function Wu(r,e){return Fr(r,e)!=null}function Fr(r,e){const n=r.writeTree_.findRootMostValueAndPath(e);return n!=null?r.writeTree_.get(n.path).getChild(vt(n.path,e)):null}function qm(r){const e=[],n=r.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(De,(s,l)=>{e.push(new oe(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new oe(s,l.value))}),e}function nr(r,e){if(ae(e))return r;{const n=Fr(r,e);return n!=null?new Yt(new ke(n)):new Yt(r.writeTree_.subtree(e))}}function Bu(r){return r.writeTree_.isEmpty()}function Ci(r,e){return Qv(pe(),r.writeTree_,e)}function Qv(r,e,n){if(e.value!=null)return n.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,a)=>{l===".priority"?(F(a.value!==null,"Priority writes must always be leaf nodes"),s=a.value):n=Qv($e(r,l),a,n)}),!n.getChild(r).isEmpty()&&s!==null&&(n=n.updateChild($e(r,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(r,e){return Zv(e,r)}function BC(r,e,n,s,l){F(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:n,writeId:s,visible:l}),l&&(r.visibleWrites=As(r.visibleWrites,e,n)),r.lastWriteId=s}function VC(r,e){for(let n=0;n<r.allWrites.length;n++){const s=r.allWrites[n];if(s.writeId===e)return s}return null}function HC(r,e){const n=r.allWrites.findIndex(p=>p.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[n];r.allWrites.splice(n,1);let l=s.visible,a=!1,u=r.allWrites.length-1;for(;l&&u>=0;){const p=r.allWrites[u];p.visible&&(u>=n&&$C(p,s.path)?l=!1:Gt(s.path,p.path)&&(a=!0)),u--}if(l){if(a)return GC(r),!0;if(s.snap)r.visibleWrites=Km(r.visibleWrites,s.path);else{const p=s.children;wt(p,m=>{r.visibleWrites=Km(r.visibleWrites,$e(s.path,m))})}return!0}else return!1}function $C(r,e){if(r.snap)return Gt(r.path,e);for(const n in r.children)if(r.children.hasOwnProperty(n)&&Gt($e(r.path,n),e))return!0;return!1}function GC(r){r.visibleWrites=Yv(r.allWrites,KC,pe()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function KC(r){return r.visible}function Yv(r,e,n){let s=Yt.empty();for(let l=0;l<r.length;++l){const a=r[l];if(e(a)){const u=a.path;let p;if(a.snap)Gt(n,u)?(p=vt(n,u),s=As(s,p,a.snap)):Gt(u,n)&&(p=vt(u,n),s=As(s,pe(),a.snap.getChild(p)));else if(a.children){if(Gt(n,u))p=vt(n,u),s=Gm(s,p,a.children);else if(Gt(u,n))if(p=vt(u,n),ae(p))s=Gm(s,pe(),a.children);else{const m=wi(a.children,se(p));if(m){const g=m.getChild(Ce(p));s=As(s,pe(),g)}}}else throw Ti("WriteRecord should have .snap or .children")}}return s}function Jv(r,e,n,s,l){if(!s&&!l){const a=Fr(r.visibleWrites,e);if(a!=null)return a;{const u=nr(r.visibleWrites,e);if(Bu(u))return n;if(n==null&&!Wu(u,pe()))return null;{const p=n||X.EMPTY_NODE;return Ci(u,p)}}}else{const a=nr(r.visibleWrites,e);if(!l&&Bu(a))return n;if(!l&&n==null&&!Wu(a,pe()))return null;{const u=function(g){return(g.visible||l)&&(!s||!~s.indexOf(g.writeId))&&(Gt(g.path,e)||Gt(e,g.path))},p=Yv(r.allWrites,u,e),m=n||X.EMPTY_NODE;return Ci(p,m)}}}function qC(r,e,n){let s=X.EMPTY_NODE;const l=Fr(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(De,(a,u)=>{s=s.updateImmediateChild(a,u)}),s;if(n){const a=nr(r.visibleWrites,e);return n.forEachChild(De,(u,p)=>{const m=Ci(nr(a,new we(u)),p);s=s.updateImmediateChild(u,m)}),qm(a).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}else{const a=nr(r.visibleWrites,e);return qm(a).forEach(u=>{s=s.updateImmediateChild(u.name,u.node)}),s}}function QC(r,e,n,s,l){F(s||l,"Either existingEventSnap or existingServerSnap must exist");const a=$e(e,n);if(Wu(r.visibleWrites,a))return null;{const u=nr(r.visibleWrites,a);return Bu(u)?l.getChild(n):Ci(u,l.getChild(n))}}function YC(r,e,n,s){const l=$e(e,n),a=Fr(r.visibleWrites,l);if(a!=null)return a;if(s.isCompleteForChild(n)){const u=nr(r.visibleWrites,l);return Ci(u,s.getNode().getImmediateChild(n))}else return null}function JC(r,e){return Fr(r.visibleWrites,e)}function XC(r,e,n,s,l,a,u){let p;const m=nr(r.visibleWrites,e),g=Fr(m,pe());if(g!=null)p=g;else if(n!=null)p=Ci(m,n);else return[];if(p=p.withIndex(u),!p.isEmpty()&&!p.isLeafNode()){const y=[],_=u.getCompare(),x=a?p.getReverseIteratorFrom(s,u):p.getIteratorFrom(s,u);let b=x.getNext();for(;b&&y.length<l;)_(b,s)!==0&&y.push(b),b=x.getNext();return y}else return[]}function ZC(){return{visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1}}function Ll(r,e,n,s){return Jv(r.writeTree,r.treePath,e,n,s)}function kd(r,e){return qC(r.writeTree,r.treePath,e)}function Qm(r,e,n,s){return QC(r.writeTree,r.treePath,e,n,s)}function Fl(r,e){return JC(r.writeTree,$e(r.treePath,e))}function e1(r,e,n,s,l,a){return XC(r.writeTree,r.treePath,e,n,s,l,a)}function Td(r,e,n){return YC(r.writeTree,r.treePath,e,n)}function Xv(r,e){return Zv($e(r.treePath,e),r.writeTree)}function Zv(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const a=l.type;if(n==="child_added"&&a==="child_removed")this.changeMap.set(s,Bs(s,e.snapshotNode,l.snapshotNode));else if(n==="child_removed"&&a==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&a==="child_changed")this.changeMap.set(s,Ws(s,l.oldSnap));else if(n==="child_changed"&&a==="child_added")this.changeMap.set(s,Si(s,e.snapshotNode));else if(n==="child_changed"&&a==="child_changed")this.changeMap.set(s,Bs(s,e.snapshotNode,l.oldSnap));else throw Ti("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const e_=new n1;class bd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Td(this.writes_,e,s)}}getChildAfterChild(e,n,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Dr(this.viewCache_),a=e1(this.writes_,l,n,1,s,e);return a.length===0?null:a[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(r){return{filter:r}}function i1(r,e){F(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function s1(r,e,n,s,l){const a=new t1;let u,p;if(n.type===Kt.OVERWRITE){const g=n;g.source.fromUser?u=Vu(r,e,g.path,g.snap,s,l,a):(F(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered()&&!ae(g.path),u=Ul(r,e,g.path,g.snap,s,l,p,a))}else if(n.type===Kt.MERGE){const g=n;g.source.fromUser?u=l1(r,e,g.path,g.children,s,l,a):(F(g.source.fromServer,"Unknown source."),p=g.source.tagged||e.serverCache.isFiltered(),u=Hu(r,e,g.path,g.children,s,l,p,a))}else if(n.type===Kt.ACK_USER_WRITE){const g=n;g.revert?u=u1(r,e,g.path,s,l,a):u=a1(r,e,g.path,g.affectedTree,s,l,a)}else if(n.type===Kt.LISTEN_COMPLETE)u=c1(r,e,n.path,s,a);else throw Ti("Unknown operation type: "+n.type);const m=a.getChanges();return o1(e,u,m),{viewCache:u,changes:m}}function o1(r,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),a=zu(r);(n.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(a)||!s.getNode().getPriority().equals(a.getPriority()))&&n.push($v(zu(e)))}}function t_(r,e,n,s,l,a){const u=e.eventCache;if(Fl(s,n)!=null)return e;{let p,m;if(ae(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Dr(e),y=g instanceof X?g:X.EMPTY_NODE,_=kd(s,y);p=r.filter.updateFullNode(e.eventCache.getNode(),_,a)}else{const g=Ll(s,Dr(e));p=r.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=se(n);if(g===".priority"){F(ir(n)===1,"Can't have a priority with additional path components");const y=u.getNode();m=e.serverCache.getNode();const _=Qm(s,n,y,m);_!=null?p=r.filter.updatePriority(y,_):p=u.getNode()}else{const y=Ce(n);let _;if(u.isCompleteForChild(g)){m=e.serverCache.getNode();const x=Qm(s,n,u.getNode(),m);x!=null?_=u.getNode().getImmediateChild(g).updateChild(y,x):_=u.getNode().getImmediateChild(g)}else _=Td(s,g,e.serverCache);_!=null?p=r.filter.updateChild(u.getNode(),g,_,y,l,a):p=u.getNode()}}return Ps(e,p,u.isFullyInitialized()||ae(n),r.filter.filtersNodes())}}function Ul(r,e,n,s,l,a,u,p){const m=e.serverCache;let g;const y=u?r.filter:r.filter.getIndexedFilter();if(ae(n))g=y.updateFullNode(m.getNode(),s,null);else if(y.filtersNodes()&&!m.isFiltered()){const b=m.getNode().updateChild(n,s);g=y.updateFullNode(m.getNode(),b,null)}else{const b=se(n);if(!m.isCompleteForPath(n)&&ir(n)>1)return e;const k=Ce(n),A=m.getNode().getImmediateChild(b).updateChild(k,s);b===".priority"?g=y.updatePriority(m.getNode(),A):g=y.updateChild(m.getNode(),b,A,k,e_,null)}const _=qv(e,g,m.isFullyInitialized()||ae(n),y.filtersNodes()),x=new bd(l,_,a);return t_(r,_,n,l,x,p)}function Vu(r,e,n,s,l,a,u){const p=e.eventCache;let m,g;const y=new bd(l,e,a);if(ae(n))g=r.filter.updateFullNode(e.eventCache.getNode(),s,u),m=Ps(e,g,!0,r.filter.filtersNodes());else{const _=se(n);if(_===".priority")g=r.filter.updatePriority(e.eventCache.getNode(),s),m=Ps(e,g,p.isFullyInitialized(),p.isFiltered());else{const x=Ce(n),b=p.getNode().getImmediateChild(_);let k;if(ae(x))k=s;else{const P=y.getCompleteChild(_);P!=null?Mv(x)===".priority"&&P.getChild(Fv(x)).isEmpty()?k=P:k=P.updateChild(x,s):k=X.EMPTY_NODE}if(b.equals(k))m=e;else{const P=r.filter.updateChild(p.getNode(),_,k,x,y,u);m=Ps(e,P,p.isFullyInitialized(),r.filter.filtersNodes())}}}return m}function Ym(r,e){return r.eventCache.isCompleteForChild(e)}function l1(r,e,n,s,l,a,u){let p=e;return s.foreach((m,g)=>{const y=$e(n,m);Ym(e,se(y))&&(p=Vu(r,p,y,g,l,a,u))}),s.foreach((m,g)=>{const y=$e(n,m);Ym(e,se(y))||(p=Vu(r,p,y,g,l,a,u))}),p}function Jm(r,e,n){return n.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function Hu(r,e,n,s,l,a,u,p){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;ae(n)?g=s:g=new ke(null).setTree(n,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((_,x)=>{if(y.hasChild(_)){const b=e.serverCache.getNode().getImmediateChild(_),k=Jm(r,b,x);m=Ul(r,m,new we(_),k,l,a,u,p)}}),g.children.inorderTraversal((_,x)=>{const b=!e.serverCache.isCompleteForChild(_)&&x.value===null;if(!y.hasChild(_)&&!b){const k=e.serverCache.getNode().getImmediateChild(_),P=Jm(r,k,x);m=Ul(r,m,new we(_),P,l,a,u,p)}}),m}function a1(r,e,n,s,l,a,u){if(Fl(l,n)!=null)return e;const p=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(ae(n)&&m.isFullyInitialized()||m.isCompleteForPath(n))return Ul(r,e,n,m.getNode().getChild(n),l,a,p,u);if(ae(n)){let g=new ke(null);return m.getNode().forEachChild(mi,(y,_)=>{g=g.set(new we(y),_)}),Hu(r,e,n,g,l,a,p,u)}else return e}else{let g=new ke(null);return s.foreach((y,_)=>{const x=$e(n,y);m.isCompleteForPath(x)&&(g=g.set(y,m.getNode().getChild(x)))}),Hu(r,e,n,g,l,a,p,u)}}function c1(r,e,n,s,l){const a=e.serverCache,u=qv(e,a.getNode(),a.isFullyInitialized()||ae(n),a.isFiltered());return t_(r,u,n,s,e_,l)}function u1(r,e,n,s,l,a){let u;if(Fl(s,n)!=null)return e;{const p=new bd(s,e,l),m=e.eventCache.getNode();let g;if(ae(n)||se(n)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Ll(s,Dr(e));else{const _=e.serverCache.getNode();F(_ instanceof X,"serverChildren would be complete if leaf node"),y=kd(s,_)}y=y,g=r.filter.updateFullNode(m,y,a)}else{const y=se(n);let _=Td(s,y,e.serverCache);_==null&&e.serverCache.isCompleteForChild(y)&&(_=m.getImmediateChild(y)),_!=null?g=r.filter.updateChild(m,y,_,Ce(n),p,a):e.eventCache.getNode().hasChild(y)?g=r.filter.updateChild(m,y,X.EMPTY_NODE,Ce(n),p,a):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Ll(s,Dr(e)),u.isLeafNode()&&(g=r.filter.updateFullNode(g,u,a)))}return u=e.serverCache.isFullyInitialized()||Fl(s,pe())!=null,Ps(e,g,u,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new Ed(s.getIndex()),a=RC(s);this.processor_=r1(a);const u=n.serverCache,p=n.eventCache,m=l.updateFullNode(X.EMPTY_NODE,u.getNode(),null),g=a.updateFullNode(X.EMPTY_NODE,p.getNode(),null),y=new Or(m,u.isFullyInitialized(),l.filtersNodes()),_=new Or(g,p.isFullyInitialized(),a.filtersNodes());this.viewCache_=ta(_,y),this.eventGenerator_=new LC(this.query_)}get query(){return this.query_}}function h1(r){return r.viewCache_.serverCache.getNode()}function f1(r,e){const n=Dr(r.viewCache_);return n&&(r.query._queryParams.loadsAllData()||!ae(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function Xm(r){return r.eventRegistrations_.length===0}function p1(r,e){r.eventRegistrations_.push(e)}function Zm(r,e,n){const s=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(a=>{const u=a.createCancelEvent(n,l);u&&s.push(u)})}if(e){let l=[];for(let a=0;a<r.eventRegistrations_.length;++a){const u=r.eventRegistrations_[a];if(!u.matches(e))l.push(u);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(a+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function eg(r,e,n,s){e.type===Kt.MERGE&&e.source.queryId!==null&&(F(Dr(r.viewCache_),"We should always have a full cache before handling merges"),F(zu(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,a=s1(r.processor_,l,e,n,s);return i1(r.processor_,a.viewCache),F(a.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=a.viewCache,n_(r,a.changes,a.viewCache.eventCache.getNode(),null)}function m1(r,e){const n=r.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(De,(a,u)=>{s.push(Si(a,u))}),n.isFullyInitialized()&&s.push($v(n.getNode())),n_(r,s,n.getNode(),e)}function n_(r,e,n,s){const l=s?[s]:r.eventRegistrations_;return FC(r.eventGenerator_,e,n,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class g1{constructor(){this.views=new Map}}function v1(r){F(!zl,"__referenceConstructor has already been defined"),zl=r}function _1(){return F(zl,"Reference.ts has not been loaded"),zl}function y1(r){return r.views.size===0}function Rd(r,e,n,s){const l=e.source.queryId;if(l!==null){const a=r.views.get(l);return F(a!=null,"SyncTree gave us an op for an invalid query."),eg(a,e,n,s)}else{let a=[];for(const u of r.views.values())a=a.concat(eg(u,e,n,s));return a}}function w1(r,e,n,s,l){const a=e._queryIdentifier,u=r.views.get(a);if(!u){let p=Ll(n,l?s:null),m=!1;p?m=!0:s instanceof X?(p=kd(n,s),m=!1):(p=X.EMPTY_NODE,m=!1);const g=ta(new Or(p,m,!1),new Or(s,l,!1));return new d1(e,g)}return u}function x1(r,e,n,s,l,a){const u=w1(r,e,s,l,a);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,u),p1(u,n),m1(u,n)}function E1(r,e,n,s){const l=e._queryIdentifier,a=[];let u=[];const p=sr(r);if(l==="default")for(const[m,g]of r.views.entries())u=u.concat(Zm(g,n,s)),Xm(g)&&(r.views.delete(m),g.query._queryParams.loadsAllData()||a.push(g.query));else{const m=r.views.get(l);m&&(u=u.concat(Zm(m,n,s)),Xm(m)&&(r.views.delete(l),m.query._queryParams.loadsAllData()||a.push(m.query)))}return p&&!sr(r)&&a.push(new(_1())(e._repo,e._path)),{removed:a,events:u}}function r_(r){const e=[];for(const n of r.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function gi(r,e){let n=null;for(const s of r.views.values())n=n||f1(s,e);return n}function i_(r,e){if(e._queryParams.loadsAllData())return na(r);{const s=e._queryIdentifier;return r.views.get(s)}}function s_(r,e){return i_(r,e)!=null}function sr(r){return na(r)!=null}function na(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wl;function S1(r){F(!Wl,"__referenceConstructor has already been defined"),Wl=r}function C1(){return F(Wl,"Reference.ts has not been loaded"),Wl}let N1=1;class tg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ke(null),this.pendingWriteTree_=ZC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o_(r,e,n,s,l){return BC(r.pendingWriteTree_,e,n,s,l),l?Zs(r,new jr(Kv(),e,n)):[]}function Tr(r,e,n=!1){const s=VC(r.pendingWriteTree_,e);if(HC(r.pendingWriteTree_,e)){let a=new ke(null);return s.snap!=null?a=a.set(pe(),!0):wt(s.children,u=>{a=a.set(new we(u),!0)}),Zs(r,new Ml(s.path,a,n))}else return[]}function ra(r,e,n){return Zs(r,new jr(Cd(),e,n))}function I1(r,e,n){const s=ke.fromObject(n);return Zs(r,new $s(Cd(),e,s))}function k1(r,e){return Zs(r,new Hs(Cd(),e))}function T1(r,e,n){const s=Ad(r,n);if(s){const l=jd(s),a=l.path,u=l.queryId,p=vt(a,e),m=new Hs(Nd(u),p);return Od(r,a,m)}else return[]}function $u(r,e,n,s,l=!1){const a=e._path,u=r.syncPointTree_.get(a);let p=[];if(u&&(e._queryIdentifier==="default"||s_(u,e))){const m=E1(u,e,n,s);y1(u)&&(r.syncPointTree_=r.syncPointTree_.remove(a));const g=m.removed;if(p=m.events,!l){const y=g.findIndex(x=>x._queryParams.loadsAllData())!==-1,_=r.syncPointTree_.findOnPath(a,(x,b)=>sr(b));if(y&&!_){const x=r.syncPointTree_.subtree(a);if(!x.isEmpty()){const b=P1(x);for(let k=0;k<b.length;++k){const P=b[k],A=P.query,H=c_(r,P);r.listenProvider_.startListening(js(A),Bl(r,A),H.hashFn,H.onComplete)}}}!_&&g.length>0&&!s&&(y?r.listenProvider_.stopListening(js(e),null):g.forEach(x=>{const b=r.queryToTagMap.get(ia(x));r.listenProvider_.stopListening(js(x),b)}))}A1(r,g)}return p}function b1(r,e,n,s){const l=Ad(r,s);if(l!=null){const a=jd(l),u=a.path,p=a.queryId,m=vt(u,e),g=new jr(Nd(p),m,n);return Od(r,u,g)}else return[]}function R1(r,e,n,s){const l=Ad(r,s);if(l){const a=jd(l),u=a.path,p=a.queryId,m=vt(u,e),g=ke.fromObject(n),y=new $s(Nd(p),m,g);return Od(r,u,y)}else return[]}function ng(r,e,n,s=!1){const l=e._path;let a=null,u=!1;r.syncPointTree_.foreachOnPath(l,(x,b)=>{const k=vt(x,l);a=a||gi(b,k),u=u||sr(b)});let p=r.syncPointTree_.get(l);p?(u=u||sr(p),a=a||gi(p,pe())):(p=new g1,r.syncPointTree_=r.syncPointTree_.set(l,p));let m;a!=null?m=!0:(m=!1,a=X.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((b,k)=>{const P=gi(k,pe());P&&(a=a.updateImmediateChild(b,P))}));const g=s_(p,e);if(!g&&!e._queryParams.loadsAllData()){const x=ia(e);F(!r.queryToTagMap.has(x),"View does not exist, but we have a tag");const b=j1();r.queryToTagMap.set(x,b),r.tagToQueryMap.set(b,x)}const y=Id(r.pendingWriteTree_,l);let _=x1(p,e,n,y,a,m);if(!g&&!u&&!s){const x=i_(p,e);_=_.concat(O1(r,e,x))}return _}function Pd(r,e,n){const l=r.pendingWriteTree_,a=r.syncPointTree_.findOnPath(e,(u,p)=>{const m=vt(u,e),g=gi(p,m);if(g)return g});return Jv(l,e,a,n,!0)}function Zs(r,e){return l_(e,r.syncPointTree_,null,Id(r.pendingWriteTree_,pe()))}function l_(r,e,n,s){if(ae(r.path))return a_(r,e,n,s);{const l=e.get(pe());n==null&&l!=null&&(n=gi(l,pe()));let a=[];const u=se(r.path),p=r.operationForChild(u),m=e.children.get(u);if(m&&p){const g=n?n.getImmediateChild(u):null,y=Xv(s,u);a=a.concat(l_(p,m,g,y))}return l&&(a=a.concat(Rd(l,r,s,n))),a}}function a_(r,e,n,s){const l=e.get(pe());n==null&&l!=null&&(n=gi(l,pe()));let a=[];return e.children.inorderTraversal((u,p)=>{const m=n?n.getImmediateChild(u):null,g=Xv(s,u),y=r.operationForChild(u);y&&(a=a.concat(a_(y,p,m,g)))}),l&&(a=a.concat(Rd(l,r,s,n))),a}function c_(r,e){const n=e.query,s=Bl(r,n);return{hashFn:()=>(h1(e)||X.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?T1(r,n._path,s):k1(r,n._path);{const a=bS(l,n);return $u(r,n,null,a)}}}}function Bl(r,e){const n=ia(e);return r.queryToTagMap.get(n)}function ia(r){return r._path.toString()+"$"+r._queryIdentifier}function Ad(r,e){return r.tagToQueryMap.get(e)}function jd(r){const e=r.indexOf("$");return F(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new we(r.substr(0,e))}}function Od(r,e,n){const s=r.syncPointTree_.get(e);F(s,"Missing sync point for query tag that we're tracking");const l=Id(r.pendingWriteTree_,e);return Rd(s,n,l,null)}function P1(r){return r.fold((e,n,s)=>{if(n&&sr(n))return[na(n)];{let l=[];return n&&(l=r_(n)),wt(s,(a,u)=>{l=l.concat(u)}),l}})}function js(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(C1())(r._repo,r._path):r}function A1(r,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const l=ia(s),a=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(a)}}}function j1(){return N1++}function O1(r,e,n){const s=e._path,l=Bl(r,e),a=c_(r,n),u=r.listenProvider_.startListening(js(e),l,a.hashFn,a.onComplete),p=r.syncPointTree_.subtree(s);if(l)F(!sr(p.value),"If we're adding a query, it shouldn't be shadowed");else{const m=p.fold((g,y,_)=>{if(!ae(g)&&y&&sr(y))return[na(y).query];{let x=[];return y&&(x=x.concat(r_(y).map(b=>b.query))),wt(_,(b,k)=>{x=x.concat(k)}),x}});for(let g=0;g<m.length;++g){const y=m[g];r.listenProvider_.stopListening(js(y),Bl(r,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Dd(n)}node(){return this.node_}}class Md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=$e(this.path_,e);return new Md(this.syncTree_,n)}node(){return Pd(this.syncTree_,this.path_)}}const D1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},rg=function(r,e,n){if(!r||typeof r!="object")return r;if(F(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return M1(r[".sv"],e,n);if(typeof r[".sv"]=="object")return L1(r[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},M1=function(r,e,n){switch(r){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+r)}},L1=function(r,e,n){r.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&F(!1,"Unexpected increment value: "+s);const l=e.node();if(F(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const u=l.getValue();return typeof u!="number"?s:u+s},F1=function(r,e,n,s){return Ld(e,new Md(n,r),s)},u_=function(r,e,n){return Ld(r,new Dd(e),n)};function Ld(r,e,n){const s=r.getPriority().val(),l=rg(s,e.getImmediateChild(".priority"),n);let a;if(r.isLeafNode()){const u=r,p=rg(u.getValue(),e,n);return p!==u.getValue()||l!==u.getPriority().val()?new Qe(p,et(l)):r}else{const u=r;return a=u,l!==u.getPriority().val()&&(a=a.updatePriority(new Qe(l))),u.forEachChild(De,(p,m)=>{const g=Ld(m,e.getImmediateChild(p),n);g!==m&&(a=a.updateImmediateChild(p,g))}),a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Ud(r,e){let n=e instanceof we?e:new we(e),s=r,l=se(n);for(;l!==null;){const a=wi(s.node.children,l)||{children:{},childCount:0};s=new Fd(l,s,a),n=Ce(n),l=se(n)}return s}function ji(r){return r.node.value}function d_(r,e){r.node.value=e,Gu(r)}function h_(r){return r.node.childCount>0}function U1(r){return ji(r)===void 0&&!h_(r)}function sa(r,e){wt(r.node.children,(n,s)=>{e(new Fd(n,r,s))})}function f_(r,e,n,s){n&&e(r),sa(r,l=>{f_(l,e,!0)})}function z1(r,e,n){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function eo(r){return new we(r.parent===null?r.name:eo(r.parent)+"/"+r.name)}function Gu(r){r.parent!==null&&W1(r.parent,r.name,r)}function W1(r,e,n){const s=U1(n),l=In(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,Gu(r)):!s&&!l&&(r.node.children[e]=n.node,r.node.childCount++,Gu(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=/[\[\].#$\/\u0000-\u001F\u007F]/,V1=/[\[\].#$\u0000-\u001F\u007F]/,Eu=10*1024*1024,p_=function(r){return typeof r=="string"&&r.length!==0&&!B1.test(r)},m_=function(r){return typeof r=="string"&&r.length!==0&&!V1.test(r)},H1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),m_(r)},$1=function(r,e,n,s){zd(dd(r,"value"),e,n)},zd=function(r,e,n){const s=n instanceof we?new aC(n,r):n;if(e===void 0)throw new Error(r+"contains undefined "+Ir(s));if(typeof e=="function")throw new Error(r+"contains a function "+Ir(s)+" with contents = "+e.toString());if(mv(e))throw new Error(r+"contains "+e.toString()+" "+Ir(s));if(typeof e=="string"&&e.length>Eu/3&&Zl(e)>Eu)throw new Error(r+"contains a string greater than "+Eu+" utf8 bytes "+Ir(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,a=!1;if(wt(e,(u,p)=>{if(u===".value")l=!0;else if(u!==".priority"&&u!==".sv"&&(a=!0,!p_(u)))throw new Error(r+" contains an invalid key ("+u+") "+Ir(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cC(s,u),zd(r,p,s),uC(s)}),l&&a)throw new Error(r+' contains ".value" child '+Ir(s)+" in addition to actual children.")}},g_=function(r,e,n,s){if(!m_(n))throw new Error(dd(r,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},G1=function(r,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),g_(r,e,n)},K1=function(r,e){if(se(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},q1=function(r,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!p_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!H1(n))throw new Error(dd(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wd(r,e){let n=null;for(let s=0;s<e.length;s++){const l=e[s],a=l.getPath();n!==null&&!yd(a,n.path)&&(r.eventLists_.push(n),n=null),n===null&&(n={events:[],path:a}),n.events.push(l)}n&&r.eventLists_.push(n)}function v_(r,e,n){Wd(r,n),__(r,s=>yd(s,e))}function Cn(r,e,n){Wd(r,n),__(r,s=>Gt(s,e)||Gt(e,s))}function __(r,e){r.recursionDepth_++;let n=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const a=l.path;e(a)?(Y1(r.eventLists_[s]),r.eventLists_[s]=null):n=!1}}n&&(r.eventLists_=[]),r.recursionDepth_--}function Y1(r){for(let e=0;e<r.events.length;e++){const n=r.events[e];if(n!==null){r.events[e]=null;const s=n.getEventRunner();bs&&ot("event: "+n.toString()),Ai(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1="repo_interrupt",X1=25;class Z1{constructor(e,n,s,l){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Q1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dl(),this.transactionQueueTree_=new Fd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eN(r,e,n){if(r.stats_=vd(r.repoInfo_),r.forceRestClient_||jS())r.server_=new Ol(r.repoInfo_,(s,l,a,u)=>{ig(r,s,l,a,u)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>sg(r,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new xn(r.repoInfo_,e,(s,l,a,u)=>{ig(r,s,l,a,u)},s=>{sg(r,s)},s=>{nN(r,s)},r.authTokenProvider_,r.appCheckProvider_,n),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=FS(r.repoInfo_,()=>new MC(r.stats_,r.server_)),r.infoData_=new PC,r.infoSyncTree_=new tg({startListening:(s,l,a,u)=>{let p=[];const m=r.infoData_.getNode(s._path);return m.isEmpty()||(p=ra(r.infoSyncTree_,s._path,m),setTimeout(()=>{u("ok")},0)),p},stopListening:()=>{}}),Vd(r,"connected",!1),r.serverSyncTree_=new tg({startListening:(s,l,a,u)=>(r.server_.listen(s,a,l,(p,m)=>{const g=u(p,m);Cn(r.eventQueue_,s._path,g)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function tN(r){const n=r.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Bd(r){return D1({timestamp:tN(r)})}function ig(r,e,n,s,l){r.dataUpdateCount++;const a=new we(e);n=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,n):n;let u=[];if(l)if(s){const m=bl(n,g=>et(g));u=R1(r.serverSyncTree_,a,m,l)}else{const m=et(n);u=b1(r.serverSyncTree_,a,m,l)}else if(s){const m=bl(n,g=>et(g));u=I1(r.serverSyncTree_,a,m)}else{const m=et(n);u=ra(r.serverSyncTree_,a,m)}let p=a;u.length>0&&(p=oa(r,a)),Cn(r.eventQueue_,p,u)}function sg(r,e){Vd(r,"connected",e),e===!1&&iN(r)}function nN(r,e){wt(e,(n,s)=>{Vd(r,n,s)})}function Vd(r,e,n){const s=new we("/.info/"+e),l=et(n);r.infoData_.updateSnapshot(s,l);const a=ra(r.infoSyncTree_,s,l);Cn(r.eventQueue_,s,a)}function y_(r){return r.nextWriteId_++}function rN(r,e,n,s,l){Hd(r,"set",{path:e.toString(),value:n,priority:s});const a=Bd(r),u=et(n,s),p=Pd(r.serverSyncTree_,e),m=u_(u,p,a),g=y_(r),y=o_(r.serverSyncTree_,e,m,g,!0);Wd(r.eventQueue_,y),r.server_.put(e.toString(),u.val(!0),(x,b)=>{const k=x==="ok";k||yt("set at "+e+" failed: "+x);const P=Tr(r.serverSyncTree_,g,!k);Cn(r.eventQueue_,e,P),lN(r,l,x,b)});const _=N_(r,e);oa(r,_),Cn(r.eventQueue_,_,[])}function iN(r){Hd(r,"onDisconnectEvents");const e=Bd(r),n=Dl();Uu(r.onDisconnect_,pe(),(l,a)=>{const u=F1(l,a,r.serverSyncTree_,e);Gv(n,l,u)});let s=[];Uu(n,pe(),(l,a)=>{s=s.concat(ra(r.serverSyncTree_,l,a));const u=N_(r,l);oa(r,u)}),r.onDisconnect_=Dl(),Cn(r.eventQueue_,pe(),s)}function sN(r,e,n){let s;se(e._path)===".info"?s=ng(r.infoSyncTree_,e,n):s=ng(r.serverSyncTree_,e,n),v_(r.eventQueue_,e._path,s)}function w_(r,e,n){let s;se(e._path)===".info"?s=$u(r.infoSyncTree_,e,n):s=$u(r.serverSyncTree_,e,n),v_(r.eventQueue_,e._path,s)}function oN(r){r.persistentConnection_&&r.persistentConnection_.interrupt(J1)}function Hd(r,...e){let n="";r.persistentConnection_&&(n=r.persistentConnection_.id+":"),ot(n,...e)}function lN(r,e,n,s){e&&Ai(()=>{if(n==="ok")e(null);else{const l=(n||"error").toUpperCase();let a=l;s&&(a+=": "+s);const u=new Error(a);u.code=l,e(u)}})}function x_(r,e,n){return Pd(r.serverSyncTree_,e,n)||X.EMPTY_NODE}function $d(r,e=r.transactionQueueTree_){if(e||la(r,e),ji(e)){const n=S_(r,e);F(n.length>0,"Sending zero length transaction queue"),n.every(l=>l.status===0)&&aN(r,eo(e),n)}else h_(e)&&sa(e,n=>{$d(r,n)})}function aN(r,e,n){const s=n.map(g=>g.currentWriteId),l=x_(r,e,s);let a=l;const u=l.hash();for(let g=0;g<n.length;g++){const y=n[g];F(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const _=vt(e,y.path);a=a.updateChild(_,y.currentOutputSnapshotRaw)}const p=a.val(!0),m=e;r.server_.put(m.toString(),p,g=>{Hd(r,"transaction put response",{path:m.toString(),status:g});let y=[];if(g==="ok"){const _=[];for(let x=0;x<n.length;x++)n[x].status=2,y=y.concat(Tr(r.serverSyncTree_,n[x].currentWriteId)),n[x].onComplete&&_.push(()=>n[x].onComplete(null,!0,n[x].currentOutputSnapshotResolved)),n[x].unwatcher();la(r,Ud(r.transactionQueueTree_,e)),$d(r,r.transactionQueueTree_),Cn(r.eventQueue_,e,y);for(let x=0;x<_.length;x++)Ai(_[x])}else{if(g==="datastale")for(let _=0;_<n.length;_++)n[_].status===3?n[_].status=4:n[_].status=0;else{yt("transaction at "+m.toString()+" failed: "+g);for(let _=0;_<n.length;_++)n[_].status=4,n[_].abortReason=g}oa(r,e)}},u)}function oa(r,e){const n=E_(r,e),s=eo(n),l=S_(r,n);return cN(r,l,s),s}function cN(r,e,n){if(e.length===0)return;const s=[];let l=[];const u=e.filter(p=>p.status===0).map(p=>p.currentWriteId);for(let p=0;p<e.length;p++){const m=e[p],g=vt(n,m.path);let y=!1,_;if(F(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,_=m.abortReason,l=l.concat(Tr(r.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=X1)y=!0,_="maxretry",l=l.concat(Tr(r.serverSyncTree_,m.currentWriteId,!0));else{const x=x_(r,m.path,u);m.currentInputSnapshot=x;const b=e[p].update(x.val());if(b!==void 0){zd("transaction failed: Data returned ",b,m.path);let k=et(b);typeof b=="object"&&b!=null&&In(b,".priority")||(k=k.updatePriority(x.getPriority()));const A=m.currentWriteId,H=Bd(r),ne=u_(k,x,H);m.currentOutputSnapshotRaw=k,m.currentOutputSnapshotResolved=ne,m.currentWriteId=y_(r),u.splice(u.indexOf(A),1),l=l.concat(o_(r.serverSyncTree_,m.path,ne,m.currentWriteId,m.applyLocally)),l=l.concat(Tr(r.serverSyncTree_,A,!0))}else y=!0,_="nodata",l=l.concat(Tr(r.serverSyncTree_,m.currentWriteId,!0))}Cn(r.eventQueue_,n,l),l=[],y&&(e[p].status=2,function(x){setTimeout(x,Math.floor(0))}(e[p].unwatcher),e[p].onComplete&&(_==="nodata"?s.push(()=>e[p].onComplete(null,!1,e[p].currentInputSnapshot)):s.push(()=>e[p].onComplete(new Error(_),!1,null))))}la(r,r.transactionQueueTree_);for(let p=0;p<s.length;p++)Ai(s[p]);$d(r,r.transactionQueueTree_)}function E_(r,e){let n,s=r.transactionQueueTree_;for(n=se(e);n!==null&&ji(s)===void 0;)s=Ud(s,n),e=Ce(e),n=se(e);return s}function S_(r,e){const n=[];return C_(r,e,n),n.sort((s,l)=>s.order-l.order),n}function C_(r,e,n){const s=ji(e);if(s)for(let l=0;l<s.length;l++)n.push(s[l]);sa(e,l=>{C_(r,l,n)})}function la(r,e){const n=ji(e);if(n){let s=0;for(let l=0;l<n.length;l++)n[l].status!==2&&(n[s]=n[l],s++);n.length=s,d_(e,n.length>0?n:void 0)}sa(e,s=>{la(r,s)})}function N_(r,e){const n=eo(E_(r,e)),s=Ud(r.transactionQueueTree_,e);return z1(s,l=>{Su(r,l)}),Su(r,s),f_(s,l=>{Su(r,l)}),n}function Su(r,e){const n=ji(e);if(n){const s=[];let l=[],a=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(F(a===u-1,"All SENT items should be at beginning of queue."),a=u,n[u].status=3,n[u].abortReason="set"):(F(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),l=l.concat(Tr(r.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&s.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));a===-1?d_(e,void 0):n.length=a+1,Cn(r.eventQueue_,eo(e),l);for(let u=0;u<s.length;u++)Ai(s[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uN(r){let e="";const n=r.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let l=n[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function dN(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const n of r.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):yt(`Invalid query segment '${n}' in query '${r}'`)}return e}const og=function(r,e){const n=hN(r),s=n.namespace;n.domain==="firebase.com"&&Sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||CS();const l=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kv(n.host,n.secure,s,l,e,"",s!==n.subdomain),path:new we(n.pathString)}},hN=function(r){let e="",n="",s="",l="",a="",u=!0,p="https",m=443;if(typeof r=="string"){let g=r.indexOf("//");g>=0&&(p=r.substring(0,g-1),r=r.substring(g+2));let y=r.indexOf("/");y===-1&&(y=r.length);let _=r.indexOf("?");_===-1&&(_=r.length),e=r.substring(0,Math.min(y,_)),y<_&&(l=uN(r.substring(y,_)));const x=dN(r.substring(Math.min(r.length,_)));g=e.indexOf(":"),g>=0?(u=p==="https"||p==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const b=e.slice(0,g);if(b.toLowerCase()==="localhost")n="localhost";else if(b.split(".").length<=2)n=b;else{const k=e.indexOf(".");s=e.substring(0,k).toLowerCase(),n=e.substring(k+1),a=s}"ns"in x&&(a=x.ns)}return{host:e,port:m,domain:n,subdomain:s,secure:u,scheme:p,pathString:l,namespace:a}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,s,l){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Je(this.snapshot.exportVal())}}class pN{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,n,s,l){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=l}get key(){return ae(this._path)?null:Mv(this._path)}get ref(){return new cr(this._repo,this._path)}get _queryIdentifier(){const e=Hm(this._queryParams),n=md(e);return n==="{}"?"default":n}get _queryObject(){return Hm(this._queryParams)}isEqual(e){if(e=Tt(e),!(e instanceof Gd))return!1;const n=this._repo===e._repo,s=yd(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return n&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+lC(this._path)}}class cr extends Gd{constructor(e,n){super(e,n,new Sd,!1)}get parent(){const e=Fv(this._path);return e===null?null:new cr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vl{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),s=Ku(this.ref,e);return new Vl(this._node.getChild(n),s,De)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new Vl(l,Ku(this.ref,s),De)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lg(r,e){return r=Tt(r),r._checkNotDeleted("ref"),e!==void 0?Ku(r._root,e):r._root}function Ku(r,e){return r=Tt(r),se(r._path)===null?G1("child","path",e):g_("child","path",e),new cr(r._repo,$e(r._path,e))}function ag(r,e){r=Tt(r),K1("set",r._path),$1("set",e,r._path);const n=new Xl;return rN(r._repo,r._path,e,null,n.wrapCallback(()=>{})),n.promise}class Kd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new fN("value",this,new Vl(e.snapshotNode,new cr(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pN(this,e,n):null}matches(e){return e instanceof Kd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gN(r,e,n,s,l){const a=new mN(n,void 0),u=new Kd(a);return sN(r._repo,r,u),()=>w_(r._repo,r,u)}function vN(r,e,n,s){return gN(r,"value",e)}function _N(r,e,n){w_(r._repo,r,null)}v1(cr);S1(cr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN="FIREBASE_DATABASE_EMULATOR_HOST",qu={};let wN=!1;function xN(r,e,n,s){r.repoInfo_=new kv(e,!1,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(r.authTokenProvider_=s)}function EN(r,e,n,s,l){let a=s||r.options.databaseURL;a===void 0&&(r.options.projectId||Sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ot("Using default host for project ",r.options.projectId),a=`${r.options.projectId}-default-rtdb.firebaseio.com`);let u=og(a,l),p=u.repoInfo,m;typeof process<"u"&&Im&&(m=Im[yN]),m?(a=`http://${m}?ns=${p.namespace}`,u=og(a,l),p=u.repoInfo):u.repoInfo.secure;const g=new DS(r.name,r.options,e);q1("Invalid Firebase Database URL",u),ae(u.path)||Sn("Database URL must point to the root of a Firebase Database (not including a child path).");const y=CN(p,r,g,new OS(r,n));return new NN(y,r)}function SN(r,e){const n=qu[e];(!n||n[r.key]!==r)&&Sn(`Database ${e}(${r.repoInfo_}) has already been deleted.`),oN(r),delete n[r.key]}function CN(r,e,n,s){let l=qu[e.name];l||(l={},qu[e.name]=l);let a=l[r.toURLString()];return a&&Sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new Z1(r,wN,n,s),l[r.toURLString()]=a,a}class NN{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new cr(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sn("Cannot call "+e+" on a deleted database.")}}function I_(r=cv(),e){const n=pd(r,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Gx("database");s&&IN(n,...s)}return n}function IN(r,e,n,s={}){r=Tt(r),r._checkNotDeleted("useEmulator");const l=`${e}:${n}`,a=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Rr(s,a.repoInfo_.emulatorOptions))return;Sn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(a.repoInfo_.nodeAdmin)s.mockUserToken&&Sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new yl(yl.OWNER);else if(s.mockUserToken){const p=typeof s.mockUserToken=="string"?s.mockUserToken:Kx(s.mockUserToken,r.app.options.projectId);u=new yl(p)}xN(a,l,s,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(r){_S(Ri),xi(new Pr("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return EN(s,l,a,n)},"PUBLIC").setMultipleInstances(!0)),tr(km,Tm,r),tr(km,Tm,"esm2017")}xn.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};xn.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};kN();var TN="firebase",bN="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tr(TN,bN,"app");function qd(r,e){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(r);l<s.length;l++)e.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(r,s[l])&&(n[s[l]]=r[s[l]]);return n}function k_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const RN=k_,T_=new Qs("auth","Firebase",k_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new hd("@firebase/auth");function PN(r,...e){Hl.logLevel<=ye.WARN&&Hl.warn(`Auth (${Ri}): ${r}`,...e)}function wl(r,...e){Hl.logLevel<=ye.ERROR&&Hl.error(`Auth (${Ri}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(r,...e){throw Qd(r,...e)}function on(r,...e){return Qd(r,...e)}function b_(r,e,n){const s=Object.assign(Object.assign({},RN()),{[e]:n});return new Qs("auth","Firebase",s).create(e,{appName:r.name})}function rr(r){return b_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qd(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return T_.create(r,...e)}function J(r,e,...n){if(!r)throw Qd(e,...n)}function yn(r){const e="INTERNAL ASSERTION FAILED: "+r;throw wl(e),new Error(e)}function Nn(r,e){r||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function AN(){return cg()==="http:"||cg()==="https:"}function cg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AN()||Qx()||"connection"in navigator)?navigator.onLine:!0}function ON(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=ud()||iv()}get(){return jN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(r,e){Nn(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LN=new to(3e4,6e4);function Ur(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ur(r,e,n,s,l={}){return P_(r,l,async()=>{let a={},u={};s&&(e==="GET"?u=s:a={body:JSON.stringify(s)});const p=bi(Object.assign({key:r.config.apiKey},u)).slice(1),m=await r._getAdditionalHeaders();m["Content-Type"]="application/json",r.languageCode&&(m["X-Firebase-Locale"]=r.languageCode);const g=Object.assign({method:e,headers:m},a);return qx()||(g.referrerPolicy="no-referrer"),R_.fetch()(await A_(r,r.config.apiHost,n,p),g)})}async function P_(r,e,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},DN),e);try{const l=new UN(r),a=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw _l(r,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const p=a.ok?u.errorMessage:u.error.message,[m,g]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw _l(r,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw _l(r,"email-already-in-use",u);if(m==="USER_DISABLED")throw _l(r,"user-disabled",u);const y=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw b_(r,y,g);Jt(r,y)}}catch(l){if(l instanceof ar)throw l;Jt(r,"network-request-failed",{message:String(l)})}}async function aa(r,e,n,s,l={}){const a=await ur(r,e,n,s,l);return"mfaPendingCredential"in a&&Jt(r,"multi-factor-auth-required",{_serverResponse:a}),a}async function A_(r,e,n,s){const l=`${e}${n}?${s}`,a=r,u=a.config.emulator?Yd(r.config,l):`${r.config.apiScheme}://${l}`;return MN.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function FN(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(on(this.auth,"network-request-failed")),LN.get())})}}function _l(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=on(r,e,s);return l.customData._tokenResponse=n,l}function ug(r){return r!==void 0&&r.enterprise!==void 0}class zN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WN(r,e){return ur(r,"GET","/v2/recaptchaConfig",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(r,e){return ur(r,"POST","/v1/accounts:delete",e)}async function $l(r,e){return ur(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VN(r,e=!1){const n=Tt(r),s=await n.getIdToken(e),l=Jd(s);J(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const a=typeof l.firebase=="object"?l.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:l,token:s,authTime:Os(Cu(l.auth_time)),issuedAtTime:Os(Cu(l.iat)),expirationTime:Os(Cu(l.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Cu(r){return Number(r)*1e3}function Jd(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return wl("JWT malformed, contained fewer than 3 sections"),null;try{const l=Tl(n);return l?JSON.parse(l):(wl("Failed to decode base64 JWT payload"),null)}catch(l){return wl("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function dg(r){const e=Jd(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ar&&HN(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function HN({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Os(this.lastLoginAt),this.creationTime=Os(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(r){var e;const n=r.auth,s=await r.getIdToken(),l=await Gs(r,$l(n,{idToken:s}));J(l==null?void 0:l.users.length,n,"internal-error");const a=l.users[0];r._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?j_(a.providerUserInfo):[],p=KN(r.providerData,u),m=r.isAnonymous,g=!(r.email&&a.passwordHash)&&!(p!=null&&p.length),y=m?g:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:p,metadata:new Yu(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(r,_)}async function GN(r){const e=Tt(r);await Gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KN(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function j_(r){return r.map(e=>{var{providerId:n}=e,s=qd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qN(r,e){const n=await P_(r,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:a}=r.config,u=await A_(r,l,"/v1/token",`key=${a}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",R_.fetch()(u,{method:"POST",headers:p,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QN(r,e){return ur(r,"POST","/v2/accounts:revokeToken",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:a}=await qN(e,n);this.updateTokensAndExpiration(s,l,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:a}=n,u=new vi;return s&&(J(typeof s=="string","internal-error",{appName:e}),u.refreshToken=s),l&&(J(typeof l=="string","internal-error",{appName:e}),u.accessToken=l),a&&(J(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:l}=e,a=qd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $N(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yu(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VN(this,e)}reload(){return GN(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Gl(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ht(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await Gs(this,BN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,l,a,u,p,m,g,y;const _=(s=n.displayName)!==null&&s!==void 0?s:void 0,x=(l=n.email)!==null&&l!==void 0?l:void 0,b=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,k=(u=n.photoURL)!==null&&u!==void 0?u:void 0,P=(p=n.tenantId)!==null&&p!==void 0?p:void 0,A=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,H=(g=n.createdAt)!==null&&g!==void 0?g:void 0,ne=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ee,emailVerified:ce,isAnonymous:Pe,providerData:Me,stsTokenManager:We}=n;J(ee&&We,e,"internal-error");const tt=vi.fromJSON(this.name,We);J(typeof ee=="string",e,"internal-error"),Gn(_,e.name),Gn(x,e.name),J(typeof ce=="boolean",e,"internal-error"),J(typeof Pe=="boolean",e,"internal-error"),Gn(b,e.name),Gn(k,e.name),Gn(P,e.name),Gn(A,e.name),Gn(H,e.name),Gn(ne,e.name);const ut=new qt({uid:ee,auth:e,email:x,emailVerified:ce,displayName:_,isAnonymous:Pe,photoURL:k,phoneNumber:b,tenantId:P,stsTokenManager:tt,createdAt:H,lastLoginAt:ne});return Me&&Array.isArray(Me)&&(ut.providerData=Me.map(xt=>Object.assign({},xt))),A&&(ut._redirectEventId=A),ut}static async _fromIdTokenResponse(e,n,s=!1){const l=new vi;l.updateFromServerResponse(n);const a=new qt({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await Gl(a),a}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];J(l.localId!==void 0,"internal-error");const a=l.providerUserInfo!==void 0?j_(l.providerUserInfo):[],u=!(l.email&&l.passwordHash)&&!(a!=null&&a.length),p=new vi;p.updateFromIdToken(s);const m=new qt({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:u}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:a,metadata:new Yu(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(a!=null&&a.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=new Map;function wn(r){Nn(r instanceof Function,"Expected a class definition");let e=hg.get(r);return e?(Nn(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,hg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}O_.type="NONE";const fg=O_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(r,e,n){return`firebase:${r}:${e}:${n}`}class _i{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:a}=this.auth;this.fullUserKey=xl(this.userKey,l.apiKey,a),this.fullPersistenceKey=xl("persistence",l.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $l(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new _i(wn(fg),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=l[0]||wn(fg);const u=xl(s,e.config.apiKey,e.name);let p=null;for(const g of n)try{const y=await g._get(u);if(y){let _;if(typeof y=="string"){const x=await $l(e,{idToken:y}).catch(()=>{});if(!x)break;_=await qt._fromGetAccountInfoResponse(e,x,y)}else _=qt._fromJSON(e,y);g!==a&&(p=_),a=g;break}}catch{}const m=l.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!m.length?new _i(a,e,s):(a=m[0],p&&await a._set(u,p.toJSON()),await Promise.all(n.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new _i(a,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(F_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(D_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(W_(e))return"Webos";if(M_(e))return"Safari";if((e.includes("chrome/")||L_(e))&&!e.includes("edge/"))return"Chrome";if(U_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function D_(r=ct()){return/firefox\//i.test(r)}function M_(r=ct()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function L_(r=ct()){return/crios\//i.test(r)}function F_(r=ct()){return/iemobile/i.test(r)}function U_(r=ct()){return/android/i.test(r)}function z_(r=ct()){return/blackberry/i.test(r)}function W_(r=ct()){return/webos/i.test(r)}function Xd(r=ct()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function YN(r=ct()){var e;return Xd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JN(){return Yx()&&document.documentMode===10}function B_(r=ct()){return Xd(r)||U_(r)||W_(r)||z_(r)||/windows phone/i.test(r)||F_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(r,e=[]){let n;switch(r){case"Browser":n=pg(ct());break;case"Worker":n=`${pg(ct())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((u,p)=>{try{const m=e(a);u(m)}catch(m){p(m)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZN(r,e={}){return ur(r,"GET","/v2/passwordPolicy",Ur(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=6;class tI{constructor(e){var n,s,l,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:eI,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,l,a,u,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(l=m.containsLowercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(a=m.containsUppercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mg(this),this.idTokenSubscription=new mg(this),this.beforeStateQueue=new XN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=T_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var s,l,a;if(!this._deleted&&(this.persistenceManager=await _i.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((l=this._popupRedirectResolver)===null||l===void 0)&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $l(this,{idToken:e}),s=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ht(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=l==null?void 0:l._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===p)&&(m!=null&&m.user)&&(l=m.user,a=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(l)}catch(u){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ON()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ht(this.app))return Promise.reject(rr(this));const n=e?Tt(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ht(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ht(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZN(this),n=new tI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await QN(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await _i.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let u=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(p,this,"internal-error"),p.then(()=>{u||a(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,s,l);return()=>{u=!0,m()}}else{const m=e.addObserver(n);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(n["X-Firebase-AppCheck"]=l),n}async _getAppCheckToken(){var e;if(Ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&PN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Oi(r){return Tt(r)}class mg{constructor(e){this.auth=e,this.observer=null,this.addObserver=oE(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rI(r){ca=r}function H_(r){return ca.loadJS(r)}function iI(){return ca.recaptchaEnterpriseScript}function sI(){return ca.gapiScript}function oI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class lI{constructor(){this.enterprise=new aI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class aI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const cI="recaptcha-enterprise",$_="NO_RECAPTCHA";class uI{constructor(e){this.type=cI,this.auth=Oi(e)}async verify(e="verify",n=!1){async function s(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,p)=>{WN(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new zN(m);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(m=>{p(m)})})}function l(a,u,p){const m=window.grecaptcha;ug(m)?m.enterprise.ready(()=>{m.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u($_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lI().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{s(this.auth).then(p=>{if(!n&&ug(window.grecaptcha))l(p,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let m=iI();m.length!==0&&(m+=p),H_(m).then(()=>{l(p,a,u)}).catch(g=>{u(g)})}}).catch(p=>{u(p)})})}}async function gg(r,e,n,s=!1,l=!1){const a=new uI(r);let u;if(l)u=$_;else try{u=await a.verify(n)}catch{u=await a.verify(n,!0)}const p=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:u}):Object.assign(p,{captchaResponse:u}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function vg(r,e,n,s,l){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await gg(r,e,n,n==="getOobCode");return s(r,u)}else return s(r,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await gg(r,e,n,n==="getOobCode");return s(r,p)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(r,e){const n=pd(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),a=n.getOptions();if(Rr(a,e??{}))return l;Jt(l,"already-initialized")}return n.initialize({options:e})}function hI(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fI(r,e,n){const s=Oi(r);J(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,a=G_(e),{host:u,port:p}=pI(e),m=p===null?"":`:${p}`,g={url:`${a}//${u}${m}/`},y=Object.freeze({host:u,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){J(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),J(Rr(g,s.config.emulator)&&Rr(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,mI()}function G_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function pI(r){const e=G_(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const a=l[1];return{host:a,port:_g(s.substr(a.length+1))}}else{const[a,u]=s.split(":");return{host:a,port:_g(u)}}}function _g(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function mI(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function gI(r,e){return ur(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,e){return aa(r,"POST","/v1/accounts:signInWithPassword",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(r,e){return aa(r,"POST","/v1/accounts:signInWithEmailLink",Ur(r,e))}async function yI(r,e){return aa(r,"POST","/v1/accounts:signInWithEmailLink",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Zd{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Ks(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ks(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vg(e,n,"signInWithPassword",vI);case"emailLink":return _I(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vg(e,s,"signUpPassword",gI);case"emailLink":return yI(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(r,e){return aa(r,"POST","/v1/accounts:signInWithIdp",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="http://localhost";class Mr extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l}=n,a=qd(n,["providerId","signInMethod"]);if(!s||!l)return null;const u=new Mr(s,l);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return yi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,yi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yi(e,n)}buildRequest(){const e={requestUri:wI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function EI(r){const e=ks(Ts(r)).link,n=e?ks(Ts(e)).deep_link_id:null,s=ks(Ts(r)).deep_link_id;return(s?ks(Ts(s)).link:null)||s||n||e||r}class eh{constructor(e){var n,s,l,a,u,p;const m=ks(Ts(e)),g=(n=m.apiKey)!==null&&n!==void 0?n:null,y=(s=m.oobCode)!==null&&s!==void 0?s:null,_=xI((l=m.mode)!==null&&l!==void 0?l:null);J(g&&y&&_,"argument-error"),this.apiKey=g,this.operation=_,this.code=y,this.continueUrl=(a=m.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=m.lang)!==null&&u!==void 0?u:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const n=EI(e);try{return new eh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.providerId=Di.PROVIDER_ID}static credential(e,n){return Ks._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=eh.parseLink(n);return J(s,"argument-error"),Ks._fromEmailAndCode(e,s.code,s.tenantId)}}Di.PROVIDER_ID="password";Di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends K_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends no{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return qn.credential(n,s)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends no{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends no{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const a=await qt._fromIdTokenResponse(e,s,l),u=yg(s);return new Ni({user:a,providerId:u,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=yg(s);return new Ni({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function yg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends ar{constructor(e,n,s,l){var a;super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Kl.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new Kl(e,n,s,l)}}function q_(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Kl._fromErrorAndOperation(r,a,e,s):a})}async function SI(r,e,n=!1){const s=await Gs(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Ni._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CI(r,e,n=!1){const{auth:s}=r;if(Ht(s.app))return Promise.reject(rr(s));const l="reauthenticate";try{const a=await Gs(r,q_(s,l,e,r),n);J(a.idToken,s,"internal-error");const u=Jd(a.idToken);J(u,s,"internal-error");const{sub:p}=u;return J(r.uid===p,s,"user-mismatch"),Ni._forOperation(r,l,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(r,e,n=!1){if(Ht(r.app))return Promise.reject(rr(r));const s="signIn",l=await q_(r,s,e),a=await Ni._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(a.user),a}async function NI(r,e){return Q_(Oi(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r){const e=Oi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kI(r,e,n){return Ht(r.app)?Promise.reject(rr(r)):NI(Tt(r),Di.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&II(r),s})}function TI(r,e,n,s){return Tt(r).onIdTokenChanged(e,n,s)}function bI(r,e,n){return Tt(r).beforeAuthStateChanged(e,n)}function RI(r){return Tt(r).signOut()}const ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=1e3,AI=10;class J_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,p,m)=>{this.notifyListeners(u,m)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const u=this.storage.getItem(s);!n&&this.localCache[s]===u||this.notifyListeners(s,u)},a=this.storage.getItem(s);JN()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,AI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const jI=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Z_=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new ua(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:a}=n.data,u=this.handlersMap[l];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(u).map(async g=>g(n.origin,a)),m=await OI(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let a,u;return new Promise((p,m)=>{const g=th("",20);l.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},s);u={messageChannel:l,onMessage(_){const x=_;if(x.data.eventId===g)switch(x.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(x.data.response);break;default:clearTimeout(y),clearTimeout(a),m(new Error("invalid_response"));break}}},this.handlers.add(u),l.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function MI(r){ln().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function LI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function UI(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebaseLocalStorageDb",zI=1,Ql="firebaseLocalStorage",ny="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(r,e){return r.transaction([Ql],e?"readwrite":"readonly").objectStore(Ql)}function WI(){const r=indexedDB.deleteDatabase(ty);return new ro(r).toPromise()}function Ju(){const r=indexedDB.open(ty,zI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Ql,{keyPath:ny})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Ql)?e(s):(s.close(),await WI(),e(await Ju()))})})}async function wg(r,e,n){const s=da(r,!0).put({[ny]:e,value:n});return new ro(s).toPromise()}async function BI(r,e){const n=da(r,!1).get(e),s=await new ro(n).toPromise();return s===void 0?null:s.value}function xg(r,e){const n=da(r,!0).delete(e);return new ro(n).toPromise()}const VI=800,HI=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>HI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(UI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await LI(),!this.activeServiceWorker)return;this.sender=new DI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ju();return await wg(e,ql,"1"),await xg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const a=da(l,!1).getAll();return new ro(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:a}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(a)&&(this.notifyListeners(l,a),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const $I=ry;new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(r,e){return e?wn(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function KI(r){return Q_(r.auth,new nh(r),r.bypassAuthState)}function qI(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),CI(n,new nh(r),r.bypassAuthState)}async function QI(r){const{auth:e,user:n}=r;return J(n,e,"internal-error"),SI(n,new nh(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,s,l,a=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:a,error:u,type:p}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return KI;case"linkViaPopup":case"linkViaRedirect":return QI;case"reauthViaPopup":case"reauthViaRedirect":return qI;default:Jt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=new to(2e3,1e4);class fi extends iy{constructor(e,n,s,l,a){super(e,n,l,a),this.provider=s,this.authWindow=null,this.pollId=null,fi.currentPopupAction&&fi.currentPopupAction.cancel(),fi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YI.get())};e()}}fi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="pendingRedirect",El=new Map;class XI extends iy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=El.get(this.auth._key());if(!e){try{const s=await ZI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}El.set(this.auth._key(),e)}return this.bypassAuthState||El.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZI(r,e){const n=nk(e),s=tk(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function ek(r,e){El.set(r._key(),e)}function tk(r){return wn(r._redirectPersistence)}function nk(r){return xl(JI,r.config.apiKey,r.name)}async function rk(r,e,n=!1){if(Ht(r.app))return Promise.reject(rr(r));const s=Oi(r),l=GI(s,e),u=await new XI(s,l,n).execute();return u&&!n&&(delete u.user._redirectEventId,await s._persistUserIfCurrent(u.user),await s._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=10*60*1e3;class sk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ok(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!sy(e)){const l=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(on(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eg(e))}saveEventToCache(e){this.cachedEventUids.add(Eg(e)),this.lastProcessedEventTime=Date.now()}}function Eg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function sy({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ok(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sy(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(r,e={}){return ur(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ck=/^https?/;async function uk(r){if(r.config.emulator)return;const{authorizedDomains:e}=await lk(r);for(const n of e)try{if(dk(n))return}catch{}Jt(r,"unauthorized-domain")}function dk(r){const e=Qu(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const u=new URL(r);return u.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===s}if(!ck.test(n))return!1;if(ak.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=new to(3e4,6e4);function Sg(){const r=ln().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function fk(r){return new Promise((e,n)=>{var s,l,a;function u(){Sg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sg(),n(on(r,"network-request-failed"))},timeout:hk.get()})}if(!((l=(s=ln().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)e(gapi.iframes.getContext());else if(!((a=ln().gapi)===null||a===void 0)&&a.load)u();else{const p=oI("iframefcb");return ln()[p]=()=>{gapi.load?u():n(on(r,"network-request-failed"))},H_(`${sI()}?onload=${p}`).catch(m=>n(m))}}).catch(e=>{throw Sl=null,e})}let Sl=null;function pk(r){return Sl=Sl||fk(r),Sl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=new to(5e3,15e3),gk="__/auth/iframe",vk="emulator/auth/iframe",_k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wk(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?Yd(e,vk):`https://${r.config.authDomain}/${gk}`,s={apiKey:e.apiKey,appName:r.name,v:Ri},l=yk.get(r.config.apiHost);l&&(s.eid=l);const a=r._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${bi(s).slice(1)}`}async function xk(r){const e=await pk(r),n=ln().gapi;return J(n,r,"internal-error"),e.open({where:document.body,url:wk(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_k,dontclear:!0},s=>new Promise(async(l,a)=>{await s.restyle({setHideOnLeave:!1});const u=on(r,"network-request-failed"),p=ln().setTimeout(()=>{a(u)},mk.get());function m(){ln().clearTimeout(p),l(s)}s.ping(m).then(m,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sk=500,Ck=600,Nk="_blank",Ik="http://localhost";class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kk(r,e,n,s=Sk,l=Ck){const a=Math.max((window.screen.availHeight-l)/2,0).toString(),u=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const m=Object.assign(Object.assign({},Ek),{width:s.toString(),height:l.toString(),top:a,left:u}),g=ct().toLowerCase();n&&(p=L_(g)?Nk:n),D_(g)&&(e=e||Ik,m.scrollbars="yes");const y=Object.entries(m).reduce((x,[b,k])=>`${x}${b}=${k},`,"");if(YN(g)&&p!=="_self")return Tk(e||"",p),new Cg(null);const _=window.open(e||"",p,y);J(_,r,"popup-blocked");try{_.focus()}catch{}return new Cg(_)}function Tk(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="__/auth/handler",Rk="emulator/auth/handler",Pk=encodeURIComponent("fac");async function Ng(r,e,n,s,l,a){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const u={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:Ri,eventId:l};if(e instanceof K_){e.setDefaultLanguage(r.languageCode),u.providerId=e.providerId||"",Ru(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(e instanceof no){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}r.tenantId&&(u.tid=r.tenantId);const p=u;for(const y of Object.keys(p))p[y]===void 0&&delete p[y];const m=await r._getAppCheckToken(),g=m?`#${Pk}=${encodeURIComponent(m)}`:"";return`${Ak(r)}?${bi(p).slice(1)}${g}`}function Ak({config:r}){return r.emulator?Yd(r,Rk):`https://${r.authDomain}/${bk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="webStorageSupport";class jk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=rk,this._overrideRedirectResult=ek}async _openPopup(e,n,s,l){var a;Nn((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Ng(e,n,s,Qu(),l);return kk(e,u,th())}async _openRedirect(e,n,s,l){await this._originValidation(e);const a=await Ng(e,n,s,Qu(),l);return MI(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:a}=this.eventManagers[n];return l?Promise.resolve(l):(Nn(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xk(e),s=new sk(e);return n.register("authEvent",l=>(J(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nu,{type:Nu},l=>{var a;const u=(a=l==null?void 0:l[0])===null||a===void 0?void 0:a[Nu];u!==void 0&&n(!!u),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return B_()||M_()||Xd()}}const Ok=jk;var Ig="@firebase/auth",kg="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Lk(r){xi(new Pr("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:p}=s.options;J(u&&!u.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:u,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(r)},g=new nI(s,l,a,m);return hI(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),xi(new Pr("auth-internal",e=>{const n=Oi(e.getProvider("auth").getImmediate());return(s=>new Dk(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Ig,kg,Mk(r)),tr(Ig,kg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk=5*60,Uk=rv("authIdTokenMaxAge")||Fk;let Tg=null;const zk=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Uk)return;const l=n==null?void 0:n.token;Tg!==l&&(Tg=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function Wk(r=cv()){const e=pd(r,"auth");if(e.isInitialized())return e.getImmediate();const n=dI(r,{popupRedirectResolver:Ok,persistence:[$I,jI,Z_]}),s=rv("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const u=zk(a.toString());bI(n,u,()=>u(n.currentUser)),TI(n,p=>u(p))}}const l=tv("auth");return l&&fI(n,`http://${l}`),n}function Bk(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}rI({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const a=on("internal-error");a.customData=l,n(a)},s.type="text/javascript",s.charset="UTF-8",Bk().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Lk("Browser");const Vk={apiKey:"AIzaSyCrYHCC6fvYQm06NsLKrzc8q2fmq568dMo",authDomain:"abu-s-diary.firebaseapp.com",projectId:"abu-s-diary",storageBucket:"abu-s-diary.firebasestorage.app",messagingSenderId:"157146813051",appId:"1:157146813051:web:e9a878bd481866e1c188de",databaseURL:"https://abu-s-diary-default-rtdb.asia-southeast1.firebasedatabase.app",measurementId:"G-ZRMGNM923R"};let bg,Cl,Nl;try{Nl=av(Vk),bg=I_(Nl),Cl=Wk(Nl)}catch(r){console.error("Firebase initialization error:",r),bg=null}function Rg(r){const e={};for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&r[n]!==void 0&&(e[n]=r[n]);return e}async function Hk(r,e){if(Array.isArray(e)){const n=e.map(s=>Rg(s));await ag(r,n)}else{const n=Rg(e);await ag(r,n)}}const Pg=I_(Nl);function bt(r,e){const[n,s]=R.useState(e),[l,a]=R.useState(!0);return R.useEffect(()=>{const p=lg(Pg,r);return vN(p,m=>{const g=m.val();console.log("Data updated for path:",r,"Value:",g),s(g||e),a(!1)}),()=>{_N(p)}},[r,e]),{data:n,loading:l,updateData:async p=>{const m=lg(Pg,r);console.log("Updating data for path:",r,"New data:",p),await Hk(m,p)}}}const $k=()=>{const r=lr(),[e,n]=R.useState(!1),{data:s,loading:l}=bt("countdown",{targetDate:"2025-04-27T00:00:00",isEnabled:!0}),[a,u]=R.useState({days:0,hours:0,minutes:0,seconds:0});return R.useEffect(()=>{if(setTimeout(()=>n(!0),100),l)return;if(!s.isEnabled||new Date>=new Date(s.targetDate)){r("/",{replace:!0});return}const p=setInterval(()=>{const m=new Date,y=new Date(s.targetDate).getTime()-m.getTime();if(y<=0){clearInterval(p),u({days:0,hours:0,minutes:0,seconds:0}),r("/",{replace:!0});return}const _=Math.floor(y/(1e3*60*60*24)),x=Math.floor(y%(1e3*60*60*24)/(1e3*60*60)),b=Math.floor(y%(1e3*60*60)/(1e3*60)),k=Math.floor(y%(1e3*60)/1e3);u({days:_,hours:x,minutes:b,seconds:k})},1e3);return()=>clearInterval(p)},[s,r,l]),l?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsx("div",{className:"flex flex-col items-center justify-center min-h-[70vh] px-4",children:h.jsxs("div",{className:`transition-all duration-1000 w-full max-w-md ${e?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[h.jsx("div",{className:"mb-8 flex justify-center",children:h.jsx(Ex,{className:"w-16 h-16 text-[#333]"})}),h.jsx("div",{className:"bg-[#e6e6e6] rounded-2xl p-6 shadow-md mb-12",children:h.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:"bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner",children:String(a.days).padStart(2,"0")}),h.jsx("span",{className:"text-[#333] text-xs font-bold mt-2",children:"DAYS"})]}),h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:"bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner",children:String(a.hours).padStart(2,"0")}),h.jsx("span",{className:"text-[#333] text-xs font-bold mt-2",children:"HOURS"})]}),h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:"bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner",children:String(a.minutes).padStart(2,"0")}),h.jsx("span",{className:"text-[#333] text-xs font-bold mt-2",children:"MINS"})]}),h.jsxs("div",{className:"flex flex-col items-center",children:[h.jsx("div",{className:"bg-[#d9d9d9] w-full aspect-square rounded-lg flex items-center justify-center text-3xl font-mono font-bold shadow-inner",children:String(a.seconds).padStart(2,"0")}),h.jsx("span",{className:"text-[#333] text-xs font-bold mt-2",children:"SECS"})]})]})}),h.jsxs("div",{className:"text-center",children:[h.jsx("h2",{className:"text-2xl font-bold mb-4 text-[#a67c52]",children:"Until Your Special Day!"}),h.jsx("p",{className:"text-[#8a6f5c] text-sm",children:"Please wait until the countdown ends to access your birthday surprise."})]})]})})},Gk=()=>{const[r,e]=R.useState(!1),[n,s]=R.useState(!0),[l,a]=R.useState(""),[u,p]=R.useState(!0),m=lr();R.useEffect(()=>{const y=localStorage.getItem("backgroundMusicUrl"),_=localStorage.getItem("backgroundMusicEnabled");y&&a(y),_!==null&&p(_==="true"),setTimeout(()=>e(!0),300);const x=localStorage.getItem("birthdayNotes")||"[]",b=JSON.parse(x),k={id:Date.now().toString(),content:"Every moment with you feels like magic...",date:new Date().toLocaleDateString(),type:"surprise"};localStorage.setItem("birthdayNotes",JSON.stringify([...b,k]))},[]);const g=()=>{const y=JSON.parse(localStorage.getItem("chatMessages")||"[]"),_={id:Date.now(),text:"Love You babuiiii",sender:"user",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),date:new Date().toLocaleDateString(),status:"sent",reactions:[]};localStorage.setItem("chatMessages",JSON.stringify([...y,_])),m("/chat")};return h.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-[70vh] max-w-md mx-auto overflow-hidden",children:[h.jsx("style",{children:`
          @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
          @keyframes fall {
            0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
          .flower {
            position: fixed;
            top: -20px;
            animation: fall linear forwards;
            z-index: 1;
          }
          .flower::before {
            content: '🌸';
            font-size: 1.5rem;
          }
          .flower:nth-child(2n)::before {
            content: '🌺';
          }
          .flower:nth-child(3n)::before {
            content: '🌹';
          }
          .flower:nth-child(4n)::before {
            content: '🌷';
          }
        `}),Array.from({length:20}).map((y,_)=>h.jsx("div",{className:"flower",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*3+2}s`,animationDelay:`${Math.random()*5}s`}},_)),u&&l&&h.jsx("audio",{loop:!0,autoPlay:!0,muted:n,className:"hidden",src:l}),u&&l&&h.jsx("button",{onClick:()=>s(!n),className:"fixed top-4 right-4 z-10 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors",children:n?h.jsx(jx,{className:"w-6 h-6 text-[#a67c52]"}):h.jsx(Ox,{className:"w-6 h-6 text-[#a67c52]"})}),h.jsx("div",{className:`transition-all duration-1000 w-full px-4 z-10 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:h.jsxs("div",{className:"bg-[#e6e6e6] rounded-3xl overflow-hidden shadow-lg",children:[h.jsx("div",{className:"bg-[#ffcb85] p-6",children:h.jsx("h2",{className:"text-2xl text-[#8a6f5c]",style:{fontFamily:"Satisfy"},children:"Happy Birthday, my beautiful Wifey"})}),h.jsxs("div",{className:"p-6 text-lg leading-relaxed",children:[h.jsx("p",{className:"whitespace-pre-wrap text-[#8a6f5c]",style:{fontFamily:"Satisfy"},children:"Every moment with you feels like magic, and today, the world shines a little brighter because it's your day. Thank you for being my best friend, my biggest inspiration, and the love of my life. I can't wait to create a lifetime of memories with you. You deserve all the happiness, laughter, and love this world can offer – and I promise to spend every day making sure you feel it. I love you more than words can ever say."}),h.jsx("div",{className:"flex justify-center mt-8",children:h.jsx("button",{onClick:g,className:"inline-block px-6 py-2 sm:px-8 sm:py-3 bg-black hover:bg-gray-800 text-[#F5EBE1] rounded-full shadow-md transition-all transform hover:scale-105 active:scale-95",children:h.jsx("span",{className:"text-xl sm:text-2xl md:text-3xl block",style:{fontFamily:"Satisfy"},children:"Valobashi"})})})]})]})})]})},Kk=()=>{const{data:r=[],loading:e}=bt("gallery",[]),[n,s]=R.useState(null),[l,a]=R.useState({}),u=(p,m)=>{a(g=>({...g,[m]:!0}))};return e?h.jsx("div",{className:"h-full flex items-center justify-center",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{className:"h-full",children:[h.jsx("div",{className:"bg-[#e6e6e6] rounded-3xl p-4 shadow-md h-full overflow-y-auto",children:r.length>0?h.jsx("div",{className:"grid grid-cols-2 gap-2",children:r.map((p,m)=>h.jsx("div",{className:`${m===0?"col-span-2 row-span-2":""} rounded-xl overflow-hidden shadow-sm cursor-pointer transform transition-transform hover:scale-[1.02] relative min-h-[160px]`,onClick:()=>!l[p]&&s(p),children:l[p]?h.jsx("div",{className:"absolute inset-0 bg-[#f8f0e3] flex items-center justify-center",children:h.jsx(sn,{className:"w-8 h-8 text-[#d9c5b2]"})}):h.jsx("img",{src:p,alt:`Memory ${m+1}`,className:"w-full h-full object-cover",onError:()=>u(m,p)})},m))}):h.jsxs("div",{className:"text-center py-10",children:[h.jsx(sn,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No memories added yet"})]})}),n&&h.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",children:[h.jsx("button",{className:"absolute top-4 right-4 bg-white bg-opacity-20 rounded-full p-2",onClick:()=>s(null),children:h.jsx(Yg,{className:"w-6 h-6 text-white"})}),h.jsx("img",{src:n,alt:"Selected memory",className:"max-w-full max-h-[90vh] object-contain"})]})]})},qk=()=>{const{data:r=[],loading:e}=bt("games",[]);if(e)return h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})});const n=r.filter(s=>s.enabled);return h.jsxs("div",{className:"max-w-md mx-auto",children:[h.jsx("h2",{className:"text-2xl font-bold mb-6 text-center text-[#a67c52]",children:"Birthday Games"}),h.jsxs("div",{className:"space-y-4",children:[n.map(s=>h.jsx(kt,{to:`/games/${s.id}`,className:"block bg-white rounded-xl p-4 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",children:h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-12 h-12 rounded-lg overflow-hidden mr-4 shadow-sm",children:h.jsx("img",{src:s.logoUrl,alt:s.name,className:"w-full h-full object-cover"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-[#333]",children:s.name}),h.jsxs("p",{className:"text-sm text-[#666]",children:["Difficulty:"," ",h.jsx("span",{className:"capitalize",children:s.difficulty})]})]})]})},s.id)),n.length===0&&h.jsxs("div",{className:"text-center py-10",children:[h.jsx(Ls,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No games available yet"})]})]})]})},Qk=()=>{const{id:r}=Gw(),e=lr(),{data:n=[],loading:s}=bt("games",[]),[l,a]=R.useState(0),[u,p]=R.useState(!0),[m,g]=R.useState(!1),y=n.find(k=>k.id===r&&k.enabled),_=()=>{p(!1),g(!1)},x=()=>{p(!1),g(!0)};if(s)return h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})});if(!y)return e("/games"),null;const b=()=>!y.embedUrl&&!y.embedCode?h.jsxs("div",{className:"text-center py-10 text-[#a67c52]",children:[h.jsx("img",{src:y.logoUrl,alt:y.name,className:"w-32 h-32 mx-auto rounded-xl shadow-md mb-4 object-cover"}),h.jsx("p",{children:"This game is coming soon!"})]}):h.jsxs("div",{className:"relative aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-[#f8f0e3]",children:[u&&h.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-[#f8f0e3]",children:h.jsx(rd,{className:"w-8 h-8 text-[#a67c52] animate-spin"})}),m?h.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-[#f8f0e3] text-[#a67c52]",children:[h.jsx("p",{className:"text-lg font-bold mb-2",children:"Oops!"}),h.jsx("p",{className:"text-sm",children:"Unable to load the game"})]}):y.embedCode?h.jsx("div",{dangerouslySetInnerHTML:{__html:y.embedCode},className:`w-full h-full transition-opacity duration-300 ${u?"opacity-0":"opacity-100"}`}):h.jsx("iframe",{src:y.embedUrl,className:`w-full h-full border-0 transition-opacity duration-300 ${u?"opacity-0":"opacity-100"}`,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,sandbox:"allow-scripts allow-popups allow-forms",onLoad:_,onError:x})]});return h.jsxs("div",{className:"max-w-4xl mx-auto px-4",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs(kt,{to:"/games",className:"flex items-center text-[#a67c52] transform transition-all duration-300 hover:scale-105 active:scale-95",children:[h.jsx(Sx,{className:"w-5 h-5 mr-1"}),h.jsx("span",{children:"Back"})]}),h.jsx("h2",{className:"text-xl font-bold text-[#a67c52]",children:y.name}),h.jsxs("div",{className:"flex items-center bg-[#ffcb85] px-3 py-1 rounded-full",children:[h.jsx(Ax,{className:"w-4 h-4 mr-1 text-[#8a6f5c]"}),h.jsx("span",{className:"font-bold text-[#8a6f5c]",children:l})]})]}),b(),y.embedUrl&&h.jsx("div",{className:"mt-4 text-sm text-[#8a6f5c] text-center",children:h.jsx("p",{children:"Tip: Some games may require clicking inside the game area to start"})})]})},Iu={"Smileys & People":["😀","😃","😄","😁","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘"],"Animals & Nature":["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🎄"],"Food & Drink":["🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅"],Activities:["⚽️","🏀","🏈","⚾️","🥎","🎾","🏐","🏉","🥏","🎱","🪀","🏓","🏸","🏒","🏑","🥍"],"Hearts & Symbols":["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💕","💞","💓","💗","💖","💘","💝"]},oy=({onEmojiSelect:r,onClose:e})=>{const[n,s]=R.useState(Object.keys(Iu)[0]);return h.jsxs("div",{className:"absolute bottom-full mb-2 bg-white rounded-lg shadow-lg p-2 w-[280px]",onClick:l=>l.stopPropagation(),children:[h.jsx("div",{className:"flex overflow-x-auto mb-2 pb-2 border-b border-[#d9c5b2] gap-2",children:Object.keys(Iu).map(l=>h.jsx("button",{onClick:()=>s(l),className:`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors
              ${n===l?"bg-[#ffcb85] text-[#8a6f5c]":"bg-[#f8f0e3] text-[#a67c52] hover:bg-[#f8e8c8]"}`,children:l},l))}),h.jsx("div",{className:"grid grid-cols-8 gap-1 max-h-[200px] overflow-y-auto p-2",children:Iu[n].map((l,a)=>h.jsx("button",{onClick:()=>{r(l),e()},className:"hover:bg-[#f8f0e3] rounded p-1 text-xl transition-colors",children:l},a))})]})},Yk=()=>{const{data:r=[],updateData:e}=bt("messages",[]),[n,s]=R.useState(""),[l,a]=R.useState(""),[u,p]=R.useState(!1),[m,g]=R.useState(null),[y,_]=R.useState(!1),[x,b]=R.useState(null),[k,P]=R.useState({messageId:null,offset:0,initialX:0}),A=R.useRef(null),H=R.useRef(null),ne=()=>{var U;(U=A.current)==null||U.scrollIntoView({behavior:"smooth"})};R.useEffect(()=>{ne()},[r]);const ee=async()=>{if(console.log("handleSendMessage"),!n.trim()&&!m)return;const U={id:Date.now(),text:n,sender:"user",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),date:new Date().toLocaleDateString(),status:"sent",reactions:[],deleted:!1,imageUrl:m||null,replyTo:x?{id:x.id,text:x.text,sender:x.sender}:null},te=[...r,U];await e(te),s(""),g(null),b(null),setTimeout(()=>ce(U.id,"delivered"),1e3),setTimeout(()=>ce(U.id,"read"),2e3)},ce=async(U,te)=>{const xe=r.map(_e=>_e.id===U?{..._e,status:te}:_e);await e(xe)},Pe=U=>{var xe;const te=(xe=U.target.files)==null?void 0:xe[0];if(te){if(te.size>5*1024*1024){alert("Image size should be less than 5MB");return}if(!te.type.startsWith("image/")){alert("Please upload only image files");return}const _e=new FileReader;_e.onloadend=()=>{g(_e.result)},_e.readAsDataURL(te)}},Me=()=>r.filter(te=>!l||te.text.toLowerCase().includes(l.toLowerCase())).reduce((te,xe)=>{const _e=xe.date;return te[_e]||(te[_e]=[]),te[_e].push(xe),te},{}),We=U=>h.jsx("div",{className:`flex ${U.sender==="user"?"justify-end":"justify-start"}`,onTouchStart:te=>tt(te,U.id),onTouchMove:ut,onTouchEnd:()=>xt(U),children:h.jsx("div",{className:"group relative",children:h.jsxs("div",{className:`relative transform transition-all duration-300 ease-out ${k.messageId===U.id?`translate-x-[${k.offset}px]`:""}`,children:[U.replyTo&&h.jsxs("div",{className:"mb-2 px-4 py-2 bg-black/5 rounded-lg text-sm",children:[h.jsxs("div",{className:"flex items-center gap-2 text-[#8a6f5c]",children:[h.jsx(du,{className:"w-4 h-4"}),h.jsxs("span",{className:"font-medium",children:["Reply to ",U.replyTo.sender==="user"?"you":"admin"]})]}),h.jsx("p",{className:"text-[#666] line-clamp-1",children:U.replyTo.text})]}),h.jsxs("div",{className:`max-w-[280px] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out animate-fade-in ${U.deleted?"bg-gray-200 text-gray-500 italic":U.sender==="user"?"bg-[#ffcb85] text-[#8a6f5c]":"bg-white text-[#333]"}`,children:[U.imageUrl&&h.jsx("img",{src:U.imageUrl,alt:"Attached",className:"w-full h-48 object-cover rounded-lg mb-2",onError:te=>{const xe=te.target;xe.src="https://via.placeholder.com/400x300?text=Image+Error"}}),h.jsx("p",{className:U.deleted?"text-sm":"",children:U.text}),h.jsxs("div",{className:"flex items-center justify-between mt-1",children:[h.jsx("span",{className:`text-xs ${U.sender==="user"?"text-[#a67c52]":"text-[#999]"}`,children:U.time}),U.sender==="user"&&!U.deleted&&h.jsx("div",{className:"flex items-center space-x-1",children:cn(U.status)})]}),U.reactions&&U.reactions.length>0&&h.jsx("div",{className:"flex gap-1 mt-1",children:U.reactions.map((te,xe)=>h.jsxs("span",{className:"bg-white/50 rounded-full px-2 py-1 text-xs",children:[te.emoji," ",te.count]},xe))})]}),k.messageId===U.id&&k.offset>0&&h.jsx("div",{className:"absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 px-2",children:h.jsx(du,{className:`w-5 h-5 transition-colors duration-300 ${k.offset>50?"text-blue-500":"text-gray-400"}`})})]})})},U.id),tt=(U,te)=>{P({messageId:te,offset:0,initialX:U.touches[0].clientX})},ut=U=>{if(k.messageId===null)return;const xe=U.touches[0].clientX-k.initialX,_e=Math.max(0,Math.min(100,xe));P(Te=>({...Te,offset:_e}))},xt=U=>{k.offset>50&&b(U),P({messageId:null,offset:0,initialX:0})},cn=U=>{switch(U){case"sent":return h.jsx(Es,{className:"w-4 h-4 text-gray-400"});case"delivered":return h.jsxs("div",{className:"flex",children:[h.jsx(Es,{className:"w-4 h-4 text-gray-400"}),h.jsx(Es,{className:"w-4 h-4 text-gray-400 -ml-2"})]});case"read":return h.jsxs("div",{className:"flex",children:[h.jsx(Es,{className:"w-4 h-4 text-blue-400"}),h.jsx(Es,{className:"w-4 h-4 text-blue-400 -ml-2"})]})}},Rt=U=>{s(te=>te+U)};return h.jsxs("div",{className:"h-full flex flex-col bg-[#e6e6e6] rounded-3xl shadow-md",children:[h.jsxs("div",{className:"flex-shrink-0 px-4 py-3 flex items-center justify-between border-b border-[#d9c5b2] bg-[#e6e6e6] rounded-t-3xl",children:[h.jsx("h2",{className:"font-bold text-[#8a6f5c]",children:"Chat"}),h.jsx("button",{onClick:()=>p(!u),className:"p-2 text-[#8a6f5c] hover:bg-[#f8f0e3] rounded-full transition-colors",children:h.jsx(Rx,{className:"w-5 h-5"})})]}),u&&h.jsx("div",{className:"flex-shrink-0 p-2 border-b border-[#d9c5b2] bg-[#e6e6e6]",children:h.jsx("input",{type:"text",value:l,onChange:U=>a(U.target.value),placeholder:"Search messages...",className:"w-full px-4 py-2 rounded-full bg-white outline-none"})}),h.jsx("div",{className:"flex-1 overflow-y-auto",style:{minHeight:0},children:h.jsxs("div",{className:"p-4 space-y-6",children:[Object.entries(Me()).map(([U,te])=>h.jsxs("div",{children:[h.jsx("div",{className:"text-center mb-4",children:h.jsx("span",{className:"bg-[#d9c5b2] text-[#8a6f5c] text-xs px-3 py-1 rounded-full",children:U===new Date().toLocaleDateString()?"Today":U})}),h.jsx("div",{className:"space-y-4",children:te.map(xe=>We(xe))})]},U)),h.jsx("div",{ref:A})]})}),x&&h.jsx("div",{className:"flex-shrink-0 bg-[#f8f0e3] px-4 py-2 border-t border-[#d9c5b2]",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(du,{className:"w-4 h-4 text-[#8a6f5c]"}),h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("span",{className:"text-xs font-medium text-[#8a6f5c]",children:["Reply to ",x.sender==="user"?"yourself":"admin"]}),h.jsx("p",{className:"text-sm text-[#666] line-clamp-1",children:x.text})]})]}),h.jsx("button",{onClick:()=>b(null),className:"p-1 hover:bg-[#d9c5b2] rounded-full transition-colors",children:h.jsx(Yg,{className:"w-4 h-4 text-[#8a6f5c]"})})]})}),h.jsxs("div",{className:"flex-shrink-0 p-2 border-t border-[#d9c5b2] bg-[#e6e6e6] rounded-b-3xl",children:[m&&h.jsx("div",{className:"px-2 pb-2",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:m,alt:"To be sent",className:"h-20 w-auto rounded-lg"}),h.jsx("button",{onClick:()=>g(null),className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1",children:h.jsx(qs,{className:"w-4 h-4"})})]})}),h.jsxs("div",{className:"flex items-center gap-2 bg-white rounded-full p-2",children:[h.jsx("button",{onClick:()=>{var U;return(U=H.current)==null?void 0:U.click()},className:"p-2 text-[#a67c52]",children:h.jsx(sn,{className:"w-6 h-6"})}),h.jsx("input",{type:"file",ref:H,className:"hidden",accept:"image/*",onChange:Pe}),h.jsxs("div",{className:"relative",children:[h.jsx("button",{className:"p-2 text-[#a67c52]",onClick:()=>_(!y),children:h.jsx(Qg,{className:"w-6 h-6"})}),y&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>_(!1)}),h.jsx("div",{className:"relative z-20",children:h.jsx(oy,{onEmojiSelect:Rt,onClose:()=>_(!1)})})]})]}),h.jsx("input",{type:"text",value:n,onChange:U=>{s(U.target.value)},onKeyDown:U=>U.key==="Enter"&&ee(),placeholder:"Type a message...",className:"flex-1 bg-transparent outline-none px-2"}),h.jsx("button",{onClick:ee,disabled:!n.trim()&&!m,className:`rounded-full p-2 transition-colors ${n.trim()||m?"bg-[#ffcb85] text-[#8a6f5c]":"bg-[#d9d9d9] text-[#999]"}`,children:h.jsx(qg,{className:"w-6 h-6"})})]})]})]})},Qt=({children:r})=>h.jsx("div",{className:"bg-white rounded-xl shadow-md overflow-hidden",children:r}),rn=({children:r,className:e=""})=>h.jsx("div",{className:e,children:r}),Jk=()=>{const{data:r=[],loading:e}=bt("notes",[]),[n,s]=R.useState(!1),[l,a]=R.useState(null);return R.useEffect(()=>{setTimeout(()=>s(!0),300)},[]),e?h.jsx("div",{className:"h-full flex items-center justify-center",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):l?h.jsx("div",{className:"h-full flex items-center justify-center",children:h.jsx("div",{className:`transition-all duration-1000 w-full ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:h.jsxs("div",{className:"relative",children:[h.jsx("div",{className:"absolute -top-12 -left-6 w-12 h-12",children:h.jsxs("svg",{viewBox:"0 0 100 100",className:"w-full h-full",fill:"none",children:[h.jsx("path",{d:"M50,10 L20,80 L80,80 Z",fill:"#3b82f6",stroke:"#1d4ed8",strokeWidth:"2"}),h.jsx("circle",{cx:"50",cy:"15",r:"5",fill:"#ef4444"}),h.jsx("path",{d:"M30,80 C30,65 70,65 70,80",stroke:"#1d4ed8",strokeWidth:"2",strokeDasharray:"5,5"})]})}),h.jsx("div",{className:"bg-[#e6e6e6] rounded-3xl p-6 mb-4 shadow-md",children:h.jsx("h2",{className:"text-2xl font-handwriting text-[#333]",children:l.title||"A Special Note"})}),h.jsxs("div",{className:"bg-[#e6e6e6] rounded-3xl p-6 shadow-md font-handwriting text-lg leading-relaxed",children:[h.jsx("p",{className:"whitespace-pre-wrap",children:l.content}),h.jsx("div",{className:"flex justify-center mt-8",children:h.jsx("button",{onClick:()=>a(null),className:"inline-block px-8 py-3 bg-[#fff] hover:bg-[#f8f8f8] text-[#8a6f5c] font-bold rounded-full border border-[#d9c5b2] shadow-md transition-all transform hover:scale-105 font-sans",children:h.jsx("div",{className:"flex items-center",children:h.jsx("span",{children:"Close Note"})})})})]}),h.jsx("div",{className:"absolute -top-4 -right-4",children:h.jsxs("svg",{width:"80",height:"80",viewBox:"0 0 100 100",children:[h.jsx("path",{d:"M20,20 L30,10",stroke:"#ef4444",strokeWidth:"2"}),h.jsx("path",{d:"M40,15 L35,5",stroke:"#3b82f6",strokeWidth:"2"}),h.jsx("path",{d:"M60,20 L70,10",stroke:"#10b981",strokeWidth:"2"}),h.jsx("circle",{cx:"25",cy:"15",r:"3",fill:"#8b5cf6"}),h.jsx("circle",{cx:"75",cy:"10",r:"3",fill:"#ec4899"}),h.jsx("rect",{x:"40",y:"10",width:"6",height:"6",fill:"#f59e0b",transform:"rotate(45, 43, 13)"})]})})]})})}):h.jsx("div",{className:"h-full overflow-y-auto",children:h.jsxs("div",{className:"space-y-4 py-2",children:[r.map(u=>h.jsx(Qt,{onClick:()=>a(u),className:"cursor-pointer transform transition-all duration-300 hover:scale-[1.02]",children:h.jsxs("div",{className:"p-4",children:[h.jsxs("div",{className:"flex items-center mb-3",children:[h.jsx("div",{className:"w-8 h-8 bg-[#ffcb85] rounded-full flex items-center justify-center mr-3",children:h.jsx(br,{className:"w-4 h-4 text-[#8a6f5c]"})}),h.jsx("span",{className:"text-sm text-[#8a6f5c]",children:u.date})]}),h.jsx("p",{className:"text-[#333] line-clamp-3 font-handwriting",children:u.content})]})},u.id)),r.length===0&&h.jsxs("div",{className:"text-center py-10",children:[h.jsx(br,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No notes yet"})]})]})})};function rh(){const[r,e]=R.useState(!1),[n,s]=R.useState(!0);return R.useEffect(()=>{const u=Cl.onAuthStateChanged(p=>{e(!!p),s(!1)});return()=>u()},[]),{isAdmin:r,loading:n,login:async(u,p)=>{try{return await kI(Cl,u,p),!0}catch(m){return console.error("Login error:",m),!1}},logout:async()=>{try{return await RI(Cl),!0}catch(u){return console.error("Logout error:",u),!1}}}}const Xk=()=>{const[r,e]=R.useState(""),[n,s]=R.useState(""),[l,a]=R.useState(""),u=lr(),{login:p}=rh(),m=async g=>{g.preventDefault(),a(""),await p(r,n)?u("/admin/dashboard"):a("Invalid email or password")};return h.jsx("div",{className:"min-h-screen bg-[#f8f0e3] flex items-center justify-center p-4",children:h.jsx("div",{className:"w-full max-w-md",children:h.jsxs("div",{className:"bg-white rounded-2xl shadow-lg p-6",children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6 text-center",children:"Admin Login"}),h.jsxs("form",{onSubmit:m,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-[#8a6f5c] mb-1",children:"Email"}),h.jsx("input",{type:"email",value:r,onChange:g=>e(g.target.value),className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]",placeholder:"Enter admin email",required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-[#8a6f5c] mb-1",children:"Password"}),h.jsx("input",{type:"password",value:n,onChange:g=>s(g.target.value),className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]",placeholder:"Enter password",required:!0})]}),l&&h.jsx("p",{className:"text-red-500 text-sm",children:l}),h.jsx("button",{type:"submit",className:"w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors",children:"Login"})]})]})})})},Zk=()=>{const r=lr(),e=Lr(),{logout:n}=rh(),s=async()=>{await n()&&r("/admin")},l=a=>e.pathname===a;return h.jsxs("div",{className:"min-h-screen bg-[#f8f0e3] flex",children:[h.jsxs("div",{className:"w-64 bg-white shadow-lg flex flex-col fixed h-full transition-all duration-300 ease-in-out",children:[h.jsxs("div",{className:"p-6 border-b border-[#d9c5b2]",children:[h.jsx("h1",{className:"text-xl font-bold text-[#a67c52] tracking-tight",children:"Birthday Admin"}),h.jsx("p",{className:"text-sm text-[#8a6f5c] mt-1 opacity-60",children:"Manage your celebration"})]}),h.jsx("nav",{className:"flex-1 p-4",children:h.jsxs("div",{className:"space-y-1",children:[h.jsxs(kt,{to:"/admin/dashboard",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/dashboard")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(Px,{className:`w-5 h-5 transition-transform duration-200 ${l("/admin/dashboard")?"rotate-0":"group-hover:rotate-45"}`}),h.jsx("span",{className:"ml-3 font-medium",children:"Dashboard"})]}),h.jsxs(kt,{to:"/admin/countdown",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/countdown")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(Jl,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Countdown"})]}),h.jsxs(kt,{to:"/admin/messages",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/messages")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(id,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Messages"})]}),h.jsxs(kt,{to:"/admin/gallery",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/gallery")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(sn,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Gallery"})]}),h.jsxs(kt,{to:"/admin/games",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/games")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(Ls,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Games"})]}),h.jsxs(kt,{to:"/admin/notes",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/notes")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(br,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Notes"})]}),h.jsxs(kt,{to:"/admin/music",className:`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${l("/admin/music")?"bg-[#ffcb85] text-[#8a6f5c]":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:[h.jsx(Kg,{className:"w-5 h-5"}),h.jsx("span",{className:"ml-3 font-medium",children:"Music"})]})]})}),h.jsx("div",{className:"p-4 border-t border-[#d9c5b2]",children:h.jsxs("button",{onClick:s,className:"flex items-center w-full px-4 py-3 rounded-xl text-[#8a6f5c] hover:bg-[#fff5e7] transition-all duration-200 group",children:[h.jsx(Nx,{className:"w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1"}),h.jsx("span",{className:"ml-3 font-medium",children:"Logout"})]})})]}),h.jsx("div",{className:"flex-1 ml-64 p-8 transition-all duration-300",children:h.jsx("div",{className:"max-w-6xl mx-auto",children:h.jsx($g,{})})})]})},eT=()=>h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Dashboard"}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[h.jsx(Qt,{children:h.jsxs(rn,{className:"flex items-center space-x-4 p-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center",children:h.jsx(Jl,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-[#8a6f5c]",children:"Countdown"}),h.jsx("p",{className:"text-sm text-[#a67c52]",children:"April 27, 2025"})]})]})}),h.jsx(Qt,{children:h.jsxs(rn,{className:"flex items-center space-x-4 p-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center",children:h.jsx(id,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-[#8a6f5c]",children:"Messages"}),h.jsx("p",{className:"text-sm text-[#a67c52]",children:"5 messages"})]})]})}),h.jsx(Qt,{children:h.jsxs(rn,{className:"flex items-center space-x-4 p-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center",children:h.jsx(sn,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-[#8a6f5c]",children:"Gallery"}),h.jsx("p",{className:"text-sm text-[#a67c52]",children:"8 images"})]})]})}),h.jsx(Qt,{children:h.jsxs(rn,{className:"flex items-center space-x-4 p-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center",children:h.jsx(Ls,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-[#8a6f5c]",children:"Games"}),h.jsx("p",{className:"text-sm text-[#a67c52]",children:"4 games available"})]})]})})]})]}),tT=()=>{const{data:r,loading:e,updateData:n}=bt("countdown",{targetDate:"2025-04-27T00:00",isEnabled:!0}),[s,l]=R.useState(!1),a=async()=>{await n(r),l(!0),setTimeout(()=>l(!1),2e3)},u=()=>{n({...r,isEnabled:!r.isEnabled})};return e?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Countdown Settings"}),h.jsx("div",{className:"max-w-md",children:h.jsx(Qt,{children:h.jsxs(rn,{className:"p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(Jl,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Target Date & Time"})]}),h.jsx("button",{onClick:u,className:`p-2 ${r.isEnabled?"text-green-500":"text-gray-400"}`,children:r.isEnabled?h.jsx(ld,{className:"w-8 h-8"}):h.jsx(od,{className:"w-8 h-8"})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:r.isEnabled?"opacity-100":"opacity-50 pointer-events-none",children:[h.jsx("label",{className:"block text-sm font-medium text-[#8a6f5c] mb-1",children:"Set Target Date"}),h.jsx("input",{type:"datetime-local",value:r.targetDate,onChange:p=>n({...r,targetDate:p.target.value}),className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"})]}),h.jsx("div",{className:"pt-4 border-t border-[#d9c5b2]",children:h.jsx("button",{onClick:a,className:"w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors",children:s?"Settings Saved!":"Save Changes"})})]})]})})})]})},nT=()=>{const{data:r=[],updateData:e}=bt("messages",[]),[n,s]=R.useState(""),l=R.useRef(null),[a,u]=R.useState(!1),[p,m]=R.useState(null),g=R.useRef(null),y=()=>{var k;(k=l.current)==null||k.scrollIntoView({behavior:"smooth"})};R.useEffect(()=>{y()},[r]);const _=async()=>{if(!n.trim()&&!p)return;const k={id:Date.now(),text:n,sender:"admin",time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),date:new Date().toLocaleDateString(),status:"sent",reactions:[],imageUrl:p||void 0},P=[...r,k];await e(P),s(""),m(null),setTimeout(()=>x(k.id,"delivered"),1e3),setTimeout(()=>x(k.id,"read"),2e3)},x=async(k,P)=>{const A=r.map(H=>H.id===k?{...H,status:P}:H);await e(A)},b=k=>{var A;const P=(A=k.target.files)==null?void 0:A[0];if(P){if(P.size>5*1024*1024){alert("Image size should be less than 5MB");return}if(!P.type.startsWith("image/")){alert("Please upload only image files");return}const H=new FileReader;H.onloadend=()=>{m(H.result)},H.readAsDataURL(P)}};return h.jsxs("div",{className:"h-[calc(100vh-theme(space.32))]",children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Chat Messages"}),h.jsx("div",{className:"h-[calc(100%-theme(space.20))]",children:h.jsx(Qt,{className:"h-full flex flex-col",children:h.jsxs(rn,{className:"p-6 flex-1 flex flex-col",children:[h.jsxs("div",{className:"flex items-center mb-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(id,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Live Chat"})]}),h.jsx("div",{className:"flex-1 bg-[#f8f0e3] rounded-xl p-4 overflow-y-auto mb-4",children:h.jsxs("div",{className:"space-y-4",children:[r.map(k=>h.jsx("div",{className:`flex ${k.sender==="admin"?"justify-end":"justify-start"}`,children:h.jsxs("div",{className:`max-w-[280px] rounded-2xl px-4 py-2 transform transition-all duration-300 ease-out animate-fade-in
                        ${k.deleted?"bg-gray-200 text-gray-500 italic":k.sender==="admin"?"bg-[#ffcb85] text-[#8a6f5c]":"bg-white text-[#333]"}`,children:[k.imageUrl&&h.jsx("img",{src:k.imageUrl,alt:"Attached",className:"w-full h-48 object-cover rounded-lg mb-2",onError:P=>{const A=P.target;A.src="https://via.placeholder.com/400x300?text=Image+Error"}}),h.jsx("p",{className:k.deleted?"text-sm":"",children:k.text}),h.jsx("p",{className:`text-xs ${k.sender==="admin"?"text-[#a67c52]":"text-[#999]"} text-right mt-1`,children:k.time})]})},k.id)),h.jsx("div",{ref:l})]})}),h.jsxs("div",{className:"flex items-center gap-2 bg-[#f8f0e3] rounded-full p-2",children:[h.jsx("button",{onClick:()=>{var k;return(k=g.current)==null?void 0:k.click()},className:"p-2 text-[#a67c52]",children:h.jsx(sn,{className:"w-6 h-6"})}),h.jsx("input",{type:"file",ref:g,className:"hidden",accept:"image/*",onChange:b}),h.jsxs("div",{className:"relative",children:[h.jsx("button",{className:"p-2 text-[#a67c52]",onClick:()=>u(!a),children:h.jsx(Qg,{className:"w-6 h-6"})}),a&&h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed inset-0 z-10",onClick:()=>u(!1)}),h.jsx("div",{className:"relative z-20",children:h.jsx(oy,{onEmojiSelect:k=>{s(P=>P+k)},onClose:()=>u(!1)})})]})]}),p&&h.jsx("div",{className:"absolute bottom-full mb-2 left-0",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:p,alt:"To be sent",className:"h-20 w-auto rounded-lg"}),h.jsx("button",{onClick:()=>m(null),className:"absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1",children:h.jsx(qs,{className:"w-4 h-4"})})]})}),h.jsx("input",{type:"text",value:n,onChange:k=>s(k.target.value),onKeyDown:k=>k.key==="Enter"&&_(),placeholder:"Type a message...",className:"flex-1 bg-transparent outline-none px-2"}),h.jsx("button",{onClick:_,disabled:!n.trim()&&!p,className:`rounded-full p-2 transition-colors ${n.trim()||p?"bg-[#ffcb85] text-[#8a6f5c]":"bg-[#d9d9d9] text-[#999]"}`,children:h.jsx(qg,{className:"w-6 h-6"})})]})]})})})]})},rT=()=>{const{data:r=[],loading:e,updateData:n}=bt("gallery",[]),[s,l]=R.useState(""),[a,u]=R.useState(!1),[p,m]=R.useState(""),[g,y]=R.useState({}),_=P=>P.match(/\.(jpeg|jpg|gif|png|webp)$/)!=null,x=async()=>{if(!s.trim())return;if(u(!0),m(""),!_(s)){m("Please enter a valid image URL (jpeg, jpg, gif, png, webp)"),u(!1);return}const P=new Image;P.onload=async()=>{await n([...r,s]),l(""),u(!1)},P.onerror=()=>{m("Unable to load image. Please check the URL and try again."),u(!1)},P.src=s},b=async P=>{const A=r.filter((H,ne)=>ne!==P);await n(A)},k=(P,A)=>{y(H=>({...H,[A]:!0}))};return e?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Gallery Management"}),h.jsx("div",{className:"max-w-2xl",children:h.jsx(Qt,{children:h.jsxs(rn,{className:"p-6",children:[h.jsxs("div",{className:"flex items-center mb-6",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(sn,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Manage Images"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"url",value:s,onChange:P=>{l(P.target.value),m("")},placeholder:"Add image URL...",className:"flex-1 px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"}),h.jsx("button",{onClick:x,disabled:a||!s.trim(),className:"bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center disabled:opacity-50 disabled:cursor-not-allowed",children:a?h.jsx(rd,{className:"w-5 h-5 animate-spin"}):h.jsx(sd,{className:"w-5 h-5"})})]}),p&&h.jsx("p",{className:"text-red-500 text-sm",children:p})]}),h.jsx("div",{className:"grid grid-cols-2 gap-4",children:r.map((P,A)=>h.jsxs("div",{className:"relative group min-h-[200px] bg-[#f8f0e3] rounded-lg",children:[g[P]?h.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:h.jsx(sn,{className:"w-8 h-8 text-[#d9c5b2]"})}):h.jsx("img",{src:P,alt:`Gallery ${A+1}`,className:"w-full h-full object-cover rounded-lg",onError:()=>k(A,P)}),h.jsx("button",{onClick:()=>b(A),className:"absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity",children:h.jsx(qs,{className:"w-4 h-4"})})]},A))}),r.length===0&&h.jsxs("div",{className:"text-center py-10",children:[h.jsx(sn,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No images added yet"})]})]})]})})})]})},iT=r=>{if(!r)return!0;try{const e=new URL(r);return["itch.io","scratch.mit.edu","replit.com","codepen.io","jsfiddle.net"].some(s=>e.hostname.includes(s))}catch{return!1}},sT=()=>{const{data:r=[],loading:e,updateData:n}=bt("games",[]),[s,l]=R.useState({name:"",logoUrl:"",embedUrl:"",embedCode:"",difficulty:"medium"}),[a,u]=R.useState(!1),[p,m]=R.useState(!1),g=async b=>{const k=r.map(P=>P.id===b?{...P,enabled:!P.enabled}:P);await n(k)},y=async(b,k)=>{const P=r.map(A=>A.id===b?{...A,difficulty:k}:A);await n(P)},_=async()=>{if(!s.name.trim()||!s.logoUrl.trim())return;if(s.embedUrl&&!iT(s.embedUrl)){alert("Please enter a valid embed URL from supported platforms (itch.io, Scratch, Replit, CodePen, JSFiddle)");return}m(!0);const b={id:Date.now().toString(),name:s.name,logoUrl:s.logoUrl,embedUrl:s.embedUrl,embedCode:s.embedCode,enabled:!0,difficulty:s.difficulty};await n([...r,b]),l({name:"",logoUrl:"",embedUrl:"",embedCode:"",difficulty:"medium"}),u(!1),m(!1)},x=async b=>{const k=r.filter(P=>P.id!==b);await n(k)};return e?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Games Management"}),h.jsx("div",{className:"max-w-2xl",children:h.jsx(Qt,{children:h.jsxs(rn,{className:"p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(Ls,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Configure Games"})]}),h.jsxs("button",{onClick:()=>u(!a),className:"bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2",children:[h.jsx(sd,{className:"w-5 h-5"}),h.jsx("span",{children:"Add Game"})]})]}),a&&h.jsxs("div",{className:"mb-6 p-4 bg-[#f8f0e3] rounded-lg space-y-4",children:[h.jsx("input",{type:"text",value:s.name,onChange:b=>l({...s,name:b.target.value}),placeholder:"Game Name",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"}),h.jsx("input",{type:"url",value:s.logoUrl,onChange:b=>l({...s,logoUrl:b.target.value}),placeholder:"Logo URL",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("input",{type:"url",value:s.embedUrl,onChange:b=>l({...s,embedUrl:b.target.value}),placeholder:"Embed URL (optional)",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"}),h.jsx("p",{className:"text-sm text-[#8a6f5c]",children:"Supported platforms: itch.io, Scratch, Replit, CodePen, JSFiddle"})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("textarea",{value:s.embedCode,onChange:b=>l({...s,embedCode:b.target.value}),placeholder:"Or paste iframe embed code here...",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85] min-h-[100px]"}),h.jsx("p",{className:"text-sm text-[#8a6f5c]",children:"You can paste a complete iframe code here instead of using the embed URL"})]}),h.jsxs("select",{value:s.difficulty,onChange:b=>l({...s,difficulty:b.target.value}),className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]",children:[h.jsx("option",{value:"easy",children:"Easy"}),h.jsx("option",{value:"medium",children:"Medium"}),h.jsx("option",{value:"hard",children:"Hard"})]}),h.jsx("button",{onClick:_,disabled:p,className:"w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center",children:p?h.jsx(rd,{className:"w-5 h-5 animate-spin"}):"Add Game"})]}),h.jsxs("div",{className:"space-y-4",children:[r.map(b=>h.jsxs("div",{className:"flex items-center justify-between p-4 bg-white rounded-lg border border-[#d9c5b2]",children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("img",{src:b.logoUrl,alt:b.name,className:"w-12 h-12 rounded-lg object-cover"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-bold text-[#8a6f5c]",children:b.name}),h.jsxs("select",{value:b.difficulty,onChange:k=>y(b.id,k.target.value),className:"mt-1 text-sm text-[#a67c52] bg-transparent",children:[h.jsx("option",{value:"easy",children:"Easy"}),h.jsx("option",{value:"medium",children:"Medium"}),h.jsx("option",{value:"hard",children:"Hard"})]})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:()=>g(b.id),className:`p-2 ${b.enabled?"text-green-500":"text-gray-400"}`,children:b.enabled?h.jsx(ld,{className:"w-8 h-8"}):h.jsx(od,{className:"w-8 h-8"})}),h.jsx("button",{onClick:()=>x(b.id),className:"p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",children:h.jsx(qs,{className:"w-5 h-5"})})]})]},b.id)),r.length===0&&h.jsxs("div",{className:"text-center py-10",children:[h.jsx(Ls,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No games added yet"})]})]})]})})})]})},oT=()=>{const{data:r=[],loading:e,updateData:n}=bt("notes",[]),[s,l]=R.useState(""),[a,u]=R.useState(!1),p=async()=>{if(!s.trim())return;const y={id:Date.now().toString(),content:s,date:new Date().toLocaleDateString(),type:"custom",showAfterCountdown:!1};await n([...r,y]),l(""),u(!1)},m=async y=>{const _=r.filter(x=>x.id!==y);await n(_)},g=async y=>{const _=r.map(x=>x.id===y?{...x,showAfterCountdown:!x.showAfterCountdown}:x);await n(_)};return e?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Notes Management"}),h.jsx("div",{className:"max-w-2xl",children:h.jsx(Qt,{children:h.jsxs(rn,{className:"p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(br,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Manage Notes"})]}),h.jsxs("button",{onClick:()=>u(!a),className:"bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2",children:[h.jsx(sd,{className:"w-5 h-5"}),h.jsx("span",{children:"Add Note"})]})]}),a&&h.jsxs("div",{className:"mb-6 p-4 bg-[#f8f0e3] rounded-lg space-y-4",children:[h.jsx("textarea",{value:s,onChange:y=>l(y.target.value),placeholder:"Write your note here...",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85] min-h-[100px]"}),h.jsx("button",{onClick:p,className:"w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors",children:"Add Note"})]}),h.jsxs("div",{className:"space-y-4",children:[r.map(y=>h.jsxs("div",{className:"flex items-start justify-between p-4 bg-white rounded-lg border border-[#d9c5b2]",children:[h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center mb-2",children:[h.jsx("span",{className:"text-sm text-[#8a6f5c]",children:y.date}),y.type==="surprise"&&h.jsx("span",{className:"ml-2 px-2 py-1 text-xs bg-[#ffcb85] text-[#8a6f5c] rounded-full",children:"Surprise Message"}),y.showAfterCountdown&&h.jsx("span",{className:"ml-2 px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full",children:"Shows After Countdown"})]}),h.jsx("p",{className:"text-[#333] whitespace-pre-wrap font-handwriting",children:y.content})]}),h.jsxs("div",{className:"flex flex-col gap-2 ml-4",children:[h.jsx("button",{onClick:()=>g(y.id),className:`p-2 rounded-lg transition-colors ${y.showAfterCountdown?"bg-blue-100 text-blue-600 hover:bg-blue-200":"text-[#8a6f5c] hover:bg-[#fff5e7]"}`,children:h.jsx(Jl,{className:"w-5 h-5"})}),h.jsx("button",{onClick:()=>m(y.id),className:"p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors",children:h.jsx(qs,{className:"w-5 h-5"})})]})]},y.id)),r.length===0&&h.jsxs("div",{className:"text-center py-10",children:[h.jsx(br,{className:"w-12 h-12 mx-auto text-[#d9c5b2] mb-4"}),h.jsx("p",{className:"text-[#8a6f5c]",children:"No notes added yet"})]})]})]})})})]})},lT="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",aT=()=>{const{data:r,loading:e,updateData:n}=bt("music",{url:lT,isEnabled:!0}),[s,l]=R.useState(!1),[a,u]=R.useState(!1),p=R.useRef(null),m=async()=>{await n(r),u(!0),setTimeout(()=>u(!1),2e3)},g=()=>{n({...r,isEnabled:!r.isEnabled})},y=()=>{p.current&&(s?p.current.pause():p.current.play(),l(!s))};return e?h.jsx("div",{className:"flex justify-center items-center h-64",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):h.jsxs("div",{children:[h.jsx("h1",{className:"text-2xl font-bold text-[#a67c52] mb-6",children:"Background Music Settings"}),h.jsx("div",{className:"max-w-md",children:h.jsx(Qt,{children:h.jsxs(rn,{className:"p-6",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{className:"flex items-center",children:[h.jsx("div",{className:"w-12 h-12 bg-[#ffcb85] rounded-full flex items-center justify-center mr-4",children:h.jsx(Kg,{className:"w-6 h-6 text-[#8a6f5c]"})}),h.jsx("h2",{className:"text-lg font-bold text-[#8a6f5c]",children:"Configure Music"})]}),h.jsx("button",{onClick:g,className:`p-2 ${r.isEnabled?"text-green-500":"text-gray-400"}`,children:r.isEnabled?h.jsx(ld,{className:"w-8 h-8"}):h.jsx(od,{className:"w-8 h-8"})})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:r.isEnabled?"opacity-100":"opacity-50 pointer-events-none",children:[h.jsx("label",{className:"block text-sm font-medium text-[#8a6f5c] mb-1",children:"Music URL"}),h.jsx("input",{type:"url",value:r.url,onChange:_=>n({...r,url:_.target.value}),placeholder:"Enter music URL...",className:"w-full px-4 py-2 rounded-lg border border-[#d9c5b2] focus:outline-none focus:ring-2 focus:ring-[#ffcb85]"}),h.jsxs("div",{className:"mt-4 flex items-center justify-between bg-[#f8f0e3] rounded-lg p-3",children:[h.jsx("span",{className:"text-sm text-[#8a6f5c]",children:"Preview Music"}),h.jsx("button",{onClick:y,className:"p-2 bg-[#ffcb85] rounded-full hover:bg-[#ffc270] transition-colors",children:s?h.jsx(Tx,{className:"w-4 h-4 text-[#8a6f5c]"}):h.jsx(bx,{className:"w-4 h-4 text-[#8a6f5c]"})})]}),h.jsx("audio",{ref:p,src:r.url,onEnded:()=>l(!1),className:"hidden"})]}),h.jsx("div",{className:"pt-4 border-t border-[#d9c5b2]",children:h.jsx("button",{onClick:m,className:"w-full bg-[#ffcb85] hover:bg-[#ffc270] text-[#8a6f5c] font-bold py-2 px-4 rounded-lg transition-colors",children:a?"Settings Saved!":"Save Changes"})})]})]})})})]})},cT=r=>{const{targetDate:e,isEnabled:n}=r;return n?new Date>=new Date(e):!0},Cr=({children:r})=>{const{data:e,loading:n}=bt("countdown",{targetDate:"2025-04-27T00:00:00",isEnabled:!0});return n?h.jsx("div",{className:"min-h-screen bg-[#f8f0e3] flex items-center justify-center",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):cT(e)?h.jsx(h.Fragment,{children:r}):h.jsx(Hg,{to:"/countdown",replace:!0})},uT=({children:r})=>{const{isAdmin:e,loading:n}=rh();return n?h.jsx("div",{className:"min-h-screen bg-[#f8f0e3] flex items-center justify-center",children:h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-[#a67c52]"})}):e?h.jsx(h.Fragment,{children:r}):h.jsx(Hg,{to:"/admin",replace:!0})};function dT(){return h.jsx(mx,{children:h.jsxs(ax,{children:[h.jsx(He,{path:"/admin",element:h.jsx(Xk,{})}),h.jsxs(He,{path:"/admin/*",element:h.jsx(uT,{children:h.jsx(Zk,{})}),children:[h.jsx(He,{path:"dashboard",element:h.jsx(eT,{})}),h.jsx(He,{path:"countdown",element:h.jsx(tT,{})}),h.jsx(He,{path:"messages",element:h.jsx(nT,{})}),h.jsx(He,{path:"gallery",element:h.jsx(rT,{})}),h.jsx(He,{path:"games",element:h.jsx(sT,{})}),h.jsx(He,{path:"notes",element:h.jsx(oT,{})}),h.jsx(He,{path:"music",element:h.jsx(aT,{})})]}),h.jsxs(He,{path:"/",element:h.jsx(Dx,{}),children:[h.jsx(He,{path:"countdown",element:h.jsx($k,{})}),h.jsx(He,{index:!0,element:h.jsx(Cr,{children:h.jsx(Mx,{})})}),h.jsx(He,{path:"surprise-message",element:h.jsx(Cr,{children:h.jsx(Gk,{})})}),h.jsx(He,{path:"gallery",element:h.jsx(Cr,{children:h.jsx(Kk,{})})}),h.jsx(He,{path:"games",element:h.jsx(Cr,{children:h.jsx(qk,{})})}),h.jsx(He,{path:"games/:id",element:h.jsx(Cr,{children:h.jsx(Qk,{})})}),h.jsx(He,{path:"chat",element:h.jsx(Cr,{children:h.jsx(Yk,{})})}),h.jsx(He,{path:"notes",element:h.jsx(Cr,{children:h.jsx(Jk,{})})})]})]})})}const ly=document.getElementById("root");if(!ly)throw new Error("Failed to find the root element");const hT=pw.createRoot(ly);hT.render(h.jsx(Ag.StrictMode,{children:h.jsx(dT,{})}));
