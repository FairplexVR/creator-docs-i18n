"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[4490],{39868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(74848),s=n(28453);const o={title:"Network Components",slug:"network-components",createdAt:"2021-05-13T17:19:13.691Z",updatedAt:"2023-02-26T20:26:03.564Z"},r=void 0,a={id:"worlds/udon/networking/network-components",title:"Network Components",description:"This doc covers Networking Components, Properties and Events you can use in your Udon Programs.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-components.md",sourceDirName:"worlds/udon/networking",slug:"/worlds/udon/networking/network-components",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-components",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/networking/network-components.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Network Components",slug:"network-components",createdAt:"2021-05-13T17:19:13.691Z",updatedAt:"2023-02-26T20:26:03.564Z"},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/"},next:{title:"Network Specs and Tips",permalink:"/creator-docs-i18n/fr/worlds/udon/networking/network-details"}},l={},c=[{value:"Networking Properties",id:"networking-properties",level:2},{value:"Networking Events",id:"networking-events",level:2},{value:"OnPreSerialization:",id:"onpreserialization",level:2},{value:"OnDeserialization:",id:"ondeserialization",level:2},{value:"OnDeserialization(DeserializationResult)",id:"ondeserializationdeserializationresult",level:2},{value:"DeserializationResult",id:"deserializationresult",level:3},{value:"OnPostSerialization:",id:"onpostserialization",level:2},{value:"OnSpawn:",id:"onspawn",level:2},{value:"OnOwnershipRequest:",id:"onownershiprequest",level:2},{value:"OnOwnershipTransferred:",id:"onownershiptransferred",level:2},{value:"OnVariableChanged:",id:"onvariablechanged",level:2},{value:"FlagDiscontinuity",id:"flagdiscontinuity",level:4},{value:"Set/Get Gravity",id:"setget-gravity",level:4},{value:"Set/Get Kinematic:",id:"setget-kinematic",level:4},{value:"Respawn:",id:"respawn",level:4}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This doc covers Networking Components, Properties and Events you can use in your Udon Programs."}),"\n",(0,i.jsx)(t.h2,{id:"networking-properties",children:"Networking Properties"}),"\n",(0,i.jsxs)(t.p,{children:["Special properties you can ",(0,i.jsx)(t.em,{children:"get"})," from Networking:"]}),"\n",(0,i.jsx)(t.p,{children:"**IsClogged **- returns true if there is too much data trying to get out. You can use this to hold off some operations or adjust your logic."}),"\n",(0,i.jsx)(t.p,{children:"**IsInstanceOwner **- returns true if the Local Player is the one who created the instance. False when in Build & Test and Unity Playmode."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"IsMaster"})," - returns true if the Local Player is the 'Master' - either the first person who entered the instance or the person automatically designated as Master when the last Master left. Old logic, not recommended for use. IsOwner should be used instead."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"IsNetworkSettled"})," - returns true once all the data in the instance has been deserialized and applied, and it's ready for use."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LocalPlayer"})," - returns the ",(0,i.jsx)(t.a,{href:"/worlds/udon/players",children:"VRC Player API"})," object of the local player. Will be null in the editor - use Utilities.IsValid to easily branch your logic on this."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"SimulationTime"})," - returns the current simulation time of a player or object with networking components.\nSimulation time is a timestamp that refers to how far back in time an object is simulated. This value is used internally for ",(0,i.jsx)(t.a,{href:"/worlds/udon/networking/network-components#vrc-object-sync",children:(0,i.jsx)(t.code,{children:"VRCObjectSync"})})," and ",(0,i.jsx)(t.a,{href:"/worlds/udon/players#simulationtime",children:"players"}),", but can be used in Udon scripts as well. For example, if your ",(0,i.jsx)(t.code,{children:"Time.realtimeSinceStartup"})," is 45 and the SimulationTime of an object is 44.5, then VRChat believes 500ms of delay is necessary to smoothly replicate the object at that moment. You can use that number to learn some information about what ",(0,i.jsx)(t.code,{children:"VRCObjectSync"})," is doing, or to create your own system similar to ",(0,i.jsx)(t.code,{children:"VRCObjectSync"}),". For example, if you do ",(0,i.jsx)(t.code,{children:"Time.realTimeSinceStartup - SimulationTime(player)"})," then that will tell you exactly how much latency that player has at that moment."]}),"\n",(0,i.jsx)(t.p,{children:"Simulation time is frequently adjusted depending on network conditions, including many factors such as latency, reliability, and frequency of the packets being received. The goal of this adjustment is to be as close to real-time as possible to reduce latency, but to leave enough room to prevent hitching. There are a variety of factors that can cause hitching, but one example can be running out of received packets from the owner."}),"\n",(0,i.jsx)(t.h2,{id:"networking-events",children:"Networking Events"}),"\n",(0,i.jsx)(t.p,{children:"These are the events available as part of the Networking system to control how your data is synced."}),"\n",(0,i.jsx)(t.h2,{id:"onpreserialization",children:"OnPreSerialization:"}),"\n",(0,i.jsx)(t.p,{children:"This event triggers just before serialized data will be sent out, it's a good place to set synced variables that you want to be updated for other players."}),"\n",(0,i.jsx)(t.h2,{id:"ondeserialization",children:"OnDeserialization:"}),"\n",(0,i.jsxs)(t.p,{children:["This event triggers when sync data has been transformed from bytes back into usable variables. It does not tell you ",(0,i.jsx)(t.em,{children:"which"})," data has been updated, but serves as a jumping-off point to either update everything that watches synced variables, or a place to check new data against old data and make specific updates."]}),"\n",(0,i.jsx)(t.h2,{id:"ondeserializationdeserializationresult",children:"OnDeserialization(DeserializationResult)"}),"\n",(0,i.jsx)(t.p,{children:"Same as OnDeserialization, but with additional information about the time at which the request was sent and received."}),"\n",(0,i.jsx)(t.h3,{id:"deserializationresult",children:"DeserializationResult"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"DeserializationResult"})," contains two properties:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"sendTime"}),": The time in seconds at which this message was sent."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"receiveTime"}),": The time in seconds at which this message was received."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Both ",(0,i.jsx)(t.code,{children:"sendTime"})," and ",(0,i.jsx)(t.code,{children:"receiveTime"})," measure based on the time in seconds since VRChat has started, from your perspective (see ",(0,i.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Time-realtimeSinceStartup.html",children:"Time.realtimeSinceStartup"}),"). This means that if you want to know how many seconds ago a certain Deserialization was sent, you can calculate it with ",(0,i.jsx)(t.code,{children:"Time.realtimeSinceStartup - sendTime"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that every user's ",(0,i.jsx)(t.code,{children:"Time.realtimeSinceStartup"})," is different, so one player's ",(0,i.jsx)(t.code,{children:"sendTime"})," is going to be different from another player's ",(0,i.jsx)(t.code,{children:"sendTime"}),". As a result, if you want to sync a specific ",(0,i.jsx)(t.code,{children:"sendTime"})," to other players, you will need to calculate its offset by subtracting your ",(0,i.jsx)(t.code,{children:"Time.realtimeSinceStartup"}),". Then, when the other players receive that offset, they can add back their own ",(0,i.jsx)(t.code,{children:"Time.realtimeSinceStartup"})," to the offset in order to determine the absolute time relative to their own clock."]}),"\n",(0,i.jsx)(t.p,{children:"SendTime can be a negative number if the message was sent by someone else before you ever launched VRChat."}),"\n",(0,i.jsx)(t.h2,{id:"onpostserialization",children:"OnPostSerialization:"}),"\n",(0,i.jsxs)(t.p,{children:["This event triggers just after an attempt was made to send serialized data. It returns a ",(0,i.jsx)(t.strong,{children:"SerializationResult"})," struct with a 'success' bool and 'byteCount' int with the number of bytes sent."]}),"\n",(0,i.jsx)(t.h2,{id:"onspawn",children:"OnSpawn:"}),"\n",(0,i.jsx)(t.p,{children:"This event is deprecated - use the typical OnEnabled event if you want to do something when an object is 'Spawned' from the pool."}),"\n",(0,i.jsx)(t.h2,{id:"onownershiprequest",children:"OnOwnershipRequest:"}),"\n",(0,i.jsx)(t.p,{children:'This event is triggered when someone has requested to take ownership. It includes the Player Objects for the Requester and the Requested Owner. To approve or deny the change, set a boolean value into a "Set Return Value" node. This logic runs locally on both the requester and the owner, so be aware that disagreements in logic between the two will cause a desync. This is most likely to be expressed by the ownership transfer being unexpectedly rejected by the owner.'}),"\n",(0,i.jsx)(t.h2,{id:"onownershiptransferred",children:"OnOwnershipTransferred:"}),"\n",(0,i.jsx)(t.p,{children:"This event is triggered for everyone in the instance when an objects ownership is changed, and includes the Player Object for the new owner."}),"\n",(0,i.jsx)(t.h2,{id:"onvariablechanged",children:"OnVariableChanged:"}),"\n",(0,i.jsx)(t.p,{children:"This is a special type of event that you can create for any variable. In Udon Graph, you create it by dragging and dropping a variable into the graph while holding alt. This event detects when the variable changes, which can include when you receive synced variables from other players."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"changing the contents of an array does not trigger a change, because the array itself is still the same."}),"\n",(0,i.jsx)(t.li,{children:"OnVariableChanged triggers immediately when the variable itself is written to, unlike OnDeserialization which triggers after it has finished writing all the synced variables. This means that if you use OnVariableChanged from one synced variable and try to get the contents of a different synced variable, it is not guaranteed that it has been updated with the latest synced data yet."}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"vrc-object-sync",children:"VRC Object Sync"}),"\n",(0,i.jsx)(t.p,{children:"This component will automatically sync the Transform (position, rotation scale) and Rigidbody (physics) of the object you put it on. It has a few special methods and properties you can access:"}),"\n",(0,i.jsx)(t.h4,{id:"flagdiscontinuity",children:"FlagDiscontinuity"}),"\n",(0,i.jsx)(t.p,{children:"Trigger this when you want to teleport the object - the changes you make this frame will be applied without smoothing."}),"\n",(0,i.jsx)(t.h4,{id:"setget-gravity",children:"Set/Get Gravity"}),"\n",(0,i.jsxs)(t.p,{children:["When gravity is on, this rigidbody is affected by gravity and will fall to the ground. Normally, gravity is a property of the rigidbody. However, when you have VRCObjectSync, this property must be controlled by the VRCObjectSync component instead. You can use these functions to do that. This effectively behaves like a synced variable, so ",(0,i.jsx)(t.strong,{children:"only the owner can set gravity."})]}),"\n",(0,i.jsx)(t.h4,{id:"setget-kinematic",children:"Set/Get Kinematic:"}),"\n",(0,i.jsxs)(t.p,{children:["When kinematic is on, this rigidbody ignores forces, collisions and joints. Normally, kinematic is a property of the rigidbody.  However, when you have VRCObjectSync, this property must be controlled by the VRCObjectSync component instead. You can use these functions to do that. This effectively behaves like a synced variable, so ",(0,i.jsx)(t.strong,{children:"only the owner can set kinematic."})]}),"\n",(0,i.jsx)(t.h4,{id:"respawn",children:"Respawn:"}),"\n",(0,i.jsxs)(t.p,{children:["Teleports this object back to its starting Position and Rotation, and removes its Velocities.\nSpecifically, it sets ",(0,i.jsx)(t.strong,{children:"DiscontinuityHint"})," to true to make the following changes instant instead of smooth. Then it:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"sets transform.position to initial position"}),"\n",(0,i.jsx)(t.li,{children:"sets transform.rotation to initial rotation"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If the object has a rigidbody:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"sets the rigidbody.velocity to Vector3.zero"}),"\n",(0,i.jsx)(t.li,{children:"sets the rigidbody.angularVelocity Vector3.zero"}),"\n",(0,i.jsx)(t.li,{children:"sets the rigidbody.position to initial position"}),"\n",(0,i.jsx)(t.li,{children:"sets the rigidbody.rotation to initial rotation"}),"\n"]}),"\n",(0,i.jsx)(t.h1,{id:"vrc-object-pool",children:"VRC Object Pool"}),"\n",(0,i.jsx)(t.p,{children:"VRC Object Pool provides a lightweight method of managing an array of game objects. The pool will manage and synchronize the active state of each object it holds."}),"\n",(0,i.jsxs)(t.p,{children:["To make an object active, the Owner of the pool triggers the ",(0,i.jsx)(t.strong,{children:"TryToSpawn"})," node, which will return the object that was made active, or a null object if none are available. Objects may be returned to the pool by the pool's owner, and automatically disabled, via the ",(0,i.jsx)(t.strong,{children:"Return"})," node."]}),"\n",(0,i.jsx)(t.p,{children:"Late joiners will have the objects automatically made active or inactive where appropriate."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);