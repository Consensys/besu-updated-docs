"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[63817],{11206:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=s(85893),r=s(11151);const a={title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},i="Use GraphQL over HTTP",o={id:"public-networks/how-to/use-besu-api/graphql",title:"Use GraphQL over HTTP",description:"How to access the Hyperledger Besu API using GraphQL",source:"@site/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/graphql.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/graphql",permalink:"/23.4.0/public-networks/how-to/use-besu-api/graphql",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/public-networks/how-to/use-besu-api/graphql.md",tags:[{label:"private networks",permalink:"/23.4.0/tags/private-networks"}],version:"23.4.0",lastUpdatedAt:1702597614,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:3,frontMatter:{title:"Use GraphQL over HTTP",sidebar_position:3,description:"How to access the Hyperledger Besu API using GraphQL",tags:["private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use RPC Pub/Sub over WS",permalink:"/23.4.0/public-networks/how-to/use-besu-api/rpc-pubsub"},next:{title:"Authenticate over JSON-RPC requests",permalink:"/23.4.0/public-networks/how-to/use-besu-api/authenticate"}},c={},h=[{value:"GraphQL requests with cURL",id:"graphql-requests-with-curl",level:2},{value:"GraphQL requests with GraphiQL app",id:"graphql-requests-with-graphiql-app",level:2},{value:"Pending",id:"pending",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"use-graphql-over-http",children:"Use GraphQL over HTTP"}),"\n",(0,t.jsx)(n.p,{children:"GraphQL can reduce the overhead needed for common queries. For example, instead of querying each receipt in a block, GraphQL can get the same result with a single query for the entire block."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," describes the GraphQL implementation for Ethereum. Enable the GraphQL service using ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/#enable-api-access",children:"command line options"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"GraphQL is not supported over WebSocket."})}),"\n",(0,t.jsxs)(n.p,{children:["Access the GraphQL endpoint at ",(0,t.jsx)(n.code,{children:"http://<HOST>:<PORT>/graphql"}),". Configure ",(0,t.jsx)(n.code,{children:"<HOST>"})," and ",(0,t.jsx)(n.code,{children:"<PORT>"})," using ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#graphql-http-host",children:(0,t.jsx)(n.code,{children:"graphql-http-host"})})," and ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/cli/options#graphql-http-port",children:(0,t.jsx)(n.code,{children:"graphql-http-port"})}),". The default endpoint is ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:8547/graphql"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"graphql-requests-with-curl",children:"GraphQL requests with cURL"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/",children:"Hyperledger Besu JSON-RPC API methods"})," with an equivalent ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/how-to/use-besu-api/graphql",children:"GraphQL"})," query include a GraphQL request and result in the method example."]}),"\n",(0,t.jsxs)(n.p,{children:["The following ",(0,t.jsx)(n.a,{href:"/23.4.0/public-networks/reference/api/#eth_syncing",children:(0,t.jsx)(n.code,{children:"syncing"})})," request returns data about the synchronization status."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{syncing{startingBlock currentBlock highestBlock}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,t.jsx)(n.h2,{id:"graphql-requests-with-graphiql-app",children:"GraphQL requests with GraphiQL app"}),"\n",(0,t.jsxs)(n.p,{children:["The third-party tool, ",(0,t.jsx)(n.a,{href:"https://github.com/skevy/graphiql-app",children:"GraphiQL"}),", provides a tabbed interface for editing and testing GraphQL queries and mutations. GraphiQL also provides access to the ",(0,t.jsx)(n.a,{href:"https://github.com/hyperledger/besu/blob/750580dcca349d22d024cc14a8171b2fa74b505a/ethereum/api/src/main/resources/schema.graphqls",children:"Besu GraphQL schema"})," from within the app."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"GraphiQL",src:s(90990).Z+"",width:"2002",height:"786"})}),"\n",(0,t.jsx)(n.h2,{id:"pending",children:"Pending"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transactionCount"})," and ",(0,t.jsx)(n.code,{children:"transactions"})," supports the Pending query."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Besu does not execute pending transactions so results from ",(0,t.jsx)(n.code,{children:"account"}),", ",(0,t.jsx)(n.code,{children:"call"}),", and ",(0,t.jsx)(n.code,{children:"estimateGas"})," for Pending do not reflect pending transactions."]})}),"\n",(0,t.jsx)(n.h1,{id:"pending-transaction-count",children:"Pending transaction count"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactionCount}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,t.jsx)(n.h1,{id:"result",children:"Result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactionCount": 2\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h1,{id:"pending-transactions",children:"Pending transactions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" --data \'{ "query": "{pending {transactions{hash}}}"}\' http://localhost:8547/graphql\n'})}),"\n",(0,t.jsx)(n.h1,{id:"result-1",children:"Result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "pending": {\n      "transactions": [\n        {\n          "hash": "0xbb3ab8e2113a4afdde9753782cb0680408c0d5b982572dda117a4c72fafbf3fa"\n        },\n        {\n          "hash": "0xf6bd6b1bccf765024bd482a71c6855428e2903895982090ab5dbb0feda717af6"\n        }\n      ]\n    }\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},90990:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/GraphiQL-a6360ff9467a3f33ade0bf00e6eec49e.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var t=s(67294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);