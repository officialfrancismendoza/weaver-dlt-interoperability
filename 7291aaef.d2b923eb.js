(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},191:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/driver_architecture-0d494884ad83fb801a8c71ddf7d2e509.png"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(136)),o={id:"drivers",title:"Drivers"},c={unversionedId:"external/architecture-and-design/drivers",id:"external/architecture-and-design/drivers",isDocsHomePage:!1,title:"Drivers",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/drivers.md",slug:"/external/architecture-and-design/drivers",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/drivers",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/drivers.md",version:"current",sidebar:"Documentation",previous:{title:"Relay",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/relay"},next:{title:"Weaver Dapps",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/weaver-dapps"}},s=[],l={toc:s};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The driver is responsible for all communication between the relay and its network. In the previous sections we have thought about the driver as a component of the relay. We have done this because conceptually it makes sense to think about it like that. However, in our reference implementation we have made it a seperate process which communicates with the relay via gRPC, as shown below. There are two main reasons for this:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'There must exist a different driver for each network type (e.g. Fabric, Corda etc.) and therefore having the driver as a seperate process makes it easy to "plug" different drivers into the relay.'),Object(i.b)("li",{parentName:"ol"},"A possible use case of the relay is that a single relay instance may have multiple drivers (e.g. if multiple entities in the network want to run their own driver). In this case, this plugin style approach of drivers makes it possible to do without having to modify code for each configuration.")),Object(i.b)("p",null,Object(i.b)("img",{src:r(191).default})))}u.isMDXComponent=!0}}]);