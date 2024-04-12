/*! For license information please see a837e1bf.94be94ae.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65462],{3427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(85893),r=n(11151);const s={sidebar_label:"BrowserContext.isIncognito"},i="BrowserContext.isIncognito() method",c={id:"api/puppeteer.browsercontext.isincognito",title:"BrowserContext.isIncognito() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.browsercontext.isincognito.md",sourceDirName:"api",slug:"/api/puppeteer.browsercontext.isincognito",permalink:"/api/puppeteer.browsercontext.isincognito",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"BrowserContext.isIncognito"},sidebar:"api",previous:{title:"BrowserContext.close",permalink:"/api/puppeteer.browsercontext.close"},next:{title:"BrowserContext.newPage",permalink:"/api/puppeteer.browsercontext.newpage"}},a={},p=[{value:"Signature:",id:"signature",level:4}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"browsercontextisincognito-method",children:"BrowserContext.isIncognito() method"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,o.jsxs)(t.p,{children:["In Chrome, the ",(0,o.jsx)(t.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"}),' can also be "incognito" if configured via the arguments and in such cases this getter returns wrong results (see ',(0,o.jsx)(t.a,{href:"https://github.com/puppeteer/puppeteer/issues/8836",children:"https://github.com/puppeteer/puppeteer/issues/8836"}),'). Also, the term "incognito" is not applicable to other browsers. To migrate, check the ',(0,o.jsx)(t.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," instead: in Chrome all non-default contexts are incognito, and the default context might be incognito if you provide the ",(0,o.jsx)(t.code,{children:"--incognito"})," argument when launching the browser."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Whether this ",(0,o.jsx)(t.a,{href:"/api/puppeteer.browsercontext",children:"browser context"})," is incognito."]}),"\n",(0,o.jsxs)(t.p,{children:["In Chrome, the ",(0,o.jsx)(t.a,{href:"/api/puppeteer.browser.defaultbrowsercontext",children:"default browser context"})," is the only non-incognito browser context."]}),"\n",(0,o.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"class BrowserContext {\n  abstract isIncognito(): boolean;\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,o.jsx)(t.p,{children:"boolean"})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var o=n(67294),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var o,s={},p=null,l=null;for(o in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:p,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);