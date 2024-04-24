"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3608],{57249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=a(74848),o=a(28453);const i={title:"Avatar Optimization Tips",slug:"avatar-optimizing-tips",hidden:!1,createdAt:"2017-09-23T03:26:49.590Z",updatedAt:"2023-03-10T15:12:26.161Z"},n=void 0,r={id:"avatars/avatar-optimizing-tips",title:"Avatar Optimization Tips",description:"This guide is not meant to be the end-all, be-all of avatar optimization! Optimizing your avatar properly requires pretty wide knowledge of a ton of things. We don't expect everyone to know everything.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/avatars/avatar-optimizing-tips.md",sourceDirName:"avatars",slug:"/avatars/avatar-optimizing-tips",permalink:"/creator-docs-i18n/fr/avatars/avatar-optimizing-tips",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/avatars/avatar-optimizing-tips.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"Avatar Optimization Tips",slug:"avatar-optimizing-tips",hidden:!1,createdAt:"2017-09-23T03:26:49.590Z",updatedAt:"2023-03-10T15:12:26.161Z"},sidebar:"tutorialSidebar",previous:{title:"Imposteurs",permalink:"/creator-docs-i18n/fr/avatars/avatar-impostors"},next:{title:"Performance Ranks",permalink:"/creator-docs-i18n/fr/avatars/avatar-performance-ranking-system"}},l={},h=[{value:"Do not use Dynamic Bones!",id:"do-not-use-dynamic-bones",level:2},{value:"Limit usage of Cloth",id:"limit-usage-of-cloth",level:2},{value:"Reduce the amount of meshes on your avatar",id:"reduce-the-amount-of-meshes-on-your-avatar",level:2},{value:"Reduce the amount of material slots you use",id:"reduce-the-amount-of-material-slots-you-use",level:2},{value:"Watch your VRAM usage!",id:"watch-your-vram-usage",level:2},{value:"Avoid expensive shaders",id:"avoid-expensive-shaders",level:2},{value:"Minimize Excess Shader Passes",id:"minimize-excess-shader-passes",level:3},{value:"Avoid Tessellation",id:"avoid-tessellation",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Clearing Keywords",id:"clearing-keywords",level:4},{value:"Note for Shader Authors",id:"note-for-shader-authors",level:4},{value:"Alpha Transparency",id:"alpha-transparency",level:3},{value:"Measuring Draw Calls",id:"measuring-draw-calls",level:3},{value:"Reduce the amount of bones",id:"reduce-the-amount-of-bones",level:2},{value:"Reduce the emission amount/amount of particle systems",id:"reduce-the-emission-amountamount-of-particle-systems",level:2},{value:"Limit the number of Lights your avatar uses",id:"limit-the-number-of-lights-your-avatar-uses",level:2},{value:"Recommended Software/Plugins",id:"recommended-softwareplugins",level:2}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"This guide is not meant to be the end-all, be-all of avatar optimization!"})," Optimizing your avatar properly requires pretty wide knowledge of a ton of things. We don't expect everyone to know everything."]}),(0,s.jsx)(t.p,{children:"However, we try our best to keep this document updated with the most common things people miss, and the most important targets to hit."}),(0,s.jsxs)(t.p,{children:["If you have input on optimization tips, please use the ",(0,s.jsx)(t.strong,{children:"Suggest Edits"})," button in the top right and add your own!"]})]}),"\n",(0,s.jsx)(t.p,{children:"Do you want your avatar to be efficient and be loved by everyone because of all the frames you're saving them? Follow these tips and you should be good!"}),"\n",(0,s.jsx)(t.p,{children:"Any recommended numbers or limits in this document are subject to change at any time. Although some of the descriptions provided below are not precise in a technical manner, this document is intended to assist novice users in learning how to optimize their avatars."}),"\n",(0,s.jsxs)(t.p,{children:["Community-created tools like ",(0,s.jsx)(t.a,{href:"https://github.com/michaeldegroot/cats-blender-plugin",children:"Cats Blender Plugin"})," (MIT license) allow users to very easily optimize their models and assist with common VRChat avatar problems. We strongly recommend using tools like this! It makes your job easier, and improves performance for all."]}),"\n",(0,s.jsx)(t.p,{children:"As a sidenote, the SDK's Build Control panel provides numbers of components on avatars to help with optimization."}),"\n",(0,s.jsx)(t.h2,{id:"do-not-use-dynamic-bones",children:"Do not use Dynamic Bones!"}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Bones is a Unity Asset that you can purchase that allows you to define bones on your avatar's rig to move around as if they were hanging. You can also define static forces like gravity which can make hair fall more realistically."}),"\n",(0,s.jsxs)(t.p,{children:["Dynamic Bones is deprecated and will be removed eventually. Use ",(0,s.jsx)(t.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBones"})," instead."]}),"\n",(0,s.jsx)(t.p,{children:"VRChat will automatically convert Dynamic Bones to PhysBones at runtime."}),"\n",(0,s.jsx)(t.h2,{id:"limit-usage-of-cloth",children:"Limit usage of Cloth"}),"\n",(0,s.jsx)(t.p,{children:"Cloth is a default Unity component that has a similar cost to Dynamic Bones and is more difficult to set up. Limit your use of Cloth heavily, and do not apply it to meshes that have greater than 200 or so vertices."}),"\n",(0,s.jsx)(t.h2,{id:"reduce-the-amount-of-meshes-on-your-avatar",children:"Reduce the amount of meshes on your avatar"}),"\n",(0,s.jsx)(t.p,{children:"There's two types of Mesh Renderers that your avatar could have on it-- Static Mesh Renderers and Skinned Mesh Renderers. Static Meshes do not deform. Skinned Meshes, however, usually have rigs (bones) that tell the engine how to move and deform the mesh based on the position of the bones. These Skinned Meshes are significantly more expensive, and you should only have one skinned Mesh Renderer on your avatar. There is very little reason to have more than one-- most of the time, additional items can be built into the original model."}),"\n",(0,s.jsx)(t.p,{children:'On top of that, each additional mesh on your avatar incurs one or more additional "Draw Calls"-- essentially, time spent by your processor telling your graphics card to draw something on the screen.'}),"\n",(0,s.jsxs)(t.p,{children:["Therefore, ",(0,s.jsx)(t.strong,{children:"VRChat recommends that you have one Skinned Mesh Renderer at maximum, and 3 static mesh renderers at maximum."})," Merging meshes together is very simple in Blender, and is shown in the Meshes video below."]}),"\n",(0,s.jsx)(t.p,{children:"Finally, ensure that you're not using an excessive amount of triangles. The SDK will warn you if you're trying to upload a model that exceeds 70,000 triangles for PC or 20,000 on Quest. It is very rare that you need even this many polygons for details-- look into baking a normal map and simplifying your mesh via decimation or retopology."}),"\n",(0,s.jsx)(t.p,{children:"Creating avatars for the Quest can be more challenging due to the reduced limits. The most effective optimization tends to occur during initial design and avatar creation. In other words, you're going to have problems if you try to take a 120,000 made-for-rendering model and squeeze it into 20,000 polygons. Don't make things harder than they have to be-- find a model that starts low! 20k is quite a large amount of leeway."}),"\n",(0,s.jsxs)(t.p,{children:['Notably if you are using Cats Blender Plugin, it merges meshes automatically when you "Fix Model". ',(0,s.jsx)(t.strong,{children:"If you seperate meshes by Material or by Loose Parts using Cats to assist with decimation or editing, do not forget to merge the meshes again."})]}),"\n",(0,s.jsx)("iframe",{class:"embedly-embed",src:"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F1fco-G2j0Jg%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D1fco-G2j0Jg&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1fco-G2j0Jg%2Fhqdefault.jpg&key=f2aa6fc3595946d0afc3d76cbbd25dc3&type=text%2Fhtml&schema=youtube",width:"854",height:"480",scrolling:"no",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:"true"}),"\n",(0,s.jsx)(t.h2,{id:"reduce-the-amount-of-material-slots-you-use",children:"Reduce the amount of material slots you use"}),"\n",(0,s.jsx)(t.p,{children:"Each additional material slot is also a draw call, which eats more processor time! If you have a lot of materials (more than 10), look into Texture Atlasing. With Community-created tools, atlasing is exceedingly easy. Check out the Materials video for more details."}),"\n",(0,s.jsxs)(t.p,{children:["As an aside, what is important is the number of ",(0,s.jsx)(t.strong,{children:"material slots on the Renderer components"}),' in your avatar. If you have the same material in 20 slots, you still technically have 20 "materials".']}),"\n",(0,s.jsx)(t.p,{children:"This is due to the way that Unity splits meshes into submeshes. What really matters for performance is the number of submeshes created, which Unity creates based on Material slots."}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/5LwRi26RxSQ?si=_TuNCYuWLrsWrVIm",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"watch-your-vram-usage",children:"Watch your VRAM usage!"}),"\n",(0,s.jsx)(t.p,{children:"Even if you use texture atlases, you might end end up using more VRAM than you did before!"}),"\n",(0,s.jsxs)(t.p,{children:['Textures eat up VRAM. The higher the resolution of each texture, the more VRAM it consumes. Avoid using several high-resolution textures, or reduce their size by reducing the "Max Size" parameter in ',(0,s.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/class-TextureImporter.html",children:"Unity's import settings"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["For example: A 30 MB avatar ",(0,s.jsx)(t.em,{children:"can"})," use 3 GB of VRAM if it uses inefficient high-resolution textures. Don't be fooled by an avatar's download size."]}),"\n",(0,s.jsxs)(t.p,{children:["Check out ",(0,s.jsx)(t.a,{href:"https://www.poiyomi.com/blog/2022-10-17-texture-optimization",children:"Poiyomi's Texture Optimization guide"}),". It's an excellent and comprehensive guide on how to optimize your avatar's textures."]}),"\n",(0,s.jsx)(t.h2,{id:"avoid-expensive-shaders",children:"Avoid expensive shaders"}),"\n",(0,s.jsx)(t.p,{children:"Some shaders can cause excessive time spent rendering on the GPU. Try to stick with the Unity Standard shaders, or shaders that you know perform well. If you don't know how to tell if a shader is well-optimized, that's fine! Here are some examples-- these certainly aren't all the shaders available, but are all well-made and well-optimized with a variety of features."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/Xiexe/Xiexes-Unity-Shaders",children:'Xiexe\'s "XSToon" Unity Shaders'})," (MIT) - A collection of PBR 'Toon' shaders for Unity."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://gitlab.com/s-ilent/SCSS",children:"Silent's Shaders"})," (MIT) - Shaders for Unity for cel shading, originally based off the discontinued CubedParadox's Flat Lit Toon, featuring a number of handy features."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/poiyomi/PoiyomiToonShader/releases",children:"Poiyomi's Toon Shader"})," (MIT) - A very robust, powerful shader with a lot of options."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"minimize-excess-shader-passes",children:"Minimize Excess Shader Passes"}),"\n",(0,s.jsx)(t.p,{children:"Speaking more technically, you want to avoid shaders that have excess shader passes. This incurs additional draw calls. This might be a bit too much for most users to worry about, so if you stick with commonly used and proven community shaders, that should suffice."}),"\n",(0,s.jsx)(t.h3,{id:"avoid-tessellation",children:"Avoid Tessellation"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"You should always avoid using shaders on avatars that use Tessellation."}),' This is very common in "fur" shaders. ',(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Tessellation_%28computer_graphics%29",children:"Tessellation"})," is a method by which your graphics card can take meshes and subdivide them for various effects. However, this effect is ",(0,s.jsx)(t.strong,{children:"extremely expensive"})," and will slow down even the most powerful of graphics cards. ",(0,s.jsx)(t.strong,{children:"Do not use shaders with tessellation effects."})," If you want a fur effect, consider looking into shaders that reproduce the effect without tessellation, such as ",(0,s.jsx)(t.a,{href:"https://xiexe.booth.pm/items/1084711",children:"XSFur"})," and ",(0,s.jsx)(t.a,{href:"https://warrenwolfy.gumroad.com/l/atntv",children:"Warren's Fast Fur Shader"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.p,{children:"You should also avoid shaders that use excessive amounts of shader keywords. This can cause serious and unpredictable issues with rendering your view in VRChat, and will fill your output log with a lot of redundant error messages. There is no need to include excessive shader keywords in your shader, so please only use the ones that are required for the features you are targeting."}),"\n",(0,s.jsx)(t.h4,{id:"clearing-keywords",children:"Clearing Keywords"}),"\n",(0,s.jsxs)(t.p,{children:["When you change or upgrade your shader, ensure that you remove old, unused keywords from your materials. Having excessive keywords in use is very bad for performance and optimization. Not only will it cause issues with your own avatar, but it may prevent others from seeing ",(0,s.jsx)(t.strong,{children:"all shaders"})," properly."]}),"\n",(0,s.jsx)(t.p,{children:"The VRChat SDK contains a tool to remove keywords from materials on your avatar. This tool can also remove keywords you need, so be careful!"}),"\n",(0,s.jsxs)(t.p,{children:["Usually, it is best to check the keywords with this tool-- ",(0,s.jsx)(t.strong,{children:"if you've got too many keywords, you probably need to find another shader."})," Swap to Standard, clear keywords, then swap to your new shader."]}),"\n",(0,s.jsx)(t.h4,{id:"note-for-shader-authors",children:"Note for Shader Authors"}),"\n",(0,s.jsxs)(t.p,{children:["You may want to consider using the keywords reserved by the Standard shader as your own keywords. These are essentially guaranteed to already be reserved, so if you must use keywords, use the ones already defined by Standard and Post Processing v2. Here's a ",(0,s.jsx)(t.a,{href:"https://pastebin.com/83fQvZ3n",children:"list of recommended keywords to use"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"alpha-transparency",children:"Alpha Transparency"}),"\n",(0,s.jsx)(t.p,{children:"Alpha transparency is also another expensive part of shaders-- typically you want to be using Cutout or Opaque modes on shaders. Transparency can be quite expensive, so only use it if you know what you're doing!"}),"\n",(0,s.jsx)(t.h3,{id:"measuring-draw-calls",children:"Measuring Draw Calls"}),"\n",(0,s.jsx)(t.p,{children:"The Unity Profiler can be very useful when judging for how many draw calls you're incurring-- just make sure you turn off shadows on your Directional Light for a level playing field."}),"\n",(0,s.jsx)(t.h2,{id:"reduce-the-amount-of-bones",children:"Reduce the amount of bones"}),"\n",(0,s.jsx)(t.p,{children:"Even if you have a bunch of bones sitting in a scarf, skirt, or your hair that you're not using for anything, they can incur additional costs during skinning calls that your GPU has to worry about. If you're not going to use a bone, consider deleting the bone and merging it into the parent bone. If you want to know how to merge the weights of a bone into its parent, check out the video on Dynamic Bones above, which includes a part on bone merging."}),"\n",(0,s.jsx)(t.h2,{id:"reduce-the-emission-amountamount-of-particle-systems",children:"Reduce the emission amount/amount of particle systems"}),"\n",(0,s.jsx)(t.p,{children:"Although particle systems can result in a lot of cool effects, having excessively large amounts of them can cause issues for some PCs. Limit the number of particle systems that you're using, and limit the maximum amount of particles emitting at any one given moment."}),"\n",(0,s.jsx)(t.p,{children:"There are ways to have particle systems with large numbers of particles and retain performance. If you are interested in this, look into dynamic batching for sprite particles, don't use collision, and ensure the movement of your particles is simplistic."}),"\n",(0,s.jsxs)(t.p,{children:["If you're more technically inclined, you can try looking into Unity's Profiler view to judge how much CPU time your particle simulation is taking. Generally speaking, large transparent particles are worse than a lot of smaller, opaque ones. Unity's Particle System is actually quite optimized and runs quickly ",(0,s.jsx)(t.em,{children:"if used well."})]}),"\n",(0,s.jsx)(t.h2,{id:"limit-the-number-of-lights-your-avatar-uses",children:"Limit the number of Lights your avatar uses"}),"\n",(0,s.jsxs)(t.p,{children:["Lights on avatars are real-time, and as such, are exceedingly expensive. Adding a light to your avatar means that everything that your Light touches will render with ",(0,s.jsx)(t.em,{children:"double"})," the draw calls. Additional lights multiply the effect. This is obviously ",(0,s.jsx)(t.em,{children:"very bad for performance."})," Do not use Lights that are always on. Try using an Animation Override to turn a flashlight on and off, or alternately, do not use Lights at all."]}),"\n",(0,s.jsx)(t.p,{children:"If you do use a Light, turn off Shadows for the Light. Shadows on Realtime lights are VERY expensive and often don't look that great on something that moves around."}),"\n",(0,s.jsxs)(t.p,{children:["Particle Systems can be configured to have a light on for a number of particles. ",(0,s.jsx)(t.em,{children:"Never do this!"})," Each particle with a light counts as a real-time light, which is (once again) extremely expensive."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"In total, VRChat recommends that you do not use Lights of any type on avatars at all."})," Not only do they adversely affect your own avatar's performance, they multiply performance cost of avatars the light is hitting as well."]}),"\n",(0,s.jsx)(t.h2,{id:"recommended-softwareplugins",children:"Recommended Software/Plugins"}),"\n",(0,s.jsx)(t.p,{children:"There's a large amount of software available to help you optimize your avatar and make it easier to build avatars."}),"\n",(0,s.jsxs)(t.p,{children:["For example, check out ",(0,s.jsx)(t.a,{href:"https://github.com/rurre/PumkinsAvatarTools",children:"Pumkin's Avatar Tools"})," (MIT) for the Unity Editor. Among other things, this Editor script allows you to quickly see stats on your avatars. This tool is in beta, and may have bugs-- please report any issues on Pumkin's GitHub."]}),"\n",(0,s.jsx)(t.p,{children:"The following software has not been authored by VRChat. Please read and respect the licensing provided with each individual product."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/sdk/upgrade/current-unity-version",children:"Unity"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://blender.org",children:"Blender"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/absolute-quantum/cats-blender-plugin",children:"Cats Blender Plugin\n"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/Grim-es/material-combiner-addon",children:"Shotariya's Material Combiner"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/rurre/PumkinsAvatarTools",children:"Pumkin's Avatar Tools"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>r});var s=a(96540);const o={},i=s.createContext(o);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);