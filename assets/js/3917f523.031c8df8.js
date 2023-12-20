"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50722],{12286:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=i(85893),t=i(11151);const o={title:"Genesis file items",sidebar_position:4,description:"Genesis file configuration items reference",tags:["public networks","private networks"]},r="Genesis file items",c={id:"public-networks/reference/genesis-items",title:"Genesis file items",description:"Genesis file configuration items reference",source:"@site/docs/public-networks/reference/genesis-items.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/genesis-items",permalink:"/development/public-networks/reference/genesis-items",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/reference/genesis-items.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"},{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1703113796,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:4,frontMatter:{title:"Genesis file items",sidebar_position:4,description:"Genesis file configuration items reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Objects",permalink:"/development/public-networks/reference/engine-api/objects"},next:{title:"EVM tool options",permalink:"/development/public-networks/reference/evm-tool"}},l={},d=[{value:"Configuration items",id:"configuration-items",level:2},{value:"Genesis block parameters",id:"genesis-block-parameters",level:2},{value:"Milestone blocks",id:"milestone-blocks",level:2},{value:"Fixed difficulty",id:"fixed-difficulty",level:2},{value:"Discovery configuration items",id:"discovery-configuration-items",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"genesis-file-items",children:"Genesis file items"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/genesis-file",children:"Besu genesis file"})," contains ",(0,s.jsx)(n.a,{href:"#configuration-items",children:"network configuration items"})," and ",(0,s.jsx)(n.a,{href:"#genesis-block-parameters",children:"genesis block parameters"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-items",children:"Configuration items"}),"\n",(0,s.jsxs)(n.p,{children:["Network configuration items are specified in the genesis file in the ",(0,s.jsx)(n.code,{children:"config"})," object."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Milestone blocks"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.a,{href:"#milestone-blocks",children:"Milestone blocks for the network"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"chainID"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/network-and-chain-id",children:"Chain ID for the network"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ethash"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies network uses ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/",children:"Ethash"})," and contains ",(0,s.jsx)(n.a,{href:"#fixed-difficulty",children:(0,s.jsx)(n.code,{children:"fixeddifficulty"})}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"clique"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies network uses ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/clique",children:"Clique"})," and contains ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/clique#genesis-file",children:"Clique configuration items"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ibft2"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies network uses ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," and contains ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0 configuration items"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"qbft"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies network uses ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," and contains ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT configuration items"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"transitions"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies block at which to ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/add-validators-without-voting",children:"change IBFT 2.0 or QBFT validators"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"contractSizeLimit"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Maximum contract size in bytes. Specify in ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/free-gas",children:"free gas networks"}),". The default is ",(0,s.jsx)(n.code,{children:"24576"})," and the maximum size is ",(0,s.jsx)(n.code,{children:"2147483647"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"evmStackSize"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Maximum stack size. Specify to increase the maximum stack size in private networks with complex smart contracts. The default is ",(0,s.jsx)(n.code,{children:"1024"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ecCurve"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/curves",children:"the elliptic curve to use"}),". Default is ",(0,s.jsx)(n.code,{children:"secp256k1"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"discovery"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies ",(0,s.jsx)(n.a,{href:"#discovery-configuration-items",children:"discovery configuration items"}),". The ",(0,s.jsx)(n.code,{children:"discovery"})," object can be left empty."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"zeroBaseFee"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Specifies a base fee of ",(0,s.jsx)(n.code,{children:"0"})," for ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/free-gas#4-enable-zero-base-fee-if-using-london-fork-or-later",children:"free gas networks"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"genesis-block-parameters",children:"Genesis block parameters"}),"\n",(0,s.jsxs)(n.p,{children:["The purpose of some genesis block parameters varies depending on the consensus protocol (Ethash, ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/clique",children:"Clique"}),", ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"}),", or ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/qbft",children:"QBFT"}),"). These parameters include:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"difficulty"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extraData"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"mixHash"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The following table describes the genesis block parameters with the same purpose across all consensus protocols."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Item"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"coinbase"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Address to pay mining rewards to. Can be any value in the genesis block (commonly set to ",(0,s.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"gasLimit"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Block gas limit. Total gas limit for all transactions in a block."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"nonce"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Used in block computation. Can be any value in the genesis block (commonly set to ",(0,s.jsx)(n.code,{children:"0x0"}),")."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"timestamp"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Creation date and time of the block. Must be before the next block so we recommend specifying ",(0,s.jsx)(n.code,{children:"0x0"})," in the genesis file."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"alloc"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Defines ",(0,s.jsx)(n.a,{href:"/development/private-networks/reference/accounts-for-testing",children:"accounts with balances"})," or ",(0,s.jsx)(n.a,{href:"/development/private-networks/how-to/configure/contracts",children:"contracts"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If a ",(0,s.jsx)(n.code,{children:"Supplied genesis block does not match stored chain data"})," error occurs, use the genesis file matching the genesis block of the data directory, or use the ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option to specify a different data directory."]})}),"\n",(0,s.jsx)(n.h2,{id:"milestone-blocks",children:"Milestone blocks"}),"\n",(0,s.jsxs)(n.p,{children:["In public networks, the milestone blocks specify the blocks at which the network changed protocol. See a ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum/execution-specs#ethereum-protocol-releases",children:"full list of Ethereum protocol releases"})," and their corresponding milestone blocks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Ethereum Mainnet milestone blocks"',children:'{\n  "config": {\n    ...\n    "homesteadBlock": 1150000,\n    "daoForkBlock": 1920000,\n    "daoForkSupport": true,\n    "eip150Block": 2463000,\n    "eip150Hash": "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0",\n    "eip155Block": 2675000,\n    "eip158Block": 2675000,\n    "byzantiumBlock": 4370000,\n    "constantinopleBlock": 7280000,\n    "constantinopleFixBlock": 7280000,\n    "muirGlacierBlock": 9200000,\n    "berlinBlock": 12244000,\n    "londonBlock": 12965000,\n    "arrowGlacierBlock": 13773000,\n    "grayGlacierBlock": 15050000,\n    ...\n  },\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Ensure you include a milestone far enough in advance in the genesis file. Not doing so can lead to unexpected and inconsistent behavior without specific errors."})}),"\n",(0,s.jsx)(n.p,{children:"In private networks, the milestone block defines the protocol version for the network."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="Private network milestone block"',children:'{\n  "config": {\n    ...\n    "berlinBlock": 0,\n    ...\n  },\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"In private networks, we recommend specifying the latest milestone block. It's implied this includes the preceding milestones. This ensures you use the most up-to-date protocol and have access to the most recent opcodes."})}),"\n",(0,s.jsx)(n.h2,{id:"fixed-difficulty",children:"Fixed difficulty"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"fixeddifficulty"})," to specify a fixed difficulty in private networks using Ethash. This will keep the network's difficulty constant and override the ",(0,s.jsx)(n.code,{children:"difficulty"})," parameter from the genesis file."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n      ...\n      "ethash": {\n        "fixeddifficulty": 1000\n      },\n\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Using ",(0,s.jsx)(n.code,{children:"fixeddifficulty"})," is not recommended for use with Ethash outside of test environments. For production networks using Ethash, we recommend setting a low ",(0,s.jsx)(n.code,{children:"difficulty"})," value in the genesis file instead. Ethash will adjust the difficulty of the network based on hashrate to produce blocks at the targeted frequency."]})}),"\n",(0,s.jsx)(n.h2,{id:"discovery-configuration-items",children:"Discovery configuration items"}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.code,{children:"discovery"})," configuration items to specify the ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#bootnodes",children:(0,s.jsx)(n.code,{children:"bootnodes"})})," and ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#discovery-dns-url",children:(0,s.jsx)(n.code,{children:"discovery-dns-url"})})," in the genesis file, in place of using CLI options or listing them in the configuration file. If either CLI option is used, it takes precedence over the genesis file. Anything listed in the configuration file also takes precedence."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "discovery": {\n      "bootnodes": [\n        "enode://c35c3...d615f@1.2.3.4:30303",\n        "enode://f42c13...fc456@1.2.3.5:30303"\n      ],\n      "dns": "enrtree://AM5FCQLWIZX2QFPNJAP7VUERCCRNGRHWZG3YYHIUV7BVDQ5FDPRT2@nodes.example.org"\n    }\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(67294);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);