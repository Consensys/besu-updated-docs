"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[93216],{96852:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var s=i(85893),o=i(11151);const t={title:"Use local permissioning",sidebar_position:1,description:"Hyperledger Besu local permissioning",tags:["private networks"]},a="Use local permissioning",l={id:"private-networks/how-to/use-permissioning/local",title:"Use local permissioning",description:"Hyperledger Besu local permissioning",source:"@site/versioned_docs/version-23.7.2/private-networks/how-to/use-permissioning/local.md",sourceDirName:"private-networks/how-to/use-permissioning",slug:"/private-networks/how-to/use-permissioning/local",permalink:"/23.7.2/private-networks/how-to/use-permissioning/local",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/private-networks/how-to/use-permissioning/local.md",tags:[{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1702875753,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"Use local permissioning",sidebar_position:1,description:"Hyperledger Besu local permissioning",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Performance best practices",permalink:"/23.7.2/private-networks/how-to/use-privacy/performance-best-practices"},next:{title:"Use onchain permissioning",permalink:"/23.7.2/private-networks/how-to/use-permissioning/onchain"}},r={},c=[{value:"Node allowlisting",id:"node-allowlisting",level:2},{value:"Specify bootnodes in the allowlist",id:"specify-bootnodes-in-the-allowlist",level:3},{value:"Enable node allowlisting",id:"enable-node-allowlisting",level:3},{value:"Update the node allowlist",id:"update-the-node-allowlist",level:3},{value:"View the node allowlist",id:"view-the-node-allowlist",level:3},{value:"Account allowlisting",id:"account-allowlisting",level:2},{value:"Enable account allowlisting",id:"enable-account-allowlisting",level:3},{value:"Update the account allowlist",id:"update-the-account-allowlist",level:3},{value:"View the account allowlist",id:"view-the-account-allowlist",level:3},{value:"Permissions configuration file",id:"permissions-configuration-file",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use-local-permissioning",children:"Use local permissioning"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/permissioning/#local",children:"Local permissioning"})," supports node and account allowlisting."]}),"\n",(0,s.jsx)(n.h2,{id:"node-allowlisting",children:"Node allowlisting"}),"\n",(0,s.jsxs)(n.p,{children:["You can allow access to specified nodes in the ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"}),". With node allowlisting enabled, communication is only between nodes in the allowlist."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["Node allowlists ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys#domain-name-support",children:"support domain names"})," in enode URLs as an early access feature. Use the ",(0,s.jsx)(n.code,{children:"--Xdns-enabled"})," option to enable domain name support."]}),(0,s.jsxs)(n.p,{children:["If using Kubernetes, enable domain name support and use the ",(0,s.jsx)(n.code,{children:"--Xdns-update-enabled"})," option to ensure that Besu can connect to a container after being restarted, even if the IP address of the container changes."]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Nodes allowlist in the permissions configuration file",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'nodes-allowlist=["enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@192.168.0.9:4567","enode://6f8a80d14311c39f35f516fa664deaaaa13e85b2f7493f37f6144d86991ec012937307647bd3b9a82abe2974e1407241d54947bbb39763a4cac9f77166ad92a0@192.169.0.9:4568"]'})})}),"\n",(0,s.jsxs)(n.p,{children:["Node allowlisting is at the node level. That is, each node in the network has a ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"})," file in the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:"data directory"})," for the node."]}),"\n",(0,s.jsxs)(n.p,{children:["Local permissioning doesn't check that the node using the permissions configuration file is listed in the allowlist, it only checks that the remote end of the connection is in the allowlist. Use ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/permissioning/onchain",children:"onchain permissioning"})," if you need to check both ends of the connection."]}),"\n",(0,s.jsx)(n.h3,{id:"specify-bootnodes-in-the-allowlist",children:"Specify bootnodes in the allowlist"}),"\n",(0,s.jsxs)(n.p,{children:["The nodes permissions list must include the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/configure/bootnodes",children:"bootnodes"})," or Hyperledger Besu doesn't start with node permissions enabled."]}),"\n",(0,s.jsx)(n.p,{children:"If you start Besu with specified bootnodes and have node permissioning enabled:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'--bootnodes="enode://7e4ef30e9ec683f26ad76ffca5b5148fa7a6575f4cfad4eb0f52f9c3d8335f4a9b6f9e66fcc73ef95ed7a2a52784d4f372e7750ac8ae0b544309a5b391a23dd7@127.0.0.1:30303","enode://2feb33b3c6c4a8f77d84a5ce44954e83e5f163e7a65f7f7a7fec499ceb0ddd76a46ef635408c513d64c076470eac86b7f2c8ae4fcd112cb28ce82c0d64ec2c94@127.0.0.1:30304","enode://7b61d5ee4b44335873e6912cb5dd3e3877c860ba21417c9b9ef1f7e500a82213737d4b269046d0669fb2299a234ca03443f25fe5f706b693b3669e5c92478ade@127.0.0.1:30305"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"nodes-allowlist"})," in the ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"})," must contain the specified bootnodes."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If your node has two different IP addresses for ingress and egress (for example, if you use Kubernetes implementing a load balancer for ingress and a NAT gateway IP address for egress), add both addresses to the allowlist, using the same public key for each IP address. This will allow the node to connect."})}),"\n",(0,s.jsx)(n.h3,{id:"enable-node-allowlisting",children:"Enable node allowlisting"}),"\n",(0,s.jsxs)(n.p,{children:["To enable node allowlisting, specify the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-config-file-enabled",children:(0,s.jsx)(n.code,{children:"--permissions-nodes-config-file-enabled"})})," option when starting Besu."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PERM"})," API methods are not enabled by default. To enable the ",(0,s.jsx)(n.code,{children:"PERM"})," API methods, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api",children:(0,s.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-api",children:(0,s.jsx)(n.code,{children:"--rpc-ws-api"})})," options."]}),"\n",(0,s.jsx)(n.h3,{id:"update-the-node-allowlist",children:"Update the node allowlist"}),"\n",(0,s.jsx)(n.p,{children:"To update the nodes allowlist while the node is running, use the following JSON-RPC API methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_addnodestoallowlist",children:"perm_addNodesToAllowlist"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_removenodesfromallowlist",children:"perm_removeNodesFromAllowlist"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can also update the ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:(0,s.jsx)(n.code,{children:"permissions_config.toml"})})," file directly and then update the allowlist using the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_reloadpermissionsfromfile",children:(0,s.jsx)(n.code,{children:"perm_reloadPermissionsFromFile"})})," method."]}),"\n",(0,s.jsx)(n.p,{children:"Updates to the permissions configuration file persist across node restarts."}),"\n",(0,s.jsx)(n.h3,{id:"view-the-node-allowlist",children:"View the node allowlist"}),"\n",(0,s.jsxs)(n.p,{children:["To view the nodes allowlist, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_getnodesallowlist",children:"perm_getNodesAllowlist"})," method."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Each node has a ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"}),", which means nodes can have different nodes allowlists. This means nodes might be participating in the network that are not on the allowlist of other nodes in the network. We recommend each node in the network has the same nodes allowlist."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:"Example of different node allowlists",children:"\nNode 1 Allowlist = [Node 2, Node 3]\n\nNode 2 Allowlist = [Node 3, Node 5]\n\nNode 5 is participating in the same network as Node 1 even though Node 1 does not have Node 5\non their allowlist.\n"})}),"\n",(0,s.jsx)(n.h2,{id:"account-allowlisting",children:"Account allowlisting"}),"\n",(0,s.jsxs)(n.p,{children:["You can specify accounts in the accounts allowlist in the ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"}),". A node with account permissioning accepts transactions only from accounts in the accounts allowlist."]}),"\n",(0,s.jsx)(n.admonition,{title:"Accounts allowlist in the permissions configuration file",type:"info",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'accounts-allowlist=["0x0000000000000000000000000000000000000009"]'})})}),"\n",(0,s.jsxs)(n.p,{children:["Account allowlisting is at the node level. That is, each node in the network has a ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"})," in the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:"data directory"})," for the node."]}),"\n",(0,s.jsxs)(n.admonition,{title:"Using account permissioning and privacy",type:"caution",children:[(0,s.jsxs)(n.p,{children:["Account permissioning is incompatible with ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/how-to/use-privacy/sign-pmts",children:"random key signing"})," for ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"}),"."]}),(0,s.jsxs)(n.p,{children:["If using account permissioning and privacy, a signing key must be specified using the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,s.jsx)(n.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option and the corresponding public key included in the accounts allowlist."]})]}),"\n",(0,s.jsx)(n.p,{children:"Transaction validation against the accounts allowlist occurs at the following points:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Submitted by JSON-RPC API method ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#eth_sendrawtransaction",children:(0,s.jsx)(n.code,{children:"eth_sendRawTransaction"})})]}),"\n",(0,s.jsx)(n.li,{children:"Received via propagation from another node"}),"\n",(0,s.jsx)(n.li,{children:"Added to a block by a mining node"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After adding transactions to a block, the transactions are not validated against the allowlist when received by another node. That is, a node can synchronize and add blocks containing transactions from accounts that are not on the accounts allowlist of that node."}),"\n",(0,s.jsx)(n.p,{children:"The following diagram illustrates applying local and onchain permissioning rules."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Permissioning Flow",src:i(78930).Z+"",width:"1656",height:"1134"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Example of different account allowlists"',children:"\nNode 1 Allowlist = [Account A, Account B]\n\nNode 2 Allowlist = [Account B, Account C]\n\nMining Node Allowlist = [Account A, Account B]\n\nAccount A submits a transaction on Node 1. Node 1 validates and propagates the transaction. The\nMining Node receives the transaction, validates it is from an account in the Mining Node\naccounts allowlist, and includes the transaction in the block. Node 2 receives and adds\nthe block created by the Mining Node.\n\nNode 2 now has a transaction in the blockchain from Account A, which is not on the accounts\nallowlist for Node 2.\n\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Each node has a ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:"permissions configuration file"})," which means nodes in the network can have different accounts allowlists. This means a transaction can be successfully submitted by Node A from an account in the Node A allowlist but rejected by Node B to which it's propagated if the account is not in the Node B allowlist. We recommend each node in the network has the same accounts allowlist."]})}),"\n",(0,s.jsx)(n.h3,{id:"enable-account-allowlisting",children:"Enable account allowlisting"}),"\n",(0,s.jsxs)(n.p,{children:["To enable account allowlisting, specify the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-accounts-config-file-enabled",children:(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file-enabled"})})," option when starting Besu."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"PERM"})," API methods are not enabled by default. To enable the ",(0,s.jsx)(n.code,{children:"PERM"})," API methods, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-api",children:(0,s.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-api",children:(0,s.jsx)(n.code,{children:"--rpc-ws-api"})})," options."]}),"\n",(0,s.jsx)(n.h3,{id:"update-the-account-allowlist",children:"Update the account allowlist"}),"\n",(0,s.jsx)(n.p,{children:"To update the accounts allowlist when the node is running, use the JSON-RPC API methods:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_addaccountstoallowlist",children:(0,s.jsx)(n.code,{children:"perm_addAccountsToAllowlist"})})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_removeaccountsfromallowlist",children:(0,s.jsx)(n.code,{children:"perm_removeAccountsFromAllowlist"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can also update the ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:(0,s.jsx)(n.code,{children:"permissions_config.toml"})})," file directly and use the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_reloadpermissionsfromfile",children:(0,s.jsx)(n.code,{children:"perm_reloadPermissionsFromFile"})})," method to update the allowlists."]}),"\n",(0,s.jsx)(n.p,{children:"Updates to the permissions configuration file persist across node restarts."}),"\n",(0,s.jsx)(n.h3,{id:"view-the-account-allowlist",children:"View the account allowlist"}),"\n",(0,s.jsxs)(n.p,{children:["To view the accounts allowlist, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/api/#perm_getaccountsallowlist",children:(0,s.jsx)(n.code,{children:"perm_getAccountsAllowlist"})})," method."]}),"\n",(0,s.jsx)(n.h2,{id:"permissions-configuration-file",children:"Permissions configuration file"}),"\n",(0,s.jsxs)(n.p,{children:["The permissions configuration file contains the nodes and accounts allowlists. If the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-accounts-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file"})})," and ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-nodes-config-file"})})," options are not specified, the name of the permissions configuration file must be ",(0,s.jsx)(n.a,{href:"#permissions-configuration-file",children:(0,s.jsx)(n.code,{children:"permissions_config.toml"})})," and must be in the ",(0,s.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:"data directory"})," for the node."]}),"\n",(0,s.jsx)(n.p,{children:"You can specify the accounts and nodes allowlists in the same file or in separate files for accounts and nodes."}),"\n",(0,s.jsxs)(n.p,{children:["To specify a permissions configuration file (or separate files for accounts and nodes) in any location, use the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-accounts-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file"})})," and ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-nodes-config-file"})})," options."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-accounts-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file"})})," and ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/options#permissions-nodes-config-file",children:(0,s.jsx)(n.code,{children:"permissions-nodes-config-file"})})," options are not used when running Besu from the ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/run-docker-image",children:"Docker image"}),". Use a bind mount to ",(0,s.jsx)(n.a,{href:"/23.7.2/private-networks/get-started/install/run-docker-image",children:"specify a permissions configuration file with Docker"}),"."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",metastring:'title="Sample permissions configuration file"',children:'accounts-allowlist=["0xb9b81ee349c3807e46bc71aa2632203c5b462032", "0xb9b81ee349c3807e46bc71aa2632203c5b462034"]\n\nnodes-allowlist=["enode://7e4ef30e9ec683f26ad76ffca5b5148fa7a6575f4cfad4eb0f52f9c3d8335f4a9b6f9e66fcc73ef95ed7a2a52784d4f372e7750ac8ae0b544309a5b391a23dd7@127.0.0.1:30303","enode://2feb33b3c6c4a8f77d84a5ce44954e83e5f163e7a65f7f7a7fec499ceb0ddd76a46ef635408c513d64c076470eac86b7f2c8ae4fcd112cb28ce82c0d64ec2c94@127.0.0.1:30304","enode://7b61d5ee4b44335873e6912cb5dd3e3877c860ba21417c9b9ef1f7e500a82213737d4b269046d0669fb2299a234ca03443f25fe5f706b693b3669e5c92478ade@127.0.0.1:30305"]\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},78930:(e,n,i)=>{i.d(n,{Z:()=>s});const s=i.p+"assets/images/PermissioningFlow-083dd4871a10fb66a7bf7a0e7de03a1d.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>a});var s=i(67294);const o={},t=s.createContext(o);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);