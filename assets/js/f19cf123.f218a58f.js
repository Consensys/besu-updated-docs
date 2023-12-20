"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[48194],{85484:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const n={title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network"},i="Use Sirato Blockchain Explorer",a={id:"private-networks/how-to/monitor/sirato-explorer",title:"Use Sirato Explorer",description:"Use Sirato Explorer on a privacy-enabled Besu network",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/monitor/sirato-explorer.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/sirato-explorer",permalink:"/23.4.0/private-networks/how-to/monitor/sirato-explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/monitor/sirato-explorer.md",tags:[],version:"23.4.0",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:7,frontMatter:{title:"Use Sirato Explorer",sidebar_position:7,description:"Use Sirato Explorer on a privacy-enabled Besu network"},sidebar:"privateDocSidebar",previous:{title:"Use OpenTelemetry",permalink:"/23.4.0/private-networks/how-to/monitor/opentelemetry"},next:{title:"Use EEA-compliant privacy",permalink:"/23.4.0/private-networks/how-to/use-privacy/eea-compliant"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start Sirato",id:"start-sirato",level:2},{value:"Use Sirato",id:"use-sirato",level:2},{value:"Stop Sirato",id:"stop-sirato",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"use-sirato-blockchain-explorer",children:"Use Sirato Blockchain Explorer"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://www.web3labs.com/sirato",children:"Sirato Blockchain Explorer"})," supports public and private EVM networks. This page describes how to use the free version of Sirato with its built-in support for ",(0,r.jsx)(o.a,{href:"/23.4.0/private-networks/concepts/privacy/",children:"privacy-enabled"})," Besu networks created using the ",(0,r.jsx)(o.a,{href:"/23.4.0/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Sirato provides an overview of the entire network, including block information, contract metadata, transaction searches, and ",(0,r.jsx)(o.a,{href:"https://medium.com/web3labs/epirus-ethereum-saas-blockchain-explorer-d5d961717d15",children:"more"}),"."]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["You must connect to one of the privacy nodes (for example, ",(0,r.jsx)(o.code,{children:"member1besu"}),"), not the dedicated RPC, in order to allow access for Besu ",(0,r.jsx)(o.a,{href:"/23.4.0/private-networks/reference/api/#priv-methods",children:"privacy API methods"}),". In production networks, you must ",(0,r.jsx)(o.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate",children:"secure access"})," to RPC nodes."]})}),"\n",(0,r.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"https://docs.docker.com/compose/install/",children:"Docker and Docker Compose"})," installed."]}),"\n",(0,r.jsx)(o.h2,{id:"start-sirato",children:"Start Sirato"}),"\n",(0,r.jsxs)(o.p,{children:["Clone the ",(0,r.jsx)(o.a,{href:"https://github.com/web3labs/sirato-free",children:"Sirato GitHub repository"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"git clone https://github.com/web3labs/sirato-free\n"})}),"\n",(0,r.jsx)(o.p,{children:"The repository contains Docker Compose scripts to allow Sirato to start with a Developer Quickstart test network."}),"\n",(0,r.jsx)(o.p,{children:"From the Sirato directory, run the following script:"}),"\n",(0,r.jsx)(o.h1,{id:"command",children:"Command"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"./start_sirato_besu.sh\n"})}),"\n",(0,r.jsx)(o.h1,{id:"result",children:"Result"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"*************************************\nSirator Explorer for Besu\n*************************************\nStarting explorer\n--------------------\n[+] Running 5/5\n  \u283f Container docker-compose-mongodb-1    Started                                                                                                                    3.3s\n  \u283f Container docker-compose-api-1        Started                                                                                                                    4.1s\n  \u283f Container docker-compose-ingestion-1  Started                                                                                                                    4.2s\n  \u283f Container docker-compose-web-1        Started                                                                                                                    4.4s\n  \u283f Container docker-compose-nginx-1      Started                                                                                                                    5.0s\n----------------------------------\nServices\n----------------------------------\nSirato explorer HTTP endpoint                 : http://localhost:260012\nSirato is connected to node                   : http://rpcnode:8545\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Open ",(0,r.jsx)(o.code,{children:"http://localhost/"})," on your browser. You\u2019ll see the new initialization page while it boots up. This may take 5\u201310 minutes for the all services to start and the ingestion sync to complete."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Sirato-dashboard",src:t(63161).Z+"",width:"2316",height:"1144"})}),"\n",(0,r.jsx)(o.h2,{id:"use-sirato",children:"Use Sirato"}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"Dashboard"})," page provides an aggregated view of network activities."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Epirus-dashboard",src:t(76391).Z+"",width:"2846",height:"1900"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"Network"})," page provides an overview of the network status and connected peers. This page is disabled by default, and is only visible if you set ",(0,r.jsx)(o.code,{children:"DISPLAY_NETWOR_TAB=enabled"})," using the following command:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"NODE_ENDPOINT=http://member1besu:8545 DISPLAY_NETWORK_TAB=enabled docker-compose -f docker-compose.yml -f sirato-extensions/docker-compose-quorum-dev-quickstart.yml up\n"})}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Sirato network",src:t(86137).Z+"",width:"3106",height:"1944"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"Blocks"})," page shows a real-time view of the finalized blocks."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Sirato blocks",src:t(8776).Z+"",width:"2904",height:"1854"})}),"\n",(0,r.jsx)(o.p,{children:"You can view a given block details by selecting a block hash or number."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Sirato block details",src:t(5709).Z+"",width:"2960",height:"1944"})}),"\n",(0,r.jsxs)(o.p,{children:["The ",(0,r.jsx)(o.strong,{children:"Transactions"})," page shows a paginated view of new and historical transactions."]}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Sirato transactions",src:t(699).Z+"",width:"2936",height:"1854"})}),"\n",(0,r.jsx)(o.h2,{id:"stop-sirato",children:"Stop Sirato"}),"\n",(0,r.jsx)(o.p,{children:"To stop all the services from running, run the following script:"}),"\n",(0,r.jsx)(o.h1,{id:"command-1",children:"Command"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"./stop.sh\n"})}),"\n",(0,r.jsx)(o.h1,{id:"result-1",children:"Result"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"*************************************\nSirator Explorer for Besu\n*************************************\nStopping explorer\n[+] Running 5/5\n  \u283f Container docker-compose-nginx-1      Stopped                                                                                                                    0.5s\n  \u283f Container docker-compose-ingestion-1  Stopped                                                                                                                    4.0s\n  \u283f Container docker-compose-web-1        Stopped                                                                                                                   10.3s\n  \u283f Container docker-compose-api-1        Stopped                                                                                                                    2.9s\n  \u283f Container docker-compose-mongodb-1    Stopped\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5709:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-block-details-4fe39667ff79ffe0115f5a48c0a8e294.png"},8776:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-blocks-472b43066248113ec3f16c92ebc7e196.png"},76391:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-dashboard-9171fbc2c387e54bea3707d0b8a2337e.png"},63161:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-loading-b52fbd8dfeeeaef0a86f8af0cbf97052.png"},86137:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-network-5929621eb2498f7eb4c162c465792700.png"},699:(e,o,t)=>{t.d(o,{Z:()=>r});const r=t.p+"assets/images/sirato-transactions-2c65c5f45b56e8fcad9ce2e639b3b459.png"},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>i});var r=t(67294);const s={},n=r.createContext(s);function i(e){const o=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:o},e.children)}}}]);