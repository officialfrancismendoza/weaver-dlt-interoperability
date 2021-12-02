(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,u=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return r?n.a.createElement(u,l(l({ref:t},b),{},{components:r})):n.a.createElement(u,l({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),i=(r(0),r(136)),o={id:"guide",title:"Using Weaver"},l={unversionedId:"external/getting-started/guide",id:"external/getting-started/guide",isDocsHomePage:!1,title:"Using Weaver",description:"\x3c!--",source:"@site/docs/external/getting-started/guide.md",slug:"/external/getting-started/guide",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/guide",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/guide.md",version:"current",sidebar:"Documentation",previous:{title:"Weaver Framework",permalink:"/weaver-dlt-interoperability/docs/external/introduction"},next:{title:"Component Overview",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"}},c=[],b={toc:c};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The easiest way to understand how Weaver works is to run it at a small scale:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"First, ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview"},"launch a set of basic test networks")," built on Fabric and Corda. These networks offer the most basic capabilities of their DLT platforms and run toy applications (contracts and Layer-2) that can easily be tracked and debugged. You can launch these networks in one of several different ways: building Weaver components and dependencies locally or importing pre-built ones from Github packages, running core components in the host or in Docker containers. The choice depends on whether you just want to get these networks up and running or if you wish to customize the setup by modifying source code and configurations."),Object(i.b)("li",{parentName:"ul"},"Once the test networks are launched, you can test two distinct kinds of interoperation modes:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/data-sharing"},"Data sharing"),": Fabric-Fabric and Fabric-Corda supported"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange"},"Asset exchange"),": Fabric-Fabric supported"))),Object(i.b)("li",{parentName:"ul"},'(To bring down the test networks, go back to the "Setup" pages and follow instructions in the respective "Teardown" sections.)'),Object(i.b)("li",{parentName:"ul"},'After you run these tests and get a flavor of how the system and protocols work, you will be ready to move on to "real" networks, enhancing them with interoperation capabilities by incorporating Weaver into them. Check out the guidelines and templates for ',Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/fabric"},"Fabric"),", ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/corda"},"Corda"),", and ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/besu"},"Besu")," networks.")),Object(i.b)("p",null,"If you wish to go further and understand Weaver specifics, dig into the code, or contribute to the open-source project, check out the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability"},"project repository"),". For specific information about individual Weaver components, see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/relay/README.md"},"Relay")," module"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/drivers/fabric-driver/readme.md"},"Fabric")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/drivers/corda-driver/README.md"},"Corda")," drivers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/network/fabric-interop-cc/README.md"},"Fabric Interoperation Chaincode")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/core/network/corda-interop-app/README.md"},"Interoperation CorDapp")),Object(i.b)("li",{parentName:"ul"},"Common ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/common/protos"},"protobufs"),": compiled in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-js/README.md"},"JavaScript"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-go/README.md"},"Golang"),", and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/common/protos-java-kt/README.md"},"Java")),Object(i.b)("li",{parentName:"ul"},"Fabric Interoperation SDKs in ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/sdks/fabric/interoperation-node-sdk/README.md"},"Node.js")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/sdks/fabric/go-sdk/readme.md"},"Golang")),Object(i.b)("li",{parentName:"ul"},"Sample ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/samples/fabric"},"Fabric")," and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/main/samples/corda"},"Corda")," applications for experimentation and testing"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/fabric/dev/README.md"},"Fabric"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/corda/README.md"},"Corda"),", and ",Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/tests/network-setups/besu/README.md"},"Besu")," test network setups")),Object(i.b)("p",null,"The Weaver ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/blob/main/rfcs/README.md"},"RFCs")," contain detailed specifications of the models, data structures, protocols, and message formats."))}s.isMDXComponent=!0}}]);