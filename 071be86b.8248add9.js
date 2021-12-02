(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},184:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/financial-markets-1-727232876fe39abb878c66140efba138.png"},185:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/financial-markets-2-d97d5011d3bfd31f3efb142189c7902f.png"},69:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),i=(r(0),r(136)),s={id:"financial-markets",title:"DvP in Financial Markets"},o={unversionedId:"external/user-stories/financial-markets",id:"external/user-stories/financial-markets",isDocsHomePage:!1,title:"DvP in Financial Markets",description:"\x3c!--",source:"@site/docs/external/user-stories/financial-markets.md",slug:"/external/user-stories/financial-markets",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/financial-markets",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/user-stories/financial-markets.md",version:"current",sidebar:"Documentation",previous:{title:"Global Trade",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/global-trade"},next:{title:"Legacy Integration",permalink:"/weaver-dlt-interoperability/docs/external/user-stories/legacy-integration"}},c=[],l={toc:c};function d(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In traditional financial markets parties trade assets such as securities and derivatives for cash or other assets. To reduce risk, various clearing and settlement processes and intermediaries are often involved. One form of settlement is a DvP (delivery versus payment) where the transfer of securities is performed only in the event of a corresponding payment. This arrangement reduces principal risk by ensuring that both parties receive their end of the exchange. However, settlement in financial markets are slow and time consuming. It also involves counterparty risks and requires intermediaries."),Object(i.b)("p",null,"Over the past few years, we have been seeing significant efforts in digitising and tokenising both currencies and securities on Distributed Ledger Technology (DLT) infrastructures. On the one hand we have seen concerted efforts around Central Bank Digital Currencies (CBDC) being added to the landscape of other blockchain based payment networks. On the other hand, we have also seen efforts such as that from the Australian Stock Exchange (ASX) to replace its current settlement system--Clearing House Electronic Subregister System (CHESS) with a DLT based platform by 2021."),Object(i.b)("p",null,"Against this backdrop, a number of central banks have been exploring the potential of performing DvP settlement across a currency ledger and a securities ledger. In this use case, we use this as a motivating use-case for our discussions. The scenario involves two decentralised ledgers, namely, a currency ledger and a securities ledger, based on different DLT protocols performing a coordinated transfer of assets in their respective ledgers."),Object(i.b)("p",null,"The figure below depicts this scenario in the context of two organisations--",Object(i.b)("em",{parentName:"p"},"Org-A")," and ",Object(i.b)("em",{parentName:"p"},"Org-B"),". ",Object(i.b)("em",{parentName:"p"},"Org-B")," wants to purchase some securities owned by ",Object(i.b)("em",{parentName:"p"},"Org-A")," and both organisations have accounts on both ledgers. This scenario is simplified and leaves out a number of additional real world processes. For instance, the buyer and seller for securities need to discover each other and agree on the price and terms of a sale. In addition, an offer to sell securities might be fulfilled by multiple buyers taking smaller portions of the amount for sale. Such capabilities are often offered by centralised exchanges that offer capabilities such as order books and matching engines to address these needs. In this scenario we instead focus on the settlement process that follows such steps, once the parties of an exchange and the price of the exchange for an asset are determined."),Object(i.b)("p",null,"To effect the settlement of this exchange between ",Object(i.b)("em",{parentName:"p"},"Org-A")," and ",Object(i.b)("em",{parentName:"p"},"Org-B"),", the following two transactions will have to happen atomically across both networks: i) transfer of payment from ",Object(i.b)("em",{parentName:"p"},"Org-B"),"'s currency account in the CBDC ledger to ",Object(i.b)("em",{parentName:"p"},"Org-A")," while at the same time ii) the entitlements of the designated securities are transferred from ",Object(i.b)("em",{parentName:"p"},"Org-A")," to ",Object(i.b)("em",{parentName:"p"},"Org-B"),". The scenario would need to guarantee that after the transaction execution, either both parties have their end of the exchange or neither does and that this exchange is performed in a timely manner."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Simple DvP scenario in financial markets",src:r(184).default})),Object(i.b)("p",null,"The settlement of the exchange of securities from ",Object(i.b)("em",{parentName:"p"},"Org-A")," to ",Object(i.b)("em",{parentName:"p"},"Org-B")," in the Financial Securities Network for a simultaneous payment from ",Object(i.b)("em",{parentName:"p"},"Org-B")," to ",Object(i.b)("em",{parentName:"p"},"Org-A")," in the CBDC network is coordinated by Weaver using ",Object(i.b)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Hash_Time_Locked_Contracts"},"Hashed Time Lock Contracts"),".\nThis protocol essentially has three phases:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Fund locking: To initialise an asset exchange, it is common for one or both parties to first lock up funds with a fund-withholding party on his or her own blockchain. Temporary fund locking ensures the locked fund cannot be used for other purposes while the exchange is being executed. This scheme is often used with a specified timeout to provide flexibility for reclaiming locked funds if the exchange does not take place."),Object(i.b)("li",{parentName:"ul"},"Fund redeeming: In general, the execution requires a pair of transactions to occur on both blockchains, e.g., from Org-A to Org-B on the FSN ledger and from Org-B to Org-A in CBDC ledger. When certain conditions are met, the locked funds can be redeemed by, or paid to the respective users. The execution of the exchange can be carried out by users themselves, or through other trusted third parties. These trusted third parties can be stand-alone parties that are not otherwise involved in both blockchains, or part of either blockchain.\xa0"),Object(i.b)("li",{parentName:"ul"},"Refund: For protocols that are initialised with a temporary fund-locking, the locked funds can usually be reclaimed by the initial owner after a specified timeout, if a redemption has not occurred.\xa0")),Object(i.b)("p",null,"The process proceeds as follows, and is further illustrated in the figure below:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Org-A locks its securities in FSN ledger"),": ",Object(i.b)("em",{parentName:"li"},"Org-A")," first creates some secret S, known only to it and locks its securities using the hash of S. The securities are configured to redeemable by ",Object(i.b)("em",{parentName:"li"},"Org-B")," if it presents S within some specified time threshold."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Org-B locks payments tokens in CBDC ledger"),": Org-B, observes that ",Object(i.b)("em",{parentName:"li"},"Org-A")," has locked its securities in the FSN network and does a corresponding lock of its payment tokens with the hash of S, used by ",Object(i.b)("em",{parentName:"li"},"Org-A")," in locking its securities. The payment tokens are redeemable only by Org-A, if it submits a transaction that reveals S within a specified time."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Org-A checks Org-B's contract in CBDC ledger"),": ",Object(i.b)("em",{parentName:"li"},"Org-A")," checks the CBDC network to ensure that the payments tokens are locked by Org-B."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Org-A claims payments in CBDC ledger"),": ",Object(i.b)("em",{parentName:"li"},"Org-A")," submits a transaction to claim the payments tokens, by revealing the secret S."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Org-B claims securities in FSN ledger"),": ",Object(i.b)("em",{parentName:"li"},"Org-B")," observes that the value of S has been revealed in the CBDC network by ",Object(i.b)("em",{parentName:"li"},"Org-A")," in step 4, and submits a transaction to claim the securities in the FSN network using the revealed secret.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Simple DvP scenario in financial markets",src:r(185).default})))}d.isMDXComponent=!0}}]);