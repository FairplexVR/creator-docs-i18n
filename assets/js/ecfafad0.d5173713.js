"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[7403],{78113:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var t=o(74848),s=o(28453);const i={},a="Physbones",r={id:"avatars/avatar-dynamics/physbones",title:"Physbones",description:"PhysBones is a set of components that lets you add secondary motion to avatars, permitting you to add motion to things like hair, tails, ears, clothing, and more! Using these well will make your avatar seem more dynamic and real.",source:"@site/docs/avatars/avatar-dynamics/physbones.md",sourceDirName:"avatars/avatar-dynamics",slug:"/avatars/avatar-dynamics/physbones",permalink:"/creator-docs-i18n/avatars/avatar-dynamics/physbones",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/avatars/avatar-dynamics/physbones.md",tags:[],version:"current",lastUpdatedBy:"Fairplex",lastUpdatedAt:1713821509,formattedLastUpdatedAt:"Apr 22, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Debugging Avatar Dynamics",permalink:"/creator-docs-i18n/avatars/avatar-dynamics/debugging-avatar-dynamics"},next:{title:"Animator Parameters",permalink:"/creator-docs-i18n/avatars/animator-parameters"}},l={},h=[{value:"VRCPhysBone",id:"vrcphysbone",level:2},{value:"Versions",id:"versions",level:3},{value:"Transforms",id:"transforms",level:3},{value:"Forces",id:"forces",level:3},{value:"Limits",id:"limits",level:3},{value:"None",id:"none",level:4},{value:"Angle",id:"angle",level:4},{value:"Hinge",id:"hinge",level:4},{value:"Polar",id:"polar",level:4},{value:"Collision",id:"collision",level:3},{value:"Stretch &amp; Squish",id:"stretch--squish",level:3},{value:"Grab &amp; Pose",id:"grab--pose",level:3},{value:"Options",id:"options",level:3},{value:"Important Notes, Usage Tips, etc",id:"important-notes-usage-tips-etc",level:3},{value:"Per-Component Limitations",id:"per-component-limitations",level:4},{value:"Animating Properties",id:"animating-properties",level:4},{value:"Humanoid Bones",id:"humanoid-bones",level:4},{value:"PhysBone Rotation",id:"physbone-rotation",level:4},{value:"PhysBone AV3 Parameters",id:"physbone-av3-parameters",level:4},{value:"PhysBone Immobile Behavior",id:"physbone-immobile-behavior",level:4},{value:"Optimal Component Usage",id:"optimal-component-usage",level:3},{value:"Maximum Bounds",id:"maximum-bounds",level:3},{value:"VRCPhysBoneCollider",id:"vrcphysbonecollider",level:2},{value:"Standard Colliders",id:"standard-colliders",level:3},{value:"Automatic Dynamic Bone Conversion",id:"automatic-dynamic-bone-conversion",level:2},{value:"Manual Dynamic Bone Conversion",id:"manual-dynamic-bone-conversion",level:3},{value:"Unmigrated Dynamic Bone Components",id:"unmigrated-dynamic-bone-components",level:3},{value:"Eventual Dynamic Bone Deprecation",id:"eventual-dynamic-bone-deprecation",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"physbones",children:"Physbones"}),"\n",(0,t.jsx)(n.p,{children:"PhysBones is a set of components that lets you add secondary motion to avatars, permitting you to add motion to things like hair, tails, ears, clothing, and more! Using these well will make your avatar seem more dynamic and real."}),"\n",(0,t.jsx)(n.p,{children:"PhysBones is a replacement for Dynamic Bones. While both systems share a lot of concepts, there are some major differences with PhysBones, so not all avatars may directly translate over to VRChat\u2019s system."}),"\n",(0,t.jsxs)(n.p,{children:["An example of how to use Avatar Dynamics can be found in the SDK under ",(0,t.jsx)(n.code,{children:"Packages > VRChat SDK - Avatars > Samples > Dynamics > Robot Avatar"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"vrcphysbone",children:"VRCPhysBone"}),"\n",(0,t.jsx)(n.p,{children:"Defines a chain of bones to be animated with PhysBones. These can be used to simulate soft-body and secondary motion like hair, tails, floppy ears, and more! It has many configuration options, and can be set up in many ways."}),"\n",(0,t.jsx)(n.p,{children:'Additionally, PhysBones can be interacted with by you and other people! If you\'ve given the other user permission, other people can grab PhysBones set up on your avatar, and pull the Trigger while holding the PhysBone to "Pose" it and hold it in position. You can also disable this in configuration to not allow posing, not allow grabbing, or allow no collisions at all.'}),"\n",(0,t.jsx)(n.p,{children:"Although not designed as such, PhysBones also serves as a reasonable cloth substitute until such time that we implement our own Cloth component."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(81448).A+"",width:"626",height:"802"})}),"\n",(0,t.jsx)(n.h3,{id:"versions",children:"Versions"}),"\n",(0,t.jsx)(n.p,{children:"You can now select the version of VRCPhysBone component you would like to use directly on the component.  By default the latest version will be chosen when creating a new component.  Existing avatars will continue to use their previous version unless manually updated and re-uploaded."}),"\n",(0,t.jsx)(n.p,{children:"Version 1.0:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The base version of the VRCPhysBone component."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Version 1.1:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Squishy Bones update, allowing for bones to squish and length to be affected by motion."}),"\n",(0,t.jsx)(n.li,{children:"Gravity now acts as a ratio of how far the bones will rotate when at rest.  A positive Pull is required for bones to move in the direction of gravity."}),"\n",(0,t.jsx)(n.li,{children:"Stiffness now acts as a ratio which keeps a bone in it's previous orientation."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"transforms",children:"Transforms"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Root Transform"})," - The transform where this component begins. If left blank, we assume we start at this game object.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Ignore Transforms"})," - List of ignored transforms that shouldn't be affected by this component. Ignored transforms automatically include any of that transform's children.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Endpoint Position"}),' - Vector used to create additional bones at each endpoint of the chain. Only used if the value is non-zero. Usually you\'ll want to increase this along +Y, which points "up" the bone.',(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Multi-Child Type"})," - Behavior of the root bone when multiple bone chains exist. This has three modes:"]}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.strong,{children:"Ignore"}),", the root bone will not move, and will ignore physics. Useful for things like hair,   since you can use one Physbone component on the root to affect all of the hair bones!"]}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.strong,{children:"First"}),", the root bone will form one continuous chain with the first bone chain in the hierarchy. Every other chain will still work, but they will start from the first bone in each respective chain rather than the root like the first chain."]}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.strong,{children:"Average"}),", the motion of the root bone will be the average of all of the other chains. This means that the base of each chain will be able to move."]}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsxs)(n.p,{children:["If you are using a single root bone, or a single root bone with several children (but no grandchildren), you ",(0,t.jsx)(n.strong,{children:"must"})," define an endpoint position!"]}),(0,t.jsxs)(n.p,{children:["For example, if you put the PhysBone component on any of the ",(0,t.jsx)(n.code,{children:"RootBone"}),"s below, you ",(0,t.jsx)(n.strong,{children:"must"})," define an ",(0,t.jsx)(n.strong,{children:"Endpoint Position"})," in order for PhysBones to work. This is different from Dynamic Bones!"]}),(0,t.jsx)(n.p,{children:"Single Bone"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RootBone"})}),"\n"]}),(0,t.jsx)(n.p,{children:"Multiple Children, Single Root"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RootBone"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ChildBone1"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ChildBone2"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ChildBone3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"ChildBone4"})}),"\n"]}),(0,t.jsxs)(n.p,{children:['You can also address this by adding "end bones" after each ',(0,t.jsx)(n.code,{children:"ChildBone"}),", but that involves editing the armature."]})]}),"\n",(0,t.jsx)(n.h3,{id:"forces",children:"Forces"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Integration Type"})," defines the type of math used to simulate the motion of any transform affected by this component. Depending on which you choose, your options available in the Forces section will change. You can choose between two:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Simplified"})," is a more stable method that feels a bit slower and less reactive to external impulses and forces, but is easier to configure."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Advanced"})," is less stable, but allows more complicated configurations, and tends to be more reactive to external impulses and forces.",(0,t.jsx)(n.br,{}),"\n","With default settings, both of these modes act fairly similarly, but adjusting the settings and testing them out will quickly reveal how they differ."]}),"\n"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"Most (if not all) of the options below allow for Curves by pressing the C button next to the slider. Curves let you adjust the value over the length of the bone chain, and allow for VERY complicated setups within bone chains!"}),(0,t.jsx)(n.p,{children:"In fact, most PhysBones settings allow for the use of Curves! Learn how to use them and your PhysBones will look amazing!"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"physbones-054e326-2022-04-19_11-32-12_Unity.png",src:o(62334).A+"",width:"1504",height:"216"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Pull"})," - Amount of force used to return bones to their rest position.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Spring"})," - Amount bones will wobble when trying to reach their rest position. Only available in Simplified Integration Type.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Momentum"})," - The amount bones will wobble when trying to reach their rest position. Only available in Advanced Integration Type. Despite the description being the same, the effect is slightly different than Spring.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Stiffness"})," - The amount bones will try to stay at their resting position. Only available in Advanced Integration Type.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Gravity"})," - Amount of gravity applied to bones. Positive value pulls bones down, negative pulls upwards.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Gravity Falloff"})," - Only available if Gravity is non-zero. It controls how much Gravity is removed while in the rest position. A value of 1.0 means that Gravity will not affect the bone while in rest position at all. This allows you to have the effects of gravity when the bone is rotated off the initial position without affecting the bone's rest state."]}),"\n",(0,t.jsx)(n.p,{children:"One way to use the Gravity Falloff parameter is that if your hair is modeled as already being in the pose you want when standing up normally, you can use 1.0 gravity falloff. That way gravity won't affect you when you're just standing there, and your hair will rest in its modeled position. If your hair is modeled 45 degrees straight out and you want it to be affected by gravity enough to have a nice curve (but not completely straight out or completely straight down), the slider allows you to fiddle with it and use like 0.5-0.8 to only have a fraction of gravity at rest pose."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Immobile Type"})," changes how ",(0,t.jsx)(n.code,{children:"Immobile"})," works."]}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.strong,{children:"All Motion"}),", ",(0,t.jsx)(n.code,{children:"Immobile"})," reduces any motion as calculated from the root transform's parent. This is the ",(0,t.jsx)(n.strong,{children:"default mode"})," for new PhysBones and converted Dynamic Bones. In this mode all PhysBone movement in either scene-space or playspace will be dampened by the ",(0,t.jsx)(n.code,{children:"Immobile"})," factor."]}),"\n",(0,t.jsxs)(n.p,{children:["If set to ",(0,t.jsx)(n.strong,{children:"World (Experimental)"}),", ",(0,t.jsx)(n.code,{children:"Immobile"})," negates only positional movement from the reference of the scene root transform.  Motion via animation or IK still affects the bones normally. ",(0,t.jsx)(n.em,{children:"This mode may change in the future!"})]}),"\n",(0,t.jsxs)(n.p,{children:["This means that moving around in your playspace will still affect your PhysBones' movement as normal, but locomoting (pushing on your joystick to move) will have its movement dampened by the ",(0,t.jsx)(n.code,{children:"Immobile"})," factor."]}),"\n",(0,t.jsx)(n.h3,{id:"limits",children:"Limits"}),"\n",(0,t.jsxs)(n.p,{children:["Setting Limits allows you to limit the amount that a PhysBone chain can move. This is useful when you don't want hair to clip into your head, and is ",(0,t.jsx)(n.strong,{children:"far"})," more performant than a collider!"]}),"\n",(0,t.jsx)(n.p,{children:"Additionally, when configuring options for Limits, a visualization of those limits will appear in the Scene view when you have the PhysBone chain selected. These can be extremely helpful when fine-tuning Limits!"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Limit Type"})," has several modes. All of them allow for the adjustment of ",(0,t.jsx)(n.code,{children:"Rotation"})," in terms of ",(0,t.jsx)(n.code,{children:"Pitch"}),", ",(0,t.jsx)(n.code,{children:"Yaw"}),", and ",(0,t.jsx)(n.code,{children:"Roll"}),"-- alternately, along the X, Y, and Z axes respectively."]}),"\n",(0,t.jsx)(n.h4,{id:"none",children:"None"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"None"})," means no limit is enabled on this bone chain. There are no configuration options."]}),"\n",(0,t.jsx)(n.h4,{id:"angle",children:"Angle"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"physbones-b7abe1f-2022-04-19_11-49-26_Unity.png",src:o(27810).A+"",width:"372",height:"730"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Angle"})," means the bone chain will be limited to some ",(0,t.jsx)(n.code,{children:"Max Angle"}),", centered on an axis as defined by ",(0,t.jsx)(n.code,{children:"Rotation"}),". This is visualized as a Cone in the Scene view."]}),"\n",(0,t.jsx)(n.h4,{id:"hinge",children:"Hinge"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"physbones-b7723cc-2022-04-19_11-50-04_Unity.png",src:o(17807).A+"",width:"353",height:"727"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Hinge"})," means that the bone chain will be limited to some ",(0,t.jsx)(n.code,{children:"Max Angle"})," along the plane defined by the ",(0,t.jsx)(n.code,{children:"Rotation"}),". This is visualized as a slice of a circle, similar to a pizza or a pie."]}),"\n",(0,t.jsx)(n.h4,{id:"polar",children:"Polar"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"physbones-824db3c-2022-04-19_11-51-22_Unity.gif",src:o(70394).A+"",width:"608",height:"608"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Polar"})," is a bit more complicated. If you take a ",(0,t.jsx)(n.code,{children:"Hinge"})," and sweep it across ",(0,t.jsx)(n.code,{children:"Yaw"})," by some amount, you get a segment of a sphere in ",(0,t.jsx)(n.code,{children:"Polar"})," coordinates. You can configure ",(0,t.jsx)(n.code,{children:"Max Pitch"})," and ",(0,t.jsx)(n.code,{children:"Max Yaw"})," to adjust the size of the segment, and use ",(0,t.jsx)(n.code,{children:"Rotation"})," to define where that segment is located on the sphere. The visualization for ",(0,t.jsx)(n.code,{children:"Polar"})," is especially helpful."]}),"\n",(0,t.jsxs)(n.p,{children:["Don't overuse Polar limits, as they have a non-zero performance cost. Using a huge amount (handwaving: more than 64) will probably cause some issues. If your ",(0,t.jsx)(n.code,{children:"Max Pitch"})," and ",(0,t.jsx)(n.code,{children:"Max Yaw"})," values are similar or the same, an ",(0,t.jsx)(n.code,{children:"Angle"})," limit will suffice and costs less performance-wise."]}),"\n",(0,t.jsx)(n.h3,{id:"collision",children:"Collision"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Radius"})," - Collision radius around each bone in meters. Used for both collision and grabbing.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Allow Collision"})," - Allows collision with colliders other than the ones specified on this component. Currently the only other colliders are each player's hands and fingers as defined by their avatar.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Colliders"})," - List of colliders that specifically collide with these bones."]}),"\n",(0,t.jsx)(n.h3,{id:"stretch--squish",children:"Stretch & Squish"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Stretch Motion"})," - The amount motion will affect the stretch/squish of the bones.  A value of zero means bones will only stretch/squish as a result of grabbing or collisions.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Max Stretch"})," - Maximum amount the bones can stretch.  This value is a multiple of the original bone length. ",(0,t.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones#maximum-bounds",children:"Note: Maximum Bounds"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Max Squish"})," - Maximum amount the bones can shrink.  This value is a multiple of the original bone length."]}),"\n",(0,t.jsx)(n.h3,{id:"grab--pose",children:"Grab & Pose"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Allow Grabbing"})," - Allows players to grab the bones.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Allow Posing"})," - Allows players to pose the bones after grabbing.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Grab Movement"})," - Controls how grabbed bones move. A value of zero results in bones using pull & spring to reach the grabbed position. A value of one results in bones immediately moving to the grabbed position.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Snap To Hand"})," - When a bone is grabbed it will snap to the bone grabbing it."]}),"\n",(0,t.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Parameter"})," - Prefix used to provide multiple parameters to the avatar controller. In the following items, setting Parameter to ",(0,t.jsx)(n.code,{children:"Tail"})," would replace ",(0,t.jsx)(n.code,{children:"{parameter}"})," with ",(0,t.jsx)(n.code,{children:"Tail"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{parameter}_IsGrabbed"}),(0,t.jsx)(n.br,{}),"\n","[Bool] Are the bones currently being grabbed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{parameter}_IsPosed"}),(0,t.jsx)(n.br,{}),"\n","[Bool] Are the bones been posed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{parameter}_Angle"}),(0,t.jsx)(n.br,{}),"\n","[Float] Range of 0.0-1.0. Normalized 180 angle made between the end bone's is from its original rest position. In other words, if you twist a bone completely opposite of its start direction, this param will have a value of 1.0."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"{parameter}_Stretch"}),(0,t.jsx)(n.br,{}),"\n","[Float] Range of 0.0-1.0. How close the bones are to their maximum stretch length."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Is Animated"})," - Allows bone transforms to be animated. Each frame bone rest position will be updated according to what was animated. This must be enabled in order for any bone in the PhysBone chain (Root bone included!) to respect animations applied to it."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Reset When Disabled"})," - When this component becomes disabled, the bones will automatically reset to their default position."]}),"\n",(0,t.jsx)(n.h3,{id:"important-notes-usage-tips-etc",children:"Important Notes, Usage Tips, etc"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Do not have a Constraint and a PhysBone component on the same GameObject"}),", as this causes execution order issues."]}),"\n",(0,t.jsx)(n.p,{children:"Put the Constraint on the parent game object instead. You can still have the target of the Constraint set to the original GameObject."}),"\n",(0,t.jsxs)(n.admonition,{title:"Quest limitations",type:"caution",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PhysBones have a hard limit on the Meta Quest."})," This is done to prevent a reduction in performance on the Meta Quest devices, which are often already low on CPU resources."]}),(0,t.jsxs)(n.p,{children:["You can view those limits as the Very Poor limits for Quest described in the ",(0,t.jsx)(n.a,{href:"/avatars/avatar-performance-ranking-system#quest-limits",children:"Minimum Displayed Performance Rank"})," documentation."]})]}),"\n",(0,t.jsx)(n.h4,{id:"per-component-limitations",children:"Per-Component Limitations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"A single PhysBone component cannot affect more than 256 transforms at a time."})," This counts the root bone as well as all children. ",(0,t.jsx)(n.em,{children:"This also affects Dynamic Bone conversions!"})]}),"\n",(0,t.jsx)(n.p,{children:"However, you should aim not to have that many transforms to animate in the first place. Try merging bones in the chain upward to their immediate parents. Community-created tools like Cat's Blender Plugin can do this for you."}),"\n",(0,t.jsx)(n.h4,{id:"animating-properties",children:"Animating Properties"}),"\n",(0,t.jsxs)(n.p,{children:["PhysBone properties like Spring, Pull, Stiffness, etc are set at initialization and ",(0,t.jsx)(n.strong,{children:"cannot be animated"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["However, if you animate a property of a PhysBone component and then animate the component off and then on, you ",(0,t.jsx)(n.em,{children:"may"})," get the behavior you want. Be aware that this is not a supported method of animating these properties, and will not be supported in future changes. (In other words, it might break. If it does, we're not going to try to fix it.)"]}),"\n",(0,t.jsx)(n.h4,{id:"humanoid-bones",children:"Humanoid Bones"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Do not set Humanoid bones as PhysBone Root bones."})," In other words, do not set Hip, Spine, Chest, Upper Chest, Neck, Head, or any of the limb bones as Roots. This will cause major issues."]}),"\n",(0,t.jsx)(n.p,{children:"Instead, duplicate the bone you want to use as root and re-parent all the children bones you want to animate to that new duplicate root. This should be done in Blender. Community-created tools like Cat's Blender Plugin can do this for you."}),"\n",(0,t.jsx)(n.h4,{id:"physbone-rotation",children:"PhysBone Rotation"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike Dynamic Bones, ",(0,t.jsx)(n.strong,{children:"the root bone of a PhysBone chain is permitted to rotate."})," It can't translate, though. This can have some consequences with certain setups-- try things out on your own to see how it behaves."]}),"\n",(0,t.jsx)(n.h4,{id:"physbone-av3-parameters",children:"PhysBone AV3 Parameters"}),"\n",(0,t.jsxs)(n.p,{children:["When affecting parameters, ",(0,t.jsxs)(n.strong,{children:["there is no need to use Synced Parameters as defined by the ",(0,t.jsx)(n.code,{children:"VRCExpressionParameters"})," object"]}),". These parameters are already updated on both the local and remote machines, as both will be running PhysBones."]}),"\n",(0,t.jsx)(n.h4,{id:"physbone-immobile-behavior",children:"PhysBone Immobile Behavior"}),"\n",(0,t.jsxs)(n.p,{children:["Dynamic Bones bases its ",(0,t.jsx)(n.code,{children:"Inert"})," value from where the component is placed, not the root transform. This is probably a Dynamic Bones bug. As such, PhysBones bases its ",(0,t.jsx)(n.code,{children:"Immobile"})," value from the root transform. This may affect behavior in some cases."]}),"\n",(0,t.jsx)(n.h3,{id:"optimal-component-usage",children:"Optimal Component Usage"}),"\n",(0,t.jsx)(n.p,{children:"Because of the multi-threaded nature of PhysBones, it isn't always the most efficient to put all bones into a single chain. Multiple components allows us to break up the work across threads. However, you should still strive to have fewer components... but it's not as bad to have a few on your avatar as it was with Dynamic Bones."}),"\n",(0,t.jsxs)(n.p,{children:["If you ",(0,t.jsx)(n.em,{children:"really"})," need a number, you should consider splitting sets of chains when you're getting over 128 transforms affected by a single component. If you have a dress with 256 bones and it splits at a root, splitting it into two or three components will work."]}),"\n",(0,t.jsx)(n.p,{children:"However, if you're just dealing with something on the order of 32 bones...  don't worry about it. As you can probably tell, these aren't strict rules! We'll likely introduce some soft warnings later on when something looks like it should be set up a different way."}),"\n",(0,t.jsx)(n.h3,{id:"maximum-bounds",children:"Maximum Bounds"}),"\n",(0,t.jsx)(n.p,{children:"Each VRCPhysBone component has a bounding box that grows and shrinks as bones move around. These bounding boxes aid the collision detection for players touching and grabbing PhysBones. For efficiency, bounding boxes are forced to a maximum of 10\xd710\xd710 meters. PhysBones can go outside of this range and continue to work as expected. However, players may be unable to touch or grab those bones depending on their location."}),"\n",(0,t.jsx)(n.p,{children:"The bounding box only accounts for bones with collision and a radius greater than zero. In situations where you want to provide extremely long stretching, as long as bones with collision exist past the stretching point, you can avoid hitting this maximum bounds limit."}),"\n",(0,t.jsx)(n.h2,{id:"vrcphysbonecollider",children:"VRCPhysBoneCollider"}),"\n",(0,t.jsx)(n.p,{children:"Defines a collider that will affect PhysBones that are configured correctly."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(45294).A+"",width:"619",height:"191"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Root Transform"})," - Transform where this collider is placed. If empty, we use this game object's transform.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Shape Type"})," - Type of collision shape used by this collider. You can choose between a Sphere, Capsule, or Plane collider.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Radius"})," - Size of the collider extending from its origin.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Height"})," - Height of the capsule along the Y axis.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Position"})," - Position offset from the root transform.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Rotation"})," - Rotation offset from the root transform.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Inside Bounds"})," - When enabled, this collider will contain bones within its bounds instead of keeping them out.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"Bones As Sphere"})," - When enabled, this collider will treat PhysBone collision radii as spheres centered on the bone's position rather than capsules running the length of the bone."]}),"\n",(0,t.jsx)(n.h3,{id:"standard-colliders",children:"Standard Colliders"}),"\n",(0,t.jsx)(n.p,{children:'A set of "Standard Colliders" are defined in the Avatar Descriptor, in a new section called \u201cColliders\u201d. This section lets you define a number of standard colliders that exist on every avatar. These will be setup automatically if you don\u2019t touch this, but they may also be tweaked to exactly fit your avatar. These colliders do not affect the performance rating.'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Head"}),"\n",(0,t.jsx)(n.li,{children:"Torso"}),"\n",(0,t.jsx)(n.li,{children:"Hands L/R"}),"\n",(0,t.jsx)(n.li,{children:"Feet L/R"}),"\n",(0,t.jsxs)(n.li,{children:["Fingers L/R","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Index"}),"\n",(0,t.jsx)(n.li,{children:"Middle"}),"\n",(0,t.jsx)(n.li,{children:"Ring"}),"\n",(0,t.jsx)(n.li,{children:"Little"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These colliders act primarily as ",(0,t.jsx)(n.a,{href:"/avatars/avatar-dynamics/contacts",children:"Contact"})," Senders that other people can detect with their avatars. However, the finger and hand colliders are also used to create global ",(0,t.jsx)(n.a,{href:"/avatars/avatar-dynamics/physbones",children:"PhysBone"})," Colliders that can be used to affect other people\u2019s PhysBones."]}),"\n",(0,t.jsx)(n.h2,{id:"automatic-dynamic-bone-conversion",children:"Automatic Dynamic Bone Conversion"}),"\n",(0,t.jsx)(n.p,{children:"By default, the client will automatically convert Dynamic Bones over to PhysBones. This is done to increase overall performance and is also necessary for interactions between avatars. If desired, you can toggle this off in the Performance Options section of the Main Menu, but you will lose the performance gains and the ability for others to interact with you."}),"\n",(0,t.jsx)(n.p,{children:"By default, Dynamic Bone conversions use Advanced mode, as we're able to more precisely match DB behavior with the Advanced integration method. Additionally, DB conversions use Ignore for the Multi-Child type. This may cause issues with some edge-case DB setups, but using First or Average causes unwanted behavior in almost all cases during conversion."}),"\n",(0,t.jsx)(n.p,{children:"Turning off the conversion means you will not have any interaction with avatar bones that are driven by Dynamic Bones.  However, avatars using PhysBones and Contacts natively will not be affected."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"It is important to note that Dynamic Bones and PhysBones are not identical."})," The in-program conversion process is not perfect, and we intend to update it more over time. However, keep in mind: the conversion process will never be perfect! The goal of the automatic conversion is to have most setups working decently well and not breaking, not to perfectly replicate behavior. ",(0,t.jsx)(n.em,{children:"It is expected that all users will gradually transition to using PhysBones provided they want their avatars to be rendered accurately and future proof."})]}),"\n",(0,t.jsx)(n.h3,{id:"manual-dynamic-bone-conversion",children:"Manual Dynamic Bone Conversion"}),"\n",(0,t.jsx)(n.p,{children:"You can choose to use the SDK to convert your avatar from Dynamic Bones to PhysBones."}),"\n",(0,t.jsx)(n.p,{children:"This process deletes the previous Dynamic Bone components from your avatar and can not be easily reversed. As a result, make a backup of your avatar before attempting this conversion."}),"\n",(0,t.jsxs)(n.p,{children:["You can access this tool in the SDK by looking at the Build Control Panel, or by accessing it in the Unity menu under ",(0,t.jsx)(n.code,{children:"VRChat SDK/Utilities/Convert DynamicBones to PhysBones"}),". You must select the avatar beforehand for this to work."]}),"\n",(0,t.jsx)(n.h3,{id:"unmigrated-dynamic-bone-components",children:"Unmigrated Dynamic Bone Components"}),"\n",(0,t.jsx)(n.p,{children:"Some features and behaviors in Dynamic Bones do not exist in PhysBones, and will not migrate."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Force"})," - Dynamic Bone ",(0,t.jsx)(n.code,{children:"Gravity"})," and ",(0,t.jsx)(n.code,{children:"Force"})," values in the X or Z directions are ignored as they have no equivalent in PhysBones."]}),"\n",(0,t.jsx)(n.h3,{id:"eventual-dynamic-bone-deprecation",children:"Eventual Dynamic Bone Deprecation"}),"\n",(0,t.jsx)(n.p,{children:"Dynamic Bones will eventually be completely removed from VRChat. At that time, all older avatars still using Dynamic Bones will use the automatic conversion."}),"\n",(0,t.jsxs)(n.p,{children:["At a later time, we will give a deprecation date with ",(0,t.jsx)(n.em,{children:"plenty"})," of time to allow for avatar authors to convert what they want to convert"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},62334:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-054e326-2022-04-19_11-32-12_Unity-b113a7a250a3dd1674a328f93e47f6ea.png"},70394:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-824db3c-2022-04-19_11-51-22_Unity-954792a12c7d0a047b794e74b716be50.gif"},45294:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-ac38f46-2022-05-04_18-35-11_Unity-1467cd89f137f3f7b75b110ff2897d5b.png"},17807:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-b7723cc-2022-04-19_11-50-04_Unity-9f8c43ea4a22b77769d81a99134bc9d5.png"},27810:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-b7abe1f-2022-04-19_11-49-26_Unity-1019f682db46ee4458a8fc00f1275f16.png"},81448:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/physbones-ca9ee06-2022-05-04_18-23-09_Unity-b5504c435b24026584dcf8bd452e79ec.png"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(96540);const s={},i=t.createContext(s);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);