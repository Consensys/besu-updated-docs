"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[56527],{47045:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const i={title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},o="Create a private network using Clique",a={id:"private-networks/tutorials/clique",title:"Create a Clique network",description:"Create a private network using the Clique consensus protocol.",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/clique.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/clique",permalink:"/23.7.2/private-networks/tutorials/clique",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/clique.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:4,frontMatter:{title:"Create a Clique network",sidebar_position:4,description:"Create a private network using the Clique consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and removing IBFT 2.0 validators",permalink:"/23.7.2/private-networks/tutorials/ibft/validators"},next:{title:"Create an Ethash network",permalink:"/23.7.2/private-networks/tutorials/ethash"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Get the address for Node-1",id:"2-get-the-address-for-node-1",level:3},{value:"3. Create the genesis file",id:"3-create-the-genesis-file",level:3},{value:"4. Start the first node as the bootnode",id:"4-start-the-first-node-as-the-bootnode",level:3},{value:"5. Start Node-2",id:"5-start-node-2",level:3},{value:"6. Start Node-3",id:"6-start-node-3",level:3},{value:"7. Confirm the private network is working",id:"7-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-a-private-network-using-clique",children:"Create a private network using Clique"}),"\n",(0,s.jsxs)(n.p,{children:["A private network provides a configurable network for testing. This private network uses the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/clique",children:"Clique (proof of authority) consensus protocol"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using Clique."}),"\n",(0,s.jsx)(n.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,s.jsxs)(n.p,{children:["Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys",children:"node key"})," in this directory."]}),"\n",(0,s.jsx)(n.p,{children:"Create directories for your private network, each of the three nodes, and a data directory for each node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Clique-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-get-the-address-for-node-1",children:"2. Get the address for Node-1"}),"\n",(0,s.jsx)(n.p,{children:"In Clique networks, you must include the address of at least one initial signer in the genesis file. For this Clique network, we'll use Node-1 as the initial signer. This requires obtaining the address for Node-1."}),"\n",(0,s.jsxs)(n.p,{children:["To get the address for Node-1, in the ",(0,s.jsx)(n.code,{children:"Node-1"})," directory, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/subcommands#export-address",children:(0,s.jsx)(n.code,{children:"public-key export-address"})})," subcommand to write the node address to the specified file (",(0,s.jsx)(n.code,{children:"node1Address"})," in this example)."]}),"\n",(0,s.jsx)(n.h1,{id:"macos",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data public-key export-address --to=data/node1Address\n"})}),"\n",(0,s.jsx)(n.h1,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data public-key export-address --to=data\\node1Address\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-create-the-genesis-file",children:"3. Create the genesis file"}),"\n",(0,s.jsxs)(n.p,{children:["The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/clique#genesis-file",children:"Clique genesis file"})," includes the address of Node-1 as the initial signer in the ",(0,s.jsx)(n.code,{children:"extraData"})," field."]}),"\n",(0,s.jsx)(n.p,{children:"All nodes in a network must use the same genesis file."}),"\n",(0,s.jsxs)(n.p,{children:["Copy the following genesis definition to a file called ",(0,s.jsx)(n.code,{children:"cliqueGenesis.json"})," and save it in the ",(0,s.jsx)(n.code,{children:"Clique-Network"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "chainId": 1337,\n    "berlinBlock": 0,\n    "clique": {\n      "blockperiodseconds": 15,\n      "epochlength": 30000\n    }\n  },\n  "coinbase": "0x0000000000000000000000000000000000000000",\n  "difficulty": "0x1",\n\n  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000<Node 1 Address>0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  "gasLimit": "0xa00000",\n  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n  "nonce": "0x0",\n  "timestamp": "0x5c51a607",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n      "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend specifying the latest ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"extraData"}),", replace ",(0,s.jsx)(n.code,{children:"<Node 1 Address>"})," with the ",(0,s.jsx)(n.a,{href:"#2-get-the-address-for-node-1",children:"address for Node-1"}),", excluding the 0x prefix."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  ...\n"extraData":"0x0000000000000000000000000000000000000000000000000000000000000000b9b81ee349c3807e46bc71aa2632203c5b4620340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n  ...\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Do not use the accounts in ",(0,s.jsx)(n.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,s.jsx)(n.h3,{id:"4-start-the-first-node-as-the-bootnode",children:"4. Start the first node as the bootnode"}),"\n",(0,s.jsx)(n.p,{children:"Start Node-1:"}),"\n",(0,s.jsx)(n.h1,{id:"macos-1",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,s.jsx)(n.h1,{id:"windows-1",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --network-id 123 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,s.jsx)(n.p,{children:"The command line enables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," option"]}),"\n",(0,s.jsxs)(n.li,{children:["The ETH, NET, and CLIQUE APIs using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api",children:(0,s.jsx)(n.code,{children:"--rpc-http-api"})})," option"]}),"\n",(0,s.jsxs)(n.li,{children:["All-host access to the HTTP JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," option"]}),"\n",(0,s.jsxs)(n.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,s.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," option"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When the node starts, the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Node 1 Enode URL",src:t(17273).Z+"",width:"988",height:"126"})}),"\n",(0,s.jsx)(n.h3,{id:"5-start-node-2",children:"5. Start Node-2"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,s.jsx)(n.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,s.jsx)(n.h1,{id:"macos-2",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})}),"\n",(0,s.jsx)(n.h1,{id:"windows-2",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})}),"\n",(0,s.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,s.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,s.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The enode URL of Node-1 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#bootnodes",children:(0,s.jsx)(n.code,{children:"--bootnodes"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The data directory for Node-2 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["Other options as for ",(0,s.jsx)(n.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-start-node-3",children:"6. Start Node-3"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,s.jsx)(n.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,s.jsx)(n.h1,{id:"macos-3",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})}),"\n",(0,s.jsx)(n.h1,{id:"windows-3",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\cliqueGenesis.json --bootnodes=<Node-1 Enode URL> --network-id 123 --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,CLIQUE --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})}),"\n",(0,s.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,s.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,s.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The data directory for Node-3 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The bootnode as for ",(0,s.jsx)(n.a,{href:"#5-start-node-2",children:"Node-2"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Other options as for ",(0,s.jsx)(n.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"7-confirm-the-private-network-is-working",children:"7. Confirm the private network is working"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#net_peercount",children:(0,s.jsx)(n.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,s.jsx)(n.p,{children:"The result confirms Node-1 has two peers (Node-2 and Node-3):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsx)(n.p,{children:"Look at the logs displayed to confirm Node-1 is producing blocks and Node-2 and Node-3 are importing blocks."}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/clique#add-and-remove-signers",children:"Clique API to add"})," Node-2 or Node-3 as a signer."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To add Node-2 or Node-3 as a signer you need the ",(0,s.jsx)(n.a,{href:"#2-get-the-address-for-node-1",children:"node address as when specifying Node-1"})," as the initial signer."]})}),"\n",(0,s.jsxs)(n.p,{children:["Import accounts to MetaMask and send transactions, as described in the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Besu doesn't support ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,s.jsx)(n.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To restart the Clique network in the future, start from ",(0,s.jsx)(n.a,{href:"#4-start-the-first-node-as-the-bootnode",children:"4. Start First Node as Bootnode"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17273:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);