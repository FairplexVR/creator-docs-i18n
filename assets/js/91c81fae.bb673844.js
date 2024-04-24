"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[2195],{89404:(e,s,n)=>{n.d(s,{Ay:()=>o});var r=n(74848),t=n(28453);function i(e){const s={a:"a",admonition:"admonition",p:"p",...(0,t.R)(),...e.components};return(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["This information is only relevant to sellers with access to VRChat's Creator Economy SDK.",(0,r.jsx)("br",{}),"\nIf you are interested in setting up a store in VRChat, please ",(0,r.jsx)(s.a,{href:"https://www.surveymonkey.com/r/creator-economy-application-seller",children:"apply as a seller"}),"."]})})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},99344:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(74848),t=n(28453),i=n(89404);const o={title:"Subscribers Only Area"},a=void 0,l={id:"economy/sdk/examples/subs-only",title:"Subscribers Only Area",description:"Subscribers Only Area is a prefab that sets up an area where only subscribers can enter or non subscribers cannot leave from. Use this to create exclusive areas, events, and experiences in your world.",source:"@site/docs/economy/sdk/examples/subs-only.md",sourceDirName:"economy/sdk/examples",slug:"/economy/sdk/examples/subs-only",permalink:"/creator-docs-i18n/economy/sdk/examples/subs-only",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/economy/sdk/examples/subs-only.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712783877,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{title:"Subscribers Only Area"},sidebar:"tutorialSidebar",previous:{title:"Subscribers In Instance",permalink:"/creator-docs-i18n/economy/sdk/examples/subs-instance"},next:{title:"Product Event Timed",permalink:"/creator-docs-i18n/economy/sdk/examples/timed-event"}},c={},d=[{value:"How to Import",id:"how-to-import",level:3},{value:"Prefabs Included",id:"prefabs-included",level:5},{value:"How to Use",id:"how-to-use",level:3},{value:"Inspector Parameters",id:"inspector-parameters",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Ay,{}),"\n",(0,r.jsx)(s.p,{children:"Subscribers Only Area is a prefab that sets up an area where only subscribers can enter or non subscribers cannot leave from. Use this to create exclusive areas, events, and experiences in your world."}),"\n",(0,r.jsx)(s.h3,{id:"how-to-import",children:"How to Import"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Download the ",(0,r.jsx)(s.a,{href:"https://cdn.sanity.io/files/yvg0vlb9/production/277cc7e138047d7c34451d52123607fc9970dbd4.unitypackage",children:"Unity package directly by clicking here"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Make sure your project is using the World SDK ",(0,r.jsx)(s.code,{children:"3.5.0"}),"or newer."]}),"\n",(0,r.jsx)(s.li,{children:"Import the Unity package into your project."}),"\n"]}),"\n",(0,r.jsx)(s.h5,{id:"prefabs-included",children:"Prefabs Included"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"SubscribersOnlyAreaExamplePrefab"}),": A prefab that contains a full example of how to use the SubcribersOnlyArea script."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["If viewing the example scene, you'll also need the ",(0,r.jsx)(s.a,{href:"/economy/sdk/examples/open-group-page",children:"Open Group Page"})," and ",(0,r.jsx)(s.a,{href:"/economy/sdk/examples/product-toggle",children:"Udon Product Toggle"})," prefabs. Otherwise, your project will be missing what it needs for a complete example scene."]})}),"\n",(0,r.jsx)(s.h3,{id:"how-to-use",children:"How to Use"}),"\n",(0,r.jsx)(s.p,{children:"For this (and most!) prefabs, you'll first need an UdonProduct to check for and a way for players to subscribe to this product."}),"\n",(0,r.jsx)(s.p,{children:"Once you've created a purchasable product:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Open the ",(0,r.jsx)(s.strong,{children:"SubscribersOnlyAreaExampleScene"})," from your Project window. The scene will contain a building asset to help you test and understand how the prefab works."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"PrefabScene",src:n(1488).A+"",title:"Opening the example scene.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(s.ol,{start:"2",children:["\n",(0,r.jsxs)(s.li,{children:["In the Hierarchy, click on the ",(0,r.jsx)(s.strong,{children:"SubcribersOnlyAreaExamplePrefab"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"HierarchyClick",src:n(75110).A+"",title:"Finding the prefab in the hierarchy.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(s.ol,{start:"3",children:["\n",(0,r.jsx)(s.li,{children:"In the Inspector, add which Udon Product you would like to check for when a player enters or is inside of a certain area."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"AddProduct",src:n(23473).A+"",title:"Adding a product to check for.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(s.ol,{start:"5",children:["\n",(0,r.jsxs)(s.li,{children:["In the Hierarchy, select ",(0,r.jsx)(s.strong,{children:"OpenListingSimplePrefab"}),". Paste your listing ID here. This will show a link to purchase the product where necessary.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["To get your listing ID, go to ",(0,r.jsx)(s.a,{href:"https://vrchat.com/home",children:"vrchat.com/home"}),", then Marketplace -> Storefront -> My Listings."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"AddListingID",src:n(73202).A+"",title:"Adding a listing ID.",width:"1600",height:"1000"})}),"\n",(0,r.jsxs)(s.ol,{start:"6",children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the Hierarchy, click on the ",(0,r.jsx)(s.strong,{children:"SubcribersOnlyAreaExamplePrefab"})," again. You'll see a few different settings:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Trespassing Message"})," is what appears if a player enters/is inside a subscriber-only area and does not own the correct Udon Product."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Trespassing Teleport Location"})," is where the player is sent if they try and enter or have ended up in a location they do not have access to. You can move this in your scene to wherever you like, just make sure it's outside of the subscriber-only area."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Area Colliders"})," are what keep non-subs out of your exclusive area. In this prefab, it is a box collider inside of our example asset. You should adjust this in your scenes to best fit your needs."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"TrespassingText",src:n(2607).A+"",title:"Trespassing message text.",width:"1500",height:"1000"})}),"\n",(0,r.jsxs)(s.ol,{start:"7",children:["\n",(0,r.jsxs)(s.li,{children:["If you would like to keep non subscribers inside of a specific area instead, enable ",(0,r.jsx)(s.strong,{children:"Keep People In Area"}),". If enabled, make sure your spawn and Trespassing Teleport Location are within the collider instead of outside the collider."]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"Enable this if you are creating a large, exclusive area, and want to keep all non-subs together. Think lining up to buy tickets before getting into an amusement park. We recommend you keep it disabled if you're only sectioning off a small part of your world, like an exclusive room."})}),"\n",(0,r.jsxs)(s.ol,{start:"8",children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In the Hierarchy, click on the drop down arrow next to ",(0,r.jsx)(s.strong,{children:"SubcribersOnlyAreaExamplePrefab"}),". Click on ",(0,r.jsx)(s.strong,{children:"SubscribersOnlyAreaBlockerToggle"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"In the Inspector, select the same Udon Product you chose earlier. Now, when a player owns this product, this door will be disabled."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["You can read more about disabling and enabling blockers like doors and walls on the ",(0,r.jsx)(s.a,{href:"/economy/sdk/examples/product-toggle",children:"Udon Product Toggle"})," prefab page."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Run Build & Test!"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"inspector-parameters",children:"Inspector Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Udon Product"})," - The Udon Product that counts as being a subscriber when owned."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Trespassing Message"})," - The GameObject that will be activated and shown when the player is trespassing to show them the trespassing message."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Trespassing Teleport Location"})," - The location the player will be teleported to when they have trespassed."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Area Colliders"})," - The colliders that define the area that is for subscribers/non subscribers only depending on the Keep People In Area Toggle. These will be disabled at runtime to save performance."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Keep People In Area"})," - Toggle this on to force players to stay in area instead of keeping them outside the area. Make sure your spawn and Teleport Location are inside the area if you use this."]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1488:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/SubsOnlyArea_DragIntoScene-dc24bc9257de5e119843f7b3fe71fdc6.png"},73202:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/SubsOnlyArea_OpenListingPrefab-9e017a6f1069503c2043b18c4bef3cbd.png"},75110:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/SubsOnlyArea_SelectInHierarchy-c1747bcfe798f9e70aa3445729836c18.png"},23473:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/SubsOnlyArea_SelectProduct-94422346c934bdabc81d041f4e0dfd09.png"},2607:(e,s,n)=>{n.d(s,{A:()=>r});const r=n.p+"assets/images/SubsOnlyArea_TresspassingMessage-6078ee34cd8d216f837213a1a89cf896.png"},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(96540);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);