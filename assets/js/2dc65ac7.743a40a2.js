"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[2332],{15505:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=s(85893),o=s(11151);const r={title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},t="Create a permissioned network",d={id:"private-networks/tutorials/permissioning/index",title:"Create a permissioned network",description:"Hyperledger Besu create a permissioned network",source:"@site/versioned_docs/version-23.7.2/private-networks/tutorials/permissioning/index.md",sourceDirName:"private-networks/tutorials/permissioning",slug:"/private-networks/tutorials/permissioning/",permalink:"/23.7.2/private-networks/tutorials/permissioning/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/tutorials/permissioning/index.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703031856,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Create a permissioned network",sidebar_position:1,description:"Hyperledger Besu create a permissioned network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a privacy-enabled network using the Quorum Developer Quickstart",permalink:"/23.7.2/private-networks/tutorials/privacy/quickstart"},next:{title:"Get started with onchain permissioning",permalink:"/23.7.2/private-networks/tutorials/permissioning/onchain"}},a={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Create folders",id:"1-create-folders",level:3},{value:"2. Create the configuration file",id:"2-create-the-configuration-file",level:3},{value:"3. Generate node keys and a genesis file",id:"3-generate-node-keys-and-a-genesis-file",level:3},{value:"4. Copy the genesis file to the Permissioned-Network directory",id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",level:3},{value:"5. Copy the node private keys to the node directories",id:"5-copy-the-node-private-keys-to-the-node-directories",level:3},{value:"6. Create the permissions configuration file",id:"6-create-the-permissions-configuration-file",level:3},{value:"7. Start Node-1",id:"7-start-node-1",level:3},{value:"8. Start Node-2",id:"8-start-node-2",level:3},{value:"9. Start Node-3",id:"9-start-node-3",level:3},{value:"10. Start Node-4",id:"10-start-node-4",level:3},{value:"11. Add enode URLs for nodes to permissions configuration file",id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file",level:3},{value:"12. Add nodes as peers",id:"12-add-nodes-as-peers",level:3},{value:"13. Confirm permissioned network is working",id:"13-confirm-permissioned-network-is-working",level:3},{value:"Check peer count",id:"check-peer-count",level:4},{value:"Send a transaction from an account in the allowlist",id:"send-a-transaction-from-an-account-in-the-allowlist",level:4},{value:"Try sending a transaction from an account not in the accounts allowlist",id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist",level:3},{value:"Start a node not on the nodes allowlist",id:"start-a-node-not-on-the-nodes-allowlist",level:3},{value:"Stop nodes",id:"stop-nodes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"create-a-permissioned-network",children:"Create a permissioned network"}),"\n",(0,i.jsxs)(n.p,{children:["The following steps set up a permissioned network with local node and account permissions. The network uses the ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0 proof of authority consensus protocol"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"A permissioned Ethereum network as described here is not protected against all attack vectors. We recommend applying defense in depth to protect your infrastructure."})}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/binary-distribution",children:"Hyperledger Besu"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:"curl (or similar Web service client)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.h3,{id:"1-create-folders",children:"1. Create folders"}),"\n",(0,i.jsx)(n.p,{children:"Each node requires a data directory for the blockchain data."}),"\n",(0,i.jsx)(n.p,{children:"Create directories for your permissioned network and each of the three nodes, and a data directory for each node:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-create-the-configuration-file",children:"2. Create the configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file defines the ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0 genesis file"})," and the number of node key pairs to generate."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,i.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 genesis file, except for the ",(0,i.jsx)(n.code,{children:"extraData"})," string, which Besu generates automatically in the resulting genesis file. The second is the ",(0,i.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,i.jsxs)(n.p,{children:["Copy the following configuration file definition to a file called ",(0,i.jsx)(n.code,{children:"ibftConfigFile.json"})," and save it in the ",(0,i.jsx)(n.code,{children:"Permissioned-Network"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "genesis": {\n    "config": {\n      "chainId": 1337,\n      "berlinBlock": 0,\n      "ibft2": {\n        "blockperiodseconds": 2,\n        "epochlength": 30000,\n        "requesttimeoutseconds": 4\n      }\n    },\n    "nonce": "0x0",\n    "timestamp": "0x58ee40ba",\n    "gasLimit": "0x47b760",\n    "difficulty": "0x1",\n    "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n    "coinbase": "0x0000000000000000000000000000000000000000",\n    "alloc": {\n      "fe3b557e8fb62b89f4916b721be55ceb828dbd73": {\n        "privateKey": "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "0xad78ebc5ac6200000"\n      },\n      "627306090abaB3A6e1400e9345bC60c78a8BEf57": {\n        "privateKey": "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      },\n      "f17f52151EbEF6C7334FAD080c5704D77216b732": {\n        "privateKey": "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",\n        "comment": "private key and this comment are ignored.  In a real chain, the private key should NOT be stored",\n        "balance": "90000000000000000000000"\n      }\n    }\n  },\n  "blockchain": {\n    "nodes": {\n      "generate": true,\n      "count": 4\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Security warning",type:"danger",children:(0,i.jsx)(n.p,{children:"Don't use the accounts in the genesis file on Mainnet or any public network except for testing. The private keys display, which means the accounts are not secure."})}),"\n",(0,i.jsx)(n.h3,{id:"3-generate-node-keys-and-a-genesis-file",children:"3. Generate node keys and a genesis file"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Permissioned-Network"})," directory, generate the node key and genesis file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=ibftConfigFile.json --to=networkFiles --private-key-file-name=key\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Besu creates the following in the ",(0,i.jsx)(n.code,{children:"networkFiles"})," directory:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"genesis.json"})," - The genesis file including the ",(0,i.jsx)(n.code,{children:"extraData"})," property specifying the four nodes are validators."]}),"\n",(0,i.jsx)(n.li,{children:"A directory for each node named using the node address and containing the public and private key for each node."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"networkFiles/\n\u251c\u2500\u2500 genesis.json\n\u2514\u2500\u2500 keys\n    \u251c\u2500\u2500 0x438821c42b812fecdcea7fe8235806a412712fc0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xca9c2dfa62f4589827c0dd7dcf48259aa29f22f5\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u251c\u2500\u2500 0xcd5629bd37155608a0c9b28c4fd19310d53b3184\n    \u2502\xa0\xa0 \u251c\u2500\u2500 key\n    \u2502\xa0\xa0 \u2514\u2500\u2500 key.pub\n    \u2514\u2500\u2500 0xe96825c5ab8d145b9eeca1aba7ea3695e034911a\n        \u251c\u2500\u2500 key\n        \u2514\u2500\u2500 key.pub\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-copy-the-genesis-file-to-the-permissioned-network-directory",children:"4. Copy the genesis file to the Permissioned-Network directory"}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"genesis.json"})," file to the ",(0,i.jsx)(n.code,{children:"Permisssioned-Network"})," directory."]}),"\n",(0,i.jsx)(n.h3,{id:"5-copy-the-node-private-keys-to-the-node-directories",children:"5. Copy the node private keys to the node directories"}),"\n",(0,i.jsxs)(n.p,{children:["For each node, copy the key files to the ",(0,i.jsx)(n.code,{children:"data"})," directory for that node"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Permissioned-Network/\n\u251c\u2500\u2500 genesis.json\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n\u251c\u2500\u2500 Node-4\n\u2502   \u251c\u2500\u2500 data\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key\n\u2502   \u2502 \xa0\xa0 \u251c\u2500\u2500 key.pub\n"})}),"\n",(0,i.jsx)(n.h3,{id:"6-create-the-permissions-configuration-file",children:"6. Create the permissions configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"permissions configuration file"})," defines the nodes and accounts allowlists."]}),"\n",(0,i.jsxs)(n.p,{children:["Copy the following permissions configuration to a file called ",(0,i.jsx)(n.code,{children:"permissions_config.toml"})," and save a copy in the ",(0,i.jsx)(n.code,{children:"Node-1/data"}),", ",(0,i.jsx)(n.code,{children:"Node-2/data"}),", ",(0,i.jsx)(n.code,{children:"Node-3/data"}),", and ",(0,i.jsx)(n.code,{children:"Node-4/data"})," directories:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",metastring:'title="permissions_config.toml"',children:'accounts-allowlist=["0xfe3b557e8fb62b89f4916b721be55ceb828dbd73", "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"]\n\nnodes-allowlist=[]\n'})}),"\n",(0,i.jsx)(n.p,{children:"The permissions configuration file includes the first two accounts from the genesis file."}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_addnodestoallowlist",children:(0,i.jsx)(n.code,{children:"perm_addNodesToAllowlist"})})," JSON-RPC API method to add permissioned nodes after starting the nodes."]}),"\n",(0,i.jsx)(n.h3,{id:"7-start-node-1",children:"7. Start Node-1"}),"\n",(0,i.jsx)(n.p,{children:"Use the following command:"}),"\n",(0,i.jsx)(n.h1,{id:"macos",children:"MacOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n'})}),"\n",(0,i.jsx)(n.h1,{id:"windows",children:"Windows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line allows you to enable:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Nodes and accounts permissions using ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-config-file-enabled",children:(0,i.jsx)(n.code,{children:"--permissions-nodes-config-file-enabled"})})," and ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-accounts-config-file-enabled",children:(0,i.jsx)(n.code,{children:"--permissions-accounts-config-file-enabled"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-http-enabled"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"ADMIN"}),", ",(0,i.jsx)(n.code,{children:"ETH"}),", ",(0,i.jsx)(n.code,{children:"NET"}),", ",(0,i.jsx)(n.code,{children:"PERM"}),", and ",(0,i.jsx)(n.code,{children:"IBFT"})," APIs using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api",children:(0,i.jsx)(n.code,{children:"--rpc-http-api"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All-host access to the HTTP JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#host-allowlist",children:(0,i.jsx)(n.code,{children:"--host-allowlist"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All-domain access to the node through the HTTP JSON-RPC API using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,i.jsx)(n.code,{children:"--rpc-http-cors-origins"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the node starts, the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to specify Node-1 as a peer and update the permissions configuration file in the following steps."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Node 1 Enode URL",src:s(17273).Z+"",width:"988",height:"126"})}),"\n",(0,i.jsx)(n.h3,{id:"8-start-node-2",children:"8. Start Node-2"}),"\n",(0,i.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,i.jsx)(n.code,{children:"Node-2"})," directory, and start Node-2:"]}),"\n",(0,i.jsx)(n.h1,{id:"macos-1",children:"MacOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n'})}),"\n",(0,i.jsx)(n.h1,{id:"windows-1",children:"Windows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30304 --rpc-http-port=8546\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A data directory for Node-2 using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,i.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the node starts, the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,i.jsx)(n.h3,{id:"9-start-node-3",children:"9. Start Node-3"}),"\n",(0,i.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,i.jsx)(n.code,{children:"Node-3"})," directory, and start Node-3:"]}),"\n",(0,i.jsx)(n.h1,{id:"macos-2",children:"MacOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n'})}),"\n",(0,i.jsx)(n.h1,{id:"windows-2",children:"Windows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30305 --rpc-http-port=8547\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1 and Node-2 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A data directory for Node-3 using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,i.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the node starts, the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,i.jsx)(n.h3,{id:"10-start-node-4",children:"10. Start Node-4"}),"\n",(0,i.jsxs)(n.p,{children:["Start another terminal, change to the ",(0,i.jsx)(n.code,{children:"Node-4"})," directory, and start Node-4:"]}),"\n",(0,i.jsx)(n.h1,{id:"macos-3",children:"MacOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n'})}),"\n",(0,i.jsx)(n.h1,{id:"windows-3",children:"Windows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=..\\genesis.json --permissions-nodes-config-file-enabled --permissions-accounts-config-file-enabled --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30306 --rpc-http-port=8548\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command line specifies:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for P2P discovery using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A different port to Node-1, Node-2, and Node-3 for HTTP JSON-RPC using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,i.jsx)(n.code,{children:"--rpc-http-port"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["A data directory for Node-4 using ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,i.jsx)(n.code,{children:"--data-path"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Other options as for ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"Node-1"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When the node starts, the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#enode-url",children:"enode URL"})," displays. You need the enode URL to update the permissions configuration file in the following steps."]}),"\n",(0,i.jsx)(n.h3,{id:"11-add-enode-urls-for-nodes-to-permissions-configuration-file",children:"11. Add enode URLs for nodes to permissions configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["Start another terminal and use the ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_addnodestoallowlist",children:(0,i.jsx)(n.code,{children:"perm_addNodesToAllowlist"})})," JSON-RPC API method to add the nodes to the permissions configuration file for each node."]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<EnodeNode1>"}),", ",(0,i.jsx)(n.code,{children:"<EnodeNode2>"}),", ",(0,i.jsx)(n.code,{children:"<EnodeNode3>"}),", and ",(0,i.jsx)(n.code,{children:"<EnodeNode4>"})," with the enode URL displayed when starting each node."]}),"\n",(0,i.jsx)(n.h1,{id:"node-1",children:"Node-1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8545\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-2",children:"Node-2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8546\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-3",children:"Node-3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8547\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-4",children:"Node-4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"perm_addNodesToAllowlist","params":[["<EnodeNode1>","<EnodeNode2>","<EnodeNode3>","EnodeNode4"]], "id":1}\' http://127.0.0.1:8548\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The curl call is the same for each node except for the JSON-RPC endpoint."})}),"\n",(0,i.jsx)(n.h3,{id:"12-add-nodes-as-peers",children:"12. Add nodes as peers"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#admin_addpeer",children:(0,i.jsx)(n.code,{children:"admin_addPeer"})})," JSON-RPC API method to add Node-1 as a peer for Node-2, Node-3, and Node-4."]}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<EnodeNode1>"})," with the enode URL displayed when starting Node-1."]}),"\n",(0,i.jsx)(n.h1,{id:"node-2-1",children:"Node-2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8546\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-3-1",children:"Node-3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8547\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-4-1",children:"Node-4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode1>"],"id":1}\' http://127.0.0.1:8548\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"The curl call is the same for each node except for the JSON-RPC endpoint."})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<EnodeNode2>"})," with the enode URL displayed when starting Node-2."]}),"\n",(0,i.jsx)(n.h1,{id:"node-3-2",children:"Node-3"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8547\n'})}),"\n",(0,i.jsx)(n.h1,{id:"node-4-2",children:"Node-4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode2>"],"id":1}\' http://127.0.0.1:8548\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Replace ",(0,i.jsx)(n.code,{children:"<EnodeNode3>"})," with the enode URL displayed when starting Node-3."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"admin_addPeer","params":["<EnodeNode3>"],"id":1}\' http://127.0.0.1:8548\n'})}),"\n",(0,i.jsx)(n.h3,{id:"13-confirm-permissioned-network-is-working",children:"13. Confirm permissioned network is working"}),"\n",(0,i.jsx)(n.h4,{id:"check-peer-count",children:"Check peer count"}),"\n",(0,i.jsxs)(n.p,{children:["Use curl to call the JSON-RPC API ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#net_peercount",children:(0,i.jsx)(n.code,{children:"net_peerCount"})})," method and confirm the nodes are functioning as peers:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,i.jsx)(n.p,{children:"The result confirms Node-1 (the node running the JSON-RPC service) has three peers (Node-2, Node-3 and Node-4):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x3"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"send-a-transaction-from-an-account-in-the-allowlist",children:"Send a transaction from an account in the allowlist"}),"\n",(0,i.jsx)(n.p,{children:"Import the first account from the genesis file into MetaMask and send transactions, as described in [Quickstart tutorial]:"}),"\n",(0,i.jsx)(n.admonition,{title:"Account 1",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Address: ",(0,i.jsx)(n.code,{children:"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"})]}),"\n",(0,i.jsxs)(n.li,{children:["Private key : ",(0,i.jsx)(n.code,{children:"0x8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"})]}),"\n",(0,i.jsxs)(n.li,{children:["Initial balance : ",(0,i.jsx)(n.code,{children:"0xad78ebc5ac6200000"})," (200000000000000000000 in decimal)"]}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Besu doesn't support ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/send-transactions",children:"private key management"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"try-sending-a-transaction-from-an-account-not-in-the-accounts-allowlist",children:"Try sending a transaction from an account not in the accounts allowlist"}),"\n",(0,i.jsx)(n.p,{children:"Import the third account from the genesis file into MetaMask and try to send a transaction, as described in [Quickstart tutorial]:"}),"\n",(0,i.jsx)(n.admonition,{title:"Account 3",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Address: ",(0,i.jsx)(n.code,{children:"0xf17f52151EbEF6C7334FAD080c5704D77216b732"})]}),"\n",(0,i.jsxs)(n.li,{children:["Private key: ",(0,i.jsx)(n.code,{children:"0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"})]}),"\n",(0,i.jsxs)(n.li,{children:["Initial balance: ",(0,i.jsx)(n.code,{children:"0x90000000000000000000000"})," (2785365088392105618523029504 in decimal)"]}),"\n"]})}),"\n",(0,i.jsx)(n.h3,{id:"start-a-node-not-on-the-nodes-allowlist",children:"Start a node not on the nodes allowlist"}),"\n",(0,i.jsxs)(n.p,{children:["In your ",(0,i.jsx)(n.code,{children:"Permissioned-Network"})," directory, create a ",(0,i.jsx)(n.code,{children:"Node-5"})," directory and ",(0,i.jsx)(n.code,{children:"data"})," directory inside it."]}),"\n",(0,i.jsxs)(n.p,{children:["Change to the ",(0,i.jsx)(n.code,{children:"Node-5"})," directory and start Node-5 specifying the Node-1 enode URL as the bootnode:"]}),"\n",(0,i.jsx)(n.h1,{id:"macos-4",children:"MacOS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=../genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n'})}),"\n",(0,i.jsx)(n.h1,{id:"windows-4",children:"Windows"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --data-path=data --bootnodes="<EnodeNode1>" --genesis-file=..\\genesis.json --rpc-http-enabled --rpc-http-api=ADMIN,ETH,NET,PERM,IBFT --host-allowlist="*" --rpc-http-cors-origins="*" --p2p-port=30307 --rpc-http-port=8549\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Start another terminal and use curl to call the JSON-RPC API ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#net_peercount",children:(0,i.jsx)(n.code,{children:"net_peerCount"})})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":1}\' localhost:8549\n'})}),"\n",(0,i.jsx)(n.p,{children:"The result confirms Node-5 has no peers even though it specifies Node-1 as a bootnode:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x0"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"stop-nodes",children:"Stop nodes"}),"\n",(0,i.jsx)(n.p,{children:"When finished using the permissioned network, stop all nodes using ++ctrl+c++ in each terminal window."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To restart the permissioned network in the future, start from ",(0,i.jsx)(n.a,{href:"#7-start-node-1",children:"step 7"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},17273:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/EnodeStartup-145939e1c789c28e464db82faa0fb3ca.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var i=s(67294);const o={},r=i.createContext(o);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);