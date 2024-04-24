"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5452],{37237:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var r=i(74848),d=i(28453);const l={title:"Event Nodes",slug:"event-nodes",hidden:!1,createdAt:"2020-03-20T20:08:22.541Z",updatedAt:"2022-10-18T23:46:02.951Z"},o=void 0,t={id:"worlds/udon/graph/event-nodes",title:"Event Nodes",description:'This is a list of Udon Nodes that are considered "Events".',source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/graph/event-nodes.md",sourceDirName:"worlds/udon/graph",slug:"/worlds/udon/graph/event-nodes",permalink:"/creator-docs-i18n/fr/worlds/udon/graph/event-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/graph/event-nodes.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Event Nodes",slug:"event-nodes",hidden:!1,createdAt:"2020-03-20T20:08:22.541Z",updatedAt:"2022-10-18T23:46:02.951Z"},sidebar:"tutorialSidebar",previous:{title:"Udon Node Graph",permalink:"/creator-docs-i18n/fr/worlds/udon/graph/"},next:{title:"Graph Elements",permalink:"/creator-docs-i18n/fr/worlds/udon/graph/graph-elements"}},s={},a=[{value:"Interact",id:"interact",level:3},{value:"OnDrop",id:"ondrop",level:3},{value:"OnOwnershipTransferred",id:"onownershiptransferred",level:3},{value:"OnPickup",id:"onpickup",level:3},{value:"OnPickupUseDown",id:"onpickupusedown",level:3},{value:"OnPickupUseUp",id:"onpickupuseup",level:3},{value:"OnPlayerJoined",id:"onplayerjoined",level:3},{value:"OnPlayerLeft",id:"onplayerleft",level:3},{value:"OnSpawn",id:"onspawn",level:3},{value:"OnStationEntered",id:"onstationentered",level:3},{value:"OnStationExited",id:"onstationexited",level:3},{value:"OnVideoEnd",id:"onvideoend",level:3},{value:"OnVideoError",id:"onvideoerror",level:3},{value:"OnVideoLoop",id:"onvideoloop",level:3},{value:"OnVideoPause",id:"onvideopause",level:3},{value:"OnVideoPlay",id:"onvideoplay",level:3},{value:"OnVideoStart",id:"onvideostart",level:3},{value:"OnVideoReady",id:"onvideoready",level:3},{value:"OnPlayerTriggerEnter",id:"onplayertriggerenter",level:3},{value:"OnPlayerTriggerStay",id:"onplayertriggerstay",level:3},{value:"OnPlayerTriggerExit",id:"onplayertriggerexit",level:3},{value:"OnPlayerCollisionEnter",id:"onplayercollisionenter",level:3},{value:"OnPlayerCollisionStay",id:"onplayercollisionstay",level:3},{value:"OnPlayerCollisionExit",id:"onplayercollisionexit",level:3},{value:"OnPlayerParticleCollision",id:"onplayerparticlecollision",level:3},{value:"OnPlayerRespawn",id:"onplayerrespawn",level:3},{value:"OnScreenUpdate",id:"onscreenupdate",level:3},{value:"Advanced Notes",id:"advanced-notes",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:'This is a list of Udon Nodes that are considered "Events".'}),"\n",(0,r.jsxs)(n.p,{children:["Events are used to detect actions and set off chains of action or logic. ",(0,r.jsx)(n.a,{href:"/worlds/udon/input-events",children:"Input Events"}),"  have their own special page. To jump to an Event in the graph, click it in the Graph Sidebar."]}),"\n",(0,r.jsx)(n.p,{children:"All below nodes have flow nodes where logic requires it."}),"\n",(0,r.jsx)(n.h3,{id:"interact",children:"Interact"}),"\n",(0,r.jsx)(n.p,{children:"Fired when a VRChat player interacts with this object."}),"\n",(0,r.jsx)(n.h3,{id:"ondrop",children:"OnDrop"}),"\n",(0,r.jsx)(n.p,{children:"Fired when a VRChat player drops this object after being held."}),"\n",(0,r.jsx)(n.h3,{id:"onownershiptransferred",children:"OnOwnershipTransferred"}),"\n",(0,r.jsx)(n.p,{children:"Fired when the ownership of this object is transferred via some mechanic."}),"\n",(0,r.jsx)(n.h3,{id:"onpickup",children:"OnPickup"}),"\n",(0,r.jsx)(n.p,{children:"Fired when this object is picked up by a VRChat player."}),"\n",(0,r.jsx)(n.h3,{id:"onpickupusedown",children:"OnPickupUseDown"}),"\n",(0,r.jsx)(n.p,{children:"Fired when this object is held and the Use button is pressed. Fires on button down. Requires 'Auto Hold' on Desktop."}),"\n",(0,r.jsx)(n.h3,{id:"onpickupuseup",children:"OnPickupUseUp"}),"\n",(0,r.jsx)(n.p,{children:"Fired when this object is held and the Use button is pressed. Fires on button up. Requires 'Auto Hold' on Desktop."}),"\n",(0,r.jsx)(n.h3,{id:"onplayerjoined",children:"OnPlayerJoined"}),"\n",(0,r.jsxs)(n.p,{children:["Outputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a VRChat player joins the instance. Outputs the ",(0,r.jsx)(n.code,{children:"player"})," that joined."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayerleft",children:"OnPlayerLeft"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerLeft"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a VRChat player leaves the instance. Outputs the ",(0,r.jsx)(n.code,{children:"player"})," that left."]}),"\n",(0,r.jsx)(n.h3,{id:"onspawn",children:"OnSpawn"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnSpawn"}),"\nDeprecated. OnSpawn serves no function in VRChat's SDK3. In SDK2, this event was triggered when spawning an object for the local player."]}),"\n",(0,r.jsx)(n.h3,{id:"onstationentered",children:"OnStationEntered"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnStationEntered"}),"\nFired when a VRChat player enters the station on this object."]}),"\n",(0,r.jsx)(n.h3,{id:"onstationexited",children:"OnStationExited"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnStationExited"}),"\nFired when a VRChat player exits the station on this object."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideoend",children:"OnVideoEnd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoEnd"}),"\nFired when the video player on this object is finished playing, either via the end of the video or via player interaction."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideoerror",children:"OnVideoError"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoError"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"videoError"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDK3.Components.Video.VideoError"}),"\nFired when the video player encounters an error loading the video."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideoloop",children:"OnVideoLoop"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoLoop"}),"\nIf looping is enabled, fired when the video player finishes a loop."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideopause",children:"OnVideoPause"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoPause"}),"\nFired when the video player on this object is paused."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideoplay",children:"OnVideoPlay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoPlay"}),"\nFired when the video player on this object starts playback, either via the start of a new video in a queue, unpausing, or via player interaction."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideostart",children:"OnVideoStart"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoStart"}),"\nFired when the video player on this object starts playback from a stopped state."]}),"\n",(0,r.jsx)(n.h3,{id:"onvideoready",children:"OnVideoReady"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnVideoReady"}),"\nFired when the video player loads a new video."]}),"\n",(0,r.jsx)(n.h1,{id:"player-events",children:"Player Events"}),"\n",(0,r.jsx)(n.h3,{id:"onplayertriggerenter",children:"OnPlayerTriggerEnter"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerTriggerEnter"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a player's capsule enters a trigger collider."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayertriggerstay",children:"OnPlayerTriggerStay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerTriggerStay"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired on frames while a player's capsule is inside a Trigger Collider"]}),"\n",(0,r.jsx)(n.h3,{id:"onplayertriggerexit",children:"OnPlayerTriggerExit"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerTriggerExit"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a player's capsule exits a Trigger Collider."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayercollisionenter",children:"OnPlayerCollisionEnter"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerCollisionEnter"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a player's capsule enters a Collider."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayercollisionstay",children:"OnPlayerCollisionStay"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerCollisionStay"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired on frames while a player's capsule is inside a Collider."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayercollisionexit",children:"OnPlayerCollisionExit"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerCollisionExit"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a player's capsule exits a Collider."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayerparticlecollision",children:"OnPlayerParticleCollision"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerParticleCollision"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a particle collides with a player's capsule, assuming that Particle System has Collision and Send Collision Messages turned on."]}),"\n",(0,r.jsx)(n.h3,{id:"onplayerrespawn",children:"OnPlayerRespawn"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnPlayerRespawn"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"player"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.VRCPlayerApi"}),"\nFired when a player respawns using their menu."]}),"\n",(0,r.jsx)(n.h3,{id:"onscreenupdate",children:"OnScreenUpdate"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Event_OnScreenUpdate"}),"\nOutputs: ",(0,r.jsx)(n.code,{children:"data"})," - ",(0,r.jsx)(n.code,{children:"VRC.SDK3.Platform.ScreenUpdateData"}),"\nTriggered when a player first enters the world on a Mobile Device, and whenever the orientation of their device changes. Outputs a ",(0,r.jsx)(n.code,{children:"ScreenUpdateData"})," struct with the following values:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"})," - ",(0,r.jsx)(n.code,{children:"ScreenUpdateType"})," - only ",(0,r.jsx)(n.code,{children:"OrientationChanged"})," for now, can be expanded in the future."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"orientation"})," - ",(0,r.jsx)(n.code,{children:"VRCOrientation"})," - the orientation of the player's device, as a ",(0,r.jsx)(n.code,{children:"VRC.SDKBase.Platform.VRCOrientation"})," enum, which is ",(0,r.jsx)(n.code,{children:"Landscape"})," or ",(0,r.jsx)(n.code,{children:"Portrait"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"resolution"})," - ",(0,r.jsx)(n.code,{children:"Vector2"})," - the resolution of the player's device, as a ",(0,r.jsx)(n.code,{children:"Vector2"})," struct."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"advanced-notes",children:"Advanced Notes"}),"\n",(0,r.jsxs)(n.p,{children:["All nodes in this list have the type ",(0,r.jsx)(n.code,{children:"System.Void"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(96540);const d={},l=r.createContext(d);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);