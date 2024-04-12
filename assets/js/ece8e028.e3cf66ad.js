/*! For license information please see ece8e028.e3cf66ad.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72576],{80689:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=t(85893),a=t(11151);const s={sidebar_label:"Page.$eval"},l="Page.$eval() method",i={id:"api/puppeteer.page._eval",title:"Page.$eval() method",description:"This method runs document.querySelector within the page and passes the result as the first argument to the pageFunction.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.page._eval.md",sourceDirName:"api",slug:"/api/puppeteer.page._eval",permalink:"/api/puppeteer.page._eval",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"Page.$eval"},sidebar:"api",previous:{title:"Page.$$eval",permalink:"/api/puppeteer.page.__eval"},next:{title:"Page.addScriptTag",permalink:"/api/puppeteer.page.addscripttag"}},c={},o=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"pageeval-method",children:"Page.$eval() method"}),"\n",(0,r.jsxs)(n.p,{children:["This method runs ",(0,r.jsx)(n.code,{children:"document.querySelector"})," within the page and passes the result as the first argument to the ",(0,r.jsx)(n.code,{children:"pageFunction"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  $eval<\n    Selector extends string,\n    Params extends unknown[],\n    Func extends EvaluateFuncWith<NodeFor<Selector>, Params> = EvaluateFuncWith<\n      NodeFor<Selector>,\n      Params\n    >,\n  >(\n    selector: Selector,\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<Awaited<ReturnType<Func>>>;\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(n.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["the ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"selector"})," to query for"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"pageFunction"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Func | string"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["the function to be evaluated in the page context. Will be passed the result of ",(0,r.jsx)(n.code,{children:"document.querySelector(selector)"})," as its first argument."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"args"})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Params"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["any additional arguments to pass through to ",(0,r.jsx)(n.code,{children:"pageFunction"}),"."]})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(n.p,{children:"Promise<Awaited<ReturnType<Func>>>"}),"\n",(0,r.jsxs)(n.p,{children:["The result of calling ",(0,r.jsx)(n.code,{children:"pageFunction"}),". If it returns an element it is wrapped in an ",(0,r.jsx)(n.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),", else the raw value itself is returned."]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(n.p,{children:["If no element is found matching ",(0,r.jsx)(n.code,{children:"selector"}),", the method will throw an error."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"pageFunction"})," returns a promise ",(0,r.jsx)(n.code,{children:"$eval"})," will wait for the promise to resolve and then return its value."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const searchValue = await page.$eval('#search', el => el.value);\nconst preloadHref = await page.$eval('link[rel=preload]', el => el.href);\nconst html = await page.$eval('.main-container', el => el.outerHTML);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you are using TypeScript, you may have to provide an explicit type to the first argument of the ",(0,r.jsx)(n.code,{children:"pageFunction"}),". By default it is typed as ",(0,r.jsx)(n.code,{children:"Element"}),", but you may need to provide a more specific sub-type:"]}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// if you don't provide HTMLInputElement here, TS will error\n// as `value` is not on `Element`\nconst searchValue = await page.$eval(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The compiler should be able to infer the return type from the ",(0,r.jsx)(n.code,{children:"pageFunction"})," you provide. If it is unable to, you can use the generic type to tell the compiler what return type you expect from ",(0,r.jsx)(n.code,{children:"$eval"}),":"]}),"\n",(0,r.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"// The compiler can infer the return type in this case, but if it can't\n// or if you want to be more explicit, provide it as the generic type.\nconst searchValue = await page.$eval<string>(\n  '#search',\n  (el: HTMLInputElement) => el.value\n);\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var r=t(67294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,d=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)l.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:o,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);