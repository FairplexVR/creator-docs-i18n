"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[6781],{63849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(74848),i=t(28453);const r={title:"Simple Pen System",slug:"simple-pen-system",excerpt:"Simple is a relative term.",hidden:!1,createdAt:"2021-05-14T00:44:52.076Z",updatedAt:"2021-05-20T23:00:49.470Z"},o="How the Pen and Lines Work Together",a={id:"worlds/examples/udon-example-scene/simple-pen-system",title:"Simple Pen System",description:"The Simple Pen system consists of two programs - one for the Pen, and one for each Line that will be drawn",source:"@site/docs/worlds/examples/udon-example-scene/simple-pen-system.md",sourceDirName:"worlds/examples/udon-example-scene",slug:"/worlds/examples/udon-example-scene/simple-pen-system",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/simple-pen-system",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/examples/udon-example-scene/simple-pen-system.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685478715,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{title:"Simple Pen System",slug:"simple-pen-system",excerpt:"Simple is a relative term.",hidden:!1,createdAt:"2021-05-14T00:44:52.076Z",updatedAt:"2021-05-20T23:00:49.470Z"},sidebar:"tutorialSidebar",previous:{title:"Player Mod Setter",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/player-mod-setter"},next:{title:"Udon Video Sync Player",permalink:"/creator-docs-i18n/worlds/examples/udon-example-scene/udon-video-sync-player"}},l={},d=[{value:"Pen",id:"pen",level:3},{value:"Lines",id:"lines",level:3},{value:"Drawing Starts",id:"drawing-starts",level:2},{value:"Drawing Continues",id:"drawing-continues",level:2},{value:"Drawing Finishes",id:"drawing-finishes",level:2}];function h(e){const n={em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Simple Pen system consists of two programs - one for the Pen, and one for each Line that will be drawn"}),"\n",(0,s.jsx)(n.h1,{id:"how-the-pen-and-lines-work-together",children:"How the Pen and Lines Work Together"}),"\n",(0,s.jsx)(n.h3,{id:"pen",children:"Pen"}),"\n",(0,s.jsx)(n.p,{children:"The pen has VRCPickup and VRCObjectSync components, which provide the basic pickup and sync functionality. The program itself is uses Continuous sync since that works well with these components."}),"\n",(0,s.jsx)(n.h3,{id:"lines",children:"Lines"}),"\n",(0,s.jsxs)(n.p,{children:["Each line object has its own LineRenderer and a program with Manual Sync, since it doesn't need to update as often as the pen. The line has a ",(0,s.jsx)(n.strong,{children:"points"})," variable which is Vector3 array. This variable is the main way that data for the lines are synced for everyone in the instance."]}),"\n",(0,s.jsx)(n.h2,{id:"drawing-starts",children:"Drawing Starts"}),"\n",(0,s.jsxs)(n.p,{children:["When someone uses the Pen, this calls ",(0,s.jsx)(n.strong,{children:"OnPickupUseDown"})," on the pen. This will cause a few things to happen in the program:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A new Line is retrieved from the pool and saved in a variable\n*The player with the pen is made the Owner of the line"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"isDrawing"})," is set to true"]}),"\n",(0,s.jsx)(n.li,{children:"The line is reset to have two points with their positions at the tip of the pen"}),"\n",(0,s.jsx)(n.li,{children:"a variable is incremented to track which line will be used next."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"drawing-continues",children:"Drawing Continues"}),"\n",(0,s.jsxs)(n.p,{children:["Every frame, the ",(0,s.jsx)(n.strong,{children:"Update"})," event is called on the pen, and the following logic is run:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"isDrawing"})," is true, we continue:"]}),"\n",(0,s.jsxs)(n.li,{children:["If the pen has moved more than ",(0,s.jsx)(n.em,{children:"minMoveDistance"}),", we continue:"]}),"\n",(0,s.jsxs)(n.li,{children:["We add a new point to the LineRenderer at the position of the ",(0,s.jsx)(n.em,{children:"penTip"})]}),"\n",(0,s.jsx)(n.li,{children:"We check if we've queued up enough points to send by comparing currentIndex against pointsPerUpdate"}),"\n",(0,s.jsxs)(n.li,{children:["If we're ready to update the data, we call ",(0,s.jsx)(n.strong,{children:"OnUpdate"})," on the UdonBehaviour on the target line."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When this ",(0,s.jsx)(n.strong,{children:"OnUpdate"})," method is called on the line, the program retrieves the current positions of the points in the line, updates the synced ",(0,s.jsx)(n.em,{children:"points"})," variable, and calls ",(0,s.jsx)(n.strong,{children:"RequestSerialization"}),", which is how Manual-synced UdonBehaviours tell VRChat to send out the queued data. This method is only called on the owner of the line. Everyone else receives the data, and then has their ",(0,s.jsx)(n.strong,{children:"OnDeserialization"})," method called. When this method triggers on a line, the line program reads the positions from the ",(0,s.jsx)(n.em,{children:"points"})," array, and uses them to update the positions in their own line."]}),"\n",(0,s.jsx)(n.h2,{id:"drawing-finishes",children:"Drawing Finishes"}),"\n",(0,s.jsxs)(n.p,{children:["When the user lets go of the Use button, the ",(0,s.jsx)(n.strong,{children:"OnPickupUseUp"})," event is called on the pen. This event simply sets ",(0,s.jsx)(n.em,{children:"isDrawing"})," to false, and calls ",(0,s.jsx)(n.strong,{children:"OnFinish"})," on the target line's UdonBehaviour. This will send the ",(0,s.jsx)(n.strong,{children:"OnUpdate"})," method one more time to make sure the ",(0,s.jsx)(n.strong,{children:"points"})," data is up-to-date for everyone."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);