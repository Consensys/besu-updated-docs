"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18558],{41806:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(85893),r=n(11151);const i={title:"System requirements",sidebar_position:1,description:"System requirements to sync and run Besu"},o="System requirements",a={id:"public-networks/get-started/system-requirements",title:"System requirements",description:"System requirements to sync and run Besu",source:"@site/versioned_docs/version-23.4.0/public-networks/get-started/system-requirements.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/system-requirements",permalink:"/23.4.0/public-networks/get-started/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/get-started/system-requirements.md",tags:[],version:"23.4.0",lastUpdatedAt:1702541016,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1,description:"System requirements to sync and run Besu"},sidebar:"publicDocSidebar",previous:{title:"Public networks",permalink:"/23.4.0/public-networks/"},next:{title:"Installation options",permalink:"/23.4.0/public-networks/get-started/install/"}},c={},d=[{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"Disk space",id:"disk-space",level:2},{value:"Disk type",id:"disk-type",level:2},{value:"AWS requirements",id:"aws-requirements",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"system-requirements",children:"System requirements"}),"\n",(0,t.jsxs)(s.p,{children:["Determine public network system requirements by checking CPU and disk space requirements using ",(0,t.jsx)(s.a,{href:"/23.4.0/public-networks/how-to/monitor/metrics",children:"Prometheus"}),". Grafana provides a ",(0,t.jsx)(s.a,{href:"https://grafana.com/grafana/dashboards/10273",children:"sample dashboard"})," for Besu."]}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"CPU requirements are highest when syncing to the network and typically reduce after the node is synchronized to the chain head."})}),"\n",(0,t.jsx)(s.h2,{id:"java-virtual-machine-size",children:"Java Virtual Machine size"}),"\n",(0,t.jsxs)(s.p,{children:["For Mainnet and testnets, the minimum ",(0,t.jsx)(s.a,{href:"/23.4.0/public-networks/how-to/configure-jvm/manage-memory",children:"Java Virtual Machine (JVM) memory requirement is 8 GB"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."}),"\n",(0,t.jsx)(s.h2,{id:"disk-space",children:"Disk space"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/23.4.0/public-networks/reference/cli/options#sync-mode",children:"Fast synchronization"})," with ",(0,t.jsx)(s.a,{href:"/23.4.0/public-networks/concepts/data-storage-formats",children:"pruning"})," enabled requires approximately 750 GB of disk space. ",(0,t.jsx)(s.a,{href:"/23.4.0/public-networks/reference/cli/options#sync-mode",children:"Full synchronization"})," requires approximately 3 TB."]}),"\n",(0,t.jsx)(s.h2,{id:"disk-type",children:"Disk type"}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/compute/docs/disks",children:"local SSD storage"})," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."]}),"\n",(0,t.jsxs)(s.p,{children:["You can use local SSDs through ",(0,t.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/SCSI",children:"SCSI interfaces"}),". For higher performance in production settings, we recommend upgrading to ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe interfaces"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"aws-requirements",children:"AWS requirements"}),"\n",(0,t.jsxs)(s.p,{children:["We are running 22.4.2 Mainnet nodes using ",(0,t.jsx)(s.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,t.jsxs)(s.p,{children:["We synchronized the 22.4.2 Mainnet nodes using ",(0,t.jsx)(s.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,t.jsx)(s.p,{children:"Using a larger box while synchronizing speeds up the sync process by giving it more resources. When the sync is completed, the box size can be reduced."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"If you are using a more recent release than 22.4.2, resource requirements may have increased."})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);