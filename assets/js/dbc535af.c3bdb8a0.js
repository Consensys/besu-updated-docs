"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[27549],{75558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(85893),i=s(11151);const t={title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},a="System requirements",o={id:"public-networks/get-started/system-requirements",title:"System requirements",description:"Ensure you meet the system requirements to sync and run Besu.",source:"@site/versioned_docs/version-23.10.1/public-networks/get-started/system-requirements.md",sourceDirName:"public-networks/get-started",slug:"/public-networks/get-started/system-requirements",permalink:"/23.10.1/public-networks/get-started/system-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/get-started/system-requirements.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"}],version:"23.10.1",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"System requirements",sidebar_position:1,description:"Ensure you meet the system requirements to sync and run Besu.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Get started",permalink:"/23.10.1/public-networks/get-started"},next:{title:"Installation options",permalink:"/23.10.1/public-networks/get-started/install/"}},c={},d=[{value:"Java distribution and installation",id:"java-distribution-and-installation",level:2},{value:"Java Virtual Machine size",id:"java-virtual-machine-size",level:2},{value:"Disk space",id:"disk-space",level:2},{value:"Disk type",id:"disk-type",level:2},{value:"AWS requirements",id:"aws-requirements",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"system-requirements",children:"System requirements"}),"\n",(0,r.jsxs)(n.p,{children:["Determine public network system requirements by checking CPU and disk space requirements using ",(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/monitor/metrics",children:"Prometheus"}),". Grafana provides a ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/10273",children:"sample dashboard"})," for Besu."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"CPU requirements are highest when syncing to the network and typically reduce after the node is synchronized to the chain head."})}),"\n",(0,r.jsx)(n.h2,{id:"java-distribution-and-installation",children:"Java distribution and installation"}),"\n",(0,r.jsxs)(n.p,{children:["Besu requires an installation of Java 17+ to run.\nWe currently recommend two Java distributions, ",(0,r.jsx)(n.a,{href:"https://jdk.java.net/17/",children:"OpenJDK 17"})," and\n",(0,r.jsx)(n.a,{href:"https://www.eclipse.org/openj9/",children:"OpenJ9"}),", though you can experiment based on your needs."]}),"\n",(0,r.jsx)(n.p,{children:"OpenJDK is the default for many Java users and is balanced in performance and garbage collection.\nOpenJ9 consumes less memory and system resources, but can have worse performance on some setups."}),"\n",(0,r.jsxs)(n.p,{children:["If you have more than 32GB RAM (for Besu and your ",(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/concepts/the-merge",children:"consensus client"}),"), use OpenJDK.\nIf you have less RAM:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you're on Linux (or Unix-based) and your CPU is x86-64 bit architecture (like Intel), use OpenJ9."}),"\n",(0,r.jsx)(n.li,{children:"If you're on ARM-64 CPU architecture (Mac M-series, Raspberry Pi), use OpenJDK."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you have OpenJDK installed or need a fresh installation of OpenJ9, you can pick up the OpenJ9\ndocker image, or install the OpenJ9 JDK using the following steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Get the ",(0,r.jsx)(n.a,{href:"https://github.com/ibmruntimes/semeru17-binaries/releases",children:"binaries"})," corresponding to\nyour OS architecture.\nFor example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/ibmruntimes/semeru17-binaries/releases/download/jdk-17.0.5%2B8_openj9-0.35.0/ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Uncompress the binaries:"}),"\n",(0,r.jsx)(n.h1,{id:"command",children:"Command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -xvf YOUR_J9_IMAGE.tar.gz\n"})}),"\n",(0,r.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tar -xvf ibm-semeru-open-jdk_x64_linux_17.0.5_8_openj9-0.35.0.tar.gz\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Move the binaries to ",(0,r.jsx)(n.code,{children:"bin"})," directory:"]}),"\n",(0,r.jsx)(n.h1,{id:"command-1",children:"Command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo cp -r YOUR_IMAGE/ /usr/bin/\n"})}),"\n",(0,r.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo cp -r jdk-17.0.5+8/ /usr/bin/\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Specify OpenJ9 for Java on your machine:"}),"\n",(0,r.jsx)(n.h1,{id:"command-2",children:"Command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/YOUR_IMAGE" 1\nsudo update-alternatives --config java (and choose OpenJ9)\n'})}),"\n",(0,r.jsx)(n.h1,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo update-alternatives --install "/usr/bin/java" "java" "/usr/bin/jdk-17.0.5+8/bin/java"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Change your ",(0,r.jsx)(n.code,{children:"JAVA_HOME"})," to OpenJ9 (if using the JDK implementation), where ",(0,r.jsx)(n.code,{children:"jdk-install-dir"})," is\nthe installation location you specified:"]}),"\n",(0,r.jsx)(n.h1,{id:"command-3",children:"Command"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=jdk-install-dir`\n"})}),"\n",(0,r.jsx)(n.h1,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export JAVA_HOME=/usr/bin/jdk-17.0.5+8\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"java-virtual-machine-size",children:"Java Virtual Machine size"}),"\n",(0,r.jsxs)(n.p,{children:["For Mainnet and testnets, the minimum ",(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/configure-jvm/manage-memory",children:"Java Virtual Machine (JVM) memory requirement is 8 GB"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"JVM memory requirements are highest when syncing, but will reduce after the node is synchronized to the chain head. Monitor your system to determine your actual JVM memory needs."}),"\n",(0,r.jsx)(n.h2,{id:"disk-space",children:"Disk space"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#sync-mode",children:"Fast synchronization"})," with ",(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/concepts/data-storage-formats",children:"pruning"})," enabled requires approximately 750 GB of disk space. ",(0,r.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#sync-mode",children:"Full synchronization"})," requires approximately 3 TB."]}),"\n",(0,r.jsx)(n.h2,{id:"disk-type",children:"Disk type"}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/disks",children:"local SSD storage"})," for high throughput nodes (validators and RPC nodes). Read-only nodes can use a lower performance setup."]}),"\n",(0,r.jsxs)(n.p,{children:["You can use local SSDs through ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/SCSI",children:"SCSI interfaces"}),". For higher performance in production settings, we recommend upgrading to ",(0,r.jsx)(n.a,{href:"https://cloud.google.com/compute/docs/disks/local-ssd#performance",children:"NVMe interfaces"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"aws-requirements",children:"AWS requirements"}),"\n",(0,r.jsxs)(n.p,{children:["We are running 22.4.2 Mainnet nodes using ",(0,r.jsx)(n.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,r.jsxs)(n.p,{children:["We synchronized the 22.4.2 Mainnet nodes using ",(0,r.jsx)(n.code,{children:"m6gd.2xlarge"})," boxes."]}),"\n",(0,r.jsx)(n.p,{children:"Using a larger box while synchronizing speeds up the sync process by giving it more resources. When the sync is completed, the box size can be reduced."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"If you are using a more recent release than 22.4.2, resource requirements may have increased."})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(67294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);