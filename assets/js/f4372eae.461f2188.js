"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[45213],{4380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(85893),s=t(11151);const i={title:"Start Besu",description:"Start Besu on a private Ethereum network.",sidebar_position:3,tags:["private networks"]},o="Start Besu",a={id:"private-networks/get-started/start-node",title:"Start Besu",description:"Start Besu on a private Ethereum network.",source:"@site/versioned_docs/version-23.10.2/private-networks/get-started/start-node.md",sourceDirName:"private-networks/get-started",slug:"/private-networks/get-started/start-node",permalink:"/private-networks/get-started/start-node",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/private-networks/get-started/start-node.md",tags:[{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1702970404,formattedLastUpdatedAt:"Dec 19, 2023",sidebarPosition:3,frontMatter:{title:"Start Besu",description:"Start Besu on a private Ethereum network.",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Install binary distribution",permalink:"/private-networks/get-started/install/binary-distribution"},next:{title:"How to",permalink:"/private-networks/how-to/"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Local block data",id:"local-block-data",level:2},{value:"Genesis configuration",id:"genesis-configuration",level:2},{value:"Confirm node is running",id:"confirm-node-is-running",level:2},{value:"Run a node for testing",id:"run-a-node-for-testing",level:2},{value:"Run a node on a private network",id:"run-a-node-on-a-private-network",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"start-besu",children:"Start Besu"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/private-networks/reference/cli/options",children:(0,r.jsx)(n.code,{children:"besu"})})," command with the required command line options to start a node."]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/private-networks/get-started/install/binary-distribution",children:"Besu installed"})}),"\n",(0,r.jsx)(n.h2,{id:"local-block-data",children:"Local block data"}),"\n",(0,r.jsxs)(n.p,{children:["When connecting to a network other than the network previously connected to, you must either delete the local block data or use the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#data-path",children:(0,r.jsx)(n.code,{children:"--data-path"})})," option to specify a different data directory."]}),"\n",(0,r.jsxs)(n.p,{children:["To delete the local block data, delete the ",(0,r.jsx)(n.code,{children:"database"})," directory in the ",(0,r.jsx)(n.code,{children:"besu/build/distribution/besu-<version>"})," directory."]}),"\n",(0,r.jsx)(n.h2,{id:"genesis-configuration",children:"Genesis configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To define a genesis configuration, create a ",(0,r.jsx)(n.a,{href:"/public-networks/concepts/genesis-file",children:"genesis file"})," (for example, ",(0,r.jsx)(n.code,{children:"genesis.json"}),") and specify the file using the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#genesis-file",children:(0,r.jsx)(n.code,{children:"--genesis-file"})})," option."]}),"\n",(0,r.jsxs)(n.p,{children:["When you specify ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:(0,r.jsx)(n.code,{children:"--network=dev"})}),", Besu uses the development mode genesis configuration with a fixed low difficulty. A node started with ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#network",children:(0,r.jsx)(n.code,{children:"--network=dev"})})," has an empty bootnodes list by default."]}),"\n",(0,r.jsxs)(n.p,{children:["Predefined genesis configurations for named networks are in the ",(0,r.jsx)(n.a,{href:"https://github.com/hyperledger/besu/tree/master/config/src/main/resources",children:"Besu source files"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"confirm-node-is-running",children:"Confirm node is running"}),"\n",(0,r.jsxs)(n.p,{children:["If you started Besu with the ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})})," option, use ",(0,r.jsx)(n.a,{href:"https://curl.haxx.se/",children:"cURL"})," to call ",(0,r.jsx)(n.a,{href:"/private-networks/reference/api/",children:"JSON-RPC API methods"})," to confirm the node is running."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"eth_chainId"})," returns the chain ID of the network."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_chainId","params":[],"id":1}\' localhost:8545\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"eth_syncing"})," returns the starting, current, and highest block."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}\' localhost:8545\n'})}),"\n",(0,r.jsxs)(n.p,{children:["For example, after connecting to Mainnet, ",(0,r.jsx)(n.code,{children:"eth_syncing"})," will return something similar to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": {\n    "startingBlock": "0x0",\n    "currentBlock": "0x2d0",\n    "highestBlock": "0x66c0"\n  }\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-a-node-for-testing",children:"Run a node for testing"}),"\n",(0,r.jsx)(n.p,{children:"To run a node that mines blocks at a rate suitable for testing purposes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'besu --network=dev --miner-enabled --miner-coinbase=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --host-allowlist="*" --rpc-ws-enabled --rpc-http-enabled --data-path=/tmp/tmpDatdir\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You can also use the following ",(0,r.jsx)(n.a,{href:"/public-networks/how-to/configuration-file",children:"configuration file"})," on the command line to start a node with the same options as above:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-toml",children:'network="dev"\nminer-enabled=true\nminer-coinbase="0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\nrpc-http-cors-origins=["all"]\nhost-allowlist=["*"]\nrpc-ws-enabled=true\nrpc-http-enabled=true\ndata-path="/tmp/tmpdata-path"\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"The following settings are a security risk in production environments:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Enabling the HTTP JSON-RPC service (",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-enabled",children:(0,r.jsx)(n.code,{children:"--rpc-http-enabled"})}),") and setting ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-host",children:(0,r.jsx)(n.code,{children:"--rpc-http-host"})})," to 0.0.0.0 exposes the RPC connection on your node to any remote connection."]}),"\n",(0,r.jsxs)(n.li,{children:["Setting ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#host-allowlist",children:(0,r.jsx)(n.code,{children:"--host-allowlist"})})," to ",(0,r.jsx)(n.code,{children:'"*"'})," allows JSON-RPC API access from any host."]}),"\n",(0,r.jsxs)(n.li,{children:["Setting ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#rpc-http-cors-origins",children:(0,r.jsx)(n.code,{children:"--rpc-http-cors-origins"})})," to ",(0,r.jsx)(n.code,{children:'"all"'})," or ",(0,r.jsx)(n.code,{children:'"*"'})," allows cross-origin resource sharing (CORS) access from any domain."]}),"\n"]})]}),"\n",(0,r.jsx)(n.h2,{id:"run-a-node-on-a-private-network",children:"Run a node on a private network"}),"\n",(0,r.jsx)(n.p,{children:"To run a node on your private network specifying a genesis file and data directory:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu --genesis-file=<path>/genesis.json --data-path=<data-path> --rpc-http-enabled --bootnodes=<bootnodes>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"<data-path>"})," is the path to the directory to save the chain data to. Ensure you configure a peer discovery method, such as ",(0,r.jsx)(n.a,{href:"/private-networks/how-to/configure/bootnodes",children:"bootnodes"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["You might need to set ",(0,r.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage",children:(0,r.jsx)(n.code,{children:"--tx-pool-limit-by-account-percentage"})})," to 1. The default value is suitable for Mainnet, but may cause issues on private networks."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(67294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);