"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[8762],{23228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(74848),i=n(28453);const o={title:"VRCJSON",slug:"vrcjson",hidden:!1,createdAt:"2023-04-24T23:48:39.230Z",updatedAt:"2023-04-26T15:25:05.803Z"},r="VRC JSON",a={id:"worlds/udon/data-containers/vrcjson",title:"VRCJSON",description:"Data Dictionaries and Data Lists include functions to convert to and from JSON. A Data List is equivalent to a JSON array, and a JSON object is equivalent to a Data Dictionary with string keys.",source:"@site/docs/worlds/udon/data-containers/vrcjson.md",sourceDirName:"worlds/udon/data-containers",slug:"/worlds/udon/data-containers/vrcjson",permalink:"/creator-docs-i18n/worlds/udon/data-containers/vrcjson",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/data-containers/vrcjson.md",tags:[],version:"current",lastUpdatedBy:"Momo the Monster",lastUpdatedAt:1702052609,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{title:"VRCJSON",slug:"vrcjson",hidden:!1,createdAt:"2023-04-24T23:48:39.230Z",updatedAt:"2023-04-26T15:25:05.803Z"},sidebar:"tutorialSidebar",previous:{title:"Data Tokens",permalink:"/creator-docs-i18n/worlds/udon/data-containers/data-tokens"},next:{title:"Midi in Udon",permalink:"/creator-docs-i18n/worlds/udon/midi/"}},l={},d=[{value:"JSON functions",id:"json-functions",level:2},{value:"Supported types and values",id:"supported-types-and-values",level:2},{value:"Deserializing from JSON",id:"deserializing-from-json",level:2},{value:"Serializing to JSON",id:"serializing-to-json",level:2},{value:"JsonExportType",id:"jsonexporttype",level:3}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"vrc-json",children:"VRC JSON"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/worlds/udon/data-containers/data-dictionaries",children:"Data Dictionaries"})," and ",(0,s.jsx)(t.a,{href:"/worlds/udon/data-containers/data-lists",children:"Data Lists"})," include functions to convert to and from JSON. A Data List is equivalent to a JSON array, and a JSON object is equivalent to a Data Dictionary with string keys."]}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"https://www.json.org/json-en.html",children:"Json documentation"})," for further details on the JSON schema itself. Everything in this page is relating to this particular implementation of the JSON schema."]}),"\n",(0,s.jsx)(t.h2,{id:"json-functions",children:"JSON functions"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Function"}),(0,s.jsx)(t.th,{children:"Inputs"}),(0,s.jsx)(t.th,{children:"Outputs"}),(0,s.jsx)(t.th,{children:"Result"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VRCJson.TryDeserializeFromJson"}),(0,s.jsx)(t.td,{children:"String input"}),(0,s.jsx)(t.td,{children:"success bool, DataToken result"}),(0,s.jsx)(t.td,{children:"Creates a DataList or DataDictionary from JSON string input. If successful, this returns true and the result token will be either a DataDictionary or DataList. If not successful, this returns false and puts an error explaining what the issue was in the result token."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"VRCJson.TrySerializeToJson"}),(0,s.jsx)(t.td,{children:"DataToken input, JsonExportType"}),(0,s.jsx)(t.td,{children:"success bool, DataToken result"}),(0,s.jsx)(t.td,{children:"Attempts to convert a DataDictionary or DataList into JSON string output. If successful, this returns true and the result token will be a string with the final Json. If not successful, this returns false and puts an error explaining what the issue was in the result token."})]})]})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Note that in Udon Graph, "VRC" is removed from the beginning of all class names, so you need to search for "Json" to find these functions.'}),"\n",(0,s.jsxs)(t.li,{children:["In UdonSharp, these classes are found in the ",(0,s.jsx)(t.code,{children:"VRC.SDK3.Data"})," namespace."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"supported-types-and-values",children:"Supported types and values"}),"\n",(0,s.jsx)(t.p,{children:"JSON is a small, simple, and strict specification. DataLists and DataDictionaries are capable of supporting a much wider range of configurations, which means that you may face some limitations when going from Data container to JSON. Make sure you are aware of these limitations and avoid using these configurations in situations where you intend to use JSON."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:["JSON does not support ",(0,s.jsx)(t.code,{children:"Object Reference"})," Data Tokens."]})," If you have any object references in your Data containers when you try to serialize to JSON, the TrySerializeToJson function will return false with ",(0,s.jsx)(t.code,{children:"DataError.TypeUnsupported"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON only supports string-keyed dictionaries."})," If you have any keys in your DataDictionaries that are not strings when you try to serialize to JSON, the TrySerializeToJson function will return false with ",(0,s.jsx)(t.code,{children:"DataError.TypeUnsupported"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON does not support NaN or Infinity."})," If you have any floats or doubles that contain NaN or Infinity, the TrySerializeToJson function will return false with ",(0,s.jsx)(t.code,{children:"DataError.ValueUnsupported"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON does not support anything other than Dictionary or List as the root."})," If you use a simple value DataToken without any children, the TrySerializeToJson function will return false with ",(0,s.jsx)(t.code,{children:"DataError.TypeUnsupported"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"JSON only supports one type of number."})," It does not differentiate between all the different types. As a result, deserializing from JSON will store all numbers in ",(0,s.jsx)(t.code,{children:"Double"})," format. If you have Data Tokens containing other types of numbers such as ",(0,s.jsx)(t.code,{children:"int"}),", ",(0,s.jsx)(t.code,{children:"byte"}),", or ",(0,s.jsx)(t.code,{children:"float"})," then they can serialize to JSON, however if you Deserialize that same JSON back into Data Containers, you will find that they are now ",(0,s.jsx)(t.code,{children:"Doubles"})," instead."]}),"\n",(0,s.jsx)(t.h2,{id:"deserializing-from-json",children:"Deserializing from JSON"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VRCJson.TryDeserializeFromJson"})," is the function you should use when you want to go from Json to Data containers. It is recommended to use it as the condition for an ",(0,s.jsx)(t.code,{children:"if"})," or ",(0,s.jsx)(t.code,{children:"branch"})," so that you can choose what happens if it fails and what happens if it succeeds."]}),"\n",(0,s.jsx)(t.p,{children:"If TryDeserializeFromJson returns true, then that means it has successfully turned your Json string into a DataList or DataDictionary. You should then do a type check on the result to determine what happens for each case."}),"\n",(0,s.jsx)(t.p,{children:"If this returns false, then the string you provided was not valid JSON. The DataToken you are given will be a DataError, and if you run DataToken.ToString on it, it will give you both the error and a string explaining more details about exactly what went wrong."}),"\n",(0,s.jsx)(t.p,{children:"For performance reasons, VRCJSON does not parse everything immediately. Instead, it only parses the top level of JSON first. if the top level is valid, but you have have invalid JSON further down inside a nested structure, it is possible for the initial TryDeserializeFromJson to return true. Later, if you use TryGetValue to pull values from something that was invalid, it will return false and give you DataError.UnableToParse."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",metastring:'title="Deserializing from JSON"',children:'if (VRCJson.TryDeserializeFromJson(json, out DataToken result))\n{\n    // Deserialization succeeded! Let\'s figure out what we\'ve got.\n    if (result.TokenType == TokenType.DataDictionary)\n    {\n        Debug.Log($"Successfully deserialized as a dictionary with {result.DataDictionary.Count} items.");\n    }\n    else if (result.TokenType == TokenType.DataList)\n    {\n        Debug.Log($"Successfully deserialized as a list with {result.DataList.Count} items.");\n    }\n    else \n    {\n        // This should not be possible. If TryDeserializeFromJson returns true, this it *must* be either a dictionary or a list.\n    }\n} else {\n    // Deserialization failed. Let\'s see what the error was.\n    Debug.Log($"Failed to Deserialize json {json} - {result.ToString()}");\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"serializing-to-json",children:"Serializing to JSON"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"VRCJson.TrySerializeToJson"})," is the function you should use when you want to go from Data containers to Json. It is recommended to use it as the condition for an ",(0,s.jsx)(t.code,{children:"if"})," or ",(0,s.jsx)(t.code,{children:"branch"})," so that you can choose what happens if it fails and what happens if it succeeds."]}),"\n",(0,s.jsx)(t.p,{children:"If TrySerializeToJson returns true, then that means it has successfully converted your DataList or DataDictionary into a Json string, and you can safely pull the string out of the result token."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-csharp",metastring:'title="Serializing to JSON"',children:'if (VRCJson.TrySerializeToJson(dictionary, JsonExportType.Beautify, out DataToken json))\n{\n    // Successfully serialized! We can immediately get the string out of the token and do something with it.\n    Debug.Log($"Successfully serialized to json: {json.String}");\n} \nelse \n{\n    // Failed to serialize for some reason, running ToString on the result should tell us why.\n    Debug.Log(json.ToString());\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"jsonexporttype",children:"JsonExportType"}),"\n",(0,s.jsx)(t.p,{children:"When serializing to Json, you can choose the JsonExportType you would like. If you want something human-readable, Beautify is better. If you want something compact for sending over the network, Minify is better."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Beautify: Expands each element to a new line and adds one tab per depth."}),"\n",(0,s.jsx)(t.li,{children:"Minify: Keeps everything in one line and minimizes whitespace."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);