"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1245],{49082:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=s(74848),n=s(28453);const l={title:"Quest Content Limitations",slug:"quest-content-limitations",hidden:!1,createdAt:"2019-05-15T01:40:38.749Z",updatedAt:"2022-07-04T09:34:33.253Z"},r=void 0,a={id:"platforms/android/quest-content-limitations",title:"Quest Content Limitations",description:"This page will describe various limits in place for the Oculus Quest version of VRChat. These limitations are in place in the interest of performance, user safety, and discouraging malicious behavior.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/platforms/android/quest-content-limitations.md",sourceDirName:"platforms/android",slug:"/platforms/android/quest-content-limitations",permalink:"/creator-docs-i18n/fr/platforms/android/quest-content-limitations",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/platforms/android/quest-content-limitations.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Quest Content Limitations",slug:"quest-content-limitations",hidden:!1,createdAt:"2019-05-15T01:40:38.749Z",updatedAt:"2022-07-04T09:34:33.253Z"},sidebar:"tutorialSidebar",previous:{title:"Mobile Best Practices",permalink:"/creator-docs-i18n/fr/platforms/android/android-best-practices"},next:{title:"Quest Content Optimization",permalink:"/creator-docs-i18n/fr/platforms/android/quest-content-optimization"}},d={},o=[{value:"Avatar-Specific Limitations",id:"avatar-specific-limitations",level:2},{value:"Shaders",id:"shaders",level:2},{value:"Components",id:"components",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This page will describe various limits in place for the Oculus Quest version of VRChat. These limitations are in place in the interest of performance, user safety, and discouraging malicious behavior."}),"\n",(0,i.jsxs)(t.p,{children:["Find more information about limited components on our ",(0,i.jsx)(t.a,{href:"/platforms/android/quest-content-optimization",children:"Quest Content Optimization"})," page."]}),"\n",(0,i.jsx)(t.h2,{id:"avatar-specific-limitations",children:"Avatar-Specific Limitations"}),"\n",(0,i.jsxs)(t.p,{children:["Although the current version of VRChat does not implement a hard limit, ",(0,i.jsx)(t.strong,{children:"we may implement a hard limit for avatars based on triangle count, material counts, mesh counts, and other qualities in the future."})," Please keep our recommendations in mind as described in ",(0,i.jsx)(t.a,{href:"/platforms/android/quest-content-optimization",children:"Quest Content Optimization"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Currently, if you upload an avatar or avatar world that features avatars exceeding our recommendations, that world or avatar may be removed from public access."}),"\n",(0,i.jsx)(t.h2,{id:"shaders",children:"Shaders"}),"\n",(0,i.jsx)(t.p,{children:"VRChat on Quest only permits the shaders provided with the latest SDK on avatars. The shaders are listed below with a short description and their inputs. This list may change, and we'll announce in our patch notes when new shaders are available."}),"\n",(0,i.jsxs)(t.p,{children:["All of the shaders listed below are under ",(0,i.jsx)(t.code,{children:"VRChat/Mobile"})," in the shader selection dialog."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:'For performance reasons, make sure you always enable "Enable GPU Instancing" on your materials.'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Shader Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Shader Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Standard Lite"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'A "Lite" version of Unity Standard, designed to require less VRAM. Channel mappings and supported maps are identical to Unity Standard Metallic setup, excluding Alpha and Parallax. Not currently reccomended on PC as it does not support realtime lighting. The diffuse texture is tinted by the vertex colours.'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bumped Diffuse"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Diffuse but with a normal map. The diffuse texture is tinted by the vertex colours."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Bumped Mapped Specular"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Diffuse, but with a specular map (shininess) on the alpha channel. The diffuse texture is tinted by the vertex colours. Normal map also supported."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Diffuse"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Just diffuse! The diffuse texture is tinted by the vertex colours."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Matcap Lit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Diffuse, but with a matcap input. Can be used to simulate a shiny metal surface. The diffuse texture is tinted by the vertex colours."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Toon Lit"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Provides toon-like shading and shadows. Should be used on cartoon-like characters with flat colors. The diffuse texture is tinted by the vertex colours."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Particles/Additive"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Should be used on particles. Blends using Additive mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Particles/Multiply"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Should be used on particles. Blends using Multiply mode."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lightmapped (Only for worlds)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"A basic diffuse shader that supports lightmapping. This shader is only meant for use on worlds. It cannot be used on avatars. It does not support real-time lighting."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Skybox (Only for worlds)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"This shader is an optimized skybox shader, meant for use in worlds."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supersampled UI (Only for worlds)"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"An unlit shader which is is supersampled at the texture sample phase. Use with mipmapping to make in-world UI text crisp without being grainy or distracting."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(t.p,{children:"The following components are not supported on Quest and will not work. This list may change. We'll note in the Patch Notes and updated documentation when these change."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Shader Name"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Shader Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Dynamic Bones"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Completely disabled in VRChat Quest. Use ",(0,i.jsx)(t.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBones"})," instead!!"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cloth"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Completely disabled in VRChat Quest."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Cameras"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Completely disabled on avatars in VRChat Quest. Permitted for use in Worlds. Be careful with overuse."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Lights"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Completely disabled on avatars in VRChat Quest."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Video Players"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Works with some limitations. Read more in ",(0,i.jsx)(t.a,{href:"/worlds/udon/video-players",children:"Video Players"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Post-Processing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Post processing systems are disabled completely in VRChat Quest. The GPU is not designed to handle these effects very well."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Audio Sources"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Audio sources are disabled completely on avatars in VRChat Quest. Audio sources consume a significant amount of CPU resources and voices have priority."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Physics Objects"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Rigidbodies, colliders, and joints are disabled completely on avatars in VRChat Quest. ",(0,i.jsx)("br",{})," They are permitted in worlds, but you should be careful not to go overboard with them."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Particle Systems"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Particles are limited heavily on avatars in VRChat Quest, with settings mirroring the ",(0,i.jsx)(t.a,{href:"https://docs.vrchat.com/docs/avatar-particle-system-limits",children:"Avatar Particle System Limits"})," on PC."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Constraints"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Constraints are disabled completely on avatars in VRChat Quest. There are no plans to enable them for Quest, as they have complex performance issues that are not solved by a soft or hard limit.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Permitted for use in Worlds. Be careful with overuse, as they impact performance more than previously thought, especially with the limited resources of the Quest."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"FinalIK"}),(0,i.jsxs)(t.td,{style:{textAlign:"left"},children:["Custom FinalIK components are completely disabled on avatars in VRChat Quest.",(0,i.jsx)("br",{}),"FinalIK components are an unbounded source of resource usage. We do not currently plan to enable them on Quest."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var i=s(96540);const n={},l=i.createContext(n);function r(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);