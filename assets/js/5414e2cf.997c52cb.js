"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[50413],{91389:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>o});var a=s(85893),r=s(11151);const d={title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},c="EVM tool reference",i={id:"public-networks/reference/evm-tool",title:"EVM tool options",description:"Besu EVM tool options reference",source:"@site/versioned_docs/version-23.4.1/public-networks/reference/evm-tool.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/evm-tool",permalink:"/23.4.1/public-networks/reference/evm-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/public-networks/reference/evm-tool.md",tags:[{label:"public networks",permalink:"/23.4.1/tags/public-networks"},{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1703037533,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:5,frontMatter:{title:"EVM tool options",sidebar_position:5,description:"Besu EVM tool options reference",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Genesis file items",permalink:"/23.4.1/public-networks/reference/genesis-items"},next:{title:"Transaction trace types",permalink:"/23.4.1/public-networks/reference/trace-types"}},t={},o=[{value:"Run options",id:"run-options",level:2},{value:"<code>code</code>",id:"code",level:3},{value:"<code>gas</code>",id:"gas",level:3},{value:"<code>price</code>",id:"price",level:3},{value:"<code>sender</code>",id:"sender",level:3},{value:"<code>receiver</code>",id:"receiver",level:3},{value:"<code>input</code>",id:"input",level:3},{value:"<code>value</code>",id:"value",level:3},{value:"<code>json</code>, <code>trace</code>",id:"json-trace",level:3},{value:"<code>json-alloc</code>",id:"json-alloc",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory",level:3},{value:"<code>trace.[no]stack</code>",id:"tracenostack",level:3},{value:"<code>trace.[no]returndata</code>",id:"tracenoreturndata",level:3},{value:"<code>[no]time</code>",id:"notime",level:3},{value:"<code>genesis</code>",id:"genesis",level:3},{value:"<code>chain</code>",id:"chain",level:3},{value:"<code>repeat</code>",id:"repeat",level:3},{value:"<code>revert-reason-enabled</code>",id:"revert-reason-enabled",level:3},{value:"<code>fork</code>",id:"fork",level:3},{value:"<code>key-value-storage</code>",id:"key-value-storage",level:3},{value:"<code>data-path</code>",id:"data-path",level:3},{value:"<code>block-number</code>",id:"block-number",level:3},{value:"<code>version</code>",id:"version",level:3},{value:"State test options",id:"state-test-options",level:2},{value:"<code>json</code>, <code>trace</code>",id:"json-trace-1",level:3},{value:"<code>[no]memory</code>, <code>trace.[no]memory</code>",id:"nomemory-tracenomemory-1",level:3},{value:"Use command arguments",id:"use-command-arguments",level:3},{value:"Use standard input",id:"use-standard-input",level:3},{value:"EOF code validation",id:"eof-code-validation",level:2},{value:"<code>file</code>",id:"file",level:3},{value:"Use command arguments",id:"use-command-arguments-1",level:3},{value:"Use standard input",id:"use-standard-input-1",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"evm-tool-reference",children:"EVM tool reference"}),"\n",(0,a.jsxs)(n.p,{children:["This reference describes options for running the following ",(0,a.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/troubleshoot/evm-tool",children:"using the EVM tool"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#run-options",children:"Arbitrary EVM programs"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#state-test-options",children:"Ethereum state tests"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#eof-code-validation",children:"Ethereum object formatted code"})}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Option names that include ",(0,a.jsx)(n.code,{children:"trace"}),", such as ",(0,a.jsx)(n.a,{href:"#json-trace",children:(0,a.jsx)(n.code,{children:"--trace"})})," and ",(0,a.jsx)(n.a,{href:"#nomemory-tracenomemory",children:(0,a.jsx)(n.code,{children:"--trace.[no]memory"})})," exist to support ",(0,a.jsx)(n.a,{href:"https://ethereum-tests.readthedocs.io/en/latest/t8ntool.html",children:(0,a.jsx)(n.code,{children:"t8ntool"})})," reference testing, and are interchangeable with their standard option names."]})}),"\n",(0,a.jsx)(n.h2,{id:"run-options",children:"Run options"}),"\n",(0,a.jsx)(n.p,{children:"The first mode of the EVM tool runs an arbitrary EVM and is invoked without an extra command. Command line options specify the code and other contextual information."}),"\n",(0,a.jsx)(n.h3,{id:"code",children:(0,a.jsx)(n.code,{children:"code"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--code=<code>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--code=5B600080808060045AFA50600056\n"})}),"\n",(0,a.jsx)(n.p,{children:"The code to be executed, in compiled hex code form. Execution fails if this is not set."}),"\n",(0,a.jsx)(n.h3,{id:"gas",children:(0,a.jsx)(n.code,{children:"gas"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--gas=<integer>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--gas=100000000\n"})}),"\n",(0,a.jsx)(n.p,{children:"Amount of gas to make available to the EVM. The default is 10 billion, a number unlikely to be seen in any production blockchain."}),"\n",(0,a.jsx)(n.h3,{id:"price",children:(0,a.jsx)(n.code,{children:"price"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--price=<integer>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-2",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--price=10\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Price of gas in Gwei. The default is ",(0,a.jsx)(n.code,{children:"0"}),". If set to a non-zero value, the sender account must have enough value to cover the gas fees."]}),"\n",(0,a.jsx)(n.h3,{id:"sender",children:(0,a.jsx)(n.code,{children:"sender"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-3",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--sender=<address>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-3",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--sender=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The account the invocation is sent from. The specified account must exist in the world state, which, unless specified by ",(0,a.jsx)(n.a,{href:"#genesis",children:(0,a.jsx)(n.code,{children:"--genesis"})}),", is the set of ",(0,a.jsx)(n.a,{href:"/23.4.1/private-networks/reference/accounts-for-testing",children:"accounts used for testing"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"receiver",children:(0,a.jsx)(n.code,{children:"receiver"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-4",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--receiver=<address>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-4",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--receiver=0x588108d3eab34e94484d7cda5a1d31804ca96fe7\n"})}),"\n",(0,a.jsx)(n.p,{children:"The account the invocation is sent to. The specified account does not need to exist."}),"\n",(0,a.jsx)(n.h3,{id:"input",children:(0,a.jsx)(n.code,{children:"input"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-5",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--input=<code>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-5",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--input=9064129300000000000000000000000000000000000000000000000000000000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The data passed into the call. Corresponds to the ",(0,a.jsx)(n.code,{children:"data"})," field of the transaction and is returned by the ",(0,a.jsx)(n.code,{children:"CALLDATA"})," and related opcodes."]}),"\n",(0,a.jsx)(n.h3,{id:"value",children:(0,a.jsx)(n.code,{children:"value"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-6",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--value=<integer>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-6",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--value=1000000000000000000\n"})}),"\n",(0,a.jsx)(n.p,{children:"The value, in wei, attached to this transaction. For operations that query the value or transfer it to other accounts this is the amount that is available. The amount is not reduced to cover intrinsic cost and gas fees."}),"\n",(0,a.jsxs)(n.h3,{id:"json-trace",children:[(0,a.jsx)(n.code,{children:"json"}),", ",(0,a.jsx)(n.code,{children:"trace"})]}),"\n",(0,a.jsx)(n.h1,{id:"syntax-7",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Provides an operation-by-operation trace of the command in JSON."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--trace"})," is an alias for ",(0,a.jsx)(n.code,{children:"--json"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"json-alloc",children:(0,a.jsx)(n.code,{children:"json-alloc"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-8",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--json-alloc\n"})}),"\n",(0,a.jsx)(n.p,{children:"Outputs a JSON summary of the post-execution world state and allocations."}),"\n",(0,a.jsxs)(n.h3,{id:"nomemory-tracenomemory",children:[(0,a.jsx)(n.code,{children:"[no]memory"}),", ",(0,a.jsx)(n.code,{children:"trace.[no]memory"})]}),"\n",(0,a.jsx)(n.h1,{id:"syntax-9",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--nomemory, --memory\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"--nomemory"})," disables tracing the memory output for each operation. Setting ",(0,a.jsx)(n.code,{children:"--memory"})," enables it. Memory traces are disabled by default."]}),"\n",(0,a.jsx)(n.p,{children:"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--trace.[no]memory"})," is an alias for ",(0,a.jsx)(n.code,{children:"--[no]memory"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"tracenostack",children:(0,a.jsx)(n.code,{children:"trace.[no]stack"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-10",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--trace.nostack, --trace.stack\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"--trace.nostack"})," disables tracing the operand stack for each operation. Setting ",(0,a.jsx)(n.code,{children:"--trace.stack"})," enables it. Stack traces are enabled by default."]}),"\n",(0,a.jsx)(n.h3,{id:"tracenoreturndata",children:(0,a.jsx)(n.code,{children:"trace.[no]returndata"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-11",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--trace.noreturndata, --trace.returndata\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"--trace.noreturndata"})," disables tracing the return data for each operation. Setting ",(0,a.jsx)(n.code,{children:"--trace.returndata"})," enables it. Return data traces are enabled by default."]}),"\n",(0,a.jsx)(n.h3,{id:"notime",children:(0,a.jsx)(n.code,{children:"[no]time"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-12",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--notime, --time\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"--notime"})," disables including time data in the summary output. Setting ",(0,a.jsx)(n.code,{children:"--time"})," enables it."]}),"\n",(0,a.jsx)(n.p,{children:"This is useful for testing and differential evaluations."}),"\n",(0,a.jsx)(n.h3,{id:"genesis",children:(0,a.jsx)(n.code,{children:"genesis"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-13",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--genesis=<path>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-7",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--genesis=/opt/besu/genesis.json\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"/23.4.1/public-networks/reference/genesis-items",children:"Besu genesis file"})," to use when evaluating the EVM. Most useful are the ",(0,a.jsx)(n.code,{children:"alloc"})," items that set up accounts and their stored memory states."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--prestate"})," is a deprecated alias for ",(0,a.jsx)(n.code,{children:"--genesis"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"chain",children:(0,a.jsx)(n.code,{children:"chain"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-14",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--chain=<mainnet|goerli|sepolia|dev|classic|mordor|kotti|astor>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-8",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--chain=goerli\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The well-known network genesis file to use when evaluating the EVM. These values are an alternative to the ",(0,a.jsx)(n.a,{href:"#genesis",children:(0,a.jsx)(n.code,{children:"--genesis"})})," option for well-known networks."]}),"\n",(0,a.jsx)(n.h3,{id:"repeat",children:(0,a.jsx)(n.code,{children:"repeat"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-15",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--repeat=<integer>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-9",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--repeat=1000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Number of times to repeat the contract before gathering timing information. This is useful when benchmarking EVM operations. The default is ",(0,a.jsx)(n.code,{children:"0"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"revert-reason-enabled",children:(0,a.jsx)(n.code,{children:"revert-reason-enabled"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-16",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--revert-reason-enabled\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Enables tracing the reason included in ",(0,a.jsx)(n.code,{children:"REVERT"})," operations. The revert reason is enabled by default."]}),"\n",(0,a.jsx)(n.h3,{id:"fork",children:(0,a.jsx)(n.code,{children:"fork"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-17",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--fork=<string>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-10",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--fork=FutureEips\n"})}),"\n",(0,a.jsx)(n.p,{children:"Specific fork to evaluate, overriding network settings."}),"\n",(0,a.jsx)(n.h3,{id:"key-value-storage",children:(0,a.jsx)(n.code,{children:"key-value-storage"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-18",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--key-value-storage=<memory|rocksdb>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-11",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--key-value-storage=rocksdb\n"})}),"\n",(0,a.jsx)(n.p,{children:"Kind of key value storage to use."}),"\n",(0,a.jsxs)(n.p,{children:["It might be useful to execute isolated EVM calls in the context of an actual world state. The default is ",(0,a.jsx)(n.code,{children:"memory"}),", which executes the call only in the context of the world provided by ",(0,a.jsx)(n.a,{href:"#genesis",children:(0,a.jsx)(n.code,{children:"--genesis"})})," or ",(0,a.jsx)(n.a,{href:"#chain",children:(0,a.jsx)(n.code,{children:"--chain"})})," at block zero."]}),"\n",(0,a.jsxs)(n.p,{children:["When set to ",(0,a.jsx)(n.code,{children:"rocksdb"})," and combined with ",(0,a.jsx)(n.a,{href:"#data-path",children:(0,a.jsx)(n.code,{children:"--data-path"})}),", ",(0,a.jsx)(n.a,{href:"#block-number",children:(0,a.jsx)(n.code,{children:"--block-number"})}),", and ",(0,a.jsx)(n.a,{href:"#genesis",children:(0,a.jsx)(n.code,{children:"--genesis"})}),", a Besu node that isn't currently running can be used to provide the appropriate world state for a transaction. This is useful when evaluating consensus failures."]}),"\n",(0,a.jsx)(n.h3,{id:"data-path",children:(0,a.jsx)(n.code,{children:"data-path"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-19",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--data-path=<path>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-12",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--data-path=/opt/besu/data\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When ",(0,a.jsx)(n.a,{href:"#key-value-storage",children:(0,a.jsx)(n.code,{children:"--key-value-storage"})})," is set to ",(0,a.jsx)(n.code,{children:"rocksdb"}),", specifies the location of the database on disk."]}),"\n",(0,a.jsx)(n.h3,{id:"block-number",children:(0,a.jsx)(n.code,{children:"block-number"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-20",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--block-number=<integer>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-13",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--block-number=10000000\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The block number to evaluate the code against. Used to ensure that the EVM is evaluating the code against the correct fork, or to specify the world state when ",(0,a.jsx)(n.a,{href:"#key-value-storage",children:(0,a.jsx)(n.code,{children:"--key-value-storage"})})," is set to ",(0,a.jsx)(n.code,{children:"rocksdb"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"version",children:(0,a.jsx)(n.code,{children:"version"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-21",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--version\n"})}),"\n",(0,a.jsx)(n.p,{children:"Displays the version information."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"-v"})," is an alias for ",(0,a.jsx)(n.code,{children:"--version"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"state-test-options",children:"State test options"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"state-test"})," subcommand allows the ",(0,a.jsx)(n.a,{href:"https://github.com/ethereum/tests/tree/develop/GeneralStateTests",children:"Ethereum state tests"})," to be evaluated. The only applicable options are ",(0,a.jsx)(n.code,{children:"--json"})," and ",(0,a.jsx)(n.code,{children:"--nomemory"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"json-trace-1",children:[(0,a.jsx)(n.code,{children:"json"}),", ",(0,a.jsx)(n.code,{children:"trace"})]}),"\n",(0,a.jsx)(n.h1,{id:"syntax-22",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--json\n"})}),"\n",(0,a.jsx)(n.p,{children:"Provides an operation-by-operation trace of the command in JSON."}),"\n",(0,a.jsxs)(n.p,{children:["Set this option for EVM Lab Fuzzing. Whether or not ",(0,a.jsx)(n.code,{children:"--json"})," is set, a summary JSON object is printed to standard output for each state test executed."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--trace"})," is an alias for ",(0,a.jsx)(n.code,{children:"--json"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"nomemory-tracenomemory-1",children:[(0,a.jsx)(n.code,{children:"[no]memory"}),", ",(0,a.jsx)(n.code,{children:"trace.[no]memory"})]}),"\n",(0,a.jsx)(n.h1,{id:"syntax-23",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--[no]memory\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Setting ",(0,a.jsx)(n.code,{children:"--nomemory"})," disables tracing the memory output for each operation. Setting ",(0,a.jsx)(n.code,{children:"--memory"})," enables it. Memory traces are disabled by default."]}),"\n",(0,a.jsx)(n.p,{children:"For memory heavy scripts, disabling memory traces may reduce the volume of JSON output."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--trace.[no]memory"})," is an alias for ",(0,a.jsx)(n.code,{children:"--[no]memory"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"use-command-arguments",children:"Use command arguments"}),"\n",(0,a.jsx)(n.p,{children:"If you use command arguments, you can list one or more state tests. All the state tests are evaluated in the order they are specified."}),"\n",(0,a.jsx)(n.h1,{id:"docker-example",children:"Docker example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --rm -v ${PWD}:/opt/referencetests hyperledger/besu-evmtool:develop --json state-test /opt/referencetests/GeneralStateTests/stExample/add11.json\n"})}),"\n",(0,a.jsx)(n.h1,{id:"cli-example",children:"CLI example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"evm --json state-test stExample/add11.json\n"})}),"\n",(0,a.jsx)(n.h3,{id:"use-standard-input",children:"Use standard input"}),"\n",(0,a.jsx)(n.p,{children:"If no reference tests are passed in using the command line, the EVM tool loads one complete JSON object from standard input and executes that state test."}),"\n",(0,a.jsx)(n.h1,{id:"docker-example-1",children:"Docker example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"docker run --rm -i hyperledger/besu-evmtool:develop --json state-test < stExample/add11.json\n"})}),"\n",(0,a.jsx)(n.h1,{id:"cli-example-1",children:"CLI example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"evm --json state-test < stExample/add11.json\n"})}),"\n",(0,a.jsx)(n.h2,{id:"eof-code-validation",children:"EOF code validation"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"code-validate"})," subcommand allows ",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-3540",children:"Ethereum object formatted (EOF)"})," code to be validated. It accepts candidate EOF containers or EVM bytecode using the ",(0,a.jsx)(n.code,{children:"--file"})," option, command arguments, or standard input."]}),"\n",(0,a.jsx)(n.h3,{id:"file",children:(0,a.jsx)(n.code,{children:"file"})}),"\n",(0,a.jsx)(n.h1,{id:"syntax-24",children:"Syntax"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--file=<file>\n"})}),"\n",(0,a.jsx)(n.h1,{id:"example-14",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"--file=eof.txt\n"})}),"\n",(0,a.jsx)(n.p,{children:"File containing one or more EOF containers or EVM bytecode. Each line in the file is considered a separate program."}),"\n",(0,a.jsx)(n.h3,{id:"use-command-arguments-1",children:"Use command arguments"}),"\n",(0,a.jsx)(n.p,{children:"If you use command arguments, each argument is considered a separate program. If a code segment includes spaces, it must be contained in quotes."}),"\n",(0,a.jsx)(n.h1,{id:"docker-example-2",children:"Docker example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run --rm hyperledger/besu-evmtool:develop code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n'})}),"\n",(0,a.jsx)(n.h1,{id:"cli-example-2",children:"CLI example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'evm code-validate "0xef0001 010008 020002-0007-0002 030000 00 00000002-02010002 59-59-b00001-50-b1 03-b1" 0xef0002 0xef00010100040200010001030000000000000000\n'})}),"\n",(0,a.jsx)(n.h3,{id:"use-standard-input-1",children:"Use standard input"}),"\n",(0,a.jsx)(n.p,{children:"If no reference tests are passed in using the command line, the EVM tool loads and validates code from standard input. Each line is considered a separate program. Comment lines and blanks are ignored."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var a=s(67294);const r={},d=a.createContext(r);function c(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);