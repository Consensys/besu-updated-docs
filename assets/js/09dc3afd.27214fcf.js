"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[86133],{55626:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=i(85893),o=i(11151);const t={title:"Onchain permissioning",description:"Onchain permissioning",sidebar_position:1,tags:["private networks"]},r="Onchain permissioning",c={id:"private-networks/concepts/permissioning/onchain",title:"Onchain permissioning",description:"Onchain permissioning",source:"@site/versioned_docs/version-23.10.2/private-networks/concepts/permissioning/onchain.md",sourceDirName:"private-networks/concepts/permissioning",slug:"/private-networks/concepts/permissioning/onchain",permalink:"/private-networks/concepts/permissioning/onchain",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/concepts/permissioning/onchain.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Onchain permissioning",description:"Onchain permissioning",sidebar_position:1,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning",permalink:"/private-networks/concepts/permissioning/"},next:{title:"Permissioning plugin",permalink:"/private-networks/concepts/permissioning/plugin"}},a={},l=[{value:"Permissioning contracts",id:"permissioning-contracts",level:2},{value:"Allowlists",id:"allowlists",level:3},{value:"Bootnodes",id:"bootnodes",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"onchain-permissioning",children:"Onchain permissioning"}),"\n",(0,s.jsxs)(e.p,{children:["Onchain ",(0,s.jsx)(e.a,{href:"/private-networks/concepts/permissioning/",children:"permissioning"})," uses smart contracts to store and administer the node, account, and admin allowlists. Using onchain permissioning enables all nodes to read the allowlists from a single source, the blockchain."]}),"\n",(0,s.jsx)(e.admonition,{type:"danger",children:(0,s.jsx)(e.p,{children:"When using onchain account permissioning, a node checks permissions when importing blocks. Meaning, a node only imports blocks in which all transactions are from authorized senders. If you disable onchain account permissioning and your node accepts blocks without enforcing this rule, your node cannot re-synchronize with other nodes that enforce onchain account permissioning rules (your node goes into forked state)."})}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsx)(e.p,{children:"Custom smart contracts and dapps can be implemented to work with onchain permissioning."})}),"\n",(0,s.jsx)(e.h2,{id:"permissioning-contracts",children:"Permissioning contracts"}),"\n",(0,s.jsx)(e.admonition,{type:"caution",children:(0,s.jsxs)(e.p,{children:["The permissioning contract has multiple interfaces, and each interface maps to a specific version of the ",(0,s.jsx)(e.a,{href:"https://entethalliance.org/technical-specifications/",children:"Enterprise Ethereum Alliance Client Specification"}),". Ensure that you ",(0,s.jsx)(e.a,{href:"/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"specify the permissioning contract interface"})," being used when starting Besu."]})}),"\n",(0,s.jsx)(e.h3,{id:"allowlists",children:"Allowlists"}),"\n",(0,s.jsx)(e.p,{children:"Permissioning implements three allowlists:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Accounts, which can submit transactions to the network."}),"\n",(0,s.jsx)(e.li,{children:"Nodes, which can join the network."}),"\n",(0,s.jsx)(e.li,{children:"Admins, which are accounts able to update the accounts and nodes allowlists."}),"\n"]}),"\n",(0,s.jsxs)(e.admonition,{title:"Using account permissioning and privacy",type:"caution",children:[(0,s.jsxs)(e.p,{children:["Account permissioning is incompatible with ",(0,s.jsx)(e.a,{href:"/private-networks/how-to/use-privacy/sign-pmts",children:"random key signing"})," for ",(0,s.jsx)(e.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transactions"}),"."]}),(0,s.jsxs)(e.p,{children:["If using account permissioning and privacy, a signing key must be specified using the ",(0,s.jsx)(e.a,{href:"/private-networks/reference/cli/options#privacy-marker-transaction-signing-key-file",children:(0,s.jsx)(e.code,{children:"--privacy-marker-transaction-signing-key-file"})})," command line option and the corresponding public key included in the accounts allowlist."]})]}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsxs)(e.p,{children:["If nodes are not connecting as expected, set the ",(0,s.jsxs)(e.a,{href:"/public-networks/reference/cli/options#logging",children:["log level to ",(0,s.jsx)(e.code,{children:"TRACE"})]})," and search for messages containing ",(0,s.jsx)(e.code,{children:"Node permissioning"})," to identify the issue."]}),(0,s.jsxs)(e.p,{children:["Ensure the ",(0,s.jsx)(e.a,{href:"/public-networks/reference/cli/options#p2p-host",children:(0,s.jsx)(e.code,{children:"--p2p-host"})})," command line option has been correctly configured for all nodes with the externally accessible address."]}),(0,s.jsx)(e.p,{children:"If you change your network configuration, you may need to update the node allowlist."})]}),"\n",(0,s.jsx)(e.h2,{id:"bootnodes",children:"Bootnodes"}),"\n",(0,s.jsxs)(e.p,{children:["When a node joins the network, the node connects to the ",(0,s.jsx)(e.a,{href:"/private-networks/how-to/configure/bootnodes",children:"bootnodes"})," until it synchronizes to the chain head, regardless of node permissions. After synchronization, the Account Rules and Node Rules smart contracts apply the permissioning rules."]}),"\n",(0,s.jsx)(e.p,{children:"If a synchronized node loses all peer connections (that is, it has zero peers), it reconnects to the bootnodes to rediscover peers."}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsx)(e.p,{children:"All bootnodes must be on the nodes allowlist."})})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>c,a:()=>r});var s=i(67294);const o={},t=s.createContext(o);function r(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);