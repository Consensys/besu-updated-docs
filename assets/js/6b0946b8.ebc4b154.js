"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[48128],{13519:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(85893),s=t(11151);const i={title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5,tags:["private networks"]},r="Add and remove validators without voting",a={id:"private-networks/how-to/configure/consensus/add-validators-without-voting",title:"Add and remove validators without voting",description:"How to add or remove validators without voting",source:"@site/versioned_docs/version-23.7.1/private-networks/how-to/configure/consensus/add-validators-without-voting.md",sourceDirName:"private-networks/how-to/configure/consensus",slug:"/private-networks/how-to/configure/consensus/add-validators-without-voting",permalink:"/23.7.1/private-networks/how-to/configure/consensus/add-validators-without-voting",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/private-networks/how-to/configure/consensus/add-validators-without-voting.md",tags:[{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1703048596,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:5,frontMatter:{title:"Add and remove validators without voting",description:"How to add or remove validators without voting",sidebar_position:5,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Clique",permalink:"/23.7.1/private-networks/how-to/configure/consensus/clique"},next:{title:"Free gas network",permalink:"/23.7.1/private-networks/how-to/configure/free-gas"}},d={},c=[{value:"Override smart contract validators",id:"override-smart-contract-validators",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"add-and-remove-validators-without-voting",children:"Add and remove validators without voting"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/qbft",children:"QBFT"})," or ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/ibft",children:"IBFT 2.0"})," network conditions might not allow voting to change validators. For example, if a majority of the current validators are no longer participating in the network, a vote to add or remove validators won't be successful. You can bypass voting and specify new validators using a transition in the genesis file."]}),"\n",(0,o.jsx)(e.admonition,{type:"caution",children:(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["In most cases, add or remove validators ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators",children:"by voting or smart contract for QBFT"}),"; or ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"by voting for IBFT 2.0"}),". Use transitions only when voting isn't possible. Using transitions requires coordinating a rolling update of all the nodes in order to pick up the configuration at the correct block height. Using transitions also leaves the validator overrides permanently in your genesis configuration."]}),"\n",(0,o.jsx)(e.li,{children:"Transitions are a Besu-specific feature. If you run a mixed-client QBFT network, you can't use transitions to change the validators."}),"\n"]})}),"\n",(0,o.jsx)(e.p,{children:"To add or remove validators without voting:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["In the genesis file, add the ",(0,o.jsx)(e.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<ValidatorAddressX> ... <ValidatorAddressZ>"})," are strings representing the account addresses of the validators after ",(0,o.jsx)(e.code,{children:"<BlockNumber>"}),"."]}),"\n"]}),"\n",(0,o.jsx)(e.h1,{id:"qbft-syntax",children:"QBFT syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(e.h1,{id:"qbft-example",children:"QBFT example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "qbft": [\n        {\n        "block": 25,\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(e.h1,{id:"ibft-20-syntax",children:"IBFT 2.0 syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n        "block": <BlockNumber>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(e.h1,{id:"ibft-20-example",children:"IBFT 2.0 example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "ibft2": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4\n    },\n    "transitions": {\n      "ibft2": [\n      {\n      "block": 25,\n      "validators": [\n        "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n        "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["To verify the changes after the transition block, call ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/reference/api/#qbft_getvalidatorsbyblocknumber",children:(0,o.jsx)(e.code,{children:"qbft_getValidatorsByBlockNumber"})})," or ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/reference/api/#ibft_getvalidatorsbyblocknumber",children:(0,o.jsx)(e.code,{children:"ibft_getValidatorsByBlockNumber"})}),", specifying ",(0,o.jsx)(e.code,{children:"latest"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.admonition,{type:"caution",children:[(0,o.jsx)(e.p,{children:"Don't specify a transition block in the past."}),(0,o.jsx)(e.p,{children:"Specifying a transition block in the past can result in unexpected behavior, such as causing the network to fork."})]}),"\n",(0,o.jsx)(e.h2,{id:"override-smart-contract-validators",children:"Override smart contract validators"}),"\n",(0,o.jsxs)(e.p,{children:["When using ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/qbft#add-and-remove-validators-using-a-smart-contract",children:"QBFT contract validator selection"}),", if network conditions require it, you can bypass the smart contract and specify new validators in the genesis file. For example, you lose quorum for your current list of contract validators, and you can't perform a transaction to vote more in."]}),"\n",(0,o.jsxs)(e.p,{children:["This requires temporarily ",(0,o.jsx)(e.a,{href:"/23.7.1/private-networks/how-to/configure/consensus/qbft#swap-validator-management-methods",children:"switching to block header validator selection mode"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"To bypass the smart contract and specify new validators:"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["In the genesis file, add a ",(0,o.jsx)(e.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<SelectionMode>"})," is the validator selection mode to switch to. In this case we'll switch to the ",(0,o.jsx)(e.code,{children:"blockheader"})," mode temporarily."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<ValidatorAddressX> ... <ValidatorAddressZ>"})," are strings representing the account addresses of the validators after ",(0,o.jsx)(e.code,{children:"<BlockNumber>"}),". These validators only need to be sufficient to progress the chain and allow a new contract to be deployed."]}),"\n"]}),"\n",(0,o.jsx)(e.h1,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validators": [\n          <ValidatorAddressX>,\n          ...\n          <ValidatorAddressZ>\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(e.h1,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n        ]\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Deploy a new contract to the blockchain containing the desired list of validators."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["In the genesis file, add another ",(0,o.jsx)(e.code,{children:"transitions"})," configuration item where:"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<BlockNumber>"})," is the upcoming block at which to change validators."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<SelectionMode>"})," is the validator selection mode to switch to. In this case we'll switch to ",(0,o.jsx)(e.code,{children:"contract"})," mode."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"<NewValidatorContractAddress>"})," is the address of the new smart contract."]}),"\n"]}),"\n",(0,o.jsx)(e.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      \u201cvalidatorcontractaddress\u201d: \u201c0x0000000000000000000000000000000000007777\u201d\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": <BlockNumber>,\n        "validatorselectionmode": <SelectionMode>,\n        "validatorcontractaddress": <NewValidatorContractAddress>\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n",(0,o.jsx)(e.h1,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'{\n  "config": {\n    ...\n    "qbft": {\n      "blockperiodseconds": 2,\n      "epochlength": 30000,\n      "requesttimeoutseconds": 4,\n      "validatorcontractaddress": "0x0000000000000000000000000000000000007777"\n    },\n    "transitions": {\n      "qbft": [\n      {\n        "block": 2555,\n        "validatorselectionmode": "blockheader",\n        "validators": [\n          "0x372a70ace72b02cc7f1757183f98c620254f9c8d",\n          "0x9811ebc35d7b06b3fa8dc5809a1f9c52751e1deb"\n          ]\n        },\n      {\n        "block": 2755,\n        "validatorselectionmode": "contract",\n        "validatorcontractaddress": "0x0000000000000000000000000000000000009999"\n      }\n      ]\n    }\n  },\n  ...\n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Restart all nodes in the network using the updated genesis file. You can make a rolling update of the nodes, as long as they're all up before the transition block is processed."}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>r});var o=t(67294);const s={},i=o.createContext(s);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);