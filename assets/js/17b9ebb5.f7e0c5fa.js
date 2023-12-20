"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[6365],{94435:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var s=i(85893),r=i(11151);const a={title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},c="Private network command line options",l={id:"private-networks/reference/cli/options",title:"Private network options",description:"Hyperledger Besu private networks CLI reference",source:"@site/versioned_docs/version-23.4.1/private-networks/reference/cli/options.md",sourceDirName:"private-networks/reference/cli",slug:"/private-networks/reference/cli/options",permalink:"/23.4.1/private-networks/reference/cli/options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.1/private-networks/reference/cli/options.md",tags:[{label:"private networks",permalink:"/23.4.1/tags/private-networks"}],version:"23.4.1",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:1,frontMatter:{title:"Private network options",sidebar_position:1,description:"Hyperledger Besu private networks CLI reference",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Reference",permalink:"/23.4.1/private-networks/reference/"},next:{title:"Private network subcommands",permalink:"/23.4.1/private-networks/reference/cli/subcommands"}},o={},d=[{value:"Specify options",id:"specify-options",level:2},{value:"Options",id:"options",level:2},{value:"<code>permissions-accounts-config-file</code>",id:"permissions-accounts-config-file",level:3},{value:"<code>permissions-accounts-config-file-enabled</code>",id:"permissions-accounts-config-file-enabled",level:3},{value:"<code>permissions-accounts-contract-address</code>",id:"permissions-accounts-contract-address",level:3},{value:"<code>permissions-accounts-contract-enabled</code>",id:"permissions-accounts-contract-enabled",level:3},{value:"<code>permissions-nodes-config-file</code>",id:"permissions-nodes-config-file",level:3},{value:"<code>permissions-nodes-config-file-enabled</code>",id:"permissions-nodes-config-file-enabled",level:3},{value:"<code>permissions-nodes-contract-address</code>",id:"permissions-nodes-contract-address",level:3},{value:"<code>permissions-nodes-contract-enabled</code>",id:"permissions-nodes-contract-enabled",level:3},{value:"<code>permissions-nodes-contract-version</code>",id:"permissions-nodes-contract-version",level:3},{value:"<code>privacy-enabled</code>",id:"privacy-enabled",level:3},{value:"<code>privacy-marker-transaction-signing-key-file</code>",id:"privacy-marker-transaction-signing-key-file",level:3},{value:"<code>privacy-multi-tenancy-enabled</code>",id:"privacy-multi-tenancy-enabled",level:3},{value:"<code>privacy-flexible-groups-enabled</code>",id:"privacy-flexible-groups-enabled",level:3},{value:"<code>privacy-public-key-file</code>",id:"privacy-public-key-file",level:3},{value:"<code>privacy-tls-enabled</code>",id:"privacy-tls-enabled",level:3},{value:"<code>privacy-tls-keystore-file</code>",id:"privacy-tls-keystore-file",level:3},{value:"<code>privacy-tls-keystore-password-file</code>",id:"privacy-tls-keystore-password-file",level:3},{value:"<code>privacy-tls-known-enclave-file</code>",id:"privacy-tls-known-enclave-file",level:3},{value:"<code>privacy-url</code>",id:"privacy-url",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"private-network-command-line-options",children:"Private network command line options"}),"\n",(0,s.jsx)(n.p,{children:"This reference describes the syntax of the Hyperledger Besu private network command line interface (CLI) options."}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This reference contains options that apply to only private networks. For options that apply to both private and public networks, see the ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options",children:"public network options reference"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"specify-options",children:"Specify options"}),"\n",(0,s.jsx)(n.p,{children:"You can specify Besu options:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On the command line."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu [OPTIONS] [SUBCOMMAND]\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"As an environment variable. For each command line option, the equivalent environment variable is:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Uppercase."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"_"})," replaces ",(0,s.jsx)(n.code,{children:"-"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Has a ",(0,s.jsx)(n.code,{children:"BESU_"})," prefix."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, set ",(0,s.jsx)(n.code,{children:"--miner-coinbase"})," using the ",(0,s.jsx)(n.code,{children:"BESU_MINER_COINBASE"})," environment variable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In a ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/how-to/configuration-file",children:"configuration file"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you specify an option in more than one place, the order of priority is command line, environment variable, configuration file."}),"\n",(0,s.jsxs)(n.p,{children:["If using Bash or Z shell, you can view option suggestions by entering ",(0,s.jsx)(n.code,{children:"--"})," and pressing the Tab key twice."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"besu --Tab+Tab\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Characters such as smart quotes and long (em) hyphens don't work in Besu command line options. Ensure quotes aren't automatically converted to smart quotes, or double hyphens combined into em hyphens."})}),"\n",(0,s.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,s.jsx)(n.h3,{id:"permissions-accounts-config-file",children:(0,s.jsx)(n.code,{children:"permissions-accounts-config-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file=/home/me/me_configFiles/myPermissionsFile\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'permissions-accounts-config-file="/home/me/me_configFiles/myPermissionsFile"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"accounts permissions configuration file"}),". The default is the ",(0,s.jsx)(n.code,{children:"permissions_config.toml"})," file in the ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#data-path",children:"data directory"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file"})," and ",(0,s.jsx)(n.a,{href:"#permissions-nodes-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-nodes-config-file"})})," can use the same file."]})}),"\n",(0,s.jsx)(n.h3,{id:"permissions-accounts-config-file-enabled",children:(0,s.jsx)(n.code,{children:"permissions-accounts-config-file-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-config-file-enabled=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-1",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONFIG_FILE_ENABLED=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-1",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"permissions-accounts-config-file-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables file-based account level permissions. The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-accounts-contract-address",children:(0,s.jsx)(n.code,{children:"permissions-accounts-contract-address"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-address=<ContractAddress>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-address=xyz\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-2",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ADDRESS=xyz\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-2",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'permissions-accounts-contract-address="xyz"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The contract address for ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/onchain",children:"onchain account permissioning"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-accounts-contract-enabled",children:(0,s.jsx)(n.code,{children:"permissions-accounts-contract-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-3",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-accounts-contract-enabled=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-3",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_ACCOUNTS_CONTRACT_ENABLED=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-3",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"permissions-accounts-contract-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables contract-based ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/onchain",children:"onchain account permissioning"}),". The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-nodes-config-file",children:(0,s.jsx)(n.code,{children:"permissions-nodes-config-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-4",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file=/home/me/me_configFiles/myPermissionsFile\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-4",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONFIG_FILE=/home/me/me_configFiles/myPermissionsFile\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-4",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'permissions-nodes-config-file="/home/me/me_configFiles/myPermissionsFile"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/use-permissioning/local#permissions-configuration-file",children:"nodes permissions configuration file"}),". The default is the ",(0,s.jsx)(n.code,{children:"permissions_config.toml"})," file in the ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#data-path",children:"data directory"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"--permissions-nodes-config-file"})," and ",(0,s.jsx)(n.a,{href:"#permissions-accounts-config-file",children:(0,s.jsx)(n.code,{children:"--permissions-accounts-config-file"})})," can use the same file."]})}),"\n",(0,s.jsx)(n.h3,{id:"permissions-nodes-config-file-enabled",children:(0,s.jsx)(n.code,{children:"permissions-nodes-config-file-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-5",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-config-file-enabled=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-5",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONFIG_FILE_ENABLED=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-5",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-config-file-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables file-based node level permissions. The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-nodes-contract-address",children:(0,s.jsx)(n.code,{children:"permissions-nodes-contract-address"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-6",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-address=<ContractAddress>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-address=xyz\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-6",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_ADDRESS=xyz\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-6",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'permissions-nodes-contract-address="xyz"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The contract address for ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/onchain",children:"onchain node permissioning"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-nodes-contract-enabled",children:(0,s.jsx)(n.code,{children:"permissions-nodes-contract-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-7",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-enabled=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-7",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_ENABLED=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-7",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-contract-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables contract-based ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/onchain",children:"onchain node permissioning"}),". The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"permissions-nodes-contract-version",children:(0,s.jsx)(n.code,{children:"permissions-nodes-contract-version"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-8",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-version=<ContractVersion>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--permissions-nodes-contract-version=2\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-8",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PERMISSIONS_NODES_CONTRACT_VERSION=2\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-8",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"permissions-nodes-contract-version=2\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Version of the EEA ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/use-permissioning/onchain#specify-the-permissioning-contract-interface-version",children:"node permissioning interface"}),". The default is 1."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-enabled",children:(0,s.jsx)(n.code,{children:"privacy-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-9",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-9",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-enabled=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-9",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_ENABLED=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-9",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"privacy-enabled=false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/",children:"private transactions"}),". The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["Using private transactions with ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/concepts/data-storage-formats",children:"pruning"})," or ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#sync-mode",children:"fast sync"})," is not supported."]})}),"\n",(0,s.jsx)(n.h3,{id:"privacy-marker-transaction-signing-key-file",children:(0,s.jsx)(n.code,{children:"privacy-marker-transaction-signing-key-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-10",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-marker-transaction-signing-key-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-10",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-marker-transaction-signing-key-file=/home/me/me_node/myPrivateKey\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-10",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_MARKER_TRANSACTION_SIGNING_KEY_FILE=/home/me/me_node/myPrivateKey\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-10",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-marker-transaction-signing-key-file="/home/me/me_node/myPrivateKey"\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<FILE>"})," is the name of the private key file used to ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/use-privacy/sign-pmts",children:"sign privacy marker transactions"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This can be the same file used by ",(0,s.jsx)(n.a,{href:"/23.4.1/public-networks/reference/cli/options#node-private-key-file",children:(0,s.jsx)(n.code,{children:"--node-private-key-file"})}),", or a different key file to identify who signed the privacy marker transaction."]})}),"\n",(0,s.jsx)(n.p,{children:"You must specify this option if you're using:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a privacy network where you pay gas. Also, the associated account must contain adequate funds."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/permissioning/#account-permissioning",children:"account permissioning"})," and privacy. You must include the corresponding public key in the accounts allowlist."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If you do not specify this option (for example, in a free gas network), Besu signs each transaction with a different randomly generated key."}),"\n",(0,s.jsx)(n.h3,{id:"privacy-multi-tenancy-enabled",children:(0,s.jsx)(n.code,{children:"privacy-multi-tenancy-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-11",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-multi-tenancy-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-11",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-multi-tenancy-enabled=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-11",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_MULTI_TENANCY_ENABLED=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-11",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"privacy-multi-tenancy-enabled=false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," for private transactions. The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-flexible-groups-enabled",children:(0,s.jsx)(n.code,{children:"privacy-flexible-groups-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-12",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-flexible-groups-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-12",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-flexible-groups-enabled=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-12",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_FLEXIBLE_GROUPS_ENABLED=true\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-12",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"privacy-flexible-groups-enabled=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/flexible-privacy",children:"flexible privacy groups"}),". The default is ",(0,s.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Deprecated syntax for this option is ",(0,s.jsx)(n.code,{children:"--privacy-onchain-groups-enabled"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-public-key-file",children:(0,s.jsx)(n.code,{children:"privacy-public-key-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-13",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-public-key-file=<privacyPublicKeyFile>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-13",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-public-key-file=Tessera/nodeKey.pub\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-13",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_PUBLIC_KEY_FILE=Tessera/nodeKey.pub\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-13",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-public-key-file="Tessera/nodeKey.pub"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://docs.tessera.consensys.net/",children:"public key of the Tessera node"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsxs)(n.p,{children:["You cannot specify ",(0,s.jsx)(n.code,{children:"privacy-public-key-file"})," when ",(0,s.jsx)(n.a,{href:"#privacy-multi-tenancy-enabled",children:(0,s.jsx)(n.code,{children:"--privacy-multi-tenancy-enabled"})})," is ",(0,s.jsx)(n.code,{children:"true"})]})}),"\n",(0,s.jsx)(n.h3,{id:"privacy-tls-enabled",children:(0,s.jsx)(n.code,{children:"privacy-tls-enabled"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-14",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-enabled[=<true|false>]\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-14",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-enabled=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-14",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_ENABLED=false\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-14",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"privacy-tls-enabled=false\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Enables or disables ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/concepts/privacy/#private-transaction-manager",children:"TLS on communication with the private transaction manager"}),". The default is false."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-tls-keystore-file",children:(0,s.jsx)(n.code,{children:"privacy-tls-keystore-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-15",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-15",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy--keystore-file=/home/me/me_node/key\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-15",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KEYSTORE_FILE=/home/me/me_node/key\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-15",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-tls-keystore-file="/home/me/me_node/key"\n'})}),"\n",(0,s.jsx)(n.p,{children:"The keystore file (in PKCS #12 format) containing the private key and the certificate presented during authentication."}),"\n",(0,s.jsxs)(n.p,{children:["You must specify ",(0,s.jsx)(n.code,{children:"privacy-tls-keystore-file"})," if ",(0,s.jsx)(n.a,{href:"#privacy-tls-enabled",children:(0,s.jsx)(n.code,{children:"--privacy-tls-enabled"})})," is ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-tls-keystore-password-file",children:(0,s.jsx)(n.code,{children:"privacy-tls-keystore-password-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-16",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-password-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-16",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-keystore-password-file=/home/me/me_node/password\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-16",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KEYSTORE_PASSWORD_FILE=/home/me/me_node/password\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-16",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-tls-keystore-password-file="/home/me/me_node/password"\n'})}),"\n",(0,s.jsx)(n.p,{children:"The path to the file containing the password to decrypt the keystore."}),"\n",(0,s.jsx)(n.h3,{id:"privacy-tls-known-enclave-file",children:(0,s.jsx)(n.code,{children:"privacy-tls-known-enclave-file"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-17",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-known-enclave-file=<FILE>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-17",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-tls-known-enclave-file=/home/me/me_node/knownEnclave\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-17",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_TLS_KNOWN_ENCLAVE_FILE=/home/me/me_node/knownEnclave\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-17",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-tls-known-enclave-file="/home/me/me_node/knownEnclave"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The path to the file containing the hostnames, ports, and SHA256 certificate fingerprints of the ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/how-to/configure/tls/client-and-server#create-the-known-servers-file",children:"authorized privacy enclave"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"privacy-url",children:(0,s.jsx)(n.code,{children:"privacy-url"})}),"\n",(0,s.jsx)(n.h1,{id:"syntax-18",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-url=<privacyUrl>\n"})}),"\n",(0,s.jsx)(n.h1,{id:"example-18",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--privacy-url=http://127.0.0.1:8888\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-variable-18",children:"Environment variable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"BESU_PRIVACY_URL=http://127.0.0.1:8888\n"})}),"\n",(0,s.jsx)(n.h1,{id:"configuration-file-18",children:"Configuration file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'privacy-url="http://127.0.0.1:8888"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The URL on which the ",(0,s.jsx)(n.a,{href:"/23.4.1/private-networks/tutorials/privacy/#3-create-tessera-configuration-files",children:"Tessera node"})," is running."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>c});var s=i(67294);const r={},a=s.createContext(r);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);