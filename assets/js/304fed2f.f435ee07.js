"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5927],{16360:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453);const r={slug:"release-3-5-2",date:new Date("2024-03-27T00:00:00.000Z"),title:"Release 3.5.2",authors:["momo"],tags:["release"]},a=void 0,o={permalink:"/creator-docs-i18n/releases/release-3-5-2",source:"@site/releases/release-3.5.2.md",title:"Release 3.5.2",description:"Summary",date:"2024-03-27T00:00:00.000Z",formattedDate:"March 27, 2024",tags:[{label:"release",permalink:"/creator-docs-i18n/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-5-2",date:"2024-03-27T00:00:00.000Z",title:"Release 3.5.2",authors:["momo"],tags:["release"]},unlisted:!1,nextItem:{title:"Release 3.5.1",permalink:"/creator-docs-i18n/releases/release-3-5-1"}},l={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:2},{value:"New features",id:"new-features",level:2},{value:"Changes",id:"changes",level:2},{value:"Fixes",id:"fixes",level:2},{value:"ClientSim",id:"clientsim",level:2},{value:"Known Issues",id:"known-issues",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"This release brings new functionality for avatar creators and various fixes."}),"\n",(0,t.jsx)(n.h2,{id:"new-features",children:"New features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added the ",(0,t.jsxs)(n.a,{href:"/avatars/whitelisted-avatar-components/vrc_headchop",children:[(0,t.jsx)(n.code,{children:"VRCHeadChop"})," component"]})," to the avatars SDK.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This component allows avatar authors to control which parts of their avatar are hidden from the perspective of the user wearing it."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Added the ",(0,t.jsxs)(n.a,{href:"/avatars/state-behaviors#animator-play-audio",children:[(0,t.jsx)(n.code,{children:"AnimatorPlayAudio"})," state behaviour"]})," to the avatars SDK.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This allows you to modify an AudioSource when transitioning to an animation state."}),"\n",(0,t.jsx)(n.li,{children:"It can change the audio clip, volume, pitch, or loop. It can also play or stop the AudioSource automatically."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Added new ",(0,t.jsxs)(n.a,{href:"/worlds/udon/input-events/#oninputmethodchanged",children:[(0,t.jsx)(n.code,{children:"OnInputMethodChanged"})," Event to Udon"]}),", which is triggered whenever the user switches Input Methods, from a Keyboard to a Game Controller, or a Game Controller to a Touchscreen, for example."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The worlds SDK will now suggest replacing Unity's default UI shader with a ",(0,t.jsx)(n.a,{href:"/platforms/android/quest-content-limitations/#shaders",children:"super-sampled shader"})," where appropriate.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"This can help improve the readability of text elements when viewed in VR."}),"\n",(0,t.jsx)(n.li,{children:"TextMeshPro components are not affected by this change. Their readability is very high without supersampling."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.a,{href:"/worlds/udon/data-containers/byte-and-bit-operations",children:"Byte and Bit operations"})," to Udon.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Exposed ",(0,t.jsx)(n.code,{children:"System.BitConverter"}),", ",(0,t.jsx)(n.code,{children:"System.Buffer"}),", and ",(0,t.jsx)(n.code,{children:"System.Text.Encoding"})," to Udon."]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"DataToken.BitCast"})," method."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.a,{href:"/worlds/udon/string-loading",children:"ResultBytes field to string downloader event"})," to allow raw data downloads."]}),"\n",(0,t.jsxs)(n.li,{children:["The avatars SDK now warns against using ",(0,t.jsxs)(n.a,{href:"/avatars/#write-defaults-on-states",children:[(0,t.jsx)(n.em,{children:"mixed"})," Write Defaults settings"]})," across avatar animators."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fixes",children:"Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If an Udon script uses ",(0,t.jsx)(n.code,{children:"[RequireComponent]"}),", the SDK will now silence some harmless errors while building."]}),"\n",(0,t.jsxs)(n.li,{children:["Updated ",(0,t.jsx)(n.code,{children:"UnityEngine.Timeline"})," package version & added to base SDK package dependencies."]}),"\n",(0,t.jsx)(n.li,{children:'Changed "Polygons" to "Triangles" in SDK avatar performance stats for a more accurate description of recommended limits.'}),"\n",(0,t.jsxs)(n.li,{children:["Fixed issues with ",(0,t.jsx)(n.code,{children:"InputUse"})," Udon events firing constantly when using VRChat Mobile. They should now only fire when a genuine tap is done, not while swiping or long-pressing."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"clientsim",children:"ClientSim"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.a,{href:"/worlds/udon/players/#language",children:"all languages supported by VRChat"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Added support for ",(0,t.jsx)(n.a,{href:"/worlds/udon/players/player-avatar-scaling",children:"player scaling APIs"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Fixed EditorOnly objects not getting removed in Play Mode."}),"\n",(0,t.jsx)(n.li,{children:"The stacked camera is now enabled/disabled depending on the state of the pause menu to improve performance."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"known-issues",children:"Known Issues"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The first time you open a Scene and select a GameObject inside a prefab with a U# Behaviour, the GUI for the component directly below that U# Behaviour will not show its GUI. Deselecting and re-selecting the prefab fixes this."}),"\n",(0,t.jsxs)(n.li,{children:["Buffer Particles don't work as they did in Unity 2019, ",(0,t.jsx)(n.a,{href:"https://x.com/hfcRedddd/status/1696915379090604179",children:"there is a workaround to fix them from community member hfcRed here"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"The Editor may crash when updating a shader graph reference by another shader using UsePass. This is an issue with Unity 2022.3.6f1 and is fixed in 2022.3.14f1."}),"\n",(0,t.jsxs)(n.li,{children:["Unity 2022 sometimes causes Rider's debugger to stop for unhandled exceptions in Unity's IMGUI.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Please refer to ",(0,t.jsx)(n.a,{href:"https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256",children:"this workaround"})," and ",(0,t.jsx)(n.a,{href:"https://youtrack.jetbrains.com/issue/RIDER-64944",children:"Jetbrains's bug tracker"})," for more information."]}),"\n"]}),"\n"]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(96540);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);