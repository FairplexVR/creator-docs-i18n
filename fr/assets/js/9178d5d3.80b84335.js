"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1950],{51385:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=i(74848),s=i(28453);const a={title:"VRC Spatial Audio Source",slug:"vrc_spatialaudiosource",excerpt:"Creates a spatial audio source in VRChat",hidden:!1,createdAt:"2019-07-08T14:35:40.642Z",updatedAt:"2021-10-20T20:02:34.121Z"},n=void 0,r={id:"worlds/components/vrc_spatialaudiosource",title:"VRC Spatial Audio Source",description:"Use VRC_SpatialAudioSource to add 3D spatialization to a Unity Audio Source.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_spatialaudiosource.md",sourceDirName:"worlds/components",slug:"/worlds/components/vrc_spatialaudiosource",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_spatialaudiosource",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/i18n/fr/docusaurus-plugin-content-docs/current/worlds/components/vrc_spatialaudiosource.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821452,formattedLastUpdatedAt:"22 avr. 2024",frontMatter:{title:"VRC Spatial Audio Source",slug:"vrc_spatialaudiosource",excerpt:"Creates a spatial audio source in VRChat",hidden:!1,createdAt:"2019-07-08T14:35:40.642Z",updatedAt:"2021-10-20T20:02:34.121Z"},sidebar:"tutorialSidebar",previous:{title:"VRC Scene Descriptor",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_scenedescriptor"},next:{title:"VRC Station",permalink:"/creator-docs-i18n/fr/worlds/components/vrc_station"}},d={},l=[{value:"Unity Editor Interface",id:"unity-editor-interface",level:2},{value:"Falloff Mechanics",id:"falloff-mechanics",level:2},{value:"Using 2D Audio",id:"using-2d-audio",level:3},{value:"Spatial Audio on Avatars",id:"spatial-audio-on-avatars",level:2},{value:"Component Properties",id:"component-properties",level:2},{value:"Avatar Limitations",id:"avatar-limitations",level:2},{value:"Curve Squashing",id:"curve-squashing",level:3},{value:"Avatar Audio Compressor",id:"avatar-audio-compressor",level:3},{value:"Tips for Avoiding the Compressor",id:"tips-for-avoiding-the-compressor",level:3},{value:"Replacing ONSP in Old Scenes",id:"replacing-onsp-in-old-scenes",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," to add 3D spatialization to a Unity ",(0,o.jsx)(t.code,{children:"Audio Source"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When added, ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," will automatically add a Unity ",(0,o.jsx)(t.code,{children:"Audio Source"})," component."]}),"\n",(0,o.jsx)(t.p,{children:"This component can be used on both avatars and worlds."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"image",src:i(78763).A+"",width:"531",height:"147"})}),"\n",(0,o.jsx)(t.h2,{id:"unity-editor-interface",children:"Unity Editor Interface"}),"\n",(0,o.jsxs)(t.p,{children:["The component generates two ",(0,o.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/ScriptReference/Gizmos.html",children:"Unity Gizmos"})," that show:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Far"}),"\n",(0,o.jsx)(t.li,{children:"Near"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["In addition, the ",(0,o.jsx)(t.code,{children:"Audio Source"}),' component generates a "Volumetric Radius" gizmo.']}),"\n",(0,o.jsxs)(t.p,{children:["Here's what the gizmos look like:\n",(0,o.jsx)(t.img,{alt:"Component in this image is a bit out of date, but the gizmos are the same.",src:i(79321).A+"",width:"1575",height:"1034"}),"\nThe component contains tooltips for all properties. Hover over the name of the property to see a short description."]}),"\n",(0,o.jsx)(t.h2,{id:"falloff-mechanics",children:"Falloff Mechanics"}),"\n",(0,o.jsxs)(t.p,{children:["All units are in ",(0,o.jsx)(t.em,{children:"meters"}),". Falloff of audio intensity is roughly inverse-square by default, as illustrated below:\n",(0,o.jsx)(t.img,{src:i(26773).A+"",width:"501",height:"272"})]}),"\n",(0,o.jsxs)(t.p,{children:["You can override the curve using the graph on the ",(0,o.jsx)(t.code,{children:"Audio Source"}),". This curve determines the intensity of the audio at a given distance."]}),"\n",(0,o.jsxs)(t.p,{children:["At ranges approaching the ",(0,o.jsx)(t.code,{children:"Far"})," value, audio may fade out more quickly depending on your settings."]}),"\n",(0,o.jsx)(t.h3,{id:"using-2d-audio",children:"Using 2D Audio"}),"\n",(0,o.jsx)(t.p,{children:"2D audio is where the audio's volume is constant no matter where you are in a world. This might be used for background noise that is already recorded as a spacialized source (a field recording) or background music."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"You can use 2D avatar audio if you like"})," by disabling the ",(0,o.jsx)(t.code,{children:"Use Spatialized Audio"})," option in the component. Unless you choose to use a different audio falloff curve, the intensity will still drop off over distance as before, it just won't be spatialized."]}),"\n",(0,o.jsxs)(t.p,{children:["All that being said, ",(0,o.jsx)(t.strong,{children:"we do not recommend using 2D audio."})," All real-world sources of sound have distinct point or volumetric sources. If you wish to use 2D audio regardless, ensure that you:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Uncheck ",(0,o.jsx)(t.code,{children:"Use Spatialized Audio"})," on the ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})]}),"\n",(0,o.jsxs)(t.li,{children:["Adjust Spatial Blend on the ",(0,o.jsx)(t.code,{children:"Audio Source"})," to be 100% 2D"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"spatial-audio-on-avatars",children:"Spatial Audio on Avatars"}),"\n",(0,o.jsxs)(t.p,{children:["VRChat supports using ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," on avatars, albeit with some ",(0,o.jsx)(t.a,{href:"/worlds/components/vrc_spatialaudiosource#section-avatar-limitations",children:"limitations"}),". These limitations are in place to prevent abuse and malicious sounds."]}),"\n",(0,o.jsxs)(t.p,{children:["Other than these limitations, ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," works precisely the same on avatars as it does in worlds."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Don't Forget to add a SpatialAudioSource!",type:"danger",children:[(0,o.jsxs)(t.p,{children:["If you don't add a ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," with your avatar audio sources, one will be added by the SDK with default settings."]}),(0,o.jsxs)(t.p,{children:["If you use a pre-existing avatar-based ",(0,o.jsx)(t.code,{children:"Audio Source"})," without a ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," or ONSP (legacy) component, you may get unexpected, undocumented, and undesired behavior. We ",(0,o.jsx)(t.strong,{children:"strongly recommend"})," always using ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," with any avatar-based ",(0,o.jsx)(t.code,{children:"Audio Sources"}),"."]})]}),"\n",(0,o.jsx)(t.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,o.jsxs)(t.admonition,{title:"Dynamic Adjustment at Runtime",type:"caution",children:[(0,o.jsx)(t.p,{children:"Adjusting these properties via animations during runtime is not supported. These values are set at initialization."}),(0,o.jsxs)(t.p,{children:["Animating properties of the ",(0,o.jsx)(t.code,{children:"Audio Source"})," should still work for properties that are not related to spatialization settings, like pitch."]})]}),"\n",(0,o.jsx)(t.admonition,{title:"Disabling / Enabling Sound Sources",type:"caution",children:(0,o.jsx)(t.p,{children:"On avatars, it is best to disable and enable the Audio Source components rather than the entire GameObject."})}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Property"}),(0,o.jsx)(t.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Gain"}),(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"An additional boost to volume. By default, world audio sources get a 10dB boost. Avatar audio sources are limited to a maximum gain of 10dB."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Far"}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["The far radius, in meters, where volume falls off to silence. By default, it is set to 40m. Avatar audio is limited to a maximum of 40m. ",(0,o.jsx)("br",{}),' Far only overrides an Audio Source curve if you turn on the "Use Spatializer Falloff" checkbox on VRC_SpatialAudioSource.']})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced: Near"}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["The near radius, in meters, where volume begins to fall off. We recommend keeping this at zero for realism and effective spatialization. Defaults to 0m. ",(0,o.jsx)("br",{}),' Near only overrides an Audio Source curve if you turn on the "Use Spatializer Falloff" checkbox on VRC_SpatialAudioSource.']})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced: Volumetric Radius"}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:['An audio source is normally simulated to be a point source, however changing this value allows the source to appear to come from a larger area. This should be used carefully and is mainly for distant audio sources that need to sound "large" as you move past them. ',(0,o.jsx)("br",{})," The listener should not ever get close to the radius for best results. Keep this at zero unless you know what you're doing. Defaults to 0m. ",(0,o.jsx)("br",{}),"  The value for Volumetric Radius should always be lower than Far."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced: Use AudioSource Volume Curve"}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["Use the AudioSource's '3D Sound Settings' volume curve. If unchecked, use Inverse Square falloff. It is recommended to keep this disabled to ensure realistic and authentic spatialization. ",(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{})," Defaults to False."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"left"},children:"Advanced: Enable Spatialization"}),(0,o.jsxs)(t.td,{style:{textAlign:"left"},children:["Uncheck this to disable the default inverse-square falloff curve and instead use the Audio Source's spatialization settings. ",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})," Defaults to True."]})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"avatar-limitations",children:"Avatar Limitations"}),"\n",(0,o.jsxs)(t.p,{children:["You are permitted to adjust the fall-off curve on avatar-based ",(0,o.jsx)(t.code,{children:"Audio Sources"}),". Simply set ",(0,o.jsx)(t.code,{children:"Use AudioSource Volume Curve"})," to True, adjust the curve in the ",(0,o.jsx)(t.code,{children:"Audio Source"}),", and VRChat will use that fall-off curve instead of the default inverse-square."]}),"\n",(0,o.jsxs)(t.p,{children:["However, as noted above, there are some limitations on ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," components on avatars. These limits are enforced at run-time."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Gain"})," cannot exceed 10db"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"Far"})," cannot exceed 40m"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/worlds/udon/players/player-audio",children:"Player Audio"})," can override these settings."]}),"\n",(0,o.jsx)(t.h3,{id:"curve-squashing",children:"Curve Squashing"}),"\n",(0,o.jsxs)(t.p,{children:["If you attempt to play avatar audio with a custom curve in a world with a shorter ",(0,o.jsx)(t.code,{children:"Far"}),' distance than normal, Unity "squashes" the curve. You can see what happens by adjusting the ',(0,o.jsx)(t.code,{children:"maxDistance"})," range on the Audio Source."]}),"\n",(0,o.jsx)(t.h3,{id:"avatar-audio-compressor",children:"Avatar Audio Compressor"}),"\n",(0,o.jsx)(t.p,{children:"There is a compressor on the Avatar audio channel that prevents sounds from being maliciously loud. This should not affect normal use of avatar audio sources that have reasonable volume levels."}),"\n",(0,o.jsx)(t.h3,{id:"tips-for-avoiding-the-compressor",children:"Tips for Avoiding the Compressor"}),"\n",(0,o.jsx)(t.p,{children:"If you've got audio on your avatar, there's a few things you can do with your audio beforehand to ensure you're not going to hit the compressor."}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Try to get "dry" audio files-- that is, audio files with no effects. Reverb and delay are the most egregious in causing compressor "pumping".'}),"\n",(0,o.jsx)(t.li,{children:"Leave a bit of headroom in the audio file. In other words, don't fit the waveform to the very top and bottom of the range. In Audacity (or other wave editor), normalize your audio between -6 and -12db."}),"\n",(0,o.jsx)(t.li,{children:'Try to avoid extremely high peaks in the waveform with very short attack-- in other words, don\'t suddenly "pump" the audio to very high levels. If you normalize, this should drop out of the file regardless.'}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"replacing-onsp-in-old-scenes",children:"Replacing ONSP in Old Scenes"}),"\n",(0,o.jsxs)(t.p,{children:['Using the "Enable 3D Spatialization on all AudioSources" button in the Build Control Panel now converts any ',(0,o.jsx)(t.code,{children:"ONSPAudioSource"})," to ",(0,o.jsx)(t.code,{children:"VRC_SpatialAudioSource"})," components. Some of these sources may require tweaking after the conversion."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},78763:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/vrc_spatialaudiosource-1-d6dd3ebe19c43571f18bb0a103ccd371.png"},26773:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/vrc_spatialaudiosource-c969d41-crowhurst_basic_audio_vol1-39-032dc429e453e3edae4b6d7ae7bed67a.gif"},79321:(e,t,i)=>{i.d(t,{A:()=>o});const o=i.p+"assets/images/vrc_spatialaudiosource-e975780-Unity_2019-07-09_11-51-13-5b450db4b1b39edc014c220f8d4fb5cd.png"},28453:(e,t,i)=>{i.d(t,{R:()=>n,x:()=>r});var o=i(96540);const s={},a=o.createContext(s);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);