"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[71189],{47277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var s=t(85893),i=t(11151);const r={title:"The Merge",sidebar_position:1,description:"What is the Merge?"},o="The Merge",c={id:"public-networks/concepts/the-merge",title:"The Merge",description:"What is the Merge?",source:"@site/versioned_docs/version-23.4.0/public-networks/concepts/the-merge.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/the-merge",permalink:"/23.4.0/public-networks/concepts/the-merge",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/concepts/the-merge.md",tags:[],version:"23.4.0",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"The Merge",sidebar_position:1,description:"What is the Merge?"},sidebar:"publicDocSidebar",previous:{title:"Troubleshoot peering",permalink:"/23.4.0/public-networks/how-to/troubleshoot/peering"},next:{title:"Proof of stake consensus",permalink:"/23.4.0/public-networks/concepts/proof-of-stake/"}},a={},h=[{value:"Execution and consensus clients",id:"execution-and-consensus-clients",level:2},{value:"Execution clients",id:"execution-clients",level:3},{value:"Consensus clients",id:"consensus-clients",level:3},{value:"What happened during The Merge",id:"what-happened-during-the-merge",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"the-merge",children:"The Merge"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The Merge was executed on ",(0,s.jsx)(n.strong,{children:"September 15, 2022"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/merge/",children:"The Merge"})," was an Ethereum upgrade that merged the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon Chain"})," into Ethereum Mainnet, turning Mainnet into a combination of an ",(0,s.jsx)(n.a,{href:"#execution-and-consensus-clients",children:"execution layer and consensus layer"}),". The Merge transitioned Mainnet from proof of work to ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/proof-of-stake/",children:"proof of stake consensus"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You can run Besu as an execution client with:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/get-started/connect/mainnet",children:"Any consensus client on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/get-started/connect/testnet",children:"Any consensus client on a testnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/tutorials/besu-teku-mainnet",children:"Teku on Mainnet"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/tutorials/besu-teku-testnet",children:"Teku on a testnet"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"execution-and-consensus-clients",children:"Execution and consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["After The Merge, a full Ethereum Mainnet node is a combination of an execution client (previously called an ",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Ethereum 1.0"})," client) and a consensus client (previously called an ",(0,s.jsx)(n.a,{href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/",children:"Ethereum 2.0"})," client)."]}),"\n",(0,s.jsxs)(n.p,{children:["Execution and consensus clients communicate with each other using the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Ethereum Merge node",src:t(30523).Z+"",width:"1512",height:"1164"})}),"\n",(0,s.jsx)(n.h3,{id:"execution-clients",children:"Execution clients"}),"\n",(0,s.jsxs)(n.p,{children:["Execution clients, such as Besu, manage the execution layer, including executing transactions and updating the world state. Execution clients serve ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/engine-api/",children:"JSON-RPC API"})," requests and communicate with each other in a peer-to-peer network."]}),"\n",(0,s.jsx)(n.h3,{id:"consensus-clients",children:"Consensus clients"}),"\n",(0,s.jsxs)(n.p,{children:["Consensus clients, such as ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"}),", contain beacon node and validator client implementations. The beacon node is the primary link to the ",(0,s.jsx)(n.a,{href:"https://ethereum.org/en/upgrades/beacon-chain/",children:"Beacon Chain"})," (consensus layer). The validator client performs ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/proof-of-stake/",children:"validator duties"})," on the consensus layer. Consensus clients serve ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/Reference/Rest_API/Rest/",children:"REST API"})," requests and communicate with each other in a peer-to-peer network."]}),"\n",(0,s.jsx)(n.h2,{id:"what-happened-during-the-merge",children:"What happened during The Merge"}),"\n",(0,s.jsx)(n.p,{children:"Before The Merge, the execution and consensus clients' configurations were updated to listen for a certain total terminal difficulty (TTD) to be reached."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The TTD is a specific value for the total difficulty, which is the sum of the proof-of-work mining difficulty for all blocks up to some point in the blockchain."})}),"\n",(0,s.jsx)(n.p,{children:"The consensus layer enabled the Merge configuration (Bellatrix) before reaching the TTD. Once the execution layer blocks reached the TTD, the Beacon Chain merged into Ethereum Mainnet, and Ethereum transitioned to a proof of stake network."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["After The Merge, a Mainnet node operator must run both an execution client and a beacon node at the same time. To become a validator, you must also run a validator client (either ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#start-the-clients-in-a-single-process",children:"in the same process as the beacon node"})," or ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/HowTo/Get-Started/Run-Teku/#run-the-clients-separately",children:"separately"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["After The Merge, validators earn rewards for performing ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/proof-of-stake/",children:"validator duties"}),", and ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax#validators-proposer-default-fee-recipient",children:"fee recipients"})," also earn rewards for the inclusion of execution layer transactions."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},30523:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/Execution-Consensus-Clients-fb025b4b0cea4f3e3efef43657540e27.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);