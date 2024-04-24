"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1023],{22044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(74848),s=a(28453);const i={title:"VRC Station",slug:"vrc_station",hidden:!1,createdAt:"2017-07-06T02:54:59.005Z",updatedAt:"2023-03-15T22:59:46.292Z"},o=void 0,r={id:"worlds/components/vrc_station",title:"VRC Station",description:"Allow users to sit down. Example can be found in the SDK as VRCChair.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_station.md",sourceDirName:"worlds/components",slug:"/worlds/components/vrc_station",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_station",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_station.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"VRC Station",slug:"vrc_station",hidden:!1,createdAt:"2017-07-06T02:54:59.005Z",updatedAt:"2023-03-15T22:59:46.292Z"},sidebar:"tutorialSidebar",previous:{title:"VRC Spatial Audio Source",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_spatialaudiosource"},next:{title:"VRC Ui Shape",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_uishape"}},d={},h=[{value:"Stations used in Worlds",id:"stations-used-in-worlds",level:2},{value:"SDK2 Station with SDK2 Avatar",id:"sdk2-station-with-sdk2-avatar",level:3},{value:"SDK2 Station with SDK3 Avatar",id:"sdk2-station-with-sdk3-avatar",level:3},{value:"SDK3 Station with SDK2/SDK3 Avatar",id:"sdk3-station-with-sdk2sdk3-avatar",level:3},{value:"Stations used on Avatars",id:"stations-used-on-avatars",level:2},{value:"Parameters and Options",id:"parameters-and-options",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Allow users to sit down. Example can be found in the SDK as ",(0,n.jsx)(t.a,{href:"/worlds/examples/udon-example-scene#vrcchair3",children:"VRCChair"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This component can also be used on avatars to create seats on avatars!"}),"\n",(0,n.jsx)(t.p,{children:"This component acts a bit differently in VRCSDK2 and VRCSDK3. We support SDK2 and SDK3 stations that have animations to drive either SDK2 or SDK3-based avatars."}),"\n",(0,n.jsxs)(t.p,{children:["There is a new parameter ",(0,n.jsx)(t.code,{children:"InStation"}),", which can be used to indicate that an avatar has entered a station, but might not have Seated-IK enabled. The ",(0,n.jsx)(t.code,{children:"Seated"})," parameter is now only true if the ",(0,n.jsx)(t.code,{children:"Seated"})," property was checked on the station."]}),"\n",(0,n.jsx)(t.h2,{id:"stations-used-in-worlds",children:"Stations used in Worlds"}),"\n",(0,n.jsx)(t.h3,{id:"sdk2-station-with-sdk2-avatar",children:"SDK2 Station with SDK2 Avatar"}),"\n",(0,n.jsx)(t.p,{children:"The Seated property is used to decide what kind of IK the occupant should get when playing the animation."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If Seated is checked"}),", the standard seated IK is applied to SDK2 avatars. This is where the hip and lower body is locked into place, and the head/hands are tracked."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If Seated is unchecked"}),", the SDK2 avatar plays the animation with no IK applied."]}),"\n",(0,n.jsx)(t.h3,{id:"sdk2-station-with-sdk3-avatar",children:"SDK2 Station with SDK3 Avatar"}),"\n",(0,n.jsx)(t.p,{children:"The animation in the station will automatically have Tracking Control applied based on the Seated property of the station."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, if Seated is checked, a Temporary Pose Space is applied to adjust the viewpoint."}),"\n",(0,n.jsx)(t.h3,{id:"sdk3-station-with-sdk2sdk3-avatar",children:"SDK3 Station with SDK2/SDK3 Avatar"}),"\n",(0,n.jsxs)(t.p,{children:["SDK3 stations support the ",(0,n.jsx)(t.code,{children:"AvatarVersion"})," parameter. It is currently only set by SDK3 avatars (where ",(0,n.jsx)(t.code,{children:"AvatarVersion"})," will have a value of ",(0,n.jsx)(t.code,{children:"3"}),"), so SDK2 avatars will remain at the default value (check for ",(0,n.jsx)(t.code,{children:"AvatarVersion < 3"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Transitions to begin a seated animation should branch on ",(0,n.jsx)(t.code,{children:"AvatarVersion"})," combined with ",(0,n.jsx)(t.code,{children:"InStation"})," to begin the custom animation."]}),"\n",(0,n.jsx)(t.p,{children:"The SDK2 branch should apply a fixed seated pose (if Seated is enabled), or a full-body animation if Seated is not enabled."}),"\n",(0,n.jsx)(t.p,{children:"The SDK3 branch can choose to do any combination of animations, Tracking Control changes, and Pose Space changes that are available for SDK3 avatar. However, there will be no behind-the-scenes State Behaviors applied (which does occur in SDK2 stations)."}),"\n",(0,n.jsx)(t.p,{children:"Note that since the creator decides what type of Tracking Control to apply, the Seated property on a SDK3 station does not necessarily indicate the tracking type on SDK3 avatars."}),"\n",(0,n.jsx)(t.p,{children:"Our example Seated controllers show this branching behavior and the proper transitions and State Behavior setup for applying a seated animation."}),"\n",(0,n.jsxs)(t.admonition,{title:"Stations cannot create new Parameters via Drivers, only affect existing ones",type:"caution",children:[(0,n.jsxs)(t.p,{children:["Parameter driver ",(0,n.jsx)(t.a,{href:"/avatars/state-behaviors",children:"State Behaviors"})," in animators specified on stations will only be able to drive existing avatar parameters, not create new ones."]}),(0,n.jsx)(t.p,{children:"Generally speaking, using parameter drivers in station animators is not a supported use-case."})]}),"\n",(0,n.jsx)(t.h2,{id:"stations-used-on-avatars",children:"Stations used on Avatars"}),"\n",(0,n.jsxs)(t.p,{children:["The default ",(0,n.jsx)(t.code,{children:"VRCChair"}),' prefab included in the SDK can be used on avatars to let other players "sit" on you. You can use this to make your avatar into a car, a dinner table that moves around, and more! An avatar can have up to 6 stations.']}),"\n",(0,n.jsxs)(t.p,{children:["When using stations on an avatar that you want to animate on or off, you need to toggle specific objects and components.\n",(0,n.jsx)(t.img,{alt:"image",src:a(59722).A+"",width:"2090",height:"1880"}),"\n",(0,n.jsx)(t.strong,{children:"Do not animate or disable the toggle in the red box. Only animate the toggles in the green boxes."})," Since this involves disabling/enabling components and objects, this ",(0,n.jsx)(t.strong,{children:"must"})," be done in the FX layer."]}),"\n",(0,n.jsx)(t.p,{children:"Attempting to work around this by enabling/disabling a parent object of the chair will also cause problems. You must explicitly animate the objects highlighted above in green."}),"\n",(0,n.jsx)(t.p,{children:"Keep in mind that having avatar stations on by default (as in, having the green toggles on by default) means that if a user disables animations with the Safety System, the stations remain active, even if the wearer has animated them off."}),"\n",(0,n.jsx)(t.h2,{id:"parameters-and-options",children:"Parameters and Options"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Player Mobility"}),(0,n.jsx)(t.td,{children:"Should the player be able to move, options include:"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"- Mobile: Allow users to move when seated in station"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"- Immobilize: Prevents user from moving"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"- Immobilize For Vehicle: Same as Immobilized but optimized for moving stations"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Can Use Station From Station"}),(0,n.jsx)(t.td,{children:"If the user can switch stations when sitting in a station"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Animation Controller (optional)"}),(0,n.jsx)(t.td,{children:"Used to override normal seating animations with a custom one."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Disable Station Exit"}),(0,n.jsx)(t.td,{children:"If the user cannot exit the station by usual means, use triggers to unseat the user"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Seated"}),(0,n.jsx)(t.td,{children:"Is this a station that the user should be sitting in? See the details above to see what this indicates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Station Enter Player Location"}),(0,n.jsx)(t.td,{children:"Transform used to define where the user should be transported to when seated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Station Exit Player Location"}),(0,n.jsx)(t.td,{children:"Transform used to define where the user should be transported to when they are unseated"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Controls Object"}),(0,n.jsx)(t.td,{children:"This is used for having a station where you can control an object, such as vehicles."})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},59722:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/vrc_station-0adc923-av-station-fix-af375a452d30ecd9305839164f66db96.png"},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var n=a(96540);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);