"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3275],{69521:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var s=i(74848),t=i(28453);const n={title:"Video Players",excerpt:"Play videos in your VRChat world",sidebar_position:1,createdAt:"2020-08-28T19:47:50.947Z",updatedAt:"2023-08-14T09:05:14.280Z"},r=void 0,l={id:"worlds/udon/video-players/index",title:"Video Players",description:"Using the Prefabs",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/video-players/index.md",sourceDirName:"worlds/udon/video-players",slug:"/worlds/udon/video-players/",permalink:"/creator-docs-i18n/fr/worlds/udon/video-players/",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/video-players/index.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",sidebarPosition:1,frontMatter:{title:"Video Players",excerpt:"Play videos in your VRChat world",sidebar_position:1,createdAt:"2020-08-28T19:47:50.947Z",updatedAt:"2023-08-14T09:05:14.280Z"},sidebar:"tutorialSidebar",previous:{title:"Using Build & Test",permalink:"/creator-docs-i18n/fr/worlds/udon/using-build-test"},next:{title:"Liste blanche pour les Lecteurs Vid\xe9o",permalink:"/creator-docs-i18n/fr/worlds/udon/video-players/www-whitelist"}},a={},d=[{value:"Using the Prefabs",id:"using-the-prefabs",level:2},{value:"Choosing AVPro or Unity Video Player",id:"choosing-avpro-or-unity-video-player",level:2},{value:"Android / Quest Compatibility",id:"android--quest-compatibility",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2},{value:"Supported Video Hosts",id:"supported-video-hosts",level:2},{value:"Your Own Host",id:"your-own-host",level:3},{value:"YouTube",id:"youtube",level:3},{value:"Vimeo Basic",id:"vimeo-basic",level:3},{value:"Vimeo Pro or Business",id:"vimeo-pro-or-business",level:3},{value:"Optimizing your videos",id:"optimizing-your-videos",level:3}];function h(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"using-the-prefabs",children:"Using the Prefabs"}),"\n",(0,s.jsxs)(o.p,{children:["The easiest way to put a Video Player in your Udon world is by using one of the Prefabs, which you can find in ",(0,s.jsx)(o.code,{children:"Packages/VRChat SDK - Worlds/Samples/UdonExampleScene/Prefabs/VideoPlayers"}),"."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"The two Video Player prefabs, ready to drop into your world.",src:i(60387).A+"",width:"343",height:"61"})}),"\n",(0,s.jsx)(o.p,{children:"Both of these prefabs will play a video of your choosing, synchronized for everyone in your world. They won't loop - the graph turns off looping for now to get sync to work. If you want them to loop, turn on 'Loop' and remove the UdonBehaviour."}),"\n",(0,s.jsx)(o.admonition,{title:"These are Synced Player EXAMPLES",type:"note",children:(0,s.jsx)(o.p,{children:"You don't have to use the \"UdonSyncPlayer\" Udon Behaviours. You can use just the VRC Video Player component if you don't need the videos synced in your world. You can also make your own Sync Graphs using the provided one as a starting point or you can make one from scratch."})}),"\n",(0,s.jsx)(o.h2,{id:"choosing-avpro-or-unity-video-player",children:"Choosing AVPro or Unity Video Player"}),"\n",(0,s.jsxs)(o.p,{children:["Why would you choose one or the other?\n",(0,s.jsx)(o.strong,{children:"AVPro"})," supports live streams on multiple platforms, like YouTube Live, Twitch, and some others! You'll need to make a graph that calls PlayURL on the Video Player to make this work. The ",(0,s.jsx)(o.strong,{children:"Unity Video"})," player does not support these live streams."]}),"\n",(0,s.jsxs)(o.p,{children:["In addition, ",(0,s.jsx)(o.strong,{children:"AVPro"})," does not play in the editor - you'll need to Build & Test your world to see it working. ",(0,s.jsx)(o.strong,{children:"Unity Video"})," works in Play Mode in the Editor when using links that point directly to supported video file types like 'mp4' and 'webm'. Hosted services like YouTube and Vimeo will only work in the client."]}),"\n",(0,s.jsx)(o.p,{children:"Notably, the AVPro speaker component implies support for 8 channel audio. This is not correct-- only 6 channel (usually 5.1 audio) can be played. [AVPro support EAC3 7.1 audio on PCVR only]"}),"\n",(0,s.jsx)(o.h2,{id:"android--quest-compatibility",children:"Android / Quest Compatibility"}),"\n",(0,s.jsx)(o.p,{children:"An application that VRChat uses to resolve links into videos is also available on Android now, so previous workarounds aren't needed.\nIn the past, some workarounds existed for advanced users, because Quest had no URL resolver."}),"\n",(0,s.jsx)(o.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,s.jsx)(o.p,{children:"A given user is only permitted to handle a new video player URL once every five seconds. This is a global limit across all video players. This applies to the default URLs as well as those set with LoadURL and PlayURL."}),"\n",(0,s.jsx)(o.p,{children:"With a single video player, this isn't an issue-- but if you have multiple video players, you need to ensure that a request isn't sent too quickly after a previous request."}),"\n",(0,s.jsx)(o.p,{children:"This also applies to late-joiners. If you have 2 video players running in your world, a late-joiner will see that they must send out two video requests. Unmanaged, they will attempt to do so simultaneously and will fail. In cases where you have more than one video player playing simultaneously in a world, you'll have to account for this."}),"\n",(0,s.jsx)(o.h2,{id:"supported-video-hosts",children:"Supported Video Hosts"}),"\n",(0,s.jsx)(o.p,{children:"To play a video, you need to provide a URL in the Video URL field when you set up your Video Player in the editor, or you can paste a URL into the VRCUrlInputField provided in the prefabs."}),"\n",(0,s.jsxs)(o.p,{children:["A full list of our supported hosts is available at ",(0,s.jsx)(o.a,{href:"/worlds/udon/video-players/www-whitelist",children:"Video Player Allowlist"}),". Some recommendations are below."]}),"\n",(0,s.jsx)(o.admonition,{title:"Disclaimer",type:"note",children:(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"The listings below do not constitute partnerships or endorsements"}),". These are services that are widely accessible and have been tested to work properly with VRChat video players."]})}),"\n",(0,s.jsx)(o.h3,{id:"your-own-host",children:"Your Own Host"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cost"}),": Paid - varies depending on your Provider"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Links"}),": Link directly to the .mp4 or .webm file"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Limitations"}),': If you have your own host outside of our allowlist, users must have the "Allow Untrusted URLs" option enabled in their Settings to see your content.']}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:'You may want to consider looking into a "content delivery network" (CDN) to host your content. This is useful if you plan on your video being accessible for many users, or to be fast for many users across the world. CDNs will distribute your file across many servers worldwide to ensure that there is a source close to the viewer to ensure fast downloads.'}),"\n",(0,s.jsxs)(o.p,{children:["We have tested ",(0,s.jsx)(o.em,{children:"Amazon Cloudfront"})," and ",(0,s.jsx)(o.em,{children:"BunnyCDN"}),'. CDN services are usually paid services, but tend to be low-cost for bulk storage/transmission of data. However, due to their openness, they are not present in our allowlist and will require that users enable the "Allow Untrusted URLs" setting.']}),"\n",(0,s.jsx)(o.h3,{id:"youtube",children:"YouTube"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cost"}),": Free"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Links"}),": Use the ",(0,s.jsx)(o.a,{href:"https://www.youtube.com/watch?v=8yaQY0arCnc",children:"'watch' url"})]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Limitations"}),": Will not work on Quest or Linux"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"vimeo-basic",children:"Vimeo Basic"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cost"}),": Free"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Links"}),": Use the ",(0,s.jsx)(o.a,{href:"https://vimeo.com/383935156",children:"basic video url"})]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Limitations"}),": Will not work on Quest or Linux"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"vimeo-pro-or-business",children:"Vimeo Pro or Business"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Cost"}),": ",(0,s.jsx)(o.a,{href:"https://vimeo.com/upgrade",children:"Paid"})]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Links"}),": Use the direct video links"]}),"\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"Limitations"}),": None"]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"optimizing-your-videos",children:"Optimizing your videos"}),"\n",(0,s.jsxs)(o.p,{children:["When encoding your videos, we strongly recommend uploading a web-optimized version. For ",(0,s.jsx)(o.code,{children:".MP4"})," files, this option is also known as 'fast start'. It is a one-tick setting that makes a huge difference in the streamability of a self-hosted video file. Without fast start, you generally have to download the entire video file for it to play. With fast start enabled, you can stream the video file in chunks, and streams will begin immediately."]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["In FFMPEG, use the parameter ",(0,s.jsx)(o.code,{children:"-movflags +faststart"}),"."]}),"\n",(0,s.jsx)(o.li,{children:"In HandBrake, tick the 'Web Optimized' checkbox."}),"\n",(0,s.jsx)(o.li,{children:"Other software should have similar options for enabling fast start."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"Enabling Fast Start",src:i(39198).A+"",width:"1003",height:"651"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},60387:(e,o,i)=>{i.d(o,{A:()=>s});const s="data:image/png;base64,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"},39198:(e,o,i)=>{i.d(o,{A:()=>s});const s=i.p+"assets/images/video-players-dc8e54f-image-b9fad3554f9741cc7615865aa5269fd9.png"},28453:(e,o,i)=>{i.d(o,{R:()=>r,x:()=>l});var s=i(96540);const t={},n=s.createContext(t);function r(e){const o=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(n.Provider,{value:o},e.children)}}}]);