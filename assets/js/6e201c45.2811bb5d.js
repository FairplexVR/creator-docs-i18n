"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[1391],{12960:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=a(74848),i=a(28453);const o={title:"Playable Layers",slug:"playable-layers",excerpt:"Create simple or complex animations for your VRChat avatar",hidden:!1,createdAt:"2020-08-05T22:29:37.898Z",updatedAt:"2023-02-06T14:15:33.627Z"},s=void 0,r={id:"avatars/playable-layers",title:"Playable Layers",description:"When you create animations for your VRChat avatar, you'll utilize VRChat's 'Playable Layers.' They allow cleanly separate some things you might want to do with your avatar into their own animations - such as running, jumping, giving a thumbs-up, smiling, wagging your tail, and combinations of these.",source:"@site/docs/avatars/playable-layers.md",sourceDirName:"avatars",slug:"/avatars/playable-layers",permalink:"/creator-docs-i18n/avatars/playable-layers",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/avatars/playable-layers.md",tags:[],version:"current",lastUpdatedBy:"Momo the Monster",lastUpdatedAt:1701817881,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{title:"Playable Layers",slug:"playable-layers",excerpt:"Create simple or complex animations for your VRChat avatar",hidden:!1,createdAt:"2020-08-05T22:29:37.898Z",updatedAt:"2023-02-06T14:15:33.627Z"},sidebar:"tutorialSidebar",previous:{title:"Expression Menu and Controls",permalink:"/creator-docs-i18n/avatars/expression-menu-and-controls"},next:{title:"Rig Requirements",permalink:"/creator-docs-i18n/avatars/rig-requirements"}},l={},h=[{value:"Base",id:"base",level:2},{value:"Additive",id:"additive",level:2},{value:"Gesture",id:"gesture",level:2},{value:"Action",id:"action",level:2},{value:"FX",id:"fx",level:2},{value:"Additional Poses",id:"additional-poses",level:2},{value:"T-Pose",id:"t-pose",level:3},{value:"IK Pose",id:"ik-pose",level:3},{value:"Sitting Pose",id:"sitting-pose",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When you create animations for your VRChat avatar, you'll utilize VRChat's 'Playable Layers.' They allow cleanly separate some things you might want to do with your avatar into their own animations - such as running, jumping, giving a thumbs-up, smiling, wagging your tail, and combinations of these."}),"\n",(0,n.jsx)(t.admonition,{title:"Unity Knowledge Required",type:"caution",children:(0,n.jsxs)(t.p,{children:["This document is written with the assumption that you know a bit about ",(0,n.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/class-AnimatorController.html",children:"Unity Animators"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"In the Avatars 3.0 Avatar Descriptor, all humanoid avatars have five buttons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Base"}),"\n",(0,n.jsx)(t.li,{children:"Additive"}),"\n",(0,n.jsx)(t.li,{children:"Gesture"}),"\n",(0,n.jsx)(t.li,{children:"Action"}),"\n",(0,n.jsx)(t.li,{children:"FX"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Generic avatars only have three buttons:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Base"}),"\n",(0,n.jsx)(t.li,{children:"Action"}),"\n",(0,n.jsx)(t.li,{children:"FX"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These are ",(0,n.jsx)(t.strong,{children:"Playable Layers"}),". Each of them takes a Unity Animator, and they layer on top of each other. In other words, you've got five root animators to play with, and each of them can have several ",(0,n.jsx)(t.strong,{children:"Animator Layers"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"These layers apply in order-- in other words, Base gets applied, then Additive, then Gesture, Action, FX. For example, if something in Additive animates a bone (with 1.0 weight), and then something in Action animates that same bone (with 1.0 weight), the Action animation will take precedence."}),"\n",(0,n.jsx)(t.p,{children:"We have example Playable Layers available in the SDK. Depending on how you learn and iterate on things, it might be easier for you to use and edit these default layers to figure things out!"}),"\n",(0,n.jsxs)(t.p,{children:["When you are running VRChat and you're wearing (or viewing) an Avatar 3.0 avatar, all of these Playable Layers are put together into a combined Animator. This Animator is the root, main animator of your avatar, and you can control any part of it. ",(0,n.jsx)(t.strong,{children:"This means that there is no reason to add any additional animators on your avatar."})]}),"\n",(0,n.jsxs)(t.p,{children:["As an aside, you should never use the same controller in multiple Playable Layers. This may work for some setups, but it is ",(0,n.jsx)(t.strong,{children:"very"})," poor practice and will cause major issues as you expand the functionality of your avatar."]}),"\n",(0,n.jsx)(t.admonition,{title:"Only Use Animation Controllers",type:"danger",children:(0,n.jsx)(t.p,{children:"We only support the use of Animation Controllers in Playable Layer slots. Do not use any other type of controller-- you will run into errors or will be unable to upload the content."})}),"\n",(0,n.jsx)(t.p,{children:"What do these Playable Layers do? Here's the short version:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Base:"})," Stuff that should always play, react to movement (like locomotion), or the locomotion state of your avatar (running, falling, crouching, etc). Transform animations only.\n",(0,n.jsx)(t.strong,{children:"Additive:"}),' Stuff that Base is already using, but you want to "add" to it-- like a breathing animation. Transform animations only.\n',(0,n.jsx)(t.strong,{children:"Gesture:"}),' Things that get triggered by hand OR by the Expression menu. You can also use this for "idle animations" like a wagging tail, flapping wings, or moving ears. Transform animations only.\n',(0,n.jsx)(t.strong,{children:"Action:"})," Full override, similar to AV2 emotes. Transform animations only.\n",(0,n.jsx)(t.strong,{children:"FX:"})," Same as Gestures, but for everything that ",(0,n.jsx)(t.em,{children:"isn't"})," a Transform position, rotation, or scale animation."]}),"\n",(0,n.jsx)(t.p,{children:"That's great, but let's go into some more detail."}),"\n",(0,n.jsx)(t.h2,{id:"base",children:"Base"}),"\n",(0,n.jsx)(t.p,{children:"The Base layer contains locomotion animations, including blend trees for walking, running, strafing. It also includes animation states for jumping, falling, falling fast, crouching, and crawling, among other things."}),"\n",(0,n.jsx)(t.p,{children:"Keep in mind that if you put something in here, you'll have to redefine your locomotion animation states. This is pretty complex! Take a look at the example Base Playable Layer to see how complex it can get."}),"\n",(0,n.jsxs)(t.p,{children:["Animations in Base should ",(0,n.jsx)(t.em,{children:"only"})," affect transforms, and all layers should be using Avatar Masks to ensure you're only affecting the appropriate transforms."]}),"\n",(0,n.jsx)(t.h2,{id:"additive",children:"Additive"}),"\n",(0,n.jsx)(t.p,{children:'The Additive layer is meant for additive transform movement on top of humanoid bones that are animated in Base-- things like breathing animations that can "add on" to the Base layer.'}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"If you want to add an idle animation to non-humanoid bones-- like a tail, ears, or etc-- use Gesture instead!"})," Additive is ",(0,n.jsx)(t.em,{children:"specifically"})," for humanoid bones."]}),"\n",(0,n.jsxs)(t.p,{children:["The Additive layer is special because it is ",(0,n.jsx)(t.em,{children:"always"}),' set to "Additive" blending. In short, if you\'ve got a transform that moves during locomotion, the Additive animation will "add" its animation on top. This can act really weirdly if you do crazy things to bones in Additive, so try to keep it pretty minimal.']}),"\n",(0,n.jsx)(t.admonition,{title:"Additive First Layer Avatar Mask Ignored",type:"caution",children:(0,n.jsx)(t.p,{children:"The first layer (base layer, 0th layer, etc)'s Avatar Mask is ignored. This is for internal masking purposes. You can still mask other layers, but any mask you apply to the first layer will be ignored."})}),"\n",(0,n.jsxs)(t.p,{children:["Animations in Additive should ",(0,n.jsx)(t.em,{children:"only"})," affect transforms."]}),"\n",(0,n.jsx)(t.h2,{id:"gesture",children:"Gesture"}),"\n",(0,n.jsx)(t.p,{children:"The Gesture layer is for animations that need to act on individual body parts while still playing the underlying animations for the rest of the body. Kind of like AV2 Gestures, but applied to any part of the body."}),"\n",(0,n.jsxs)(t.p,{children:["Utilize Avatar Masking to ensure that the animations ",(0,n.jsx)(t.em,{children:"only"})," affect the parts of the avatar you want to animate! So, if you want your gesture parameters to only make hand shapes for left/right hand, you'll want to mask out those hands on each of the layers."]}),"\n",(0,n.jsx)(t.p,{children:'In addition, if you want to have an "idle" animation for non-humanoid bones like a tail, wings, ears, etc-- Gesture is where you should put it.'}),"\n",(0,n.jsxs)(t.p,{children:["Animations in Gesture should ",(0,n.jsx)(t.em,{children:"only"})," affect transforms."]}),"\n",(0,n.jsx)(t.h2,{id:"action",children:"Action"}),"\n",(0,n.jsx)(t.p,{children:'The Action layer is for bone animations that will override all other layers, when you need to take over total control of the character. Basically, think AV2 "Emotes".'}),"\n",(0,n.jsxs)(t.p,{children:["This layer is ",(0,n.jsx)(t.strong,{children:"blended to zero by default."})," Before you do anything in the action layer, you need to use the ",(0,n.jsx)(t.a,{href:"/avatars/state-behaviors#playable-layer-control",children:"Playable Layer Control State Behavior"})," to blend this layer up before transitioning to the actual action you're performing! Make sure you blend it back to zero when you're done."]}),"\n",(0,n.jsxs)(t.p,{children:["Animations in Action should ",(0,n.jsx)(t.em,{children:"only"})," affect transforms."]}),"\n",(0,n.jsx)(t.h2,{id:"fx",children:"FX"}),"\n",(0,n.jsxs)(t.p,{children:["FX is a ",(0,n.jsx)(t.strong,{children:"special layer."})," On every other layer, you should not be using material animations, shader property animations, or blend shape animations, because they aren't copied to your mirror clone. Only transforms are."]}),"\n",(0,n.jsxs)(t.p,{children:["However, in the FX layer, everything is copied over! In other words, ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.strong,{children:"everything that isn't a humanoid transform/muscle animation should go into the FX layer."})})," This includes (but is not limited to) things like enabling/disabling GameObjects, components, material swaps, shader animations, particle system animating, etc."]}),"\n",(0,n.jsx)(t.p,{children:"The mask in the first FX layer, by default is empty, this will (at avatar init) create a default mask that disables all humanoid muscles, but enables all GameObject animations. This means that any animations in the hierarchy should work, although it is still NOT RECOMMENDED to animate transforms here."}),"\n",(0,n.jsxs)(t.p,{children:["If you have non-muscle animations in your gestures (eg. your Gesture ",(0,n.jsx)(t.a,{href:"https://docs.unity3d.com/2019.4/Documentation/Manual/class-AvatarMask.html",children:"mask"}),' has any transforms checked at the bottom) those same transforms must be DISABLED in your FX mask. This will allow your Gesture animations to "show through" the FX layer.']}),"\n",(0,n.jsxs)(t.admonition,{title:"Example",type:"info",children:[(0,n.jsx)(t.p,{children:"Let's say your avatar has the following setup:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You have a tail on your avatar (a chain of bones not part of humanoid hierarchy)."}),"\n",(0,n.jsx)(t.li,{children:"Your Gesture animator layer for the tail has a special mask with only the chain of bones enabled."}),"\n",(0,n.jsx)(t.li,{children:'Your other Gesture animator layer with an "all-parts mask" also has those bones checked (along with the other body parts animated in the rest of the controller).'}),"\n"]}),(0,n.jsx)(t.p,{children:"In this case, you'd also want to create a custom mask in the first FX layer. This would mask OFF all the muscles (human diagram all red) and mask OFF all the bones in the tail.\nYou'd also want to make sure this mask has the checkboxes ON for any transforms that have components you will be animating for FX. E.g. a body skinned mesh for animating blend shapes or materials."})]}),"\n",(0,n.jsx)(t.p,{children:"Note that if you have a game object in your hierarchy that has both an animated transform (in Gesture) and an animated effect component (in FX), this will not work with the requirements for the masks. This can occur if you have a simple static-mesh embedded in your hierarchy that you are animating in Gesture, but also applying a material change to in FX. Another example, would be putting a particle effect component directly on the example tail bones above. The simple workaround is to make a child game object and put the static-mesh or effect on that. You would not animate the transform of the child, only the parent. If you follow these steps, you should not need to put transform animations in the FX layer."}),"\n",(0,n.jsx)(t.h2,{id:"additional-poses",children:"Additional Poses"}),"\n",(0,n.jsx)(t.p,{children:"There are some additional poses available for Avatars 3.0 avatars. The buttons for these are under the Playable Layers."}),"\n",(0,n.jsx)(t.h3,{id:"t-pose",children:"T-Pose"}),"\n",(0,n.jsx)(t.p,{children:"You can now provide your own T-Pose!"}),"\n",(0,n.jsx)(t.p,{children:"The T-Pose is used to determine various measurements of your avatar, especially for placement of your viewpoint (or view-ball). Viewpoint is dependent entirely on where your view-ball is when your avatar is in this T-Pose animation you provide."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Standard T-Pose - Mixamo",src:a(15924).A+"",width:"748",height:"775"})}),"\n",(0,n.jsx)(t.p,{children:"Secondly, it is important for the wrist alignment/twist. The way your wrists are lined up in relation to the palm-down position will affect how your controller twisting in space will turn your wrist and arm."}),"\n",(0,n.jsx)(t.p,{children:"Finally, your t-pose determines your wingspan-- your full length of your arms when in T-Pose. This also determines your avatar's interpupillary distance (IPD), or the distance between your avatars eyes. Having arms that are too long will make your IPD wider, making everything seem smaller. Having arms that are too short will make your IPD narrower, making everything seem larger."}),"\n",(0,n.jsx)(t.p,{children:"In addition, (significant) joint bends in T-Pose aren't a good thing. As an example, if your elbows are bent in T-pose, this may affect many different things about your avatar that work off your proportions."}),"\n",(0,n.jsx)(t.h3,{id:"ik-pose",children:"IK Pose"}),"\n",(0,n.jsx)(t.p,{children:"IK Pose is used to determine major joint bends. In the IK pose, your joints should be bent slightly in the direction they're intended to bend."}),"\n",(0,n.jsx)(t.p,{children:"As an example, VRChat will look at the elbow bend from your IK Pose and determine if there is a angle bend in any given direction. That bend determines how your elbow bends."}),"\n",(0,n.jsx)(t.p,{children:"The foot's rotation in IK Pose will determine how the knees will bend. This is set by first assuming the knee will bend straight forward relative to the avatar, then saving that direction against the foot's rotation in IK Pose. For example if the feet are pointed toes outward in IK Pose, that means the inside edge of the foot is more forward facing and therefore the knees will bend towards the inside edge of the foot. In the opposite case, if the feet are pointing more inward in IK Pose, the outside edge of the the foot is more forward facing (straight forward direction relative to the avatar) and so the knee will tend to bend towards the outside edge of the foot in that case."}),"\n",(0,n.jsx)(t.p,{children:"In short: if you want your knees to bend more inward, rotate your feet outward in IK Pose. If you want your knees to bend more outward, rotate your feet inward in IK pose."}),"\n",(0,n.jsx)(t.h3,{id:"sitting-pose",children:"Sitting Pose"}),"\n",(0,n.jsx)(t.p,{children:'The controller used in this slot is used for both animation and posing. When you sit, the viewpoint of your avatar is used for calibration. The animation is played, allowing you to create a "sitting down" animation, as well as a "sitting" idle animation.'}),"\n",(0,n.jsx)(t.p,{children:"If you want to make your own, fair warning: this can take some significant tweaking to get right! You may want to employ transition states for sitting down/standing up that will help a bit with how your avatar looks while sitting."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},15924:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/playable-layers-1-b89c42364bb58dd83a6a489455e2bf79.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(96540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);