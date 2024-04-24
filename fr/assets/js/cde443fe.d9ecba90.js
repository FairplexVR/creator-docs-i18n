"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[433],{11755:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var t=s(74848),r=s(28453);const o={slug:"release-3-5-0",date:new Date("2023-12-08T00:00:00.000Z"),title:"Version 3.5.0",authors:["momo"],tags:["release"],draft:!1},i=void 0,a={permalink:"/creator-docs-i18n/fr/releases/release-3-5-0",source:"@site/i18n/fr/docusaurus-plugin-content-blog/release-3.5.0.md",title:"Version 3.5.0",description:"R\xe9sum\xe9",date:"2023-12-08T00:00:00.000Z",formattedDate:"8 d\xe9cembre 2023",tags:[{label:"release",permalink:"/creator-docs-i18n/fr/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-5-0",date:"2023-12-08T00:00:00.000Z",title:"Version 3.5.0",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Release 3.5.1",permalink:"/creator-docs-i18n/fr/releases/release-3-5-1"},nextItem:{title:"Version 3.4.2",permalink:"/creator-docs-i18n/fr/releases/release-3-4-2"}},l={authorsImageUrls:[void 0]},u=[{value:"R\xe9sum\xe9",id:"r\xe9sum\xe9",level:2},{value:"Notes sur l&#39;Utilisation",id:"notes-sur-lutilisation",level:2},{value:"Nouvelles Fonctionnalit\xe9s",id:"nouvelles-fonctionnalit\xe9s",level:2},{value:"Changements",id:"changements",level:2},{value:"Probl\xe8mes Connus",id:"probl\xe8mes-connus",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Traduction incompl\xe8te !",type:"warning"}),"\n",(0,t.jsx)(n.h2,{id:"r\xe9sum\xe9",children:"R\xe9sum\xe9"}),"\n",(0,t.jsx)(n.p,{children:"C'est le tout premier SDK qui fonctionne avec Unity 2022 !"}),"\n",(0,t.jsx)(n.h2,{id:"notes-sur-lutilisation",children:"Notes sur l'Utilisation"}),"\n",(0,t.jsx)(n.p,{children:'Vous aurez besoin de mettre \xe0 jour votre Creator Companion \xe0 la version 2.2.0 afin de pouvoir g\xe9rer l\'\xe9diteur Unity 2022 pour cr\xe9er des projets compatibles Unity 2022. Vous pouvez v\xe9rifier votre version actuelle en cliquant sur "Settings", puis en regardant dans le coins sup\xe9rieur droit.'}),"\n",(0,t.jsx)(n.h2,{id:"nouvelles-fonctionnalit\xe9s",children:"Nouvelles Fonctionnalit\xe9s"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Il y a une nouvelle "Sc\xe8ne par D\xe9faut VRChat" que vous pouvez choisir lors de la cr\xe9ation d\'une nouvelle sc\xe8ne avec tout les \xe9l\xe9ments de base n\xe9cessaires pour un monde VRChat.'}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"OnScreenUpdateEvent"})," est un nouvelle \xe9v\xe9nement d\xe9clench\xe9 dans Udon lorsque un utilisateur visite depuis un appareil mobile. Il contient des informations sur l'Orientation et la R\xe9solution de l'\xe9cran lorsque qu'il entre dans un monde, ou \xe0 chaque fois que l'Orientation de leur appareil change."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changements",children:"Changements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Passe de .NET Framework 4.x \xe0 .NET Standard 2.1."}),"\n",(0,t.jsx)(n.li,{children:"Restaure les exemples UdonSharp, d\xe9sormais r\xe9pertori\xe9s sous World Samples."}),"\n",(0,t.jsx)(n.li,{children:"Restaure les anciens fichiers d'UdonSharp et de ClientSim."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"probl\xe8mes-connus",children:"Probl\xe8mes Connus"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"La premi\xe8re fois que vous ouvrez une Sc\xe8ne et s\xe9lectionnez un GameObject dans un prefab avec un U# Behaviour, l'interface graphique pour le composant situ\xe9 directement au dessous du U# Behaviour n'affichera pas son interface graphique. D\xe9s\xe9lectionner et re-s\xe9lectionner le prefab r\xe8gle cela."}),"\n",(0,t.jsxs)(n.li,{children:["les particules tampons (Buffer Particles) ne fonctionne pas comme elles le faisait dans Unity 2019, ",(0,t.jsx)(n.a,{href:"https://x.com/hfcRedddd/status/1696915379090604179",children:"il y a une solution de contournement pour les r\xe9parer, par hfcRed, un membre de la communaut\xe9, ici"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"L'editor peut planter si on met \xe0 jour une r\xe9f\xe9rence d'un shader graph avec un autre shader en utilisant UsePass. C'est une probl\xe8me avec Unity 2022.3.6f1 et c'est r\xe9gl\xe9 dans Unity 2022.3.14f1."}),"\n",(0,t.jsxs)(n.li,{children:["Unity 2022 cause parfois un l'arr\xeat du debugger de Rider pour une exceptions non g\xe9r\xe9e dans l'IMGUI d'Unity.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Veuillez vous r\xe9f\xe9rer \xe0 ",(0,t.jsx)(n.a,{href:"https://forum.unity.com/threads/rider-debugger-breaks-on-unhandled-exception.1135879/#post-7305256",children:"cette solution de contournement"})," et au ",(0,t.jsx)(n.a,{href:"https://youtrack.jetbrains.com/issue/RIDER-64944",children:"bug tracker de Jetbrains"})," pour plus d'information."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Les Audio Sources spatialis\xe9es peuvent cr\xe9er des avertissements en entrant en mode Play, ou en ajustant leur param\xe8tres."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(96540);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);