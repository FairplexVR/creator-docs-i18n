"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2024],{13:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>a});var s=r(74848),n=r(28453);const d={title:"VRC Scene Descriptor",slug:"vrc_scenedescriptor",hidden:!1,createdAt:"2017-07-06T00:43:48.565Z",updatedAt:"2019-11-23T01:41:31.381Z"},i=void 0,o={id:"worlds/components/vrc_scenedescriptor",title:"VRC Scene Descriptor",description:"Describes your VRChat world. Required for every Unity scene you'd like to use as a VRChat world.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_scenedescriptor.md",sourceDirName:"worlds/components",slug:"/worlds/components/vrc_scenedescriptor",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_scenedescriptor",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_scenedescriptor.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"VRC Scene Descriptor",slug:"vrc_scenedescriptor",hidden:!1,createdAt:"2017-07-06T00:43:48.565Z",updatedAt:"2019-11-23T01:41:31.381Z"},sidebar:"tutorialSidebar",previous:{title:"VRC Portal Marker",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_portalmarker"},next:{title:"VRC Spatial Audio Source",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_spatialaudiosource"}},c={},a=[];function l(e){const t={a:"a",em:"em",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Describes your VRChat world. Required for every Unity scene you'd like to use as a VRChat world."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Spawns"}),(0,s.jsx)(t.td,{children:"An array of transforms used as reference for spawn points of the world."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Spawn Order"}),(0,s.jsx)(t.td,{children:"Order in which spawn locations should be used, options include:"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- First: Always use the first spawn"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Sequential: In the order that spawns are listed"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Random: Spawns users randomly"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Demo: The spawn point represents the center of your room scale meaning, for example, if you're a meter away from the center of your room scale, you spawn a meter away from the spawn."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Spawn Orientation"}),(0,s.jsx)(t.td,{children:"Orientation the user will be spawned in at, options include:"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Default: The VRChat Default spawn setting (Currently Align Player With Spawn Point)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Align Player With Spawn Point: Aligns player with the rotation of the spawn transform"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Align Room With Spawn Point: Aligns players' room scale to be centered on the spawn point"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Reference Camera"}),(0,s.jsx)(t.td,{children:"Settings from this camera are applied to users in the room. Can be an object in the scene or prefab."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Respawn Height -Y"}),(0,s.jsx)(t.td,{children:"Height at which players respawn and pickups are respawned or destroyed."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Object Behaviour At Respawn"}),(0,s.jsx)(t.td,{children:"What should pickups do when they fall out of the world, options include:"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Destroy: Delete the pickup"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"- Respawn: Respawn the pickup to the location it started at"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Forbid Free Modification"}),(0,s.jsx)(t.td,{children:"If true, non-sync'd objects can't be manipulated by non-master."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Forbid User Portals"}),(0,s.jsx)(t.td,{children:"Prevent users from opening portals from the world menu."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"User Custom Voice Falloff Range"}),(0,s.jsx)(t.td,{children:"Enable the next couple options which control the voice falloff range."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Voice Falloff Near"}),(0,s.jsx)(t.td,{children:"The distance where users' voices start reducing in volume."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Voice Falloff Far"}),(0,s.jsx)(t.td,{children:"The distance where users' voices become inaudible."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Unity Version"}),(0,s.jsx)(t.td,{children:"Unity version being used; you should never need to touch this."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dynamic Prefabs"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"Deprecated, unused in the VRChat SDK3."})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Dynamic Materials"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.em,{children:"Deprecated, unused in the VRChat SDK3."})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Interact Passthrough"}),(0,s.jsxs)(t.td,{children:["A mask defining which User Layers should allow interactions to pass through. See the ",(0,s.jsx)(t.a,{href:"/worlds/layers",children:"Layers"})," page for more info."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var s=r(96540);const n={},d=s.createContext(n);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);