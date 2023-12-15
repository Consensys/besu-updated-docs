"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[30098],{12150:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=r(85893),a=r(11151);const s={title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},o="Revert reason",i={id:"private-networks/how-to/send-transactions/revert-reason",title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",source:"@site/versioned_docs/version-23.10.0/private-networks/how-to/send-transactions/revert-reason.md",sourceDirName:"private-networks/how-to/send-transactions",slug:"/private-networks/how-to/send-transactions/revert-reason",permalink:"/23.10.0/private-networks/how-to/send-transactions/revert-reason",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/private-networks/how-to/send-transactions/revert-reason.md",tags:[{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1702608400,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:3,frontMatter:{title:"Include revert reason",description:"Including revert reason in transactions with Hyperledger Besu",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Send concurrent private transactions",permalink:"/23.10.0/private-networks/how-to/send-transactions/concurrent-private-transactions"},next:{title:"Monitoring",permalink:"/23.10.0/private-networks/how-to/monitor/"}},c={},d=[{value:"Enable revert reason",id:"enable-revert-reason",level:2},{value:"Where the revert reason is included",id:"where-the-revert-reason-is-included",level:2},{value:"Revert reason format",id:"revert-reason-format",level:2},{value:"Dapp support",id:"dapp-support",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"revert-reason",children:"Revert reason"}),"\n",(0,t.jsxs)(n.p,{children:["In smart contracts, the ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.12/control-structures.html#revert",children:(0,t.jsx)(n.code,{children:"revert"})})," operation triggers an exception to flag an error and revert the current call. The EVM passes back to the client an optional string message containing information about the error."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sol",children:'pragma solidity ^0.8.4;\n\ncontract VendingMachine {\n    address owner;\n    constructor() {\n        owner = msg.sender;\n    }\n    error Unauthorized();\n    function buy(uint amount) public payable {\n        if (amount > msg.value / 2 ether)\n            revert("Not enough Ether provided.");\n        // Alternative way to do it:\n        require(\n            amount <= msg.value / 2 ether,\n            "Not enough Ether provided."\n        );\n        // Perform the purchase.\n    }\n    function withdraw() public {\n        if (msg.sender != owner)\n            revert Unauthorized();\n\n        payable(msg.sender).transfer(address(this).balance);\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"enable-revert-reason",children:"Enable revert reason"}),"\n",(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#revert-reason-enabled",children:(0,t.jsx)(n.code,{children:"--revert-reason-enabled"})})," command line option to include the revert reason in the transaction receipt and the ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/trace-types#trace",children:(0,t.jsx)(n.code,{children:"trace"})})," response in Hyperledger Besu."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Enabling revert reason may use a significant amount of memory. We do not recommend enabling revert reason when connected to public Ethereum networks."})}),"\n",(0,t.jsx)(n.h2,{id:"where-the-revert-reason-is-included",children:"Where the revert reason is included"}),"\n",(0,t.jsxs)(n.p,{children:["With revert reason enabled, the transaction receipt returned by ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#eth_gettransactionreceipt",children:(0,t.jsx)(n.code,{children:"eth_getTransactionReceipt"})})," includes the revert reason as an ABI-encoded string."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The revert reason is not included in the transaction receipt's root hash. Not including the revert reason in the transactions receipt's root hash means the revert reason is only available to nodes that execute the transaction when importing the block. That is, the revert reason is not available if using fast synchronization (",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#sync-mode",children:(0,t.jsx)(n.code,{children:"--sync-mode=FAST"})}),")."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example of transaction receipt"',children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "blockHash": "0xe7212a92cfb9b06addc80dec2a0dfae9ea94fd344efeb157c41e12994fcad60a",\n    "blockNumber": "0x50",\n    "contractAddress": null,\n    "cumulativeGasUsed": "0x5208",\n    "from": "0x627306090abab3a6e1400e9345bc60c78a8bef57",\n    "gasUsed": "0x5208",\n    "logs": [],\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "status": "0x1",\n    "to": "0xf17f52151ebef6c7334fad080c5704d77216b732",\n    "transactionHash": "0xc00e97af59c6f88de163306935f7682af1a34c67245e414537d02e422815efc3",\n    "transactionIndex": "0x0",\n    "revertReason": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["With revert reason enabled, the list items in the ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/trace-types#trace",children:(0,t.jsx)(n.code,{children:"trace"})})," response returned by ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#trace_replayblocktransactions",children:(0,t.jsx)(n.code,{children:"trace_replayBlockTransactions"})}),", ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#trace_block",children:(0,t.jsx)(n.code,{children:"trace_block"})}),", and ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#trace_transaction",children:(0,t.jsx)(n.code,{children:"trace_transaction"})})," include the revert reason as an ABI-encoded string."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example of trace response list item"',children:'{\n  "jsonrpc": "2.0",\n  "id": 415,\n  "result": [\n    {\n      "action": {\n        "callType": "call",\n        "from": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n        "gas": "0xffadea",\n        "input": "0x",\n        "to": "0x0110000000000000000000000000000000000000",\n        "value": "0x0"\n      },\n      "blockHash": "0x220bc13dc4f1ed38dcca927a5be15eca16497d279f4c40d7b8fe9704eadf1464",\n      "blockNumber": 18,\n      "error": "Reverted",\n      "revertReason": "0x7d88c1856cc95352",\n      "subtraces": 0,\n      "traceAddress": [],\n      "transactionHash": "0xc388baa0e55e6b73e850b22dc7e9853700f6b995fd55d95dd6ccd5a13d63c566",\n      "transactionPosition": 1,\n      "type": "call"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["By default, the error returned by ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#eth_estimategas",children:(0,t.jsx)(n.code,{children:"eth_estimateGas"})})," and ",(0,t.jsx)(n.a,{href:"/23.10.0/public-networks/reference/api/#eth_call",children:(0,t.jsx)(n.code,{children:"eth_call"})})," includes the revert reason as an ABI-encoded string in the ",(0,t.jsx)(n.code,{children:"data"})," field."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="Example of eth_estimateGas and eth_call error"',children:'{\n  "jsonrpc": "2.0",\n  "id": 3,\n  "error": {\n    "code": -32000,\n    "message": "Execution reverted: ERC20: transfer amount exceeds balance",\n    "data": "0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"revert-reason-format",children:"Revert reason format"}),"\n",(0,t.jsxs)(n.p,{children:["As described in the ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/v0.8.12/control-structures.html#revert",children:"Solidity documentation"}),", the revert reason is an ABI-encoded string consisting of:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"0x08c379a0                                                         // Function selector for Error(string)\n0x0000000000000000000000000000000000000000000000000000000000000020 // Data offset\n0x000000000000000000000000000000000000000000000000000000000000001a // String length\n0x4e6f7420656e6f7567682045746865722070726f76696465642e000000000000 // String data\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:"title=\"Example of revert reason string for 'Not enough Ether provided' \"",children:'"0x08c379a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001a4e6f7420656e6f7567682045746865722070726f76696465642e000000000000"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dapp-support",children:"Dapp support"}),"\n",(0,t.jsx)(n.p,{children:"Client libraries, such as web3j, do not support extracting the revert reason from the transaction receipt. To extract the revert reason your dapp must interact directly with Besu using a custom JSON -> Object converter."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(67294);const a={},s=t.createContext(a);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);