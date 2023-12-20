"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2786],{98642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(85893),i=t(11151);const r={title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},o="Create a private network using Ethash",a={id:"private-networks/tutorials/ethash",title:"Create an Ethash network",description:"Create a private network using the Ethash consensus protocol.",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/ethash.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/ethash",permalink:"/23.7.2/private-networks/tutorials/ethash",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/ethash.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:5,frontMatter:{title:"Create an Ethash network",sidebar_position:5,description:"Create a private network using the Ethash consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a Clique network",permalink:"/23.7.2/private-networks/tutorials/clique"},next:{title:"Create a privacy enabled network using the Quickstart",permalink:"/23.7.2/private-networks/tutorials/privacy/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a genesis file",id:"2-create-a-genesis-file",level:3},{value:"3. Start the first node as a bootnode",id:"3-start-the-first-node-as-a-bootnode",level:3},{value:"4. Start Node-2",id:"4-start-node-2",level:3},{value:"5. Start Node-3",id:"5-start-node-3",level:3},{value:"6. Confirm the private network is working",id:"6-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-a-private-network-using-ethash",children:"Create a private network using Ethash"}),"\n",(0,s.jsx)(n.p,{children:"A private network provides a configurable network for testing. By configuring a low difficulty and enabling mining, this allows for fast block creation."}),"\n",(0,s.jsx)(n.p,{children:"You can test multi-block and multi-user scenarios on a private network before moving to one of the public testnets."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."})}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using Ethash."}),"\n",(0,s.jsx)(n.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,s.jsxs)(n.p,{children:["Each node requires a data directory for the blockchain data. When the node starts, Besu saves the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys",children:"node key"})," in this directory."]}),"\n",(0,s.jsx)(n.p,{children:"Create directories for your private network, each of the three nodes, and a data directory for each node:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Private-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-create-a-genesis-file",children:"2. Create a genesis file"}),"\n",(0,s.jsx)(n.p,{children:"The genesis file defines the genesis block of the blockchain (that is, the start of the blockchain). The genesis file includes entries for configuring the blockchain, such as the mining difficulty and initial accounts and balances."}),"\n",(0,s.jsxs)(n.p,{children:["All nodes in a network must use the same genesis file. The ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/network-and-chain-id",children:"network ID"})," defaults to the ",(0,s.jsx)(n.code,{children:"chainID"})," in the genesis file. The ",(0,s.jsx)(n.code,{children:"fixeddifficulty"})," enables fast block mining."]}),"\n",(0,s.jsxs)(n.p,{children:["Copy the following genesis definition to a file called ",(0,s.jsx)(n.code,{children:"privateNetworkGenesis.json"})," and save it in the ",(0,s.jsx)(n.code,{children:"Private-Network"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "berlinBlock": 0,\n    "ethash": {\n      "fixeddifficulty": 1000\n    },\n    "chainID": 1337\n  },\n  "nonce": "0x42",\n  "gasLimit": "0x1000000",\n  "difficulty": "0x10000",\n  "alloc": {\n    "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n      "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "0xad78ebc5ac6200000"\n    },\n    "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n      "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n      "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n      "balance": "90000000000000000000000"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["We recommend specifying the latest ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Don't use the accounts in ",(0,s.jsx)(n.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,s.jsx)(n.h3,{id:"3-start-the-first-node-as-a-bootnode",children:"3. Start the first node as a bootnode"}),"\n",(0,s.jsx)(n.p,{children:"Start Node-1:"}),"\n",(0,s.jsx)(n.h1,{id:"macos",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,s.jsx)(n.h1,{id:"windows",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-enabled --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,s.jsx)(n.p,{children:"The command line enables:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Mining and specifies the account to pay mining rewards to using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#miner-enabled",children:(0,s.jsx)(n.code,{children:"--miner-enabled"})})," and ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#miner-coinbase",children:(0,s.jsx)(n.code,{children:"--miner-coinbase"})})," options."]}),"\n",(0,s.jsxs)(n.li,{children:["JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["All-host access to the HTTP JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,s.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," option."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"The miner coinbase account is one of the accounts defined in the genesis file."})}),"\n",(0,s.jsxs)(n.p,{children:["When the node starts, the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Node 1 Enode URL",src:t(17273).Z+"",width:"988",height:"126"})}),"\n",(0,s.jsx)(n.h3,{id:"4-start-node-2",children:"4. Start Node-2"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,s.jsx)(n.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,s.jsx)(n.h1,{id:"macos-1",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n"})}),"\n",(0,s.jsx)(n.h1,{id:"windows-1",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304\n"})}),"\n",(0,s.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,s.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The enode URL of Node-1 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#bootnodes",children:(0,s.jsx)(n.code,{children:"--bootnodes"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["A data directory for Node-2 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,s.jsx)(n.li,{children:"A genesis file as for Node-1."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"5-start-node-3",children:"5. Start Node-3"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,s.jsx)(n.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,s.jsx)(n.h1,{id:"macos-2",children:"MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=../privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n"})}),"\n",(0,s.jsx)(n.h1,{id:"windows-2",children:"Windows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --data-path=data --genesis-file=..\\privateNetworkGenesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305\n"})}),"\n",(0,s.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A different port to Node-1 and Node-2 for P2P discovery."}),"\n",(0,s.jsxs)(n.li,{children:["A data directory for Node-3 using the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,s.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,s.jsx)(n.li,{children:"A bootnode and genesis file as for Node-2."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"6-confirm-the-private-network-is-working",children:"6. Confirm the private network is working"}),"\n",(0,s.jsxs)(n.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#net_peercount",children:(0,s.jsx)(n.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,s.jsx)(n.p,{children:"The result confirms Node-1 (the node running the JSON-RPC service) has two peers (Node-2 and Node-3):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x2"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,s.jsxs)(n.p,{children:["Import accounts to MetaMask and send transactions as described in the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Besu doesn't support ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Send transactions using ",(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})," to ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/send-transactions/",children:"send ether or, deploy or invoke contracts"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC API"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Start a node with the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-ws-enabled"})})," option and use the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/rpc-pubsub",children:"RPC Pub/Sub API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,s.jsx)(n.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["To restart the private network in the future, start from ",(0,s.jsx)(n.a,{href:"#3-start-the-first-node-as-a-bootnode",children:"3. Start the first node as a bootnode"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17273:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(67294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);