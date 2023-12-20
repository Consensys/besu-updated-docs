"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[43300],{58620:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var o=s(85893),i=s(11151);const c={title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},t="Subcommands",r={id:"public-networks/reference/cli/subcommands",title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",source:"@site/versioned_docs/version-23.7.2/public-networks/reference/cli/subcommands.md",sourceDirName:"public-networks/reference/cli",slug:"/public-networks/reference/cli/subcommands",permalink:"/23.7.2/public-networks/reference/cli/subcommands",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/reference/cli/subcommands.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Subcommands",description:"Hyperledger Besu command line interface subcommands",sidebar_position:2,tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Options",permalink:"/23.7.2/public-networks/reference/cli/options"},next:{title:"Besu API",permalink:"/23.7.2/public-networks/reference/api/"}},a={},l=[{value:"<code>blocks</code>",id:"blocks",level:2},{value:"<code>import</code>",id:"import",level:3},{value:"<code>export</code>",id:"export",level:3},{value:"<code>public-key</code>",id:"public-key",level:2},{value:"<code>export</code>",id:"export-1",level:3},{value:"<code>export-address</code>",id:"export-address",level:3},{value:"<code>password</code>",id:"password",level:2},{value:"<code>hash</code>",id:"hash",level:3},{value:"<code>operator</code>",id:"operator",level:2},{value:"<code>generate-log-bloom-cache</code>",id:"generate-log-bloom-cache",level:3},{value:"<code>retesteth</code>",id:"retesteth",level:2},{value:"<code>validate-config</code>",id:"validate-config",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"subcommands",children:"Subcommands"}),"\n",(0,o.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu command line interface (CLI) subcommands."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This reference contains subcommands that apply to both public and private networks. For private-network-specific subcommands, see the ",(0,o.jsx)(n.a,{href:"/23.7.2/private-networks/reference/cli/subcommands",children:"private network subcommands reference"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"To start a Besu node using subcommands, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND] [SUBCOMMAND OPTIONS]\n"})}),"\n",(0,o.jsx)(n.p,{children:"If using Bash or Z shell, you can view subcommand suggestions by pressing the Tab key twice."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu Tab+Tab\n"})}),"\n",(0,o.jsx)(n.h2,{id:"blocks",children:(0,o.jsx)(n.code,{children:"blocks"})}),"\n",(0,o.jsx)(n.p,{children:"Provides blocks related actions."}),"\n",(0,o.jsx)(n.h3,{id:"import",children:(0,o.jsx)(n.code,{children:"import"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu blocks import [--skip-pow-validation-enabled] [--start-block=<LONG>] [--end-block=<LONG>] --from=<block-file>\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu blocks import --skip-pow-validation-enabled --start-block=100 --end-block=300 --from=/home/me/me_project/mainnet-export1.blocks --from=/home/me/me_project/mainnet-export2.blocks\n"})}),"\n",(0,o.jsx)(n.p,{children:"Imports a block or range of blocks from the specified file into the blockchain database."}),"\n",(0,o.jsxs)(n.p,{children:["You can specify the starting index of the block range to import with ",(0,o.jsx)(n.code,{children:"--start-block"}),". If omitted, the default start block is 0 (the beginning of the chain)."]}),"\n",(0,o.jsxs)(n.p,{children:["You can specify the ending index (exclusive) of the block range to import with ",(0,o.jsx)(n.code,{children:"--end-block"}),". If omitted, all blocks after the start block are imported."]}),"\n",(0,o.jsxs)(n.p,{children:["You can specify multiple ",(0,o.jsx)(n.code,{children:"--from"})," arguments. This can be useful when blocks have been exported over time to multiple files. If multiple files are provided they are read in the order specified in the command."]}),"\n",(0,o.jsxs)(n.p,{children:["Including ",(0,o.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," skips validation of the ",(0,o.jsx)(n.code,{children:"mixHash"})," when importing blocks."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"--skip-pow-validation-enabled"})," when performing ",(0,o.jsx)(n.a,{href:"https://github.com/ethereum/hive",children:"Ethereum Foundation hive testing"}),"."]})}),"\n",(0,o.jsx)(n.h3,{id:"export",children:(0,o.jsx)(n.code,{children:"export"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu blocks export [--start-block=<LONG>] [--end-block=<LONG>] --to=<block-file>\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/home/data/ blocks export --start-block=100 --end-block=300 --to=/home/exportblock.bin\n"})}),"\n",(0,o.jsx)(n.p,{children:"Exports a block or range of blocks from storage to a file in RLP format."}),"\n",(0,o.jsxs)(n.p,{children:["If you omit ",(0,o.jsx)(n.code,{children:"--start-block"}),", the default start block is 0 (the beginning of the chain), and if you omit ",(0,o.jsx)(n.code,{children:"--end-block"}),", the default end block is the current chain head."]}),"\n",(0,o.jsxs)(n.p,{children:["If you are not running the command against the default network (Mainnet), specify the ",(0,o.jsx)(n.code,{children:"--network"})," or ",(0,o.jsx)(n.code,{children:"--genesis-file"})," parameter."]}),"\n",(0,o.jsx)(n.h2,{id:"public-key",children:(0,o.jsx)(n.code,{children:"public-key"})}),"\n",(0,o.jsx)(n.p,{children:"Provides node public key related actions."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["To get the public key or address of a node, ensure you use the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,o.jsx)(n.code,{children:"--data-path"})})," or ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#node-private-key-file",children:(0,o.jsx)(n.code,{children:"--node-private-key-file"})})," option with the ",(0,o.jsx)(n.code,{children:"public-key"})," command. Otherwise, a new ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/concepts/node-keys",children:"node key"})," is silently generated when starting Besu."]})}),"\n",(0,o.jsx)(n.h3,{id:"export-1",children:(0,o.jsx)(n.code,{children:"export"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu public-key export [--node-private-key-file=<file>] [--to=<key-file>] [--ec-curve=<ec-curve-name>]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-to-standard-output",children:"Example (to standard output)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-to-file",children:"Example (to file)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/not_precious_pub_key --ec-curve=secp256k1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Outputs the node public key to standard output or to the file specified by ",(0,o.jsx)(n.code,{children:"--to=<key-file>"}),". You can output the public key associated with a specific private key file using the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#node-private-key-file",children:(0,o.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,o.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,o.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,o.jsx)(n.code,{children:"secp256k1"})," or ",(0,o.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"export-address",children:(0,o.jsx)(n.code,{children:"export-address"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-3",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu public-key export-address [--node-private-key-file=<file>] [--to=<address-file>] [--ec-curve=<ec-curve-name>]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-to-standard-output-1",children:"Example (to standard output)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --ec-curve=secp256k1\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-to-file-1",children:"Example (to file)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --data-path=<node data path> public-key export-address --node-private-key-file=/home/me/me_node/myPrivateKey --to=/home/me/me_project/me_node_address --ec-curve=secp256k1\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Outputs the node address to standard output or to the file specified by ",(0,o.jsx)(n.code,{children:"--to=<address-file>"}),". You can output the address associated with a specific private key file using the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#node-private-key-file",children:(0,o.jsx)(n.code,{children:"--node-private-key-file"})})," option. The default elliptic curve used for the key is ",(0,o.jsx)(n.code,{children:"secp256k1"}),". Use the ",(0,o.jsx)(n.code,{children:"--ec-curve"})," option to choose between ",(0,o.jsx)(n.code,{children:"secp256k1"})," or ",(0,o.jsx)(n.code,{children:"secp256r1"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"password",children:(0,o.jsx)(n.code,{children:"password"})}),"\n",(0,o.jsx)(n.p,{children:"Provides password related actions."}),"\n",(0,o.jsx)(n.h3,{id:"hash",children:(0,o.jsx)(n.code,{children:"hash"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-4",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=<my-password>\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-2",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=myPassword123\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Generates the hash of a given password. Include the hash in the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/authenticate#credentials-file",children:"credentials file"})," for JSON-RPC API ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/use-besu-api/authenticate",children:"authentication"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"operator",children:(0,o.jsx)(n.code,{children:"operator"})}),"\n",(0,o.jsx)(n.p,{children:"Provides operator actions."}),"\n",(0,o.jsx)(n.h3,{id:"generate-log-bloom-cache",children:(0,o.jsx)(n.code,{children:"generate-log-bloom-cache"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-5",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu operator generate-log-bloom-cache [--start-block=<BLOCK_NUMBER>] [--end-block=<BLOCK_NUMBER>]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-3",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu --network=goerli --data-path=/project/goerli operator generate-log-bloom-cache --start-block=0 --end-block=100000\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Manually executing ",(0,o.jsx)(n.code,{children:"generate-log-bloom-cache"})," is not required unless you set the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#auto-log-bloom-caching-enabled",children:(0,o.jsx)(n.code,{children:"--auto-log-bloom-caching-enabled"})})," command line option to false."]})}),"\n",(0,o.jsx)(n.p,{children:"Generates cached log bloom indexes for blocks. APIs use the cached indexes for improved log query performance."}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Each index file contains 100000 blocks. The last fragment of blocks less that 100000 are not indexed."})}),"\n",(0,o.jsxs)(n.p,{children:["To generate cached log bloom indexes while the node is running, use the ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/api/#admin_generatelogbloomcache",children:(0,o.jsx)(n.code,{children:"admin_generateLogBloomCache"})})," API."]}),"\n",(0,o.jsx)(n.h2,{id:"retesteth",children:(0,o.jsx)(n.code,{children:"retesteth"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-6",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu retesteth [--data-path=<PATH>] [--rpc-http-host=<HOST>] [--rpc-http-port=<PORT>] [-l=<LOG VERBOSITY LEVEL>] [--host-allowlist=<hostname>[,<hostname>\u2026]\u2026 or * or all]\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-4",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu retesteth --data-path=/home/me/me_node --rpc-http-port=8590 --host-allowlist=*\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Runs a Retesteth-compatible server. ",(0,o.jsx)(n.a,{href:"https://github.com/ethereum/retesteth/wiki",children:"Retesteth"})," is a developer tool that can generate and run consensus tests against any Ethereum client running such a server."]}),"\n",(0,o.jsx)(n.p,{children:"The command accepts the following command line options:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#data-path",children:(0,o.jsx)(n.code,{children:"--data-path"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#host-allowlist",children:(0,o.jsx)(n.code,{children:"--host-allowlist"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-host",children:(0,o.jsx)(n.code,{children:"--rpc-http-host"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-port",children:(0,o.jsx)(n.code,{children:"--rpc-http-port"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#logging",children:(0,o.jsx)(n.code,{children:"--logging"})})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"validate-config",children:(0,o.jsx)(n.code,{children:"validate-config"})}),"\n",(0,o.jsx)(n.h1,{id:"syntax-7",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file <PATH-TO-CONFIG-FILE>\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example-5",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"besu validate-config --config-file ../besu-local-nodes/config/besu/besu1.conf\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Performs basic syntax validation of the specified ",(0,o.jsx)(n.a,{href:"/23.7.2/public-networks/how-to/configuration-file",children:"TOML configuration file"}),". Checks TOML syntax (for example, valid format and unmatched quotes) and flags unknown options. Doesn't check data types, and doesn't check dependencies between options (this is done at Besu startup)."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var o=s(67294);const i={},c=o.createContext(i);function t(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);