"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[98864],{24977:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=o(85893),r=o(11151);const s={title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["public networks","private networks"]},i="Configure ports",c={id:"public-networks/how-to/connect/configure-ports",title:"Configure ports",description:"To enable communication you must expose Hyperledger Besu ports appropriately",source:"@site/versioned_docs/version-23.10.2/public-networks/how-to/connect/configure-ports.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/configure-ports",permalink:"/public-networks/how-to/connect/configure-ports",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/how-to/connect/configure-ports.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Configure ports",sidebar_position:2,description:"To enable communication you must expose Hyperledger Besu ports appropriately",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure static nodes",permalink:"/public-networks/how-to/connect/static-nodes"},next:{title:"Manage peers",permalink:"/public-networks/how-to/connect/manage-peers"}},p={},a=[{value:"P2P networking",id:"p2p-networking",level:2},{value:"JSON-RPC API",id:"json-rpc-api",level:2},{value:"Metrics",id:"metrics",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-ports",children:"Configure ports"}),"\n",(0,t.jsx)(n.p,{children:"To enable communication you must expose Hyperledger Besu ports appropriately. The following shows an example port configuration for a Besu node on AWS."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Port Configuration",src:o(89790).Z+"",width:"2698",height:"790"})}),"\n",(0,t.jsxs)(n.p,{children:["When running Besu from the ",(0,t.jsx)(n.a,{href:"/public-networks/get-started/install/run-docker-image",children:"Docker image"}),", ",(0,t.jsx)(n.a,{href:"/public-networks/get-started/install/run-docker-image#exposing-ports",children:"expose ports"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Besu supports ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/connect/specify-nat",children:"UPnP"})," for home or small office environments where a wireless router or modem provides NAT isolation."]})}),"\n",(0,t.jsx)(n.h2,{id:"p2p-networking",children:"P2P networking"}),"\n",(0,t.jsxs)(n.p,{children:["To enable peer discovery, the P2P UDP port must be open for inbound connections. Specify the P2P port using the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,t.jsx)(n.code,{children:"--p2p-port"})})," option. The default is ",(0,t.jsx)(n.code,{children:"30303"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We also recommend opening the P2P TCP port for inbound connections. This is not strictly required because Besu attempts to open outbound TCP connections. But if no nodes on the network are accepting inbound TCP connections, nodes cannot communicate."}),"\n",(0,t.jsxs)(n.p,{children:["Combine the P2P port with the values for the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,t.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-interface",children:(0,t.jsx)(n.code,{children:"--p2p-interface"})})," options when specifying the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:"P2P host"})," and ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-interface",children:"P2P network interface"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["By default, peer discovery listens on ",(0,t.jsx)(n.code,{children:"0.0.0.0:30303"})," (all interfaces). If the device Besu is running on must bind to a specific network interface, specify the interface using the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-interface",children:(0,t.jsx)(n.code,{children:"--p2p-interface"})})," option."]})}),"\n",(0,t.jsx)(n.h2,{id:"json-rpc-api",children:"JSON-RPC API"}),"\n",(0,t.jsxs)(n.p,{children:["To enable access to the ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/json-rpc",children:"JSON-RPC API"}),", open the HTTP JSON-RPC and WebSockets JSON-RPC ports to the intended users of the JSON-RPC API on TCP."]}),"\n",(0,t.jsxs)(n.p,{children:["Specify the HTTP and WebSockets JSON-RPC ports using the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-port",children:(0,t.jsx)(n.code,{children:"--rpc-http-port"})})," and ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-ws-port",children:(0,t.jsx)(n.code,{children:"--rpc-ws-port"})})," options. The defaults are ",(0,t.jsx)(n.code,{children:"8545"})," and ",(0,t.jsx)(n.code,{children:"8546"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,t.jsxs)(n.p,{children:["To enable ",(0,t.jsx)(n.a,{href:"/public-networks/how-to/monitor/metrics",children:"Prometheus to access Besu"}),", open the metrics port or metrics push port to Prometheus or the Prometheus push gateway on TCP."]}),"\n",(0,t.jsxs)(n.p,{children:["Specify the ports for Prometheus and Prometheus push gateway using the ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-port",children:(0,t.jsx)(n.code,{children:"--metrics-port"})})," and ",(0,t.jsx)(n.a,{href:"/public-networks/reference/cli/options#metrics-push-port",children:(0,t.jsx)(n.code,{children:"--metrics-push-port"})})," options. The defaults are ",(0,t.jsx)(n.code,{children:"9545"})," and ",(0,t.jsx)(n.code,{children:"9001"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},89790:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/PortConfiguration-159d80eca9db24ffaf7bf7029c812faf.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var t=o(67294);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);