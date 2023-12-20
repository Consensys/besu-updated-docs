"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[620],{72324:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var o=i(85893),s=i(11151);const r={title:"IBFT 2.0",description:"Hyperledger Besu IBFT 2.0 proof of authority (PoA) consensus protocol implementation",sidebar_position:3,tags:["private networks"]},t="Configure IBFT 2.0 consensus",d={id:"private-networks/how-to/configure/consensus/ibft",title:"IBFT 2.0",description:"Hyperledger Besu IBFT 2.0 proof of authority (PoA) consensus protocol implementation",source:"@site/versioned_docs/version-23.10.1/private-networks/how-to/configure/consensus/ibft.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/ibft",permalink:"/23.10.1/private-networks/how-to/configure/consensus/ibft",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/how-to/configure/consensus/ibft.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1703037533,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:3,frontMatter:{title:"IBFT 2.0",description:"Hyperledger Besu IBFT 2.0 proof of authority (PoA) consensus protocol implementation",sidebar_position:3,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"QBFT",permalink:"/23.10.1/private-networks/how-to/configure/consensus/qbft"},next:{title:"Clique",permalink:"/23.10.1/private-networks/how-to/configure/consensus/clique"}},c={},a=[{value:"Genesis file",id:"genesis-file",level:2},{value:"Extra data",id:"extra-data",level:3},{value:"Generate extra data",id:"generate-extra-data",level:4},{value:"Block time",id:"block-time",level:3},{value:"Tune block timeout",id:"tune-block-timeout",level:4},{value:"Optional configuration options",id:"optional-configuration-options",level:3},{value:"Post-Merge configuration",id:"post-merge-configuration",level:3},{value:"Add and remove validators",id:"add-and-remove-validators",level:2},{value:"Add a validator",id:"add-a-validator",level:3},{value:"Remove a validator",id:"remove-a-validator",level:3},{value:"Epoch transition",id:"epoch-transition",level:3},{value:"Minimum number of validators",id:"minimum-number-of-validators",level:3},{value:"Maximum number of validators",id:"maximum-number-of-validators",level:3},{value:"Transitions",id:"transitions",level:2},{value:"Configure block time on an existing network deployment",id:"configure-block-time-on-an-existing-network-deployment",level:3},{value:"Configure block rewards on an existing network deployment",id:"configure-block-rewards-on-an-existing-network-deployment",level:3},{value:"Configure the mining beneficiary on an existing network deployment",id:"configure-the-mining-beneficiary-on-an-existing-network-deployment",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"configure-ibft-20-consensus",children:"Configure IBFT 2.0 consensus"}),"\n",(0,o.jsxs)(n.p,{children:["Besu implements the IBFT 2.0 proof of authority (PoA) ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/how-to/configure/consensus/",children:"consensus protocol"}),". IBFT 2.0 is supported for existing private networks, but ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," is the recommended enterprise-grade consensus protocol for private networks."]}),"\n",(0,o.jsx)(n.p,{children:"In IBFT 2.0 networks, approved accounts, known as validators, validate transactions and blocks. Validators take turns to create the next block. Before inserting the block onto the chain, a super-majority (greater than or equal to 2/3) of validators must first sign the block."}),"\n",(0,o.jsxs)(n.p,{children:["Existing validators propose and vote to ",(0,o.jsx)(n.a,{href:"#add-and-remove-validators",children:"add or remove validators"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/tutorials/ibft/",children:"create a private network using IBFT"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsx)(n.p,{children:"Configure your network to ensure you never lose more than 1/3 of your validators. If more than 1/3 of validators stop participating, new blocks are no longer created, and the network stalls. It may take significant time to recover once nodes are restarted."})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["You can use a plugin to securely store a validator's key using the ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#security-module",children:(0,o.jsx)(n.code,{children:"--security-module"})})," option."]})}),"\n",(0,o.jsx)(n.h2,{id:"genesis-file",children:"Genesis file"}),"\n",(0,o.jsxs)(n.p,{children:["To use IBFT 2.0, Besu requires an IBFT 2.0 ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/concepts/genesis-file",children:"genesis file"}),". The genesis file defines properties specific to IBFT 2.0."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="Example IBFT 2.0 genesis file"',children:'{\n  "config": {\n    "chainId": 1981,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "blockreward": "5000000000000000",\n      "miningbeneficiary": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"\n    }\n  },\n  "nonce": "0x0",\n  "timestamp": "0x58ee40ba",\n  "extraData": "0xf83ea00000000000000000000000000000000000000000000000000000000000000000d594c2ab482b506de561668e07f04547232a72897daf808400000000c0",\n  "gasLimit": "0x1fffffffffffff",\n  "difficulty": "0x1",\n  "mixHash": "0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365",\n  "alloc": {}\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"The properties specific to IBFT 2.0 are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"blockperiodseconds"})," - The minimum block time, in seconds."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"epochlength"})," - The number of blocks after which to reset all votes."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," - The timeout for each consensus round before a round change, in seconds."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"blockreward"})," - Optional reward amount in Wei to reward the beneficiary. Defaults to zero (0). Can be specified as a hexadecimal (with 0x prefix) or decimal string value. If set, then all nodes on the network must use the identical value."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"miningbeneficiary"})," - Optional beneficiary of the ",(0,o.jsx)(n.code,{children:"blockreward"}),". Defaults to the validator that proposes the block. If set, then all nodes on the network must use the same beneficiary."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"extraData"})," - RLP encoded ",(0,o.jsx)(n.a,{href:"#extra-data",children:"extra data"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["We don't recommend changing ",(0,o.jsx)(n.code,{children:"epochlength"})," in a running network. Changing the ",(0,o.jsx)(n.code,{children:"epochlength"})," after genesis can result in illegal blocks."]})}),"\n",(0,o.jsxs)(n.admonition,{title:"Invalid block header error",type:"caution",children:[(0,o.jsxs)(n.p,{children:["When adding a new node, if a ",(0,o.jsx)(n.code,{children:"TimeStampMoreRecentThanParent | Invalid block header"})," error occurs, the genesis file of the new node specifies a higher ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," than the imported chain. The imported chain makes new blocks faster than the genesis file allows and Besu rejects them with this error. This error most often occurs when importing chains from older versions of Besu."]}),(0,o.jsxs)(n.p,{children:["Decrease the ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," in the new IBFT 2.0 genesis file to a lower value that satisfies the block header validation."]})]}),"\n",(0,o.jsxs)(n.p,{children:["If the error reads ",(0,o.jsx)(n.code,{children:"| TimestampMoreRecentThanParent | Invalid block header: timestamp 1619660141 is only 3 seconds newer than parent timestamp 1619660138. Minimum 4 seconds"}),", decrease the ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," from 4 seconds to 3 seconds to match the imported chain."]}),"\n",(0,o.jsxs)(n.p,{children:["After you update the new genesis file, if the imported chain has a ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," value set lower than you prefer, you can adjust it by ",(0,o.jsx)(n.a,{href:"#configure-block-time-on-an-existing-network",children:"configuring the block time on an existing IBFT 2.0 network"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The properties with specific values in the IBFT 2.0 genesis files are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nonce"})," - ",(0,o.jsx)(n.code,{children:"0x0"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"difficulty"})," - ",(0,o.jsx)(n.code,{children:"0x1"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mixHash"})," - ",(0,o.jsx)(n.code,{children:"0x63746963616c2062797a616e74696e65206661756c7420746f6c6572616e6365"})," for Istanbul block identification"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To start a node on an IBFT 2.0 private network, use the ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#genesis-file",children:(0,o.jsx)(n.code,{children:"--genesis-file"})})," option to specify the custom genesis file."]}),"\n",(0,o.jsx)(n.h3,{id:"extra-data",children:"Extra data"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"extraData"})," property is an RLP encoding of:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"32 bytes of vanity data."}),"\n",(0,o.jsx)(n.li,{children:"A list of validator addresses."}),"\n",(0,o.jsx)(n.li,{children:"Any validator votes. No vote is included in the genesis block."}),"\n",(0,o.jsx)(n.li,{children:"The round the block was created on. The round in the genesis block is 0."}),"\n",(0,o.jsx)(n.li,{children:"A list of seals of the validators (signed block hashes). No seals are included in the genesis block."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In the genesis block, the important information in the extra data is the list of validators. All other details have empty values. Formally, ",(0,o.jsx)(n.code,{children:"extraData"})," in the genesis block contains ",(0,o.jsx)(n.code,{children:"RLP([32 bytes Vanity, List<Validators>, No Vote, Round=Int(0), 0 Seals])"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"RLP encoding is a space-efficient object serialization scheme used in Ethereum."})}),"\n",(0,o.jsx)(n.h4,{id:"generate-extra-data",children:"Generate extra data"}),"\n",(0,o.jsxs)(n.p,{children:["To generate the ",(0,o.jsx)(n.code,{children:"extraData"})," RLP string for inclusion in the genesis file, use the ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/subcommands#rlp",children:(0,o.jsx)(n.code,{children:"rlp encode"})})," Besu subcommand."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="Example"',children:"besu rlp encode --from=toEncode.json\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Where the ",(0,o.jsx)(n.code,{children:"toEncode.json"})," file contains a list of the initial validators, in ascending order. To write the validator address and copy it to the ",(0,o.jsx)(n.code,{children:"toEncode.json"})," file, use the ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/subcommands#export-address",children:(0,o.jsx)(n.code,{children:"public-key export-address"})})," Besu subcommand. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="One initial validator in toEncode.json file"',children:'["9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Copy the RLP encoded data to the ",(0,o.jsx)(n.code,{children:"extraData"})," property in the genesis file."]}),"\n",(0,o.jsx)(n.h3,{id:"block-time",children:"Block time"}),"\n",(0,o.jsxs)(n.p,{children:["When the protocol receives a new chain head, the block time (",(0,o.jsx)(n.code,{children:"blockperiodseconds"}),") and round timeout (",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"}),") timers start. When ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," expires, the protocol proposes a new block."]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," expires before adding the proposed block, a round change occurs, with the block time and timeout timers reset. The timeout period for the new round is two times ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"}),". The timeout period continues to double each time a round fails to add a block."]}),"\n",(0,o.jsxs)(n.p,{children:["Usually, the protocol adds the proposed block before reaching ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"}),". A new round then starts, resetting the block time and round timeout timers. When ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," expires, the protocol proposes the next new block."]}),"\n",(0,o.jsx)(n.admonition,{type:"danger",children:(0,o.jsxs)(n.p,{children:["If more than 1/3 of validators stop participating, new blocks can no longer be created and ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," doubles with each round change. The quickest method to resume block production is to restart all validators, which resets ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," to its genesis value."]})}),"\n",(0,o.jsxs)(n.p,{children:["Once ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," is over, the time from proposing a block to adding the block is small (usually around one second) even in networks with geographically dispersed validators."]}),"\n",(0,o.jsxs)(n.p,{children:["An internal network run by ConsenSys had four geographically dispersed validators in Sweden, Sydney, and two in North Virginia. With a ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," of 5 and a ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," of 10, the testnet consistently created blocks with a five second block time."]}),"\n",(0,o.jsx)(n.h4,{id:"tune-block-timeout",children:"Tune block timeout"}),"\n",(0,o.jsx)(n.p,{children:"To tune the block timeout for your network deployment:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Set ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," to your desired block time and ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," to two times ",(0,o.jsx)(n.code,{children:"blockperiodseconds"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Reduce ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," until you start to see round changes occurring."]}),"\n",(0,o.jsxs)(n.li,{children:["Increase ",(0,o.jsx)(n.code,{children:"requesttimeoutseconds"})," to the value where round changes are no longer occurring."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["View ",(0,o.jsxs)(n.a,{href:"/23.10.1/public-networks/reference/api/#trace-methods",children:[(0,o.jsx)(n.code,{children:"TRACE"})," logs"]})," to see round change log messages."]})}),"\n",(0,o.jsxs)(n.p,{children:["Use a ",(0,o.jsx)(n.a,{href:"#transitions",children:"transition"})," to update the ",(0,o.jsx)(n.code,{children:"blockperiodseconds"})," in an existing network."]}),"\n",(0,o.jsx)(n.h3,{id:"optional-configuration-options",children:"Optional configuration options"}),"\n",(0,o.jsx)(n.p,{children:"Optional configuration options in the genesis file are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"messageQueueLimit"})," - In large networks with limited resources, increasing the message queue limit might help with message activity surges. The default is 1000."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"duplicateMessageLimit"})," - If the same node is retransmitting messages, increasing the duplicate message limit might reduce the number of retransmissions. A value of two to three times the number of validators is usually enough. The default is 100."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"futureMessagesLimit"})," - The future messages buffer holds messages for a future chain height. For large networks, increasing the future messages limit might be useful. The default is 1000."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"futureMessagesMaxDistance"})," - The maximum height from the current chain height for buffering messages in the future messages buffer. The default is 10."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"post-merge-configuration",children:"Post-Merge configuration"}),"\n",(0,o.jsxs)(n.p,{children:["After ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/concepts/the-merge",children:"The Merge"}),", the following block fields are modified or deprecated. Their fields ",(0,o.jsx)(n.strong,{children:"must"})," contain only the constant values from the following chart."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Field"}),(0,o.jsx)(n.th,{children:"Constant value"}),(0,o.jsx)(n.th,{children:"Comment"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"ommersHash"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"= Keccak256(RLP([]))"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"difficulty"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0"})}),(0,o.jsxs)(n.td,{children:["Replaced with ",(0,o.jsx)(n.code,{children:"prevrandao"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"mixHash"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0x0000000000000000000000000000000000000000000000000000000000000000"})}),(0,o.jsxs)(n.td,{children:["Replaced with ",(0,o.jsx)(n.code,{children:"prevrandao"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"nonce"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"0x0000000000000000"})}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.code,{children:"ommers"})})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"[]"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"RLP([]) = 0xc0"})})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, ",(0,o.jsx)(n.a,{href:"#extra-data",children:(0,o.jsx)(n.code,{children:"extraData"})})," is limited to 32 bytes of vanity data after The Merge."]}),"\n",(0,o.jsx)(n.h2,{id:"add-and-remove-validators",children:"Add and remove validators"}),"\n",(0,o.jsxs)(n.p,{children:["Existing validators propose and vote to add or remove validators using the IBFT 2.0 JSON-RPC API methods. Enable the HTTP interface with ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#rpc-http-enabled",children:(0,o.jsx)(n.code,{children:"--rpc-http-enabled"})})," or the WebSocket interface with ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#rpc-ws-enabled",children:(0,o.jsx)(n.code,{children:"--rpc-ws-enabled"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The IBFT 2.0 API methods are disabled by default. To enable them, specify the ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#rpc-http-api",children:(0,o.jsx)(n.code,{children:"--rpc-http-api"})})," or ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/cli/options#rpc-ws-api",children:(0,o.jsx)(n.code,{children:"--rpc-ws-api"})})," option and include ",(0,o.jsx)(n.code,{children:"IBFT"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The methods to add or remove validators are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_getpendingvotes",children:(0,o.jsx)(n.code,{children:"ibft_getPendingVotes"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_proposevalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_proposeValidatorVote"})}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_discardvalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_discardValidatorVote"})}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To view validator metrics for a specified block range, use ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/api/#ibft_getsignermetrics",children:(0,o.jsx)(n.code,{children:"ibft_getSignerMetrics"})}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If network conditions render it impossible to add and remove validators by voting, you can ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/how-to/configure/consensus/add-validators-without-voting",children:"add and remove validators without voting"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"add-a-validator",children:"Add a validator"}),"\n",(0,o.jsxs)(n.p,{children:["To propose adding a validator to an IBFT 2.0 network, call ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_proposevalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_proposeValidatorVote"})}),", specifying the address of the proposed validator and ",(0,o.jsx)(n.code,{children:"true"}),". A majority of validators must execute the call."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC ibft_proposeValidatorVote request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_proposeValidatorVote","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73", true], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["When the validator proposes the next block, the protocol inserts one proposal received from ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_proposevalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_proposeValidatorVote"})})," into the block. If blocks include all proposals, subsequent blocks proposed by the validator will not contain a vote."]}),"\n",(0,o.jsx)(n.p,{children:"When more than 50% of the existing validators have published a matching proposal, the protocol adds the proposed validator to the validator pool and the validator can begin validating blocks."}),"\n",(0,o.jsxs)(n.p,{children:["To return a list of validators and confirm the addition of a proposed validator, use ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,o.jsx)(n.code,{children:"ibft_getValidatorsByBlockNumber"})}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC ibft_getValidatorsByBlockNumber request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_getValidatorsByBlockNumber","params":["latest"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["To discard your proposal after confirming the addition of a validator, call ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_discardvalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_discardValidatorVote"})}),", specifying the address of the proposed validator."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",metastring:'title="JSON-RPC ibft_discardValidatorVote request example"',children:'curl -X POST --data \'{"jsonrpc":"2.0","method":"ibft_discardValidatorVote","params":["0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73"], "id":1}\' <JSON-RPC-endpoint:port>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"remove-a-validator",children:"Remove a validator"}),"\n",(0,o.jsxs)(n.p,{children:["The process for removing a validator from an IBFT 2.0 network is the same as ",(0,o.jsx)(n.a,{href:"#add-a-validator",children:"adding a validator"})," except you specify ",(0,o.jsx)(n.code,{children:"false"})," as the second parameter of ",(0,o.jsx)(n.a,{href:"/23.10.1/private-networks/reference/api/#ibft_proposevalidatorvote",children:(0,o.jsx)(n.code,{children:"ibft_proposeValidatorVote"})}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"epoch-transition",children:"Epoch transition"}),"\n",(0,o.jsx)(n.p,{children:"At each epoch transition, IBFT 2.0 discards all pending votes collected from received blocks. Existing proposals remain in effect and validators re-add their vote the next time they create a block."}),"\n",(0,o.jsxs)(n.p,{children:["An epoch transition occurs every ",(0,o.jsx)(n.code,{children:"epochLength"})," blocks. Define ",(0,o.jsx)(n.code,{children:"epochlength"})," in the ",(0,o.jsx)(n.a,{href:"#genesis-file",children:"IBFT 2.0 genesis file"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"minimum-number-of-validators",children:"Minimum number of validators"}),"\n",(0,o.jsx)(n.p,{children:"IBFT 2.0 requires four validators to be Byzantine fault tolerant. Byzantine fault tolerance is the ability for a blockchain network to function correctly and reach consensus despite nodes failing or propagating incorrect information to peers."}),"\n",(0,o.jsx)(n.h3,{id:"maximum-number-of-validators",children:"Maximum number of validators"}),"\n",(0,o.jsxs)(n.p,{children:["As the number of validators increase, the message complexity increases, which can decrease performance. In ",(0,o.jsx)(n.a,{href:"https://wiki.hyperledger.org/display/BESU/Maximum+Validator+count+for+an+IBFT2+Network",children:"network tests"}),", IBFT 2.0 handles up to 30 validators with no loss of performance."]}),"\n",(0,o.jsx)(n.p,{children:"Non-validator nodes don't affect performance and don't count towards the maximum limit."}),"\n",(0,o.jsx)(n.h2,{id:"transitions",children:"Transitions"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"transitions"})," genesis configuration item allows you to specify a future block number at which to change IBFT 2.0 network configuration in an existing network. For example, you can update the ",(0,o.jsx)(n.a,{href:"#configure-block-time-on-an-existing-network-deployment",children:"block time"}),", ",(0,o.jsx)(n.a,{href:"#configure-block-rewards-on-an-existing-network-deployment",children:"block reward"}),", or ",(0,o.jsx)(n.a,{href:"#configure-the-mining-beneficiary-on-an-existing-network-deployment",children:"mining beneficiary"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Do not specify a transition block in the past. Specifying a transition block in the past could result in unexpected behavior, such as causing the network to fork."})}),"\n",(0,o.jsx)(n.h3,{id:"configure-block-time-on-an-existing-network-deployment",children:"Configure block time on an existing network deployment"}),"\n",(0,o.jsxs)(n.p,{children:["To update an existing network with a new ",(0,o.jsx)(n.code,{children:"blockperiodseconds"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stop all nodes in the network."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"#genesis-file",children:"genesis file"}),", add the ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<FutureBlockNumber>"})," is the upcoming block at which to change ",(0,o.jsx)(n.code,{children:"blockperiodseconds"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<NewValue>"})," is the updated value for ",(0,o.jsx)(n.code,{children:"blockperiodseconds"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n        {\n          "block": <FutureBlockNumber>,\n          "blockperiodseconds": <NewValue>\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n        {\n          "block": 1240,\n          "blockperiodseconds": 4\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To verify the changes after the transition block, call ",(0,o.jsx)(n.a,{href:"/23.10.1/public-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,o.jsx)(n.code,{children:"ibft_getValidatorsByBlockNumber"})}),", specifying ",(0,o.jsx)(n.code,{children:"latest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-block-rewards-on-an-existing-network-deployment",children:"Configure block rewards on an existing network deployment"}),"\n",(0,o.jsxs)(n.p,{children:["To update an existing network with a new ",(0,o.jsx)(n.code,{children:"blockreward"}),":"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stop all nodes in the network."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"#genesis-file",children:"genesis file"}),", add the ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<FutureBlockNumber>"})," is the upcoming block at which to change ",(0,o.jsx)(n.code,{children:"blockreward"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<NewValue>"})," is the updated value for ",(0,o.jsx)(n.code,{children:"blockreward"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n      "blockreward": "5000000000000000"\n    },\n    "transitions": {\n      "ibft2": [\n        {\n          "block": <FutureBlockNumber>,\n          "blockreward": <NewValue>\n        },\n        {\n          "block": <FutureBlockNumber>,\n          "blockreward": <NewValue>\n        },\n        {\n          "block": <FutureBlockNumber>,\n          "blockreward": <NewValue>\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n      "blockreward": "5000000000000000"\n    },\n    "transitions": {\n      "ibft2": [\n        {\n          "block": 10,\n          "blockreward": "6000000000000000"\n        },\n        {\n          "block": 15,\n          "blockreward": "75000000000000000"\n        },\n        {\n          "block": 20,\n          "blockreward": "0"\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You can add multiple ",(0,o.jsx)(n.code,{children:"blockreward"})," updates in one transition object by specifying multiple future blocks."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"configure-the-mining-beneficiary-on-an-existing-network-deployment",children:"Configure the mining beneficiary on an existing network deployment"}),"\n",(0,o.jsx)(n.p,{children:"To update an existing network with a new mining beneficiary:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Stop all nodes in the network."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"#genesis-file",children:"genesis file"}),", add the ",(0,o.jsx)(n.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<FutureBlockNumber>"})," is the upcoming block at which to change ",(0,o.jsx)(n.code,{children:"miningbeneficiary"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<NewAddress>"})," is the updated 20-byte address for ",(0,o.jsx)(n.code,{children:"miningbeneficiary"}),". Starting at ",(0,o.jsx)(n.code,{children:"<FutureBlockNumber>"}),", block rewards go to this address."]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    "chainId": 999,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 1,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 5,\n      "blockreward": "5000000000000000000",\n      "miningbeneficiary": "0x0000000000000000000000000000000000000001"\n    },\n    "transitions": {\n      "ibft2": [\n        {\n          "block": <FutureBlockNumber>,\n          "miningbeneficiary": <NewAddress>\n        },\n        {\n          "block": <FutureBlockNumber>,\n          "miningbeneficiary": <NewAddress>\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(n.h1,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'{\n  "config": {\n    "chainId": 999,\n    "berlinBlock": 0,\n    "ibft2": {\n      "blockperiodseconds": 1,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 5,\n      "blockreward": "5000000000000000000",\n      "miningbeneficiary": "0x0000000000000000000000000000000000000001"\n    },\n    "transitions": {\n      "ibft2": [\n      {\n        "block": 10000,\n        "miningbeneficiary": "",\n      },\n      {\n        "block": 20000,\n        "miningbeneficiary": "0x0000000000000000000000000000000000000002",\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Setting the ",(0,o.jsx)(n.code,{children:"miningbeneficiary"})," to an empty value clears out any override so that block rewards go to the block producer rather than a global override address."]})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Restart all nodes in the network using the updated genesis file."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"_[vanity data]: Validators can include anything they like as vanity data. _[RLP]: Recursive Length Prefix"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>t});var o=i(67294);const s={},r=o.createContext(s);function t(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);