"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3750],{98466:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var r=t(74848),i=t(28453);const n={title:"Liste blanche pour les Lecteurs Vid\xe9o",slug:"www-whitelist",hidden:!1,createdAt:"2020-09-10T18:56:07.748Z",updatedAt:"2023-03-09T22:55:53.659Z"},d=void 0,o={id:"worlds/udon/video-players/www-whitelist",title:"Liste blanche pour les Lecteurs Vid\xe9o",description:"VRChat sur Quest peut lire des vid\xe9os \xe0 partir de liens directs vers des fichiers vid\xe9o. Ces URLs se terminent g\xe9n\xe9ralement avec un nom de fichier vid\xe9o support\xe9, comme par exemple http//test.com/cats.webm. Si vous visitez le lien et voyez tout un site autour de la vid\xe9o, ce lien ne se lira probablement pas sur Android /  Quest car l'application que VRChat utilise pour r\xe9soudre ces liens vers des vid\xe9os ne s'ex\xe9cute pas sur Android. Les cr\xe9ateurs devront d\xe9placer la vid\xe9o vers un h\xf4te qui supporte les liens directs, ou devront trouver une solution pour contourner ce probl\xe8me.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/video-players/www-whitelist.md",sourceDirName:"worlds/udon/video-players",slug:"/worlds/udon/video-players/www-whitelist",permalink:"/creator-docs-i18n/fr/worlds/udon/video-players/www-whitelist",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/video-players/www-whitelist.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713665446,formattedLastUpdatedAt:"21 avr. 2024",frontMatter:{title:"Liste blanche pour les Lecteurs Vid\xe9o",slug:"www-whitelist",hidden:!1,createdAt:"2020-09-10T18:56:07.748Z",updatedAt:"2023-03-09T22:55:53.659Z"},sidebar:"tutorialSidebar",previous:{title:"Video Players",permalink:"/creator-docs-i18n/fr/worlds/udon/video-players/"},next:{title:"Animation Events",permalink:"/creator-docs-i18n/fr/worlds/udon/animation-events"}},c={},l=[{value:"Services sur Liste Blanche",id:"services-sur-liste-blanche",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsxs)(s.p,{children:["VRChat sur Quest peut lire des vid\xe9os \xe0 partir de liens directs vers des fichiers vid\xe9o. Ces URLs se terminent g\xe9n\xe9ralement avec un nom de fichier vid\xe9o support\xe9, comme par exemple ",(0,r.jsx)(s.a,{href:"http://something.com/video.mp4",children:"http://something.com/video.mp4"})," ou ",(0,r.jsx)(s.a,{href:"http://test.com/cats.webm",children:"http://test.com/cats.webm"}),". Si vous visitez le lien et voyez tout un site autour de la vid\xe9o, ce lien ne se lira probablement pas sur Android /  Quest car l'application que VRChat utilise pour r\xe9soudre ces liens vers des vid\xe9os ne s'ex\xe9cute pas sur Android. Les cr\xe9ateurs devront d\xe9placer la vid\xe9o vers un h\xf4te qui supporte les liens directs, ou devront trouver une solution pour contourner ce probl\xe8me."]}),(0,r.jsx)(s.p,{children:"Quelque solutions de contournement existent pour les utilisateurs avanc\xe9s. VRChat n'a pas examin\xe9 ces m\xe9thodes, ne les approuve pas et ne peut garantir leur fonctionnement continuel, mais elles ont \xe9t\xe9 recommand\xe9es par des modifications sugg\xe9r\xe9es \xe0 notre documentation."}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://streamlink.github.io",children:"Streamlink"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://ask.vrchat.com/t/protv-by-architechanon-usage-guides-and-walkthroughs/7029/11",children:'ArchiTechAnon\'s "Understanding URLs in VRChat" post'}),'"']}),"\n"]}),(0,r.jsx)(s.p,{children:"De futures mises \xe0 jour pourront am\xe9liorer cette fonctionnalit\xe9."})]}),"\n",(0,r.jsx)(s.p,{children:"Les services suivants sont sur la liste blanche du lecteur vid\xe9o."}),"\n",(0,r.jsx)(s.p,{children:"Si un service n'est pas dans cette liste, il n'y a aura pas de lecture \xe0 moins d'avoir activ\xe9 \"Allow Untrusted URLs\" dans les param\xe8tres."}),"\n",(0,r.jsx)(s.p,{children:"VRChat sur Android ne lira pas de vid\xe9os si l'h\xf4te n'utilise pas le protocole HTTPS."}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsx)(s.p,{children:'Le lecteur vid\xe9o en exemple dans le SDK ne g\xe9rera pas les cas o\xf9 le Master a d\xe9sactiv\xe9 "Untrusted URLs", ce qui emp\xeachera la lecture des vid\xe9os. Les lecteurs vid\xe9o cr\xe9\xe9s par les joueurs devront avoir un code Udon modifi\xe9 pour donner la propri\xe9t\xe9 de synchronisation \xe0 l\'utilisateur demandant la vid\xe9o.'})}),"\n",(0,r.jsx)(s.h2,{id:"services-sur-liste-blanche",children:"Services sur Liste Blanche"}),"\n",(0,r.jsx)(s.p,{children:"Les services list\xe9s ci-dessous sont intrins\xe8quement dignes de confiance et sont autoris\xe9s avec notre liste blanche d'URL par d\xe9faut. La ressource acc\xe9d\xe9e (c'est-\xe0-dire l'URL que vous entrez/utilisez dans le lecteur vid\xe9o) doit r\xe9sider dans le service de domaine list\xe9 \xe0 c\xf4t\xe9 du nom du service. Cela signifie que les r\xe9ducteur d'URL peuvent ne pas fonctionner !"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Le listage ci-dessous ne constitue pas des partenariats ou des endossements et peut changer \xe0 tout moments sans pr\xe9avis"}),"."]})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Service"}),(0,r.jsx)(s.th,{children:"Domaine"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"---"}),(0,r.jsx)(s.td,{children:"---"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Soundcloud"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"soundcloud.com"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Facebook Video"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"*.facebook.com"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"NicoNico"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"*.nicovideo.jp"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Twitch.TV"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"*.twitch.tv"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Vimeo"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"*.vimeo.com"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Youku"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"*.youku.com"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"YouTube"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"*.youtube.com"}),",",(0,r.jsx)(s.code,{children:"youtu.be"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"VRCDN"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"*.vrcdn.live"}),",",(0,r.jsx)(s.code,{children:"*.vrcdn.video"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Topaz Chat"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ciel.topaz.chat"})})]})]})]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>o});var r=t(96540);const i={},n=r.createContext(i);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);