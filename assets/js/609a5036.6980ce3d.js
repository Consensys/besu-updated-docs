"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[69032],{11563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=t(85893),s=t(11151);const a={title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},r="Authenticate and authorize JSON-RPC",c={id:"public-networks/how-to/use-besu-api/authenticate",title:"Authenticate over JSON-RPC requests",description:"Hyperledger Besu authentication and authorization for JSON-RPC",source:"@site/versioned_docs/version-23.7.2/public-networks/how-to/use-besu-api/authenticate.md",sourceDirName:"public-networks/how-to/use-besu-api",slug:"/public-networks/how-to/use-besu-api/authenticate",permalink:"/23.7.2/public-networks/how-to/use-besu-api/authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.2/public-networks/how-to/use-besu-api/authenticate.md",tags:[{label:"public networks",permalink:"/23.7.2/tags/public-networks"},{label:"private networks",permalink:"/23.7.2/tags/private-networks"}],version:"23.7.2",lastUpdatedAt:1703037533,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:4,frontMatter:{title:"Authenticate over JSON-RPC requests",sidebar_position:4,description:"Hyperledger Besu authentication and authorization for JSON-RPC",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Use GraphQL over HTTP",permalink:"/23.7.2/public-networks/how-to/use-besu-api/graphql"},next:{title:"Access logs using JSON-RPC",permalink:"/23.7.2/public-networks/how-to/use-besu-api/access-logs"}},o={},l=[{value:"Username and password authentication",id:"username-and-password-authentication",level:2},{value:"1. Create the credentials file",id:"1-create-the-credentials-file",level:3},{value:"2. Enable authentication",id:"2-enable-authentication",level:3},{value:"3. Generate an authentication token",id:"3-generate-an-authentication-token",level:3},{value:"JWT public key authentication",id:"jwt-public-key-authentication",level:2},{value:"1. Generate a private and public key pair",id:"1-generate-a-private-and-public-key-pair",level:3},{value:"2. Create the JWT",id:"2-create-the-jwt",level:3},{value:"3. Enable authentication",id:"3-enable-authentication",level:3},{value:"JSON-RPC permissions",id:"json-rpc-permissions",level:2},{value:"Use an authentication token to make requests",id:"use-an-authentication-token-to-make-requests",level:2},{value:"Postman",id:"postman",level:3},{value:"cURL",id:"curl",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"authenticate-and-authorize-json-rpc",children:"Authenticate and authorize JSON-RPC"}),"\n",(0,i.jsxs)(n.p,{children:["Authentication identifies a user, and authorization verifies user access to requested JSON-RPC methods. Hyperledger Besu verifies users using ",(0,i.jsx)(n.a,{href:"https://jwt.io/introduction/",children:"JSON Web Tokens (JWT)"}),". JWT is also used in ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"})," to verify tenant data access."]}),"\n",(0,i.jsx)(n.p,{children:"Besu supports two mutually exclusive authentication methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#username-and-password-authentication",children:"Username and password"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"JWT public key"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Besu creates JWT internally with ",(0,i.jsx)(n.a,{href:"#username-and-password-authentication",children:"username and password authentication"}),", and externally with ",(0,i.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"JWT public key authentication"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Using JSON-RPC authentication and authorization with ",(0,i.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"})," is not supported."]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"To prevent interception of authentication credentials and authenticated tokens, make authenticated requests over HTTPS. We recommend running production deployments behind a network layer that provides SSL termination. Besu does not provide a HTTPS connection natively."})}),"\n",(0,i.jsx)(n.h2,{id:"username-and-password-authentication",children:"Username and password authentication"}),"\n",(0,i.jsxs)(n.p,{children:["Enable authentication from the command line. Supply the credentials file and send a request to the ",(0,i.jsx)(n.code,{children:"/login"})," endpoint using the username and password. The ",(0,i.jsx)(n.code,{children:"/login"})," endpoint creates a JWT for making permitted JSON-RPC requests."]}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.a,{href:"#jwt-public-key-authentication",children:"public key authentication"})," disables the ",(0,i.jsx)(n.code,{children:"/login"})," endpoint."]}),"\n",(0,i.jsx)(n.h3,{id:"1-create-the-credentials-file",children:"1. Create the credentials file"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"toml"})," credentials file defines user details and the JSON-RPC methods they can access."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["Sample ",(0,i.jsx)(n.code,{children:"auth.toml"})," credentials file"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[Users.username1]\npassword = "$2a$10$l3GA7K8g6rJ/Yv.YFSygCuI9byngpEzxgWS9qEg5emYDZomQW7fGC"\npermissions=["net:*","eth:blockNumber"]\nprivacyPublicKey="U7ANiOOd5L9Z/dMxRFjdbhA1Qragw6fLuYgmgCvLoX4="\n\n[Users.username2]\npassword = "$2b$10$6sHt1J0MVUGIoNKvJiK33uaZzUwNmMmJlaVLkIwinkPiS1UBnAnF2"\npermissions=["net:version","admin:*"]\nprivacyPublicKey="quhb1pQPGN1w8ZSZSyiIfncEAlVY/M/rauSyQ5wVMRE="\n'})})]}),"\n",(0,i.jsx)(n.p,{children:"Each user requiring JSON-RPC access the configuration file lists the:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Username. ",(0,i.jsx)(n.code,{children:"Users."})," is mandatory and followed by the username. That is, replace ",(0,i.jsx)(n.code,{children:"<username>"})," in ",(0,i.jsx)(n.code,{children:"[Users.<username>]"})," with the username."]}),"\n",(0,i.jsxs)(n.li,{children:["Hash of the user password. Use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/subcommands#password",children:(0,i.jsx)(n.code,{children:"password hash"})})," subcommand to generate the hash."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#json-rpc-permissions",children:"JSON-RPC permissions"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Optional. The tenant's Tessera public key using ",(0,i.jsx)(n.code,{children:"privacyPublicKey"}),". Only used for ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"command",children:"Command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"besu password hash --password=MyPassword\n"})}),"\n",(0,i.jsx)(n.h1,{id:"hash-output",children:"Hash output"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"$2a$10$L3Xb5G/AJOsEK5SuOn9uzOhpCCfuVWTajc5hwWerY6N5xBM/xlrMK\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-enable-authentication",children:"2. Enable authentication"}),"\n",(0,i.jsxs)(n.p,{children:["To require authentication for the JSON-RPC API, use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-authentication-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-http-authentication-enabled"})})," or ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-authentication-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-ws-authentication-enabled"})})," options."]}),"\n",(0,i.jsxs)(n.p,{children:["To specify the ",(0,i.jsx)(n.a,{href:"#1-create-the-credentials-file",children:"credentials file"}),", use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-authentication-credentials-file",children:(0,i.jsx)(n.code,{children:"--rpc-http-authentication-credentials-file"})})," and ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-authentication-credentials-file",children:(0,i.jsx)(n.code,{children:"--rpc-ws-authentication-credentials-file"})})," options."]}),"\n",(0,i.jsx)(n.h3,{id:"3-generate-an-authentication-token",children:"3. Generate an authentication token"}),"\n",(0,i.jsxs)(n.p,{children:["To generate an authentication token, make a request to the ",(0,i.jsx)(n.code,{children:"/login"})," endpoint with your username and password. Specify the HTTP port or the WS port to generate a token to authenticate over HTTP or WS respectively. HTTP and WS requires a different token."]}),"\n",(0,i.jsx)(n.h1,{id:"generate-a-token-for-http",children:"Generate a token for HTTP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-http-hostname:http-port>/login\n'})}),"\n",(0,i.jsx)(n.h1,{id:"example-for-http",children:"Example for HTTP"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8545/login\n'})}),"\n",(0,i.jsx)(n.h1,{id:"generate-a-token-for-ws",children:"Generate a token for WS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' <JSON-RPC-ws-hostname:ws-port>/login\n'})}),"\n",(0,i.jsx)(n.h1,{id:"example-for-ws",children:"Example for WS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST --data \'{"username":"username1","password":"MyPassword"}\' http://localhost:8546/login\n'})}),"\n",(0,i.jsx)(n.h1,{id:"json-result",children:"JSON result"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MDYwNCwiZXhwIjoxNTUwNDYwOTA0fQ.l2Ycqzl_AyvReXBeUSayOlOMS_E8-DCuz3q0Db0DKD7mqyl6q-giWoEtfdWzUEvZbRRi2_ecKO3N6JkXq7zMKQAJbVAEzobfbaaXWcQEpHOjtnK4_Yz-UPyKiXtu7HGdcdl5Tfx3dKoksbqkBl3U3vFWxzmFnuu3dAISfVJYUNA"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Authentication tokens expire five minutes after generation. If you require access after the token expires, you need to generate a new token."}),"\n",(0,i.jsx)(n.h2,{id:"jwt-public-key-authentication",children:"JWT public key authentication"}),"\n",(0,i.jsx)(n.p,{children:"Enable authentication from the command line and supply the external JWT provider's public key."}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsxs)(n.p,{children:["JWT public authentication disables the Besu ",(0,i.jsx)(n.code,{children:"/login"})," endpoint, meaning ",(0,i.jsx)(n.a,{href:"#username-and-password-authentication",children:"username and password authentication"})," will not work."]})}),"\n",(0,i.jsx)(n.h3,{id:"1-generate-a-private-and-public-key-pair",children:"1. Generate a private and public key pair"}),"\n",(0,i.jsxs)(n.p,{children:["The private and accompanying public key files must be in ",(0,i.jsx)(n.code,{children:".pem"})," format."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7518#section-3.1",children:"key algorithm"})," can be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["RSA with private key length of at least 2048 bits using algorithm ",(0,i.jsx)(n.code,{children:"RS256"}),", ",(0,i.jsx)(n.code,{children:"RS384"})," or ",(0,i.jsx)(n.code,{children:"RS512"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["ECDSA private key, using ",(0,i.jsx)(n.code,{children:"ES256"})," (",(0,i.jsx)(n.code,{children:"secp256r1"})," or ",(0,i.jsx)(n.code,{children:"secp256k1"}),"), ",(0,i.jsx)(n.code,{children:"ES384"})," or ",(0,i.jsx)(n.code,{children:"ES512"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Besu default is ",(0,i.jsx)(n.code,{children:"RS256"}),"."]}),"\n",(0,i.jsxs)(n.h1,{id:"rs256-rsa-keys",children:[(0,i.jsx)(n.code,{children:"RS256"})," RSA Keys"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generate the private key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -out privateRSAKey.pem 2048\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generate the public key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl rsa -pubout -in privateRSAKey.pem -pubout -out publicRSAKey.pem\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h1,{id:"es256-secp256r1-ecdsa-keys",children:[(0,i.jsx)(n.code,{children:"ES256"})," ",(0,i.jsx)(n.code,{children:"secp256r1"})," ECDSA Keys"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generate the private key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl ecparam -name secp256r1 -genkey -out privateECDSAKey.pem\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Generate the public key:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl ec -in privateECDSAKey.pem -pubout -out publicECDSAKey.pem\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{title:"Private key security",type:"danger",children:[(0,i.jsx)(n.p,{children:"The private key must be kept secret. Never share private keys publicly or on a Web site, even if advertised as secure."}),(0,i.jsxs)(n.p,{children:["Always keep your private keys safe -- ideally using ",(0,i.jsx)(n.a,{href:"https://connect2id.com/products/nimbus-jose-jwt/examples/pkcs11",children:"hardware"})," or ",(0,i.jsx)(n.a,{href:"https://www.vaultproject.io/docs/secrets/identity/identity-token",children:"vault"})," -- and define a strong security policy and ",(0,i.jsx)(n.a,{href:"https://auth0.com/docs/best-practices/token-best-practices",children:"best practices"}),"."]}),(0,i.jsx)(n.p,{children:"Compromised keys can provide attackers access to you nodes RPC-API."})]}),"\n",(0,i.jsx)(n.h3,{id:"2-create-the-jwt",children:"2. Create the JWT"}),"\n",(0,i.jsxs)(n.p,{children:["Create the JWT using a trusted authentication provider",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," or ",(0,i.jsx)(n.a,{href:"https://jwt.io/libraries",children:"library"})," in your own code."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://github.com/NicolasMassart/java-jwt-sample-generation/",children:"Java code sample to generate JWT using Vertx"})," for an example implementation."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["The JWT must use one of the ",(0,i.jsx)(n.code,{children:"RS256"}),", ",(0,i.jsx)(n.code,{children:"RS384"}),", ",(0,i.jsx)(n.code,{children:"RS512"}),", ",(0,i.jsx)(n.code,{children:"ES256"}),", ",(0,i.jsx)(n.code,{children:"ES384"}),", or ",(0,i.jsx)(n.code,{children:"ES512"})," algorithms."]})}),"\n",(0,i.jsx)(n.p,{children:"Each payload for the JWT must contain:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#json-rpc-permissions",children:"JSON-RPC permissions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://tools.ietf.org/html/rfc7519#section-4.1.4",children:[(0,i.jsx)(n.code,{children:"exp"})," (Expiration Time) claim"]})}),"\n",(0,i.jsxs)(n.li,{children:["Optionally, the tenant's Tessera public key using ",(0,i.jsx)(n.code,{children:"privacyPublicKey"}),". Only used for ",(0,i.jsx)(n.a,{href:"/23.7.2/private-networks/concepts/privacy/multi-tenancy",children:"multi-tenancy"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"example-json-payload",children:"Example JSON Payload"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "permissions": ["*:*"],\n  "privacyPublicKey": "2UKH3VJThkOoKskrLFpwoxCnnRARyobV1bEdgseFHTs=",\n  "exp": 1600899999002\n}\n'})}),"\n",(0,i.jsx)(n.h1,{id:"example-jwt-result",children:"Example JWT result"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example result",src:t(9563).Z+"",width:"493",height:"486"})}),"\n",(0,i.jsx)(n.h3,{id:"3-enable-authentication",children:"3. Enable authentication"}),"\n",(0,i.jsxs)(n.p,{children:["To require authentication for the JSON-RPC API, use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-authentication-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-http-authentication-enabled"})})," or ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-authentication-enabled",children:(0,i.jsx)(n.code,{children:"--rpc-ws-authentication-enabled"})})," options."]}),"\n",(0,i.jsxs)(n.p,{children:["To specify the JWT provider's public key file to use with the externally created JWT, use the ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-http-authentication-jwt-public-key-file",children:(0,i.jsx)(n.code,{children:"--rpc-http-authentication-jwt-public-key-file"})})," or ",(0,i.jsx)(n.a,{href:"/23.7.2/public-networks/reference/cli/options#rpc-ws-authentication-jwt-public-key-file",children:(0,i.jsx)(n.code,{children:"--rpc-ws-authentication-jwt-public-key-file"})})," options."]}),"\n",(0,i.jsx)(n.h2,{id:"json-rpc-permissions",children:"JSON-RPC permissions"}),"\n",(0,i.jsx)(n.p,{children:"Each user has a list of permissions strings defining the methods they can access. To give access to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All API methods, specify ",(0,i.jsx)(n.code,{children:'["*:*"]'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["All API methods in an API group, specify ",(0,i.jsx)(n.code,{children:'["<api_group>:*"]'}),". For example, ",(0,i.jsx)(n.code,{children:'["eth:*"]'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Specific API methods, specify ",(0,i.jsx)(n.code,{children:'["<api_group>:<method_name>"]'}),". For example, ",(0,i.jsx)(n.code,{children:'["admin:peers"]'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["With authentication enabled, to explicitly specify a user cannot access any methods, include the user with an empty permissions list (",(0,i.jsx)(n.code,{children:"[]"}),"). Users with an empty permissions list and users not included in the credentials file cannot access any JSON-RPC methods."]}),"\n",(0,i.jsx)(n.h2,{id:"use-an-authentication-token-to-make-requests",children:"Use an authentication token to make requests"}),"\n",(0,i.jsxs)(n.p,{children:["Specify the authentication token as a ",(0,i.jsx)(n.code,{children:"Bearer"})," token in the JSON-RPC request header."]}),"\n",(0,i.jsx)(n.h3,{id:"postman",children:"Postman"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Authorization"})," tab in the ",(0,i.jsx)(n.strong,{children:"TYPE"})," drop-down list, select ",(0,i.jsx)(n.strong,{children:"Bearer Token"})," and specify the token (generated either ",(0,i.jsx)(n.a,{href:"#2-create-the-jwt",children:"externally"})," or by the ",(0,i.jsxs)(n.a,{href:"#3-generate-an-authentication-token",children:[(0,i.jsx)(n.code,{children:"login"})," request"]}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"curl",children:"cURL"}),"\n",(0,i.jsxs)(n.p,{children:["Specify the ",(0,i.jsx)(n.code,{children:"Bearer"})," in the header."]}),"\n",(0,i.jsx)(n.h1,{id:"curl-request-with-authentication-placeholders",children:"cURL Request with authentication placeholders"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H \'Authorization: Bearer <JWT_TOKEN>\' -d \'{"jsonrpc":"2.0","method":"<API_METHOD>","params":[],"id":1}\' <JSON-RPC-http-hostname:port>\n'})}),"\n",(0,i.jsx)(n.h1,{id:"curl-request-with-authentication",children:"cURL Request with authentication"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H \'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJwZXJtaXNzaW9ucyI6WyIqOioiXSwidXNlcm5hbWUiOiJ1c2VyMiIsImlhdCI6MTU1MDQ2MTQxNiwiZXhwIjoxNTUwNDYxNzE2fQ.WQ1mqpqzRLHaoL8gOSEZPvnRs_qf6j__7A3Sg8vf9RKvWdNTww_vRJF1gjcVy-FFh96AchVnQyXVx0aNUz9O0txt8VN3jqABVWbGMfSk2T_CFdSw5aDjuriCsves9BQpP70Vhj-tseaudg-XU5hCokX0tChbAqd9fB2138zYm5M\' -d \'{"jsonrpc":"2.0","method":"net_listening","params":[],"id":1}\' http://localhost:8545\n'})}),"\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["for example ",(0,i.jsx)(n.a,{href:"https://auth0.com/",children:"Auth0"})," or ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/",children:"Keycloak"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9563:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/jwt-49a83901a587794e24b4684fc0a089b2.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var i=t(67294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);