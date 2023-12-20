"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[4365],{70072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=t(85893),r=t(11151),a=t(74866),o=t(85162);const l={title:"Run Besu and Teku on Mainnet",sidebar_position:1,description:"Run Besu and Teku on Ethereum Mainnet.",tags:["public networks"]},i="Run Besu and Teku on Mainnet",c={id:"public-networks/tutorials/besu-teku-mainnet",title:"Run Besu and Teku on Mainnet",description:"Run Besu and Teku on Ethereum Mainnet.",source:"@site/docs/public-networks/tutorials/besu-teku-mainnet.md",sourceDirName:"public-networks/tutorials",slug:"/public-networks/tutorials/besu-teku-mainnet",permalink:"/development/public-networks/tutorials/besu-teku-mainnet",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/tutorials/besu-teku-mainnet.md",tags:[{label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Run Besu and Teku on Mainnet",sidebar_position:1,description:"Run Besu and Teku on Ethereum Mainnet.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Tutorials",permalink:"/development/public-networks/tutorials"},next:{title:"Run Besu and Teku on a testnet",permalink:"/development/public-networks/tutorials/besu-teku-testnet"}},d={},u=[{value:"1. Install Besu and Teku",id:"1-install-besu-and-teku",level:2},{value:"2. Generate the shared secret",id:"2-generate-the-shared-secret",level:2},{value:"3. Generate validator keys",id:"3-generate-validator-keys",level:2},{value:"4. Start Besu",id:"4-start-besu",level:2},{value:"5. Start Teku",id:"5-start-teku",level:2},{value:"Beacon node only",id:"beacon-node-only",level:3},{value:"Beacon node and validator client",id:"beacon-node-and-validator-client",level:3},{value:"6. Wait for Besu and Teku to sync",id:"6-wait-for-besu-and-teku-to-sync",level:2},{value:"7. Stake ETH",id:"7-stake-eth",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"run-besu-and-teku-on-mainnet",children:"Run Besu and Teku on Mainnet"}),"\n",(0,s.jsxs)(n.p,{children:["Run Besu as an ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/the-merge#execution-clients",children:"execution client"})," and ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/",children:"Teku"})," as a ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/the-merge#consensus-clients",children:"consensus client"})," on Ethereum Mainnet."]}),"\n",(0,s.jsx)(n.h2,{id:"1-install-besu-and-teku",children:"1. Install Besu and Teku"}),"\n",(0,s.jsxs)(n.p,{children:["Install ",(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/install/binary-distribution",children:"Besu"})," and ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/HowTo/Get-Started/Installation-Options/Install-Binaries/",children:"Teku"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Ensure you meet the prerequisites for the installation option you use. For example, you must have Java 17+ if using the Besu and Teku binary distributions."}),"\n",(0,s.jsxs)(n.p,{children:["Ensure you meet the ",(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/system-requirements",children:"system requirements for Besu on public networks"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"2-generate-the-shared-secret",children:"2. Generate the shared secret"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'openssl rand -hex 32 | tr -d "\\n" > jwtsecret.hex\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You will specify ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," when starting Besu and Teku. This is a shared JWT secret the clients use to authenticate each other when using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/how-to/use-engine-api",children:"Engine API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"3-generate-validator-keys",children:"3. Generate validator keys"}),"\n",(0,s.jsxs)(n.p,{children:["If you're running Teku as a beacon node only, skip to the ",(0,s.jsx)(n.a,{href:"#4-start-besu",children:"next step"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you're also running Teku as a validator client, have a funded Ethereum address ready (32 ETH and gas fees for each validator)."}),"\n",(0,s.jsxs)(n.p,{children:["Generate validator keys and stake your ETH for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Save the password you use to generate each key pair in a ",(0,s.jsx)(n.code,{children:".txt"})," file."]}),(0,s.jsxs)(n.p,{children:["You should also have a ",(0,s.jsx)(n.code,{children:".json"})," file for each validator key pair."]})]}),"\n",(0,s.jsx)(n.h2,{id:"4-start-besu",children:"4. Start Besu"}),"\n",(0,s.jsxs)(n.p,{children:["Run the following command or specify the options in a ",(0,s.jsx)(n.a,{href:"/development/public-networks/how-to/configuration-file",children:"configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'besu \\\n  --sync-mode=X_SNAP           \\\n  --data-storage-format=BONSAI \\\n  --rpc-http-enabled=true      \\\n  --rpc-http-host="0.0.0.0"    \\\n  --rpc-ws-enabled=true        \\\n  --rpc-ws-host="0.0.0.0"      \\\n  --host-allowlist=<IP of Besu node>,127.0.0.1,localhost        \\\n  --engine-host-allowlist=<IP of Besu node>,127.0.0.1,localhost \\\n  --engine-rpc-enabled         \\\n  --engine-jwt-secret=<path to jwtsecret.hex>\n'})}),"\n",(0,s.jsx)(n.p,{children:"Specify:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The path to the ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(n.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(n.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The IP address of your Besu node using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#host-allowlist",children:(0,s.jsx)(n.code,{children:"--host-allowlist"})})," and ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#engine-host-allowlist",children:(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})})," options."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also, in the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#sync-mode",children:(0,s.jsx)(n.code,{children:"--sync-mode"})})," specifies using ",(0,s.jsx)(n.a,{href:"/development/public-networks/get-started/connect/sync-node#snap-synchronization",children:"snap sync"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#data-storage-format",children:(0,s.jsx)(n.code,{children:"--data-storage-format"})})," specifies using ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-http-enabled"})})," enables the HTTP JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-http-host",children:(0,s.jsx)(n.code,{children:"--rpc-http-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,s.jsx)(n.code,{children:"--rpc-ws-enabled"})})," enables the WebSocket JSON-RPC service."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#rpc-ws-host",children:(0,s.jsx)(n.code,{children:"--rpc-ws-host"})})," is set to ",(0,s.jsx)(n.code,{children:"0.0.0.0"})," to allow remote RPC connections."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options#engine-rpc-enabled",children:(0,s.jsx)(n.code,{children:"--engine-rpc-enabled"})})," enables the ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/engine-api/",children:"Engine API"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the option values and add other ",(0,s.jsx)(n.a,{href:"/development/public-networks/reference/cli/options",children:"command line options"})," as needed."]}),"\n",(0,s.jsx)(n.h2,{id:"5-start-teku",children:"5. Start Teku"}),"\n",(0,s.jsx)(n.p,{children:"Open a new terminal window."}),"\n",(0,s.jsx)(n.h3,{id:"beacon-node-only",children:"Beacon node only"}),"\n",(0,s.jsxs)(n.p,{children:["To run Teku as a beacon node only (without validator duties), run the following command or specify the options in the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/",children:"Teku configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"teku \\\n  --ee-endpoint=http://localhost:8551          \\\n  --ee-jwt-secret-file=<path to jwtsecret.hex> \\\n  --metrics-enabled=true                       \\\n  --rest-api-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Specify the path to the ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(n.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file",children:(0,s.jsx)(n.code,{children:"--ee-jwt-secret-file"})})," option."]}),"\n",(0,s.jsx)(n.p,{children:"Also, in the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-endpoint",children:(0,s.jsx)(n.code,{children:"--ee-endpoint"})})," is set to the default URL of Besu's Engine API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#metrics-enabled",children:(0,s.jsx)(n.code,{children:"--metrics-enabled"})})," enables Teku's metrics exporter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#rest-api-enabled",children:(0,s.jsx)(n.code,{children:"--rest-api-enabled"})})," enables Teku's REST API service."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the option values and add other ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/",children:"Teku command line options"})," as needed."]}),"\n",(0,s.jsx)(n.h3,{id:"beacon-node-and-validator-client",children:"Beacon node and validator client"}),"\n",(0,s.jsxs)(n.p,{children:["To run Teku as a beacon node and validator in a single process, run the following command or specify the options in the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/HowTo/Configure/Use-Configuration-File/",children:"Teku configuration file"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"teku \\\n  --ee-endpoint http://localhost:8551                       \\\n  --ee-jwt-secret-file <path to jwtsecret.hex>              \\\n  --metrics-enabled=true                                    \\\n  --rest-api-enabled=true                                   \\\n  --validators-proposer-default-fee-recipient=<ETH address> \\\n  --validator-keys=<path to key file>:<path to password file>[,<path to key file>:<path to password file>,...]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Specify:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The path to the ",(0,s.jsx)(n.code,{children:"jwtsecret.hex"})," file generated in ",(0,s.jsx)(n.a,{href:"#2-generate-the-shared-secret",children:"step 2"})," using the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-jwt-secret-file",children:(0,s.jsx)(n.code,{children:"--ee-jwt-secret-file"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["An Ethereum address you own as the default fee recipient using the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validators-proposer-default-fee-recipient",children:(0,s.jsx)(n.code,{children:"--validators-proposer-default-fee-recipient"})})," option."]}),"\n",(0,s.jsxs)(n.li,{children:["The paths to the keystore ",(0,s.jsx)(n.code,{children:".json"})," file and password ",(0,s.jsx)(n.code,{children:".txt"})," file created in ",(0,s.jsx)(n.a,{href:"#3-generate-validator-keys",children:"step 3"})," for each validator using the ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#validator-keys",children:(0,s.jsx)(n.code,{children:"--validator-keys"})})," option. Separate the ",(0,s.jsx)(n.code,{children:".json"})," and ",(0,s.jsx)(n.code,{children:".txt"})," files with a colon, and separate entries for multiple validators with commas."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Also, in the command:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#ee-endpoint",children:(0,s.jsx)(n.code,{children:"--ee-endpoint"})})," is set to the default URL of Besu's Engine API."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#metrics-enabled",children:(0,s.jsx)(n.code,{children:"--metrics-enabled"})})," enables Teku's metrics exporter."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/#rest-api-enabled",children:(0,s.jsx)(n.code,{children:"--rest-api-enabled"})})," enables Teku's REST API service."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can modify the option values and add other ",(0,s.jsx)(n.a,{href:"https://docs.teku.consensys.net/Reference/CLI/CLI-Syntax/",children:"Teku command line options"})," as needed."]}),"\n",(0,s.jsx)(n.h2,{id:"6-wait-for-besu-and-teku-to-sync",children:"6. Wait for Besu and Teku to sync"}),"\n",(0,s.jsx)(n.p,{children:"After starting Besu and Teku, your node starts syncing and connecting to peers."}),"\n",(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(o.Z,{value:"Besu logs",label:"Besu logs",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"@timestamp":"2023-02-03T04:43:49,555","level":"INFO","thread":"main","class":"DefaultSynchronizer","message":"Starting synchronizer.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,556","level":"INFO","thread":"main","class":"FastSyncDownloader","message":"Starting sync","throwable":""}\n{"@timestamp":"2023-02-03T04:43:49,559","level":"INFO","thread":"main","class":"Runner","message":"Ethereum main loop is up.","throwable":""}\n{"@timestamp":"2023-02-03T04:43:53,106","level":"INFO","thread":"Timer-0","class":"DNSResolver","message":"Resolved 2409 nodes","throwable":""}\n{"@timestamp":"2023-02-03T04:45:04,803","level":"INFO","thread":"nioEventLoopGroup-3-10","class":"SnapWorldStateDownloader","message":"Downloading world state from peers for pivot block 16545859 (0x616ae3c4cf85f95a9bce2814a7282d75dc2eac36\ncb9f0fcc6f16386df70da3c5). State root 0xa7114541f42c62a72c8b6bb9901c2ccf4b424cd7f76570a67b82a183b02f25dc pending requests 0","throwable":""}\n{"@timestamp":"2023-02-03T04:46:04,834","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.08%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:48:01,840","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.23%, Peer count: 8","throwable":""}\n{"@timestamp":"2023-02-03T04:49:09,931","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.41%, Peer count: 11","throwable":""}\n{"@timestamp":"2023-02-03T04:50:12,466","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.61%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:20,977","level":"INFO","thread":"EthScheduler-Services-3 (batchPersistAccountData)","class":"SnapsyncMetricsManager","message":"Worldstate download progress: 0.75%, Peer count: 10","throwable":""}\n{"@timestamp":"2023-02-03T04:51:28,985","level":"INFO","thread":"EthScheduler-Services-29 (importBlock)","class":"FastImportBlocksStep","message":"Block import progress: 180400 of 16545859 (1%)","throwable":""}\n'})})}),(0,s.jsx)(o.Z,{value:"Teku logs",label:"Teku logs",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"2022-03-21 20:43:24.355 INFO  - Syncing     *** Target slot: 76092, Head slot: 2680, Remaining slots: 73412, Connected peers: 8\n2022-03-21 20:43:36.363 INFO  - Syncing     *** Target slot: 76093, Head slot: 2879, Remaining slots: 73214, Connected peers: 10\n2022-03-21 20:43:48.327 INFO  - Syncing     *** Target slot: 76094, Head slot: 3080, Remaining slots: 73014, Connected peers: 8\n2022-03-21 20:44:00.339 INFO  - Syncing     *** Target slot: 76095, Head slot: 3317, Remaining slots: 72778, Connected peers: 6\n2022-03-21 20:44:12.353 INFO  - Syncing     *** Target slot: 76096, Head slot: 3519, Remaining slots: 72577, Connected peers: 9\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"If you're running Teku as a beacon node only, you're all set. If you're also running Teku as a validator client, ensure Besu and Teku are fully synced before submitting your staking deposit in the next step. Syncing Besu can take several days."}),"\n",(0,s.jsx)(n.h2,{id:"7-stake-eth",children:"7. Stake ETH"}),"\n",(0,s.jsxs)(n.p,{children:["Stake your ETH for one or more validators using the ",(0,s.jsx)(n.a,{href:"https://launchpad.ethereum.org/en/",children:"Staking Launchpad"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can check your validator status by searching your Ethereum address on the ",(0,s.jsx)(n.a,{href:"https://beaconcha.in/",children:"Beacon Chain explorer"}),". It may take up to multiple days for your validator to be activated and start proposing blocks."]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var s=t(36905);const r={tabItem:"tabItem_Ymn6"};var a=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(67294),r=t(36905),a=t(12466),o=t(16550),l=t(20469),i=t(91980),c=t(67392),d=t(50012);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,u]=f({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function g(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==s&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(k,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var s=t(67294);const r={},a=s.createContext(r);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);