"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78807],{3582:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(85893),s=i(11151);const r={title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},o="Configure free gas networks",a={id:"private-networks/how-to/configure/free-gas",title:"Free gas network",description:"Configuring free gas networks",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/configure/free-gas.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/free-gas",permalink:"/23.7.1/private-networks/how-to/configure/free-gas",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/configure/free-gas.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1702608400,formattedLastUpdatedAt:"Dec 15, 2023",sidebarPosition:2,frontMatter:{title:"Free gas network",description:"Configuring free gas networks",sidebar_position:2,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Add and remove validators without voting",permalink:"/23.7.1/private-networks/how-to/configure/consensus/add-validators-without-voting"},next:{title:"Bootnodes",permalink:"/23.7.1/private-networks/how-to/configure/bootnodes"}},c={},l=[{value:"Configure free gas in Besu",id:"configure-free-gas-in-besu",level:2},{value:"1. Set the block size",id:"1-set-the-block-size",level:3},{value:"2. Set the contract size",id:"2-set-the-contract-size",level:3},{value:"3. Start Besu with a minimum gas price of zero",id:"3-start-besu-with-a-minimum-gas-price-of-zero",level:3},{value:"4. Enable zero base fee if using London fork or later",id:"4-enable-zero-base-fee-if-using-london-fork-or-later",level:3},{value:"Configure free gas in Truffle",id:"configure-free-gas-in-truffle",level:2},{value:"Update <code>truffle-config.js</code>",id:"update-truffle-configjs",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"configure-free-gas-networks",children:"Configure free gas networks"}),"\n",(0,t.jsx)(n.p,{children:"Transactions use computational resources so have an associated cost. Gas is the cost unit and the gas price is the price per gas unit. The transaction cost is the gas used * gas price."}),"\n",(0,t.jsx)(n.p,{children:"In public networks, the account submitting the transaction pays the transaction cost, in Ether. The miner (or validator in PoA networks) that includes the transaction in a block receives transaction cost."}),"\n",(0,t.jsx)(n.p,{children:"In many private networks, network participants run the validators and do not require gas as an incentive. Networks that don't require gas as an incentive usually configure the gas price to be zero (that is, free gas). Some private networks might allocate Ether and use a non-zero gas price to limit resource use."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["We use the term ",(0,t.jsx)(n.em,{children:"free gas network"})," to refer to a network with a gas price of zero. A network with a gas price of zero is also known as a ",(0,t.jsx)(n.em,{children:"zero gas network"})," or ",(0,t.jsx)(n.em,{children:"no gas network"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Some pre-crafted transactions require the deployment account to have gas available. For example, the transaction that creates the smart contract in ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1820",children:"EIP-1820"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"In a free gas network, transactions still use gas but the gas price is zero, meaning the transaction cost is zero. Transaction cost = gas used * 0 (the gas price)."}),"\n",(0,t.jsx)(n.h2,{id:"configure-free-gas-in-besu",children:"Configure free gas in Besu"}),"\n",(0,t.jsx)(n.p,{children:"When gas is free, limiting block and contract sizes is less important. In free gas networks, we increase the block size limit and set the contract size limit to the maximum value."}),"\n",(0,t.jsx)(n.h3,{id:"1-set-the-block-size",children:"1. Set the block size"}),"\n",(0,t.jsxs)(n.p,{children:["If you want to remove gas from consideration and don't mind blocks potentially taking longer to create, in the genesis file set the block size limit (measured in gas) to the maximum accepted by Truffle (",(0,t.jsx)(n.code,{children:"0x1fffffffffffff"}),"). In the genesis file, specify ",(0,t.jsx)(n.code,{children:"gasLimit"})," following the ",(0,t.jsx)(n.code,{children:"config"})," key."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n  ....\n  },\n  ...\n  "gasLimit": "0x1fffffffffffff",\n  ....\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are more concerned about blocks arriving on time and don't have expensive individual transactions, set ",(0,t.jsx)(n.code,{children:"gasLimit"})," to a value closer to the amount of gas your validators can process in the configured block time."]}),"\n",(0,t.jsx)(n.h3,{id:"2-set-the-contract-size",children:"2. Set the contract size"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"config"})," section of the genesis file, set the contract size limit to the maximum supported size (in bytes)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'(\n  "config": {\n    ...\n    "contractSizeLimit": 2147483647,\n    ...\n  }\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"3-start-besu-with-a-minimum-gas-price-of-zero",children:"3. Start Besu with a minimum gas price of zero"}),"\n",(0,t.jsxs)(n.p,{children:["When starting nodes, set the ",(0,t.jsx)(n.a,{href:"/23.7.1/public-networks/reference/cli/options#min-gas-price",children:"minimum gas price"})," to zero."]}),"\n",(0,t.jsx)(n.h1,{id:"command-line",children:"Command Line"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--min-gas-price=0\n"})}),"\n",(0,t.jsx)(n.h1,{id:"configuration-file",children:"Configuration File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"min-gas-price=0\n"})}),"\n",(0,t.jsx)(n.h1,{id:"command-line-1",children:"Command Line"}),"\n",(0,t.jsx)(n.admonition,{title:"Important",type:"danger",children:(0,t.jsxs)(n.p,{children:["In a free gas network, ensure the ",(0,t.jsx)(n.a,{href:"/23.7.1/public-networks/reference/cli/options#min-gas-price",children:"minimum gas price"})," is set to zero for every node. Any node with a minimum gas price set higher than zero will silently drop transactions with a zero gas price. You can query a node's gas configuration using ",(0,t.jsx)(n.a,{href:"/23.7.1/public-networks/reference/api/#eth_gasprice",children:(0,t.jsx)(n.code,{children:"eth_gasPrice"})}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"4-enable-zero-base-fee-if-using-london-fork-or-later",children:"4. Enable zero base fee if using London fork or later"}),"\n",(0,t.jsxs)(n.p,{children:["If your network is configured to use the ",(0,t.jsx)(n.code,{children:"londonBlock"})," or a later hard fork, then you must also enable the ",(0,t.jsx)(n.code,{children:"zeroBaseFee"})," configuration. You must set this on all your nodes. Once it is set, future blocks produced by that node will set a ",(0,t.jsx)(n.code,{children:"baseFee"})," of 0. This is required because the London hard fork (EIP-1559) introduced a non-zero ",(0,t.jsx)(n.code,{children:"baseFee"})," into the block which normally means transactions require gas."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "config": {\n    "londonBlock": 0,\n    "zeroBaseFee": true,\n    ...\n  },\n  ...\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"configure-free-gas-in-truffle",children:"Configure free gas in Truffle"}),"\n",(0,t.jsx)(n.p,{children:"If using Truffle to develop on your free gas network, you also need to configure free gas in Truffle."}),"\n",(0,t.jsx)(n.p,{children:"Like setting block and contract size limits to their maximum values for Besu, set the transaction gas limit in Truffle to the maximum possible."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Besu does not support private key management. To use Besu with Truffle, you must configure a ",(0,t.jsx)(n.a,{href:"/23.7.1/public-networks/how-to/develop/truffle",children:"Truffle wallet"}),"."]})}),"\n",(0,t.jsxs)(n.h3,{id:"update-truffle-configjs",children:["Update ",(0,t.jsx)(n.code,{children:"truffle-config.js"})]}),"\n",(0,t.jsxs)(n.p,{children:["Update the ",(0,t.jsx)(n.code,{children:"truffle-config.js"})," file:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the gas price to zero."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"gasPrice: 0;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the gas limit for a transaction (that is, contract creation) to be the block gas limit - 1."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'gas: "0x1ffffffffffffe";\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);