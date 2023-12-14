"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[18475],{52750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(85893),o=n(11151);const i={title:"Use Truffle",sidebar_position:1,description:"Using Hyperledger Besu with Truffle",tags:["public networks","private networks"]},l="Use Truffle",s={id:"public-networks/how-to/develop/truffle",title:"Use Truffle",description:"Using Hyperledger Besu with Truffle",source:"@site/versioned_docs/version-23.7.1/public-networks/how-to/develop/truffle.md",sourceDirName:"public-networks/how-to/develop",slug:"/public-networks/how-to/develop/truffle",permalink:"/23.7.1/public-networks/how-to/develop/truffle",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.1/public-networks/how-to/develop/truffle.md",tags:[{label:"public networks",permalink:"/23.7.1/tags/public-networks"},{label:"private networks",permalink:"/23.7.1/tags/private-networks"}],version:"23.7.1",lastUpdatedAt:1702597614,formattedLastUpdatedAt:"Dec 14, 2023",sidebarPosition:1,frontMatter:{title:"Use Truffle",sidebar_position:1,description:"Using Hyperledger Besu with Truffle",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use Java Flight Recorder",permalink:"/23.7.1/public-networks/how-to/configure-jvm/java-flight-recorder"},next:{title:"Use client libraries",permalink:"/23.7.1/public-networks/how-to/develop/client-libraries"}},a={},u=[{value:"Install a Truffle wallet",id:"install-a-truffle-wallet",level:2},{value:"Update the Truffle configuration file",id:"update-the-truffle-configuration-file",level:3},{value:"Start a Besu node",id:"start-a-besu-node",level:3},{value:"Deploy a contract",id:"deploy-a-contract",level:3}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"use-truffle",children:"Use Truffle"}),"\n",(0,r.jsx)(t.p,{children:"Developing for Hyperledger Besu using Truffle is the same as developing for public Ethereum networks using Truffle. Truffle supports Besu with the only difference being Besu does not support private key management. To use Besu with Truffle, you must configure a Truffle wallet."}),"\n",(0,r.jsx)(t.h2,{id:"install-a-truffle-wallet",children:"Install a Truffle wallet"}),"\n",(0,r.jsx)(t.p,{children:"To install a Truffle wallet:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @truffle/hdwallet-provider\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"With Truffle 5, you must use a Web3 1.0 enabled wallet or the Truffle tasks hang."})}),"\n",(0,r.jsx)(t.h3,{id:"update-the-truffle-configuration-file",children:"Update the Truffle configuration file"}),"\n",(0,r.jsxs)(t.p,{children:["To add the wallet provider, update the ",(0,r.jsx)(t.code,{children:"truffle-config.js"})," file in the project directory. Replace:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<JSON-RPC-http-endpoint>"})," with the JSON-RPC endpoint (IP address and port) of a Besu node."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"<account-private-key>"})," with the private key of an Ethereum account containing Ether."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'const PrivateKeyProvider = require("@truffle/hdwallet-provider");\nconst privateKey = "<account-private-key>";\nconst privateKeyProvider = new PrivateKeyProvider(\n  privateKey,\n  "<JSON-RPC-http-endpoint>",\n);\n\nmodule.exports = {\n  // See <http://truffleframework.com/docs/advanced/configuration>\n  // for more about customizing your Truffle configuration!\n  networks: {\n    besuWallet: {\n      provider: privateKeyProvider,\n      network_id: "*",\n    },\n  },\n};\n'})}),"\n",(0,r.jsx)(t.h3,{id:"start-a-besu-node",children:"Start a Besu node"}),"\n",(0,r.jsx)(t.p,{children:"Start a Besu node with JSON-RPC enabled on the endpoint specified in the Truffle configuration file."}),"\n",(0,r.jsx)(t.h3,{id:"deploy-a-contract",children:"Deploy a contract"}),"\n",(0,r.jsx)(t.p,{children:"To deploy a contract onto the Besu network:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"truffle migrate --network besuWallet\n"})})]})}function c(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var r=n(67294);const o={},i=r.createContext(o);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);