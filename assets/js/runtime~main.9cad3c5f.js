(()=>{"use strict";var e,c,a,d,f,b={},t={};function r(e){var c=t[e];if(void 0!==c)return c.exports;var a=t[e]={exports:{}};return b[e].call(a.exports,a,a.exports,r),a.exports}r.m=b,e=[],r.O=(c,a,d,f)=>{if(!a){var b=1/0;for(i=0;i<e.length;i++){a=e[i][0],d=e[i][1],f=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&f||b>=f)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,f<b&&(b=f));if(t){e.splice(i--,1);var n=d();void 0!==n&&(c=n)}}return c}f=f||0;for(var i=e.length;i>0&&e[i-1][2]>f;i--)e[i]=e[i-1];e[i]=[a,d,f]},r.n=e=>{var c=e&&e.__esModule?()=>e.default:()=>e;return r.d(c,{a:c}),c},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var f=Object.create(null);r.r(f);var b={};c=c||[null,a({}),a([]),a(a)];for(var t=2&d&&e;"object"==typeof t&&!~c.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((c=>b[c]=()=>e[c]));return b.default=()=>e,r.d(f,b),f},r.d=(e,c)=>{for(var a in c)r.o(c,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:c[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((c,a)=>(r.f[a](e,c),c)),[])),r.u=e=>"assets/js/"+({16:"d239a891",22:"35af1605",26:"9d67fafb",44:"bb19ea3f",70:"85b77523",146:"c1286702",190:"b79110cd",263:"a5ad2c6f",283:"882f592d",329:"5d4df335",343:"71a1e2d7",403:"2f458dbc",441:"d731fd6a",462:"2eccef89",538:"c298b564",645:"c23db22b",738:"c56581cf",811:"42309f7c",817:"221a3ace",832:"037be0ec",875:"16ede654",905:"a170d067",935:"fea7ebe1",936:"47fc37a8",974:"e0557e97",1020:"67d7c2d6",1103:"45fe972d",1147:"29fed479",1159:"64c4f445",1226:"8a8f2eb3",1276:"1c5720d5",1295:"9a38ee78",1306:"3065ea74",1345:"0253ae5a",1391:"6e201c45",1464:"ba291a52",1478:"e4254a8d",1490:"0a9798d7",1577:"dff12c86",1610:"8c2fadbc",1629:"813eb113",1645:"6680e9ac",1685:"697b2b99",1695:"5226d2be",1861:"28eba9d7",1921:"1daf67bc",1933:"4089f7b8",2038:"ac1f4a70",2110:"5276cb80",2138:"1a4e3797",2188:"cec66cb3",2195:"91c81fae",2221:"d3787e22",2269:"ad423859",2303:"7174541e",2347:"6f544cd4",2387:"14b17b7b",2390:"6ccdbf92",2392:"0eb0fc27",2396:"5c74ae44",2428:"756cc3bb",2435:"86d679ff",2445:"9b213c86",2622:"e78d4382",2634:"c4f5d8e4",2659:"36ed6aed",2711:"9e4087bc",2784:"a83a68d1",2805:"848d8c30",2943:"72defb99",3023:"a106a9c7",3146:"62a09cf0",3204:"00bdb379",3249:"ccc49370",3274:"e6b684fb",3310:"014d39e7",3359:"8c389544",3388:"5c6cb02b",3389:"6091f8e7",3423:"15e97764",3427:"8367121d",3431:"79d45cec",3459:"44328740",3464:"2dc81bde",3481:"0a3fd901",3487:"9f3c64ab",3511:"9dd6462a",3521:"28181c18",3561:"4227bb92",3664:"12f81bab",3675:"78a0e4bc",3682:"282e62b6",3712:"2c2a140b",3869:"7deb93c3",3891:"31c1b950",4609:"77dd7438",4636:"6c575cf0",4643:"4d9a9d67",4661:"cd85bab3",4682:"44dad01c",4813:"6875c492",4816:"96c0f373",4833:"75822c56",5041:"ea451297",5087:"6c9b7ec9",5105:"1ad1b959",5134:"5c0cf3dc",5278:"79e877ca",5305:"65ad2299",5309:"505a46d5",5319:"2feb439a",5341:"89b65ab7",5525:"1efa7055",5542:"980174f8",5700:"f694c86c",5723:"aee906ee",5801:"bbcc4b8f",5808:"4b928f1e",5861:"886fbae6",5927:"304fed2f",6178:"1e66e769",6202:"1234c8b6",6369:"a35bce9d",6380:"66f52ed7",6421:"46270b87",6577:"f1abaffc",6650:"ea73de0d",6677:"504897f7",6762:"1b7358c4",6768:"262e0242",6781:"c0027031",6935:"36fff126",6949:"caff119c",7070:"5ecfcabf",7098:"a7bd4aaa",7170:"068d299c",7313:"de09814c",7343:"1bfeebba",7346:"440dacd5",7403:"ecfafad0",7472:"814f3328",7517:"66a28825",7565:"ec1bc2bb",7584:"de63ac87",7599:"47e05933",7635:"2254fd0a",7643:"a6aa9e1f",7729:"d72a5fa4",7799:"e5e1740e",7924:"d589d3a7",7947:"7b9dc3f8",7969:"ee57d34c",7998:"d0dfbc86",8051:"cad19ff2",8064:"54a6da71",8110:"9ae8db5a",8118:"09c4913b",8160:"cc9e111f",8181:"d8a51818",8189:"a1897310",8209:"01a85c17",8243:"e41e6054",8289:"ed363aa5",8299:"02d640f6",8373:"c2a35770",8401:"17896441",8432:"695747e4",8471:"4ec414ba",8535:"9d10ca44",8545:"134b36a8",8581:"935f2afb",8602:"f8604fd3",8700:"c4d4cd98",8729:"216be301",8762:"e9f9cff9",8928:"d59f7055",8997:"df3a4fb8",9039:"9f2e220f",9048:"a94703ab",9125:"cd507e2b",9168:"1c9079c9",9229:"936e213d",9319:"3cd5f76d",9447:"a43d7b7d",9565:"54f9ab14",9570:"dad61ca1",9612:"1fbbb358",9613:"06c9a025",9647:"5e95c892",9702:"f197429c",9730:"687706cf",9767:"0f103314",9787:"50417263",9892:"aa11fee3",9926:"8d9c7bb8"}[e]||e)+"."+{16:"306a8f39",22:"d17f5bf6",26:"b928deb1",44:"95a73856",70:"5288a32e",146:"2326e6d8",190:"14c6863e",263:"b78f54c1",283:"32a7c339",329:"3b480518",343:"58661039",403:"adc42389",416:"29b8f0a0",441:"e2e5cc61",462:"c4e14b6e",538:"1cf04e07",645:"979b0030",738:"97977b85",811:"fd60926a",817:"f0a47cbe",832:"b2138a9a",875:"3e33653a",905:"6a7919ec",935:"6cf511ad",936:"7c1aa7a2",974:"afe1b37b",1020:"510d0311",1103:"4a7ec6d8",1147:"23ab5bf4",1159:"ab6ffb4a",1226:"90b6e88a",1276:"978448cd",1295:"30c732ea",1306:"57432bd6",1345:"18746c30",1391:"2811bb5d",1464:"97966fb9",1478:"8659e299",1490:"864e94e0",1577:"ce516cb9",1610:"aa44d924",1629:"2f764a61",1645:"b9529bec",1685:"52bcbb74",1695:"55f28c48",1861:"22bd5f28",1921:"3a22679c",1933:"e48d6abe",2038:"ec2a5f2e",2110:"6a6136da",2138:"66d03ac2",2188:"5bf44c80",2195:"bb673844",2221:"0efbe1c0",2269:"16a17f72",2303:"1e53f0ff",2347:"e1d8fddc",2387:"df3bb136",2390:"070a8331",2392:"c28749f7",2396:"83b5412a",2428:"17b6472c",2435:"795a154b",2445:"b8852bcd",2622:"2086c436",2634:"b880d711",2659:"df15d006",2711:"1c7f80a4",2784:"a4fc6a36",2805:"33685d5b",2943:"da802d7d",3023:"4e6377d1",3146:"af2e0e7a",3204:"ba1ad19f",3249:"e5454b47",3274:"69e5fa4a",3310:"10234e68",3359:"317285db",3388:"7fec0bc1",3389:"0958d780",3423:"40614f4f",3427:"945f3eb2",3431:"5a581978",3459:"a261ef2c",3464:"78b74945",3481:"518a3616",3487:"34c7d88a",3511:"2d148c3f",3521:"fccf787b",3561:"ebf89ea0",3664:"0629f33f",3675:"dbe3fa63",3682:"0cf50a50",3712:"c0976e7c",3869:"d413a380",3891:"b89b3c10",4609:"44b3d8ff",4636:"701cd4cf",4643:"60cc8c40",4661:"e966ef92",4682:"1099ee18",4813:"b2457ec4",4816:"09a4ace0",4833:"c026b60f",5041:"63bef4c8",5087:"719a20a6",5105:"3e3778d4",5134:"417e78c1",5278:"09430c7f",5305:"7ce14796",5309:"f491d4f0",5319:"792ca02a",5341:"f2a3d500",5525:"44f0dab1",5542:"dd71bfe6",5700:"b3e54f62",5723:"54fa3191",5801:"6cb3454b",5808:"f370b4cd",5861:"ed8d03e5",5927:"f435ee07",6178:"4aa6b5b4",6202:"8ce27e13",6369:"dc710423",6380:"ce0cd109",6421:"bf87c457",6577:"6b7385f4",6650:"9a9719c2",6677:"52a32ce1",6762:"66fae67d",6768:"98c50509",6781:"d23050e9",6935:"9c6c326e",6949:"399f42a9",7070:"7c817a06",7098:"6cbc2bfe",7170:"10a51eb9",7313:"ec613290",7343:"eca2f303",7346:"78cedc91",7403:"d5173713",7472:"1b0d7f37",7517:"3b138e7c",7565:"ac9035e9",7584:"b3ba79a9",7599:"4443f9f9",7635:"7362937a",7643:"4dfe72df",7729:"a29ab253",7799:"0fcb5012",7924:"ac3268f4",7947:"74ad14b2",7969:"1a9fea87",7998:"23b8499a",8051:"0527f45f",8064:"7decb097",8110:"43e5d28c",8118:"365923dc",8160:"a98c8d0e",8181:"a77cf0fa",8189:"daddfcc6",8209:"95d183c4",8222:"b94b63bc",8243:"de83c72b",8289:"4eeb978b",8299:"ce68df40",8373:"dfe04d50",8401:"d035ea16",8432:"d2f7c349",8471:"e4e08dde",8535:"8d9af5aa",8544:"38e687cb",8545:"1adb1e9c",8581:"4161c4fc",8602:"d87ec913",8700:"652191b8",8729:"03d10094",8762:"79ab8c27",8897:"b578ef67",8913:"f7bc8e09",8928:"da85ef11",8997:"f4285bd9",9039:"605d9cb3",9048:"b6d43876",9125:"1c4df38a",9168:"86437211",9229:"5806afaa",9319:"7a4b72dc",9447:"0d24b686",9462:"fa30a2c2",9565:"d0dcdd6e",9570:"7a8f7538",9612:"b65ed609",9613:"bfbd7d78",9647:"b1ee7147",9702:"3b94c998",9730:"fe6bc396",9767:"a54b1cfe",9787:"f331b4d4",9892:"0a9986ed",9926:"a735e5a2"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,c)=>Object.prototype.hasOwnProperty.call(e,c),d={},f="VRChat-Creator-Docs:",r.l=(e,c,a,b)=>{if(d[e])d[e].push(c);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==f+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",f+a),t.src=e),d[e]=[c];var l=(c,a)=>{t.onerror=t.onload=null,clearTimeout(s);var f=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),f&&f.forEach((e=>e(a))),c)return c(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/creator-docs-i18n/",r.gca=function(e){return e={17896441:"8401",44328740:"3459",50417263:"9787",d239a891:"16","35af1605":"22","9d67fafb":"26",bb19ea3f:"44","85b77523":"70",c1286702:"146",b79110cd:"190",a5ad2c6f:"263","882f592d":"283","5d4df335":"329","71a1e2d7":"343","2f458dbc":"403",d731fd6a:"441","2eccef89":"462",c298b564:"538",c23db22b:"645",c56581cf:"738","42309f7c":"811","221a3ace":"817","037be0ec":"832","16ede654":"875",a170d067:"905",fea7ebe1:"935","47fc37a8":"936",e0557e97:"974","67d7c2d6":"1020","45fe972d":"1103","29fed479":"1147","64c4f445":"1159","8a8f2eb3":"1226","1c5720d5":"1276","9a38ee78":"1295","3065ea74":"1306","0253ae5a":"1345","6e201c45":"1391",ba291a52:"1464",e4254a8d:"1478","0a9798d7":"1490",dff12c86:"1577","8c2fadbc":"1610","813eb113":"1629","6680e9ac":"1645","697b2b99":"1685","5226d2be":"1695","28eba9d7":"1861","1daf67bc":"1921","4089f7b8":"1933",ac1f4a70:"2038","5276cb80":"2110","1a4e3797":"2138",cec66cb3:"2188","91c81fae":"2195",d3787e22:"2221",ad423859:"2269","7174541e":"2303","6f544cd4":"2347","14b17b7b":"2387","6ccdbf92":"2390","0eb0fc27":"2392","5c74ae44":"2396","756cc3bb":"2428","86d679ff":"2435","9b213c86":"2445",e78d4382:"2622",c4f5d8e4:"2634","36ed6aed":"2659","9e4087bc":"2711",a83a68d1:"2784","848d8c30":"2805","72defb99":"2943",a106a9c7:"3023","62a09cf0":"3146","00bdb379":"3204",ccc49370:"3249",e6b684fb:"3274","014d39e7":"3310","8c389544":"3359","5c6cb02b":"3388","6091f8e7":"3389","15e97764":"3423","8367121d":"3427","79d45cec":"3431","2dc81bde":"3464","0a3fd901":"3481","9f3c64ab":"3487","9dd6462a":"3511","28181c18":"3521","4227bb92":"3561","12f81bab":"3664","78a0e4bc":"3675","282e62b6":"3682","2c2a140b":"3712","7deb93c3":"3869","31c1b950":"3891","77dd7438":"4609","6c575cf0":"4636","4d9a9d67":"4643",cd85bab3:"4661","44dad01c":"4682","6875c492":"4813","96c0f373":"4816","75822c56":"4833",ea451297:"5041","6c9b7ec9":"5087","1ad1b959":"5105","5c0cf3dc":"5134","79e877ca":"5278","65ad2299":"5305","505a46d5":"5309","2feb439a":"5319","89b65ab7":"5341","1efa7055":"5525","980174f8":"5542",f694c86c:"5700",aee906ee:"5723",bbcc4b8f:"5801","4b928f1e":"5808","886fbae6":"5861","304fed2f":"5927","1e66e769":"6178","1234c8b6":"6202",a35bce9d:"6369","66f52ed7":"6380","46270b87":"6421",f1abaffc:"6577",ea73de0d:"6650","504897f7":"6677","1b7358c4":"6762","262e0242":"6768",c0027031:"6781","36fff126":"6935",caff119c:"6949","5ecfcabf":"7070",a7bd4aaa:"7098","068d299c":"7170",de09814c:"7313","1bfeebba":"7343","440dacd5":"7346",ecfafad0:"7403","814f3328":"7472","66a28825":"7517",ec1bc2bb:"7565",de63ac87:"7584","47e05933":"7599","2254fd0a":"7635",a6aa9e1f:"7643",d72a5fa4:"7729",e5e1740e:"7799",d589d3a7:"7924","7b9dc3f8":"7947",ee57d34c:"7969",d0dfbc86:"7998",cad19ff2:"8051","54a6da71":"8064","9ae8db5a":"8110","09c4913b":"8118",cc9e111f:"8160",d8a51818:"8181",a1897310:"8189","01a85c17":"8209",e41e6054:"8243",ed363aa5:"8289","02d640f6":"8299",c2a35770:"8373","695747e4":"8432","4ec414ba":"8471","9d10ca44":"8535","134b36a8":"8545","935f2afb":"8581",f8604fd3:"8602",c4d4cd98:"8700","216be301":"8729",e9f9cff9:"8762",d59f7055:"8928",df3a4fb8:"8997","9f2e220f":"9039",a94703ab:"9048",cd507e2b:"9125","1c9079c9":"9168","936e213d":"9229","3cd5f76d":"9319",a43d7b7d:"9447","54f9ab14":"9565",dad61ca1:"9570","1fbbb358":"9612","06c9a025":"9613","5e95c892":"9647",f197429c:"9702","687706cf":"9730","0f103314":"9767",aa11fee3:"9892","8d9c7bb8":"9926"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(c,a)=>{var d=r.o(e,c)?e[c]:void 0;if(0!==d)if(d)a.push(d[2]);else if(/^(1869|5354)$/.test(c))e[c]=0;else{var f=new Promise(((a,f)=>d=e[c]=[a,f]));a.push(d[2]=f);var b=r.p+r.u(c),t=new Error;r.l(b,(a=>{if(r.o(e,c)&&(0!==(d=e[c])&&(e[c]=void 0),d)){var f=a&&("load"===a.type?"missing":a.type),b=a&&a.target&&a.target.src;t.message="Loading chunk "+c+" failed.\n("+f+": "+b+")",t.name="ChunkLoadError",t.type=f,t.request=b,d[1](t)}}),"chunk-"+c,c)}},r.O.j=c=>0===e[c];var c=(c,a)=>{var d,f,b=a[0],t=a[1],o=a[2],n=0;if(b.some((c=>0!==e[c]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(c&&c(a);n<b.length;n++)f=b[n],r.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return r.O(i)},a=self.webpackChunkVRChat_Creator_Docs=self.webpackChunkVRChat_Creator_Docs||[];a.forEach(c.bind(null,0)),a.push=c.bind(null,a.push.bind(a))})()})();