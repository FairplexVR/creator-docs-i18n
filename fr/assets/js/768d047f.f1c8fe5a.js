"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3795],{45136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(74848),i=n(28453);const r={title:"Network Specs and Tips",slug:"network-details",hidden:!1,createdAt:"2021-05-13T17:51:06.418Z",updatedAt:"2021-05-18T23:37:43.783Z"},a="Tips",s={id:"worlds/udon/networking/network-details",title:"Network Specs and Tips",description:"Try not to sync everything; consider what you can determine from the minimal amount of information shared. For example: if an object will move on a fixed or predictable path, then its position may not need to be synchronized and instead its initial location and velocity may be sufficient.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-details.md",sourceDirName:"worlds/udon/networking",slug:"/worlds/udon/networking/network-details",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-details",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-details.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Network Specs and Tips",slug:"network-details",hidden:!1,createdAt:"2021-05-13T17:51:06.418Z",updatedAt:"2021-05-18T23:37:43.783Z"},sidebar:"tutorialSidebar",previous:{title:"Network Components",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-components"},next:{title:"Network ID Utility",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-id-utility"}},d={},l=[];function c(e){const t={h1:"h1",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(t.p,{children:"Try not to sync everything; consider what you can determine from the minimal amount of information shared. For example: if an object will move on a fixed or predictable path, then its position may not need to be synchronized and instead its initial location and velocity may be sufficient."}),"\n",(0,o.jsx)(t.p,{children:"If there exists complicated game logic then try to have it on one object; having important logic state shared across many objects may cause de-synchronization due to ownership differences."}),"\n",(0,o.jsx)(t.p,{children:"Continuous synchronization is intended for data that changes frequently and where intermediary values don't matter; like the position of an erratically moving transform. VRChat will perform intermediary value approximation to recover lost data, and will attempt to optimize network data for continuous synchronization."}),"\n",(0,o.jsxs)(t.p,{children:["Manual synchronization is intended for data that changes infrequently and where intermediary values matter; like the positions of pieces on a chess board.\n",(0,o.jsx)(t.strong,{children:"Users should not expect high speed updates with manual serialization."})]}),"\n",(0,o.jsx)(t.p,{children:"If you have multiple UdonBehaviours on an object, the sync method will default to the most restrictive settings - a Manual UdonBehaviour and a Continuous one on the same object will both act as manual."}),"\n",(0,o.jsx)(t.h1,{id:"data-and-specs",children:"Data and Specs"}),"\n",(0,o.jsx)(t.p,{children:"Note: all specs subject to change, they will be updated here if they do."}),"\n",(0,o.jsx)(t.p,{children:"You can see some specific information about the data used per-object in Debug View 6."}),"\n",(0,o.jsxs)(t.p,{children:["Continuous sync is limited to roughly ",(0,o.jsx)(t.strong,{children:"200 bytes"})," per serialization."]}),"\n",(0,o.jsxs)(t.p,{children:["Manual sync is limited to roughly ",(0,o.jsx)(t.strong,{children:"49 Kilobytes"})," per serialization."]}),"\n",(0,o.jsx)(t.p,{children:"Each manually-synced object is rate limited as a factor of the data size. The more it sends, the more its send rate is limited. You can call RequestSerialization as many times as you want, but it will wait until enough time has passed before calling OnPreSerialization, sending the data, and calling OnPostSerialization with the result."}),"\n",(0,o.jsxs)(t.p,{children:["A single synced string can have roughly ",(0,o.jsx)(t.strong,{children:"126 characters"})," in Continuous sync mode."]}),"\n",(0,o.jsxs)(t.p,{children:["You can send out about ",(0,o.jsx)(t.strong,{children:"11kb per second"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The latency between invoking SetOwner and the new values being sent out is roughly the round-trip time between the executor and the owner or if the owner did it, the owner and the receiver."}),"\n",(0,o.jsx)(t.p,{children:"If you exceed limits, the UdonBehaviour will fail to raise the network event and write errors in the logs. The logic of the UdonBehaviour will continue to work, but the data will not be sent nor received."})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var o=n(96540);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);