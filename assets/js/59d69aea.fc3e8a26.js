"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50306],{32525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(85893),r=t(11151);const o={title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet"},i="Connect to Mainnet",a={id:"public-networks/get-started/connect/mainnet",title:"Connect to Mainnet",description:"How to connect to Mainnet",source:"@site/versioned_docs/version-23.4.0/public-networks/get-started/connect/mainnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/mainnet",permalink:"/23.4.0/public-networks/get-started/connect/mainnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/get-started/connect/mainnet.md",tags:[],version:"23.4.0",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Connect to Mainnet",sidebar_position:2,description:"How to connect to Mainnet"},sidebar:"publicDocSidebar",previous:{title:"Sync Besu",permalink:"/23.4.0/public-networks/get-started/connect/sync-node"},next:{title:"Connect to a testnet",permalink:"/23.4.0/public-networks/get-started/connect/testnet"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"connect-to-mainnet",children:"Connect to Mainnet"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/the-merge",children:"The Merge"})," was executed on ",(0,s.jsx)(n.strong,{children:"September 15, 2022"}),". Ethereum is now a ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/proof-of-stake/",children:"proof of stake"})," network, and a full Ethereum node requires both ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"an execution client and a consensus client"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Run Besu as an ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/the-merge#execution-clients",children:"execution client"})," with any consensus client on Ethereum Mainnet."]}),"\n",(0,s.jsxs)(n.p,{children:["If you're using ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/stable/",children:"Teku"})," as a consensus client, you can follow the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/tutorials/besu-teku-mainnet",children:"Besu and Teku Mainnet tutorial"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/get-started/install/binary-distribution",children:"Besu installed"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["A consensus client installed. For example, ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-generate-the-shared-secret",children:"1. Generate the shared secret"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will specify ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"2-generate-validator-keys",children:"2. Generate validator keys"}),"\n",(0,s.jsxs)(n.p,{children:["If you're running the consensus client as a beacon node only, skip to the ",(0,s.jsx)(n.a,{href:"#3-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you're also running the consensus client as a validator client, have a funded Ethereum address ready (32 ETH and gas fees for each validator)."}),"\n",(0,s.jsxs)(n.p,{children:["Generate validator keys for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(n.code,{children:".txt"})," file. You should also have a ",(0,s.jsx)(n.code,{children:".json"})," file for each validator key pair."]})}),"\n",(0,s.jsx)(n.h3,{id:"3-start-besu",children:"3. Start Besu"}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/configuration-file",children:"configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu \\\n  --sync-mode=X_SNAP           \\\n  --data-storage-format=BONSAI \\\n  --rpc-http-enabled=true      \\\n  --rpc-http-host=0.0.0.0      \\\n  --rpc-ws-enabled=true        \\\n  --rpc-ws-host=0.0.0.0        \\\n  --host-allowlist=<IP of Besu node>,127.0.0.1,localhost        \\\n  --engine-host-allowlist=<IP of Besu node>,127.0.0.1,localhost \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Specify:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The path to the ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(n.a,{href:"#1-generate-the-shared-secret",children:"step 1"})," using the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(n.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The IP address of your Besu node using the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," and ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#engine-host-allowlist",children:(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})})," options."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also, in the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#sync-mode",children:(0,s.jsx)(n.code,{children:"--sync-mode"})})," specifies using ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/get-started/connect/sync-node#snap-synchronization",children:"snap sync"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#data-storage-format",children:(0,s.jsx)(n.code,{children:"--data-storage-format"})})," specifies using ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," enables the HTTP JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-host",children:(0,s.jsx)(n.code,{children:"--rpc-http-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-ws-enabled"})})," enables the WebSocket JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-host",children:(0,s.jsx)(n.code,{children:"--rpc-ws-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#engine-rpc-enabled",children:(0,s.jsx)(n.code,{children:"--engine-rpc-enabled"})})," enables the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/engine-api/",children:"Engine API"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the option values and add other ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(n.h3,{id:"4-start-the-consensus-client",children:"4. Start the consensus client"}),"\n",(0,s.jsx)(n.p,{children:"Refer to your consensus client documentation to configure and start the consensus client."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"If you're running a validator client, make sure you set a fee recipient address."})}),"\n",(0,s.jsxs)(n.p,{children:["If you're using Teku, follow the ",(0,s.jsx)(n.a,{href:"/23.4.0/public-networks/tutorials/besu-teku-mainnet#5-start-teku",children:"Besu and Teku Mainnet tutorial"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"5-wait-for-the-clients-to-sync",children:"5. Wait for the clients to sync"}),"\n",(0,s.jsx)(n.p,{children:"After starting Besu and the consensus client, your node starts syncing and connecting to peers."}),"\n",(0,s.jsx)(n.h1,{id:"besu-logs",children:"Besu logs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})}),"\n",(0,s.jsx)(n.h1,{id:"teku-logs",children:"Teku logs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."}),"\n",(0,s.jsx)(n.h3,{id:"6-stake-eth",children:"6. Stake ETH"}),"\n",(0,s.jsxs)(n.p,{children:["Stake your ETH for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(n.a,{href:"https://beaconcha.in/",children:"Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(67294);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);