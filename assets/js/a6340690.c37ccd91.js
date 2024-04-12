/*! For license information please see a6340690.c37ccd91.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58398],{86180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var s=r(85893),i=r(11151);const n={sidebar_label:"DeviceRequestPrompt"},c="DeviceRequestPrompt class",p={id:"api/puppeteer.devicerequestprompt",title:"DeviceRequestPrompt class",description:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth.",source:"@site/../docs/api/puppeteer.devicerequestprompt.md",sourceDirName:"api",slug:"/api/puppeteer.devicerequestprompt",permalink:"/next/api/puppeteer.devicerequestprompt",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"DeviceRequestPrompt"},sidebar:"api",previous:{title:"Device",permalink:"/next/api/puppeteer.device"},next:{title:"DeviceRequestPrompt.cancel",permalink:"/next/api/puppeteer.devicerequestprompt.cancel"}},d={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"devicerequestprompt-class",children:"DeviceRequestPrompt class"}),"\n",(0,s.jsx)(t.p,{children:"Device request prompts let you respond to the page requesting for a device through an API like WebBluetooth."}),"\n",(0,s.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export declare class DeviceRequestPrompt\n"})}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DeviceRequestPrompt"})," instances are returned via the ",(0,s.jsx)(t.a,{href:"/next/api/puppeteer.page.waitfordeviceprompt",children:"Page.waitForDevicePrompt()"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,s.jsx)(t.code,{children:"DeviceRequestPrompt"})," class."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const [deviceRequest] = Promise.all([\n  page.waitForDevicePrompt(),\n  page.click('#connect-bluetooth'),\n]);\nawait devicePrompt.select(\n  await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))\n);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"devices",children:"devices"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/next/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),"[]"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Current list of selectable devices."})})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Method"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"cancel",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.devicerequestprompt.cancel",children:"cancel()"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Cancel the prompt."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"select",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.devicerequestprompt.select",children:"select(device)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Select a device in the prompt's list."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"waitfordevice",children:(0,s.jsx)(t.a,{href:"/next/api/puppeteer.devicerequestprompt.waitfordevice",children:"waitForDevice(filter, options)"})})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Resolve to the first device in the prompt matching a filter."})})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},75251:(e,t,r)=>{var s=r(67294),i=Symbol.for("react.element"),n=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var s,n={},l=null,o=null;for(s in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(o=t.ref),t)c.call(t,s)&&!d.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:i,type:e,key:l,ref:o,props:n,_owner:p.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>p,a:()=>c});var s=r(67294);const i={},n=s.createContext(i);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);