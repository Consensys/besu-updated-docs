"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[5990],{79213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),r=n(11151);const a={title:"Create a multi-tenant network",sidebar_position:2,description:"Configure multi-tenancy",tags:["private networks"]},s="Configure a multi-tenant node",o={id:"private-networks/tutorials/privacy/multi-tenancy",title:"Create a multi-tenant network",description:"Configure multi-tenancy",source:"@site/versioned_docs/version-23.10.0/private-networks/tutorials/privacy/multi-tenancy.md",sourceDirName:"private-networks/tutorials/privacy",slug:"/private-networks/tutorials/privacy/multi-tenancy",permalink:"/23.10.0/private-networks/tutorials/privacy/multi-tenancy",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/private-networks/tutorials/privacy/multi-tenancy.md",tags:[{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1703034571,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Create a multi-tenant network",sidebar_position:2,description:"Configure multi-tenancy",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a privacy enabled network using the Quickstart",permalink:"/23.10.0/private-networks/tutorials/privacy/"},next:{title:"Use the web3js-quorum multi-node example",permalink:"/23.10.0/private-networks/tutorials/privacy/web3js-quorum"}},c={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Generate a private and public key pair",id:"1-generate-a-private-and-public-key-pair",level:2},{value:"2. Generate Tessera keys",id:"2-generate-tessera-keys",level:2},{value:"3. Update the Tessera configuration file",id:"3-update-the-tessera-configuration-file",level:2},{value:"4. Start Tessera",id:"4-start-tessera",level:2},{value:"5. Start Besu Node-1",id:"5-start-besu-node-1",level:2},{value:"6. Generate the tenant JWTs",id:"6-generate-the-tenant-jwts",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configure-a-multi-tenant-node",children:"Configure a multi-tenant node"}),"\n",(0,i.jsxs)(t.p,{children:["You can configure Besu and associated Tessera node in a privacy-enabled network to host ",(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/concepts/privacy/multi-tenancy",children:"multiple tenants"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In this tutorial we'll add tenants to the ",(0,i.jsx)(t.code,{children:"Node-1"})," Besu and Tessera node in a ",(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/tutorials/privacy/",children:"privacy-enabled network"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"IBFT-Network/\n\u251c\u2500\u2500 Node-1\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-2\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u251c\u2500\u2500 Node-3\n\u2502\xa0\xa0 \u251c\u2500\u2500 data\n\u2502   \u251c\u2500\u2500 Tessera\n\u2514\u2500\u2500 Node-4\n    \u251c\u2500\u2500 data\n    \u251c\u2500\u2500 Tessera\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This tutorial uses ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication",children:"JWT public key authentication"})," to create the tenant's JWT, but you can also use ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication",children:"username and password authentication"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/tutorials/privacy/",children:"Privacy-enabled network"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"1-generate-a-private-and-public-key-pair",children:"1. Generate a private and public key pair"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Node-1"})," directory, ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#1-generate-a-private-and-public-key-pair",children:"generate the private and public key pair"}),". The key pair, which must be in ",(0,i.jsx)(t.code,{children:".pem"})," format, belongs to the operator who uses the key pair to authenticate the ",(0,i.jsx)(t.a,{href:"#6-generate-the-tenant-jwts",children:"tenant JWTs"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["This step is not required when using ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication",children:"username and password authentication"})," to create the required JWTs."]})}),"\n",(0,i.jsx)(t.h2,{id:"2-generate-tessera-keys",children:"2. Generate Tessera keys"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Node-1/Tessera"})," directory, ",(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/tutorials/privacy/#2-generate-tessera-keys",children:"generate a public/private key pair for each tenant"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"The instructions creates an unlocked private key, meaning you do not need a password to decrypt the private key file."})}),"\n",(0,i.jsxs)(t.p,{children:["Name the key pair ",(0,i.jsx)(t.code,{children:"nodeKey2"})," and ",(0,i.jsx)(t.code,{children:"nodeKey3"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"3-update-the-tessera-configuration-file",children:"3. Update the Tessera configuration file"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Node-1/Tessera"})," directory, update the ",(0,i.jsx)(t.code,{children:"tessera.conf"})," file by adding the new key pairs:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "mode": "orion",\n  "useWhiteList": false,\n  "jdbc": {\n    "username": "sa",\n    "password": "",\n    "url": "jdbc:h2:./target/h2/tessera1",\n    "autoCreateTables": true\n  },\n  "serverConfigs": [\n    {\n      "app": "ThirdParty",\n      "serverAddress": "http://localhost:9101",\n      "communicationType": "REST"\n    },\n    {\n      "app": "Q2T",\n      "serverAddress": "http://localhost:9102",\n      "communicationType": "REST"\n    },\n    {\n      "app": "P2P",\n      "serverAddress": "http://localhost:9103",\n      "sslConfig": {\n        "tls": "OFF"\n      },\n      "communicationType": "REST"\n    }\n  ],\n  "peer": [\n    {\n      "url": "http://localhost:9203"\n    },\n    {\n      "url": "http://localhost:9303"\n    },\n    {\n      "url": "http://localhost:9403"\n    }\n  ],\n  "keys": {\n    "passwords": [],\n    "keyData": [\n      {\n        "privateKeyPath": "nodeKey.key",\n        "publicKeyPath": "nodeKey.pub"\n      },\n      {\n        "privateKeyPath": "nodeKey2.key",\n        "publicKeyPath": "nodeKey2.pub"\n      },\n      {\n        "privateKeyPath": "nodeKey3.key",\n        "publicKeyPath": "nodeKey3.pub"\n      }\n    ]\n  },\n  "alwaysSendTo": []\n}\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Besu requires ",(0,i.jsxs)(t.a,{href:"https://docs.tessera.consensys.net/HowTo/Configure/Orion-Mode",children:[(0,i.jsx)(t.code,{children:"orion"})," mode"]}),". Add the line ",(0,i.jsx)(t.code,{children:'"mode": "orion",'})," to the Tessera configuration file."]})}),"\n",(0,i.jsx)(t.h2,{id:"4-start-tessera",children:"4. Start Tessera"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/tutorials/privacy/#4-start-the-tessera-nodes",children:"Start the Tessera nodes"})," and specify the configuration file."]}),"\n",(0,i.jsx)(t.h2,{id:"5-start-besu-node-1",children:"5. Start Besu Node-1"}),"\n",(0,i.jsxs)(t.p,{children:["In the ",(0,i.jsx)(t.code,{children:"Node-1"})," directory, start Besu Node-1:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'besu --data-path=data --genesis-file=../genesis.json --rpc-http-authentication-enabled --rpc-http-authentication-jwt-public-key-file=publicKey.pem --rpc-http-enabled --rpc-http-api=ETH,NET,IBFT,EEA,PRIV --host-allowlist="*" --rpc-http-cors-origins="all" --privacy-enabled --privacy-url=http://127.0.0.1:9102 --privacy-multi-tenancy-enabled --min-gas-price=0\n'})}),"\n",(0,i.jsx)(t.p,{children:"The command line specifies privacy options:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-enabled",children:(0,i.jsx)(t.code,{children:"--rpc-http-authentication-enabled"})})," enables authentication for JSON-RPC APIs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file",children:(0,i.jsx)(t.code,{children:"--rpc-http-authentication-jwt-public-key-file"})})," specifies the Operator's ",(0,i.jsx)(t.a,{href:"#1-generate-a-private-and-public-key-pair",children:"public key file"}),". Used to authenticate the ",(0,i.jsx)(t.a,{href:"#6-generate-the-tenant-jwts",children:"tenant JWTs"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/reference/cli/options#privacy-enabled",children:(0,i.jsx)(t.code,{children:"--privacy-enabled"})})," enables privacy."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/reference/cli/options#privacy-url",children:(0,i.jsx)(t.code,{children:"--privacy-url"})})," specifies the ",(0,i.jsx)(t.a,{href:"https://docs.tessera.consensys.net/Reference/TesseraAPI",children:"Quorum to Tessera (Q2T)"})," server address of the Tessera node (",(0,i.jsx)(t.code,{children:"Q2T"})," in ",(0,i.jsx)(t.code,{children:"tessera.conf"}),")."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/reference/cli/options#privacy-multi-tenancy-enabled",children:(0,i.jsx)(t.code,{children:"--privacy-multi-tenancy-enabled"})})," enables multi-tenancy."]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file",children:(0,i.jsx)(t.code,{children:"--rpc-http-authentication-jwt-public-key-file"})})," is only required when using ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#jwt-public-key-authentication",children:"JWT public key authentication"}),". If using ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication",children:"username and password authentication"}),", use ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/reference/cli/options#rpc-http-authentication-credentials-file",children:(0,i.jsx)(t.code,{children:"--rpc-http-authentication-credentials-file"})})," instead."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/private-networks/tutorials/privacy/#6-start-besu-node-2",children:"Start the remaining Besu nodes"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"6-generate-the-tenant-jwts",children:"6. Generate the tenant JWTs"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#2-create-the-jwt",children:"Generate the JWT"})," for each tenant and specify the ",(0,i.jsx)(t.a,{href:"#2-generate-tessera-keys",children:"tenant's Tessera public key"})," in the ",(0,i.jsx)(t.code,{children:"privacyPublicKey"})," field."]}),"\n",(0,i.jsxs)(t.p,{children:["Ensure you apply the appropriate ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#json-rpc-permissions",children:"JSON-RPC API permissions"})," to the token. For example, ensure you enable the ",(0,i.jsx)(t.code,{children:"PRIV"})," and ",(0,i.jsx)(t.code,{children:"EEA"})," APIs for privacy."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This step is not required when using ",(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#username-and-password-authentication",children:"username and password authentication"})," to create the required JWTs."]})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/23.10.0/public-networks/how-to/use-besu-api/authenticate#using-an-authentication-token-to-make-requests",children:"Use the authentication token to make requests"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"*[JWT]: JSON Web Token"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);