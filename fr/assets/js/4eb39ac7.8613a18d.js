"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8591],{56233:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(74848),o=n(28453);const r={slug:"release-3-2-1",date:new Date("2023-06-12T00:00:00.000Z"),title:"Version 3.2.1",authors:["momo"],tags:["release"],draft:!1},i=void 0,a={permalink:"/creator-docs-i18n/fr/releases/release-3-2-1",source:"@site/i18n/fr/docusaurus-plugin-content-blog/release-3.2.1.md",title:"Version 3.2.1",description:"R\xe9sum\xe9",date:"2023-06-12T00:00:00.000Z",formattedDate:"12 juin 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/fr/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-2-1",date:"2023-06-12T00:00:00.000Z",title:"Version 3.2.1",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Version 3.2.2",permalink:"/creator-docs-i18n/fr/releases/release-3-2-2"},nextItem:{title:"Version 3.2.0",permalink:"/creator-docs-i18n/fr/releases/release-3-2-0"}},l={authorsImageUrls:[void 0]},c=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3},{value:"Requires Resolver 0.1.20!",id:"requires-resolver-0120",level:2},{value:"Changements",id:"changements",level:3}];function d(e){const t={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"Traduction incompl\xe8te !",type:"warning"}),"\n",(0,s.jsx)(t.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,s.jsx)(t.p,{children:"Small fixes for Midi, PhysBones, and Udon's interaction with Blocked Users and Stations. Updates Newtonsoft Dependency to 3.0.2."}),"\n",(0,s.jsx)(t.h2,{id:"requires-resolver-0120",children:"Requires Resolver 0.1.20!"}),"\n",(0,s.jsxs)(t.p,{children:["This version of the SDK updates the Newtonsoft package used by the Base SDK as well as the ",(0,s.jsx)(t.a,{href:"https://vcc.docs.vrchat.com/vpm/resolver/",children:"Resolver"}),". You may see warnings or errors about conflicting package versions for Newtonsoft.Json until you update the resolver with the Creator Companion."]}),"\n",(0,s.jsx)(t.h3,{id:"changements",children:"Changements"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A few MIDI input timing fixes, including improved note processing, more consistent looping, and fixed Note On events with a velocity of '0' turning into Note Off events, which broke MIDI file parsing."}),"\n",(0,s.jsx)(t.li,{children:"Scaling PhysBones to zero or very small values and back no longer breaks behavior"}),"\n",(0,s.jsx)(t.li,{children:"Fixed VRCPhysBone position unable to be animated when very tiny"}),"\n",(0,s.jsx)(t.li,{children:"Blocked users will sync their position and motion state again for querying in local Udon scripts"}),"\n",(0,s.jsx)(t.li,{children:'Udon can now be used to eject players from "standing" stations, with or without station exit disabled'}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);