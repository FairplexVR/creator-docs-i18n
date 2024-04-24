"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[905],{40236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=n(74848),r=n(28453);const a={},o="Expression Menu and Controls",i={id:"avatars/expression-menu-and-controls",title:"Expression Menu and Controls",description:"This document is written with the assumption that you know a bit about Unity Animators.",source:"@site/docs/avatars/expression-menu-and-controls.md",sourceDirName:"avatars",slug:"/avatars/expression-menu-and-controls",permalink:"/creator-docs-i18n/avatars/expression-menu-and-controls",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/avatars/expression-menu-and-controls.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706320042,formattedLastUpdatedAt:"Jan 27, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Avatar Scaling",permalink:"/creator-docs-i18n/avatars/avatar-scaling"},next:{title:"Playable Layers",permalink:"/creator-docs-i18n/avatars/playable-layers"}},h={},d=[{value:"Creating an Expression Menu",id:"creating-an-expression-menu",level:2},{value:"Types of Controls",id:"types-of-controls",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"expression-menu-and-controls",children:"Expression Menu and Controls"}),"\n",(0,s.jsx)(t.admonition,{title:"Unity Knowledge Required",type:"caution",children:(0,s.jsxs)(t.p,{children:["This document is written with the assumption that you know a bit about ",(0,s.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html",children:"Unity Animators"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"creating-an-expression-menu",children:"Creating an Expression Menu"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Right-click in your Assets folder and select ",(0,s.jsx)(t.code,{children:"Create/VRC Scriptable Objects/Expressions Menu"})]}),"\n",(0,s.jsx)(t.li,{children:"Open your expressions menu to customize it. (See step 13)"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Before you continue, you'll need to create an ",(0,s.jsx)(t.strong,{children:"ExpressionParameters"})," asset, where you can define all of the avatar's custom parameters."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"What expression parameters look like by default.",src:n(91518).A+"",width:"836",height:"372"})}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Right-click in your Assets folder and select ",(0,s.jsx)(t.strong,{children:"Create > VRC Scriptable Objects > Expression Parameters"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Select the expression parameters asset to customize it."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The asset contains ",(0,s.jsx)(t.a,{href:"https://creators.vrchat.com/avatars/animator-parameters/#default-av3-aliasing",children:"three parameters by default"})," (",(0,s.jsx)(t.code,{children:"VRCEmote"}),", ",(0,s.jsx)(t.code,{children:"VRCFaceBlendH"}),", ",(0,s.jsx)(t.code,{children:"VRCFaceBlendV"}),"). You can safely delete them unless you use them in your avatar or don't want to create your own expression menu."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Enter the names of your parameters."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"These names should match the parameters in your animators."}),"\n",(0,s.jsxs)(t.li,{children:["You can categorize your parameters by using ",(0,s.jsx)(t.code,{children:"/"}),". For example, ",(0,s.jsx)(t.code,{children:"Clothing/Hoodie"})," and ",(0,s.jsx)(t.code,{children:"Clothing/Hat"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["VRChat has a few ",(0,s.jsx)(t.a,{href:"https://creators.vrchat.com/avatars/animator-parameters/#parameters",children:"built-in parameters"}),". You can always use them in animators - don't add them to your own expression parameters."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Choose a type for each parameter."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Int"})," has a range of 0-255."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Float"})," has a range of -1.0 to 1.0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"Bool"})," is either true or false."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Change the ",(0,s.jsx)(t.code,{children:"Default"})," value to set the default value of each parameter. When the avatar is reset, the parameter will revert to this value."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Enable ",(0,s.jsx)(t.code,{children:"Saved"})," for parameters that shouldn't reset themselves whenever the avatar is loaded. If your avatar has customization options or settings, ",(0,s.jsx)(t.code,{children:"Saved"})," will prevent them from being reset after switching to a different world or avatar."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Enable ",(0,s.jsx)(t.code,{children:"Synced"})," if the state of this parameter should be sent to all other players over the network."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Next, you should add both assets to your avatar descriptor."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"What expression parameters look like by default.",src:n(56450).A+"",width:"826",height:"94"})}),"\n",(0,s.jsxs)(t.ol,{start:"10",children:["\n",(0,s.jsx)(t.li,{children:'Select your avatar descriptor and scroll down to the "Expressions" section.'}),"\n",(0,s.jsx)(t.li,{children:'Change the "Menu" property to your expressions menu.'}),"\n",(0,s.jsx)(t.li,{children:'Change the "Parameters" property to your expression parameters.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"After adding both assets to your avatar descriptor, all your expression parameters will now be available in the expression menu, allowing you to customize it."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"What expression parameters look like by default.",src:n(62337).A+"",width:"838",height:"267"})}),"\n",(0,s.jsxs)(t.ol,{start:"13",children:["\n",(0,s.jsx)(t.li,{children:'In the inspector, click "Add Control." Up to 8 controls can be added to a single menu.'}),"\n",(0,s.jsxs)(t.li,{children:["Choose a name and ",(0,s.jsx)(t.a,{href:"/avatars/expression-menu-and-controls#types-of-controls",children:"type"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"You can also add icons, and submenus, or change the order of the controls here."}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["You can find some default icons in ",(0,s.jsx)(t.code,{children:"VRCSDK/Assets3/Expression Menu Icons/"})," ."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"types-of-controls",children:"Types of Controls"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Button"})," - Sets a parameter when clicked, then resets after the sync/reset has been sent-- usually after about a second. Cannot be held down."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Toggle"})," - Sets a parameter when the toggle is on, resets when the toggle is turned off"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Sub-Menu"})," - Opens another Expression Menu.  Additionally it may also set a parameter when entered, if so that parameter is reset to zero when you exit that menu.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Important note:"})," You can put sub-menus into sub-menus!"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Two Axis Puppet"})," - Opens an axis puppet menu that controls two float parameters depending on the joystick position. The parameters are mapped to vertical and horizontal. The float values range from -1.0 to 1.0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Four Axis Puppet"})," - Opens an axis puppet menu that controls four float parameters depending on the joystick position.  The parameters are mapped in order, up, right, down, left. The float values are 0.0 to 1.0."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Radial Puppet"})," - Open a radial puppet menu that controls a single float parameter, kind of like a progress bar that you can fill! The float value is 0.0 to 1.0."]}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{title:"Puppet Menu Sync",type:"note",children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"Puppet"})," controls use ",(0,s.jsx)(t.a,{href:"/avatars/animator-parameters#sync-types",children:(0,s.jsx)(t.strong,{children:"IK Sync"})})," when open. If you want sync that is as close as possible to your inputs for fast/quick movements, you should use a Puppet menu."]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Button"}),"/",(0,s.jsx)(t.strong,{children:"Toggle"})," uses ",(0,s.jsx)(t.strong,{children:"Playable Sync"}),' which updates on-demand, instead of continuously, and is appropriate for things you "turn on/off" but don\'t need highly precise syncing.']}),(0,s.jsx)(t.p,{children:"Puppet menu sync always updates at the maximum rate available, and it smooths the values for remote users - much better when timed replication is important."})]}),"\n",(0,s.jsx)(t.p,{children:"Puppet controls may also set a parameter when entering the menu."}),"\n",(0,s.jsx)(t.p,{children:"If you use Joystick press to exit, then the parameters being puppeted will remain as their value until you change them again-- either by re-entering a puppet menu that uses those params, or using them elsewhere."})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},56450:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},62337:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/menu-default-f666a3e4a377f18ed38e0bd7b152abe9.png"},91518:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/params-default-bca2f4d4a534bc3cb48779afedd6568f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);