"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[28170],{93754:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(85893),s=r(11151);const i={title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:9,tags:["private networks"]},o="Use the web3js-quorum client library",a={id:"private-networks/how-to/use-privacy/web3js-quorum",title:"Use the web3js-quorum library",description:"web3js-quorum client library",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/use-privacy/web3js-quorum.md",sourceDirName:"private-networks/how-to/use-privacy",slug:"/private-networks/how-to/use-privacy/web3js-quorum",permalink:"/23.7.3/private-networks/how-to/use-privacy/web3js-quorum",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/use-privacy/web3js-quorum.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1702608400,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:9,frontMatter:{title:"Use the web3js-quorum library",description:"web3js-quorum client library",sidebar_position:9,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Sign privacy marker transactions",permalink:"/23.7.3/private-networks/how-to/use-privacy/sign-pmts"},next:{title:"Performance best practices",permalink:"/23.7.3/private-networks/how-to/use-privacy/performance-best-practices"}},c={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add web3js-quorum to project",id:"add-web3js-quorum-to-project",level:2},{value:"Initialize the web3js-quorum client",id:"initialize-the-web3js-quorum-client",level:2},{value:"Deploy a contract with <code>generateAndSendRawTransaction</code>",id:"deploy-a-contract-with-generateandsendrawtransaction",level:2},{value:"web3js-quorum methods",id:"web3js-quorum-methods",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-web3js-quorum-client-library",children:"Use the web3js-quorum client library"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-quorum",children:"web3js-quorum"})," is an Ethereum JavaScript library extending ",(0,n.jsx)(t.a,{href:"https://github.com/ethereum/web3.js/",children:"web3.js"})," that adds support for Besu-specific JSON-RPC APIs and features. Use the library to create and send RLP-encoded transactions using JSON-RPC."]}),"\n",(0,n.jsx)(t.admonition,{title:"important",type:"caution",children:(0,n.jsx)(t.p,{children:"web3js-quorum supports JSON-RPC over HTTP only."})}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsxs)(t.p,{children:["web3js-quorum includes all ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/quorum.js",children:"quorum.js"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/ConsenSys/web3js-eea",children:"web3js-eea"})," features."]}),(0,n.jsx)(t.p,{children:"If migrating to web3js-quorum, update your JavaScript code as indicated in the following examples."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/tutorial-Migrate%20from%20web3js-eea.html",children:"Read the migration guide for more information about updating your code."})})]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Node.js (version > 10)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/ChainSafe/web3.js#installation",children:"The web3 library must be installed in your project"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"add-web3js-quorum-to-project",children:"Add web3js-quorum to project"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install web3js-quorum\n"})}),"\n",(0,n.jsx)(t.h2,{id:"initialize-the-web3js-quorum-client",children:"Initialize the web3js-quorum client"}),"\n",(0,n.jsx)(t.p,{children:"Initialize your client where:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<JSON-RPC HTTP endpoint>"})," is the JSON-RPC HTTP endpoint of your Hyperledger Besu node. Specified by the ",(0,n.jsx)(t.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-host",children:(0,n.jsx)(t.code,{children:"--rpc-http-host"})})," and ",(0,n.jsx)(t.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-port",children:(0,n.jsx)(t.code,{children:"--rpc-http-port"})})," command line options."]}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("<JSON-RPC HTTP endpoint>"));\n'})}),"\n",(0,n.jsx)(t.h1,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'const { Web3 } = require("web3");\nconst Web3Quorum = require("web3js-quorum");\nconst web3 = new Web3Quorum(new Web3("http://localhost:8545"));\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["When migrating from web3js-eea to web3js-quorum, use ",(0,n.jsx)(t.code,{children:"Web3Quorum"}),". The constructor doesn't require the chain ID anymore. Chain ID is automatically retrieved from the chain using the specified JSON-RPC HTTP endpoint."]})}),"\n",(0,n.jsxs)(t.h2,{id:"deploy-a-contract-with-generateandsendrawtransaction",children:["Deploy a contract with ",(0,n.jsx)(t.code,{children:"generateAndSendRawTransaction"})]}),"\n",(0,n.jsxs)(t.p,{children:["To deploy a private contract, you need the contract binary. You can use ",(0,n.jsx)(t.a,{href:"https://solidity.readthedocs.io/en/develop/using-the-compiler.html",children:"Solidity"})," to get the contract binary."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"title=\"Deploying a contract with 'web3.priv.generateAndSendRawTransaction'\"",children:'const contractOptions = {\n  data: `0x123`, // contract binary\n  privateFrom: "tesseraNode1PublicKey",\n  privateFor: ["tesseraNode3PublicKey"],\n  privateKey: "besuNode1PrivateKey",\n};\nreturn web3.priv.generateAndSendRawTransaction(contractOptions);\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"web3.priv.generateAndSendRawTransaction(contractOptions)"})," returns the transaction hash. To get the private transaction receipt, use ",(0,n.jsx)(t.code,{children:"web3.priv.waitForTransactionReceipt(txHash)"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"web3js-quorum-methods",children:"web3js-quorum methods"}),"\n",(0,n.jsxs)(t.p,{children:["For more information about the web3js-quorum methods, see the ",(0,n.jsx)(t.a,{href:"https://consensys.github.io/web3js-quorum/latest/index.html",children:"web3js-quorum reference documentation"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>o});var n=r(67294);const s={},i=n.createContext(s);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);