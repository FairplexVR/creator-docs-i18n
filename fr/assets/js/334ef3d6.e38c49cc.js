"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8824],{32256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(74848),i=n(28453);const s={title:"Network ID Utility",slug:"network-id-utility",hidden:!1,createdAt:"2022-10-26T00:03:35.308Z",updatedAt:"2022-10-26T00:03:35.308Z"},r="Network ID Import and Export Utility",a={id:"worlds/udon/networking/network-id-utility",title:"Network ID Utility",description:"A network ID is the identifier that is used to determine which object is which when it comes to networking. In most cases, you don\u2019t need to worry about this, but it can come up when working with cross-platform worlds where players are technically loading two different versions of your world.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-id-utility.md",sourceDirName:"worlds/udon/networking",slug:"/worlds/udon/networking/network-id-utility",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-id-utility",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-id-utility.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Network ID Utility",slug:"network-id-utility",hidden:!1,createdAt:"2022-10-26T00:03:35.308Z",updatedAt:"2022-10-26T00:03:35.308Z"},sidebar:"tutorialSidebar",previous:{title:"Network Specs and Tips",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-details"},next:{title:"Player API",permalink:"/creator-docs-i18n/fr/worlds/udon/players/"}},c={},d=[];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"A network ID is the identifier that is used to determine which object is which when it comes to networking. In most cases, you don\u2019t need to worry about this, but it can come up when working with cross-platform worlds where players are technically loading two different versions of your world."}),"\n",(0,o.jsx)(t.p,{children:"Network IDs are the link between those different versions, to make sure that everybody is seeing the same thing and that the data is being transmitted to the correct objects."}),"\n",(0,o.jsx)(t.p,{children:"To be more specific, a network ID is simply a number assigned to a GameObject. For example, let's assume you have a beach ball with the ID 1 and an ice cream cone with the ID 2. If these get mixed up, then you may try to kick around a beach ball while somebody else sees you kicking around an ice cream!"}),"\n",(0,o.jsx)(t.p,{children:"To deal with these potential issues and to make sure that your different scenes are in sync, we have created a network ID utility."}),"\n",(0,o.jsx)(t.h1,{id:"network-id-import-and-export-utility",children:"Network ID Import and Export Utility"}),"\n",(0,o.jsxs)(t.p,{children:["This utility allows you to save and transfer network IDs between scenes or projects. It can be found in the Unity Editor, under ",(0,o.jsx)(t.code,{children:"VRChat SDK/Utilities/Network ID Import and Export Utility"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"You should only need to use this utility if you are developing a cross-platform world and your different versions are in different scenes or projects."})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"network-id-utility-9936cee-image1.png",src:n(74675).A+"",width:"475",height:"250"})}),"\n",(0,o.jsxs)(t.p,{children:["When using this tool, you will see a list of all your network IDs in the entire scene. If you don\u2019t have this yet, you can click Regenerate Scene IDs.\n",(0,o.jsx)(t.img,{alt:"network-id-utility-05130bf-image4.png",src:n(95689).A+"",width:"1037",height:"727"})]}),"\n",(0,o.jsxs)(t.p,{children:["When you are ready to transfer network IDs from one scene to another, click on the ",(0,o.jsx)(t.strong,{children:"Export"})," button to save the file somewhere. Then go to the other scene and click ",(0,o.jsx)(t.strong,{children:"Import"}),", and select that file."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Network IDs in this format are saved as a path to the object."})," As such, try to keep the path to each object the same between your scenes. Other objects in the scene that do not have any networking (such as meshes) do not matter and they can be different between your scenes, as long as they do not conflict with something that does need to be synced.\n",(0,o.jsx)(t.img,{alt:"network-id-utility-3b30a4e-image5.png",src:n(51975).A+"",width:"1044",height:"792"})]}),"\n",(0,o.jsxs)(t.p,{children:["If everything matches between your two scenes, you should see one big block with an ",(0,o.jsx)(t.strong,{children:"Accept All"})," button. Go ahead and click that, and you\u2019re good to go!"]}),"\n",(0,o.jsx)(t.h1,{id:"resolving-conflicts",children:"Resolving Conflicts"}),"\n",(0,o.jsxs)(t.p,{children:["There are several conflict resolution tools within this utility.\n",(0,o.jsx)(t.img,{alt:"network-id-utility-22a9bcf-image3.png",src:n(74630).A+"",width:"1043",height:"169"})]}),"\n",(0,o.jsxs)(t.p,{children:["Here is an example of an object that exists in the file but does not exist in the scene. The file says that there is a network ID at this path, but it can\u2019t find an object with that path. At this point, you can choose to either ignore it or specify a different object. If you know for sure that this is an object which doesn\u2019t need to exist in this scene, then you can safely ignore it. However, if it is an object that should exist in your scene but simply has a different name, then you can select it. Once you\u2019ve resolved this conflict, it will move down to the section where you can accept the network ID.\n",(0,o.jsx)(t.img,{alt:"network-id-utility-c5175f8-image2.png",src:n(67).A+"",width:"1035",height:"190"})]}),"\n",(0,o.jsx)(t.p,{children:"Here's another example where an object says it has the network ID of 25, but the file says that a different path should have 25."}),"\n",(0,o.jsx)(t.p,{children:"This, and many other odd situations, can only happen if the scene has existing network IDs before you tried to import a new file on top. If you are copying IDs between scenes, then most likely you will want to clear IDs before importing so that you don\u2019t get this issue. However, these options do exist in case you need to do something very specific like attempt to repair a scene without breaking some existing network IDs."}),"\n",(0,o.jsx)(t.p,{children:"If you need to resolve these conflicts, you can choose to either click the Ignore All button which will not touch the scene at all, or you can hand-pick which one gets the ID. When you click the \u201cSelect\u201d button that will resolve the conflict by applying the ID to the object that you have selected. This can resolve one or more conflicts, so don't be surprised if many conflicts disappear when you resolve just one."})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},95689:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/network-id-utility-05130bf-image4-df590f8f96a2a5c61ba105ad8349adba.png"},74630:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/network-id-utility-22a9bcf-image3-0ca50c66ef8ad42635ce2c397b041180.png"},51975:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/network-id-utility-3b30a4e-image5-8d9b818c5d9336dcfe7726f441abc574.png"},74675:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/network-id-utility-9936cee-image1-5f77afbf0a83905fd9140e09d8136cf0.png"},67:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/network-id-utility-c5175f8-image2-ac6d05f1add913afa162860e0157705e.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);