"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[12428],{85784:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=n(85893),o=n(11151);const a={title:"Deploying Charts",sidebar_position:3,description:"Deploying Besu Helm Charts for a Kubernetes cluster",tags:["private networks"]},r="Deploy charts",i={id:"private-networks/tutorials/kubernetes/charts",title:"Deploying Charts",description:"Deploying Besu Helm Charts for a Kubernetes cluster",source:"@site/versioned_docs/version-23.10.1/private-networks/tutorials/kubernetes/charts.md",sourceDirName:"private-networks/tutorials/kubernetes",slug:"/private-networks/tutorials/kubernetes/charts",permalink:"/23.10.1/private-networks/tutorials/kubernetes/charts",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.1/private-networks/tutorials/kubernetes/charts.md",tags:[{label:"private networks",permalink:"/23.10.1/tags/private-networks"}],version:"23.10.1",lastUpdatedAt:1702970404,formattedLastUpdatedAt:"Dec 19, 2023",sidebarPosition:3,frontMatter:{title:"Deploying Charts",sidebar_position:3,description:"Deploying Besu Helm Charts for a Kubernetes cluster",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Create a cluster",permalink:"/23.10.1/private-networks/tutorials/kubernetes/cluster"},next:{title:"Using the Quorum Explorer",permalink:"/23.10.1/private-networks/tutorials/kubernetes/quorum-explorer"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Provision with Helm charts",id:"provision-with-helm-charts",level:2},{value:"1. Check that you can connect to the cluster with <code>kubectl</code>",id:"1-check-that-you-can-connect-to-the-cluster-with-kubectl",level:3},{value:"2. Create the namespace",id:"2-create-the-namespace",level:3},{value:"3. Deploy the monitoring chart",id:"3-deploy-the-monitoring-chart",level:3},{value:"4. Deploy the genesis chart",id:"4-deploy-the-genesis-chart",level:3},{value:"5. Deploy the bootnodes",id:"5-deploy-the-bootnodes",level:3},{value:"6. Deploy the validators",id:"6-deploy-the-validators",level:3},{value:"7. Add/Remove additional validators to the validator pool",id:"7-addremove-additional-validators-to-the-validator-pool",level:3},{value:"8. Deploy RPC or Transaction nodes",id:"8-deploy-rpc-or-transaction-nodes",level:3},{value:"9. Connect to the node from your local machine via an ingress",id:"9-connect-to-the-node-from-your-local-machine-via-an-ingress",level:3},{value:"10. Blockchain explorer",id:"10-blockchain-explorer",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"deploy-charts",children:"Deploy charts"}),"\n",(0,t.jsx)(s.p,{children:"You can deploy Besu Helm charts for a Kubernetes cluster."}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clone the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository"]}),"\n",(0,t.jsxs)(s.li,{children:["A ",(0,t.jsx)(s.a,{href:"/23.10.1/private-networks/tutorials/kubernetes/cluster",children:"running Kubernetes cluster"})]}),"\n",(0,t.jsxs)(s.li,{children:["Install ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/tasks/tools/",children:"Kubectl"})]}),"\n",(0,t.jsxs)(s.li,{children:["Install ",(0,t.jsx)(s.a,{href:"https://helm.sh/docs/intro/install/",children:"Helm3"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"provision-with-helm-charts",children:"Provision with Helm charts"}),"\n",(0,t.jsxs)(s.p,{children:["Helm is a method of packaging a collection of objects into a chart which can then be deployed to the cluster. After you have cloned the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes",children:"Quorum-Kubernetes"})," repository, change the directory to ",(0,t.jsx)(s.code,{children:"helm"})," for the rest of this tutorial."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd helm\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Each helm chart has the following key-map values which you will need to set depending on your needs. The ",(0,t.jsx)(s.code,{children:"cluster.provider"})," is used as a key for the various cloud features enabled. Please specify only one cloud provider, not both. At present, the charts have full support for cloud native services in both AWS and Azure. Please note that if you use GCP, IBM etc please set ",(0,t.jsx)(s.code,{children:"cluster.provider: local"})," and set ",(0,t.jsx)(s.code,{children:"cluster.cloudNativeServices: false"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Please update the ",(0,t.jsx)(s.code,{children:"aws"})," or ",(0,t.jsx)(s.code,{children:"azure"})," map as shown below if you deploy to either cloud provider."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cluster:\n  provider: local  # choose from: local | aws | azure\n  cloudNativeServices: false # set to true to use Cloud Native Services (SecretsManager and IAM for AWS; KeyVault & Managed Identities for Azure)\n  reclaimPolicy: Delete # set to either Retain or Delete; note that PVCs and PVs will still exist after a 'helm delete'. Setting to Retain will keep volumes even if PVCs/PVs are deleted in kubernetes. Setting to Delete will remove volumes from EC2 EBS when PVC is deleted\n\nquorumFlags:\n  privacy: false\n  removeKeysOnDelete: false\n\naws:\n  # the aws cli commands uses the name 'quorum-node-secrets-sa' so only change this if you altered the name\n  serviceAccountName: quorum-node-secrets-sa\n  # the region you are deploying to\n  region: ap-southeast-2\n\nazure:\n  # the script/bootstrap.sh uses the name 'quorum-pod-identity' so only change this if you altered the name\n  identityName: quorum-pod-identity\n  # the clientId of the user assigned managed identity created in the template\n  identityClientId: azure-clientId\n  keyvaultName: azure-keyvault\n  # the tenant ID of the key vault\n  tenantId: azure-tenantId\n  # the subscription ID to use - this needs to be set explictly when using multi tenancy\n  subscriptionId: azure-subscriptionId\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Setting the ",(0,t.jsx)(s.code,{children:"cluster.cloudNativeServices: true"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Stores keys in Azure Key Vault or AWS Secrets Manager."}),"\n",(0,t.jsx)(s.li,{children:"Uses Azure Managed Identities or AWS Identity and Access Management for pod identity access."}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:"You can customize any of the charts in this repository to suit your requirements, and make pull requests to extend functionality."})}),"\n",(0,t.jsxs)(s.h3,{id:"1-check-that-you-can-connect-to-the-cluster-with-kubectl",children:["1. Check that you can connect to the cluster with ",(0,t.jsx)(s.code,{children:"kubectl"})]}),"\n",(0,t.jsx)(s.p,{children:"Verify kubectl is connected to cluster using: (use the latest version)"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl version\n"})}),"\n",(0,t.jsx)(s.p,{children:"The result looks similar to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'Client Version: version.Info{Major:"1", Minor:"23", GitVersion:"v1.23.1", GitCommit:"86ec240af8cbd1b60bcc4c03c20da9b98005b92e", GitTreeState:"clean", BuildDate:"2021-12-16T11:41:01Z", GoVersion:"go1.17.5", Compiler:"gc", Platform:"linux/amd64"}\nServer Version: version.Info{Major:"1", Minor:"22", GitVersion:"v1.22.3", GitCommit:"c92036820499fedefec0f847e2054d824aea6cd1", GitTreeState:"clean", BuildDate:"2021-10-27T18:35:25Z", GoVersion:"go1.16.9", Compiler:"gc", Platform:"linux/amd64"}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"2-create-the-namespace",children:"2. Create the namespace"}),"\n",(0,t.jsx)(s.p,{children:"This tutorial isolates groups of resources (for example, StatefulSets and Services) within a single cluster."}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["The rest of this tutorial uses ",(0,t.jsx)(s.code,{children:"besu"})," as the namespace, but you're free to pick any name when deploying, as long as it's consistent across the ",(0,t.jsx)(s.a,{href:"/23.10.1/private-networks/tutorials/kubernetes/cluster",children:"infrastructure scripts"})," and charts."]})}),"\n",(0,t.jsx)(s.p,{children:"Run the following in a terminal window:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl create namespace besu\n"})}),"\n",(0,t.jsx)(s.h3,{id:"3-deploy-the-monitoring-chart",children:"3. Deploy the monitoring chart"}),"\n",(0,t.jsx)(s.p,{children:"This chart deploys Prometheus and Grafana to monitor the metrics of the cluster, nodes and state of the network."}),"\n",(0,t.jsxs)(s.p,{children:["Update the admin ",(0,t.jsx)(s.code,{children:"username"})," and ",(0,t.jsx)(s.code,{children:"password"})," in the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/monitoring.yml",children:"monitoring values file"}),". Configure alerts to the receiver of your choice (for example, email or Slack), then deploy the chart using:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm repo add prometheus-community https://prometheus-community.github.io/helm-charts\nhelm repo update\nhelm install monitoring prometheus-community/kube-prometheus-stack --version 34.10.0 --namespace=besu --values ./values/monitoring.yml --wait\nkubectl --namespace besu apply -f  ./values/monitoring/\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Metrics are collected via a ",(0,t.jsx)(s.a,{href:"https://github.com/prometheus-operator/prometheus-operator/blob/7c77626e5e270a2530e187b185d45eeed8a773bf/Documentation/user-guides/getting-started.md",children:"ServiceMonitor"})," that scrapes each Besu pod, using given ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/",children:(0,t.jsx)(s.code,{children:"annotations"})})," which specify the port and path to use. For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'  template:\n    metadata:\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/port: 9545\n        prometheus.io/path: "/metrics"\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["For production use cases, configure Grafana with one of the supported ",(0,t.jsx)(s.a,{href:"https://grafana.com/docs/grafana/latest/auth/",children:"native auth mechanisms"}),"."]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-metrics",src:n(32789).Z+"",width:"1918",height:"943"})}),"\n",(0,t.jsxs)(s.p,{children:["Optionally you can also deploy the ",(0,t.jsx)(s.a,{href:"https://www.elastic.co/elastic-stack/",children:"Elastic Stack"})," to view logs (and metrics)."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm repo add elastic https://helm.elastic.co\nhelm repo update\n# if on cloud\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace quorum --values ./values/elasticsearch.yml\n# if local - set the replicas to 1\nhelm install elasticsearch --version 7.17.1 elastic/elasticsearch --namespace quorum --values ./values/elasticsearch.yml --set replicas=1 --set minimumMasterNodes: 1\nhelm install kibana --version 7.17.1 elastic/kibana --namespace quorum --values ./values/kibana.yml\nhelm install filebeat --version 7.17.1 elastic/filebeat  --namespace quorum --values ./values/filebeat.yml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["If you install ",(0,t.jsx)(s.code,{children:"filebeat"}),", please create a ",(0,t.jsx)(s.code,{children:"filebeat-*"})," index pattern in ",(0,t.jsx)(s.code,{children:"kibana"}),". All the logs from the nodes are sent to the ",(0,t.jsx)(s.code,{children:"filebeat"})," index. If you use The Elastic stack for logs and metrics, please deploy ",(0,t.jsx)(s.code,{children:"metricbeat"})," in a similar manner to ",(0,t.jsx)(s.code,{children:"filebeat"})," and create an index pattern in Kibana."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-elastic",src:n(27710).Z+"",width:"1919",height:"937"})}),"\n",(0,t.jsx)(s.p,{children:"To connect to Kibana or Grafana, we also need to deploy an ingress so you can access your monitoring endpoints publicly. We use Nginx as our ingress here, and you are free to configure any ingress per your requirements."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm install quorum-monitoring-ingress ingress-nginx/ingress-nginx \\\n    --namespace quorum \\\n    --set controller.ingressClassResource.name="monitoring-nginx" \\\n    --set controller.ingressClassResource.controllerValue="k8s.io/monitoring-ingress-nginx" \\\n    --set controller.replicaCount=1 \\\n    --set controller.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set defaultBackend.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set controller.admissionWebhooks.patch.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set controller.service.externalTrafficPolicy=Local\n\nkubectl apply -f ../ingress/ingress-rules-monitoring.yml\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Once complete, view the IP address listed under the ",(0,t.jsx)(s.code,{children:"Ingress"})," section if you're using the Kubernetes Dashboard or on the command line ",(0,t.jsx)(s.code,{children:"kubectl -n quorum get services quorum-monitoring-ingress-ingress-nginx-controller"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["We refer to the ingress here as ",(0,t.jsx)(s.code,{children:"external-nginx"})," because it deals with monitoring endpoints specifically. We also deploy a second ingress called ",(0,t.jsx)(s.code,{children:"network-ingress"})," which is for the blockchain nodes only in ",(0,t.jsx)(s.a,{href:"#9-connect-to-the-node-from-your-local-machine-via-an-ingress",children:"step 8"})]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-ingress-external",src:n(46332).Z+"",width:"1902",height:"899"})}),"\n",(0,t.jsx)(s.p,{children:"You can view the Besu dashboard by going to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"http://<INGRESS_IP>/d/XE4V0WGZz/besu-overview?orgId=1&refresh=10s\n"})}),"\n",(0,t.jsx)(s.p,{children:"You can view the Kibana dashboard (if deployed) by going to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"http://<INGRESS_IP>/kibana\n"})}),"\n",(0,t.jsx)(s.h3,{id:"4-deploy-the-genesis-chart",children:"4. Deploy the genesis chart"}),"\n",(0,t.jsx)(s.p,{children:"The genesis chart creates the genesis file and keys for the validators."}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["It's important to keep the release names of the initial validator pool as per this tutorial, that is ",(0,t.jsx)(s.code,{children:"validator-n"}),", where ",(0,t.jsx)(s.code,{children:"n"})," is the node number. Any validators created after the initial pool can be named to anything you like."]})}),"\n",(0,t.jsxs)(s.p,{children:["The override ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/genesis-besu.yml",children:"values.yml"})," looks like below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"---\nquorumFlags:\n  removeGenesisOnDelete: true\n\ncluster:\n  provider: local  # choose from: local | aws | azure\n  cloudNativeServices: false\n\naws:\n  # the aws cli commands uses the name 'quorum-node-secrets-sa' so only change this if you altered the name\n  serviceAccountName: quorum-node-secrets-sa\n  # the region you are deploying to\n  region: ap-southeast-2\n\nazure:\n  # the script/bootstrap.sh uses the name 'quorum-pod-identity' so only change this if you altered the name\n  identityName: quorum-pod-identity\n  # the clientId of the user assigned managed identity created in the template\n  identityClientId: azure-clientId\n  keyvaultName: azure-keyvault\n  # the tenant ID of the key vault\n  tenantId: azure-tenantId\n  # the subscription ID to use - this needs to be set explictly when using multi tenancy\n  subscriptionId: azure-subscriptionId\n\n# the raw Genesis config\n# rawGenesisConfig.blockchain.nodes set the number of validators/signers\nrawGenesisConfig:\n  genesis:\n    config:\n      chainId: 1337\n      algorithm:\n        consensus: qbft # choose from: ibft2 | qbft | clique\n        blockperiodseconds: 10\n        epochlength: 30000\n        requesttimeoutseconds: 20\n    gasLimit: '0x47b760'\n    difficulty: '0x1'\n    coinbase: '0x0000000000000000000000000000000000000000'\n  blockchain:\n    nodes:\n      generate: true\n      count: 4\n    accountPassword: 'password'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Please set the ",(0,t.jsx)(s.code,{children:"aws"}),", ",(0,t.jsx)(s.code,{children:"azure"})," and ",(0,t.jsx)(s.code,{children:"cluster"})," keys are as per the ",(0,t.jsx)(s.a,{href:"#provision-with-helm-charts",children:"Provisioning"})," step. ",(0,t.jsx)(s.code,{children:"quorumFlags.removeGenesisOnDelete: true"})," tells the chart to delete the genesis file when the chart is deleted. If you may wish to retain the genesis on deletion, please set that value to ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The last config item is ",(0,t.jsx)(s.code,{children:"rawGenesisConfig"})," which has details of the chain you are creating, please edit any of the parameters in there to match your requirements. To set the number of initial validators set the ",(0,t.jsx)(s.code,{children:"rawGenesisConfig.blockchain.nodes"})," to the number that you'd like. We recommend using the Byzantine formula of ",(0,t.jsx)(s.code,{children:"N=3F+1"})," when setting the number of validators."]}),"\n",(0,t.jsxs)(s.p,{children:["One more thing to note is that when ",(0,t.jsx)(s.code,{children:"cluster.cloudNativeServices: true"})," is set, the genesis job will not add the ",(0,t.jsx)(s.a,{href:"/23.10.1/private-networks/tutorials/quickstart",children:"Quickstart"})," test accounts into the genesis file."]}),"\n",(0,t.jsx)(s.p,{children:"When you are ready deploy the chart with :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"cd helm\nhelm install genesis ./charts/besu-genesis --namespace besu --create-namespace --values ./values/genesis-besu.yml\n"})}),"\n",(0,t.jsx)(s.p,{children:"Once completed, view the genesis and enodes (the list of static nodes) configuration maps that every Besu node uses, and the validator and bootnode node keys as secrets."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-genesis-configmaps",src:n(80130).Z+"",width:"1910",height:"416"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-genesis-secrets",src:n(88788).Z+"",width:"1906",height:"789"})}),"\n",(0,t.jsx)(s.h3,{id:"5-deploy-the-bootnodes",children:"5. Deploy the bootnodes"}),"\n",(0,t.jsxs)(s.p,{children:["This is an optional but recommended step. In a production setup we recommend the use of two ore more bootnodes for best practices. Each Besu node has a map that tells the StatefulSet what to deploy and how to clean up. The default ",(0,t.jsx)(s.code,{children:"values.yml"})," for the StatefulSet define the following flags which are present in all the override values files."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"---\nquorumFlags:\n  privacy: false\n  removeKeysOnDelete: true\n  isBootnode: true    # set this to true if this node is a bootnode\n  usesBootnodes: true # set this to true if the network you are connecting to use a bootnode/s that are deployed in the cluster\n\ncluster:\n  provider: local  # choose from: local | aws | azure\n  cloudNativeServices: false\n  reclaimPolicy: Delete # set to either Retain or Delete; note that PVCs and PVs will still exist after a 'helm delete'. Setting to Retain will keep volumes even if PVCs/PVs are deleted in kubernetes. Setting to Delete will remove volumes from EC2 EBS when PVC is deleted\n\naws:\n  # the aws cli commands uses the name 'quorum-node-secrets-sa' so only change this if you altered the name\n  serviceAccountName: quorum-node-secrets-sa\n  # the region you are deploying to\n  region: ap-southeast-2\n\nazure:\n  # the script/bootstrap.sh uses the name 'quorum-pod-identity' so only change this if you altered the name\n  identityName: quorum-pod-identity\n  # the clientId of the user assigned managed identity created in the template\n  identityClientId: azure-clientId\n  keyvaultName: azure-keyvault\n  # the tenant ID of the key vault\n  tenantId: azure-tenantId\n  # the subscription ID to use - this needs to be set explictly when using multi tenancy\n  subscriptionId: azure-subscriptionId\n\nnode:\n  besu:\n    metrics:\n      serviceMonitorEnabled: true\n    resources:\n      cpuLimit: 1\n      cpuRequest: 0.1\n      memLimit: \"2G\"\n      memRequest: \"1G\"\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Please set the ",(0,t.jsx)(s.code,{children:"aws"}),", ",(0,t.jsx)(s.code,{children:"azure"})," and ",(0,t.jsx)(s.code,{children:"cluster"})," keys are as per the ",(0,t.jsx)(s.a,{href:"#provision-with-helm-charts",children:"Provisioning"})," step. ",(0,t.jsx)(s.code,{children:"quorumFlags.removeKeysOnDelete: true"})," tells the chart to delete the node's keys when the chart is deleted. If you may wish to retain the keys on deletion, please set that value to ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["For the bootnodes only, set the ",(0,t.jsx)(s.code,{children:"quorumFlags.isBootnode: true"}),". When using bootnodes you have to also set ",(0,t.jsx)(s.code,{children:"quorumFlags.usesBootnodes: true"})," to indicate that all nodes on the network will use these bootnodes."]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["If you use bootnodes, you must set ",(0,t.jsx)(s.code,{children:"quorumFlags.usesBootnodes: true"})," in the override values.yaml for every other node type, that is validators.yaml, txnode.yaml and reader.yaml"]})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm install bootnode-1 ./charts/besu-node --namespace besu --values ./values/bootnode.yml\nhelm install bootnode-2 ./charts/besu-node --namespace besu --values ./values/bootnode.yml\n"})}),"\n",(0,t.jsx)(s.p,{children:"Once complete, you see two StatefulSets, and the two bootnodes discover themselves and peer. Because there are no validators present yet, there are no blocks created, as seen in the following logs."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-bootnode-logs",src:n(83490).Z+"",width:"1909",height:"782"})}),"\n",(0,t.jsx)(s.h3,{id:"6-deploy-the-validators",children:"6. Deploy the validators"}),"\n",(0,t.jsx)(s.p,{children:"The validators peer with the bootnodes and themselves, and when a majority of the validators have peered, blocks are proposed and created on the chain."}),"\n",(0,t.jsxs)(s.p,{children:["These are the next set of nodes that we will deploy. The charts use four validators (default) to replicate best practices for a network. The override ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/validator.yml",children:"values.yml"})," for the StatefulSet looks like below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"---\nquorumFlags:\n  privacy: false\n  removeKeysOnDelete: false\n  isBootnode: false   # set this to true if this node is a bootnode\n  usesBootnodes: true # set this to true if the network you are connecting to use a bootnode/s that are deployed in the cluster\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Please set the ",(0,t.jsx)(s.code,{children:"aws"}),", ",(0,t.jsx)(s.code,{children:"azure"})," and ",(0,t.jsx)(s.code,{children:"cluster"})," keys are as per the ",(0,t.jsx)(s.a,{href:"#provision-with-helm-charts",children:"Provisioning"})," step. ",(0,t.jsx)(s.code,{children:"quorumFlags.removeKeysOnDelete: true"})," tells the chart to delete the node's keys when the chart is deleted. If you may wish to retain the keys on deletion, please set that value to ",(0,t.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"Please note that if you delete a majority of the validators, the network will halt. Additionally, if the validator keys are deleted you may not be able to recover as you need a majority of the validators up to vote to add new validators into the pool"})}),"\n",(0,t.jsxs)(s.p,{children:["When using bootnodes (if deployed in the previous step) you have to also set ",(0,t.jsx)(s.code,{children:"quorumFlags.usesBootnodes: true"})," to indicate that all nodes on the network will use these bootnodes."]}),"\n",(0,t.jsxs)(s.p,{children:["For the initial validator pool we set all the node flags to ",(0,t.jsx)(s.code,{children:"false"})," and then deploy."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm install validator-1 ./charts/besu-node --namespace besu --values ./values/validator.yml\nhelm install validator-2 ./charts/besu-node --namespace besu --values ./values/validator.yml\nhelm install validator-3 ./charts/besu-node --namespace besu --values ./values/validator.yml\nhelm install validator-4 ./charts/besu-node --namespace besu --values ./values/validator.yml\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["It's important to keep the release names of the validators the same as it is tied to the keys that the genesis chart creates. So we use ",(0,t.jsx)(s.code,{children:"validator-1"}),", ",(0,t.jsx)(s.code,{children:"validator-2"}),", etc. in the following command."]})}),"\n",(0,t.jsx)(s.p,{children:"Once completed, you may need to give the validators a few minutes to peer and for round changes, depending on when the first validator was spun up, before the logs display blocks being created."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-validator-logs",src:n(94270).Z+"",width:"1904",height:"853"})}),"\n",(0,t.jsx)(s.h3,{id:"7-addremove-additional-validators-to-the-validator-pool",children:"7. Add/Remove additional validators to the validator pool"}),"\n",(0,t.jsxs)(s.p,{children:["To add (or remove) more validators to the initial validator pool, you need to deploy a node such as an RPC node (step 8) and then ",(0,t.jsx)(s.a,{href:"/23.10.1/private-networks/how-to/configure/consensus/ibft#add-and-remove-validators",children:"vote"})," that node in. The vote API call must be made on a majority of the existing pool and the new node will then become a validator."]}),"\n",(0,t.jsxs)(s.p,{children:["Please refer to the ",(0,t.jsx)(s.a,{href:"#9-connect-to-the-node-from-your-local-machine-via-an-ingress",children:"Ingress Section"})," for details on making the API calls from your local machine or equivalent."]}),"\n",(0,t.jsx)(s.h3,{id:"8-deploy-rpc-or-transaction-nodes",children:"8. Deploy RPC or Transaction nodes"}),"\n",(0,t.jsxs)(s.p,{children:["An RPC node is simply a node that can be used to make public transactions or perform read heavy operations such as when connected to a chain explorer like ",(0,t.jsx)(s.a,{href:"https://github.com/blockscout/blockscout",children:"BlockScout"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["The RPC override ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/reader.yml",children:"values.yml"})," for the StatefulSet looks identical to that of the validators above, and will create it's own node keys before the node starts."]}),"\n",(0,t.jsx)(s.p,{children:"To deploy an RPC node:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm install rpc-1 ./charts/besu-node --namespace besu --values ./values/reader.yml\n"})}),"\n",(0,t.jsx)(s.p,{children:"A Transaction or Member node in turn is one which has an accompanying Private Transaction Manager, such as Tessera; which allow you to make private transactions between nodes."}),"\n",(0,t.jsxs)(s.p,{children:["The Transaction override ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/txnode.yml",children:"values.yml"})," for the StatefulSet looks identical to that of the validators above and only has ",(0,t.jsx)(s.code,{children:"quorumFlags.privacy: true"})," to indicate that it is deploying a pair of GoQuorum and Tessera nodes."]}),"\n",(0,t.jsx)(s.p,{children:"To deploy a Transaction or Member node:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm install member-1 ./charts/besu-node --namespace besu --values ./values/txnode.yml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Logs for ",(0,t.jsx)(s.code,{children:"member-1"})," resemble the following for Tessera:"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-tx-tessera-logs",src:n(90794).Z+"",width:"1951",height:"602"})}),"\n",(0,t.jsx)(s.p,{children:"Logs for Besu resemble the following:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-tx-Besu-logs",src:n(75103).Z+"",width:"1951",height:"605"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["In these examples we use ",(0,t.jsx)(s.code,{children:"member-1"})," and ",(0,t.jsx)(s.code,{children:"rpc-1"})," as release names for the deployments. You can pick any release name that you'd like to use in place of those as per your requirements."]})}),"\n",(0,t.jsx)(s.h3,{id:"9-connect-to-the-node-from-your-local-machine-via-an-ingress",children:"9. Connect to the node from your local machine via an ingress"}),"\n",(0,t.jsxs)(s.p,{children:["In order to view the Grafana dashboards or connect to the nodes to make transactions from your local machine you can deploy an ingress controller with rules. We use the ",(0,t.jsx)(s.code,{children:"ingress-nginx"})," ingress controller which can be deployed as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx\nhelm repo update\nhelm install quorum-network-ingress ingress-nginx/ingress-nginx \\\n    --namespace quorum \\\n    --set controller.ingressClassResource.name="network-nginx" \\\n    --set controller.ingressClassResource.controllerValue="k8s.io/network-ingress-nginx" \\\n    --set controller.replicaCount=1 \\\n    --set controller.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set defaultBackend.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set controller.admissionWebhooks.patch.nodeSelector."kubernetes\\.io/os"=linux \\\n    --set controller.service.externalTrafficPolicy=Local\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/ingress/ingress-rules-besu.yml",children:"pre-defined rules"})," to test functionality, and alter to suit your requirements (for example, restrict access for API calls to trusted CIDR blocks)."]}),"\n",(0,t.jsxs)(s.p,{children:["Edit the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/ingress/ingress-rules-besu.yml",children:"rules"})," file so that the service names match your release name. In the example, we deployed a transaction node with the release name ",(0,t.jsx)(s.code,{children:"member-1"})," so the corresponding service is called ",(0,t.jsx)(s.code,{children:"besu-node-member-1"}),". Once you have settings that match your deployments, deploy the rules as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"kubectl apply -f ../ingress/ingress-rules-besu.yml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Once complete, view the IP address listed under the ",(0,t.jsx)(s.code,{children:"Ingress"})," section if you're using the Kubernetes Dashboard or on the command line ",(0,t.jsx)(s.code,{children:"kubectl -n quorum get services quorum-network-ingress-ingress-nginx-controller"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-ingress",src:n(46332).Z+"",width:"1902",height:"899"})}),"\n",(0,t.jsx)(s.p,{children:"The following is an example RPC call, which confirms that the node running the JSON-RPC service is syncing:"}),"\n",(0,t.jsx)(s.h1,{id:"curl-http-request",children:"curl HTTP request"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl -v -X POST -H "Content-Type: application/json" --data \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\' http://<INGRESS_IP>/rpc\n'})}),"\n",(0,t.jsx)(s.h1,{id:"json-result",children:"JSON result"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "result": "0x4e9"\n}\n'})}),"\n",(0,t.jsx)(s.h3,{id:"10-blockchain-explorer",children:"10. Blockchain explorer"}),"\n",(0,t.jsxs)(s.p,{children:["You can deploy ",(0,t.jsx)(s.a,{href:"https://github.com/blockscout/blockscout",children:"BlockScout"})," to aid with monitoring the blockchain. To do this, update the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/blockscout-besu.yml",children:"BlockScout values file"})," and set the ",(0,t.jsx)(s.code,{children:"database"})," and ",(0,t.jsx)(s.code,{children:"secret_key_base"})," values."]}),"\n",(0,t.jsx)(s.admonition,{type:"important",children:(0,t.jsxs)(s.p,{children:["Changes to the database requires changes to both the ",(0,t.jsx)(s.code,{children:"database"})," and the ",(0,t.jsx)(s.code,{children:"blockscout"})," dictionaries."]})}),"\n",(0,t.jsx)(s.p,{children:"Once completed, deploy the chart using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm dependency update ./charts/blockscout\nhelm install blockscout ./charts/blockscout --namespace quorum --values ./values/blockscout-goquorum.yaml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You can optionally deploy the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-explorer",children:"Quorum-Explorer"})," as a lightweight blockchain explorer. The Quorum Explorer is not recommended for use in production and is intended for demonstration or Development purposes only. The Explorer can give an overview over the whole network, such as querying each node on the network for node or block information, voting (add/remove) validators from the network, demonstrating a SimpleStorage smart contract with privacy enabled, and sending transactions between wallets as you would do in MetaMask. Please see the ",(0,t.jsx)(s.a,{href:"/23.10.1/private-networks/tutorials/kubernetes/quorum-explorer",children:"Explorer"})," page for details on how to use the application."]}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsx)(s.p,{children:"The accounts listed in the file below are for test purposes only and should not be used on a production network."})}),"\n",(0,t.jsxs)(s.p,{children:["To deploy the application, update the ",(0,t.jsx)(s.a,{href:"https://github.com/ConsenSys/quorum-kubernetes/blob/5920caff6dd15b4ca17f760ad9e4d7d2e43b41a1/helm/values/explorer-besu.yaml",children:"Explorer values file"})," with details of your nodes and endpoints and then deploy."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"helm install quorum-explorer ./charts/explorer --namespace besu --values ./values/explorer-besu.yaml\n"})}),"\n",(0,t.jsxs)(s.p,{children:["You will also need deploy the ingress (if not already done in ",(0,t.jsx)(s.a,{href:"#3-deploy-the-monitoring-chart",children:"Monitoring"})," to access the endpoint on ",(0,t.jsx)(s.code,{children:"http://<INGRESS_IP>/explorer"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"k8s-explorer",src:n(57781).Z+"",width:"1917",height:"944"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},88788:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kuberenetes-genesis-secrets-01ce3f7990b79414bad9ca1178d66700.png"},83490:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-bootnode-logs-01c0c7d459650185e6acb4f897ef0973.png"},27710:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-elastic-77850ddd9691a3c8f64bd625d3af3a4d.png"},57781:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-explorer-41af1feb005383ef1871e47d4792c3b5.png"},80130:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-genesis-configmaps-829bdeea072f7fadfe9c440cceff33fd.png"},32789:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-grafana-f5b7e488c30e4bbacde6f0fba682e0a2.png"},46332:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-ingress-ip-12a419bfc4a14aa9dee58168f8dc012b.png"},75103:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-tx-Besu-logs-86e44cf39e1bad7a0760e75e04663f8e.png"},90794:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-tx-tessera-logs-9dc3ebbea91d127a6279fe8fe8e3edcc.png"},94270:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/kubernetes-validator-logs-85c883d2e1a7e2addc592ab2f3fc62a4.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var t=n(67294);const o={},a=t.createContext(o);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);