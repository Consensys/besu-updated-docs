"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[59574],{78103:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(85893),i=t(11151);const s={title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},r="Transaction pool",a={id:"public-networks/concepts/transactions/pool",title:"Transaction pool",description:"Transaction pool overview",source:"@site/versioned_docs/version-23.10.2/public-networks/concepts/transactions/pool.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/pool",permalink:"/public-networks/concepts/transactions/pool",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.2/public-networks/concepts/transactions/pool.md",tags:[{label:"public networks",permalink:"/tags/public-networks"},{label:"private networks",permalink:"/tags/private-networks"}],version:"23.10.2",lastUpdatedAt:1703108811,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Transaction pool",sidebar_position:2,description:"Transaction pool overview",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction types",permalink:"/public-networks/concepts/transactions/types"},next:{title:"Transaction validation",permalink:"/public-networks/concepts/transactions/validation"}},c={},l=[{value:"Layered transaction pool",id:"layered-transaction-pool",level:2},{value:"Dropping transactions when the transaction pool is full",id:"dropping-transactions-when-the-transaction-pool-is-full",level:2},{value:"Replacing transactions with the same sender and nonce",id:"replacing-transactions-with-the-same-sender-and-nonce",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"transaction-pool",children:"Transaction pool"}),"\n",(0,o.jsx)(n.p,{children:"All nodes maintain a transaction pool to store pending transactions before processing."}),"\n",(0,o.jsx)(n.p,{children:"Options and methods for configuring and monitoring the transaction pool include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/api/#txpool_besutransactions",children:(0,o.jsx)(n.code,{children:"txpool_besuTransactions"})})," API method to\nlist transactions in the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool",children:(0,o.jsx)(n.code,{children:"--tx-pool"})})," option to specify the type of transaction\npool to use."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-layer-max-capacity",children:(0,o.jsx)(n.code,{children:"--tx-pool-layer-max-capacity"})})," option\nto specify the maximum memory capacity of the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," option to specify the\nprice bump percentage to replace an existing transaction."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-priority-senders",children:(0,o.jsx)(n.code,{children:"--tx-pool-priority-senders"})}),"\noption to specify sender addresses to prioritize in the transaction pool."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/rpc-pubsub#pending-transactions",children:(0,o.jsx)(n.code,{children:"newPendingTransactions"})})," and\n",(0,o.jsx)(n.a,{href:"/public-networks/how-to/use-besu-api/rpc-pubsub#dropped-transactions",children:(0,o.jsx)(n.code,{children:"droppedPendingTransactions"})})," RPC\nsubscriptions to notify you of transactions added to and dropped from the transaction pool."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["When submitting ",(0,o.jsx)(n.a,{href:"/private-networks/concepts/privacy/private-transactions/#nonce-validation",children:"private transactions"}),",\nthe ",(0,o.jsx)(n.a,{href:"/private-networks/concepts/privacy/private-transactions/processing",children:"privacy marker transaction"}),"\nis submitted to the transaction pool, not the private transaction itself."]})}),"\n",(0,o.jsx)(n.h2,{id:"layered-transaction-pool",children:"Layered transaction pool"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/hyperledger/besu/pull/5290",children:"layered transaction pool"})," is the default\ntransaction pool implementation.\nThis implementation separates the pool into layers according to value and executability of the transactions.\nThat is, the first layer keeps only transactions with the highest value and that could feasibly go\ninto the next produced block.\nThe two other layers ensure that Besu always has a backlog of transactions to fill blocks, gaining\nthe maximum amount of fees."]}),"\n",(0,o.jsx)(n.p,{children:"With the layered transaction pool, Besu produces more profitable blocks more quickly, with more\ndenial-of-service protection, and using less CPU than with the legacy transaction pool."}),"\n",(0,o.jsx)(n.p,{children:"If you previously configured transaction pool behavior, upgrade to the layered transaction pool by:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Removing the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-retention-hours",children:(0,o.jsx)(n.code,{children:"--tx-pool-retention-hours"})}),"\noption, which is not applicable because old transactions will expire when the memory cache is full."]}),"\n",(0,o.jsxs)(n.li,{children:["Replacing the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-limit-by-account-percentage",children:(0,o.jsx)(n.code,{children:"--tx-pool-limit-by-account-percentage"})}),"\noption with ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-max-future-by-sender",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-future-by-sender"})}),"\nto limit the number of sequential transactions, instead of percentage of transactions, from a single\nsender kept in the pool."]}),"\n",(0,o.jsxs)(n.li,{children:["Removing the ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-max-size",children:(0,o.jsx)(n.code,{children:"--tx-pool-max-size"})})," option,\nwhich is not applicable because the layered pool is limited by memory size instead of the number\nof transactions.\nTo configure the maximum memory capacity, use ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-layer-max-capacity",children:(0,o.jsx)(n.code,{children:"--tx-pool-layer-max-capacity"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can opt out of the layered transaction pool implementation by setting the\n",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool",children:(0,o.jsx)(n.code,{children:"--tx-pool"})})," option to ",(0,o.jsx)(n.code,{children:"legacy"}),", but the legacy\nimplementation will be deprecated soon, so we recommend using the layered pool."]}),"\n",(0,o.jsx)(n.h2,{id:"dropping-transactions-when-the-transaction-pool-is-full",children:"Dropping transactions when the transaction pool is full"}),"\n",(0,o.jsx)(n.p,{children:"When the transaction pool is full, it accepts and retains local transactions in preference to remote transactions. If the transaction pool is full of local transactions, Besu drops the oldest local transactions first. That is, a full transaction pool continues to accept new local transactions by first dropping remote transactions and then by dropping the oldest local transactions."}),"\n",(0,o.jsx)(n.h2,{id:"replacing-transactions-with-the-same-sender-and-nonce",children:"Replacing transactions with the same sender and nonce"}),"\n",(0,o.jsx)(n.p,{children:"You can replace a pending transaction with a transaction that has the same sender and nonce but a higher gas price."}),"\n",(0,o.jsxs)(n.p,{children:["If sending a ",(0,o.jsx)(n.a,{href:"/public-networks/concepts/transactions/types#frontier-transactions",children:"legacy transaction"}),", the old transaction is replaced if the new transaction has a gas price higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If sending an ",(0,o.jsxs)(n.a,{href:"/public-networks/concepts/transactions/types#eip1559-transactions",children:[(0,o.jsx)(n.code,{children:"EIP1559"})," transaction"]}),", the old transaction is replaced if one of the following is true:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is higher than the existing gas price by the percentage specified by ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," AND the new effective priority fee is greater than or equal to the existing priority fee."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The new transaction's effective gas price is the equal to the existing gas price AND the new effective priority fee is higher than the existing priority fee by the percentage specified by ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The default value for ",(0,o.jsx)(n.a,{href:"/public-networks/reference/cli/options#tx-pool-price-bump",children:(0,o.jsx)(n.code,{children:"--tx-pool-price-bump"})})," is 10%."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(67294);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);