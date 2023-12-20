"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[31647],{61853:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var i=s(85893),d=s(11151);const o={title:"Node keys",sidebar_position:8,description:"Learn about node public and private keys, and the node address.",tags:["public networks","private networks"]},t="Node keys and node address",r={id:"public-networks/concepts/node-keys",title:"Node keys",description:"Learn about node public and private keys, and the node address.",source:"@site/versioned_docs/version-23.10.2/public-networks/concepts/node-keys.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/node-keys",permalink:"/public-networks/concepts/node-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/concepts/node-keys.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:8,frontMatter:{title:"Node keys",sidebar_position:8,description:"Learn about node public and private keys, and the node address.",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Genesis file",permalink:"/public-networks/concepts/genesis-file"},next:{title:"Tutorials",permalink:"/public-networks/tutorials"}},c={},a=[{value:"Node private key",id:"node-private-key",level:2},{value:"Node public key",id:"node-public-key",level:2},{value:"Node address",id:"node-address",level:2},{value:"Specify a custom node private key file",id:"specify-a-custom-node-private-key-file",level:2},{value:"Enode URL",id:"enode-url",level:2},{value:"Domain name support",id:"domain-name-support",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"node-keys-and-node-address",children:"Node keys and node address"}),"\n",(0,i.jsx)(n.p,{children:"Each node has a private and public key pair, and a node address. Hyperledger Besu uses the private and public key pair to sign and verify transactions, and the node address as an identifier for the node."}),"\n",(0,i.jsx)(n.h2,{id:"node-private-key",children:"Node private key"}),"\n",(0,i.jsxs)(n.p,{children:["When starting Hyperledger Besu, if the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#node-private-key-file",children:(0,i.jsx)(n.code,{children:"--node-private-key-file"})})," option is not specified and a ",(0,i.jsx)(n.code,{children:"key"})," file does not exist in the data directory for the node, Besu generates a node private key and writes it to the ",(0,i.jsx)(n.code,{children:"key"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["If a ",(0,i.jsx)(n.code,{children:"key"})," file does exist in the data directory when starting Besu, the node starts using the private key in the ",(0,i.jsx)(n.code,{children:"key"})," file."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The private key is not encrypted."})}),"\n",(0,i.jsx)(n.h2,{id:"node-public-key",children:"Node public key"}),"\n",(0,i.jsx)(n.p,{children:"The node public key displays in the log after starting Besu. Also referred to as the node ID, the node public key forms part of the enode URL of a node."}),"\n",(0,i.jsxs)(n.p,{children:["You can export the node public key, either to standard output or to a specified file, using the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/subcommands#public-key",children:(0,i.jsx)(n.code,{children:"public-key export"})})," subcommand."]}),"\n",(0,i.jsx)(n.h2,{id:"node-address",children:"Node address"}),"\n",(0,i.jsx)(n.p,{children:"Besu generates the node address by creating a hash of the node public key and using the last 20 bytes of the hash as the node address. It is also displayed in the logs after starting Besu."}),"\n",(0,i.jsxs)(n.p,{children:["You can export the node address, either to standard output or to a specified file, using the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/subcommands#public-key",children:(0,i.jsx)(n.code,{children:"public-key export-address"})})," subcommand."]}),"\n",(0,i.jsx)(n.h2,{id:"specify-a-custom-node-private-key-file",children:"Specify a custom node private key file"}),"\n",(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#node-private-key-file",children:(0,i.jsx)(n.code,{children:"--node-private-key-file"})})," option to specify a custom ",(0,i.jsx)(n.code,{children:"key"})," file in any location."]}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"key"})," file exists, the node starts with the private key in the ",(0,i.jsx)(n.code,{children:"key"})," file. If the ",(0,i.jsx)(n.code,{children:"key"})," file does not exist, Besu generates a node private key and writes it to the ",(0,i.jsx)(n.code,{children:"key"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["For example, the following command either reads the node private key from ",(0,i.jsx)(n.code,{children:"privatekeyfile"})," or writes a generated private key to ",(0,i.jsx)(n.code,{children:"privatekeyfile"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'besu --node-private-key-file="/Users/username/privatekeyfile"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"enode-url",children:"Enode URL"}),"\n",(0,i.jsxs)(n.p,{children:["The enode URL identifies a node. For example, the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#bootnodes",children:(0,i.jsx)(n.code,{children:"--bootnodes"})})," option and the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#perm_addnodestoallowlist",children:(0,i.jsx)(n.code,{children:"perm_addNodesToAllowlist"})})," method specify nodes by enode URL."]}),"\n",(0,i.jsxs)(n.p,{children:["The enode URL format is ",(0,i.jsx)(n.code,{children:"enode://<id>@<host:port>[?discport=<port>]"})," where:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<id>"})," is the node public key, excluding the initial 0x."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<host:port>"})," is the host and TCP port the bootnode is listening on for P2P discovery. Specify the host and TCP port using the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,i.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})})," options. The default host is ",(0,i.jsx)(n.code,{children:"127.0.0.1"})," and the default port is ",(0,i.jsx)(n.code,{children:"30303"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Standard Ethereum enode URLs allow hostnames as IP addresses only, however Besu provides ",(0,i.jsx)(n.a,{href:"#domain-name-support",children:"domain name support"})," in private permissioned networks."]})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If the TCP listening and UDP discovery ports differ, the UDP port is specified as query parameter ",(0,i.jsx)(n.code,{children:"discport"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["If the node public key is ",(0,i.jsx)(n.code,{children:"0xc35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f"}),", the host is ",(0,i.jsx)(n.code,{children:"10.3.58.6"}),", the TCP listening port is ",(0,i.jsx)(n.code,{children:"30303"}),", and the UDP discovery port is ",(0,i.jsx)(n.code,{children:"30301"}),", then the enode URL is ",(0,i.jsx)(n.code,{children:"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@10.3.58.6:30303?discport=30301"})]}),(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,i.jsx)(n.code,{children:"--p2p-host"})})," or ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#p2p-port",children:(0,i.jsx)(n.code,{children:"--p2p-port"})})," options are not specified and the node public key is ",(0,i.jsx)(n.code,{children:"0xc35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f"}),", then the enode URL is ",(0,i.jsx)(n.code,{children:"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@127.0.0.1:30303"})]})]}),"\n",(0,i.jsxs)(n.p,{children:["The enode URL displays when starting a Besu node. Use the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#net_enode",children:(0,i.jsx)(n.code,{children:"net_enode"})})," JSON-RPC API method to get the enode URL of the node."]}),"\n",(0,i.jsxs)(n.p,{children:["The enode advertised to other nodes during discovery is the external IP address and port, as defined by ",(0,i.jsx)(n.a,{href:"/public-networks/how-to/connect/specify-nat",children:(0,i.jsx)(n.code,{children:"--nat-method"})}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"domain-name-support",children:"Domain name support"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Enode URL domain name support is an early access feature that you can use in private ",(0,i.jsx)(n.a,{href:"/private-networks/concepts/permissioning/",children:"permissioned networks"})," only."]})}),"\n",(0,i.jsx)(n.p,{children:"To use domain names in enode URLs:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Configure DNS reverse lookup."}),"\n",(0,i.jsxs)(n.li,{children:["Enable DNS support using the early access option ",(0,i.jsx)(n.code,{children:"--Xdns-enabled"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="Example enode URL using a domain name"',children:"enode://c35c3ec90a8a51fd5703594c6303382f3ae6b2ecb9589bab2c04b3794f2bc3fc2631dabb0c08af795787a6c004d8f532230ae6e9925cbbefb0b28b79295d615f@mydomain.dev.example.net:30301\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["If deploying Besu using Kubernetes in private permissioned networks, use the ",(0,i.jsx)(n.code,{children:"--Xdns-enabled"})," and ",(0,i.jsx)(n.code,{children:"--Xdns-update-enabled"})," options to ensure that Besu can connect to a container after restarting even if the IP address of the container changes."]}),(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/cli/options#xhelp",children:(0,i.jsx)(n.code,{children:"--Xhelp"})})," command line option to view early access options and their descriptions."]})]}),"\n",(0,i.jsxs)(n.p,{children:["If nodes are not connecting as expected, set the ",(0,i.jsx)(n.a,{href:"/public-networks/reference/api/#admin_changeloglevel",children:"log level to TRACE"})," to help troubleshoot the issue."]})]})}function p(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var i=s(67294);const d={},o=i.createContext(d);function t(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);