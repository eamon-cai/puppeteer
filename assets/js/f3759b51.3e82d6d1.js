/*! For license information please see f3759b51.3e82d6d1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2099],{18642:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var n=t(85893),o=t(11151);const s={sidebar_label:"Touchscreen.touchMove"},c="Touchscreen.touchMove() method",i={id:"api/puppeteer.touchscreen.touchmove",title:"Touchscreen.touchMove() method",description:"Dispatches a touchMove event.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.touchscreen.touchmove.md",sourceDirName:"api",slug:"/api/puppeteer.touchscreen.touchmove",permalink:"/api/puppeteer.touchscreen.touchmove",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"Touchscreen.touchMove"},sidebar:"api",previous:{title:"Touchscreen.touchEnd",permalink:"/api/puppeteer.touchscreen.touchend"},next:{title:"Touchscreen.touchStart",permalink:"/api/puppeteer.touchscreen.touchstart"}},h={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"touchscreentouchmove-method",children:"Touchscreen.touchMove() method"}),"\n",(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"touchMove"})," event."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Touchscreen {\n  abstract touchMove(x: number, y: number): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"x"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Horizontal position of the move."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"y"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"number"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Vertical position of the move."})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Not every ",(0,n.jsx)(r.code,{children:"touchMove"})," call results in a ",(0,n.jsx)(r.code,{children:"touchmove"})," event being emitted, depending on the browser's optimizations. For example, Chrome ",(0,n.jsx)(r.a,{href:"https://developer.chrome.com/blog/a-more-compatible-smoother-touch/#chromes-new-model-the-throttled-async-touchmove-model",children:"throttles"})," touch move events."]})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,r,t)=>{var n=t(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,s={},a=null,d=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(d=r.ref),r)c.call(r,n)&&!h.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:d,props:s,_owner:i.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>c});var n=t(67294);const o={},s=n.createContext(o);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);