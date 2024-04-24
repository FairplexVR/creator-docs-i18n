"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1020],{48835:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var d=t(74848),s=t(28453);const o={title:"Special Nodes",slug:"special-nodes",hidden:!1,createdAt:"2020-03-20T20:08:24.110Z",updatedAt:"2021-09-13T22:30:33.143Z"},i=void 0,r={id:"worlds/udon/graph/special-nodes",title:"Special Nodes",description:'These are "Special" nodes. This includes flow control and special Udon features.',source:"@site/docs/worlds/udon/graph/special-nodes.md",sourceDirName:"worlds/udon/graph",slug:"/worlds/udon/graph/special-nodes",permalink:"/creator-docs-i18n/worlds/udon/graph/special-nodes",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/graph/special-nodes.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712356660,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"Special Nodes",slug:"special-nodes",hidden:!1,createdAt:"2020-03-20T20:08:24.110Z",updatedAt:"2021-09-13T22:30:33.143Z"},sidebar:"tutorialSidebar",previous:{title:"Searching for Nodes",permalink:"/creator-docs-i18n/worlds/udon/graph/searching-for-nodes"},next:{title:"Type Nodes",permalink:"/creator-docs-i18n/worlds/udon/graph/type-nodes"}},l={},a=[{value:"Block",id:"block",level:3},{value:"Branch",id:"branch",level:3},{value:"Comment",id:"comment",level:3},{value:"Const Null",id:"const-null",level:3},{value:"Const This",id:"const-this",level:3},{value:"Event Custom",id:"event-custom",level:3},{value:"For",id:"for",level:3},{value:"Get Variable",id:"get-variable",level:3},{value:"Set Variable",id:"set-variable",level:3},{value:"Get Program Variable",id:"get-program-variable",level:3},{value:"Set Program Variable",id:"set-program-variable",level:3},{value:"On Variable Changed",id:"on-variable-changed",level:3},{value:"While",id:"while",level:3},{value:"UdonBehaviour Nodes",id:"udonbehaviour-nodes",level:2},{value:"SendCustomEvent",id:"sendcustomevent",level:3},{value:"SendCustomEventDelayedFrames",id:"sendcustomeventdelayedframes",level:3},{value:"SendCustomEventDelayedSeconds",id:"sendcustomeventdelayedseconds",level:3},{value:"SendCustomNetworkEvent",id:"sendcustomnetworkevent",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:'These are "Special" nodes. This includes flow control and special Udon features.'}),"\n",(0,d.jsx)(n.h3,{id:"block",children:"Block"}),"\n",(0,d.jsx)(n.p,{children:"Splits flow into multiple sections. One flow input, multiple flow output. Executes all right-side flow slots from top to bottom."}),"\n",(0,d.jsx)(n.h3,{id:"branch",children:"Branch"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"Bool"})," - ",(0,d.jsx)(n.code,{children:"System.Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["Branches execution based on a conditional evaluation. If ",(0,d.jsx)(n.code,{children:"Bool"})," is True, ",(0,d.jsx)(n.code,{children:"True"})," flow path is executed. If ",(0,d.jsx)(n.code,{children:"Bool"})," is False, ",(0,d.jsx)(n.code,{children:"False"})," flow path is executed."]}),"\n",(0,d.jsx)(n.h3,{id:"comment",children:"Comment"}),"\n",(0,d.jsx)(n.p,{children:"Provides a space for the user to type a comment string. This string is not included during compilation."}),"\n",(0,d.jsx)(n.h3,{id:"const-null",children:"Const Null"}),"\n",(0,d.jsx)(n.p,{children:'Provides a "null" value for nullchecking purposes.'}),"\n",(0,d.jsx)(n.h3,{id:"const-this",children:"Const This"}),"\n",(0,d.jsx)(n.p,{children:"Provides a reference to the GameObject that the UdonBehavior is a component of."}),"\n",(0,d.jsx)(n.h3,{id:"event-custom",children:"Event Custom"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"name"})," - ",(0,d.jsx)(n.code,{children:"System.String"})]}),"\n",(0,d.jsx)(n.p,{children:"Recieves a custom event. Custom event name must be typed, cannot be provided via node input."}),"\n",(0,d.jsx)(n.h3,{id:"for",children:"For"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"start"}),", ",(0,d.jsx)(n.code,{children:"end"}),", ",(0,d.jsx)(n.code,{children:"step"})," - ",(0,d.jsx)(n.code,{children:"System.Int32"})]}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"index"})," - ",(0,d.jsx)(n.code,{children:"System.Int32"})]}),"\n",(0,d.jsxs)(n.p,{children:["Executes flow by using a counter. A counter is initalized with the value of ",(0,d.jsx)(n.code,{children:"start"}),". The ",(0,d.jsx)(n.code,{children:"Body"})," flow is executed, and then the counter is incremented by the ",(0,d.jsx)(n.code,{children:"step"})," value. This continues until the counter's value is greater than ",(0,d.jsx)(n.code,{children:"end"}),". Once that has occured, flow continues along on the ",(0,d.jsx)(n.code,{children:"Exit"})," flow."]}),"\n",(0,d.jsx)(n.h3,{id:"get-variable",children:"Get Variable"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"name"})," - ",(0,d.jsx)(n.code,{children:"System.String"})]}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"System.Object"})]}),"\n",(0,d.jsxs)(n.p,{children:["Gets the Udon variable named ",(0,d.jsx)(n.code,{children:"name"})," and provides it as output."]}),"\n",(0,d.jsx)(n.h3,{id:"set-variable",children:"Set Variable"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"name"})," - ",(0,d.jsx)(n.code,{children:"System.String"})," ",(0,d.jsx)(n.code,{children:"value"})," - ",(0,d.jsx)(n.code,{children:"System.Object"})," ",(0,d.jsx)(n.code,{children:"sendChange"})," - ",(0,d.jsx)(n.code,{children:"Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the Udon variable named ",(0,d.jsx)(n.code,{children:"name"})," to ",(0,d.jsx)(n.code,{children:"value"})," when flow is executed. If ",(0,d.jsx)(n.code,{children:"sendChange"})," is checked, it will also trigger the OnVariableChanged event for that variable."]}),"\n",(0,d.jsx)(n.h3,{id:"get-program-variable",children:"Get Program Variable"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"})," ",(0,d.jsx)(n.code,{children:"symbolName"})," - ",(0,d.jsx)(n.code,{children:"string"})]}),"\n",(0,d.jsxs)(n.p,{children:["Get the value of an Udon variable ",(0,d.jsx)(n.code,{children:"symbolName"})," from another UdonBehaviour ",(0,d.jsx)(n.code,{children:"instance"}),". Works best if the target UdonBehaviour is a public variable and it's wired up in the Inspector, which allows you to choose the target variable name from a dropdown. If there's no UdonBehaviour connected to instance, it will use the current UdonBehaviour's variable names. If you instead know the name of the variable and want to set it directly, use a ",(0,d.jsx)(n.code,{children:"String const"})," node to write it in by hand."]}),"\n",(0,d.jsx)(n.h3,{id:"set-program-variable",children:"Set Program Variable"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"})," ",(0,d.jsx)(n.code,{children:"symbolName"})," - ",(0,d.jsx)(n.code,{children:"string"})," ",(0,d.jsx)(n.code,{children:"value"})," - ",(0,d.jsx)(n.code,{children:"Object"})]}),"\n",(0,d.jsxs)(n.p,{children:["Sets the value of an Udon variable ",(0,d.jsx)(n.code,{children:"symbolName"})," on another UdonBehaviour ",(0,d.jsx)(n.code,{children:"instance"})," to ",(0,d.jsx)(n.code,{children:"value"}),". Works best if the target UdonBehaviour is a public variable and it's wired up in the Inspector, which allows you to choose the target variable name from a dropdown. If there's no UdonBehaviour connected to instance, it will use the current UdonBehaviour's variable names. If you instead know the name of the variable and want to set it directly, use a ",(0,d.jsx)(n.code,{children:"String const"})," node to write it in by hand. This node will also trigger the OnVariableChanged event for the target variable."]}),"\n",(0,d.jsx)(n.h3,{id:"on-variable-changed",children:"On Variable Changed"}),"\n",(0,d.jsxs)(n.p,{children:["Outputs: ",(0,d.jsx)(n.code,{children:"newValue"})," ",(0,d.jsx)(n.code,{children:"oldValue"})]}),"\n",(0,d.jsxs)(n.p,{children:["Triggers whenever SetProgramVariable is called on the target variable, or when Set Variable is called with ",(0,d.jsx)(n.code,{children:"sendChange"})," checked. Works for synced variables, too!"]}),"\n",(0,d.jsx)(n.h3,{id:"while",children:"While"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"Bool"})," - ",(0,d.jsx)(n.code,{children:"System.Boolean"})]}),"\n",(0,d.jsxs)(n.p,{children:["Executes the flow of ",(0,d.jsx)(n.code,{children:"Body"})," while ",(0,d.jsx)(n.code,{children:"Bool"})," is true. If ",(0,d.jsx)(n.code,{children:"Bool"})," is false, executes ",(0,d.jsx)(n.code,{children:"Exit"})," flow."]}),"\n",(0,d.jsx)(n.h2,{id:"udonbehaviour-nodes",children:"UdonBehaviour Nodes"}),"\n",(0,d.jsx)(n.p,{children:"UdonBehaviours have a few special nodes:"}),"\n",(0,d.jsx)(n.h3,{id:"sendcustomevent",children:"SendCustomEvent"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"}),", ",(0,d.jsx)(n.code,{children:"eventName"})," - String"]}),"\n",(0,d.jsx)(n.p,{children:"Runs the event 'eventName' on the target UdonBehaviour. If instance is left blank, it points to one of its own events."}),"\n",(0,d.jsx)(n.h3,{id:"sendcustomeventdelayedframes",children:"SendCustomEventDelayedFrames"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"}),", ",(0,d.jsx)(n.code,{children:"eventName"})," - String, ",(0,d.jsx)(n.code,{children:"delayFrames"})," - int, ",(0,d.jsx)(n.code,{children:"eventTiming"})," - EventTiming"]}),"\n",(0,d.jsxs)(n.p,{children:["Runs the event 'eventName' on the target UdonBehaviour, after waiting for ",(0,d.jsx)(n.code,{children:"delayFrames"}),". It will run the event during Update or LateUpdate, depending on which ",(0,d.jsx)(n.code,{children:"eventTiming"})," is selected. Minimum of 1 frame delay."]}),"\n",(0,d.jsxs)(n.p,{children:["Note that ",(0,d.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Time-frameCount.html",children:"Unity's frame count"})," is based on the Update event. If you call SendCustomEventDelayedFrames ",(0,d.jsx)(n.a,{href:"/worlds/udon/event-execution-order",children:"before the Update event"}),", such as ",(0,d.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/MonoBehaviour.Start.html",children:"Start"})," or an ",(0,d.jsx)(n.a,{href:"/worlds/udon/input-events",children:"Input event"}),", the delay may be 1 frame shorter than expected."]}),"\n",(0,d.jsx)(n.h3,{id:"sendcustomeventdelayedseconds",children:"SendCustomEventDelayedSeconds"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"}),", ",(0,d.jsx)(n.code,{children:"eventName"})," - String, ",(0,d.jsx)(n.code,{children:"delaySeconds"})," - float, ",(0,d.jsx)(n.code,{children:"eventTiming"})," - EventTiming\nRuns the event 'eventName' on the target UdonBehaviour, after waiting for ",(0,d.jsx)(n.code,{children:"delaySeconds"}),". It will run the event during Update or LateUpdate, depending on which ",(0,d.jsx)(n.code,{children:"eventTiming"})," is selected."]}),"\n",(0,d.jsxs)(n.p,{children:["If ",(0,d.jsx)(n.code,{children:"delaySeconds"})," is zero, the event will be executed in the same frame ",(0,d.jsx)(n.em,{children:"or"})," the next frame. (See ",(0,d.jsx)(n.a,{href:"/worlds/udon/graph/special-nodes#sendcustomeventdelayedframes",children:"SendCustomEventDelayedFrames"}),"), just above."]}),"\n",(0,d.jsx)(n.h3,{id:"sendcustomnetworkevent",children:"SendCustomNetworkEvent"}),"\n",(0,d.jsxs)(n.p,{children:["Inputs: ",(0,d.jsx)(n.code,{children:"instance"})," - ",(0,d.jsx)(n.code,{children:"UdonBehaviour"}),", ",(0,d.jsx)(n.code,{children:"target"})," - NetworkEventTarget, ",(0,d.jsx)(n.code,{children:"eventName"})," - String"]}),"\n",(0,d.jsx)(n.p,{children:"Runs the event 'eventName' on the target UdonBehaviour - either on the Owner of the target if 'Owner' is selected as the target, or on Everyone in the instance if 'all' is selected."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var d=t(96540);const s={},o=d.createContext(s);function i(e){const n=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(o.Provider,{value:n},e.children)}}}]);