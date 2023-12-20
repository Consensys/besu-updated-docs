"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[31223],{77958:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(85893),i=s(11151);const o={title:"Use Chainlens Explorer",sidebar_position:7,description:"Use Chainlens Explorer on a privacy-enabled Besu network",tags:["private networks"]},r="Use Chainlens Blockchain Explorer",a={id:"private-networks/how-to/monitor/chainlens",title:"Use Chainlens Explorer",description:"Use Chainlens Explorer on a privacy-enabled Besu network",source:"@site/versioned_docs/version-23.10.1/private-networks/how-to/monitor/chainlens.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/chainlens",permalink:"/23.10.1/private-networks/how-to/monitor/chainlens",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/how-to/monitor/chainlens.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1703060726,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:7,frontMatter:{title:"Use Chainlens Explorer",sidebar_position:7,description:"Use Chainlens Explorer on a privacy-enabled Besu network",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use OpenTelemetry",permalink:"/23.10.1/private-networks/how-to/monitor/opentelemetry"},next:{title:"Use EEA-compliant privacy",permalink:"/23.10.1/private-networks/how-to/use-privacy/eea-compliant"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Start Chainlens",id:"start-chainlens",level:2},{value:"View on Chainlens",id:"view-on-chainlens",level:2},{value:"Stop Chainlens",id:"stop-chainlens",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-chainlens-blockchain-explorer",children:"Use Chainlens Blockchain Explorer"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://chainlens.com/",children:"Chainlens Blockchain Explorer"})," supports public and private EVM networks.\nThis page describes how to use the free version of Chainlens with its built-in support for\n",(0,t.jsx)(n.a,{href:"/23.10.1/private-networks/concepts/privacy/",children:"privacy-enabled"})," Besu networks created using the\n",(0,t.jsx)(n.a,{href:"/23.10.1/private-networks/tutorials/quickstart",children:"Developer Quickstart"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Chainlens provides an overview of the entire network, including block information, contract\nmetadata, transaction searches, and ",(0,t.jsx)(n.a,{href:"https://chainlens.com/",children:"more"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["You must connect to one of the privacy nodes (for example, ",(0,t.jsx)(n.code,{children:"member1besu"}),"), not the dedicated RPC, to\nallow access for Besu ",(0,t.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#priv-methods",children:"privacy API methods"}),".\nIn production networks, you must ",(0,t.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/use-besu-api/authenticate",children:"secure access"}),"\nto RPC nodes."]})}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker and Docker Compose"})," installed."]}),"\n",(0,t.jsx)(n.h2,{id:"start-chainlens",children:"Start Chainlens"}),"\n",(0,t.jsxs)(n.p,{children:["Clone the ",(0,t.jsx)(n.a,{href:"https://github.com/web3labs/chainlens-free",children:"Chainlens GitHub repository"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/web3labs/chainlens-free\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The repository contains a ",(0,t.jsx)(n.code,{children:"docker-compose"})," directory to allow Chainlens to start with a Developer\nQuickstart test network.\nFrom the ",(0,t.jsx)(n.code,{children:"docker-compose"})," directory, run the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_ENDPOINT=http://rpcnode:8545 docker-compose -f docker-compose.yml -f chainlens-extensions/docker-compose-quorum-dev-quickstart.yml up\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command does two things:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sets up the node endpoint"}),"\n",(0,t.jsx)(n.li,{children:"Tells Docker to run by using the two Docker Compose files provided"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The first ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file in the command contains all the services required for Chainlens."]}),"\n",(0,t.jsxs)(n.p,{children:["The second file named ",(0,t.jsx)(n.code,{children:"docker-compose-quorum-dev-quickstart"})," contains the network settings required to start\nChainlens on the same network as the Besu development node."]}),"\n",(0,t.jsxs)(n.p,{children:["Next, open ",(0,t.jsx)(n.code,{children:"http://localhost/"})," on your browser.\nYou\u2019ll see the new initialization page while it boots up.\nThis may take 5\u201310 minutes for the all services to start and the ingestion sync to complete."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens_loading",src:s(34859).Z+"",width:"2432",height:"1308"})}),"\n",(0,t.jsx)(n.h2,{id:"view-on-chainlens",children:"View on Chainlens"}),"\n",(0,t.jsx)(n.p,{children:"After starting Chainlens, you can view information about your network."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Screenshots in this section are taken from the ",(0,t.jsx)(n.a,{href:"https://goerli.chainlens.com/dashboard",children:"Chainlens Goerli network"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Dashboard"})," page provides an aggregated view of network activities."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens_dashboard",src:s(55958).Z+"",width:"2860",height:"1906"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Network"})," page provides an overview of the network status and connected peers.\nThis page is disabled by default, and is only visible if you set ",(0,t.jsx)(n.code,{children:"DISPLAY_NETWOR_TAB=enabled"})," using\nthe following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"NODE_ENDPOINT=http://member1besu:8545 DISPLAY_NETWORK_TAB=enabled docker-compose -f docker-compose.yml -f chainlens-extensions/docker-compose-quorum-dev-quickstart.yml up\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Blocks"})," page shows a real-time view of the finalized blocks."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens blocks",src:s(48106).Z+"",width:"2692",height:"1920"})}),"\n",(0,t.jsx)(n.p,{children:"You can view a given block details by selecting a block hash or number."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens block details",src:s(54403).Z+"",width:"2608",height:"1924"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Transactions"})," page shows a paginated view of new and historical transactions."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens transactions",src:s(79079).Z+"",width:"2766",height:"1922"})}),"\n",(0,t.jsxs)(n.p,{children:["If you select any transaction hash, you can get the ",(0,t.jsx)(n.strong,{children:"transaction details."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens transaction_details",src:s(81482).Z+"",width:"4166",height:"3206"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Contracts"})," page shows all the smart contracts deployed on the network."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens contracts",src:s(76741).Z+"",width:"2844",height:"1924"})}),"\n",(0,t.jsx)(n.p,{children:"You can view a smart contract details by selecting the contract address."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens contract details",src:s(23714).Z+"",width:"2706",height:"1918"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Events"})," page shows all the events generated on the network."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Chainlens events",src:s(20114).Z+"",width:"4264",height:"3204"})}),"\n",(0,t.jsx)(n.h2,{id:"stop-chainlens",children:"Stop Chainlens"}),"\n",(0,t.jsx)(n.p,{children:"To stop all the services from running, run the following command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},54403:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-block-details-df6e36c4bd72ce823087f9faf9470d4c.png"},48106:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-block-42b56c10be9794c4f7fa59148d876ae1.png"},23714:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-contract-details-aa987d5cb4567c531b027d594b7102d8.png"},76741:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-contracts-1070acb58fc0b4c26e5244e1a0de2467.png"},55958:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-dashboard-0a9dc4f45e20c2d0e82a40a62185776e.png"},20114:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-events-a72036c7a41af2abc3e7158fc65e95b1.png"},34859:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-loading-6892fc684a7239dcf9bc2d70d0ec7b40.png"},81482:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-transaction-details-2f78a8932e911d945bd54740e2d43ec2.png"},79079:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/chainlens-transactions-23e6efc701865a9616ed778d5deb6b2f.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>r});var t=s(67294);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);