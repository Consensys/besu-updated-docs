"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[74407],{68677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=t(85893),i=t(11151);const o={title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},r="Manage JVM memory",s={id:"public-networks/how-to/configure-jvm/manage-memory",title:"Manage JVM memory",description:"Besu memory management",source:"@site/versioned_docs/version-23.10.0/public-networks/how-to/configure-jvm/manage-memory.md",sourceDirName:"public-networks/how-to/configure-jvm",slug:"/public-networks/how-to/configure-jvm/manage-memory",permalink:"/23.10.0/public-networks/how-to/configure-jvm/manage-memory",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/public-networks/how-to/configure-jvm/manage-memory.md",tags:[{label:"public networks",permalink:"/23.10.0/tags/public-networks"},{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Manage JVM memory",sidebar_position:2,description:"Besu memory management",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Pass JVM options",permalink:"/23.10.0/public-networks/how-to/configure-jvm/pass-jvm-options"},next:{title:"Use Java Flight Recorder",permalink:"/23.10.0/public-networks/how-to/configure-jvm/java-flight-recorder"}},m={},l=[{value:"Manage the heap dump",id:"manage-the-heap-dump",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"manage-jvm-memory",children:"Manage JVM memory"}),"\n",(0,a.jsx)(n.p,{children:"You can manage Java Virtual Machine (JVM) memory usage for Besu by modifying the maximum heap size."}),"\n",(0,a.jsx)(n.p,{children:"By default, the JVM uses 25% of system RAM. For example, if you have 16 GB RAM installed, the JVM uses 4 GB by default."}),"\n",(0,a.jsx)(n.p,{children:"On public networks, we recommend setting the maximum heap size to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"3 GB on an 8 GB RAM system."}),"\n",(0,a.jsx)(n.li,{children:"5 GB on a 16 GB RAM system."}),"\n",(0,a.jsx)(n.li,{children:"8 GB on a system with at least 24 GB RAM."}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Setting a higher maximum heap size speeds up the sync period but doesn't have much impact after sync. Thus, we recommend setting it to 8 GB only when you have available RAM."})}),"\n",(0,a.jsxs)(n.p,{children:["You can set the maximum heap size using the ",(0,a.jsx)(n.code,{children:"BESU_OPTS"})," environment variable and the ",(0,a.jsx)(n.code,{children:"-Xmx"})," option. The following examples set the maximum heap size to 8 GB:"]}),"\n",(0,a.jsx)(n.h1,{id:"exported-environment-variable-example",children:"Exported environment variable example"}),"\n",(0,a.jsx)(n.p,{children:"Set the variable for the whole shell before running Besu."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"export BESU_OPTS=-Xmx8g\n"})}),"\n",(0,a.jsx)(n.h1,{id:"inline-environment-variable-example",children:"Inline environment variable example"}),"\n",(0,a.jsx)(n.p,{children:"Set the variable only for the specific Besu command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"BESU_OPTS=-Xmx8g besu [Besu options]\n"})}),"\n",(0,a.jsxs)(n.h1,{id:"service-file-example",children:[(0,a.jsx)(n.code,{children:".service"})," file example"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'[Service]\n...\nEnvironment="BESU_OPTS=-Xmx8g"\nExecStart=besu [Besu options]\n...\n'})}),"\n",(0,a.jsx)(n.h2,{id:"manage-the-heap-dump",children:"Manage the heap dump"}),"\n",(0,a.jsxs)(n.p,{children:["Heap dump file generation is disabled by default. To enable it, set the ",(0,a.jsx)(n.code,{children:"-XX:+HeapDumpOnOutOfMemoryError"})," Java option."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'BESU_OPTS="-XX:+HeapDumpOnOutOfMemoryError"\n'})}),"\n",(0,a.jsx)(n.p,{children:"When heap dump file generation is enabled, and an out-of-memory error occurs, the heap dump file is saved in the Besu runtime directory by default."}),"\n",(0,a.jsxs)(n.p,{children:["The heap dump file might be large and can saturate your drive. It can be up to the size of the allocated memory. For example, for 8 GB heap memory, the file can be up to 8 GB. Specify the directory where you want the dump to be saved using the ",(0,a.jsx)(n.code,{children:"-XX:HeapDumpPath"})," Java option."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'BESU_OPTS="-XX:HeapDumpPath=/<path>/<to>/<directory>"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(67294);const i={},o=a.createContext(i);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);