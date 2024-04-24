"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[875],{8829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=r(74848),n=r(28453),l=r(11470),s=r(19365);const i={title:"Getting Players",slug:"getting-players",hidden:!1,createdAt:"2021-01-22T01:48:13.564Z",updatedAt:"2021-11-12T01:23:15.713Z"},o=void 0,u={id:"worlds/udon/players/getting-players",title:"Getting Players",description:"These nodes are useful for getting an individual Player, a group of them, or all of them.",source:"@site/docs/worlds/udon/players/getting-players.md",sourceDirName:"worlds/udon/players",slug:"/worlds/udon/players/getting-players",permalink:"/creator-docs-i18n/worlds/udon/players/getting-players",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/players/getting-players.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1706320042,formattedLastUpdatedAt:"Jan 27, 2024",frontMatter:{title:"Getting Players",slug:"getting-players",hidden:!1,createdAt:"2021-01-22T01:48:13.564Z",updatedAt:"2021-11-12T01:23:15.713Z"},sidebar:"tutorialSidebar",previous:{title:"Player API",permalink:"/creator-docs-i18n/worlds/udon/players/"},next:{title:"Player Audio",permalink:"/creator-docs-i18n/worlds/udon/players/player-audio"}},c={},d=[{value:"Networking.get LocalPlayer",id:"networkingget-localplayer",level:3},{value:"GetPlayerCount",id:"getplayercount",level:3},{value:"GetPlayers",id:"getplayers",level:3},{value:"GetPlayerById",id:"getplayerbyid",level:3},{value:"get playerId",id:"get-playerid",level:3},{value:"GetPlayerId",id:"getplayerid",level:3},{value:"Player Tag System",id:"player-tag-system",level:2},{value:"SetPlayerTag / GetPlayerTag",id:"setplayertag--getplayertag",level:3},{value:"ClearPlayerTags",id:"clearplayertags",level:3},{value:"GetPlayersWithTag",id:"getplayerswithtag",level:3}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"These nodes are useful for getting an individual Player, a group of them, or all of them."}),"\n",(0,a.jsx)(t.h3,{id:"networkingget-localplayer",children:"Networking.get LocalPlayer"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"VRCPlayerApi"})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Please note that this function is a member of the Networking class, but it is being included here."})}),"\n",(0,a.jsxs)(t.p,{children:["The local player is the Player that this Udon script is currently running on-- alternately, the local player is ",(0,a.jsx)(t.em,{children:"you"}),". It's very important to know yourself!"]}),"\n",(0,a.jsx)(t.h3,{id:"getplayercount",children:"GetPlayerCount"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"int"})}),"\n",(0,a.jsx)(t.p,{children:"Gets the actual number of Players in the instance when it is called."}),"\n",(0,a.jsx)(t.h3,{id:"getplayers",children:"GetPlayers"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"VRCPlayerApi[]"})}),"\n",(0,a.jsxs)(t.p,{children:["This is how you get all the Players in your world so you can go through them in a For Loop and apply settings, make changes, look for a particular name, etc. To use it, you ",(0,a.jsx)(t.em,{children:"first need to create a VRCPlayerApi Array"}),"."]}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(s.A,{value:"graph",label:"Udon Graph",children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"The bare minimum for a working call to GetPlayers. A better approach would be to construct VRCPlayerApi[] as a variable so you can reuse it.",src:r(84378).A+"",width:"1027",height:"187"})})}),(0,a.jsx)(s.A,{value:"cs",label:"UdonSharp",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-cs",children:"var players = new VRCPlayerApi[VRCPlayerApi.GetPlayerCount()];  \nVRCPlayerApi.GetPlayers(players);\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Above, you can see the bare minimum for a working call to GetPlayers. A better approach would be to construct VRCPlayerApi[] as a variable so you can reuse it."}),"\n",(0,a.jsx)(t.h3,{id:"getplayerbyid",children:"GetPlayerById"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"int"})}),"\n",(0,a.jsx)(t.p,{children:"Get a VRCPlayerApi object for the given player Id if it exists."}),"\n",(0,a.jsx)(t.h3,{id:"get-playerid",children:"get playerId"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"int"})}),"\n",(0,a.jsx)(t.p,{children:"Get the cached PlayerId, calls GetPlayerId if it hasn't been cached yet."}),"\n",(0,a.jsx)(t.h3,{id:"getplayerid",children:"GetPlayerId"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"int"})}),"\n",(0,a.jsx)(t.p,{children:"Gets the Player's Network Id from the source."}),"\n",(0,a.jsx)(t.h2,{id:"player-tag-system",children:"Player Tag System"}),"\n",(0,a.jsx)(t.p,{children:"This system is a quick-and-dirty way of assigning strings to players without creating your own variables and collections."}),"\n",(0,a.jsx)(t.h3,{id:"setplayertag--getplayertag",children:"SetPlayerTag / GetPlayerTag"}),"\n",(0,a.jsxs)(t.p,{children:["Set: ",(0,a.jsx)(t.em,{children:"string, string"})]}),"\n",(0,a.jsxs)(t.p,{children:["Get: ",(0,a.jsx)(t.em,{children:"string"})]}),"\n",(0,a.jsx)(t.p,{children:'Sets a string variable that you can look up later. For example, you could set the "role" of a player in a cooking game to "chef" or "customer". Then you could GetPlayerTag for "role" and get back either "chef" or "customer".'}),"\n",(0,a.jsx)(t.h3,{id:"clearplayertags",children:"ClearPlayerTags"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"VRCPlayerApi"})}),"\n",(0,a.jsx)(t.p,{children:"Remove all tags that you've set on a Player."}),"\n",(0,a.jsx)(t.h3,{id:"getplayerswithtag",children:"GetPlayersWithTag"}),"\n",(0,a.jsxs)(t.admonition,{type:"caution",children:[(0,a.jsx)(t.p,{children:"Not currently working. Returns a List, which is unavailable in Udon."}),(0,a.jsx)(t.p,{children:"You will be able to pass in an array of VRCPlayerApi objects and a tag and the method will fill the array with Players who have that tag set."})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(18215);const n={tabItem:"tabItem_Ymn6"};var l=r(74848);function s(e){let{children:t,hidden:r,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(18215),l=r(23104),s=r(56347),i=r(205),o=r(57485),u=r(31682),c=r(89466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=y({queryString:r,groupId:n}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),f=(()=>{const e=u??g;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(74848);function v(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),n=i[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,n.A)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(x,{...e,...t})]})}function w(e){const t=(0,m.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},84378:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/graphgetplayers-ac84b77c6ce754296175a3f100a3eb0b.png"},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var a=r(96540);const n={},l=a.createContext(n);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);