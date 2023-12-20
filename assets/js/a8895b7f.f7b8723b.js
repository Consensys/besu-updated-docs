"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[13658],{67810:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(85893),s=n(11151);const i={title:"Bootnodes",description:"Configuring bootnodes",sidebar_position:3,tags:["private networks"]},r="Configure bootnodes",d={id:"private-networks/how-to/configure/bootnodes",title:"Bootnodes",description:"Configuring bootnodes",source:"@site/versioned_docs/version-23.4.1/private-networks/how-to/configure/bootnodes.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/bootnodes",permalink:"/23.4.1/private-networks/how-to/configure/bootnodes",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/how-to/configure/bootnodes.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:3,frontMatter:{title:"Bootnodes",description:"Configuring bootnodes",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Free gas network",permalink:"/23.4.1/private-networks/how-to/configure/free-gas"},next:{title:"Validators",permalink:"/23.4.1/private-networks/how-to/configure/validators"}},c={},a=[{value:"Specify a bootnode",id:"specify-a-bootnode",level:2},{value:"Configure bootnodes in a production network",id:"configure-bootnodes-in-a-production-network",level:2},{value:"Add and remove bootnodes",id:"add-and-remove-bootnodes",level:2}];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"configure-bootnodes",children:"Configure bootnodes"}),"\n",(0,t.jsx)(o.p,{children:"You can use bootnodes to initially discover peers. Bootnodes are regular nodes used to discover other nodes."}),"\n",(0,t.jsx)(o.p,{children:"In private networks for development or testing purposes, specify at least one bootnode."}),"\n",(0,t.jsxs)(o.p,{children:["In production networks, ",(0,t.jsx)(o.a,{href:"#configure-bootnodes-in-a-production-network",children:"configure two or more nodes as bootnodes"}),"."]}),"\n",(0,t.jsxs)(o.admonition,{type:"tip",children:[(0,t.jsx)(o.p,{children:"Bootnodes and static nodes are parallel methods for finding peers. Depending on your use case, you can use only bootnodes, only static nodes, or both bootnodes and static nodes."}),(0,t.jsxs)(o.p,{children:["To find peers, configure one or more bootnodes. To configure a specific set of peer connections, use ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/how-to/connect/static-nodes",children:"static nodes"}),"."]})]}),"\n",(0,t.jsx)(o.admonition,{title:"Mainnet and public testnets",type:"note",children:(0,t.jsxs)(o.p,{children:["For Mainnet and the Sepolia and Goerli testnets, Hyperledger Besu has an internal list of enode URLs and uses this list automatically when you specify the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#network",children:(0,t.jsx)(o.code,{children:"--network"})})," option."]})}),"\n",(0,t.jsx)(o.h2,{id:"specify-a-bootnode",children:"Specify a bootnode"}),"\n",(0,t.jsxs)(o.p,{children:["To start a node, specify a bootnode ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/concepts/node-keys",children:"enode"})," for P2P discovery, using the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(o.code,{children:"--bootnodes"})})," option."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"besu --genesis-file=privateNetworkGenesis.json --data-path=nodeDataPath --bootnodes=enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb99bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@127.0.0.1:30303\n"})}),"\n",(0,t.jsxs)(o.p,{children:["The default host and port advertised to other peers for P2P discovery is ",(0,t.jsx)(o.code,{children:"127.0.0.1:30303"}),". To specify a different host or port, use the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#p2p-host",children:(0,t.jsx)(o.code,{children:"--p2p-host"})})," and ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#p2p-port",children:(0,t.jsx)(o.code,{children:"--p2p-port"})})," options."]}),"\n",(0,t.jsxs)(o.p,{children:["By default, peer discovery listens on all available network interfaces. If the device Besu is running on must bind to a specific network interface, specify the interface using the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#p2p-interface",children:(0,t.jsx)(o.code,{children:"--p2p-interface"})})," option."]}),"\n",(0,t.jsx)(o.h2,{id:"configure-bootnodes-in-a-production-network",children:"Configure bootnodes in a production network"}),"\n",(0,t.jsx)(o.p,{children:"A network must have at least one operating bootnode. To allow for continuity in the event of failure, configure two or more bootnodes in a production network."}),"\n",(0,t.jsxs)(o.p,{children:["We don't recommend putting bootnodes behind a load balancer because the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/concepts/node-keys#enode-url",children:"enode"})," relates to the node public key, IP address, and discovery ports. Any changes to a bootnode enode prevents other nodes from being able to establish a connection with the bootnode. This is why we recommend putting more bootnodes on the network itself."]}),"\n",(0,t.jsx)(o.p,{children:"To ensure a bootnode enode doesn't change when recovering from a complete bootnode failure:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Create the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/concepts/node-keys",children:"node key pair"})," (that is, the private and public key) before starting the bootnode."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"When creating bootnodes in the cloud (for example, AWS and Azure), attempt to assign a static IP address to them. If your network is:"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsx)(o.li,{children:"Publicly accessible, assign an elastic IP."}),"\n",(0,t.jsx)(o.li,{children:"Internal only, specify a private IP address when you create the instance and record this IP address."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.p,{children:"We recommend storing the bootnode configuration under source control."}),"\n",(0,t.jsx)(o.p,{children:"To allow for failure, specify all bootnodes on the command line (even to the bootnodes themselves)."}),"\n",(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsx)(o.p,{children:"Having each bootnode list the other bootnodes increases the speed of discovery. Nodes ignore their own enode in the bootnodes list so it isn't required to specify different bootnode lists to the bootnodes themselves."})}),"\n",(0,t.jsx)(o.h2,{id:"add-and-remove-bootnodes",children:"Add and remove bootnodes"}),"\n",(0,t.jsxs)(o.p,{children:["Adding new bootnodes is a similar process to creating bootnodes. After creating the bootnodes and adding them to the network, update the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(o.code,{children:"--bootnodes"})})," command line option for each node to include the new bootnodes."]}),"\n",(0,t.jsxs)(o.p,{children:["When adding bootnodes, you don't need to restart running nodes. By updating the ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/reference/cli/options#bootnodes",children:(0,t.jsx)(o.code,{children:"--bootnodes"})})," option, the next time you restart the nodes (for example, when ",(0,t.jsx)(o.a,{href:"/23.4.1/public-networks/how-to/upgrade-node",children:"upgrading"}),"), the nodes connect to the new bootnodes."]})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);