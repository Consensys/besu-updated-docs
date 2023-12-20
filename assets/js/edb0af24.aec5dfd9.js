"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[40241],{51561:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=o(85893),s=o(11151);const r={title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",tags:["public networks"]},i="Upgrade your Besu node",d={id:"public-networks/how-to/upgrade-node",title:"Upgrade Besu",description:"Upgrade your Besu node to a new version.",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/upgrade-node.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/upgrade-node",permalink:"/23.7.1/public-networks/how-to/upgrade-node",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/upgrade-node.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"}],version:"23.7.1",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:11,frontMatter:{title:"Upgrade Besu",sidebar_position:11,description:"Upgrade your Besu node to a new version.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Configure mining",permalink:"/23.7.1/public-networks/how-to/use-pow/mining"},next:{title:"Use EVM tool",permalink:"/23.7.1/public-networks/how-to/troubleshoot/evm-tool"}},a={},l=[{value:"Ansible",id:"ansible",level:2},{value:"Find peers on restarting",id:"find-peers-on-restarting",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrade-your-besu-node",children:"Upgrade your Besu node"}),"\n",(0,t.jsx)(n.p,{children:"When upgrading your Besu node, we recommend:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using an orchestration method (for example, Ansible or Chef) to keep all nodes in sync with your desired configuration."}),"\n",(0,t.jsx)(n.li,{children:"Storing your configuration under version control."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ansible",children:"Ansible"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the ",(0,t.jsx)(n.a,{href:"https://galaxy.ansible.com/consensys/hyperledger_besu",children:"Ansible role on Galaxy"})," directly or customize it to suit your needs."]}),"\n",(0,t.jsxs)(n.p,{children:["Upgrade the Besu version on nodes by running the play with the new version. For more information, For more information, select ",(0,t.jsx)(n.strong,{children:"Read Me"})," on the ",(0,t.jsx)(n.a,{href:"https://galaxy.ansible.com/consensys/hyperledger_besu",children:"Ansible Galaxy Besu page"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The playbook:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Stops Besu."}),"\n",(0,t.jsx)(n.li,{children:"Downloads the updated version."}),"\n",(0,t.jsx)(n.li,{children:"Applies any new configuration."}),"\n",(0,t.jsx)(n.li,{children:"Starts Besu."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"find-peers-on-restarting",children:"Find peers on restarting"}),"\n",(0,t.jsx)(n.p,{children:"Nodes store known peers in the peer table. The peer table is not persisted to disk. When a node restarts, the node connects to the specified bootnodes and discovers other nodes through the peer discovery process. The node continues collecting data from where it left off before the restart (assuming there was no data corruption in a failure scenario)."}),"\n",(0,t.jsx)(n.p,{children:"Before the node restarted, connected peers saved the node details in their peer tables. These peers can reconnect to the restarted node. The restarted node uses these peers and the bootnodes, to discover more peers. To ensure that the restarted node successfully rejoins the network, ensure you specify at least one operational bootnode."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>i});var t=o(67294);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);