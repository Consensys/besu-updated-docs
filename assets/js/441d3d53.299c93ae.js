"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[95437],{47838:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var s=i(85893),t=i(11151);const a={title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},c="Use the Engine API",o={id:"public-networks/how-to/use-engine-api",title:"Use the Engine API",description:"Use the Engine API to communicate with a consensus client.",source:"@site/versioned_docs/version-23.10.1/public-networks/how-to/use-engine-api.md",sourceDirName:"public-networks/how-to",slug:"/public-networks/how-to/use-engine-api",permalink:"/23.10.1/public-networks/how-to/use-engine-api",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/public-networks/how-to/use-engine-api.md",tags:[{label:"public networks",permalink:"/23.10.1/tags/public-networks"}],version:"23.10.1",lastUpdatedAt:1703031856,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Use the Engine API",sidebar_position:2,description:"Use the Engine API to communicate with a consensus client.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Access logs using JSON-RPC",permalink:"/23.10.1/public-networks/how-to/use-besu-api/access-logs"},next:{title:"Use a configuration file",permalink:"/23.10.1/public-networks/how-to/configuration-file"}},d={},r=[{value:"Configure the Engine API",id:"configure-the-engine-api",level:2},{value:"Service ports",id:"service-ports",level:3},{value:"Host allowlist",id:"host-allowlist",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Send a payload using the Engine API",id:"send-a-payload-using-the-engine-api",level:2},{value:"1. Prepare a payload",id:"1-prepare-a-payload",level:3},{value:"2. Get the payload",id:"2-get-the-payload",level:3},{value:"3. Execute the payload",id:"3-execute-the-payload",level:3},{value:"4. Update the fork choice",id:"4-update-the-fork-choice",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"use-the-engine-api",children:"Use the Engine API"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"Consensus and execution clients"})," communicate with each other using the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/engine-api/",children:"Engine API"}),". These API methods are a separate subsection of the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/use-besu-api/",children:"JSON-RPC API"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-the-engine-api",children:"Configure the Engine API"}),"\n",(0,s.jsx)(n.p,{children:"The Engine API is enabled by default even if no consensus client configuration exists. You can configure the Engine API to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.a,{href:"#service-ports",children:"service ports"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Specify the ",(0,s.jsx)(n.a,{href:"#host-allowlist",children:"host allowlist"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="Example Engine API configuration"',children:"besu --engine-rpc-port=8551 --engine-host-allowlist=localhost,127.0.0.1 --engine-jwt-secret=jwt.hex\n"})}),"\n",(0,s.jsx)(n.h3,{id:"service-ports",children:"Service ports"}),"\n",(0,s.jsxs)(n.p,{children:["To specify the port the Engine API service listens on for HTTP and WebSocket, use the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#engine-rpc-port",children:(0,s.jsx)(n.code,{children:"--engine-rpc-port"})})," option. The default is ",(0,s.jsx)(n.code,{children:"8551"}),". This option is useful when you have another execution engine running on port 8551, in which case you can specify Besu to use another port, for example, ",(0,s.jsx)(n.code,{children:"--engine-rpc-port 8552"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"host-allowlist",children:"Host allowlist"}),"\n",(0,s.jsxs)(n.p,{children:["To prevent DNS rebinding attacks, Besu checks incoming HTTP request host headers, WebSocket connections, and GraphQL requests. Besu accepts requests only when hostnames specified using the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#engine-host-allowlist",children:(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})})," option matches the request host headers. By default, Besu accepts requests and connections from ",(0,s.jsx)(n.code,{children:"localhost"})," and ",(0,s.jsx)(n.code,{children:"127.0.0.1"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["This isn't a permissioning feature. To restrict access to the Engine API, we recommend using ",(0,s.jsx)(n.a,{href:"#authentication",children:"authentication"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"If your application publishes RPC ports, specify the hostnames when starting Besu."}),"\n",(0,s.jsxs)(n.p,{children:["Specify ",(0,s.jsx)(n.code,{children:"*"})," for ",(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})," to effectively disable host protection."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["We don't recommend specifying ",(0,s.jsx)(n.code,{children:"*"})," for ",(0,s.jsx)(n.code,{children:"--engine-host-allowlist"})," in production."]})}),"\n",(0,s.jsx)(n.h2,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["By default, ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/use-besu-api/authenticate",children:"authentication"})," for the Engine API is enabled. To disable, set the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#engine-jwt-disabled",children:(0,s.jsx)(n.code,{children:"--engine-jwt-disabled"})})," option to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"Don't disable JWT authentication in production environments."}),(0,s.jsx)(n.p,{children:"Disable only for testing purposes."})]}),"\n",(0,s.jsxs)(n.p,{children:["Set the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication",children:"JWT secret"})," by using the ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#engine-jwt-secret",children:(0,s.jsx)(n.code,{children:"--engine-jwt-secret"})})," option."]}),"\n",(0,s.jsx)(n.h2,{id:"send-a-payload-using-the-engine-api",children:"Send a payload using the Engine API"}),"\n",(0,s.jsx)(n.h3,{id:"1-prepare-a-payload",children:"1. Prepare a payload"}),"\n",(0,s.jsxs)(n.p,{children:["Prepare to send a payload using ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,s.jsx)(n.code,{children:"engine_forkchoiceUpdatedV1"})}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"curl-http-request",children:"curl HTTP request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "safeBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a", "finalizedBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000"},{"timestamp": "0x5","prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000","suggestedFeeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b"}],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,s.jsx)(n.h1,{id:"json-result",children:"JSON result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n      "validationError": null\n    },\n    "payloadId": "0x0000000021f32cc1"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-get-the-payload",children:"2. Get the payload"}),"\n",(0,s.jsxs)(n.p,{children:["Get the payload using ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/engine-api/#engine_getpayloadv1",children:(0,s.jsx)(n.code,{children:"engine_getPayloadV1"})})]}),"\n",(0,s.jsx)(n.h1,{id:"curl-http-request-1",children:"curl HTTP request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadV1","params":["0x1"],"id":1}\' http://127.0.0.1:8550\n'})}),"\n",(0,s.jsx)(n.h1,{id:"json-result-1",children:"JSON result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-execute-the-payload",children:"3. Execute the payload"}),"\n",(0,s.jsxs)(n.p,{children:["Execute the payload using ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/engine-api/#engine_newpayloadv1",children:(0,s.jsx)(n.code,{children:"engine_newPayloadV1"})})]}),"\n",(0,s.jsx)(n.h1,{id:"curl-http-request-2",children:"curl HTTP request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_newPayloadV1","params":[\n  {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,s.jsx)(n.h1,{id:"json-result-2",children:"JSON result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "status": "VALID",\n    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "validationError": null\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-update-the-fork-choice",children:"4. Update the fork choice"}),"\n",(0,s.jsxs)(n.p,{children:["Update the fork choice using ",(0,s.jsx)(n.a,{href:"/23.10.1/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,s.jsx)(n.code,{children:"engine_forkchoiceUpdatedV1"})})," again."]}),"\n",(0,s.jsx)(n.h1,{id:"curl-http-request-3",children:"curl HTTP request"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"},null],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,s.jsx)(n.h1,{id:"json-result-3",children:"JSON result"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "validationError": null\n    },\n    "payloadId": null\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var s=i(67294);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);