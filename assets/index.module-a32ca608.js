var x=Object.defineProperty;var i=(e,n)=>x(e,"name",{value:n,configurable:!0});import{r as o}from"./index-60a4f77e.js";var a={},E={get exports(){return a},set exports(e){a=e}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=o,h=Symbol.for("react.element"),b=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,j=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function $(e,n,t){var r,l={},s=null,c=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(c=n.ref);for(r in n)v.call(n,r)&&!O.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)l[r]===void 0&&(l[r]=n[r]);return{$$typeof:h,type:e,key:s,ref:c,props:l,_owner:j.current}}i($,"q");d.Fragment=b;d.jsx=$;d.jsxs=$;(function(e){e.exports=d})(E);const V=a.jsx,k=a.jsxs;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}i(u,"_extends");function C(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}i(C,"$6ed0406888f73fc4$var$setRef");function y(...e){return n=>e.forEach(t=>C(t,n))}i(y,"$6ed0406888f73fc4$export$43e446d32b3d21af");function A(...e){return o.useCallback(y(...e),e)}i(A,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const R=o.forwardRef((e,n)=>{const{children:t,...r}=e,l=o.Children.toArray(t),s=l.find(g);if(s){const c=s.props.children,f=l.map(m=>m===s?o.Children.count(c)>1?o.Children.only(null):o.isValidElement(c)?c.props.children:null:m);return o.createElement(p,u({},r,{ref:n}),o.isValidElement(c)?o.cloneElement(c,void 0,f):null)}return o.createElement(p,u({},r,{ref:n}),t)});R.displayName="Slot";const p=o.forwardRef((e,n)=>{const{children:t,...r}=e;return o.isValidElement(t)?o.cloneElement(t,{...w(r,t.props),ref:y(n,t.ref)}):o.Children.count(t)>1?o.Children.only(null):null});p.displayName="SlotClone";const S=i(({children:e})=>o.createElement(o.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function g(e){return o.isValidElement(e)&&e.type===S}i(g,"$5e63c961fc1ce211$var$isSlottable");function w(e,n){const t={...n};for(const r in n){const l=e[r],s=n[r];/^on[A-Z]/.test(r)?l&&s?t[r]=(...f)=>{s(...f),l(...f)}:l&&(t[r]=l):r==="style"?t[r]={...l,...s}:r==="className"&&(t[r]=[l,s].filter(Boolean).join(" "))}return{...e,...t}}i(w,"$5e63c961fc1ce211$var$mergeProps");export{R as $,V as a,A as b,k as j};
//# sourceMappingURL=index.module-a32ca608.js.map
