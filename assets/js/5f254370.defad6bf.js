"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45583],{10579:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var c=a(85893),s=a(11151);const d={title:"Engine API",description:"Engine API methods reference",tags:["public networks"]},i="Engine API methods",r={id:"public-networks/reference/engine-api/index",title:"Engine API",description:"Engine API methods reference",source:"@site/versioned_docs/version-23.7.1/public-networks/reference/engine-api/index.md",sourceDirName:"public-networks/reference/engine-api",slug:"/public-networks/reference/engine-api/",permalink:"/23.7.1/public-networks/reference/engine-api/",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/reference/engine-api/index.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"}],version:"23.7.1",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{title:"Engine API",description:"Engine API methods reference",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Objects",permalink:"/23.7.1/public-networks/reference/api/objects"},next:{title:"Objects",permalink:"/23.7.1/public-networks/reference/engine-api/objects"}},t={},o=[{value:"Methods",id:"methods",level:2},{value:"<code>engine_exchangeCapabilities</code>",id:"engine_exchangecapabilities",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"<code>engine_exchangeTransitionConfigurationV1</code>",id:"engine_exchangetransitionconfigurationv1",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"<code>engine_forkchoiceUpdatedV1</code>",id:"engine_forkchoiceupdatedv1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"<code>engine_getPayloadBodiesByHashV1</code>",id:"engine_getpayloadbodiesbyhashv1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"<code>engine_getPayloadBodiesByRangeV1</code>",id:"engine_getpayloadbodiesbyrangev1",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"<code>engine_getPayloadV1</code>",id:"engine_getpayloadv1",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"<code>engine_newPayloadV1</code>",id:"engine_newpayloadv1",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"engine-api-methods",children:"Engine API methods"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/concepts/the-merge#execution-and-consensus-clients",children:"Consensus and execution clients"})," communicate with each other using the Engine API. When running Besu as an execution client, ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/how-to/use-engine-api",children:"use these API calls"})," to communicate with a consensus client."]}),"\n",(0,c.jsx)(n.admonition,{type:"info",children:(0,c.jsxs)(n.p,{children:["Ensure you enable the Engine API methods with the ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/cli/options#engine-rpc-enabled",children:(0,c.jsx)(n.code,{children:"--engine-rpc-enabled"})})," CLI option."]})}),"\n",(0,c.jsxs)(n.p,{children:["See the ",(0,c.jsx)(n.a,{href:"https://github.com/ethereum/execution-apis/blob/0b965fb714ccd3faa3c939fdce1726e56679cdec/src/engine/specification.md",children:"Ethereum Engine API specification"})," for more information. Not all changes to the Engine API are documented on this page."]}),"\n",(0,c.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,c.jsx)(n.h3,{id:"engine_exchangecapabilities",children:(0,c.jsx)(n.code,{children:"engine_exchangeCapabilities"})}),"\n",(0,c.jsx)(n.p,{children:"Exchanges a list of supported Engine API methods between the consensus client and Besu."}),"\n",(0,c.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"remoteCapabilities"}),": ",(0,c.jsx)(n.em,{children:"array"})," of ",(0,c.jsx)(n.em,{children:"strings"})," - Engine API method names that the consensus client supports"]}),"\n",(0,c.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"localCapabilities"}),": ",(0,c.jsx)(n.em,{children:"array"})," of ",(0,c.jsx)(n.em,{children:"strings"})," - Engine API method names that Besu supports"]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_exchangeCapabilities","params":[["engine_exchangeTransitionConfigurationV1","engine_forkchoiceUpdatedV1","engine_getPayloadBodiesByHash","engine_getPayloadBodiesByRangeV1","engine_getPayloadV1","engine_newPayloadV1"]],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_exchangeCapabilities",\n  "params": [\n    [\n      "engine_exchangeTransitionConfigurationV1",\n      "engine_forkchoiceUpdatedV1",\n      "engine_getPayloadBodiesByHash",\n      "engine_getPayloadBodiesByRangeV1",\n      "engine_getPayloadV1",\n      "engine_newPayloadV1"\n    ]\n  ],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": [\n    "engine_getPayloadV1",\n    "engine_getPayloadV2",\n    "engine_executePayloadV1",\n    "engine_newPayloadV1",\n    "engine_newPayloadV2",\n    "engine_forkchoiceUpdatedV1",\n    "engine_forkchoiceUpdatedV2",\n    "engine_exchangeTransitionConfigurationV1",\n    "engine_getPayloadBodiesByHashV1",\n    "engine_getPayloadBodiesByRangeV1"\n  ]\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_exchangetransitionconfigurationv1",children:(0,c.jsx)(n.code,{children:"engine_exchangeTransitionConfigurationV1"})}),"\n",(0,c.jsx)(n.p,{children:"Sends the transition configuration to the consensus client to verify the configuration between both clients."}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsx)(n.p,{children:"The execution client runs this call every 60 seconds in the background. The log displays a warning message if the call hasn't been sent in 120 seconds."})}),"\n",(0,c.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"transitionConfiguration"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#transition-configuration-object",children:"Transition configuration object"})]}),"\n",(0,c.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"transitionConfiguration"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#transition-configuration-object",children:"Transition configuration object"})]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-1",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_exchangeTransitionConfigurationV1","params":[{"terminalTotalDifficulty": 0, "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000", "terminalBlockNumber": "0x1"}],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-1",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_exchangeTransitionConfigurationV1",\n  "params": [\n    {\n      "terminalTotalDifficulty": 0,\n      "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n      "terminalBlockNumber": "0x1"\n    }\n  ],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-1",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "terminalTotalDifficulty": 0,\n    "terminalBlockHash": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "terminalBlockNumber": "0x1"\n  },\n  "payloadId": null\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_forkchoiceupdatedv1",children:(0,c.jsx)(n.code,{children:"engine_forkchoiceUpdatedV1"})}),"\n",(0,c.jsx)(n.p,{children:"Updates the fork choice with the consensus client."}),"\n",(0,c.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"forkchoiceState"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#fork-choice-state-object",children:"Fork choice state object"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"payloadAttributes"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#payload-attributes-object",children:"Payload attribute object"}),". Can be ",(0,c.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"payloadStatus"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#payload-status-object",children:"Payload status object"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"payloadId"}),": ",(0,c.jsx)(n.em,{children:"data"})," - identifier of the payload build process or ",(0,c.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-2",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_forkchoiceUpdatedV1","params":[{"headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858", "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"},null],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-2",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_forkchoiceUpdatedV1",\n  "params": [\n    {\n      "headBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "safeBlockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "finalizedBlockHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a"\n    },\n    null\n  ],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-2",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "payloadStatus": {\n      "status": "VALID",\n      "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "validationError": null\n    },\n    "payloadId": null\n  }\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_getpayloadbodiesbyhashv1",children:(0,c.jsx)(n.code,{children:"engine_getPayloadBodiesByHashV1"})}),"\n",(0,c.jsx)(n.p,{children:"Returns the bodies of the execution payloads corresponding to the specified block hashes."}),"\n",(0,c.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"blockHashes"}),": ",(0,c.jsx)(n.strong,{children:"array"})," of ",(0,c.jsx)(n.strong,{children:"strings"})," - Block hashes"]}),"\n",(0,c.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"engineGetPayloadBodiesResultV1"}),": ",(0,c.jsx)(n.strong,{children:"array"})," of ",(0,c.jsx)(n.strong,{children:"objects"})," - Execution payload body objects"]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-3",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadBodiesByHashV1","params":[["0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c","0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553"]],"id":1}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-3",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadBodiesByHashV1",\n  "params": [\n    [\n      "0xd5f1812548be429cbdc6376b29611fc49e06f1359758c4ceaaa3b393e2239f9c",\n      "0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553"\n    ]\n  ],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-3",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": 67,\n    "result": [{\n      "transactions": ["0xf865808506fc23ac00830124f8940101010101010101010101010101010101010101018031a02c4d88bfdc2f6dbf82c33d235c4e785e9fc23b2d0fc7b9d20fc5e9674f1f9d15a016d6d69b925cf26128683ab4a096e196fbb1142d6c6d4e8d3481b9bef1bd0f65", "0x02f86c0701843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a039409b4e5603dd8c3cf38232348661a8e99ac518396eeaa128ec9ec2a3eb8127a06b21ab956f5f138cb44fda1a9055bd08980ea4f8040d877c00dac025608d0d95", ...],\n      "withdrawals": [{\n        "index" : "0xf0",\n        "validatorIndex" : "0xf0",\n        "address" : "0x00000000000000000000000000000000000010f0",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf1",\n        "validatorIndex" : "0xf1",\n        "address" : "0x00000000000000000000000000000000000010f1",\n        "amount" : "0x1"\n      }]\n    }, {\n      "transactions": ["0xf865108506fc23ac00830124f8940101010101010101010101010101010101010101018031a0d9712a3c40ae85aea4ad1bd95a0b7cc7bd805189a9e2517403b11a00a1530f81a053b53b0267a6dcfe9f9a1652307b396b3e8a65e65707a450e60c92baefdbcfbe", "0x02f86c0711843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a071d36bc93c7ae8cc5c01501e51e5e97a51aa541d1a89c809a2af7eb40e9bc2cba071644230e21c075c1da08916aff5efe9f95a6f6a4f94dc217f6c1bb4a3240b29", ...],\n      "withdrawals": [{\n        "index" : "0xf2",\n        "validatorIndex" : "0xf2",\n        "address" : "0x00000000000000000000000000000000000010f2",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf3",\n        "validatorIndex" : "0xf3",\n        "address" : "0x00000000000000000000000000000000000010f3",\n        "amount" : "0x1"\n      }]\n    }]\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_getpayloadbodiesbyrangev1",children:(0,c.jsx)(n.code,{children:"engine_getPayloadBodiesByRangeV1"})}),"\n",(0,c.jsx)(n.p,{children:"Returns the bodies of the execution payloads corresponding to the specified range of block numbers."}),"\n",(0,c.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"startBlockNumber"}),": ",(0,c.jsx)(n.em,{children:"string"})," - Number of the starting block of the range, as a hexadecimal string"]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"count"}),": ",(0,c.jsx)(n.em,{children:"string"})," - Number of blocks in the range (including the starting block), as a hexadecimal string"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"engineGetPayloadBodiesResultV1"}),": ",(0,c.jsx)(n.em,{children:"array"})," of ",(0,c.jsx)(n.em,{children:"objects"})," - Execution payload body objects"]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-4",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadBodiesByRangeV1","params":["0x20", "0x2"],"id":1}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-4",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadBodiesByRangeV1",\n  "params": ["0x20", "0x2"],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-4",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": 67,\n    "result": [{\n      "transactions": ["0xf865808506fc23ac00830124f8940101010101010101010101010101010101010101018031a02c4d88bfdc2f6dbf82c33d235c4e785e9fc23b2d0fc7b9d20fc5e9674f1f9d15a016d6d69b925cf26128683ab4a096e196fbb1142d6c6d4e8d3481b9bef1bd0f65", "0x02f86c0701843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a039409b4e5603dd8c3cf38232348661a8e99ac518396eeaa128ec9ec2a3eb8127a06b21ab956f5f138cb44fda1a9055bd08980ea4f8040d877c00dac025608d0d95", ...],\n      "withdrawals": [{\n        "index" : "0xf0",\n        "validatorIndex" : "0xf0",\n        "address" : "0x00000000000000000000000000000000000010f0",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf1",\n        "validatorIndex" : "0xf1",\n        "address" : "0x00000000000000000000000000000000000010f1",\n        "amount" : "0x1"\n      }]\n    }, {\n      "transactions": ["0xf865108506fc23ac00830124f8940101010101010101010101010101010101010101018031a0d9712a3c40ae85aea4ad1bd95a0b7cc7bd805189a9e2517403b11a00a1530f81a053b53b0267a6dcfe9f9a1652307b396b3e8a65e65707a450e60c92baefdbcfbe", "0x02f86c0711843b9aca008506fc23ac00830124f89402020202020202020202020202020202020202020180c080a071d36bc93c7ae8cc5c01501e51e5e97a51aa541d1a89c809a2af7eb40e9bc2cba071644230e21c075c1da08916aff5efe9f95a6f6a4f94dc217f6c1bb4a3240b29", ...],\n      "withdrawals": [{\n        "index" : "0xf2",\n        "validatorIndex" : "0xf2",\n        "address" : "0x00000000000000000000000000000000000010f2",\n        "amount" : "0x1"\n      }, {\n        "index" : "0xf3",\n        "validatorIndex" : "0xf3",\n        "address" : "0x00000000000000000000000000000000000010f3",\n        "amount" : "0x1"\n      }]\n    }]\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_getpayloadv1",children:(0,c.jsx)(n.code,{children:"engine_getPayloadV1"})}),"\n",(0,c.jsx)(n.p,{children:"Prepares the payload to send to the consensus client."}),"\n",(0,c.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"payloadId"}),": ",(0,c.jsx)(n.em,{children:"data"})," - Identifier of the payload build process"]}),"\n",(0,c.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"executionPayload"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#execution-payload-object",children:"Execution payload object"})]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-5",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_getPayloadV1","params":["0x0000000021f32cc1"],"id":1}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-5",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_getPayloadV1",\n  "params": ["0x0000000021f32cc1"],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-5",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 67,\n  "result": {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"engine_newpayloadv1",children:(0,c.jsx)(n.code,{children:"engine_newPayloadV1"})}),"\n",(0,c.jsx)(n.p,{children:"Executes the payload with the consensus client."}),"\n",(0,c.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"executionPayload"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#execution-payload-object",children:"Execution payload object"})]}),"\n",(0,c.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"payloadStatus"}),": ",(0,c.jsx)(n.em,{children:"object"})," - ",(0,c.jsx)(n.a,{href:"/23.7.1/public-networks/reference/engine-api/objects#payload-status-object",children:"Payload status object"})]}),"\n"]}),"\n",(0,c.jsx)(n.h1,{id:"curl-http-6",children:"curl HTTP"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"engine_newPayloadV1","params":[\n  {\n    "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n    "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n    "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n    "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n    "blockNumber": "0x1",\n    "gasLimit": "0x1c9c380",\n    "gasUsed": "0x0",\n    "timestamp": "0x5",\n    "extraData": "0x",\n    "baseFeePerGas": "0x7",\n    "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "transactions": []\n  }\n],"id":67}\' http://127.0.0.1:8550\n'})}),"\n",(0,c.jsx)(n.h1,{id:"wscat-ws-6",children:"wscat WS"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "method": "engine_newPayloadV1",\n  "params": [\n    {\n      "parentHash": "0x3b8fb240d288781d4aac94d3fd16809ee413bc99294a085798a589dae51ddd4a",\n      "feeRecipient": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",\n      "stateRoot": "0xca3149fa9e37db08d1cd49c9061db1002ef1cd58db2210f2115c8c989b2bdf45",\n      "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",\n      "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n      "prevRandao": "0x0000000000000000000000000000000000000000000000000000000000000000",\n      "blockNumber": "0x1",\n      "gasLimit": "0x1c9c380",\n      "gasUsed": "0x0",\n      "timestamp": "0x5",\n      "extraData": "0x",\n      "baseFeePerGas": "0x7",\n      "blockHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n      "transactions": []\n    }\n  ],\n  "id": 67\n}\n'})}),"\n",(0,c.jsx)(n.h1,{id:"json-result-6",children:"JSON result"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "status": "VALID",\n    "latestValidHash": "0x3559e851470f6e7bbed1db474980683e8c315bfce99b2a6ef47c057c04de7858",\n    "validationError": null\n  }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var c=a(67294);const s={},d=c.createContext(s);function i(e){const n=c.useContext(d);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);