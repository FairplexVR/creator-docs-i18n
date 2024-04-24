"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1159],{59078:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=a(74848),n=a(28453);const s={slug:"release-3-2-3",date:new Date("2023-08-09T00:00:00.000Z"),title:"Release 3.2.3",authors:["momo"],tags:["release"],draft:!1},l=void 0,o={permalink:"/creator-docs-i18n/releases/release-3-2-3",source:"@site/releases/release-3.2.3.md",title:"Release 3.2.3",description:"Summary",date:"2023-08-09T00:00:00.000Z",formattedDate:"August 9, 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-2-3",date:"2023-08-09T00:00:00.000Z",title:"Release 3.2.3",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Release 3.3.0",permalink:"/creator-docs-i18n/releases/release-3-3-0"},nextItem:{title:"Release 3.2.2",permalink:"/creator-docs-i18n/releases/release-3-2-2"}},i={authorsImageUrls:[void 0]},h=[{value:"Summary",id:"summary",level:3},{value:"Changes",id:"changes",level:3},{value:"Features",id:"features",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:'Adds "interaction passthrough" to the World Descriptor and fixes a bug in the Avatar Scaling Example Graph.'}),"\n",(0,r.jsx)(t.h3,{id:"changes",children:"Changes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Added a mask for "interaction passthrough" in the WorldDescriptor, so that world creators can allow interaction and grabs to occur through user defined layers. By default (Nothing) they will use the legacy behaviour, which was to always block interactions and grabs.',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Note: This does not change the normal Unity behaviour that if a ray begins inside a collider, it ignores that collider. This means that desktop (which begins its ray from the center of the Player Capsule) will behave differently than VR, where the tracked hand can enter colliders that the Player Capsule cannot."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Updates the Avatar Scaling Example Graph to prevent errors when running without ClientSim or when building the world."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Adds ",(0,r.jsx)(t.code,{children:"VRCPlayerApi.GetAvailableLanguages()"})," and ",(0,r.jsx)(t.code,{children:"VRCPlayerApi.GetCurrentLanguage()"}),". These methods are 'stubs' for now - providing default values in return rather than pulling the actual values until a future Client release. See ",(0,r.jsx)(t.a,{href:"https://creators.vrchat.com/worlds/udon/players/#language",children:"the Language docs"})," for more info."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>l,x:()=>o});var r=a(96540);const n={},s=r.createContext(n);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);