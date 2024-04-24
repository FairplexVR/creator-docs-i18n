"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[5105],{48411:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(74848),o=t(28453);const i={title:"VRC Mirror Reflection",slug:"vrc_mirrorreflection",hidden:!1,createdAt:"2017-07-06T06:10:45.478Z",updatedAt:"2022-08-17T20:23:01.162Z"},n=void 0,l={id:"worlds/components/vrc_mirrorreflection",title:"VRC Mirror Reflection",description:"This component can be used to create a mirror in your VRChat world.",source:"@site/docs/worlds/components/vrc_mirrorreflection.md",sourceDirName:"worlds/components",slug:"/worlds/components/vrc_mirrorreflection",permalink:"/creator-docs-i18n/worlds/components/vrc_mirrorreflection",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/components/vrc_mirrorreflection.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712781240,formattedLastUpdatedAt:"Apr 10, 2024",frontMatter:{title:"VRC Mirror Reflection",slug:"vrc_mirrorreflection",hidden:!1,createdAt:"2017-07-06T06:10:45.478Z",updatedAt:"2022-08-17T20:23:01.162Z"},sidebar:"tutorialSidebar",previous:{title:"VRC Avatar Pedestal",permalink:"/creator-docs-i18n/worlds/components/vrc_avatarpedestal"},next:{title:"VRC Object Sync",permalink:"/creator-docs-i18n/worlds/components/vrc_objectsync"}},a={},d=[];function c(e){const r={a:"a",code:"code",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"This component can be used to create a mirror in your VRChat world."}),"\n",(0,s.jsxs)(r.p,{children:["It requires a ",(0,s.jsx)(r.a,{href:"https://docs.unity3d.com/Manual/class-MeshRenderer.html",children:"mesh renderer component"})," on the same game object. It writes to the ",(0,s.jsx)(r.code,{children:"_MainTex"})," value of the mesh renderer's first material. You can find an example in the ",(0,s.jsx)(r.a,{href:"/worlds/sdk-prefabs#vrcmirror",children:"SDK prefabs"})," called ",(0,s.jsx)(r.code,{children:"VRCMirror.prefab"}),"."]}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Disable Pixel Lights"}),(0,s.jsx)(r.td,{children:"Disables real-time pixel shaded point and spot lighting. Pixel shaded lights will fall-back to vertex lighting when this is enabled."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Turn Off Mirror Occlusion"}),(0,s.jsx)(r.td,{children:"Disables occlusion culling on the mirror. Enable this if you see objects flickering in the mirror."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Reflect Layers"}),(0,s.jsx)(r.td,{children:"Only objects on the selected layers will be rendered in the mirror. Objects on the Water layer are never rendered in mirrors."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Mirror Resolution"}),(0,s.jsx)(r.td,{children:"Rendering resolution of the mirror (per eye in VR). Auto renders at the same resolution as the user's HMD or monitor up to the maximum of 2048x2048."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Maximum Antialiasing"}),(0,s.jsx)(r.td,{children:"The maximum level of MSAA applied to the image rendered in the mirror. Can be overruled by client graphics settings."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Custom Shader"}),(0,s.jsx)(r.td,{children:"The mirror will use this shader instead of the default shader if one is provided."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Camera Clear Flags"}),(0,s.jsx)(r.td,{children:'Specifies the CameraClearFlags that the mirror will use to clear the background before rendering. The default "From Reference Camera" will use the same flags as the camera rendering the mirror plane.'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Custom Skybox"}),(0,s.jsx)(r.td,{children:'If "Camera Clear Flags" is set to "Custom Skybox," this skybox will be shown in the mirror. If "Custom Skybox" mode is selected but nothing is provided, the background will be black.'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Custom Clear Color"}),(0,s.jsx)(r.td,{children:'If "Camera Clear Flags" is set to "Solid Color," this color will be used as the background. Note that the alpha channel will be respected, so you can use this to clear alpha and use it in a custom shader (e.g., for cutout-style mirrors).'})]})]})]}),"\n",(0,s.jsx)(r.p,{children:"Mirrors can drastically reduce the framerate of your VRChat world. To avoid this, try the following:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Keep mirrors off by default. Enable them automatically when users get near, or allow users to enable them manually."}),"\n",(0,s.jsx)(r.li,{children:'Don\'t reflect every layer, or allow users to choose which layers to reflect. ("High quality" and "low quality" mirrors.)'}),"\n",(0,s.jsx)(r.li,{children:"If your users still experience performance issue, reduce the mirror resolution."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>n,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function n(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);