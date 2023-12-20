"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[36898],{47759:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=s(85893),t=s(11151);const a={title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["public networks","private networks"]},i="Use GraphQL over HTTP",c={id:"public-networks/how-to/use-besu-api/graphql",title:"Use GraphQL over HTTP",description:"How to access the Hyperledger Besu API using GraphQL",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/use-besu-api/graphql.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/graphql",permalink:"/23.7.2/public-networks/how-to/use-besu-api/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/use-besu-api/graphql.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:3,frontMatter:{title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use RPC Pub/Sub over WS",permalink:"/23.7.2/public-networks/how-to/use-besu-api/rpc-pubsub"},next:{title:"Authenticate over JSON-RPC requests",permalink:"/23.7.2/public-networks/how-to/use-besu-api/authenticate"}},o={},h=[{value:"GraphQL requests with cURL",id:"graphql-requests-with-curl",level:2},{value:"GraphQL requests with GraphiQL app",id:"graphql-requests-with-graphiql-app",level:2},{value:"Pending",id:"pending",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"use-graphql-over-http",children:"Use GraphQL over HTTP"}),"\n",(0,r.jsx)(n.p,{children:"GraphQL can reduce the overhead needed for common queries.\nFor example, instead of querying each receipt in a block, GraphQL can get the same result with a\nsingle query for the entire block."}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," describes the GraphQL implementation for Ethereum.\nEnable the GraphQL service using ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/#enable-api-access",children:"command line options"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"GraphQL is not supported over WebSocket."})}),"\n",(0,r.jsxs)(n.p,{children:["Access the GraphQL endpoint at ",(0,r.jsx)(n.code,{children:"http://<HOST>:<PORT>/graphql"}),".\nConfigure ",(0,r.jsx)(n.code,{children:"<HOST>"})," and ",(0,r.jsx)(n.code,{children:"<PORT>"})," using ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#graphql-http-host",children:(0,r.jsx)(n.code,{children:"graphql-http-host"})}),"\nand ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#graphql-http-port",children:(0,r.jsx)(n.code,{children:"graphql-http-port"})}),".\nThe default endpoint is ",(0,r.jsx)(n.code,{children:"http://127.0.0.1:8547/graphql"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"graphql-requests-with-curl",children:"GraphQL requests with cURL"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/",children:"Hyperledger Besu JSON-RPC API methods"})," with an equivalent\n",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/graphql",children:"GraphQL"})," query include a GraphQL request and result in the method example."]}),"\n",(0,r.jsx)(n.p,{children:"For example, the following request returns the block number:"}),"\n",(0,r.jsx)(n.h1,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{block{number}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(n.h1,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "block" : {\n      "number" : "0x281"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"The following request returns the gas price:"}),"\n",(0,r.jsx)(n.h1,{id:"request-1",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{gasPrice}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(n.h1,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "gasPrice" : "0x0"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The following ",(0,r.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#eth_syncing",children:(0,r.jsx)(n.code,{children:"syncing"})})," request returns data about the\nsynchronization status:"]}),"\n",(0,r.jsx)(n.h1,{id:"request-2",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{syncing{startingBlock currentBlock highestBlock}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(n.h1,{id:"response-2",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "syncing" : {\n      "startingBlock" : 665,\n      "currentBlock" : 3190,\n      "highestBlock" : 26395\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.admonition,{title:"note",type:"info",children:[(0,r.jsxs)(n.p,{children:["In some cases, for example, when your node is fully synced, the syncing request returns a ",(0,r.jsx)(n.code,{children:"null"})," response:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data" : {\n    "syncing" : null\n  }\n}\n'})})]}),"\n",(0,r.jsx)(n.h2,{id:"graphql-requests-with-graphiql-app",children:"GraphQL requests with GraphiQL app"}),"\n",(0,r.jsxs)(n.p,{children:["The third-party tool, ",(0,r.jsx)(n.a,{href:"https://github.com/skevy/graphiql-app",children:"GraphiQL"}),", provides a tabbed interface\nfor editing and testing GraphQL queries and mutations.\nGraphiQL also provides access to the ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," from within the app."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"GraphiQL",src:s(86559).Z+"",width:"2002",height:"786"})}),"\n",(0,r.jsx)(n.h2,{id:"pending",children:"Pending"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"transactionCount"})," and ",(0,r.jsx)(n.code,{children:"transactions"})," supports the Pending query."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Besu does not execute pending transactions so results from ",(0,r.jsx)(n.code,{children:"account"}),", ",(0,r.jsx)(n.code,{children:"call"}),", and ",(0,r.jsx)(n.code,{children:"estimateGas"})," for\nPending do not reflect pending transactions."]})}),"\n",(0,r.jsx)(n.h1,{id:"pending-transaction-count",children:"Pending transaction count"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactionCount}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(n.h1,{id:"result",children:"Result"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactionCount": 2\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h1,{id:"pending-transactions",children:"Pending transactions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactions{hash}}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,r.jsx)(n.h1,{id:"result-1",children:"Result"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactions": [\n        {\n          "hash": "0xbb3ab8e2113a4afdde9753782cb0680408c0d5b982572dda117a4c72fafbf3fa"\n        },\n        {\n          "hash": "0xf6bd6b1bccf765024bd482a71c6855428e2903895982090ab5dbb0feda717af6"\n        }\n      ]\n    }\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},86559:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/GraphiQL-a6360ff9467a3f33ade0bf00e6eec49e.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var r=s(67294);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);