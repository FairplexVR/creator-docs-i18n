"use strict";(self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[]).push([[3464],{60171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(74848),s=n(28453);const a={title:"Data Lists",slug:"data-lists",hidden:!1,createdAt:"2023-04-24T23:48:11.427Z",updatedAt:"2023-04-26T15:18:56.307Z"},r="Data Lists",o={id:"worlds/udon/data-containers/data-lists",title:"Data Lists",description:"Data Lists store Data Tokens by index, similarly to C# Lists. Most Data List functions are just wrappers for the underlying C# list, so the C# list documentation also applies if you are looking for more specific details.",source:"@site/docs/worlds/udon/data-containers/data-lists.md",sourceDirName:"worlds/udon/data-containers",slug:"/worlds/udon/data-containers/data-lists",permalink:"/creator-docs-i18n/worlds/udon/data-containers/data-lists",draft:!1,unlisted:!1,editUrl:"https://github.com/FairplexVR/creator-docs/edit/main/Docs/docs/worlds/udon/data-containers/data-lists.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712356660,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{title:"Data Lists",slug:"data-lists",hidden:!1,createdAt:"2023-04-24T23:48:11.427Z",updatedAt:"2023-04-26T15:18:56.307Z"},sidebar:"tutorialSidebar",previous:{title:"Data Dictionaries",permalink:"/creator-docs-i18n/worlds/udon/data-containers/data-dictionaries"},next:{title:"Data Tokens",permalink:"/creator-docs-i18n/worlds/udon/data-containers/data-tokens"}},d={},l=[{value:"Properties",id:"properties",level:2},{value:"Functions",id:"functions",level:2},{value:"Getting a value from a DataList",id:"getting-a-value-from-a-datalist",level:2},{value:"TryGetValue",id:"trygetvalue",level:3},{value:"TryGetValue with TokenType",id:"trygetvalue-with-tokentype",level:3},{value:"Shorthand Bracket syntax",id:"shorthand-bracket-syntax",level:3},{value:"Initializing A Data List",id:"initializing-a-data-list",level:2},{value:"Syncing a Data List with other players over the network",id:"syncing-a-data-list-with-other-players-over-the-network",level:2},{value:"FAQ",id:"faq",level:2},{value:"Why not have a ToArray for each type?",id:"why-not-have-a-toarray-for-each-type",level:3},{value:"Arrays are similar, what&#39;s the difference?",id:"arrays-are-similar-whats-the-difference",level:3},{value:"When should I use a DataList instead of an array?",id:"when-should-i-use-a-datalist-instead-of-an-array",level:3},{value:"When should I use an array instead of a DataList?",id:"when-should-i-use-an-array-instead-of-a-datalist",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"data-lists",children:"Data Lists"}),"\n",(0,i.jsxs)(t.p,{children:["Data Lists store ",(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/data-tokens",children:"Data Tokens"})," by index, similarly to ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1?view=net-7.0",children:"C# Lists"}),". Most Data List functions are just wrappers for the underlying C# list, so the C# list documentation also applies if you are looking for more specific details."]}),"\n",(0,i.jsxs)(t.p,{children:["Data Lists can be serialized to/from JSON strings using ",(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/vrcjson",children:"VRCJSON"}),". This is the current recommended method of syncing Data Lists over the network."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are using UdonSharp, include the ",(0,i.jsx)(t.code,{children:"using VRC.SDK3.Data;"})," directive to use data lists."]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Result"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Capacity"}),(0,i.jsxs)(t.td,{children:["Set or get the capacity of the list. See ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.capacity?view=net-8.0",children:"C# documentation"})," for further details."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Count"}),(0,i.jsx)(t.td,{children:"Get the number of elements in the list"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Input"}),(0,i.jsx)(t.th,{children:"Output"}),(0,i.jsx)(t.th,{children:"Result"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Add"}),(0,i.jsx)(t.td,{children:"DataToken"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Adds a token at the end of the list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"AddRange"}),(0,i.jsx)(t.td,{children:"DataList"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Adds the values of another Data List at the end of this Data List."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BinarySearch"}),(0,i.jsx)(t.td,{children:"DataToken value"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsxs)(t.td,{children:["Uses a binary search algorithm to locate a specific element in the List by comparison. ",(0,i.jsx)(t.strong,{children:"In order to perform a binary search, the list must be sorted"}),". See ",(0,i.jsx)(t.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1.binarysearch?view=net-8.0",children:"C# documentation"})," for further details on binary search."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"BinarySearch"}),(0,i.jsx)(t.td,{children:"DataToken value, int startIndex, int count"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Performs a binary search within the specified range, starting at the provided index and extending toward the end of the list by the provided count. Note that this function searches by comparison, and will compare dictionaries and lists by count rather than contents. This makes it unsuitable for finding a specific dictionary or list within a list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Clear"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Removes all values from this list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Contains"}),(0,i.jsx)(t.td,{children:"DataToken value"}),(0,i.jsx)(t.td,{children:"bool result"}),(0,i.jsx)(t.td,{children:"Returns true if the Data List contains the specified value."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"DeepClone"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"DataList result"}),(0,i.jsx)(t.td,{children:"Clones the DataList into a new DataList that contains all the same values. This does do a deep clone, which means that it will recursively navigate inside each DataList or DataDictionary and copy their contents as well. However, it will not look inside other structures such as arrays, and those will still have the same reference to the original."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"GetRange"}),(0,i.jsx)(t.td,{children:"int index, int count"}),(0,i.jsx)(t.td,{children:"DataList output"}),(0,i.jsx)(t.td,{children:"Copies a segment of the DataList out to another DataList. Returns false if index or count were out of range."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the first occurrence within the entire DataList. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item, int startIndex"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the first occurrence within the range of elements in the DataList that extends from the specified index to the last element. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"IndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item, int startIndex, int count"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the first occurrence within the range of elements in the DataList that starts at the specified index and contains the specified number of elements. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Insert"}),(0,i.jsx)(t.td,{children:"int index, DataToken input"}),(0,i.jsx)(t.td,{children:"bool success"}),(0,i.jsx)(t.td,{children:"Inserts a token into the middle of the list. All entries above the specified index will be shifted up one. Returns false if index was out of range."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"InsertRange"}),(0,i.jsx)(t.td,{children:"int index, DataList input"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Inserts a DataList into the middle of the DataList. All entries above the specified index will be shifted up. Returns false if index was out of range."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LastIndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the last occurrence within the DataList. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LastIndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item, int startIndex"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the last occurrence within the range of elements in the DataList that extends from the first element to the specified index. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LastIndexOf"}),(0,i.jsx)(t.td,{children:"DataToken item, int startIndex, int count"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"Searches for the specified object and returns the zero-based index of the last occurrence within the range of elements in the DataList that contains the specified number of elements and ends at the specified index. If not found, returns -1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Remove"}),(0,i.jsx)(t.td,{children:"DataToken value"}),(0,i.jsx)(t.td,{children:"bool success"}),(0,i.jsx)(t.td,{children:"Removes the first occurrence of the specified value. Returns true if a matching value was found, returns false if not."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveAll"}),(0,i.jsx)(t.td,{children:"DataToken value"}),(0,i.jsx)(t.td,{children:"bool success"}),(0,i.jsx)(t.td,{children:"Removes all occurrences of the specified value. Returns true if any matching values were found, returns false if not."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveAt"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Removes the element at the specified index."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RemoveRange"}),(0,i.jsx)(t.td,{children:"int index, int count"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Removes a range of elements from the list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Reverse"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Reverses the order of all elements in the list."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Reverse"}),(0,i.jsx)(t.td,{children:"int index, int count"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Reverses the order of elements within the range specified, starting at the provided index and extending toward the end of the list by the provided count."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SetValue"}),(0,i.jsx)(t.td,{children:"int index, DataToken input"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Sets a DataToken at the specified index."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ShallowClone"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"DataList result"}),(0,i.jsx)(t.td,{children:"Clones the DataList into a new DataList that contains all the same values. This does not do a deep clone, which means that if the DataList contains references to other Data Containers, those will still be the same reference."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sort"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsxs)(t.td,{children:["Sorts all the elements in the list. If all elements are the same type, then they will be sorted by that type's native comparison operation. If a DataList contains multiple different types but those types are all numbers, then it will sort them with a numeric conversion. If a DataList contains multiple different non-numeric types, then it will sort them in this order: ",(0,i.jsx)(t.code,{children:"Null, Number, String, DataList, DataDictionary, Reference"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Sort"}),(0,i.jsx)(t.td,{children:"int index, int count"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Performs the same operation as Sort but only within the range specified, starting at the provided index and extending toward the end of the list by the provided count."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ToArray"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"DataToken[] output"}),(0,i.jsx)(t.td,{children:"Converts the DataList into a DataToken array"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TrimExcess"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"Sets the capacity to the actual number of elements in the DataList, if that number is less than a threshold value."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TryGetValue"}),(0,i.jsx)(t.td,{children:"int index"}),(0,i.jsx)(t.td,{children:"DataToken output"}),(0,i.jsxs)(t.td,{children:["Gets a token from the specified index and puts it in the ",(0,i.jsx)(t.code,{children:"out DataToken"}),". Returns true if successful."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"TryGetValue"}),(0,i.jsx)(t.td,{children:"int index, TokenType expected"}),(0,i.jsx)(t.td,{children:"bool success, DataToken output"}),(0,i.jsxs)(t.td,{children:["Gets a token from the specified index and puts it in the ",(0,i.jsx)(t.code,{children:"out DataToken"}),". Returns true if successful. This version of ",(0,i.jsx)(t.code,{children:"TryGetValue"})," includes a TokenType, which means it will do an automatic type check for you. If the type does not match, it will return false with ",(0,i.jsx)(t.code,{children:"DataError.TypeMismatch"})]})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Note that calling functions which affect or look at all values such as ",(0,i.jsx)(t.code,{children:"Contains"}),", ",(0,i.jsx)(t.code,{children:"IndexOf"}),", and ",(0,i.jsx)(t.code,{children:"LastIndexOf"})," on a Data List generated from Json will parse all top-level values that have not already been parsed, which may be expensive with many values. Once they are parsed, future operations will be cheaper."]}),"\n",(0,i.jsx)(t.h2,{id:"getting-a-value-from-a-datalist",children:"Getting a value from a DataList"}),"\n",(0,i.jsx)(t.p,{children:"There are several different ways to get a value out of a DataList. Each one has it's own use case, and it is up to you to choose which one you want to use."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/data-lists#trygetvalue",children:"TryGetValue"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/data-lists#trygetvalue-with-tokentype",children:"TryGetValue with TokenType"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/data-lists#shorthand-bracket-syntax",children:"Shorthand bracket syntax"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"trygetvalue",children:"TryGetValue"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to get a value out of a list safely, it is recommended to use ",(0,i.jsx)(t.code,{children:"TryGetValue"}),". This is a function that returns true or false depending on whether or not getting the value was successful. It is intended to put this inside of the conditions for an ",(0,i.jsx)(t.code,{children:"if"})," or a ",(0,i.jsx)(t.code,{children:"branch"})," so that it is clear what happens when it succeeds and what happens when it fails."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of TryGetValue"',children:'if (list.TryGetValue(0, out DataToken value))\n{\n    Debug.Log($"Success! {value}");\n}\nelse\n{\n    Debug.Log("Failed! {value}");\n}\n\n'})}),"\n",(0,i.jsxs)(t.p,{children:["If this does fail, the DataToken you receive is still valid, but rather than containing your data it will contain an ",(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/data-tokens#errors",children:"error"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This method is good for when you want to get some value from some location, but you don't care what it is exactly."}),"\n",(0,i.jsxs)(t.p,{children:["As this function does not have a type check built in, you should pair this function with some form of type checking, whether that be an ",(0,i.jsx)(t.code,{children:"if"}),", ",(0,i.jsx)(t.code,{children:"branch"}),", or ",(0,i.jsx)(t.code,{children:"switch"}),". If you only care about one specific type, then it is recommended to just use the version of TryGetValue with TokenType, which does an automatic type check."]}),"\n",(0,i.jsx)(t.h3,{id:"trygetvalue-with-tokentype",children:"TryGetValue with TokenType"}),"\n",(0,i.jsx)(t.p,{children:"If you want to get a value from a list and you don't know what type it could be, it is important to do type checks. You could do that yourself in your own code, but that can get messy. Instead, you can use the version of TryGetValue that includes a TokenType. When you do this, it indicates that you only want to retrieve the value if it is the type you expect. Otherwise, it returns false and that can be handled gracefully."}),"\n",(0,i.jsx)(t.p,{children:"This method is good for when you want to get a specific value from a specific location, but the data is coming from an outside source so you are not confident that the source has the right data."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of TryGetValue with TokenType"',children:'// You could do it this way, but it\'s a bit ugly\nif (list.TryGetValue(0, out DataToken value)) {\n    if (value.TokenType == TokenType.DataDictionary)\n    {\n        Debug.Log($"Success! Matching dictionary has {value.DataDictionary.Count} items");\n    }\n}\n\n// This approach has a type check built in! It\'s functionally the same, but streamlined.\nif (list.TryGetValue(0, TokenType.DataDictionary, out value)) {\n    Debug.Log($"Success! Matching dictionary has {value.DataDictionary.Count} items");\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"shorthand-bracket-syntax",children:"Shorthand Bracket syntax"}),"\n",(0,i.jsxs)(t.p,{children:["You can also set and get items from a DataList using bracket syntax such as ",(0,i.jsx)(t.code,{children:'list[5] = "value";'})," in UdonSharp or ",(0,i.jsx)(t.code,{children:"DataList Get Item"})," node in Udon graph. This method is smaller and easier to use. However, be aware that this is not completely safe and may halt your udonbehaviour if you attempt to perform an invalid operation. You should only use this if you have complete control over the data and can guarantee that it exists and is the type you expect. Otherwise, it is recommended to use some form of ",(0,i.jsx)(t.code,{children:"TryGetValue"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of Shorthand Bracket syntax"',children:"list[0] = 5;\nlist[1] = 10;\n\n// This makes the assumption that index 0 and 1 will always contain integers.\n// This is a safe assumption to make since we set them just above in a controlled environment.\n// If the data is coming from an external source, we shouldn't make these assumptions!\nint sum = list[0].Int + list[1].Int;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"initializing-a-data-list",children:"Initializing A Data List"}),"\n",(0,i.jsx)(t.p,{children:"In Udonsharp, Data Lists can be initialized in private variables. This allows you to have a pre-existing set of data that is defined before your code runs. This also supports nested dictionaries and anything else that DataTokens support. Here is an example of how you should use this syntax:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of initializing a Data List"',children:'private DataList _groceries = new DataList()\n{\n    "Bananas",\n    "Grapes",\n    "Milk",\n    "Soda",\n    "Turkey",\n    "Ham",\n    "Roast Beef"\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"At the moment, Udonsharp does not support initializers of this type inside a function. This would be a feature request for Udonsharp."}),"\n",(0,i.jsxs)(t.p,{children:["At the moment, Unity does not serialize DataLists, which means that ",(0,i.jsx)(t.strong,{children:"this is not recommended for serialized public variables."})," It should be used for ",(0,i.jsx)(t.code,{children:"private"})," or ",(0,i.jsx)(t.code,{children:"[NonSerialized] public"})," variables only. This is an addition to the feature that we are still working on."]}),"\n",(0,i.jsx)(t.h2,{id:"syncing-a-data-list-with-other-players-over-the-network",children:"Syncing a Data List with other players over the network"}),"\n",(0,i.jsxs)(t.p,{children:["Data Lists cannot be directly synced. However, they can be serialized to/from JSON strings using ",(0,i.jsx)(t.a,{href:"/worlds/udon/data-containers/vrcjson",children:"VRCJson"}),". This is the current recommended method of syncing Data Lists with UdonSync."]}),"\n",(0,i.jsx)(t.p,{children:"One way to do this is to use OnPreSerialization and OnDeserialization to Serialize and Deserialize the json string. Using this method, you won't need to worry about the serialization within the rest of your code, and you can simply set values and forget."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",metastring:'title="Example of syncing a Data List with other players over the network"',children:"[UdonSynced]\nprivate string _json;\nprivate DataList _list;\n\npublic override void OnPreSerialization()\n{\n    if (VRCJson.TrySerializeToJson(_list, JsonExportType.Minify, out DataToken result))\n    {\n        _json = result.String;\n    }\n    else\n    {\n        Debug.LogError(result.ToString());\n    }\n}\n\npublic override void OnDeserialization()\n{\n    if(VRCJson.TryDeserializeFromJson(_json, out DataToken result))\n    {\n        _list = result.DataList;\n    }\n    else\n    {\n        Debug.LogError(result.ToString());\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(t.h3,{id:"why-not-have-a-toarray-for-each-type",children:"Why not have a ToArray for each type?"}),"\n",(0,i.jsx)(t.p,{children:"It would be desirable to have a ToArray method for each data type. However, this is not currently feasible due to the lack of support for generics within Udon. While it is technically possible to create individual methods such as ToStringArray, ToFloatArray, ToDoubleArray, and others, this approach would result in excessive bloat to cover every possible type. Additionally, these methods would become deprecated once Udon 2 introduces support for generics. Furthermore, the basic ToArray methods would not provide significant added value. The real advantage would arise from the ability to execute ToArray on an object type, such as ToArray(typeof(Collider)), which would eliminate the need for casting. Nevertheless, supporting a ToArray of all possible objects is not practical, and supporting a ToArray of object specifically would be even worse than working with tokens."}),"\n",(0,i.jsx)(t.p,{children:"Despite the fact that retrieving values from DataTokens can be a somewhat cumbersome process, they are specifically designed for this purpose and have several utilities to assist with this task."}),"\n",(0,i.jsx)(t.h3,{id:"arrays-are-similar-whats-the-difference",children:"Arrays are similar, what's the difference?"}),"\n",(0,i.jsxs)(t.p,{children:["Arrays are a similar structure, used for storing lots of values in a sequential order, accessed by index. They are also very simple, and highly efficient at doing ",(0,i.jsx)(t.em,{children:"exactly"})," that and nothing else. DataLists are a more complex type that can do a lot more. For example, an array has to be initialized with a specific length when it is first created, and you cannot add more items to it unless you create a new array to replace it. But don't be fooled - there are still good reasons to use an array instead of a list."]}),"\n",(0,i.jsx)(t.h3,{id:"when-should-i-use-a-datalist-instead-of-an-array",children:"When should I use a DataList instead of an array?"}),"\n",(0,i.jsx)(t.p,{children:"Picking a DataList over an array should be done when there is a particular feature you need, so not everything needs to be switched."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When you want to add new items or remove items to the container dynamically. Arrays cannot do this."}),"\n",(0,i.jsx)(t.li,{children:"When you want a single container to contain multiple different types at the same time. Arrays cannot do this."}),"\n",(0,i.jsx)(t.li,{children:"When you want a container to contain containers arbitrarily. Arrays can do this, but they have to have a strict depth defined. DataLists can be nested arbitrarily deep however you want."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"when-should-i-use-an-array-instead-of-a-datalist",children:"When should I use an array instead of a DataList?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"When performance is critical, such as iterating over a container every frame. DataLists may have a very small amount of performance overhead due to pulling the value out of the token."}),"\n",(0,i.jsx)(t.li,{children:"When you want to sync the container over the network. DataLists technically support this through JSON if there is a reason you absolutely need a DataList, but that is going to be much more expensive on both performance and bandwidth than normal array syncing."}),"\n",(0,i.jsx)(t.li,{children:"When your container only needs to contain one specific type. DataLists can do this of course, but they bypass the strict typing nature of C#. This means that your code editor will be unable to know exactly what type the container contains, and this may allow you to write bugs that would have otherwise been compile errors."}),"\n",(0,i.jsxs)(t.li,{children:["When you want to contain a type that is not directly supported by Data Tokens. Data Tokens can contain any type through the use of object references and boxing, but it's not ideal. You need to pull the reference out ",(0,i.jsx)(t.em,{children:"and"})," cast it to your desired type."]}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);