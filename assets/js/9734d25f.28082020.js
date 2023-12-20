"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[57784],{63860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const r={title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},o="Connect to a testnet",i={id:"public-networks/get-started/connect/testnet",title:"Connect to a testnet",description:"Run Besu as an execution client with any consensus client on the Goerli and Sepolia testnets.",source:"@site/versioned_docs/version-23.7.1/public-networks/get-started/connect/testnet.md",sourceDirName:"public-networks/get-started/connect",slug:"/public-networks/get-started/connect/testnet",permalink:"/23.7.1/public-networks/get-started/connect/testnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/get-started/connect/testnet.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"}],version:"23.7.1",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:3,frontMatter:{title:"Connect to a testnet",sidebar_position:3,Description:"How to connect to a testnet",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Connect to Mainnet",permalink:"/23.7.1/public-networks/get-started/connect/mainnet"},next:{title:"Migrate to Besu",permalink:"/23.7.1/public-networks/get-started/migrate-to-besu"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Generate the shared secret",id:"1-generate-the-shared-secret",level:3},{value:"2. Generate validator keys",id:"2-generate-validator-keys",level:3},{value:"3. Start Besu",id:"3-start-besu",level:3},{value:"4. Start the consensus client",id:"4-start-the-consensus-client",level:3},{value:"5. Wait for the clients to sync",id:"5-wait-for-the-clients-to-sync",level:3},{value:"6. Stake ETH",id:"6-stake-eth",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"connect-to-a-testnet",children:"Connect to a testnet"}),"\n",(0,s.jsxs)(t.p,{children:["Run Besu as an ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/concepts/the-merge#execution-clients",children:"execution client"})," with any consensus client on the ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/goerli",children:"Goerli"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia",children:"Sepolia"})," testnets."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're using ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"})," as a consensus client, you can follow the ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/tutorials/besu-teku-testnet",children:"Besu and Teku testnet tutorial"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Sepolia is a permissioned network and you can't run a validator client on it without ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"requesting to become a validator"})," first. You can connect your consensus client using the beacon node only, without any validator duties."]})}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/get-started/install/binary-distribution",children:"Besu installed"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["A consensus client installed. For example, ",(0,s.jsx)(t.a,{href:"https://docs.teku.consensys.net/en/latest/",children:"Teku"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(t.h3,{id:"1-generate-the-shared-secret",children:"1. Generate the shared secret"}),"\n",(0,s.jsx)(t.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You will specify ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," when starting Besu and the consensus client. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"2-generate-validator-keys",children:"2. Generate validator keys"}),"\n",(0,s.jsxs)(t.p,{children:["If you're running the consensus client as a beacon node only, skip to the ",(0,s.jsx)(t.a,{href:"#3-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you're also running the consensus client as a validator client, create a test Ethereum address (you can do this in ",(0,s.jsx)(t.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet",children:"MetaMask"}),"). Fund this address with testnet ETH (32 ETH and gas fees for each validator) using a faucet. See the list of ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/goerli#meta-data-g%C3%B6rli",children:"Goerli faucets"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/eth-clients/sepolia#meta-data-sepolia",children:"Sepolia faucets"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["If you can't get ETH using the faucet, you can ask for help on the ",(0,s.jsx)(t.a,{href:"https://discord.io/ethstaker",children:"EthStaker Discord"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Generate validator keys for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"Goerli Staking Launchpad"})," (or ",(0,s.jsx)(t.a,{href:"https://notes.ethereum.org/zvkfSmYnT0-uxwwEegbCqg",children:"request to become validator on Sepolia"}),")."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(t.code,{children:".txt"})," file. You should also have a ",(0,s.jsx)(t.code,{children:".json"})," file for each validator key pair."]})}),"\n",(0,s.jsx)(t.h3,{id:"3-start-besu",children:"3. Start Besu"}),"\n",(0,s.jsxs)(t.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/how-to/configuration-file",children:"configuration file"}),":"]}),"\n",(0,s.jsx)(t.h1,{id:"goerli",children:"Goerli"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=goerli            \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})}),"\n",(0,s.jsx)(t.h1,{id:"sepolia",children:"Sepolia"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'besu \\\n  --network=sepolia           \\\n  --rpc-http-enabled=true     \\\n  --rpc-http-host=0.0.0.0     \\\n  --rpc-http-cors-origins="*" \\\n  --rpc-ws-enabled=true       \\\n  --rpc-ws-host=0.0.0.0       \\\n  --host-allowlist="*"        \\\n  --engine-host-allowlist="*" \\\n  --engine-rpc-enabled        \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Specify the path to the ",(0,s.jsx)(t.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(t.a,{href:"#1-generate-the-shared-secret",children:"step 1"})," using the ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(t.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(t.p,{children:["You can modify the option values and add other ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(t.h3,{id:"4-start-the-consensus-client",children:"4. Start the consensus client"}),"\n",(0,s.jsx)(t.p,{children:"Refer to your consensus client documentation to configure and start the consensus client."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"If you're running a validator client, make sure you set a fee recipient address."})}),"\n",(0,s.jsxs)(t.p,{children:["If you're using Teku, follow the ",(0,s.jsx)(t.a,{href:"/23.7.1/public-networks/tutorials/besu-teku-testnet#5-start-teku",children:"Besu and Teku testnet tutorial"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"5-wait-for-the-clients-to-sync",children:"5. Wait for the clients to sync"}),"\n",(0,s.jsx)(t.p,{children:"After starting Besu and the consensus client, your node starts syncing and connecting to peers."}),"\n",(0,s.jsx)(t.h1,{id:"besu-logs",children:"Besu logs"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})}),"\n",(0,s.jsx)(t.h1,{id:"teku-logs",children:"Teku logs"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you're running the consensus client as a beacon node only, you're all set. If you're also running the consensus client as a validator client, ensure your clients are fully synced before submitting your staking deposit in the next step. This can take several days."}),"\n",(0,s.jsx)(t.h3,{id:"6-stake-eth",children:"6. Stake ETH"}),"\n",(0,s.jsxs)(t.p,{children:["Stake your testnet ETH for one or more validators using the ",(0,s.jsx)(t.a,{href:"https://goerli.launchpad.ethereum.org/",children:"Goerli Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(t.a,{href:"https://goerli.beaconcha.in/",children:"Goerli Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);