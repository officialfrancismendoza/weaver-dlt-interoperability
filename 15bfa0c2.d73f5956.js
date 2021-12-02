(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(m,i(i({ref:r},l),{},{components:t})):o.a.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(3),o=t(7),a=(t(0),t(136)),s={},i={unversionedId:"internal/development/cordapp-interop/cordapp-interop-rest-api",id:"internal/development/cordapp-interop/cordapp-interop-rest-api",isDocsHomePage:!1,title:"cordapp-interop-rest-api",description:"\x3c!--",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",slug:"/internal/development/cordapp-interop/cordapp-interop-rest-api",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-rest-api",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",version:"current"},c=[],l={toc:c};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"id: cordapp-interop-rest-api\ntitle: REST API"),Object(a.b)("hr",null),Object(a.b)("p",null,"Documentation of the REST API that is intended to be called from the MarcoPolo CordApp with the underlying\nflows noted."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"GET networkMapSnapshot\nreq: {}\nres: List<NodeInfo>, or failure\ncalls: proxy.networkMapSnapshot\n\nGET registeredFlows\nreq: {}\nres: List<String>, or failure\ncalls: proxy.registeredFlows\n\nGET foreignNetworkInfos\nreq: {}\nres: List<ForeignNetworkInformationManagementState>, or failure\ncalls: QueryForeignNetworkInformationManagementStates\n\nGET foreignNetworkInfos/{id}\nreq: {}\nres: ForeignNetworkInformationManagementState, or failure\ncalls: QueryForeignNetworkInformationManagementStatesById\n\nPOST foreignNetworkInfos\nreq: FNIMStateRequest\nres: FNIMStateResponse, or failure\ncalls: FNIMInitiator\n\nDELETE foreignNetworkInfos/{id}\nreq: {}\nres: id, or failure\ncalls: FNIMExitInitiator\n\nGET accessControlRequests\nreq: {}\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST accessControlRequests/new\nreq: AccessControlIssueRequestStateRequest\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestInitiator\n\nPOST /accessControlRequests/approve/{id}\nreq: id\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestApprover\n\nGET accessControlStates\nreq: {}\nres: List<AccessControlState>, or failure\ncalls: QueryAccessControlStates\n\nGET accessControlStates/{id}\nreq: {}\nres: AccessControlStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST externalNetworkRequest\nreq: ExternalNetworkRequest\nres: LinearIdResponseObject, or failure\ncalls: StateQueryInitiator\n\nPOST externalNetworkRequestByTxId\nreq: ExternalNetworkRequestWithTxId\nres: TxIdResponseObject, or failure\ncalls: GetLinearIdsFromTxId\n\nGET getNetworkMap/{id}\nreq: {}\nres: NetworkMapObject, or failure\ncalls: proxy.networkMapSnapshot\n\nPOST requestExternalState\nreq: ExternalStateRequest\nres: UniqueIdentifier, or failure\ncalls: WriteExternalStateInitiator\n\nGET storeFNIM\nreq: {}\nres: ForeignNetworkMapInformationIntermediateResponse, or failure\ncalls: QueryForeignNetworkInformationManagementStateByNetworkId\n")))}p.isMDXComponent=!0}}]);