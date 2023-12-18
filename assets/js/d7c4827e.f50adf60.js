"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[23470],{89460:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var s=n(85893),o=n(11151);const i={sidebar_position:4,title:"Use Ethstats network monitor",description:"Ethstats network monitor",tags:["private networks"]},r="Connect to Ethstats network monitor",a={id:"private-networks/how-to/deploy/ethstats",title:"Use Ethstats network monitor",description:"Ethstats network monitor",source:"@site/versioned_docs/version-23.10.1/private-networks/how-to/deploy/ethstats.md",sourceDirName:"private-networks/how-to/deploy",slug:"/private-networks/how-to/deploy/ethstats",permalink:"/23.10.1/private-networks/how-to/deploy/ethstats",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/how-to/deploy/ethstats.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1702875753,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Use Ethstats network monitor",description:"Ethstats network monitor",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Kubernetes",permalink:"/23.10.1/private-networks/how-to/deploy/kubernetes"},next:{title:"Backup and restore",permalink:"/23.10.1/private-networks/how-to/backup"}},c={},h=[{value:"Components",id:"components",level:2},{value:"Statistics",id:"statistics",level:2},{value:"Connect through a client and server",id:"connect-through-a-client-and-server",level:2},{value:"Connect through the command line",id:"connect-through-the-command-line",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"connect-to-ethstats-network-monitor",children:"Connect to Ethstats network monitor"}),"\n",(0,s.jsxs)(e.p,{children:["Connect to ",(0,s.jsx)(e.a,{href:"https://ethstats.dev",children:"Ethstats"})," to display real time and historical ",(0,s.jsx)(e.a,{href:"#statistics",children:"statistics"})," about the network and nodes. You can connect to the Ethstats dashboard by ",(0,s.jsx)(e.a,{href:"#connect-through-a-client-and-server",children:"connecting to a client and server"})," or by ",(0,s.jsx)(e.a,{href:"#connect-through-the-command-line",children:"connecting through the command line"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(e.p,{children:"Ethstats consists of:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["A ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-server",children:"server"}),", which consumes node data received from the client."]}),"\n",(0,s.jsxs)(e.li,{children:["A ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-client",children:"client"}),", which extracts data from the node and sends it to the server."]}),"\n",(0,s.jsxs)(e.li,{children:["A ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-client#available-dashboards",children:"dashboard"}),", which displays statistics."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"statistics",children:"Statistics"}),"\n",(0,s.jsx)(e.p,{children:"Statistics displayed by Ethstats include:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Nodes in the network. Metrics for nodes include:","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Information about the last received block such as block number, block hash, transaction count, uncle count, block time, and propagation time."}),"\n",(0,s.jsx)(e.li,{children:"Connected peers, whether the node is mining, hash rate, latency, and uptime."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"Charts for block time, block difficulty, block gas limit, block uncles, block transactions, block gas used, block propagation histogram, and top miners."}),"\n",(0,s.jsx)(e.li,{children:"IP-based geolocation overview."}),"\n",(0,s.jsx)(e.li,{children:"Node logs, which display the data sent by a node."}),"\n",(0,s.jsx)(e.li,{children:"Block history, which provides the ability to go back in time and playback the block propagation through the nodes."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"connect-through-a-client-and-server",children:"Connect through a client and server"}),"\n",(0,s.jsxs)(e.p,{children:["Refer to the external ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-client",children:"Ethstats client"})," and ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-server",children:"Ethstats server"})," documentation for installing those components and connecting to a dashboard."]}),"\n",(0,s.jsx)(e.h2,{id:"connect-through-the-command-line",children:"Connect through the command line"}),"\n",(0,s.jsxs)(e.p,{children:["You can use command line options to connect a node directly to a ",(0,s.jsx)(e.a,{href:"https://github.com/goerli/ethstats-client#available-dashboards",children:"dashboard"}),", without using a client."]}),"\n",(0,s.jsxs)(e.p,{children:["Start a node using the ",(0,s.jsx)(e.a,{href:"/23.10.1/public-networks/reference/cli/options#ethstats",children:(0,s.jsx)(e.code,{children:"--ethstats"})})," option to specify the Ethstats server URL. You can specify a contact email to send to the server using ",(0,s.jsx)(e.a,{href:"/23.10.1/public-networks/reference/cli/options#ethstats-contact",children:(0,s.jsx)(e.code,{children:"--ethstats-contact"})}),"."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"besu --ethstats=Dev-Node-1:secret@127.0.0.1:3001 --ethstats-contact=contact@mail.com\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["A server must be specified by ",(0,s.jsx)(e.code,{children:"--ethstats"})," in order to use ",(0,s.jsx)(e.code,{children:"--ethstats-contact"}),"."]})}),"\n",(0,s.jsx)(e.p,{children:"Open the selected dashboard website. Find your node under the list of nodes to see the statistics for the node and the network."}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"dashboard",src:n(50480).Z+"",width:"2636",height:"1874"})})]})}function l(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},50480:(t,e,n)=>{n.d(e,{Z:()=>s});const s=n.p+"assets/images/dashboard-62de99e929247a02f835d87c68166f76.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);