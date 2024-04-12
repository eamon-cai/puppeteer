/*! For license information please see 2add97c3.1fd1a08e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[24310],{37450:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var t=r(85893),s=r(11151);const a={sidebar_label:"Frame.$$eval"},i="Frame.$$eval() method",l={id:"api/puppeteer.frame.__eval",title:"Frame.$$eval() method",description:"Runs the given function on an array of elements matching the given selector in the frame.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.frame.__eval.md",sourceDirName:"api",slug:"/api/puppeteer.frame.__eval",permalink:"/api/puppeteer.frame.__eval",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"Frame.$$eval"},sidebar:"api",previous:{title:"Frame.$$",permalink:"/api/puppeteer.frame.__"},next:{title:"Frame.$eval",permalink:"/api/puppeteer.frame._eval"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"frameeval-method",children:"Frame.$$eval() method"}),"\n",(0,t.jsx)(n.p,{children:"Runs the given function on an array of elements matching the given selector in the frame."}),"\n",(0,t.jsx)(n.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."}),"\n",(0,t.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  $$eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<\n      Array<NodeFor<Selector>>,\n      Params\n    > = EvaluateFuncWith<Array<NodeFor<Selector>>, Params>,\n  >(\n    selector: Selector,\n    pageFunction: string | Func,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"selector"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Selector"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"The selector to query for."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"string | Func"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"The function to be evaluated in the frame's context. An array of elements matching the given selector will be passed to the function as its first argument."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"Params"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["Additional arguments to pass to ",(0,t.jsx)(n.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,t.jsx)(n.p,{children:"A promise to the result of the function."}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const divsCounts = await frame.$$eval('div', divs => divs.length);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},75251:(e,n,r)=>{var t=r(67294),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,r){var t,a={},o=null,d=null;for(t in void 0!==r&&(o=""+r),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(a[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===a[t]&&(a[t]=n[t]);return{$$typeof:s,type:e,key:o,ref:d,props:a,_owner:l.current}}n.Fragment=a,n.jsx=o,n.jsxs=o},85893:(e,n,r)=>{e.exports=r(75251)},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>i});var t=r(67294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);