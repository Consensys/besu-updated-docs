"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[39709],{79297:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=i(85893),s=i(11151);const o={},r=void 0,a={id:"global/config-options",title:"config-options",description:"Optional configuration options",source:"@site/versioned_docs/version-23.4.0/global/config-options.md",sourceDirName:"global",slug:"/global/config-options",permalink:"/23.4.0/global/config-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.4.0/global/config-options.md",tags:[],version:"23.4.0",lastUpdatedAt:1703040414,formattedLastUpdatedAt:"Dec 20, 2023",frontMatter:{}},c={},l=[{value:"Optional configuration options",id:"optional-configuration-options",level:3}];function u(e){const t={code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"optional-configuration-options",children:"Optional configuration options"}),"\n",(0,n.jsx)(t.p,{children:"Optional configuration options in the genesis file are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"messageQueueLimit"})," - In large networks with limited resources, increasing the message queue limit might help with message activity surges. The default is 1000."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"duplicateMessageLimit"})," - If the same node is retransmitting messages, increasing the duplicate message limit might reduce the number of retransmissions. A value of two to three times the number of validators is usually enough. The default is 100."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"futureMessagesLimit"})," - The future messages buffer holds messages for a future chain height. For large networks, increasing the future messages limit might be useful. The default is 1000."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"futureMessagesMaxDistance"})," - The maximum height from the current chain height for buffering messages in the future messages buffer. The default is 10."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(67294);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);