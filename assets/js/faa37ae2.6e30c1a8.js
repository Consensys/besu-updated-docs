"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[59804],{44394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var o=t(85893),s=t(11151);const r={title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},l="Use OpenTelemetry",i={id:"private-networks/how-to/monitor/opentelemetry",title:"Use OpenTelemetry",description:"Collect Besu information with the OpenTelemetry Collector",source:"@site/versioned_docs/version-23.10.0/private-networks/how-to/monitor/opentelemetry.md",sourceDirName:"private-networks/how-to/monitor",slug:"/private-networks/how-to/monitor/opentelemetry",permalink:"/23.10.0/private-networks/how-to/monitor/opentelemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.10.0/private-networks/how-to/monitor/opentelemetry.md",tags:[{label:"private networks",permalink:"/23.10.0/tags/private-networks"}],version:"23.10.0",lastUpdatedAt:1703034031,formattedLastUpdatedAt:"Dec 20, 2023",sidebarPosition:6,frontMatter:{title:"Use OpenTelemetry",sidebar_position:6,description:"Collect Besu information with the OpenTelemetry Collector",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Use Splunk",permalink:"/23.10.0/private-networks/how-to/monitor/splunk"},next:{title:"Use Chainlens Explorer",permalink:"/23.10.0/private-networks/how-to/monitor/chainlens"}},c={},a=[{value:"Install OpenTelemetry Collector",id:"install-opentelemetry-collector",level:2},{value:"Setting up and running OpenTelemetry with Besu",id:"setting-up-and-running-opentelemetry-with-besu",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"use-opentelemetry",children:"Use OpenTelemetry"}),"\n",(0,o.jsxs)(n.p,{children:["You can use the OpenTelemetry monitoring and tracing service to gather node metrics and traces. To enable OpenTelemetry to access Hyperledger Besu, use the ",(0,o.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#metrics-enabled",children:(0,o.jsx)(n.code,{children:"--metrics-enabled"})})," and ",(0,o.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#metrics-protocol",children:(0,o.jsx)(n.code,{children:"--metrics-protocol=opentelemetry"})})," options. Use ",(0,o.jsx)(n.a,{href:"https://splunk.com",children:"Splunk"})," to visualize the collected data. A ",(0,o.jsx)(n.a,{href:"https://github.com/splunk/splunk-connect-for-ethereum/tree/master/examples/besu-sync",children:"Besu Sync example"})," is available."]}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsx)(n.p,{children:"Use OpenTelemetry to monitor the sync time of your Besu node and show where time is spent internally and over the JSON-RPC interface."}),(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://wiki.hyperledger.org/display/BESU/2021-01-19+Office+Hours+Notes",children:"This office hours recording"})," shows examples of monitoring Hyperledger Besu."]})]}),"\n",(0,o.jsx)(n.h2,{id:"install-opentelemetry-collector",children:"Install OpenTelemetry Collector"}),"\n",(0,o.jsxs)(n.p,{children:["Download and install the ",(0,o.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/releases",children:"OpenTelemetry Collector"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can also install exporters that send system metrics to OpenTelemetry to monitor non-Besu-specific items such as disk and CPU usage. The OpenTelemetry Collector can connect to additional applications, and may be deployed in Kubernetes environments as a daemonset."})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-and-running-opentelemetry-with-besu",children:"Setting up and running OpenTelemetry with Besu"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Configure OpenTelemetry to accept data from Besu. For example, use the following configuration for your ",(0,o.jsx)(n.code,{children:"otel-collector-config.yml"})," file, and send data to Splunk and Splunk APM:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",metastring:'title="otel-collector-config.yml"',children:'receivers:\n  otlp:\n    protocols:\n      grpc:\n      http:\n\nexporters:\n  splunk_hec/traces:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:traces"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "otlp"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "traces"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  splunk_hec/metrics:\n    # Splunk HTTP Event Collector token.\n    token: "11111111-1111-1111-1111-1111111111113"\n    # URL to a Splunk instance to send data to.\n    endpoint: "https://<SPLUNK INSTANCE>:8088/services/collector"\n    # Optional Splunk source: https://docs.splunk.com/Splexicon:Source\n    source: "besu:metrics"\n    # Optional Splunk source type: https://docs.splunk.com/Splexicon:Sourcetype\n    sourcetype: "prometheus"\n    # Splunk index, optional name of the Splunk index targeted.\n    index: "metrics"\n    # Maximum HTTP connections to use simultaneously when sending data. Defaults to 100.\n    max_connections: 20\n    # Whether to disable gzip compression over HTTP. Defaults to false.\n    disable_compression: false\n    # HTTP timeout when sending data. Defaults to 10s.\n    timeout: 10s\n    # Whether to skip checking the certificate of the HEC endpoint when sending data over HTTPS. Defaults to false.\n    # For this demo, we use a self-signed certificate on the Splunk docker instance, so this flag is set to true.\n    insecure_skip_verify: true\n  # Traces\n  sapm:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    endpoint: "https://ingest.${SPLUNK_REALM}.signalfx.com/v2/trace"\n  # Metrics + Events\n  signalfx:\n    access_token: "${SPLUNK_ACCESS_TOKEN}"\n    realm: "${SPLUNK_REALM}"\n\nprocessors:\n  batch:\n\nextensions:\n  health_check:\n  pprof:\n  zpages:\n\nservice:\n  extensions: [pprof, zpages, health_check]\n  pipelines:\n    traces:\n      receivers: [otlp]\n      exporters: [splunk_hec/traces, sapm]\n      processors: [batch]\n    metrics:\n      receivers: [otlp]\n      exporters: [splunk_hec/metrics, signalfx]\n      processors: [batch]\n'})}),"\n",(0,o.jsx)(n.p,{children:"It is easiest to run the OpenTelemetry collector with Docker with the following command:"}),"\n",(0,o.jsx)(n.h1,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=<access token> \\\n  -e SPLUNK_REALM=<realm> \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n"})}),"\n",(0,o.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run -d \\\n  -v ./otel-collector-config.yml:/etc/otel/config.yaml \\\n  -e SPLUNK_ACCESS_TOKEN=abcdefg654 \\\n  -e SPLUNK_REALM=us1 \\\n  -p 4317:4317 \\\n  otel/opentelemetry-collector-contrib:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["You can also refer to this ",(0,o.jsx)(n.a,{href:"https://github.com/splunk/splunk-connect-for-ethereum/blob/989dc2ccae7d8235bf3ce2a83a18cf0cd1713294/examples/besu-sync/full-sync/docker-compose.yaml",children:"Docker-compose example"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start Besu with the ",(0,o.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#metrics-enabled",children:(0,o.jsx)(n.code,{children:"--metrics-enabled"})})," and ",(0,o.jsx)(n.a,{href:"/23.10.0/public-networks/reference/cli/options#metrics-protocol",children:(0,o.jsx)(n.code,{children:"--metrics-protocol=opentelemetry"})})," options. For example, run the following command to start a single node:"]}),"\n",(0,o.jsx)(n.h1,{id:"syntax-1",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'OTEL_EXPORTER_OTLP_ENDPOINT=https://<host>:<port> besu --network=dev --miner-enabled --miner-coinbase <COINBASE ADDRESS> --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n'})}),"\n",(0,o.jsx)(n.h1,{id:"example-1",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'OTEL_EXPORTER_OTLP_ENDPOINT=https://localhost:4317 besu --network=dev --miner-enabled --miner-coinbase fe3b557e8fb62b89f4916b721be55ceb828dbd73 --rpc-http-cors-origins="all" --rpc-http-enabled --metrics-enabled --metrics-protocol=opentelemetry\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-specification/blob/8f7cdb73618a0b3afa9532b8f8103d719e352781/specification/sdk-environment-variables.md",children:"OpenTelemetry SDK"})," mandates how to configure the OpenTelemetry gRPC client, so data flows to the collector from Besu."]}),"\n",(0,o.jsx)(n.p,{children:"You can use the following environment variables:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Required"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OTEL_EXPORTER_OTLP_ENDPOINT"}),(0,o.jsxs)(n.td,{children:["OpenTelemetry Collector endpoint, of the form ",(0,o.jsx)(n.code,{children:"https://host:port"}),". The default value is ",(0,o.jsx)(n.code,{children:"https://localhost:4317"})]}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"OTEL_EXPORTER_OTLP_INSECURE"}),(0,o.jsx)(n.td,{children:"Whether to allow insecure connections for OpenTelemetry data. False by default."}),(0,o.jsx)(n.td,{children:"No"})]})]})]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"*[APM]: Application Performance Monitoring"})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var o=t(67294);const s={},r=o.createContext(s);function l(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);