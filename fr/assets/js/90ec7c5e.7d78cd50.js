"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[552],{77891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var r=n(74848),a=n(28453);const s={slug:"release-3-2-3",date:new Date("2023-08-09T00:00:00.000Z"),title:"Version 3.2.3",authors:["momo"],tags:["release"],draft:!1},o=void 0,i={permalink:"/creator-docs-i18n/fr/releases/release-3-2-3",source:"@site/i18n/fr/docusaurus-plugin-content-blog/release-3.2.3.md",title:"Version 3.2.3",description:"R\xe9sum\xe9",date:"2023-08-09T00:00:00.000Z",formattedDate:"9 ao\xfbt 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/fr/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-2-3",date:"2023-08-09T00:00:00.000Z",title:"Version 3.2.3",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Version 3.3.0",permalink:"/creator-docs-i18n/fr/releases/release-3-3-0"},nextItem:{title:"Version 3.2.2",permalink:"/creator-docs-i18n/fr/releases/release-3-2-2"}},l={authorsImageUrls:[void 0]},h=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:3},{value:"Changements",id:"changements",level:3},{value:"Features",id:"features",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"Traduction incompl\xe8te !",type:"warning"}),"\n",(0,r.jsx)(t.h3,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,r.jsx)(t.p,{children:'Adds "interaction passthrough" to the World Descriptor and fixes a bug in the Avatar Scaling Example Graph.'}),"\n",(0,r.jsx)(t.h3,{id:"changements",children:"Changements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:['Added a mask for "interaction passthrough" in the WorldDescriptor, so that world creators can allow interaction and grabs to occur through user defined layers. By default (Nothing) they will use the legacy behaviour, which was to always block interactions and grabs.',"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Note: This does not change the normal Unity behaviour that if a ray begins inside a collider, it ignores that collider. This means that desktop (which begins its ray from the center of the Player Capsule) will behave differently than VR, where the tracked hand can enter colliders that the Player Capsule cannot."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:"Updates the Avatar Scaling Example Graph to prevent errors when running without ClientSim or when building the world."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Adds ",(0,r.jsx)(t.code,{children:"VRCPlayerApi.GetAvailableLanguages()"})," and ",(0,r.jsx)(t.code,{children:"VRCPlayerApi.GetCurrentLanguage()"}),". These methods are 'stubs' for now - providing default values in return rather than pulling the actual values until a future Client release. See ",(0,r.jsx)(t.a,{href:"https://creators.vrchat.com/worlds/udon/players/#language",children:"the Language docs"})," for more info."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(96540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);