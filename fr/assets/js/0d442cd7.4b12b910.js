"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4321],{89404:(e,n,o)=>{o.d(n,{Ay:()=>i});var r=o(74848),t=o(28453);function s(e){const n={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This information is only relevant to sellers with access to VRChat's Creator Economy SDK.",(0,r.jsx)("br",{}),"\nIf you are interested in setting up a store in VRChat, please ",(0,r.jsx)(n.a,{href:"https://www.surveymonkey.com/r/creator-economy-application-seller",children:"apply as a seller"}),"."]})})}function i(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},54680:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=o(74848),t=o(28453),s=o(89404);const i={title:"Store Debug Logging"},a=void 0,c={id:"economy/sdk/examples/debug-logging",title:"Store Debug Logging",description:"Store Debug Logging is a prefab that helps log store-related events on an in-world console or screen. You can set this up in your worlds to give supporters a way to check what purchases they've made, what purchases they can make, and to open your store.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/economy/sdk/examples/debug-logging.md",sourceDirName:"economy/sdk/examples",slug:"/economy/sdk/examples/debug-logging",permalink:"/creator-docs-i18n/fr/economy/sdk/examples/debug-logging",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/economy/sdk/examples/debug-logging.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821541,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Store Debug Logging"},sidebar:"tutorialSidebar",previous:{title:"Open Group Page",permalink:"/creator-docs-i18n/fr/economy/sdk/examples/open-group-page"},next:{title:"Floating Overhead Buy Indicator",permalink:"/creator-docs-i18n/fr/economy/sdk/examples/floating-overhead"}},l={},d=[{value:"How to Import",id:"how-to-import",level:3},{value:"Prefabs Included",id:"prefabs-included",level:5},{value:"How to Use",id:"how-to-use",level:3},{value:"Inspector Parameters",id:"inspector-parameters",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{}),"\n",(0,r.jsx)(n.p,{children:"Store Debug Logging is a prefab that helps log store-related events on an in-world console or screen. You can set this up in your worlds to give supporters a way to check what purchases they've made, what purchases they can make, and to open your store."}),"\n",(0,r.jsx)(n.h3,{id:"how-to-import",children:"How to Import"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the ",(0,r.jsx)(n.a,{href:"https://cdn.sanity.io/files/yvg0vlb9/production/44219d76aa08adb0b6511e37891a0011f40e8dcb.unitypackage",children:"Unity package directly by clicking here"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Make sure your project is using the World SDK ",(0,r.jsx)(n.code,{children:"3.5.0"})," or newer."]}),"\n",(0,r.jsx)(n.li,{children:"Import the Unity package into your project."}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"prefabs-included",children:"Prefabs Included"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"StoreDebugLoggingPrefab"}),": A prefab that contains a store-related console window, which supporters can interact with."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["If viewing the example scene, you'll also need the ",(0,r.jsx)(n.a,{href:"/economy/sdk/examples/open-group-page",children:"Open Group Page"})," prefab. Otherwise, your project will be missing what it needs for a complete scene."]})}),"\n",(0,r.jsx)(n.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,r.jsx)(n.p,{children:"For this (and most!) prefabs, you'll first need an UdonProduct to check for and a way for players to subscribe to this product."}),"\n",(0,r.jsx)(n.p,{children:"Once you've created a purchasable product:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Drag the ",(0,r.jsx)(n.strong,{children:"StoreDebugLoggingPrefab"})," into your scene."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"EventPrefabtoScene",src:o(95764).A+"",title:"Dragging the prefab into scene.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["In the inspector, locate the ",(0,r.jsx)(n.strong,{children:"Products"})," drop down and drag a product over. You can also drag multiple products at once. The order in the inspector is not important, but make sure you only list each product once."]}),"\n"]}),"\n",(0,r.jsx)("div",{class:"video-container",children:(0,r.jsx)("iframe",{src:"/img/economy/examples/DebugLogging_AddProduct.mp4",title:"Overhead Indicator",frameborder:"0",allow:"encrypted-media; gyroscope; web-share",allowfullscreen:!0})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["Fill the ",(0,r.jsx)(n.strong,{children:"Group Id"})," variable with your group ID.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Find your group ID by opening your group ",(0,r.jsx)(n.a,{href:"https://vrchat.com/home/groups",children:"on the website"})," and copying the ID in the address bar of your browser. For example: ",(0,r.jsx)(n.code,{children:"grp_a4f791af-a167-4c91-b849-2e37e37f509a"}),". Any short code (i.e. ",(0,r.jsx)(n.code,{children:"EXAMPL.9920"}),") will ",(0,r.jsx)(n.strong,{children:"not"})," work."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"DebugGroupID",src:o(92522).A+"",title:"Adding your Group ID.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Debug Text"})," object, ",(0,r.jsx)(n.strong,{children:"Scrollbar"}),", and ",(0,r.jsx)(n.strong,{children:"Auto Scroll Toggle"})," are text and UI elements that should be left as is."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run Build & Test!"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"inspector-parameters",children:"Inspector Parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Products"})," - The Udon products a user can purchase, with a ",(0,r.jsx)(n.code,{children:"Size"})," value for the number of products and ",(0,r.jsx)(n.code,{children:"Element"})," values for each product link."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Debug Text"})," - The text that appears when a player clicks one of the buttons on the console."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Group Id"})," - The ID for your group, which contains your store and purchasable products."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Scrollbar"})," - The scrollbar that shows up in the console."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Auto Scroll Toggle"})," - The toggle that lets players turn auto scrolling on or off."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},95764:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/DebugLogging_AddToScene-751e4cefdf0cc0a59b075b9d7a032bd5.png"},92522:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/DebugLogging_GroupId-12a1f6ab1a55533128bdbf0b5e7fa0d7.png"},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);