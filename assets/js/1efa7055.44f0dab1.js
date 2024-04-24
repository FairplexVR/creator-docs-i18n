"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5525],{97071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const r={title:"Udon Video Sync Player",slug:"udon-video-sync-player",excerpt:"Basic example of synced video",hidden:!1,createdAt:"2021-05-14T00:58:34.059Z",updatedAt:"2021-08-05T19:51:13.507Z"},i="Overview",a={id:"worlds/examples/udon-example-scene/udon-video-sync-player",title:"Udon Video Sync Player",description:"There's two main things we need to sync for people to watch videos together - the URL of the video to watch, and the playback time so people are watching things simultaneously. In order to understand how we sync these two items for everyone, including late joiners - let's walk through a scenario that uses this program.",source:"@site/docs/worlds/examples/udon-example-scene/udon-video-sync-player.md",sourceDirName:"worlds/examples/udon-example-scene",slug:"/worlds/examples/udon-example-scene/udon-video-sync-player",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/udon-video-sync-player",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/examples/udon-example-scene/udon-video-sync-player.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685478715,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{title:"Udon Video Sync Player",slug:"udon-video-sync-player",excerpt:"Basic example of synced video",hidden:!1,createdAt:"2021-05-14T00:58:34.059Z",updatedAt:"2021-08-05T19:51:13.507Z"},sidebar:"tutorialSidebar",previous:{title:"Simple Pen System",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/simple-pen-system"},next:{title:"World Audio Settings",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/world-audio-settings"}},d={},l=[];function h(e){const n={a:"a",em:"em",h1:"h1",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(25298).A+"",width:"833",height:"551"})}),"\n",(0,s.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"There's two main things we need to sync for people to watch videos together - the URL of the video to watch, and the playback time so people are watching things simultaneously. In order to understand how we sync these two items for everyone, including late joiners - let's walk through a scenario that uses this program."}),"\n",(0,s.jsxs)(n.p,{children:["**The flow for someone entering a URL is: **\nBecome Owner of UdonSyncPlayer Object\u25b8send new ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"url"})})," \u25b8Try to Load & Play Url \u25b8When Video Starts, send Sync info out \u25b8Send new Sync info every ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"syncFrequency"})})," seconds"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The flow for everyone else is:"}),"\nReceive new ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"url"})})," value \u25b8Try to Load & Play Url \u25b8Receive Sync Info\u25b8Jump to synced time"]}),"\n",(0,s.jsx)(n.h1,{id:"someone-loads-a-url",children:"Someone Loads a URL"}),"\n",(0,s.jsxs)(n.p,{children:["When our hypothetical scene loads, let's say there is no video playing yet, and there are two people in the room. Someone pastes a new URL into the Input Field, which triggers the ",(0,s.jsx)(n.strong,{children:"OnURLChanged"})," event which is wired up in the UI.\n",(0,s.jsx)(n.img,{alt:"When someone enters a new URL, this logic runs to send the new URL to everyone else.",src:t(56162).A+"",width:"1165",height:"488"}),"\nThere's a few 'IsValid' calls in here that we use just to make sure we're not trying to call methods on objects that have been destroyed or improperly set up. We'll skip describing these for the rest of this example these to keep the explanations simpler."]}),"\n",(0,s.jsxs)(n.p,{children:["The Local Player has just put in a new URL, so we make them the Owner of the program so they can control its variables. We get the URL from the InputField, then call ",(0,s.jsx)(n.strong,{children:"SetProgramVariable"})," on the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"url"})})," symbol with this new value. This works the same as calling ",(0,s.jsx)(n.strong,{children:"set url"})," with \"sendChange\" enabled, it's just another way to do it, handy to know about if you want to change the variable on another UdonBehaviour. Once we've updated this variable, we call ",(0,s.jsx)(n.strong,{children:"RequestSerialization"})," to ask Udon to update the value of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"url"})})," for everyone else in the world."]}),"\n",(0,s.jsx)(n.h1,{id:"users-get-new-url",children:"Users Get New URL"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"Whenever the synced url variable changes, try to Play it!",src:t(10924).A+"",width:"633",height:"314"}),"\nSince we have a ",(0,s.jsx)(n.strong,{children:"Variable Change"})," event for ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"url"})})," in our graph, this event will be triggered whenever the URL is updated, and it will simply try to play the URL."]}),"\n",(0,s.jsx)(n.h1,{id:"the-video-starts",children:"The Video Starts"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(58823).A+"",width:"723",height:"213"})}),"\n",(0,s.jsxs)(n.p,{children:["This event is triggered locally when the video actually beings playing. We call the same event for the Owner and everyone else - the different logic is handled in ",(0,s.jsx)(n.strong,{children:"UpdateTimeAndOffset"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"update-time-and-offset",children:"Update Time and Offset"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(41891).A+"",width:"1490",height:"444"})}),"\n",(0,s.jsxs)(n.p,{children:["First, this logic checks whether it's running on the Owner of the object. If it's not, it runs the ",(0,s.jsx)(n.strong,{children:"Resync"})," event instead. If it is on the owner, the we want to sync both ",(0,s.jsx)(n.em,{children:"where"})," in the video we are, and ",(0,s.jsx)(n.em,{children:"when"})," we were there. We should be at the very beginning of the video since this is the first time the logic is running, but by saving both of these values, we can use this for future sync updates as well."]}),"\n",(0,s.jsxs)(n.p,{children:["We want to sync two numbers to everyone else, and these two numbers are closely related, so we combine them into a single Vector2 variable in order to keep them together and simplify some of the sync logic. We construct a Vector2 where 'x' is the current time of the video and 'y' is the Server Time observed by the owner when they were at that video time. With this info, everyone else can set themselves to a matching time - see ",(0,s.jsx)(n.a,{href:"/worlds/examples/udon-example-scene/udon-video-sync-player#resync",children:"Resync"}),"  below."]}),"\n",(0,s.jsxs)(n.p,{children:["After ",(0,s.jsx)(n.strong,{children:"Requesting Serialization"})," of this synced variable, the owner calls ",(0,s.jsx)(n.strong,{children:"SendCustomEventDelayedSeconds"})," to update this value again. They use the variable ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"syncFrequency"})})," to determine how long until they update the value. For a ",(0,s.jsx)(n.em,{children:"very"})," simple approach, this variable can be left at 0 if the owner never pauses, rewinds or fast-forwards the video, and everyone can sync from the start time of the video instead of updating ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"timeAndOffset"})})," every so often."]}),"\n",(0,s.jsx)(n.h1,{id:"resync",children:"Resync"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(75506).A+"",width:"1151",height:"464"})}),"\n",(0,s.jsxs)(n.p,{children:["When non-owners start playing the video or receive an update to the ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"timeAndOffset"})})," variable, they can use the data to figure out where to jump to in the video."]}),"\n",(0,s.jsxs)(n.p,{children:["For a simple example, let's say the owner was at video-time ",(0,s.jsx)(n.strong,{children:"0"})," at server-time ",(0,s.jsx)(n.strong,{children:"1000"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Owners sets ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"timeAndOffset"})})," to (0,1000)."]}),"\n",(0,s.jsxs)(n.li,{children:["You join 45 seconds later and get this value. Your own server-time is ",(0,s.jsx)(n.strong,{children:"1045"}),", so you jump to ",(0,s.jsx)(n.strong,{children:"00:45"})," in the video by finding the difference in the server time (45 seconds) and adding the video-time (0 seconds)."]}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"improvements-and-augmentations",children:"Improvements and Augmentations"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(81140).A+"",width:"1776",height:"1292"})}),"\n",(0,s.jsx)(n.p,{children:"We kept this example pretty simple so it would be understandable and upgradeable. There's lots you could do to improve it and share your changes! Here are some ideas:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Have non-owners wait to play the video until they receive info from the Owner"}),"\n",(0,s.jsx)(n.li,{children:"Detect stream urls vs videos and turn off syncing"}),"\n",(0,s.jsx)(n.li,{children:"Handle Video Error events with helpful notes for users"}),"\n",(0,s.jsx)(n.li,{children:"Only allow certain players to change videos"}),"\n",(0,s.jsx)(n.li,{children:"Create video playlists"}),"\n",(0,s.jsx)(n.li,{children:"Create a video Queueing system"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},41891:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-3735c0c-update-time-and-offset-5a95b10173a7ac23b9c35556347bad0c.png"},10924:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-572ee25-playurl-a06aec79b02b0904cc144ef7fbdcd182.png"},58823:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-8eb0c7f-onvideostart-dac8f264a734faef7e8d34d1428434ee.png"},25298:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-9000c94-udonsyncplayer-scene-c4421d567e73b8b09095659609a2c32a.png"},75506:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-b63cdfd-resync-91f555e304da690fe8028789e9b2bc53.png"},56162:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-c08ee3f-url-change-7d8969e2b1cab1dd0f21764d7c63aa52.png"},81140:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/udon-video-sync-player-f43a120-udonsyncplayer-full-graph-1322fa106f9a1c0f9d3d9270d5a5aa42.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(96540);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);