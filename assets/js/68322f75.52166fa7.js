/*! For license information please see 68322f75.52166fa7.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32838],{39782:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(85893),s=t(11151);const o={sidebar_label:"Page.$"},l="Page.$() method",a={id:"api/puppeteer.page._",title:"Page.$() method",description:"Runs document.querySelector within the page. If no element matches the selector, the return value resolves to null.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.page._.md",sourceDirName:"api",slug:"/api/puppeteer.page._",permalink:"/api/puppeteer.page._",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"Page.$"},sidebar:"api",previous:{title:"Page",permalink:"/api/puppeteer.page"},next:{title:"Page.$$",permalink:"/api/puppeteer.page.__"}},i={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"page-method",children:"Page.$() method"}),"\n",(0,n.jsxs)(r.p,{children:["Runs ",(0,n.jsx)(r.code,{children:"document.querySelector"})," within the page. If no element matches the selector, the return value resolves to ",(0,n.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Selector"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["A ",(0,n.jsx)(r.code,{children:"selector"})," to query page for ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," to query page for."]})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]})]})}function d(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,p=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)l.call(r,n)&&!i.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:p,props:o,_owner:a.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>l});var n=t(67294);const s={},o=n.createContext(s);function l(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);