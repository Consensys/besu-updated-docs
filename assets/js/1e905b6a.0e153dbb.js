"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[19817],{17234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const s={title:"Use the web3js-quorum multi-node example",sidebar_position:3,description:"web3js-quorum client library multi-node example",tags:["private networks"]},i="Use the multi-node example in the web3js-quorum client library",o={id:"private-networks/tutorials/privacy/web3js-quorum",title:"Use the web3js-quorum multi-node example",description:"web3js-quorum client library multi-node example",source:"@site/versioned_docs/version-23.10.2/private-networks/tutorials/privacy/web3js-quorum.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/web3js-quorum",permalink:"/private-networks/tutorials/privacy/web3js-quorum",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/tutorials/privacy/web3js-quorum.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1702608400,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:3,frontMatter:{title:"Use the web3js-quorum multi-node example",sidebar_position:3,description:"web3js-quorum client library multi-node example",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a multi-tenant network",permalink:"/private-networks/tutorials/privacy/multi-tenancy"},next:{title:"Create a privacy-enabled network using the Quorum Developer Quickstart",permalink:"/private-networks/tutorials/privacy/quickstart"}},c={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"use-the-multi-node-example-in-the-web3js-quorum-client-library",children:"Use the multi-node example in the web3js-quorum client library"}),"\n",(0,a.jsxs)(n.p,{children:["To use the examples provided in the web3js-quorum library with ",(0,a.jsx)(n.a,{href:"/private-networks/tutorials/privacy/",children:"your privacy network"}),":"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This example uses 3 of the 4 nodes configured in the ",(0,a.jsx)(n.a,{href:"/private-networks/tutorials/privacy/",children:"privacy tutorial"}),"."]})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Clone the ",(0,a.jsx)(n.strong,{children:"ConsenSys/web3js-quorum"})," repository:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ConsenSys/web3js-quorum\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"web3js-quorum"})," directory:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"example"})," directory, update the ",(0,a.jsx)(n.code,{children:"keys.js"})," file to include:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"chain ID"}),"\n",(0,a.jsx)(n.li,{children:"Tessera node public keys"}),"\n",(0,a.jsx)(n.li,{children:"Hyperledger Besu node RPC URLs"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/public-networks/concepts/node-keys#node-private-key",children:"Hyperledger Besu node private keys"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"example/multiNodeExample"})," directory, deploy the contract:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node deployContract.js\n"})}),"\n",(0,a.jsx)(n.p,{children:"A private transaction receipt returns."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Transaction Hash  0x23b57ddc3ecf9c9a548e4401a411420ffc0002fd259a86d5656add7c6108beeb\nWaiting for transaction to be mined ...\nPrivate Transaction Receipt\n{ contractAddress: '0xfee84481da8f4b9a998dfacb38091b3145bb01ab',\n  from: '0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb',\n  to: null,\n  output:\n  '0x6080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633fa4f245811461005b5780636057361d1461008257806367e404ce146100ae575b600080fd5b34801561006757600080fd5b506100706100ec565b60408051918252519081900360200190f35b34801561008e57600080fd5b506100ac600480360360208110156100a557600080fd5b50356100f2565b005b3480156100ba57600080fd5b506100c3610151565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60025490565b604080513381526020810183905281517fc9db20adedc6cf2b5d25252b101ab03e124902a73fcb12b753f3d1aaa2d8f9f5929181900390910190a16002556001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b60015473ffffffffffffffffffffffffffffffffffffffff169056fea165627a7a72305820c7f729cb24e05c221f5aa913700793994656f233fe2ce3b9fd9a505ea17e8d8a0029',\n  logs: [] }\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you receive a ",(0,a.jsx)(n.code,{children:"Method not enabled"})," error, ensure you enabled the appropriate APIs using the ",(0,a.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-api",children:(0,a.jsx)(n.code,{children:"--rpc-http-api"})})]})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Copy the contract address from the private transaction receipt and set the ",(0,a.jsx)(n.code,{children:"CONTRACT_ADDRESS"})," environment variable:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export CONTRACT_ADDRESS=<Contract Address from Private Transaction Receipt>\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"example",type:"tip",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export CONTRACT_ADDRESS=0xfee84481da8f4b9a998dfacb38091b3145bb01ab\n"})})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Store a value in the contract from Node 1:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node storeValueFromNode1.js\n"})}),"\n",(0,a.jsx)(n.p,{children:"Node 1 stores the value of 1000 (3e8 in hex) and is visible to Node 1 and Node 2."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Transaction Hash: 0xd9d71cc6f64675e1a48183ded8f08930af317eb883ebae4c4eec66ae68618d85\nWaiting for transaction to be mined ...\nEvent Emited: 0x0000000000000000000000009811ebc35d7b06b3fa8dc5809a1f9c52751e1deb00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8545: 0x00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8546: 0x00000000000000000000000000000000000000000000000000000000000003e8\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8547: 0x\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Store a value in the contract from Node 2:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"node storeValueFromNode2.js\n"})}),"\n",(0,a.jsx)(n.p,{children:"Node 2 stores the value of 42 (2a in hex) and is visible to Node 1 and Node 2."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Transaction Hash: 0xa025433aec47a71b0230f12f43708812fd38ff7b7c1dc89a715f71dcbd5fbdbf\nWaiting for transaction to be mined ...\nEvent Emited: 0x000000000000000000000000372a70ace72b02cc7f1757183f98c620254f9c8d000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8545: 0x000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8546: 0x000000000000000000000000000000000000000000000000000000000000002a\nWaiting for transaction to be mined ...\nGet Value from http://localhost:8547: 0x\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"As expected, log messages indicate that Node 3 Tessera cannot find payloads because Node 3 does not have access to the private transactions between Node 1 and Node 2."})}),"\n"]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);