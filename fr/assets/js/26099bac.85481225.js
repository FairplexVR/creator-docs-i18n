"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3359],{72874:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(74848),l=a(28453);const i={title:"Player Avatar Scaling",slug:"player-avatar-scaling",hidden:!1,createdAt:"2023-06-22T01:23:45.678Z",updatedAt:"2023-07-19T01:23:45.678Z"},r=void 0,s={id:"worlds/udon/players/player-avatar-scaling",title:"Player Avatar Scaling",description:"Udon provides functions allowing world creators to",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-avatar-scaling.md",sourceDirName:"worlds/udon/players",slug:"/worlds/udon/players/player-avatar-scaling",permalink:"/creator-docs-i18n/fr/worlds/udon/players/player-avatar-scaling",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/players/player-avatar-scaling.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Player Avatar Scaling",slug:"player-avatar-scaling",hidden:!1,createdAt:"2023-06-22T01:23:45.678Z",updatedAt:"2023-07-19T01:23:45.678Z"},sidebar:"tutorialSidebar",previous:{title:"Player Audio",permalink:"/creator-docs-i18n/fr/worlds/udon/players/player-audio"},next:{title:"Player Collisions",permalink:"/creator-docs-i18n/fr/worlds/udon/players/player-collisions"}},o={},d=[{value:"Disabling player-controlled scaling via the website",id:"disabling-player-controlled-scaling-via-the-website",level:2},{value:"Functions for player-controlled scaling",id:"functions-for-player-controlled-scaling",level:2},{value:"GetManualAvatarScalingAllowed",id:"getmanualavatarscalingallowed",level:3},{value:"SetManualAvatarScalingAllowed",id:"setmanualavatarscalingallowed",level:3},{value:"GetAvatarEyeHeightMinimumAsMeters",id:"getavatareyeheightminimumasmeters",level:3},{value:"SetAvatarEyeHeightMinimumByMeters",id:"setavatareyeheightminimumbymeters",level:3},{value:"GetAvatarEyeHeightMaximumAsMeters",id:"getavatareyeheightmaximumasmeters",level:3},{value:"SetAvatarEyeHeightMaximumByMeters",id:"setavatareyeheightmaximumbymeters",level:3},{value:"Functions for world-authoritative scaling",id:"functions-for-world-authoritative-scaling",level:2},{value:"GetAvatarEyeHeightAsMeters",id:"getavatareyeheightasmeters",level:3},{value:"SetAvatarEyeHeightByMeters",id:"setavatareyeheightbymeters",level:3},{value:"SetAvatarEyeHeightByMultiplier",id:"setavatareyeheightbymultiplier",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Udon provides functions allowing world creators to"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Permit or enforce avatar scaling features and parameters."}),"\n",(0,n.jsx)(t.li,{children:"React to changes in player height."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:['To see relevant events to use in concert with these functions, including "OnAvatarChanged" and "OnAvatarEyeHeightChanged", see ',(0,n.jsx)(t.a,{href:"/worlds/udon/avatar-events",children:"Avatar Events"})]}),"\n",(0,n.jsx)(t.admonition,{title:"Scaling and collision",type:"note",children:(0,n.jsxs)(t.p,{children:["Please note that scaling an avatar to another size does ",(0,n.jsx)(t.strong,{children:"not"})," affect its collision with the environment -- just as uploading an avatar that you've scaled up in Unity would not do so."]})}),"\n",(0,n.jsx)(t.p,{children:"Avatar Scaling operates in two modes and can be adjusted individually on a player-by-player basis:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:'A player-controlled mode, where the player is allowed to utilize a radial puppet in their action menu or a "Match Eye Height" button in their quick menu to adjust their own height.'}),"\n",(0,n.jsx)(t.li,{children:"A world-authoritative mode where these features are disabled, and player heights can only be set by an Udon program running in the world."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:'In either case, avatar changes and eye height changes will fire "OnAvatarChanged" and "OnAvatarEyeHeightChanged" events so that an Udon program can react to these occurrences.'}),"\n",(0,n.jsx)(t.admonition,{title:"Player-controlled by default",type:"note",children:(0,n.jsx)(t.p,{children:"Currently, avatar scaling is operating in the player-controlled mode by default. If you wish to operate in the world-authoritative mode, you must disable it on the website or with the Udon functions below."})}),"\n",(0,n.jsx)(t.h2,{id:"disabling-player-controlled-scaling-via-the-website",children:"Disabling player-controlled scaling via the website"}),"\n",(0,n.jsxs)(t.p,{children:["If you simply wish to disable the avatar scaling system in your world, you can log into the ",(0,n.jsx)(t.a,{href:"https://vrchat.com/home/content/worlds",children:"My Worlds section of the VRChat Website"}),", select your world, toggle it off, and save your changes."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"It&#39;s really easy!",src:a(76230).A+"",width:"932",height:"641"})}),"\n",(0,n.jsx)(t.p,{children:"When you disable avatar scaling via the website, the system is disabled for players in your world entirely. They will only be able to use your world at their default scale, and the menu components for avatar scaling will be disabled."}),"\n",(0,n.jsxs)(t.p,{children:["Because of this, the following ",(0,n.jsx)(t.code,{children:"VRCPlayerApi"})," functions are not available to Udon when avatar scaling is disabled via the website, and using them will have no effect: ",(0,n.jsx)(t.code,{children:"SetManualAvatarScalingAllowed"}),", ",(0,n.jsx)(t.code,{children:"SetAvatarEyeHeightMinimumByMeters"}),", ",(0,n.jsx)(t.code,{children:"SetAvatarEyeHeightMaximumByMeters"}),", ",(0,n.jsx)(t.code,{children:"SetAvatarEyeHeightByMeters"}),", ",(0,n.jsx)(t.code,{children:"SetAvatarEyeHeightByMultiplier"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you wish to retain access to these Udon functions but don't want users to be able to scale themselves via the radial puppet in their Action Menu, please leave avatar scaling enabled via the website and instead use Udon to disable the player-controlled avatar scaling mode via ",(0,n.jsx)(t.code,{children:"SetManualAvatarScalingAllowed"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"functions-for-player-controlled-scaling",children:"Functions for player-controlled scaling"}),"\n",(0,n.jsx)(t.admonition,{title:"Local player only",type:"note",children:(0,n.jsxs)(t.p,{children:["Unless otherwise stated, all of the functions below can only be used by an Udon program affecting the local player and cannot be called on a ",(0,n.jsx)(t.code,{children:"VRCPlayerApi"})," object belonging to another player successfully."]})}),"\n",(0,n.jsx)(t.h3,{id:"getmanualavatarscalingallowed",children:"GetManualAvatarScalingAllowed"}),"\n",(0,n.jsx)(t.p,{children:"Checks if the local player is allowed to control their avatar scale."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"bool"}),": ",(0,n.jsx)(t.code,{children:"true"})," if the local player is in the player-controlled avatar scaling mode, or ",(0,n.jsx)(t.code,{children:"false"})," if they're in the world-authoritative avatar scaling mode."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setmanualavatarscalingallowed",children:"SetManualAvatarScalingAllowed"}),"\n",(0,n.jsx)(t.p,{children:"Toggles between player-controlled and world-authoritative scaling modes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Input"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"bool"}),": ",(0,n.jsx)(t.code,{children:"true"})," sets the player-controlled mode, and ",(0,n.jsx)(t.code,{children:"false"})," sets the world-authoritative mode."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"getavatareyeheightminimumasmeters",children:"GetAvatarEyeHeightMinimumAsMeters"}),"\n",(0,n.jsx)(t.p,{children:"Returns the minimum eye height in meters that the local player is permitted to scale themselves to in the player-controlled avatar scaling mode. (Greater than or equal to 0.2 meters.)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": The minimum eye height in meters."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setavatareyeheightminimumbymeters",children:"SetAvatarEyeHeightMinimumByMeters"}),"\n",(0,n.jsx)(t.p,{children:"Sets the minimum height in meters that the local player is permitted to scale themselves to in the player-controlled avatar scaling mode. (Must be greater than or equal to 0.2 meters.)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Input"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": Sets the minimum avatar eye height in meters."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"getavatareyeheightmaximumasmeters",children:"GetAvatarEyeHeightMaximumAsMeters"}),"\n",(0,n.jsx)(t.p,{children:"Returns the maximum eye height that the local player is permitted to scale themselves to in the player-controlled avatar scaling mode. (Less or equal to 5 meters )"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": The maximum avatar eye height in meters."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setavatareyeheightmaximumbymeters",children:"SetAvatarEyeHeightMaximumByMeters"}),"\n",(0,n.jsx)(t.p,{children:"Sets the maximum eye height in meters that the local player is permitted to scale themselves to in the player-controlled avatar scaling mode. (Must be less or equal to 5 meters.)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Input"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": Sets the maximum eye height in meters."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"functions-for-world-authoritative-scaling",children:"Functions for world-authoritative scaling"}),"\n",(0,n.jsx)(t.admonition,{title:"Local player only",type:"note",children:(0,n.jsxs)(t.p,{children:["Unless otherwise stated, all of the functions below can only be used by an Udon program affecting the local player and cannot be called on a ",(0,n.jsx)(t.code,{children:"VRCPlayerApi"})," object belonging to another player successfully."]})}),"\n",(0,n.jsx)(t.h3,{id:"getavatareyeheightasmeters",children:"GetAvatarEyeHeightAsMeters"}),"\n",(0,n.jsxs)(t.p,{children:["Returns the configured eye height for the target player's avatar. This function works for the local player ",(0,n.jsx)(t.strong,{children:"and"})," remote players."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Output"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": The configured eye height for the target player's avatar."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setavatareyeheightbymeters",children:"SetAvatarEyeHeightByMeters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Input"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": Sets the eye height in meters for the current player avatar."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setavatareyeheightbymultiplier",children:"SetAvatarEyeHeightByMultiplier"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Input"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"float"}),": Sets the eye height as a multiple of the target player's avatar eye height at its prefab scale."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},76230:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/website_avatar_scaling_enabled-53b45561c277a2fc3264025008c8433c.png"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var n=a(96540);const l={},i=n.createContext(l);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);