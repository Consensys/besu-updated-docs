"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[82254],{2643:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>a});var r=n(85893),o=n(11151);const s={title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7},c="Block proposal permissioning",t={id:"private-networks/how-to/configure/block-proposal-permissioning",title:"Block proposal permissioning",description:"Block proposal permissioning",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/configure/block-proposal-permissioning.md",sourceDirName:"private-networks/how-to/configure",slug:"/private-networks/how-to/configure/block-proposal-permissioning",permalink:"/23.4.0/private-networks/how-to/configure/block-proposal-permissioning",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/configure/block-proposal-permissioning.md",tags:[],version:"23.4.0",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:7,frontMatter:{title:"Block proposal permissioning",description:"Block proposal permissioning",sidebar_position:7},sidebar:"privateDocSidebar",previous:{title:"Peer-to-peer TLS",permalink:"/23.4.0/private-networks/how-to/configure/tls/p2p"},next:{title:"Alternative elliptic curves",permalink:"/23.4.0/private-networks/how-to/configure/curves"}},l={},a=[{value:"Configure block proposal permissioning",id:"configure-block-proposal-permissioning",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xpki-block-creation-crl-file</code>",id:"xpki-block-creation-crl-file",level:3},{value:"<code>Xpki-block-creation-enabled</code>",id:"xpki-block-creation-enabled",level:3},{value:"<code>Xpki-block-creation-keystore-certificate-alias</code>",id:"xpki-block-creation-keystore-certificate-alias",level:3},{value:"<code>Xpki-block-creation-keystore-file</code>",id:"xpki-block-creation-keystore-file",level:3},{value:"<code>Xpki-block-creation-keystore-password-file</code>",id:"xpki-block-creation-keystore-password-file",level:3},{value:"<code>Xpki-block-creation-keystore-type</code>",id:"xpki-block-creation-keystore-type",level:3},{value:"<code>Xpki-block-creation-truststore-file</code>",id:"xpki-block-creation-truststore-file",level:3},{value:"<code>Xpki-block-creation-truststore-password-file</code>",id:"xpki-block-creation-truststore-password-file",level:3},{value:"<code>Xpki-block-creation-truststore-type</code>",id:"xpki-block-creation-truststore-type",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"block-proposal-permissioning",children:"Block proposal permissioning"}),"\n",(0,r.jsxs)(i.admonition,{type:"info",children:[(0,r.jsxs)(i.p,{children:["Only private networks using the ",(0,r.jsx)(i.a,{href:"/23.4.0/private-networks/how-to/configure/consensus/qbft",children:"QBFT consensus protocol"})," support block proposal permissioning."]}),(0,r.jsx)(i.p,{children:"Block proposal permissioning is an early access feature, and functionality and options may be updated between releases."})]}),"\n",(0,r.jsxs)(i.p,{children:["You can configure ",(0,r.jsx)(i.a,{href:"/23.4.0/private-networks/concepts/pki#block-proposal-permissioning",children:"block proposal permissioning"})," to ensure only authorized validator nodes can propose blocks in the network."]}),"\n",(0,r.jsx)(i.p,{children:"Use certificates issued by a trusted authority to ensure validators are authorized to propose blocks."}),"\n",(0,r.jsx)(i.h2,{id:"configure-block-proposal-permissioning",children:"Configure block proposal permissioning"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Prerequisites"}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["A configured network. For example, ",(0,r.jsx)(i.a,{href:"/23.4.0/private-networks/tutorials/qbft",children:"see steps 1 to 5 in the QBFT tutorial"}),"."]}),"\n",(0,r.jsx)(i.li,{children:"A keystore containing the certificate and key for each network node."}),"\n",(0,r.jsx)(i.li,{children:"A truststore containing all the trusted certificates for the network."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Start Besu and include the following command line options on the required nodes:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:'besu --Xpki-block-creation-enabled=true \\\n--Xpki-block-creation-keystore-type="pkcs12" \\\n--Xpki-block-creation-keystore-file="keystore" \\\n--Xpki-block-creation-keystore-password-file="keystore.password" \\\n--Xpki-block-creation-crl-file="crl2.pem" \\\n--Xpki-block-creation-keystore-certificate-alias="validator" \\\n--Xpki-block-creation-truststore-type="pkcs12" \\\n--Xpki-block-creation-truststore-file="truststore" \\\n--Xpki-block-creation-truststore-password-file="truststore.password"\n'})}),"\n",(0,r.jsx)(i.p,{children:"In the command line:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Enable block proposal permissioning using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-enabled",children:(0,r.jsx)(i.code,{children:"--Xpki-block-creation-enabled=true"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the keystore type and keystore file using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-keystore-type",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-type"})})," and ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-keystore-file",children:(0,r.jsx)(i.code,{children:"--Xpki-block-creation-keystore-file"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the text file containing the password to unlock the keystore file using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-keystore-password-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-password-file"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the optional ",(0,r.jsx)(i.a,{href:"https://www.securew2.com/blog/certificate-revocation-crl-explained",children:"certificate revocation list (CRL)"})," file using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-crl-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-crl-file"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the alias of the certificate to be included in blocks proposed by this validator using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-keystore-certificate-alias",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-certificate-alias"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the truststore type and truststore file using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-truststore-type",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-type"})})," and ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-truststore-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-file"})}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Specify the text file containing the password to unlock the truststore file using ",(0,r.jsx)(i.a,{href:"#xpki-block-creation-truststore-password-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-password-file"})}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"command-line-options",children:"Command line options"}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-crl-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-crl-file"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-crl-file=<FILE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-crl-file=/home/cert/cert.crl.pem\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_CRL_FILE=/home/cert/cert.crl.pem\n"})}),"\n",(0,r.jsx)(i.p,{children:"Path to the optional certificate revocation list (CRL) file."}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-enabled",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-enabled"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-enabled[=<true|false>]\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-1",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-enabled=true\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-1",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_ENABLED=true\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Enable PKI integration. The default is ",(0,r.jsx)(i.code,{children:"false"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-keystore-certificate-alias",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-certificate-alias"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-certificate-alias=<NAME>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-2",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-certificate-alias=validatorA\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-2",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_CERTIFICATE_ALIAS=validatorA\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Alias of the certificate to be included in the blocks proposed by this validator. The default is ",(0,r.jsx)(i.code,{children:"validator"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-keystore-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-file"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-3",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-file=<FILE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-3",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-file=/home/cert/keystore.jks\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-3",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_FILE=/home/cert/keystore.jks\n"})}),"\n",(0,r.jsx)(i.p,{children:"Keystore file containing the key and certificate for PKI block creation."}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-keystore-password-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-password-file"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-4",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-password-file=<FILE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-4",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-password-file=/home/cert/password.txt\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-4",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_PASSWORD-FILE=/home/cert/password.txt\n"})}),"\n",(0,r.jsx)(i.p,{children:"Text file containing the password to unlock the keystore file."}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-keystore-type",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-keystore-type"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-5",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-type=<TYPE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-5",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-keystore-type=JKS\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-5",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_KEYSTORE_TYPE=JKS\n"})}),"\n",(0,r.jsxs)(i.p,{children:["PKI keystore type. Valid options are ",(0,r.jsx)(i.code,{children:"JKS"})," and ",(0,r.jsx)(i.code,{children:"PKCS12"}),". The default is ",(0,r.jsx)(i.code,{children:"JKS"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-truststore-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-file"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-6",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-file=<FILE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-6",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-file=/home/cert/truststore.jks\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-6",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_FILE=/home/cert/truststore.jks\n"})}),"\n",(0,r.jsx)(i.p,{children:"Truststore containing the trusted certificates for PKI block creation."}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-truststore-password-file",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-password-file"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-7",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-password-file=<FILE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-7",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-password-file=/home/cert/password.txt\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-7",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})}),"\n",(0,r.jsx)(i.p,{children:"Text file containing the password to unlock the truststore file."}),"\n",(0,r.jsx)(i.h3,{id:"xpki-block-creation-truststore-type",children:(0,r.jsx)(i.code,{children:"Xpki-block-creation-truststore-type"})}),"\n",(0,r.jsx)(i.h1,{id:"syntax-8",children:"Syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-type=<TYPE>\n"})}),"\n",(0,r.jsx)(i.h1,{id:"example-8",children:"Example"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"--Xpki-block-creation-truststore-type=JKS\n"})}),"\n",(0,r.jsx)(i.h1,{id:"environment-variable-8",children:"Environment variable"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"BESU_XPKI_BLOCK_CREATION_TRUSTSTORE_TYPE=JKS\n"})}),"\n",(0,r.jsxs)(i.p,{children:["PKI truststore type. Valid options are ",(0,r.jsx)(i.code,{children:"JKS"})," and ",(0,r.jsx)(i.code,{children:"PKCS12"}),". The default is ",(0,r.jsx)(i.code,{children:"JKS"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>c});var r=n(67294);const o={},s=r.createContext(o);function c(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);