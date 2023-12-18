"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6610],{93539:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=o(85893),t=o(11151);const r={title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1},i="Consensus protocols",c={id:"private-networks/how-to/configure/consensus/index",title:"Consensus protocols",description:"Besu consensus protocols",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/configure/consensus/index.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/",permalink:"/23.4.0/private-networks/how-to/configure/consensus/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/configure/consensus/index.md",tags:[],version:"23.4.0",lastUpdatedAt:1702875753,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"Consensus protocols",description:"Besu consensus protocols",sidebar_position:1},sidebar:"privateDocSidebar",previous:{title:"Configure",permalink:"/23.4.0/category/configure"},next:{title:"QBFT",permalink:"/23.4.0/private-networks/how-to/configure/consensus/qbft"}},a={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"consensus-protocols",children:"Consensus protocols"}),"\n",(0,s.jsx)(n.p,{children:"Besu supports the following consensus protocols:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," (proof of authority) - The recommended enterprise-grade consensus protocol for private networks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," (proof of authority) - Supported for existing private networks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/private-networks/how-to/configure/consensus/clique",children:"Clique"})," (proof of authority) - Not recommended for production use."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/proof-of-stake/",children:"Proof of stake"})," - Used on Ethereum Mainnet and public testnets."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/",children:"Ethash"})," (proof of work) - Can be used in ",(0,s.jsx)(n.a,{href:"/23.4.0/private-networks/tutorials/ethash",children:"small development networks"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See a ",(0,s.jsx)(n.a,{href:"/23.4.0/private-networks/concepts/poa",children:"comparison of the proof of authority consensus protocols"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"config"})," property in the genesis file specifies the consensus protocol for a chain."]}),"\n",(0,s.jsx)(n.h1,{id:"ethash",children:"Ethash"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n  ...\n    "ethash": {\n    ...\n    }\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"clique",children:"Clique"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "clique": {\n    ...\n    }\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"ibft-20",children:"IBFT 2.0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      ...\n    }\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"qbft",children:"QBFT"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    ...\n    "qbft": {\n      ...\n    }\n  },\n  ...\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var s=o(67294);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);