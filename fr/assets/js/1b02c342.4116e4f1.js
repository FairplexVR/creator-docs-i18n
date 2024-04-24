"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3552],{9358:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var s=r(74848),i=r(28453);const l={title:"Chargement d'Image",slug:"image-loading",excerpt:"Afficher des fichiers image depuis Internet dans votre monde VRChat",hidden:!1,createdAt:"2023-02-07T01:09:55.404Z",updatedAt:"2023-05-15T15:20:08.022Z"},d=void 0,t={id:"worlds/udon/image-loading",title:"Chargement d'Image",description:"Le Chargement d'Image vous permet d'afficher des images depuis internet dans votre monde VRChat. Lorsque qu'un utilisateur visite votre monde, l'image peut \xeatre t\xe9l\xe9charg\xe9e depuis internet et utilis\xe9e comme une texture dans vos mat\xe9riaux. Voici quelques exemples de comment peut \xeatre utilis\xe9 le Chargement d'Image :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/image-loading.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/image-loading",permalink:"/creator-docs-i18n/fr/worlds/udon/image-loading",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/udon/image-loading.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821470,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Chargement d'Image",slug:"image-loading",excerpt:"Afficher des fichiers image depuis Internet dans votre monde VRChat",hidden:!1,createdAt:"2023-02-07T01:09:55.404Z",updatedAt:"2023-05-15T15:20:08.022Z"},sidebar:"tutorialSidebar",previous:{title:"Event Execution Order",permalink:"/creator-docs-i18n/fr/worlds/udon/event-execution-order"},next:{title:"Input Events",permalink:"/creator-docs-i18n/fr/worlds/udon/input-events"}},o={},a=[{value:"Avant de Commencer",id:"avant-de-commencer",level:2},{value:"N\u0153uds UdonGraph",id:"n\u0153uds-udongraph",level:2},{value:"VRCImageDownloader",id:"vrcimagedownloader",level:4},{value:"DownloadImage",id:"downloadimage",level:4},{value:"Dispose",id:"dispose",level:4},{value:"TextureInfo",id:"textureinfo",level:4},{value:"IVRCImageDownload",id:"ivrcimagedownload",level:4},{value:"VRCImageDownloadState",id:"vrcimagedownloadstate",level:4},{value:"VRCImageDownloadError",id:"vrcimagedownloaderror",level:4},{value:"\xc9v\xe9nements",id:"\xe9v\xe9nements",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Le Chargement d'Image vous permet d'afficher des images depuis internet dans votre monde VRChat. Lorsque qu'un utilisateur visite votre monde, l'image peut \xeatre t\xe9l\xe9charg\xe9e depuis internet et utilis\xe9e comme une texture dans vos mat\xe9riaux. Voici quelques exemples de comment peut \xeatre utilis\xe9 le Chargement d'Image :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Pour mettre \xe0 jour des textures dans votre monde sans un r\xe9-upload."}),"\n",(0,s.jsx)(n.li,{children:"Pour cr\xe9er un poster dans votre monde et le mettre \xe0 jour pour des \xe9v\xe9nements saisonniers ou f\xeates."}),"\n",(0,s.jsx)(n.li,{children:"Pour r\xe9utiliser la m\xeame texture dans plusieurs mondes et tous les mettre \xe0 jour en m\xeame temps."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Le SDK inclut un script ",(0,s.jsx)(n.code,{children:"ImageDownload"})," facile \xe0 utiliser, ou vous pouvez faire votre propre script avec le nouvelle objet ",(0,s.jsx)(n.code,{children:"VRCimageDownloader"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Vous pouvez ",(0,s.jsx)(n.a,{href:"/worlds/examples/image-loading",children:"voir notre exemple d'Image Loader"})," pour commencer rapidement."]})}),"\n",(0,s.jsx)(n.h2,{id:"avant-de-commencer",children:"Avant de Commencer"}),"\n",(0,s.jsx)(n.p,{children:"Il y a quelques limites et param\xe8tres au Chargement d'Image que vous devriez savoir :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"La r\xe9solution maximale est de 2048 x 2048. Tenter de t\xe9l\xe9charger des images plus grandes entra\xeenera une erreur."}),"\n",(0,s.jsxs)(n.li,{children:["Une image peut \xeatre t\xe9l\xe9charg\xe9e toutes les cinq secondes.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si cette limite est d\xe9pass\xe9e, les t\xe9l\xe9chargements de images seront mis en file d'attente et t\xe9l\xe9charg\xe9s dans un ordre al\xe9atoire."}),"\n",(0,s.jsx)(n.li,{children:"Cette limite s'applique sur toute votre sc\xe8ne, ind\xe9pendamment du nombre de composants VRCImageDownload utilis\xe9s."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"L'URL doit pointer directement un fichier image. Rediriger une URL n'est pas autoris\xe9 et entra\xeenera une erreur."}),"\n",(0,s.jsxs)(n.li,{children:["Les images t\xe9l\xe9charg\xe9es sont automatiquement interpr\xe9t\xe9es au format RGBA, RGB ou RG.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Par exemple, une image en niveaux de gris avec un canal alpha est interpr\xe9t\xe9e comme une image RG."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Il y a une limite de 1000 \xe9l\xe9ments dans la file d'attente."}),"\n",(0,s.jsx)(n.li,{children:"Les tampons d'entr\xe9e et de sortie sont limit\xe9s \xe0 un maximum de 32Mo, les images les d\xe9passant entra\xeeneront une erreur."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Et seulement certains domaines sont autoris\xe9es. Si un domaine n'est pas dans la liste, les images ne seront pas t\xe9l\xe9charg\xe9es \xe0 moins d'avoir activ\xe9 ",(0,s.jsx)(n.strong,{children:"Allow Untrusted URLs"})," dans les param\xe8tres d'utilisateur."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Discord (",(0,s.jsx)(n.code,{children:"cdn.discordapp.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Dropbox (",(0,s.jsx)(n.code,{children:"dl.dropbox.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["GitHub (",(0,s.jsx)(n.code,{children:"*.github.io"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["ImageBam (",(0,s.jsx)(n.code,{children:"images4.imagebam.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["ImgBB (",(0,s.jsx)(n.code,{children:"i.ibb.co"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["imgbox (",(0,s.jsx)(n.code,{children:"images2.imgbox.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Imgur (",(0,s.jsx)(n.code,{children:"i.imgur.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Postimages (",(0,s.jsx)(n.code,{children:"i.postimg.cc"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Reddit (",(0,s.jsx)(n.code,{children:"i.redd.it"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Twitter (",(0,s.jsx)(n.code,{children:"pbs.twimg.com"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["VRChat (",(0,s.jsx)(n.code,{children:"assets.vrchat.com"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"n\u0153uds-udongraph",children:"N\u0153uds UdonGraph"}),"\n",(0,s.jsx)(n.h4,{id:"vrcimagedownloader",children:"VRCImageDownloader"}),"\n",(0,s.jsxs)(n.p,{children:["Utilisez le constructeur de ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," pour cr\xe9er un t\xe9l\xe9chargeur d'image, qui peut t\xe9l\xe9charger une image depuis internet, en cours d'ex\xe9cution."]}),"\n",(0,s.jsx)(n.h4,{id:"downloadimage",children:"DownloadImage"}),"\n",(0,s.jsxs)(n.p,{children:["T\xe9l\xe9charge une image, puis appelle un \xe9v\xe9nement indiquant une r\xe9ussite ou un \xe9chec (voir les '\xc9v\xe9nements ci-dessous').",(0,s.jsx)(n.br,{}),"\n","Retourne un ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"}),", qui peut \xeatre utilis\xe9 pour suivre la progression du t\xe9l\xe9chargement."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Instance"})," : Le composant ",(0,s.jsx)(n.code,{children:"ImageDownloader"})," qui t\xe9l\xe9charge l'image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Url"})," : le ",(0,s.jsx)(n.code,{children:"VRCURL"})," de la texture \xe0 t\xe9l\xe9charger."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"UdonBehavior"})," (optionnel) : Le ",(0,s.jsx)(n.code,{children:"UdonBehavior"})," auquel envoyer les \xe9v\xe9nements de ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"}),". Si ",(0,s.jsx)(n.code,{children:"Udonbehavior"})," est vide, le UdonBehaviour actuel recevra tous les \xe9v\xe9nements.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Notez que UdonSharp ne recevra aucun \xe9v\xe9nements \xe0 moins qu'un ",(0,s.jsx)(n.code,{children:"UdonBehavior"})," ne soit sp\xe9cifi\xe9."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TextureInfo"})," (optionnel) : l'objet ",(0,s.jsx)(n.code,{children:"TextureInfo"})," contenant les param\xe8tres pour les textures nouvellement cr\xe9\xe9e."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"dispose",children:"Dispose"}),"\n",(0,s.jsxs)(n.p,{children:["Nettoie ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"}),". Lib\xe8re les texture t\xe9l\xe9charg\xe9e de la m\xe9moire. Appeler ",(0,s.jsx)(n.code,{children:"Dispose"})," invalide l'objet VRCImageDownloader, et un nouveau doit \xeatre instanci\xe9 pour t\xe9l\xe9charger des images."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note sur l'\xe9limination et la collecte du garbage :"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Appeler ",(0,s.jsx)(n.code,{children:"Dispose"})," va invalider ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"}),", les ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"})," associ\xe9s, et les texture t\xe9l\xe9charg\xe9es.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Apr\xe8s avoir appeler ",(0,s.jsx)(n.code,{children:"Dispose"}),", l'\xe9tat ",(0,s.jsx)(n.code,{children:"VRCImageDownloadState"})," de ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"})," va changer en ",(0,s.jsx)(n.code,{children:"Unloaded"})," jusqu'\xe0 qu'il soit collect\xe9 par le \"Garbage collector\"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," garde les textures en m\xe9moire jusqu'\xe0 ce que la Texture2D sous-jacente soit d\xe9truite ou \xe9limin\xe9e, en utilisant sa fonction ",(0,s.jsx)(n.code,{children:"Dispose"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Assurez-vous de sauvegarder la r\xe9f\xe9rence de votre ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"}),' en tant que variable pour \xe9viter qu\'elle (et toute texture t\xe9l\xe9charg\xe9e) ne soit ramass\xe9e al\xe9atoirement par le "Garbage collector".']}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"textureinfo",children:"TextureInfo"}),"\n",(0,s.jsx)(n.p,{children:"Contient des param\xe8tres \xe0 appliquer sur une texture t\xe9l\xe9charg\xe9e."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"GenerateMipmaps"})," : Active la g\xe9n\xe9ration de Mipmap. (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FilterMode"})," : D\xe9finit le ",(0,s.jsx)(n.code,{children:"FilterMode"})," de la texture. (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"Bilinear"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WrapModeU"})," : Le ",(0,s.jsx)(n.code,{children:"TextureWrapMode"})," le long de l'axe U (horizontal) (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WrapModeV"})," : Le ",(0,s.jsx)(n.code,{children:"TextureWrapMode"})," le long de l'axe V (vertical) (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WrapModeW"})," : Le ",(0,s.jsx)(n.code,{children:"TextureWrapMode"})," le long de l'axe W (profondeur, uniquement pertinent pour les Texture3D) (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AnisoLevel"})," : Le ",(0,s.jsx)(n.code,{children:"anisoLevel"})," de la texture. Une valeur de 0 d\xe9sactive le filtrage, 16 \xe9quivaut \xe0 un filtrage complet. (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"9"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VRChat utilise un filtrage anisotrope forc\xe9. Lorsque la valeur d'anisoLevel est entre 1 et 9, Unity r\xe8gle anisoLevel \xe0 9. Si la valeur est sup\xe9rieure \xe0 9, Unity la limite entre 9 et 16."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MaterialProperty"})," : Remplace ",(0,s.jsx)(n.code,{children:"MaterialProperty"})," sur lequel appliquer la texture t\xe9l\xe9charg\xe9e, si un ",(0,s.jsx)(n.code,{children:"material"})," a \xe9t\xe9 sp\xe9cifi\xe9 dans ",(0,s.jsx)(n.code,{children:"DownloadImage"}),". (Par d\xe9faut : ",(0,s.jsx)(n.code,{children:"_MainTex"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"ivrcimagedownload",children:"IVRCImageDownload"}),"\n",(0,s.jsxs)(n.p,{children:["Contient des informations sur l'image t\xe9l\xe9charg\xe9e. Renvoy\xe9 par la fonction ",(0,s.jsx)(n.code,{children:"DownloadImage"})," de ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"}),", par ",(0,s.jsx)(n.code,{children:"OnImageLoadSuccess"}),", et par ",(0,s.jsx)(n.code,{children:"OnImageLoadError"}),".\nNotez que plusieurs de ces champs seront invalides jusqu'\xe0 ce que le t\xe9l\xe9chargement soit compl\xe9t\xe9 ou ait \xe9chou\xe9."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Error"})," : R\xe9cup\xe8re ",(0,s.jsx)(n.code,{children:"VRCImageDownloadError"})," associ\xe9 \xe0 l'\xe9v\xe9nement."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Errormessage"})," : R\xe9cup\xe8re le message d'erreur en tant que ",(0,s.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Material"})," : R\xe9cup\xe8re le mat\xe9riau envoy\xe9 \xe0 la fonction ",(0,s.jsx)(n.code,{children:"DownloadImage"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Progress"})," : R\xe9cup\xe8re la progression du t\xe9l\xe9chargement de l'image sous forme de ",(0,s.jsx)(n.code,{children:"float"})," entre 0 et 1. Utilisez cela pour suivre la progression du t\xe9l\xe9chargement, par exemple, pour des barres de chargement personnalis\xe9es."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Result"})," : La ",(0,s.jsx)(n.code,{children:"Texture2D"})," de l'image t\xe9l\xe9charg\xe9e."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get SizeInMemoryBytes"})," : R\xe9cup\xe8re la taille de la texture en octets en tant qu'",(0,s.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get State"})," : R\xe9cup\xe8re le ",(0,s.jsx)(n.code,{children:"VRCImageDownloadState"})," indiquant l'\xe9tat du t\xe9l\xe9chargement de l'image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get TextureInfo"})," : Les informations sur la texture donn\xe9es \xe0 la fonction ",(0,s.jsx)(n.code,{children:"DownloadImage"})," (TextureInfo)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get Udonbehavior"})," : R\xe9cup\xe8re le UdonBehavior auquel les \xe9v\xe9nements du t\xe9l\xe9chargement de l'image sont envoy\xe9s (UdonBehavior)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Get URL"})," : R\xe9cup\xe8re le ",(0,s.jsx)(n.code,{children:"VRCURL"})," du t\xe9l\xe9chargement de l'image."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"vrcimagedownloadstate",children:"VRCImageDownloadState"}),"\n",(0,s.jsxs)(n.p,{children:["Indique l'\xe9tat du t\xe9l\xe9chargement de l'image dans ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"})," :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pending"})," : N'a pas d\xe9marr\xe9 ou toujours en cours de progression."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error"})," : Le t\xe9l\xe9chargement a \xe9chou\xe9 (voir ",(0,s.jsx)(n.a,{href:"#vrcimagedownloaderror",children:"VRCImageDownloadError"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Complete"})," : T\xe9l\xe9chargement termin\xe9, la texture est pr\xeate \xe0 l'emploi."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unloaded"})," : \xc9limination en attente apr\xe8s que ",(0,s.jsx)(n.code,{children:"Dispose"})," ne soit appel\xe9 sur ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unknown"})," : \xc9tat inconnu."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"vrcimagedownloaderror",children:"VRCImageDownloadError"}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque le t\xe9l\xe9chargement d'une image \xe9choue, ",(0,s.jsx)(n.code,{children:"OnImageLoadError"})," est appel\xe9. Le champ ",(0,s.jsx)(n.code,{children:"Error"})," sur ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"})," va contenir un des \xe9tats d'erreur suivants :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InvalidURL"})," : L'URL de t\xe9l\xe9chargement utilis\xe9e dans ",(0,s.jsx)(n.code,{children:"DownloadImage"})," est invalide."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AccessDenied"})," : L'acc\xe8s \xe0 l'URL est refus\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"InvalidImage"})," : L'image t\xe9l\xe9charg\xe9e est invalide."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DownloadError"})," : Une erreur de requ\xeate web est survenue."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unknown"})," : \xc9tat d'erreur inconnu."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\xe9v\xe9nements",children:"\xc9v\xe9nements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OnImageLoadSuccess"})," : Renvoie ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"}),". Appel\xe9 lorsqu'un ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," a r\xe9ussi \xe0 t\xe9l\xe9charger une image."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OnImageLoadError"})," : Renvoie ",(0,s.jsx)(n.code,{children:"IVRCImageDownload"}),". Appel\xe9 lorsqu'un ",(0,s.jsx)(n.code,{children:"VRCImageDownloader"})," n'a pas r\xe9ussi \xe0 t\xe9l\xe9charger une image."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>t});var s=r(96540);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);