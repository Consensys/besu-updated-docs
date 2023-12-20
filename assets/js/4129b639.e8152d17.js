"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[87923],{38405:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=o(85893),r=o(11151);const s={title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},i="Use the EVM tool",l={id:"public-networks/how-to/troubleshoot/evm-tool",title:"Use EVM tool",description:"Hyperledger Besu EVM tool",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/troubleshoot/evm-tool.md",sourceDirName:"public-networks/how-to/troubleshoot",slug:"/public-networks/how-to/troubleshoot/evm-tool",permalink:"/23.7.1/public-networks/how-to/troubleshoot/evm-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/troubleshoot/evm-tool.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"},{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Use EVM tool",sidebar_position:1,description:"Hyperledger Besu EVM tool",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Upgrade Besu",permalink:"/23.7.1/public-networks/how-to/upgrade-node"},next:{title:"Trace transactions",permalink:"/23.7.1/public-networks/how-to/troubleshoot/trace-transactions"}},d={},a=[{value:"Get the EVM tool",id:"get-the-evm-tool",level:2},{value:"Build from source",id:"build-from-source",level:3},{value:"Execute with Docker",id:"execute-with-docker",level:3},{value:"EVM tool run options",id:"evm-tool-run-options",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"use-the-evm-tool",children:"Use the EVM tool"}),"\n",(0,n.jsx)(t.p,{children:"The Besu EVM tool is a CLI program that executes arbitrary EVM programs and Ethereum State Tests outside the context of an operating node. Use the EVM tool for benchmarking and fuzz testing."}),"\n",(0,n.jsx)(t.h2,{id:"get-the-evm-tool",children:"Get the EVM tool"}),"\n",(0,n.jsx)(t.p,{children:"The Besu EVM tool does not have a standard zip file distribution. To use, you need to either build from the source repository or use a pre-published docker image."}),"\n",(0,n.jsx)(t.h3,{id:"build-from-source",children:"Build from source"}),"\n",(0,n.jsx)(t.p,{children:"To build from source, run the following from the root of the Besu repository:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"./gradlew :ethereum:evmTool:installDist\n"})}),"\n",(0,n.jsxs)(t.p,{children:["An extractable archive files is created in ",(0,n.jsx)(t.code,{children:"ethereum/evmtool/build/distributions"})," and an executable installation in ",(0,n.jsx)(t.code,{children:"ethereum/evmtool/build/install/evmtool"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Execute the EVM tool:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ethereum/evmtool/build/install/evmtool/bin/evm <evmtool options>\n"})}),"\n",(0,n.jsx)(t.h3,{id:"execute-with-docker",children:"Execute with Docker"}),"\n",(0,n.jsx)(t.p,{children:"To run the Besu EVM tool in a container:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run -rm <docker options> hyperledger/besu-evmtool:develop <evmtool options>\n"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Because no data is stored in local directories we recommended using the ",(0,n.jsx)(t.code,{children:"-rm"})," docker option. The ",(0,n.jsx)(t.code,{children:"-rm"})," option deletes the container at the end of execution."]}),"\n",(0,n.jsxs)(t.li,{children:["If you use an option that requires input from standard in, use the ",(0,n.jsx)(t.code,{children:"-i"})," docker option. The ",(0,n.jsx)(t.code,{children:"-i"})," option pipes standard input to the EVM tool."]}),"\n",(0,n.jsxs)(t.li,{children:["If you need to reference files we recommend using a docker file binding, such as ",(0,n.jsx)(t.code,{children:"-v ${PWD}:/opt/data"}),", which maps the current directory to the ",(0,n.jsx)(t.code,{children:"/opt/data"})," directory in the container."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"latest"})," tag is the latest released version of Besu, starting with 1.5.3. The ",(0,n.jsx)(t.code,{children:"develop"})," tag is the current main branch code that will go into a future release version of Besu."]})}),"\n",(0,n.jsx)(t.h2,{id:"evm-tool-run-options",children:"EVM tool run options"}),"\n",(0,n.jsxs)(t.p,{children:["The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. ",(0,n.jsx)(t.a,{href:"/23.7.1/public-networks/reference/evm-tool",children:"Command line options"})," specify the code and other contextual information."]}),"\n",(0,n.jsxs)(t.p,{children:["The EVM tool also has a ",(0,n.jsxs)(t.a,{href:"/23.7.1/public-networks/reference/evm-tool#state-test-options",children:[(0,n.jsx)(t.code,{children:"state-test"})," subcommand"]})," that allows ",(0,n.jsx)(t.a,{href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests",children:"Ethereum state tests"})," to be evaluated, and a ",(0,n.jsxs)(t.a,{href:"/23.7.1/public-networks/reference/evm-tool#eof-code-validation",children:[(0,n.jsx)(t.code,{children:"code-validate"})," subcommand"]})," that allows ",(0,n.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3540",children:"Ethereum object formatted (EOF)"})," code to be validated. Most of the options from EVM execution don't apply."]}),"\n",(0,n.jsx)(t.h1,{id:"state-test",children:(0,n.jsx)(t.code,{children:"state-test"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"evm state-test <state-test> --nomemory\n"})}),"\n",(0,n.jsx)(t.h1,{id:"code-validate",children:(0,n.jsx)(t.code,{children:"code-validate"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"evm code-validate --file <file>\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/23.7.1/public-networks/reference/evm-tool",children:"EVM tool reference"})," provides more information on these modes."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(67294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);