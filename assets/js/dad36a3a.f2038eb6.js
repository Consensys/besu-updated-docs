"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[51742,15493],{18059:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var t=s(85893),r=s(11151);const c={},i=void 0,o={id:"global/postman",title:"postman",description:"View the Besu JSON-RPC APIs documentation in the Postman format and obtain example requests in multiple coding languages.",source:"@site/versioned_docs/version-23.4.0/global/postman.md",sourceDirName:"global",slug:"/global/postman",permalink:"/23.4.0/global/postman",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/global/postman.md",tags:[],version:"23.4.0",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{}},a={},l=[{value:"Run in Postman",id:"run-in-postman",level:4},{value:"Download collection",id:"download-collection",level:4}];function d(e){const n={a:"a",admonition:"admonition",h4:"h4",img:"img",p:"p",...(0,r.a)(),...e.components};return(0,t.jsxs)(n.admonition,{title:"Besu JSON-RPC APIs documentation in Postman format",type:"info",children:[(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://www.postman.com/hyperledger/workspace/hyperledger-besu/collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8",children:"Besu JSON-RPC APIs documentation"})," in the Postman format and obtain example requests in multiple coding languages."]}),(0,t.jsx)(n.h4,{id:"run-in-postman",children:"Run in Postman"}),(0,t.jsx)(n.p,{children:"Click the following button to fork the collection and run requests directly on your local network."}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://god.gw.postman.com/run-collection/11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8?action=collection%2Ffork&collection-url=entityId%3D11610746-f334929f-c8c3-43ed-bb73-69a6f0d728d8%26entityType%3Dcollection%26workspaceId%3Dc4b60b6f-9f15-42d0-8327-7ebabca6f0fd#?env%5BBesu%20node%20on%20local%20host%5D=W3sia2V5IjoicnBjLWh0dHAtaG9zdCIsInZhbHVlIjoibG9jYWxob3N0IiwiZW5hYmxlZCI6ZmFsc2V9LHsia2V5IjoicnBjLWh0dHAtcG9ydCIsInZhbHVlIjoiODU0NSIsImVuYWJsZWQiOmZhbHNlfV0=",children:(0,t.jsx)(n.img,{src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"})}),"."]}),(0,t.jsx)(n.h4,{id:"download-collection",children:"Download collection"}),(0,t.jsxs)(n.p,{children:["Alternatively you can ",(0,t.jsx)(n.a,{target:"_blank",href:s(93508).Z+"",children:"download the JSON collection file"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},49660:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=s(85893),r=s(11151),c=s(18059);const i={title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["private networks"]},o="Use JSON-RPC over HTTP, WebSocket, and IPC",a={id:"public-networks/how-to/use-besu-api/json-rpc",title:"Use JSON-RPC over HTTP, WS, and IPC",description:"How to access the Hyperledger Besu API using JSON-RPC",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/json-rpc.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/json-rpc",permalink:"/23.4.0/public-networks/how-to/use-besu-api/json-rpc",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/json-rpc.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Use JSON-RPC over HTTP, WS, and IPC",sidebar_position:1,description:"How to access the Hyperledger Besu API using JSON-RPC",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Access the Hyperledger Besu API",permalink:"/23.4.0/public-networks/how-to/use-besu-api/"},next:{title:"Use RPC Pub/Sub over WS",permalink:"/23.4.0/public-networks/how-to/use-besu-api/rpc-pubsub"}},l={},d=[{value:"Geth console",id:"geth-console",level:2},{value:"JSON-RPC authentication",id:"json-rpc-authentication",level:2},{value:"HTTP and WebSocket requests",id:"http-and-websocket-requests",level:2},{value:"HTTP",id:"http",level:3},{value:"WebSocket",id:"websocket",level:3},{value:"Readiness and liveness endpoints",id:"readiness-and-liveness-endpoints",level:2},{value:"Readiness",id:"readiness",level:3},{value:"Liveness",id:"liveness",level:3},{value:"API methods enabled by default",id:"api-methods-enabled-by-default",level:2},{value:"Block parameter",id:"block-parameter",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-json-rpc-over-http-websocket-and-ipc",children:"Use JSON-RPC over HTTP, WebSocket, and IPC"}),"\n",(0,t.jsx)(n.p,{children:"JSON-RPC APIs allow you to interact with your node. JSON-RPC endpoints are not enabled by default."}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"You should secure access to your node's JSON-RPC endpoints. Users with access to your node via JSON-RPC can make calls directly to your node, causing your node to consume resources."})}),"\n",(0,t.jsxs)(n.p,{children:["To enable JSON-RPC over HTTP or WebSocket, use the ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-enabled"})})," and ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-ws-enabled"})})," options."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable JSON-RPC over an ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/#socket-path",children:"IPC socket"}),", use the ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," option."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," is an early access option."]})}),"\n",(0,t.jsx)(c.default,{}),"\n",(0,t.jsx)(n.h2,{id:"geth-console",children:"Geth console"}),"\n",(0,t.jsx)(n.p,{children:"The geth console is a REPL (Read, Evaluate, & Print Loop) JavaScript console. Use JSON-RPC APIs supported by geth and Hyperledger Besu directly in the console."}),"\n",(0,t.jsx)(n.p,{children:"To use the geth console with Besu:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Start Besu with the ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-enabled",children:(0,t.jsx)(n.code,{children:"--rpc-http-enabled"})})," or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-enabled"})," option."]}),"\n",(0,t.jsxs)(n.li,{children:["Specify which APIs to enable using the ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," option."]}),"\n",(0,t.jsx)(n.li,{children:"Start the geth console specifying the JSON-RPC endpoint:"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"http-endpoint",children:"HTTP endpoint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"geth attach http://localhost:8545\n"})}),"\n",(0,t.jsx)(n.h1,{id:"ipc-endpoint",children:"IPC endpoint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"geth attach /path/to/besu.ipc\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the geth console to call ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/",children:"JSON-RPC API methods"})," that geth and Besu share."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"eth.syncing\n"})}),"\n",(0,t.jsx)(n.h2,{id:"json-rpc-authentication",children:"JSON-RPC authentication"}),"\n",(0,t.jsxs)(n.p,{children:["Besu disables ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate",children:"Authentication"})," by default."]}),"\n",(0,t.jsx)(n.h2,{id:"http-and-websocket-requests",children:"HTTP and WebSocket requests"}),"\n",(0,t.jsx)(n.h3,{id:"http",children:"HTTP"}),"\n",(0,t.jsxs)(n.p,{children:["To make RPC requests over HTTP, you can use ",(0,t.jsx)(n.a,{href:"https://curl.haxx.se/download.html",children:(0,t.jsx)(n.code,{children:"curl"})}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\' <JSON-RPC-http-endpoint:port>\n'})}),"\n",(0,t.jsx)(n.h1,{id:"curl-http-request",children:"curl HTTP request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\' http://127.0.0.1:8555\n'})}),"\n",(0,t.jsx)(n.h1,{id:"json-result",children:"JSON result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x60e"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"curl"})," to make multiple RPC requests (batch requests) over HTTP at the same time. Send the requests as an array, and receive an array of responses. The default number of allowed requests in a RPC batch request is ",(0,t.jsx)(n.code,{children:"1024"}),". Use the ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-max-batch-size",children:(0,t.jsx)(n.code,{children:"--rpc-http-max-batch-size"})})," command line option to update the default value."]}),"\n",(0,t.jsx)(n.h1,{id:"curl-http-request-1",children:"curl HTTP request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\' http://127.0.0.1:8555\n'})}),"\n",(0,t.jsx)(n.h1,{id:"json-result-1",children:"JSON result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x60e"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"websocket",children:"WebSocket"}),"\n",(0,t.jsxs)(n.p,{children:["To make RPC requests over WebSocket, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/websockets/wscat",children:(0,t.jsx)(n.code,{children:"wscat"})}),", a Node.js based command-line tool."]}),"\n",(0,t.jsxs)(n.p,{children:["First connect to the WebSocket server using ",(0,t.jsx)(n.code,{children:"wscat"})," (you only need to connect once per session):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wscat -c ws://<JSON-RPC-ws-endpoint:port>\n"})}),"\n",(0,t.jsx)(n.p,{children:"After you establish a connection, the terminal displays a '>' prompt. Send individual requests as a JSON data package at each prompt."}),"\n",(0,t.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":<request-ID>,"method":"<method-name>","params":[<method-parameters>]}\n'})}),"\n",(0,t.jsx)(n.h1,{id:"wscat-ws-request",children:"wscat WS request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}\n'})}),"\n",(0,t.jsx)(n.h1,{id:"json-result-2",children:"JSON result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": "1",\n  "result": "0x23"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can use ",(0,t.jsx)(n.code,{children:"wscat"})," to make multiple RPC requests over WebSocket at the same time. Send the requests as an array, and receive an array of responses."]}),"\n",(0,t.jsx)(n.h1,{id:"wscat-ws-request-1",children:"wscat WS request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[{"jsonrpc":"2.0","id":"1","method":"eth_blockNumber","params":[]}, {"jsonrpc":"2.0","id":"2","method":"admin_peers","params":[]}]\n'})}),"\n",(0,t.jsx)(n.h1,{id:"json-result-3",children:"JSON result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "jsonrpc": "2.0",\n    "id": "1",\n    "result": "0x23"\n  },\n  {\n    "jsonrpc": "2.0",\n    "id": "2",\n    "result": []\n  }\n]\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"wscat"})," does not support headers. ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/authenticate",children:"Authentication"})," requires you to pass an authentication token in the request header. To use authentication with WebSocket, you need an app that supports headers."]})}),"\n",(0,t.jsx)(n.h2,{id:"readiness-and-liveness-endpoints",children:"Readiness and liveness endpoints"}),"\n",(0,t.jsxs)(n.p,{children:["Besu provides readiness and liveness endpoints to confirm the Besu node status. Both return a ",(0,t.jsx)(n.code,{children:"200 OK"})," status when ready or live and a ",(0,t.jsx)(n.code,{children:"503 Service Unavailable"})," status if not ready or live."]}),"\n",(0,t.jsx)(n.h3,{id:"readiness",children:"Readiness"}),"\n",(0,t.jsxs)(n.p,{children:["By default, the readiness check requires a connected peer and the node to be within two blocks of the best known block. If you have ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#p2p-enabled",children:"disabled P2P communication"}),", you do not need peers. A live node with P2P disabled is always ready."]}),"\n",(0,t.jsxs)(n.p,{children:["Use the query parameters ",(0,t.jsx)(n.code,{children:"minPeers"})," and ",(0,t.jsx)(n.code,{children:"maxBlocksBehind"})," to adjust the number of peers required and the number of blocks tolerance."]}),"\n",(0,t.jsx)(n.h1,{id:"readiness-endpoint",children:"Readiness endpoint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://<JSON-RPC-HTTP-endpoint:port>/readiness\n"})}),"\n",(0,t.jsx)(n.h1,{id:"curl-request-example",children:"curl request example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/readiness'\n"})}),"\n",(0,t.jsx)(n.h1,{id:"query-parameters-example",children:"Query parameters example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/readiness?minPeers=0&maxBlocksBehind=10'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"liveness",children:"Liveness"}),"\n",(0,t.jsxs)(n.p,{children:["The liveness check requires the JSON-RPC server to be up. You can use the endpoint to verify that the node can respond to RPC calls. The status in the response will always be ",(0,t.jsx)(n.code,{children:"UP"}),"."]}),"\n",(0,t.jsx)(n.h1,{id:"liveness-endpoint",children:"Liveness endpoint"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"http://<JSON-RPC-HTTP-endpoint:port>/liveness\n"})}),"\n",(0,t.jsx)(n.h1,{id:"curl-request-example-1",children:"curl request example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"curl -v 'http://localhost:8545/liveness'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api-methods-enabled-by-default",children:"API methods enabled by default"}),"\n",(0,t.jsxs)(n.p,{children:["Besu enables the ",(0,t.jsx)(n.code,{children:"ETH"}),", ",(0,t.jsx)(n.code,{children:"NET"}),", and ",(0,t.jsx)(n.code,{children:"WEB3"})," API methods by default."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable the ",(0,t.jsx)(n.code,{children:"ADMIN"}),", ",(0,t.jsx)(n.code,{children:"CLIQUE"}),", ",(0,t.jsx)(n.code,{children:"DEBUG"}),", ",(0,t.jsx)(n.code,{children:"EEA"}),", ",(0,t.jsx)(n.code,{children:"IBFT"}),", ",(0,t.jsx)(n.code,{children:"MINER"}),", ",(0,t.jsx)(n.code,{children:"PERM"}),", ",(0,t.jsx)(n.code,{children:"PLUGINS"}),", ",(0,t.jsx)(n.code,{children:"PRIV"}),", ",(0,t.jsx)(n.code,{children:"TRACE"}),", and ",(0,t.jsx)(n.code,{children:"TXPOOL"})," API methods, use the ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-http-api",children:(0,t.jsx)(n.code,{children:"--rpc-http-api"})}),", ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#rpc-ws-api",children:(0,t.jsx)(n.code,{children:"--rpc-ws-api"})}),", or ",(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," options."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"--Xrpc-ipc-api"})," is an early access option."]})}),"\n",(0,t.jsx)(n.h2,{id:"block-parameter",children:"Block parameter"}),"\n",(0,t.jsxs)(n.p,{children:["When you make requests that might have different results depending on the block accessed, the block parameter specifies the block. Methods such as ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_gettransactionbyblocknumberandindex",children:(0,t.jsx)(n.code,{children:"eth_getTransactionByBlockNumberAndIndex"})})," have a block parameter."]}),"\n",(0,t.jsx)(n.p,{children:"The block parameter can have one of the following values:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"blockNumber"})," : ",(0,t.jsx)(n.em,{children:"quantity"})," - The block number, specified in hexadecimal or decimal. 0 represents the genesis block."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"blockHash"})," : ",(0,t.jsx)(n.em,{children:"string"})," or ",(0,t.jsx)(n.em,{children:"object"})," - 32-byte block hash or JSON object specifying the block hash. If using a JSON object, you can specify ",(0,t.jsx)(n.code,{children:"requireCanonical"})," to indicate whether the block must be a canonical block. See ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/a2dedb0b2c7980cdc35db8eb4c094f2eb0dc7deb/ethereum/api/src/test/resources/org/hyperledger/besu/ethereum/api/jsonrpc/eth/eth_getBalance_blockHashObjectCanonical.json",children:"this example"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Only the following methods support the ",(0,t.jsx)(n.code,{children:"blockHash"})," parameter:"]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_call",children:(0,t.jsx)(n.code,{children:"eth_call"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_getbalance",children:(0,t.jsx)(n.code,{children:"eth_getBalance"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_getcode",children:(0,t.jsx)(n.code,{children:"eth_getCode"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_getproof",children:(0,t.jsx)(n.code,{children:"eth_getProof"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_getstorageat",children:(0,t.jsx)(n.code,{children:"eth_getStorageAt"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_gettransactioncount",children:(0,t.jsx)(n.code,{children:"eth_getTransactionCount"})})}),"\n"]})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"earliest"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The earliest (genesis) block."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"latest"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The last block mined."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"pending"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The last block mined plus pending transactions. Use only with ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_gettransactioncount",children:(0,t.jsx)(n.code,{children:"eth_getTransactionCount"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"finalized"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The most recent crypto-economically secure block. It cannot be reorganized outside manual intervention driven by community coordination."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"safe"})," : ",(0,t.jsx)(n.em,{children:"tag"})," - The most recent block that is safe from reorganization under honest majority and certain synchronicity assumptions."]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},93508:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/files/postman_collection-1354ef299155a66a6083e20e7571a9d3.json"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(67294);const r={},c=t.createContext(r);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);