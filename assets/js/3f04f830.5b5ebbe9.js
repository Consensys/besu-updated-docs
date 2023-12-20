"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[73823],{72400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(85893),o=t(11151),s=t(74866),a=t(85162);const i={description:"Hyperledger Besu private network using the IBFT 2.0 (Proof of Authority) consensus protocol",tags:["private networks"]},d="Create a private network using IBFT 2.0",c={id:"private-networks/tutorials/ibft/index",title:"Create a private network using IBFT 2.0",description:"Hyperledger Besu private network using the IBFT 2.0 (Proof of Authority) consensus protocol",source:"@site/docs/private-networks/tutorials/ibft/index.md",sourceDirName:"private-networks/tutorials/ibft",slug:"/private-networks/tutorials/ibft/",permalink:"/development/private-networks/tutorials/ibft/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/private-networks/tutorials/ibft/index.md",tags:[{label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{description:"Hyperledger Besu private network using the IBFT 2.0 (Proof of Authority) consensus protocol",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a QBFT network",permalink:"/development/private-networks/tutorials/qbft"},next:{title:"Add and removing IBFT 2.0 validators",permalink:"/development/private-networks/tutorials/ibft/validators"}},l={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create directories",id:"1-create-directories",level:3},{value:"2. Create a configuration file",id:"2-create-a-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the IBFT-Network directory",id:"4-copy-the-genesis-file-to-the-ibft-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Start the first node as the bootnode",id:"6-start-the-first-node-as-the-bootnode",level:3},{value:"7. Start Node-2",id:"7-start-node-2",level:3},{value:"8. Start Node-3",id:"8-start-node-3",level:3},{value:"9. Start Node-4",id:"9-start-node-4",level:3},{value:"10. Confirm the private network is working",id:"10-confirm-the-private-network-is-working",level:3},{value:"Next steps",id:"next-steps",level:2},{value:"Stop the nodes",id:"stop-the-nodes",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"create-a-private-network-using-ibft-20",children:"Create a private network using IBFT 2.0"}),"\n",(0,r.jsxs)(n.p,{children:["A private network provides a configurable network for testing. This private network uses the ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0 (proof of authority) consensus protocol"}),"."]}),"\n",(0,r.jsxs)(n.admonition,{type:"danger",children:[(0,r.jsx)(n.p,{children:"The steps in this tutorial create an isolated, but not protected or secure, Ethereum private network. We recommend running the private network behind a properly configured firewall."}),(0,r.jsx)(n.p,{children:"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires 4 validators to be Byzantine fault tolerant."})]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/development/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"Curl (or similar webservice client)"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.p,{children:"Listed on the right-hand side of the page are the steps to create a private network using IBFT 2.0 with four nodes. The four nodes are all validators."}),"\n",(0,r.jsx)(n.h3,{id:"1-create-directories",children:"1. Create directories"}),"\n",(0,r.jsx)(n.p,{children:"Each node requires a data directory for the blockchain data."}),"\n",(0,r.jsx)(n.p,{children:"Create directories for your private network, each of the four nodes, and a data directory for each node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-create-a-configuration-file",children:"2. Create a configuration file"}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file defines the ",(0,r.jsx)(n.a,{href:"/development/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0 genesis file"})," and the number of node key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,r.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 genesis file, except for the ",(0,r.jsx)(n.code,{children:"extraData"})," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,r.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,r.jsxs)(n.p,{children:["Copy the following configuration file definition to a file called ",(0,r.jsx)(n.code,{children:"ibftConfigFile.json"})," and save it in the ",(0,r.jsx)(n.code,{children:"IBFT-Network"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["We recommend specifying the latest ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/genesis-items#milestone-blocks",children:"milestone"})," when creating the configuration file for a private network. This ensures you are using the most up-to-date protocol and have access to the most recent opcodes."]})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Do not use the accounts in ",(0,r.jsx)(n.code,{children:"alloc"})," in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."]})}),"\n",(0,r.jsx)(n.h3,{id:"3-generate-node-keys-and-a-genesis-file",children:"3. Generate node keys and a genesis file"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"IBFT-Network"})," directory, generate the node key and genesis file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Besu creates the following in the ",(0,r.jsx)(n.code,{children:"networkFiles"})," directory:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"genesis.json"})," - The genesis file including the ",(0,r.jsx)(n.code,{children:"extraData"})," property specifying the four nodes are validators."]}),"\n",(0,r.jsx)(n.li,{children:"A directory for each node named using the node address and containing the public and private key for each node."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4-copy-the-genesis-file-to-the-ibft-network-directory",children:"4. Copy the genesis file to the IBFT-Network directory"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"genesis.json"})," file to the ",(0,r.jsx)(n.code,{children:"IBFT-Network"})," directory."]}),"\n",(0,r.jsx)(n.h3,{id:"5-copy-the-node-private-keys-to-the-node-directories",children:"5. Copy the node private keys to the node directories"}),"\n",(0,r.jsxs)(n.p,{children:["For each node, copy the key files to the ",(0,r.jsx)(n.code,{children:"data"})," directory for that node"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"IBFT-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n"})}),"\n",(0,r.jsx)(n.h3,{id:"6-start-the-first-node-as-the-bootnode",children:"6. Start the first node as the bootnode"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"Node-1"})," directory, start Node-1:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all"\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Specifies the data directory for Node-1 using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables the JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables the ETH, NET, and IBFT APIs using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-api",children:(0,r.jsx)(n.code,{children:"--rpc-http-api"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables all-host access to the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Enables all-domain access to the node through the HTTP JSON-RPC API using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," option."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["When the node starts, the ",(0,r.jsx)(n.a,{href:"/development/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. Copy the enode URL to specify Node-1 as the bootnode in the following steps."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Node 1 Enode URL",src:t(65090).Z+"",width:"988",height:"126"})}),"\n",(0,r.jsx)(n.h3,{id:"7-start-node-2",children:"7. Start Node-2"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-2"})," directory and start Node-2 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30304 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8546\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-2 using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The enode URL of Node-1 using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#bootnodes",children:(0,r.jsx)(n.code,{children:"--bootnodes"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"8-start-node-3",children:"8. Start Node-3"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-3"})," directory and start Node-3 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30305 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8547\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-3 using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The bootnode as for ",(0,r.jsx)(n.a,{href:"#7-start-node-2",children:"Node-2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"9-start-node-4",children:"9. Start Node-4"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,r.jsx)(n.code,{children:"Node-4"})," directory and start Node-4 specifying the Node-1 enode URL copied when starting Node-1 as the bootnode:"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(a.Z,{value:"MacOS",label:"MacOS",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n'})})}),(0,r.jsx)(a.Z,{value:"Windows",label:"Windows",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --bootnodes=<Node-1 Enode URL> --p2p-port=30306 --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT --host-allowlist="*" --rpc-http-cors-origins="all" --rpc-http-port=8548\n'})})})]}),"\n",(0,r.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The data directory for Node-4 using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for P2P discovery using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using the ",(0,r.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," option."]}),"\n",(0,r.jsxs)(n.li,{children:["The bootnode as for ",(0,r.jsx)(n.a,{href:"#7-start-node-2",children:"Node-2"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Other options as for ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"10-confirm-the-private-network-is-working",children:"10. Confirm the private network is working"}),"\n",(0,r.jsxs)(n.p,{children:["Start another terminal, use curl to call the JSON-RPC API ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,r.jsx)(n.code,{children:"ibft_getvalidatorsbyblocknumber"})})," method and confirm the network has four validators:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' localhost:8545\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result displays the four validators:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": [\n    "0x1e326b6da177ede2d3eb6d7247bd9f6901d40234",\n    "0x4aaac297fefe4466ebcb0b23ab90c5f466b11556",\n    "0xa267ead2e91e1673e0943b925176b51d9cd4f6d2",\n    "0xe3e680bc0ff485d1d415a384721f19e0db65fea7"\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Look at the logs to confirm Besu is producing blocks:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2020-12-21 07:22:17.883+10:00 | EthScheduler-Workers-0 | INFO  | PersistBlockTask | Imported #1 / 0 tx / 0 om / 0 (0.0%) gas / (0xde088192f27ca376eea969cb7a4a1de445bd923fde0444194c88e630f7705584) in 0.010s. Peers: 4\n2020-12-21 07:22:19.057+10:00 | pool-8-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=2, Round=0}, hash=0x2ca2652fa79ae2b3b6aadcfb13d5d362ffd6207c3b5ae47971e04eb9d05deaa9\n2020-12-21 07:22:21.044+10:00 | pool-8-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=3, Round=0}, hash=0x5d9a06cd17127712cfae7d1c25f705f302e146f4b64a73de3c814e1b5a3f9a16\n2020-12-21 07:22:23.049+10:00 | pool-8-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=4, Round=0}, hash=0x843981375f4cb2bb0f33a09b647ac27da5df2c539d940d8344c907eede57829c\n2020-12-21 07:22:25.060+10:00 | pool-8-thread-1 | INFO  | IbftRound | Importing block to chain. round=ConsensusRoundIdentifier{Sequence=5, Round=0}, hash=0x82b2069961d9185f7857cad1123de72d715729e122441335db486ea436834d6e\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["If the key files were not copied to the correct directory in ",(0,r.jsx)(n.a,{href:"#5-copy-the-node-private-keys-to-the-node-directories",children:"step 5"}),", the network will not start producing blocks."]}),(0,r.jsxs)(n.p,{children:["The logs for each node should indicate the public key was loaded from the ",(0,r.jsx)(n.code,{children:"data/key"})," directory:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2020-12-21 07:16:18.360+10:00 | main | INFO  | KeyPairUtil | Loaded public key 0xe143eadaf670d49afa3327cae2e655b083f5a89dac037c9af065914a9f8e6bceebcfe7ae2258bd22a9cd18b6a6de07b9790e71de49b78afa456e401bd2fb22fc from <path to network>/IBFT-Network/Node-1/data/key\n"})}),(0,r.jsx)(n.p,{children:"If the keys were not copied to the correct directory, Besu creates a key when starting up:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2020-12-21 07:33:11.458+10:00 | main | INFO  | KeyPairUtil | Generated new public key 0x1a4a2ade5ebc0a85572e2492e0cdf3e96b8928c75fa55b4425de8849850cf9b3a8cad1e27d98a3d3afac326a5e8788dbe6cc40249715c92825aebb28abe3e346 and stored it to <path to network>/IBFT-Network/Node-1/data/key\n"})}),(0,r.jsx)(n.p,{children:"If a new key was created, the validator key specified in the configuration does not match the created key and the node cannot participate in creating blocks."})]}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/development/private-networks/reference/api/#ibft-20-methods",children:"IBFT API"})," to remove or add validators."]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:["To add or remove nodes as validators you need the node address. The directory ",(0,r.jsx)(n.a,{href:"#3-generate-node-keys-and-a-genesis-file",children:"created for each node"})," has the node address as the name."]}),(0,r.jsx)(n.p,{children:"This tutorial configures a private network using IBFT 2.0 for educational purposes only. IBFT 2.0 requires four validators to be Byzantine fault tolerant."})]}),"\n",(0,r.jsxs)(n.p,{children:["Import accounts to MetaMask and send transactions as described in the ",(0,r.jsx)(n.a,{href:"/development/private-networks/tutorials/quickstart#create-a-transaction-using-metamask",children:"Quickstart tutorial"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Besu doesn't support ",(0,r.jsx)(n.a,{href:"/development/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"stop-the-nodes",children:"Stop the nodes"}),"\n",(0,r.jsx)(n.p,{children:"When finished using the private network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To restart the IBFT 2.0 network in the future, start from ",(0,r.jsx)(n.a,{href:"#6-start-the-first-node-as-the-bootnode",children:"6. Start First Node as Bootnode"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"*[Byzantine fault tolerant]: Ability to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers."})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(36905);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),o=t(36905),s=t(12466),a=t(16550),i=t(20469),d=t(91980),c=t(67392),l=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=p(e),[a,d]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,h]=f({queryString:t,groupId:o}),[b,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,l.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),g=(()=>{const e=c??b;return u({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,s]),tabValues:s}}var x=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function m(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),l=e=>{const n=e.currentTarget,t=d.indexOf(n),o=i[t].value;o!==r&&(c(n),a(o))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...s,className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(m,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},65090:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);