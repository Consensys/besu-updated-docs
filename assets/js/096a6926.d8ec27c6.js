"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18920],{19387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(85893),a=s(11151);const t={title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},i="Private network subcommands",o={id:"private-networks/reference/cli/subcommands",title:"Private network subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-23.4.1/private-networks/reference/cli/subcommands.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/subcommands",permalink:"/23.4.1/private-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/reference/cli/subcommands.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1702970404,formattedLastUpdatedAt:"Dec 19, 2023",sidebarPosition:2,frontMatter:{title:"Private network subcommands",sidebar_position:2,description:"Hyperledger Besu command line interface subcommands",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Private network options",permalink:"/23.4.1/private-networks/reference/cli/options"},next:{title:"Private network API methods",permalink:"/23.4.1/private-networks/reference/api/"}},c={},d=[{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-blockchain-config</code>",id:"generate-blockchain-config",level:3},{value:"<code>rlp</code>",id:"rlp",level:2},{value:"<code>encode</code>",id:"encode",level:3},{value:"IBFT 2.0 extra data",id:"ibft-20-extra-data",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"private-network-subcommands",children:"Private network subcommands"}),"\n",(0,r.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) subcommands."}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This reference contains subcommands that apply to only private networks. For subcommands that apply to both private and public networks, see the ",(0,r.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/subcommands",children:"public network subcommands reference"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,r.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,r.jsx)(n.h2,{id:"operator",children:(0,r.jsx)(n.code,{children:"operator"})}),"\n",(0,r.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,r.jsx)(n.h3,{id:"generate-blockchain-config",children:(0,r.jsx)(n.code,{children:"generate-blockchain-config"})}),"\n",(0,r.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=<FILE> --to=<DIRECTORY> [--genesis-file-name=<FILE>] [--private-key-file-name=<FILE>] [--public-key-file-name=<FILE>]\n"})}),"\n",(0,r.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu operator generate-blockchain-config --config-file=config.json --to=myNetworkFiles\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Generates an ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0"})," or ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT"})," genesis file."]}),"\n",(0,r.jsxs)(n.p,{children:["The configuration file has two nested JSON nodes. The first is the ",(0,r.jsx)(n.code,{children:"genesis"})," property defining the IBFT 2.0 or QBFT genesis file, except for the ",(0,r.jsx)(n.code,{children:"extraData"})," string. The second is the ",(0,r.jsx)(n.code,{children:"blockchain"})," property defining the number of key pairs to generate."]}),"\n",(0,r.jsx)(n.h2,{id:"rlp",children:(0,r.jsx)(n.code,{children:"rlp"})}),"\n",(0,r.jsx)(n.p,{children:"Provides RLP related actions."}),"\n",(0,r.jsx)(n.h3,{id:"encode",children:(0,r.jsx)(n.code,{children:"encode"})}),"\n",(0,r.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu rlp encode [--from=<FILE>] [--to=<FILE>] [--type=<type>]\n"})}),"\n",(0,r.jsx)(n.h1,{id:"file-example",children:"File example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"besu rlp encode --from=ibft_extra_data.json --to=extra_data_for_ibft_genesis.txt --type=IBFT_EXTRA_DATA\n"})}),"\n",(0,r.jsx)(n.h1,{id:"standard-inputoutput-example",children:"Standard input/output example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat extra_data.json | besu rlp encode > rlp.txt\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Encodes the RLP hexadecimal string for use in an ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/ibft#genesis-file",children:"IBFT 2.0"})," or ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/qbft#genesis-file",children:"QBFT"})," genesis file. The default type is ",(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Supported types are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," - The IBFT 2.0 genesis file includes the ",(0,r.jsx)(n.code,{children:"IBFT_EXTRA_DATA"})," type in the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/ibft#extra-data",children:(0,r.jsx)(n.code,{children:"extraData"})})," property."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," - The QBFT genesis file includes the ",(0,r.jsx)(n.code,{children:"QBFT_EXTRA_DATA"})," type in the ",(0,r.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/consensus/qbft#extra-data",children:(0,r.jsx)(n.code,{children:"extraData"})})," property."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ibft-20-extra-data",children:"IBFT 2.0 extra data"}),"\n",(0,r.jsxs)(n.p,{children:["To generate the RLP encoded ",(0,r.jsx)(n.code,{children:"extraData"})," string, specify a JSON input that is an array of validator addresses in ascending order."]}),"\n",(0,r.jsxs)(n.admonition,{title:"JSON Schema for IBFT_EXTRA_DATA",type:"tip",children:[(0,r.jsxs)(n.p,{children:["Use the following JSON Schema to validate that your JSON data is well formed. To validate your JSON content, use an online validation tool, such as ",(0,r.jsx)(n.a,{href:"https://www.jsonschemavalidator.net/",children:"JSON Schema Validator"}),"."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "$schema": "http://json-schema.org/draft-07/schema#",\n  "$id": "http://org.hyperledger.besu/cli_rlp_ibft_extra_data.json",\n  "type": "array",\n  "definitions": {},\n  "title": "IBFT extra data",\n  "description": "JSON format used as input to generate an IBFT extra data RLP string",\n  "items": {\n    "$id": "#/address",\n    "type": "string",\n    "title": "Validator address",\n    "description": "The validator node address",\n    "default": "",\n    "examples": [\n      "be068f726a13c8d46c44be6ce9d275600e1735a4",\n      "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n    ],\n    "pattern": "^([0-9a-f]{40})$"\n  }\n}\n'})}),(0,r.jsx)(n.p,{children:"Example IBFT_EXTRA_DATA encoding"}),(0,r.jsx)(n.h1,{id:"json-input",children:"JSON input"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n  "be068f726a13c8d46c44be6ce9d275600e1735a4",\n  "5ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193"\n]\n'})}),(0,r.jsx)(n.h1,{id:"rlp-output",children:"RLP output"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"0xf853a00000000000000000000000000000000000000000000000000000000000000000ea94be068f726a13c8d46c44be6ce9d275600e1735a4945ff6f4b66a46a2b2310a6f3a93aaddc0d9a1c193808400000000c0\n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var r=s(67294);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);