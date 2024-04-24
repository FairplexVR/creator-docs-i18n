"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8110],{31370:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=r(74848),l=r(28453);const i={slug:"release-3-1-8",date:"2022-9-18",title:"Release 3.1.8",authors:["momo"],tags:["release"],draft:!1},t=void 0,a={permalink:"/creator-docs-i18n/releases/release-3-1-8",source:"@site/releases/release-3.1.8.md",title:"Release 3.1.8",description:"Summary",date:"2022-09-18T00:00:00.000Z",formattedDate:"September 18, 2022",tags:[{label:"release",permalink:"/creator-docs-i18n/releases/tags/release"}],hasTruncateMarker:!0,authors:[{name:"Momo the Monster",title:"VRChat Developer",url:"https://github.com/momo-the-monster",imageURL:"https://github.com/momo-the-monster.png",key:"momo"}],frontMatter:{slug:"release-3-1-8",date:"2022-9-18",title:"Release 3.1.8",authors:["momo"],tags:["release"],draft:!1},unlisted:!1,prevItem:{title:"Release 3.1.9",permalink:"/creator-docs-i18n/releases/release-3-1-10"},nextItem:{title:"Release 3.1.7",permalink:"/creator-docs-i18n/releases/release-3-1-7"}},o={authorsImageUrls:[void 0]},d=[{value:"Summary",id:"summary",level:3},{value:"Changes",id:"changes",level:3}];function c(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Adds New Shader GLobals and VRCGraphics Methods"}),"\n",(0,s.jsx)(n.h3,{id:"changes",children:"Changes"}),"\n",(0,s.jsx)(n.p,{children:"Added 3 shader globals that can be accessed by any avatar or world shader:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"float _VRChatCameraMode:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0 - Rendering normally"}),"\n",(0,s.jsx)(n.li,{children:"1 - Rendering in VR handheld camera"}),"\n",(0,s.jsx)(n.li,{children:"2 - Rendering in Desktop handheld camera"}),"\n",(0,s.jsx)(n.li,{children:"3 - Rendering for a screenshot"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"float _VRChatMirrorMode:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0 - Rendering normally, not in a mirror"}),"\n",(0,s.jsx)(n.li,{children:"1 - Rendering in a mirror viewed in VR"}),"\n",(0,s.jsx)(n.li,{children:"2 - Rendering in a mirror viewed in desktop mode"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'float3 _VRChatMirrorCameraPos - World space position of mirror camera (eye independent, "centered" in VR)'}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["World InputFields will now open the keyboard modal when interacted with. If this behavior is not desired, add the newly created ",(0,s.jsx)(n.code,{children:"VRCInputFieldKeyboardOverride"})," component to specify how to override this behavior.  Setting its setting to ",(0,s.jsx)(n.code,{children:"Default"})," will open the touch modal while ",(0,s.jsx)(n.code,{children:"Override"})," will not."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["New option ",(0,s.jsx)(n.code,{children:"cameraClearFlags"})," on VRCMirrorReflection that overrides the camera clear flags used in the mirror"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The default is ",(0,s.jsx)(n.code,{children:"MirrorClearFlags.FromReferenceCamera"})," which retains the current behaviour of rendering the same as the active camera"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Options ",(0,s.jsx)(n.code,{children:"customSkybox"})," and ",(0,s.jsx)(n.code,{children:"customClearColor"})," allow mirror-specific skyboxes and clear colors"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You can now set gravity in a world to 0 or negative values"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Fixed: user-supplied masks on the FX layer were ignored, and prevented Gesture transform animations from working. ",(0,s.jsx)(n.a,{href:"https://docs.vrchat.com/docs/playable-layers#fx",children:"Docs updated"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Added several new Udon nodes related to graphics and shader manipulation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"VRCGraphics.DrawMeshInstanced"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalFloat"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalFloatArray"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalVector"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalVectorArray"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalMatrix"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalMatrixArray"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalInteger"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalTexture"}),"\n",(0,s.jsx)(n.li,{children:"VRCShader.SetGlobalColor"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"VRCShader functions accept string input in some cases (for texture names, mostly). You must use the _Udon prefix for these inputs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"There is one exception. VRCShader functions will also accept the exact string _AudioTexture to accommodate for the existing widespread community-created AudioLink system"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>a});var s=r(96540);const l={},i=s.createContext(l);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);