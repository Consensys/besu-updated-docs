"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[727],{53311:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(85893),c=r(11151);const s={title:"Transaction trace types",sidebar_position:6,description:"Transaction trace types",tags:["private networks"]},d="Transaction trace types",i={id:"public-networks/reference/trace-types",title:"Transaction trace types",description:"Transaction trace types",source:"@site/versioned_docs/version-23.4.0/public-networks/reference/trace-types.md",sourceDirName:"public-networks/reference",slug:"/public-networks/reference/trace-types",permalink:"/23.4.0/public-networks/reference/trace-types",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/reference/trace-types.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:6,frontMatter:{title:"Transaction trace types",sidebar_position:6,description:"Transaction trace types",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"EVM tool options",permalink:"/23.4.0/public-networks/reference/evm-tool"},next:{title:"Projects using Besu",permalink:"/23.4.0/public-networks/reference/projects-using-besu"}},a={},l=[{value:"<code>trace</code>",id:"trace",level:2},{value:"<code>vmTrace</code>",id:"vmtrace",level:2},{value:"<code>stateDiff</code>",id:"statediff",level:2},{value:"Applicable API methods",id:"applicable-api-methods",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"transaction-trace-types",children:"Transaction trace types"}),"\n",(0,t.jsxs)(n.p,{children:["When ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/troubleshoot/trace-transactions",children:"tracing transactions"}),", the trace type options are ",(0,t.jsx)(n.a,{href:"#trace",children:(0,t.jsx)(n.code,{children:"trace"})}),", ",(0,t.jsx)(n.a,{href:"#vmtrace",children:(0,t.jsx)(n.code,{children:"vmTrace"})}),", and ",(0,t.jsx)(n.a,{href:"#statediff",children:(0,t.jsx)(n.code,{children:"stateDiff"})}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"trace",children:(0,t.jsx)(n.code,{children:"trace"})}),"\n",(0,t.jsx)(n.p,{children:"An ordered list of calls to other contracts, excluding precompiled contracts."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="trace example"',children:'"trace":[\n  {\n    "action":{\n      "callType":"call",\n      "from":"0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",\n      "gas":"0xffadea",\n      "input":"0x",\n      "to":"0x0100000000000000000000000000000000000000",\n      "value":"0x0"\n    },\n    "result":{\n      "gasUsed":"0x1e",\n      "output":"0x"\n    },\n    "subtraces":0,\n    "traceAddress":[\n    ],\n    "type":"call"\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"action"})}),(0,t.jsx)(n.td,{children:"Transaction details."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"callType"})}),(0,t.jsxs)(n.td,{children:["Whether the transaction is ",(0,t.jsx)(n.code,{children:"call"})," or ",(0,t.jsx)(n.code,{children:"create"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"from"})}),(0,t.jsx)(n.td,{children:"Address of the transaction sender."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gas"})}),(0,t.jsx)(n.td,{children:"Gas provided by sender."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"input"})}),(0,t.jsx)(n.td,{children:"Transaction data."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"to"})}),(0,t.jsx)(n.td,{children:"Target of the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"value"})}),(0,t.jsx)(n.td,{children:"Value transferred in the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"result"})}),(0,t.jsx)(n.td,{children:"Transaction result."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"gasUsed"})}),(0,t.jsx)(n.td,{children:"Gas used by the transaction. Includes any refunds of unused gas."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"output"})}),(0,t.jsxs)(n.td,{children:["Return value of the contract call. Contains only the actual value sent by a ",(0,t.jsx)(n.code,{children:"RETURN"})," operation. If a ",(0,t.jsx)(n.code,{children:"RETURN"})," was not executed, the output is empty bytes."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"subTraces"})}),(0,t.jsx)(n.td,{children:"Traces of contract calls made by the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"traceAddress"})}),(0,t.jsx)(n.td,{children:"Tree list address of where the call occurred, address of the parents, and order of the current sub call."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsxs)(n.td,{children:["Whether the transaction is a ",(0,t.jsx)(n.code,{children:"CALL"})," or ",(0,t.jsx)(n.code,{children:"CREATE"})," series operation."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"vmtrace",children:(0,t.jsx)(n.code,{children:"vmTrace"})}),"\n",(0,t.jsx)(n.p,{children:"An ordered list of EVM actions when processing the transaction."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vmTrace"})," only reports actual data returned from a ",(0,t.jsx)(n.code,{children:"RETURN"})," opcode and does not return the contents of the reserved output space for the call operations. As a result:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"vmTrace"})," reports ",(0,t.jsx)(n.code,{children:"null"})," when a call operation ends because of a ",(0,t.jsx)(n.code,{children:"STOP"}),", ",(0,t.jsx)(n.code,{children:"HALT"}),", ",(0,t.jsx)(n.code,{children:"REVERT"}),", running out of instructions, or any exceptional halts."]}),"\n",(0,t.jsxs)(n.li,{children:["When a ",(0,t.jsx)(n.code,{children:"RETURN"})," operation returns data of a different length to the space reserved by the call, ",(0,t.jsx)(n.code,{children:"vmTrace"})," reports only the data passed to the ",(0,t.jsx)(n.code,{children:"RETURN"})," operation and does not include pre-existing memory data or trim the returned data."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For out of gas operations, ",(0,t.jsx)(n.code,{children:"vmTrace"})," reports the operation that caused the out of gas exception, including the calculated gas cost. ",(0,t.jsx)(n.code,{children:"vmTrace"})," does not report ",(0,t.jsx)(n.code,{children:"ex"})," values because the operation is not executed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="vmTrace example"',children:'"vmTrace":{\n  "code":"0x7f3940be4289e4c3587d88c1856cc95352461992db0a584c281226faefe560b3016000527f14c4d2c102bdeb2354bfc3dc96a95e4512cf3a8461e0560e2272dbf884ef3905601052600851",\n  "ops":[\n    {\n    "cost":3,\n    "ex":{\n      "mem":null,\n      "push":[\n        "0x8"\n      ],\n      "store":null,\n      "used":16756175\n    },\n    "pc":72,\n    "sub":null\n    },\n    ...\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"code"})}),(0,t.jsx)(n.td,{children:"Code executed by the EVM."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ops"})}),(0,t.jsx)(n.td,{children:"Sequence of EVM operations (opcodes) executed in the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"cost"})}),(0,t.jsx)(n.td,{children:"Gas cost of the opcode. Includes memory expansion costs but not gas refunds. For precompiled contract calls, reports only the actual cost."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ex"})}),(0,t.jsx)(n.td,{children:"Executed operations."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mem"})}),(0,t.jsx)(n.td,{children:"Memory read or written by the operation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"push"})}),(0,t.jsx)(n.td,{children:"Adjusted stack items. For swap, includes all intermediate values and the result. Otherwise, is the value pushed onto the stack."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"store"})}),(0,t.jsx)(n.td,{children:"Account storage written by the operation."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"used"})}),(0,t.jsx)(n.td,{children:"Remaining gas taking into account the all but 1/64th rule for calls."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pc"})}),(0,t.jsx)(n.td,{children:"Program counter."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sub"})}),(0,t.jsx)(n.td,{children:"Sub call operations."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"statediff",children:(0,t.jsx)(n.code,{children:"stateDiff"})}),"\n",(0,t.jsxs)(n.p,{children:["State changes in the requested block for each transaction represented as a map of accounts to an object. Besu lists the balance, code, nonce, and storage changes from immediately before the transaction to after the transaction. For the ",(0,t.jsx)(n.code,{children:"key:value"})," pairs:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"+"})," indicates the field didn\u2019t exist before and now has the specified value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-"})," indicates a deleted value"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"*"})," has a ",(0,t.jsx)(n.code,{children:"from"})," and a ",(0,t.jsx)(n.code,{children:"to"})," value."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"An absent value is distinct from zero when creating accounts or clearing storage."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title="stateDiff example"',children:'"stateDiff":{\n  "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73":{\n    "balance":{\n      "*":{\n        "from":"0xffffffffffffffffffffffffffffffffc3e12a20b",\n        "to":"0xffffffffffffffffffffffffffffffffc3dc5f091"\n      }\n    },\n    "code":"=",\n    "nonce":{\n      "*":{\n        "from":"0x14",\n        "to":"0x15"\n      }\n    },\n    "storage":{\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Key"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"balance"})}),(0,t.jsx)(n.td,{children:"Change of balance event."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"balance.from"})}),(0,t.jsx)(n.td,{children:"Balance before the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"balance.to"})}),(0,t.jsx)(n.td,{children:"Balance after the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"code"})}),(0,t.jsx)(n.td,{children:"Changes to code. None in this example."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nonce"})}),(0,t.jsx)(n.td,{children:"Change of nonce."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nonce.from"})}),(0,t.jsx)(n.td,{children:"Nonce before the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nonce.to"})}),(0,t.jsx)(n.td,{children:"Nonce after the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"storage"})}),(0,t.jsx)(n.td,{children:"Changes to storage. None in this example."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"applicable-api-methods",children:"Applicable API methods"}),"\n",(0,t.jsxs)(n.p,{children:["The trace options ",(0,t.jsx)(n.code,{children:"trace"}),", ",(0,t.jsx)(n.code,{children:"vmTrace"}),", and ",(0,t.jsx)(n.code,{children:"stateDiff"})," are available for the following ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/troubleshoot/trace-transactions#ad-hoc-tracing-apis",children:"ad-hoc tracing API methods"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_call",children:(0,t.jsx)(n.code,{children:"trace_call"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_callmany",children:(0,t.jsx)(n.code,{children:"trace_callMany"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_rawtransaction",children:(0,t.jsx)(n.code,{children:"trace_rawTransaction"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_replayblocktransactions",children:(0,t.jsx)(n.code,{children:"trace_replayBlockTransactions"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Only the ",(0,t.jsx)(n.code,{children:"trace"})," option is available for the following ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/troubleshoot/trace-transactions#transaction-trace-filtering-apis",children:"transaction-trace filtering API methods"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_block",children:(0,t.jsx)(n.code,{children:"trace_block"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_filter",children:(0,t.jsx)(n.code,{children:"trace_filter"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_get",children:(0,t.jsx)(n.code,{children:"trace_get"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#trace_transaction",children:(0,t.jsx)(n.code,{children:"trace_transaction"})})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>d});var t=r(67294);const c={},s=t.createContext(c);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);