"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[9168],{70466:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);const r={title:"Build Pipeline Callbacks and Interfaces",slug:"build-pipeline-callbacks-and-interfaces",hidden:!1,createdAt:"2023-04-11T21:01:07.855Z",updatedAt:"2023-04-11T21:04:48.137Z"},c=void 0,a={id:"sdk/build-pipeline-callbacks-and-interfaces",title:"Build Pipeline Callbacks and Interfaces",description:"VRChat SDK contains multiple interfaces that can be used via Editor Scripts to enhance the World and Avatar build process.",source:"@site/docs/sdk/build-pipeline-callbacks-and-interfaces.md",sourceDirName:"sdk",slug:"/sdk/build-pipeline-callbacks-and-interfaces",permalink:"/creator-docs-i18n/sdk/build-pipeline-callbacks-and-interfaces",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/sdk/build-pipeline-callbacks-and-interfaces.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1685478715,formattedLastUpdatedAt:"May 30, 2023",frontMatter:{title:"Build Pipeline Callbacks and Interfaces",slug:"build-pipeline-callbacks-and-interfaces",hidden:!1,createdAt:"2023-04-11T21:01:07.855Z",updatedAt:"2023-04-11T21:04:48.137Z"},sidebar:"tutorialSidebar",previous:{title:"Minor Unity Upgrades",permalink:"/creator-docs-i18n/sdk/upgrade/migrating-to-a-newer-minor-unity-version"},next:{title:"Detecting the VRChat SDK",permalink:"/creator-docs-i18n/sdk/detecting-vrcsdk"}},o={},l=[{value:"For Scene Components",id:"for-scene-components",level:2},{value:"IEditorOnly",id:"ieditoronly",level:3},{value:"IPreprocessCallbackBehaviour",id:"ipreprocesscallbackbehaviour",level:3},{value:"For Project-Wide Scripts",id:"for-project-wide-scripts",level:2},{value:"IVRCSDKBuildRequestedCallback",id:"ivrcsdkbuildrequestedcallback",level:3}];function d(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"VRChat SDK contains multiple interfaces that can be used via Editor Scripts to enhance the World and Avatar build process."}),"\n",(0,i.jsx)(n.h2,{id:"for-scene-components",children:"For Scene Components"}),"\n",(0,i.jsxs)(n.p,{children:["The interfaces outlined below can be used in combination with ",(0,i.jsx)(n.code,{children:"MonoBehaviours"})," and as such - be placed on scene objects directly, which can be useful in a situation where you need to hold some specific scene references to perform your modifications."]}),"\n",(0,i.jsx)(n.h3,{id:"ieditoronly",children:"IEditorOnly"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VRC.SDKBase.IEditorOnly"})}),"\n",(0,i.jsx)(n.p,{children:"The interface has no members to implement."}),"\n",(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.code,{children:"IEditorOnly"})," to mark a script Editor-only for the SDK Validation. This will make it so the SDK ignores it when scanning your World or Avatar for incompatible scripts."]}),"\n",(0,i.jsx)(n.h3,{id:"ipreprocesscallbackbehaviour",children:"IPreprocessCallbackBehaviour"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VRC.SDKBase.IPreprocessCallbackBehaviour"})}),"\n",(0,i.jsx)(n.p,{children:"Members to implement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public void OnPreprocess()\n{\n}\n\npublic int PreprocessOrder { get; }\n"})}),"\n",(0,i.jsx)(n.p,{children:"This interface allows you to execute custom code when the build process is about to begin. This can be useful if you need to perform modifications before content gets built and uploaded to VRChat."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud83d\udea7 Note that this does not automatically bypass the SDK validation. You should also use ",(0,i.jsx)(n.code,{children:"IEditorOnly"})," if your scripts exist directly on the avatar you're uploading"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"for-project-wide-scripts",children:"For Project-Wide Scripts"}),"\n",(0,i.jsx)(n.p,{children:"These interfaces are suited for anything that does not rely on particular scene objects and performs bulk modifications to the scene/avatar before it gets uploaded to VRChat."}),"\n",(0,i.jsx)(n.h3,{id:"ivrcsdkbuildrequestedcallback",children:"IVRCSDKBuildRequestedCallback"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VRC.SDKBase.Editor.BuildPipeline.IVRCSDKBuildRequestedCallback"})}),"\n",(0,i.jsx)(n.p,{children:"Members to implement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"    public int callbackOrder => 0;\n\n    public bool OnBuildRequested(VRCSDKRequestedBuildType requestedBuildType)\n    {\n        return true;\n    }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Where ",(0,i.jsx)(n.code,{children:"VRCSDKRequestedBuildType"})," is an enum of the following shape"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"public enum VRCSDKRequestedBuildType\n{\n    Avatar,\n    Scene,\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This interface allows you to perform some logic before the VRChat SDK starts building the content."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"OnBuildRequested"})," can also abort the build by returning ",(0,i.jsx)(n.code,{children:"false"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);