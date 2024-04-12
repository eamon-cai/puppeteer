/*! For license information please see 81dc5a07.097981fb.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69597],{50411:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>l,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(85893),s=n(11151);const i={sidebar_label:"PuppeteerNode"},p="PuppeteerNode class",d={id:"api/puppeteer.puppeteernode",title:"PuppeteerNode class",description:"Extends the main Puppeteer class with Node specific behaviour for fetching and downloading browsers.",source:"@site/versioned_docs/version-22.6.4/api/puppeteer.puppeteernode.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode",permalink:"/api/puppeteer.puppeteernode",draft:!1,unlisted:!1,tags:[],version:"22.6.4",frontMatter:{sidebar_label:"PuppeteerNode"},sidebar:"api",next:{title:"PuppeteerNode.connect",permalink:"/api/puppeteer.puppeteernode.connect"}},c={},a=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"puppeteernode-class",children:"PuppeteerNode class"}),"\n",(0,t.jsxs)(r.p,{children:["Extends the main ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"Puppeteer"})," class with Node specific behaviour for fetching and downloading browsers."]}),"\n",(0,t.jsxs)(r.p,{children:["If you're using Puppeteer in a Node environment, this is the class you'll get when you run ",(0,t.jsx)(r.code,{children:"require('puppeteer')"})," (or the equivalent ES ",(0,t.jsx)(r.code,{children:"import"}),")."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export declare class PuppeteerNode extends Puppeteer\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Extends:"})," ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"Puppeteer"})]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["The most common method to use is ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"launch"}),", which is used to launch and connect to a new browser instance."]}),"\n",(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer",children:"the main Puppeteer class"})," for methods common to all environments, such as ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteer.connect",children:"Puppeteer.connect()"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(r.code,{children:"PuppeteerNode"})," class."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"The following is a typical example of using Puppeteer to drive automation:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com');\n  // other actions...\n  await browser.close();\n})();\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Once you have created a ",(0,t.jsx)(r.code,{children:"page"})," you have access to a large API to interact with the page, navigate, or find certain elements in that page. The ",(0,t.jsx)(r.a,{href:"/api/puppeteer.page",children:"`page` documentation"})," lists all the available methods."]}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"defaultproduct",children:"defaultProduct"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.product",children:"Product"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["The name of the browser that will be launched by default. For ",(0,t.jsx)(r.code,{children:"puppeteer"}),", this is influenced by your configuration. Otherwise, it's ",(0,t.jsx)(r.code,{children:"chrome"}),"."]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"lastlaunchedproduct",children:"lastLaunchedProduct"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.product",children:"Product"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The name of the browser that was last launched."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"product",children:"product"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"readonly, deprecated"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Deprecated:"})}),(0,t.jsxs)(r.p,{children:["Do not use as this field as it does not take into account multiple browsers of different types. Use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode#defaultproduct",children:"defaultProduct"})," or ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode#lastlaunchedproduct",children:"lastLaunchedProduct"}),"."]})]})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"connect",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.connect",children:"connect(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"This method attaches Puppeteer to an existing browser instance."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"defaultargs",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.defaultargs",children:"defaultArgs(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"executablepath",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.executablepath",children:"executablePath(channel)"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The default executable path."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"launch",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"launch(options)"})})}),(0,t.jsx)("td",{}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),(0,t.jsxs)(r.p,{children:["When using with ",(0,t.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,t.jsx)(r.a,{href:"/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,t.jsx)(r.a,{href:"/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]})]})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"trimcache",children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.trimcache",children:"trimCache()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:["Removes all non-current Firefox and Chrome binaries in the cache directory identified by the provided Puppeteer configuration. The current browser version is determined by resolving PUPPETEER_REVISIONS from Puppeteer unless ",(0,t.jsx)(r.code,{children:"configuration.browserRevision"})," is provided."]})})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},75251:(e,r,n)=>{var t=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,i={},a=null,o=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(o=r.ref),r)p.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:d.current}}r.Fragment=i,r.jsx=a,r.jsxs=a},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>p});var t=n(67294);const s={},i=t.createContext(s);function p(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:p(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);