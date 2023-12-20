"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[90524],{63309:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=t(85893),i=t(11151);const s={title:"Specify NAT method",sidebar_position:4,description:"Configuring NAT with Hyperledger Besu",tags:["public networks","private networks"]},o="Specify the NAT method",c={id:"public-networks/how-to/connect/specify-nat",title:"Specify NAT method",description:"Configuring NAT with Hyperledger Besu",source:"@site/versioned_docs/version-23.7.3/public-networks/how-to/connect/specify-nat.md",sourceDirName:"public-networks/how-to/connect",slug:"/public-networks/how-to/connect/specify-nat",permalink:"/23.7.3/public-networks/how-to/connect/specify-nat",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/public-networks/how-to/connect/specify-nat.md",tags:[{label:"public networks",permalink:"/23.7.3/tags/public-networks"},{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1703111850,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:4,frontMatter:{title:"Specify NAT method",sidebar_position:4,description:"Configuring NAT with Hyperledger Besu",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Manage peers",permalink:"/23.7.3/public-networks/how-to/connect/manage-peers"},next:{title:"Monitor Besu",permalink:"/23.7.3/public-networks/how-to/monitor/"}},d={},l=[{value:"Auto",id:"auto",level:2},{value:"UPnP",id:"upnp",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Docker",id:"docker",level:2},{value:"None",id:"none",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"specify-the-nat-method",children:"Specify the NAT method"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#nat-method",children:(0,r.jsx)(n.code,{children:"--nat-method"})})," option to specify the NAT method. Options are: ",(0,r.jsx)(n.a,{href:"#upnp",children:(0,r.jsx)(n.code,{children:"UPNP"})}),", ",(0,r.jsx)(n.a,{href:"#kubernetes",children:(0,r.jsx)(n.code,{children:"KUBERNETES"})}),", ",(0,r.jsx)(n.a,{href:"#docker",children:(0,r.jsx)(n.code,{children:"DOCKER"})}),", ",(0,r.jsx)(n.a,{href:"#auto",children:(0,r.jsx)(n.code,{children:"AUTO"})}),", and ",(0,r.jsx)(n.a,{href:"#none",children:(0,r.jsx)(n.code,{children:"NONE"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/concepts/node-keys#enode-url",children:"enode"})," advertised to other nodes during discovery is the external IP address and port. The ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#admin_nodeinfo",children:(0,r.jsx)(n.code,{children:"admin_nodeInfo"})})," JSON-RPC API method returns the external address and port for the ",(0,r.jsx)(n.code,{children:"enode"})," and ",(0,r.jsx)(n.code,{children:"listenAddr"})," properties."]}),"\n",(0,r.jsx)(n.p,{children:"While Hyperledger Besu is running, the following are not supported:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"IP address changes"}),"\n",(0,r.jsxs)(n.li,{children:["Changing NAT methods. To change the NAT method, restart the node with the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#nat-method",children:(0,r.jsx)(n.code,{children:"--nat-method"})})," option set."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"auto",children:"Auto"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AUTO"})," detects if Besu is running inside a Kubernetes cluster or a Docker container."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If Besu is running in a Kubernetes cluster, ",(0,r.jsx)(n.code,{children:"AUTO"})," sets to ",(0,r.jsx)(n.a,{href:"#kubernetes",children:(0,r.jsx)(n.code,{children:"KUBERNETES"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If Besu is running in a Docker container, ",(0,r.jsx)(n.code,{children:"AUTO"})," sets to ",(0,r.jsx)(n.a,{href:"#docker",children:(0,r.jsx)(n.code,{children:"DOCKER"})}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If Besu is not running in Kubernetes or Docker container, ",(0,r.jsx)(n.code,{children:"AUTO"})," sets to ",(0,r.jsx)(n.a,{href:"#none",children:(0,r.jsx)(n.code,{children:"NONE"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AUTO"})," is the default NAT method."]}),"\n",(0,r.jsx)(n.p,{children:"The following log shows an automatic detection failure."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-log",metastring:'title="The following log shows an automatic detection failure"',children:"INFO  | KubernetesNatManager | Starting kubernetes NAT manager.\nDEBUG | KubernetesNatManager | Trying to update information using Kubernetes client SDK.\nDEBUG | NatService | Nat manager failed to configure itself automatically due to the following reason Service not found. NONE mode will be used\nINFO  | NetworkRunner | Starting Network.\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If automatic detection fails, set the IP and ports in ",(0,r.jsx)(n.a,{href:"#none",children:(0,r.jsx)(n.code,{children:"NONE"})})," mode."]})}),"\n",(0,r.jsx)(n.h2,{id:"upnp",children:"UPnP"}),"\n",(0,r.jsxs)(n.p,{children:["Specify ",(0,r.jsx)(n.code,{children:"UPNP"})," to quickly allow inbound peer connections without manual router configuration. Use UPnP in home or small office environments where a wireless router or modem provides NAT isolation."]}),"\n",(0,r.jsx)(n.p,{children:"UPnP automatically detects if a node is running in a UPnP environment and provides port forwarding. UPnP might introduce delays during node startup, especially on networks without a UPnP gateway device."}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"UPNPP2PONLY"})," if you wish to enable UPnP only for p2p traffic."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"UPnP support is often disabled by default in networking firmware. If disabled by default, you must explicitly enable UPnP support."})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["When the NAT method is set to ",(0,r.jsx)(n.code,{children:"UPNP"}),", the advertised port is the same as the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-port",children:"listening port"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,r.jsxs)(n.p,{children:["Specify ",(0,r.jsx)(n.code,{children:"KUBERNETES"})," to explicitly specify Hyperledger Besu is running inside a Kubernetes cluster. Besu automatically detects if it's running inside of a Kubernetes cluster and interacts with Kubernetes APIs as required to determine external IP addresses and exposed ports."]}),"\n",(0,r.jsx)(n.p,{children:"In Kubernetes, the Ingress IP of the load balancer will be used as the external IP for Besu. A load balancer service can map any incoming port to a target port. These mapping rules will be the one retrieved by Besu."}),"\n",(0,r.jsxs)(n.p,{children:["A tutorial to ",(0,r.jsx)(n.a,{href:"/23.7.3/private-networks/tutorials/kubernetes/nat-manager",children:"Configure the Nat Manager for Kubernetes"})," is available."]}),"\n",(0,r.jsx)(n.h2,{id:"docker",children:"Docker"}),"\n",(0,r.jsxs)(n.p,{children:["Specify ",(0,r.jsx)(n.code,{children:"DOCKER"})," to explicitly specify Hyperledger Besu is running inside a Docker container. If you specify ",(0,r.jsx)(n.code,{children:"DOCKER"}),", you advertise the host IP address not the container IP address."]}),"\n",(0,r.jsxs)(n.p,{children:["The host IP address is the advertised host specified in the ",(0,r.jsxs)(n.a,{href:"https://docs.docker.com/engine/reference/commandline/run/#add-entries-to-container-hosts-file---add-host",children:[(0,r.jsx)(n.code,{children:"docker run"})," command"]}),". If not specified in the ",(0,r.jsx)(n.code,{children:"docker run"})," command, the advertised host defaults to the values for ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-host",children:(0,r.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"none",children:"None"}),"\n",(0,r.jsxs)(n.p,{children:["Specify ",(0,r.jsx)(n.code,{children:"NONE"})," to explicitly configure the external IP address and ports advertised using:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-host",children:(0,r.jsx)(n.code,{children:"--p2p-host"})})," and ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-port",children:(0,r.jsx)(n.code,{children:"--p2p-port"})})," for the P2P service."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-host",children:(0,r.jsx)(n.code,{children:"--rpc-http-host"})})," and ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#rpc-http-port",children:(0,r.jsx)(n.code,{children:"--rpc-http-port"})})," for the JSON-RPC HTTP service."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The P2P and JSON-RPC HTTP hosts and ports are advertised in the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/api/#net_services",children:(0,r.jsx)(n.code,{children:"net_services"})})," method."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["When the NAT method is set to ",(0,r.jsx)(n.code,{children:"NONE"}),", the advertised port is the same as the ",(0,r.jsx)(n.a,{href:"/23.7.3/public-networks/reference/cli/options#p2p-port",children:"listening port"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var r=t(67294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);