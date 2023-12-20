"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[72467],{1764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(85893),d=r(11151);const n={title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},i="Add and remove IBFT 2.0 validators",o={id:"private-networks/tutorials/ibft/validators",title:"Add and removing IBFT 2.0 validators",description:"Adding and removing IBFT 2.0 validators",source:"@site/versioned_docs/version-23.4.1/private-networks/tutorials/ibft/validators.md",sourceDirName:"private-networks/tutorials/ibft",slug:"/private-networks/tutorials/ibft/validators",permalink:"/23.4.1/private-networks/tutorials/ibft/validators",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/tutorials/ibft/validators.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Add and removing IBFT 2.0 validators",sidebar_position:1,description:"Adding and removing IBFT 2.0 validators",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a private network using IBFT 2.0",permalink:"/23.4.1/private-networks/tutorials/ibft/"},next:{title:"Create a Clique network",permalink:"/23.4.1/private-networks/tutorials/clique"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add a validator",id:"add-a-validator",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Start the node",id:"2-start-the-node",level:3},{value:"3. Copy the address of the node",id:"3-copy-the-address-of-the-node",level:3},{value:"4. Propose adding the new validator",id:"4-propose-adding-the-new-validator",level:3},{value:"5. Verify the addition of the new validator",id:"5-verify-the-addition-of-the-new-validator",level:3},{value:"Remove a validator",id:"remove-a-validator",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"add-and-remove-ibft-20-validators",children:"Add and remove IBFT 2.0 validators"}),"\n",(0,a.jsxs)(t.p,{children:["This example walks through ",(0,a.jsx)(t.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"adding and removing an IBFT 2.0 validator"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/ibft/",children:"IBFT 2.0 network as configured in the IBFT 2.0 tutorial"})}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"add-a-validator",children:"Add a validator"}),"\n",(0,a.jsx)(t.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,a.jsx)(t.p,{children:"Create a working directory and a data directory for the new node that needs to be added:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"mkdir -p Node-5/data\n"})}),"\n",(0,a.jsx)(t.h3,{id:"2-start-the-node",children:"2. Start the node"}),"\n",(0,a.jsxs)(t.p,{children:["Change into the working directory for the new Node-5 and start the node, specifying the ",(0,a.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode",children:"Node-1 enode URL"})," as the bootnode:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30307 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8549\n'})}),"\n",(0,a.jsx)(t.p,{children:"The command line specifies:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The data directory for Node-5 using the ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#data-path",children:(0,a.jsx)(t.code,{children:"--data-path"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#p2p-port",children:(0,a.jsx)(t.code,{children:"--p2p-port"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#rpc-http-port",children:(0,a.jsx)(t.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["The enode URL of Node-1 using the ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,a.jsx)(t.code,{children:"--bootnodes"})})," option."]}),"\n",(0,a.jsxs)(t.li,{children:["Other options as for ",(0,a.jsx)(t.a,{href:"/23.4.1/private-networks/tutorials/ibft/#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"3-copy-the-address-of-the-node",children:"3. Copy the address of the node"}),"\n",(0,a.jsx)(t.p,{children:"Copy the address of the node. You can find the address in the logs when starting the new node:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"2021-05-28 09:49:00.881+10:00 | main | INFO  | DefaultP2PNetwork | Node address 0x90626e6a67445aabf1c0615410d108d4733aa90b\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Or use the ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/cli/subcommands#export-address",children:(0,a.jsx)(t.code,{children:"public-key export-address"})})," subcommand:"]}),"\n",(0,a.jsx)(t.h1,{id:"subcommand",children:"Subcommand"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"besu --data-path=IBFT-Network/Node-5/data public-key export-address\n"})}),"\n",(0,a.jsx)(t.h1,{id:"output",children:"Output"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"0x90626e6a67445aabf1c0615410d108d4733aa90b\n"})}),"\n",(0,a.jsx)(t.h3,{id:"4-propose-adding-the-new-validator",children:"4. Propose adding the new validator"}),"\n",(0,a.jsxs)(t.p,{children:["Propose adding the new validator from more than half the number of current validators, using ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/api/#ibft_proposevalidatorvote",children:(0,a.jsx)(t.code,{children:"ibft_proposeValidatorVote"})}),", specifying the address of the proposed validator and ",(0,a.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,a.jsx)(t.h1,{id:"curl-http-request",children:"curl HTTP request"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_proposeValidatorVote","params":["0x90626e6a67445aabf1c0615410d108d4733aa90b", true], "id":1}\' http://127.0.0.1:8545\n'})}),"\n",(0,a.jsx)(t.h1,{id:"json-result",children:"JSON result"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": true\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Repeat the proposal process for this candidate node from at least two of the other nodes."}),"\n",(0,a.jsx)(t.h3,{id:"5-verify-the-addition-of-the-new-validator",children:"5. Verify the addition of the new validator"}),"\n",(0,a.jsxs)(t.p,{children:["Verify that the new validator is now in the list of validators using ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,a.jsx)(t.code,{children:"ibft_getValidatorsByBlockNumber"})}),":"]}),"\n",(0,a.jsx)(t.h1,{id:"curl-http-request-1",children:"curl HTTP request"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' http://127.0.0.1:8545\n'})}),"\n",(0,a.jsx)(t.h1,{id:"json-result-1",children:"JSON result"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'[\n  "0x189d23d201b03ae1cf9113672df29a5d672aefa3",\n  "0x2aabbc1bb9bacef60a09764d1a1f4f04a47885c1",\n  "0x44b07d2c28b8ed8f02b45bd84ac7d9051b3349e6",\n  "0x4c1ccd426833b9782729a212c857f2f03b7b4c0d",\n  "0x90626e6a67445aabf1c0615410d108d4733aa90b"\n]\n'})}),"\n",(0,a.jsx)(t.p,{children:"The list of validators contains 5 addresses now."}),"\n",(0,a.jsx)(t.h2,{id:"remove-a-validator",children:"Remove a validator"}),"\n",(0,a.jsxs)(t.p,{children:["The process for removing a validator is similar to ",(0,a.jsx)(t.a,{href:"#add-a-validator",children:"adding a validator"})," starting from step 2, except you specify ",(0,a.jsx)(t.code,{children:"false"})," as the second parameter of ",(0,a.jsx)(t.a,{href:"/23.4.1/public-networks/reference/api/#ibft_proposevalidatorvote",children:(0,a.jsx)(t.code,{children:"ibft_proposeValidatorVote"})}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(67294);const d={},n=a.createContext(d);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);