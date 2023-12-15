"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[20798],{71332:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=t(85893),o=t(11151);const s={title:"Create a QBFT network",sidebar_position:2,description:"Create a private network using the QBFT consensus protocol.",tags:["private networks"]},i="Create a private network using QBFT",a={id:"private-networks/tutorials/qbft",title:"Create a QBFT network",description:"Create a private network using the QBFT consensus protocol.",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/qbft.md",sourceDirName:"private-networks/tutorials",slug:"/private-networks/tutorials/qbft",permalink:"/23.7.2/private-networks/tutorials/qbft",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/qbft.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1702608400,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:2,frontMatter:{title:"Create a QBFT network",sidebar_position:2,description:"Create a private network using the QBFT consensus protocol.",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Quorum Developer Quickstart",permalink:"/23.7.2/private-networks/tutorials/quickstart"},next:{title:"Create a private network using IBFT 2.0",permalink:"/23.7.2/private-networks/tutorials/ibft/"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a configuration file",id:"2-create-a-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the QBFT-Network directory",id:"4-copy-the-genesis-file-to-the-qbft-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Start the first node as the bootnode",id:"6-start-the-first-node-as-the-bootnode",level:3},{value:"7. Start Node-2",id:"7-start-node-2",level:3},{value:"8. Start Node-3",id:"8-start-node-3",level:3},{value:"9. Start Node-4",id:"9-start-node-4",level:3},{value:"10. Confirm the private network is working",id:"10-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-private-network-using-qbft",children:"Create a private network using QBFT"}),"\n",(0,r.jsxs)(n.p,{children:["A private network provides a configurable network for testing. This private network uses the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft",children:"QBFT (proof of authority) consensus protocol"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The QBFT network in this tutorial implements the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-block-headers",children:"block header validator selection method"})," to manage validators. For a tutorial on how to implement the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract",children:"contract validator selection method"}),", follow the steps in the ",(0,r.jsx)(n.a,{href:"https://github.com/ConsenSys/validator-smart-contracts",children:"example smart contract repository"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsx)(n.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."}),(0,r.jsx)(n.p,{children:"This tutorial configures a private network using QBFT for educational purposes only. QBFT requires 4 validators to be Byzantine fault tolerant."})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using QBFT with four nodes. The four nodes are all validators."}),"\n",(0,r.jsx)(n.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,r.jsx)(n.p,{children:"Each node requires a data directory for the blockchain data."}),"\n",(0,r.jsx)(n.p,{children:"Create directories for your private network, each of the four nodes, and a data directory for each node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"QBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502   \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502   \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-3\n\u2502   \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-create-a-configuration-file",children:"2. Create a configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file defines the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT genesis file"})," and the number of node key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,r.jsx)(n.code,{children:"genesis"})," property defining the QBFT genesis file, except for the ",(0,r.jsx)(n.code,{children:"extraData"})," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,r.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following configuration file definition to a file called ",(0,r.jsx)(n.code,{children:"qbftConfigFile.json"})," and save it in the ",(0,r.jsx)(n.code,{children:"QBFT-Network"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "qbft": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We recommend specifying the latest ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the genesis file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Do not use the accounts in ",(0,r.jsx)(n.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,r.jsx)(n.h3,{id:"3-generate-node-keys-and-a-genesis-file",children:"3. Generate node keys and a genesis file"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"QBFT-Network"})," directory, generate the node key and genesis file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=qbftConfigFile.json --to=networkFiles --private-key-file-name=key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Besu creates the following in the ",(0,r.jsx)(n.code,{children:"networkFiles"})," directory:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genesis.json"})," - The genesis file including the ",(0,r.jsx)(n.code,{children:"extraData"})," property specifying the four nodes are validators."]}),"\n",(0,r.jsx)(n.li,{children:"A directory for each node named using the node address and containing the public and private key for each node."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502   \u251c\u2500\u2500 key\n    \u2502   \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-copy-the-genesis-file-to-the-qbft-network-directory",children:"4. Copy the genesis file to the QBFT-Network directory"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"genesis.json"})," file to the ",(0,r.jsx)(n.code,{children:"QBFT-Network"})," directory."]}),"\n",(0,r.jsx)(n.h3,{id:"5-copy-the-node-private-keys-to-the-node-directories",children:"5. Copy the node private keys to the node directories"}),"\n",(0,r.jsxs)(n.p,{children:["For each node, copy the key files to the ",(0,r.jsx)(n.code,{children:"data"})," directory for that node"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"QBFT-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502    \u251c\u2500\u2500 key\n\u2502   \u2502    \u251c\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"6-start-the-first-node-as-the-bootnode",children:"6. Start the first node as the bootnode"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-1"})," directory, start Node-1:"]}),"\n",(0,r.jsx)(n.h1,{id:"macos",children:"MacOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,r.jsx)(n.h1,{id:"windows",children:"Windows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n'})}),"\n",(0,r.jsx)(n.p,{children:"The command line:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Specifies the data directory for Node-1 using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables the JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables the ETH, NET, and QBFT APIs using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables all-host access to the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables all-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," option."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Node 1 Enode URL",src:t(17273).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(n.h3,{id:"7-start-node-2",children:"7. Start Node-2"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsx)(n.h1,{id:"macos-1",children:"MacOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})}),"\n",(0,r.jsx)(n.h1,{id:"windows-1",children:"Windows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-2 using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The enode URL of Node-1 using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"8-start-node-3",children:"8. Start Node-3"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsx)(n.h1,{id:"macos-2",children:"MacOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})}),"\n",(0,r.jsx)(n.h1,{id:"windows-2",children:"Windows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-3 using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The bootnode as for ",(0,r.jsx)(n.a,{href:"#7-start-node-2",children:"Node-2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"9-start-node-4",children:"9. Start Node-4"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-4"})," directory and start Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsx)(n.h1,{id:"macos-3",children:"MacOS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n'})}),"\n",(0,r.jsx)(n.h1,{id:"windows-3",children:"Windows"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,QBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n'})}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-4 using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The bootnode as for ",(0,r.jsx)(n.a,{href:"#7-start-node-2",children:"Node-2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"10-confirm-the-private-network-is-working",children:"10. Confirm the private network is working"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#qbft_getvalidatorsbyblocknumber",children:(0,r.jsx)(n.code,{children:"qbft_getvalidatorsbyblocknumber"})})," method and confirm the network has four validators:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"qbft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' localhost:8545\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result displays the four validators:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    "0x73ced0bd3def2e2d9859e3bd0882683a2e6835fb",\n    "0x7a175f3542ceb60bf80fb536b3f42e7a30c0a6d7",\n    "0x7f6efa6e34f8c9b591a9ad4763e21b3fca31bcd6",\n    "0xc64140f1c9d5bb82e54976e568ad39958c3e94be"\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Look at the logs to confirm Besu is producing blocks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2021-05-26 08:47:00.221+10:00 | EthScheduler-Workers-0 | INFO  | PersistBlockTask | Imported #1 / 0 tx / 0 om / 0 (0.0%) gas / (0x4ee4456536e2793523df87288fae76518089eec91c3f7e05e220f1f4d3f6f95b) in 0.016s. Peers: 4\n2021-05-26 08:47:02.071+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #2 / 0 tx / 0 pending / 0 (0.0%) gas / (0x6fc47ada7146d75f6a46911d8d4038795b0c99970bbd4ce0c6d6aa60955f66fe)\n2021-05-26 08:47:04.051+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #3 / 0 tx / 0 pending / 0 (0.0%) gas / (0x3cb663880a65103266b11a8d8631beca5c482d515ac287125aa077b2e31b80b0)\n2021-05-26 08:47:06.058+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Produced #4 / 0 tx / 0 pending / 0 (0.0%) gas / (0xc2927915ac0c94bab5fc9acea6608455f1c857d69e97191dc2c39e4ac411817b)\n2021-05-26 08:47:08.058+10:00 | pool-8-thread-1 | INFO  | QbftBesuControllerBuilder | Imported #5 / 0 tx / 0 pending / 0 (0.0%) gas / (0xba63471d62c936733add9b884f5213c3842af9f52460268e39e0666ab82f02a5)\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsxs)(n.p,{children:["If the key files were not copied to the correct directory in ",(0,r.jsx)(n.a,{href:"#5-copy-the-node-private-keys-to-the-node-directories",children:"step 5"}),", the network will not start producing blocks."]}),(0,r.jsxs)(n.p,{children:["The logs for each node should indicate the public key was loaded from the ",(0,r.jsx)(n.code,{children:"data/key"})," directory:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2021-05-26 08:43:16.592+10:00 | main | INFO  | KeyPairUtil | Loaded public key 0x931d32f1aec4e45b150ee38f3c74157a750fc53f523e63fe2b07bf3fce43a3de64587fc9aaf3736444f2e3eef0eea90be3b67d18be7b5b2b7cb2fcd670416a7e from <path-to-network>/QBFT-Network/Node-1/data/key\n"})}),(0,r.jsx)(n.p,{children:"If the keys were not copied to the correct directory, Besu creates a key when starting up:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2021-05-26 08:43:16.592+10:00 | main | INFO  | KeyPairUtil | Generated new public key 0x1a4a2ade5ebc0a85572e2492e0cdf3e96b8928c75fa55b4425de8849850cf9b3a8cad1e27d98a3d3afac326a5e8788dbe6cc40249715c92825aebb28abe3e346 and stored it to <path-to-network>/QBFT-Network/Node-1/data/key\n"})}),(0,r.jsx)(n.p,{children:"If a new key was created, the validator key specified in the configuration does not match the created key and the node cannot participate in creating blocks."})]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#qbft-methods",children:"QBFT API"})," to remove or add validators, or import accounts to MetaMask and send transactions as described in the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["To add or remove nodes as validators you need the node address. The directory ",(0,r.jsx)(n.a,{href:"#3-generate-node-keys-and-a-genesis-file",children:"created for each node"})," has the node address as the name."]}),(0,r.jsxs)(n.p,{children:["Besu doesn't support ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/send-transactions",children:"private key management"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["You can switch from the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-block-headers",children:"block header validator selection method"})," configured here, to the ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract",children:"contract validator selection method"})," by updating the genesis file and ",(0,r.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/qbft#transitions",children:"configuring a transition"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,r.jsx)(n.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To restart the QBFT network in the future, start from ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"step 6"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"*[Byzantine fault tolerant]: Ability to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},17273:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);