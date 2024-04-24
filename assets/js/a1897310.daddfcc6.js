"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8189],{21143:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>t});var i=o(74848),d=o(28453);const s={title:"Image Loading",slug:"image-loading",excerpt:"Display image files from the internet in your VRChat world",hidden:!1,createdAt:"2023-02-07T01:09:55.404Z",updatedAt:"2023-05-15T15:20:08.022Z"},r=void 0,l={id:"worlds/udon/image-loading",title:"Image Loading",description:"Image Loading allows you to display images from the internet in your VRChat world. When a user visits your world, the image can be downloaded from the internet and used as a texture in your materials. Here are a few examples on how Image Loading can be used:",source:"@site/docs/worlds/udon/image-loading.md",sourceDirName:"worlds/udon",slug:"/worlds/udon/image-loading",permalink:"/creator-docs-i18n/worlds/udon/image-loading",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/image-loading.md",tags:[],version:"current",lastUpdatedBy:"Momo the Monster",lastUpdatedAt:1702052609,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{title:"Image Loading",slug:"image-loading",excerpt:"Display image files from the internet in your VRChat world",hidden:!1,createdAt:"2023-02-07T01:09:55.404Z",updatedAt:"2023-05-15T15:20:08.022Z"},sidebar:"tutorialSidebar",previous:{title:"Event Execution Order",permalink:"/creator-docs-i18n/worlds/udon/event-execution-order"},next:{title:"Input Events",permalink:"/creator-docs-i18n/worlds/udon/input-events"}},a={},t=[{value:"Before You Begin",id:"before-you-begin",level:2},{value:"UdonGraph Nodes",id:"udongraph-nodes",level:2},{value:"VRCImageDownloader",id:"vrcimagedownloader",level:4},{value:"DownloadImage",id:"downloadimage",level:4},{value:"Dispose",id:"dispose",level:4},{value:"TextureInfo",id:"textureinfo",level:4},{value:"IVRCImageDownload",id:"ivrcimagedownload",level:4},{value:"VRCImageDownloadState",id:"vrcimagedownloadstate",level:4},{value:"VRCImageDownloadError",id:"vrcimagedownloaderror",level:4},{value:"Events",id:"events",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Image Loading allows you to display images from the internet in your VRChat world. When a user visits your world, the image can be downloaded from the internet and used as a texture in your materials. Here are a few examples on how Image Loading can be used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updating textures in your world without a re-upload."}),"\n",(0,i.jsx)(n.li,{children:"Creating a poster in your world and updating it for seasonal events or parties."}),"\n",(0,i.jsx)(n.li,{children:"Reusing the same texture in multiple worlds and updating them all at once."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The SDK includes an easy-to-use ",(0,i.jsx)(n.code,{children:"ImageDownload"})," script, or you can make your own script with the new ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," object."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can ",(0,i.jsx)(n.a,{href:"/worlds/examples/image-loading",children:"view our Image Loader example"})," to get started quickly."]})}),"\n",(0,i.jsx)(n.h2,{id:"before-you-begin",children:"Before You Begin"}),"\n",(0,i.jsx)(n.p,{children:"There are a few Image Loader limits and parameters you should know:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The maximum resolution is 2048 \xd7 2048 pixels. Attempting to download larger images will result in an error."}),"\n",(0,i.jsxs)(n.li,{children:["One image can be downloaded every five seconds.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If this limit is exceeded, images downloads are queued and downloaded in a random order."}),"\n",(0,i.jsx)(n.li,{children:"This limit applies to your entire scene, regardless of the amount of VRCImageDownload components used."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"The URL must point directly at an image file. URL redirection is not allowed and will result in an error."}),"\n",(0,i.jsxs)(n.li,{children:["Downloaded images are automatically interpreted as RGBA, RGB, or RG images.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"For example, a grayscale image with an alpha channel is interpreted as an RG image."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"There is a limit of 1000 elements in the queue."}),"\n",(0,i.jsx)(n.li,{children:"Both the Input and Output buffers are limited to a maximum of 32MB, images exceeding these will result in an error."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["And only certain domains are allowed. If a domain is not on the list, images will not download unless ",(0,i.jsx)(n.strong,{children:"Allow Untrusted URLs"})," has been enabled in the user's settings."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Discord (",(0,i.jsx)(n.code,{children:"cdn.discordapp.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Dropbox (",(0,i.jsx)(n.code,{children:"dl.dropbox.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["GitHub (",(0,i.jsx)(n.code,{children:"*.github.io"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["ImageBam (",(0,i.jsx)(n.code,{children:"images4.imagebam.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["ImgBB (",(0,i.jsx)(n.code,{children:"i.ibb.co"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["imgbox (",(0,i.jsx)(n.code,{children:"images2.imgbox.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Imgur (",(0,i.jsx)(n.code,{children:"i.imgur.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Postimages (",(0,i.jsx)(n.code,{children:"i.postimg.cc"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Reddit (",(0,i.jsx)(n.code,{children:"i.redd.it"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Twitter (",(0,i.jsx)(n.code,{children:"pbs.twimg.com"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["VRChat (",(0,i.jsx)(n.code,{children:"assets.vrchat.com"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"udongraph-nodes",children:"UdonGraph Nodes"}),"\n",(0,i.jsx)(n.h4,{id:"vrcimagedownloader",children:"VRCImageDownloader"}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"}),"'s constructor to create an image downloader, which can download image from the internet during runtime."]}),"\n",(0,i.jsx)(n.h4,{id:"downloadimage",children:"DownloadImage"}),"\n",(0,i.jsxs)(n.p,{children:["Downloads an image, and calls an event indicating success or failure (see 'Events' below).",(0,i.jsx)(n.br,{}),"\n","Returns an ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),", which can be used to track the progress of the download."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Instance"}),": The ",(0,i.jsx)(n.code,{children:"ImageDownloader"})," component to download the image with."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Url"})," : The ",(0,i.jsx)(n.code,{children:"VRCURL"})," of the texture to download."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Material"})," (optional): The Material to automatically apply the downloaded image to, as a main texture."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"UdonBehavior"})," (optional): The ",(0,i.jsx)(n.code,{children:"Udonbehavior"})," to send ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," events to. If ",(0,i.jsx)(n.code,{children:"udonBehavior"})," is empty, the current UdonBehaviour will receive all events.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Note that UdonSharp will not receive any events unless ",(0,i.jsx)(n.code,{children:"udonBehavior"})," is specified."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TextureInfo"})," (optional):  The ",(0,i.jsx)(n.code,{children:"TextureInfo"})," object containing settings for the newly created texture."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"dispose",children:"Dispose"}),"\n",(0,i.jsxs)(n.p,{children:["Cleans up the ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"}),". Frees up downloaded textures from memory. Calling ",(0,i.jsx)(n.code,{children:"Dispose"})," invalidates the VRCImageDownloader object, and a new one must be instantiated to download images."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Note on disposal and garbage collection:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Calling ",(0,i.jsx)(n.code,{children:"Dispose"})," will invalidate the ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"}),", the associated ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),", and the downloaded texture.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After calling ",(0,i.jsx)(n.code,{children:"Dispose"}),", the ",(0,i.jsx)(n.code,{children:"VRCImageDownloadState"})," ",(0,i.jsx)(n.code,{children:"State"})," of ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"})," will change to ",(0,i.jsx)(n.code,{children:"Unloaded"})," until it is garbage collected."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," keeps textures in memory until the underlying Texture2D is destroyed or disposed using its ",(0,i.jsx)(n.code,{children:"Dispose"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:["Make sure to save the reference to your ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," as a variable to prevent it (and any downloaded texture) from randomly being garbage collected."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"textureinfo",children:"TextureInfo"}),"\n",(0,i.jsx)(n.p,{children:"Contains settings to apply to a downloaded texture."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GenerateMipmaps"}),": Enables Mipmap generation. (Default: ",(0,i.jsx)(n.code,{children:"false"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FilterMode"}),": Sets the ",(0,i.jsx)(n.code,{children:"FilterMode"})," of the texture. (Default: ",(0,i.jsx)(n.code,{children:"Bilinear"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WrapModeU"}),": The ",(0,i.jsx)(n.code,{children:"TextureWrapMode"})," along the U (horizontal) axis (Default: ",(0,i.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WrapModeV"}),": The ",(0,i.jsx)(n.code,{children:"TextureWrapMode"})," along the V (vertical) axis  (Default: ",(0,i.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WrapModeW"}),": The ",(0,i.jsx)(n.code,{children:"TextureWrapMode"})," along the W (depth, only relevant for Texture3D) axis. (Default: ",(0,i.jsx)(n.code,{children:"Repeat"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AnisoLevel"}),": The ",(0,i.jsx)(n.code,{children:"anisoLevel"})," of the texture. A value of 0 disables filtering, 16 equals full filtering. (Default: ",(0,i.jsx)(n.code,{children:"9"}),")","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"VRChat uses forced anisotropic filtering. When the anisoLevel value is between 1 and 9, Unity sets the anisoLevel to 9. If the value is higher than 9, Unity clamps it between 9 and 16."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"MaterialProperty"}),": Overrides which ",(0,i.jsx)(n.code,{children:"MaterialProperty"})," to apply the downloaded texture to, if a ",(0,i.jsx)(n.code,{children:"material"})," was specified in ",(0,i.jsx)(n.code,{children:"DownloadImage"}),". (Default: ",(0,i.jsx)(n.code,{children:"_MainTex"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ivrcimagedownload",children:"IVRCImageDownload"}),"\n",(0,i.jsxs)(n.p,{children:["Contains information about the downloaded image. Returned by ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"}),"'s ",(0,i.jsx)(n.code,{children:"DownloadImage"})," function, by ",(0,i.jsx)(n.code,{children:"OnImageLoadSuccess"}),", and by ",(0,i.jsx)(n.code,{children:"OnImageLoadError"}),".",(0,i.jsx)(n.br,{}),"\n","Note that many of these fields will be invalid until the download has completed or failed."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Error"}),": Gets the ",(0,i.jsx)(n.code,{children:"VRCImageDownloadError"})," associated with the event."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Errormessage"}),": Gets the error message as a ",(0,i.jsx)(n.code,{children:"string"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Material"}),": Gets the Material sent into the ",(0,i.jsx)(n.code,{children:"DownloadImage"})," function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Progress"}),":",(0,i.jsx)(n.code,{children:"Gets the progress of the image download as a"}),"float` between 0 and 1. Use this to track the progress of the download, i. e. for custom loading bars."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Result"}),": The ",(0,i.jsx)(n.code,{children:"Texture2d"})," of the downloaded image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get SizeInMemoryBytes"}),": Gets the size of the texture in bytes as an ",(0,i.jsx)(n.code,{children:"int"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get State"}),": Gets the ",(0,i.jsx)(n.code,{children:"VRCImageDownloadState"})," indicating the state of the image download."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get TextureInfo"}),": The texture info given to the DownloadImage function (TextureInfo)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get Udonbehavior"}),": Gets the given udonbehavior the events of the download image are being sent to (UdonBehavior)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Get URL"}),": Gets the ",(0,i.jsx)(n.code,{children:"VRCURL"})," of the image download."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vrcimagedownloadstate",children:"VRCImageDownloadState"}),"\n",(0,i.jsxs)(n.p,{children:["Indicates the state of the image download in ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Pending"}),": Not been started or still in progress."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Error"}),": Download failed an error (see ",(0,i.jsx)(n.code,{children:"VRCImageDownloadError"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complete"}),": Download complete, texture is ready to use."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unloaded"}),": Pending garbage collection after ",(0,i.jsx)(n.code,{children:"Dispose"})," has been called on ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unknown"}),": Unknown state."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"vrcimagedownloaderror",children:"VRCImageDownloadError"}),"\n",(0,i.jsxs)(n.p,{children:["When an image download fails, ",(0,i.jsx)(n.code,{children:"OnImageLoadError"})," is called. ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),"'s ",(0,i.jsx)(n.code,{children:"Error"})," field will contain one of the following error states:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"InvalidURL"}),": The download URL used in ",(0,i.jsx)(n.code,{children:"DownloadImage"})," is invalid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"AccessDenied"}),": Access to the URL was denied."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"InvalidImage"}),": The downloaded image is invalid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"DownloadError"}),": A web request error occured."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unknown"}),": Unknown error state."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OnImageLoadSuccess"}),": Returns ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),". Called when a ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," has successfully download an image."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"OnImageLoadError"}),": Returns ",(0,i.jsx)(n.code,{children:"IVRCImageDownload"}),". Called when a ",(0,i.jsx)(n.code,{children:"VRCImageDownloader"})," has failed to download an image."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>l});var i=o(96540);const d={},s=i.createContext(d);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);