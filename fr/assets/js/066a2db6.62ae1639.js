"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4668],{40279:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=o(74848),r=o(28453);const a={title:"Player Positions",slug:"player-positions",hidden:!1,createdAt:"2021-01-22T00:32:00.432Z",updatedAt:"2023-03-28T19:07:26.827Z"},s=void 0,i={id:"worlds/udon/players/player-positions",title:"Player Positions",description:"Here are the nodes relating to Players' positions. For nodes that deal with forces relating to Players, see Player Forces.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-positions.md",sourceDirName:"worlds/udon/players",slug:"/worlds/udon/players/player-positions",permalink:"/creator-docs-i18n/fr/worlds/udon/players/player-positions",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-positions.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Player Positions",slug:"player-positions",hidden:!1,createdAt:"2021-01-22T00:32:00.432Z",updatedAt:"2023-03-28T19:07:26.827Z"},sidebar:"tutorialSidebar",previous:{title:"Player Forces",permalink:"/creator-docs-i18n/fr/worlds/udon/players/player-forces"},next:{title:"Using Build & Test",permalink:"/creator-docs-i18n/fr/worlds/udon/using-build-test"}},l={},d=[{value:"GetPosition",id:"getposition",level:3},{value:"GetRotation",id:"getrotation",level:3},{value:"GetBonePosition",id:"getboneposition",level:3},{value:"GetBoneRotation",id:"getbonerotation",level:3},{value:"GetTrackingData",id:"gettrackingdata",level:3},{value:"GetVelocity / SetVelocity",id:"getvelocity--setvelocity",level:3},{value:"IsPlayerGrounded",id:"isplayergrounded",level:3},{value:"TeleportTo",id:"teleportto",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Here are the nodes relating to Players' positions. For nodes that deal with forces relating to Players, see ",(0,n.jsx)(t.a,{href:"/worlds/udon/players/player-forces",children:"Player Forces"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"getposition",children:"GetPosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns Vector3 in World Space"}),(0,n.jsx)(t.br,{}),"\n","Gets the position of the Player."]}),"\n",(0,n.jsx)(t.h3,{id:"getrotation",children:"GetRotation"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns UnityEngine.Quaternion in World Space"}),(0,n.jsx)(t.br,{}),"\n","Gets the rotation of the Player."]}),"\n",(0,n.jsx)(t.h3,{id:"getboneposition",children:"GetBonePosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns Vector3 in World Space"}),(0,n.jsx)(t.br,{}),"\n","Gets the position of the specified Bone in the Player's Avatar, or Vector3.Zero (0,0,0) if the bone does not exist. Note that Avatars may not have all the same bones in the places you expect, so be careful making assumptions about attributes like a player's height, pose etc based on the position of bones."]}),"\n",(0,n.jsx)(t.h3,{id:"getbonerotation",children:"GetBoneRotation"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns Quaternion in World Space"}),(0,n.jsx)(t.br,{}),"\n","Gets the rotation of the specified Bone in the Player's Avatar, or Quaternion.Identity (0,0,0,1) if the bone does not exist. Note that Avatars may not have all the same bones in the places you expect, so be careful making assumptions about attributes like a player's height, pose etc based on the rotation of bones."]}),"\n",(0,n.jsx)(t.h3,{id:"gettrackingdata",children:"GetTrackingData"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns TrackingData for the given TrackingDataType: Head, LeftHand, RightHand, Origin, or AvatarRoot"}),(0,n.jsx)(t.br,{}),"\n","Gets a struct called TrackingData, which contains separate Position and Rotation data. This is the suggested way to get position and rotation data for a Player's head and hands. This returns data from the TrackingManager for a Local Player (ie the data coming from their headset / trackers) and from the RightHand, LeftHand and Head bones for a Remote Player. Origin returns the center of the local VR user's playspace, while returning the player's position for local Desktop users and all remote users. AvatarRoot returns data for the root transform of the avatar (the same transform that the player capsule is attached to). For users in Fully-Body Tracking, AvatarRoot will not rotate with the head facing direction. If you need data reflecting the general forward facing direction of a Player, consider using GetRotation instead."]}),"\n",(0,n.jsx)(t.h3,{id:"getvelocity--setvelocity",children:"GetVelocity / SetVelocity"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns Vector3 in World Space"}),(0,n.jsx)(t.br,{}),"\n","Get and set the speed and direction of the player's movement. If SetVelocity is called on a LocalPlayer, their 'IsGrounded' property is set to false since they are not in direct control of their movements while this is happening."]}),"\n",(0,n.jsx)(t.h3,{id:"isplayergrounded",children:"IsPlayerGrounded"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"returns Boolean"}),(0,n.jsx)(t.br,{}),"\n","Get whether the player is touching the ground, which enables Jump."]}),"\n",(0,n.jsx)(t.h3,{id:"teleportto",children:"TeleportTo"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"takes a Vector3 World Position and Quaternion World Rotation"}),(0,n.jsx)(t.br,{}),"\n","Send a Player to a new spot and specified rotation, unless a Station does not allow it."]}),"\n",(0,n.jsx)(t.admonition,{title:"Teleporting other players",type:"note",children:(0,n.jsxs)(t.p,{children:["TeleportTo only works with the ",(0,n.jsx)(t.a,{href:"/worlds/udon/players/getting-players/#networkingget-localplayer",children:"local player"}),". You can use ",(0,n.jsx)(t.a,{href:"/worlds/udon/networking/",children:"networking"})," to cause other players to teleport themselves."]})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var n=o(96540);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);