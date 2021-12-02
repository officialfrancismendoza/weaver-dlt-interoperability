(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{125:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),i=(r(0),r(136)),o={id:"overview",title:"Component Overview"},l={unversionedId:"external/getting-started/test-network/overview",id:"external/getting-started/test-network/overview",isDocsHomePage:!1,title:"Component Overview",description:"\x3c!--",source:"@site/docs/external/getting-started/test-network/overview.md",slug:"/external/getting-started/test-network/overview",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/overview",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/test-network/overview.md",version:"current",sidebar:"Documentation",previous:{title:"Using Weaver",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/guide"},next:{title:"Setup with Locally Built Weaver Components",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-local"}},c=[],s={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Weaver offers a basic test network launching capability, both to demonstrate interoperation modes and to serve as a testbed for development and prototyping. Different modes (or scenarios) require different sets of components, but collectively you will need to run the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/tests/network-setups/fabric/dev"},"Fabric testnet")," - A pair of basic Fabric networks for testing interop flows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/tests/network-setups/corda"},"Corda testnet")," - A basic Corda network for testing interop flows"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/relay"},"Relay")," - The server module and protocol for cross-DLT interoperability. An instance of this is needed for every Fabric and Corda network"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/drivers/fabric-driver"},"Fabric driver")," - Driver used by the Fabric networks relay to communicate with the Fabric testnet"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/drivers/corda-driver"},"Corda driver")," - Driver used by the Corda networks relay to communicate with the Corda testnet"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/network/corda-interop-app"},"Corda interop app")," CorDapp used to handle interop duties between the relay and the application"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/samples/corda/corda-simple-application"},"Corda client app")," - CorDapp and client used to trigger interop flows initiated from the Corda side and to manage Corda state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/samples/fabric/fabric-cli"},"Fabric client")," - Fabric client used to trigger interop flows initiated from the Fabric side and to manage Fabric state"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/network/fabric-interop-cc"},"Fabric Interop chaincode")," - The Fabric interoperability contracts handle the dual process of servicing requests for views from external networks, and verifying requested views for integrity")),Object(i.b)("p",null,"You can launch these components in one of several different ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Setup with Locally Built Weaver Components"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-local"},"Deployed on Host Machine"),": Build the above components purely from your local clone of the Weaver code repository. If you wish to experiment with source code modifications, this is the right option to choose."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-local-docker"},"Deployed in Docker containers"),": This is similar to the above option, except with relays and drivers launched in Docker containers rather than in the host."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Setup with Imported Weaver Components"),":",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages"},"Deployed on Host Machine"),": Import pre-built Weaver components from Github Packages instead of building them locally. If you wish to see how Weaver works using pre-tested components and without, choose this option."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages-docker"},"Deployed in Docker containers"),": This is similar to the above option, except with relays and drivers launched in Docker containers rather than in the host.")))),Object(i.b)("p",null,"After setting up and launching the components, you must initialize the network by following steps in ",Object(i.b)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/ledger-initialization"},"Ledger Initialization"),".\nThen you can test the following interoperation modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/data-sharing"},"Data Sharing")," among Fabric and Corda networks"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange"},"Asset Exchange")," between Fabric networks")))}p.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);