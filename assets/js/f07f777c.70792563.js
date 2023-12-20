"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[62836],{65512:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var t=n(85893),r=n(11151);const l={title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication"},i="Configure P2P TLS",o={id:"private-networks/how-to/configure/tls/p2p",title:"Peer-to-peer TLS",description:"Configure P2P TLS communication",source:"@site/versioned_docs/version-23.4.0/private-networks/how-to/configure/tls/p2p.md",sourceDirName:"private-networks/how-to/configure/tls",slug:"/private-networks/how-to/configure/tls/p2p",permalink:"/23.4.0/private-networks/how-to/configure/tls/p2p",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/private-networks/how-to/configure/tls/p2p.md",tags:[],version:"23.4.0",lastUpdatedAt:1703035528,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:2,frontMatter:{title:"Peer-to-peer TLS",sidebar_position:2,description:"Configure P2P TLS communication"},sidebar:"privateDocSidebar",previous:{title:"Client and server TLS",permalink:"/23.4.0/private-networks/how-to/configure/tls/client-and-server"},next:{title:"Block proposal permissioning",permalink:"/23.4.0/private-networks/how-to/configure/block-proposal-permissioning"}},c={},a=[{value:"Configure P2P TLS",id:"configure-p2p-tls-1",level:2},{value:"Command line options",id:"command-line-options",level:2},{value:"<code>Xp2p-tls-crl-file</code>",id:"xp2p-tls-crl-file",level:3},{value:"<code>Xp2p-tls-enabled</code>",id:"xp2p-tls-enabled",level:3},{value:"<code>Xp2p-tls-keystore-file</code>",id:"xp2p-tls-keystore-file",level:3},{value:"<code>Xp2p-tls-keystore-password-file</code>",id:"xp2p-tls-keystore-password-file",level:3},{value:"<code>Xp2p-tls-keystore-type</code>",id:"xp2p-tls-keystore-type",level:3},{value:"<code>Xp2p-tls-truststore-file</code>",id:"xp2p-tls-truststore-file",level:3},{value:"<code>Xp2p-tls-truststore-password-file</code>",id:"xp2p-tls-truststore-password-file",level:3},{value:"<code>Xp2p-tls-truststore-type</code>",id:"xp2p-tls-truststore-type",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"configure-p2p-tls",children:"Configure P2P TLS"}),"\n",(0,t.jsx)(s.p,{children:"You can configure TLS to secure the P2P communication between nodes by ensuring only authorized nodes can communicate with each other. Use certificates issued by a trusted authority to connect authorized nodes in the network."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"P2P TLS is an early access feature, and functionality and options may be updated between releases."})}),"\n",(0,t.jsx)(s.p,{children:"Besu supports PKCS11, PKCS12, and JKS keystore and truststore types for P2P TLS."}),"\n",(0,t.jsx)(s.h2,{id:"configure-p2p-tls-1",children:"Configure P2P TLS"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Prerequisites"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A configured network. For example, ",(0,t.jsx)(s.a,{href:"/23.4.0/private-networks/tutorials/qbft",children:"see steps 1 to 5 in the QBFT tutorial"}),"."]}),"\n",(0,t.jsx)(s.li,{children:"Each node requires a keystore that contains the node's certificate and key."}),"\n",(0,t.jsx)(s.li,{children:"A truststore containing all the trusted certificates for the network."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Start Besu and include the following command line options on the required nodes:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'besu --Xp2p-tls-enabled=true \\\n--Xp2p-tls-keystore-type="PKCS12" \\\n--Xp2p-tls-keystore-file="keystore" \\\n--Xp2p-tls-keystore-password-file="keystore.password" \\\n--Xp2p-tls-crl-file="crl2.pem" \\\n--Xp2p-tls-truststore-type="JKS" \\\n--Xp2p-tls-truststore-file="truststore.jks" \\\n--Xp2p-tls-truststore-password-file="truststore_password.txt"\n'})}),"\n",(0,t.jsx)(s.p,{children:"In the command line:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Enable TLS for P2P communication using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-enabled",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-enabled=true"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the keystore type and keystore file using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-keystore-type",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-keystore-type"})})," and ",(0,t.jsx)(s.a,{href:"#xp2p-tls-keystore-file",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-keystore-file"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the text file containing the password to unlock the keystore file using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-keystore-password-file",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-keystore-password-file"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the optional ",(0,t.jsx)(s.a,{href:"https://www.securew2.com/blog/certificate-revocation-crl-explained",children:"certificate revocation list (CRL)"})," file using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-crl-file",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-crl-file"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the truststore type and truststore file using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-truststore-type",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-truststore-type"})})," and ",(0,t.jsx)(s.a,{href:"#xp2p-tls-truststore-file",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-truststore-file"})}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Specify the text file containing the password to unlock the truststore file using ",(0,t.jsx)(s.a,{href:"#xp2p-tls-keystore-password-file",children:(0,t.jsx)(s.code,{children:"--Xp2p-tls-truststore-password-file"})}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"command-line-options",children:"Command line options"}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-crl-file",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-crl-file"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-crl-file=<FILE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-crl-file=/home/cert/cert.crl.pem\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_CRL_FILE=/home/cert/cert.crl.pem\n"})}),"\n",(0,t.jsx)(s.p,{children:"Path to the optional certificate revocation list (CRL) file."}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-enabled",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-enabled"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-enabled[=<true|false>]\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-enabled=true\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-1",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_ENABLED=true\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Enable TLS for P2P communication. The default is ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-keystore-file",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-keystore-file"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-2",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-file=<FILE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-2",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-file=/home/cert/keystore.jks\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-2",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_FILE=/home/cert/keystore.jks\n"})}),"\n",(0,t.jsx)(s.p,{children:"Keystore file containing the key and certificate to allow TLS for P2P communication."}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-keystore-password-file",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-keystore-password-file"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-3",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-password-file=<FILE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-3",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-password-file=/home/cert/password.txt\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-3",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})}),"\n",(0,t.jsx)(s.p,{children:"Text file containing the password to unlock the keystore file."}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-keystore-type",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-keystore-type"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-4",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-type=<TYPE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-4",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-keystore-type=JKS\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-4",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_KEYSTORE_TYPE=JKS\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Keystore type that allows TLS for P2P communication. Valid options are ",(0,t.jsx)(s.code,{children:"JKS"}),", ",(0,t.jsx)(s.code,{children:"PKCS11"}),", and ",(0,t.jsx)(s.code,{children:"PKCS12"}),". The default is ",(0,t.jsx)(s.code,{children:"JKS"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-truststore-file",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-truststore-file"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-5",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-file=<FILE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-5",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-file=/home/cert/truststore.jks\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-5",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_FILE=/home/cert/truststore.jks\n"})}),"\n",(0,t.jsx)(s.p,{children:"Truststore containing the trusted certificates that allows TLS for P2P communication."}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-truststore-password-file",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-truststore-password-file"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-6",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-password-file=<FILE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-6",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-password-file=/home/cert/password.txt\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-6",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_PASSWORD_FILE=/home/cert/password.txt\n"})}),"\n",(0,t.jsx)(s.p,{children:"Text file containing the password to unlock the truststore file."}),"\n",(0,t.jsx)(s.h3,{id:"xp2p-tls-truststore-type",children:(0,t.jsx)(s.code,{children:"Xp2p-tls-truststore-type"})}),"\n",(0,t.jsx)(s.h1,{id:"syntax-7",children:"Syntax"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-type=<TYPE>\n"})}),"\n",(0,t.jsx)(s.h1,{id:"example-7",children:"Example"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"--Xp2p-tls-truststore-type=JKS\n"})}),"\n",(0,t.jsx)(s.h1,{id:"environment-variable-7",children:"Environment variable"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"BESU_XP2P_TLS_TRUSTSTORE_TYPE=JKS\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Truststore type. Valid options are ",(0,t.jsx)(s.code,{children:"JKS"}),", ",(0,t.jsx)(s.code,{children:"PKCS11"}),", and ",(0,t.jsx)(s.code,{children:"PKCS12"}),". The default is ",(0,t.jsx)(s.code,{children:"JKS"}),"."]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var t=n(67294);const r={},l=t.createContext(r);function i(e){const s=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);