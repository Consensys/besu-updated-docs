"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[91065],{72233:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=i(85893),t=i(11151);const o={title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},r="Genesis file",c={id:"public-networks/concepts/genesis-file",title:"Genesis file",description:"Learn about configuring a network using the genesis file.",source:"@site/versioned_docs/version-23.10.1/public-networks/concepts/genesis-file.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/genesis-file",permalink:"/23.10.1/public-networks/concepts/genesis-file",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/concepts/genesis-file.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"},{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:7,frontMatter:{title:"Genesis file",sidebar_position:7,description:"Learn about configuring a network using the genesis file.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Events and logs",permalink:"/23.10.1/public-networks/concepts/events-and-logs"},next:{title:"Node keys",permalink:"/23.10.1/public-networks/concepts/node-keys"}},a={},l=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"genesis-file",children:"Genesis file"}),"\n",(0,s.jsx)(n.p,{children:"The genesis file defines the first block in the chain, and the first block defines which chain you want to join."}),"\n",(0,s.jsxs)(n.p,{children:["For Ethereum Mainnet and public testnets (for example, Goerli) the genesis configuration definition is in Besu and used when specifying a public network using the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#network",children:(0,s.jsx)(n.code,{children:"--network"})})," command line option."]}),"\n",(0,s.jsxs)(n.p,{children:["For private networks, ",(0,s.jsx)(n.a,{href:"https://consensys.net/blog/quorum/hyperledger-besu-how-to-create-an-ethereum-genesis-file/",children:"create a JSON genesis file"}),", then specify the genesis file using the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#genesis-file",children:(0,s.jsx)(n.code,{children:"--genesis-file"})})," command line option."]}),"\n",(0,s.jsxs)(n.p,{children:["The genesis file specifies the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/genesis-items",children:"network-wide settings"}),", such as those for a ",(0,s.jsx)(n.a,{href:"/23.10.1/private-networks/how-to/configure/free-gas",children:"free gas network"}),", so all nodes in a network must use the same genesis file."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You can specify node-level settings on the command line or in the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/configuration-file",children:"node configuration file"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Example IBFT 2.0 genesis file"',children:'{\n  "config": {\n    "chainId": 2018,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    }\n  },\n  "nonce": "0x0",\n  "timestamp": "0x58ee40ba",\n  "extraData": "0xf83ea00000000000000000000000000000000000000000000000000000000000000000d5949811ebc35d7b06b3fa8dc5809a1f9c52751e1deb808400000000c0",\n  "gasLimit": "0x1fffffffffffff",\n  "difficulty": "0x1",\n  "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "alloc": {\n    "9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb": {\n      "balance": "0xad78ebc5ac6200000"\n    }\n  }\n}\n'})})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);