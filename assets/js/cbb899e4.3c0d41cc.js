"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>A,contentTitle:()=>D,default:()=>x,frontMatter:()=>O,metadata:()=>j,toc:()=>C});var a=r(7462),n=r(7294),o=r(3905),i=r(6010),l=r(2466),s=r(6550),u=r(1980),c=r(7392),p=r(12);function d(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=m(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=b({queryString:r,groupId:a}),[c,d]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),h=(()=>{const e=s??c;return f({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),d(e)}),[u,d,o]),tabValues:o}}var g=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":o===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function E(e){const t=h(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",v.tabList)},n.createElement(y,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return n.createElement(E,(0,a.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function w(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(N.tabItem,a),hidden:r},t)}const O={sidebar_position:6,title:"Configuration"},D=void 0,j={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"The configurations in this page can be set from several sources in the following order:",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/jersey-ws-template/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/jersey-ws-template/docs/security"},next:{title:"CI/CD",permalink:"/jersey-ws-template/docs/ci-cd"}},A={},C=[{value:"Core Properties",id:"core-properties",level:2},{value:"OAuth 2",id:"oauth-2",level:2},{value:"(Elide) JPA DataStore",id:"elide-jpa-datastore",level:2}],S={toc:C},P="wrapper";function x(e){let{components:t,...r}=e;return(0,o.kt)(P,(0,a.Z)({},S,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The configurations in this page can be set from several sources in the following order:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/environment/env.html"},"operating system's environment variables"),"; for instance, an environment variable can be set with\n",(0,o.kt)("inlineCode",{parentName:"li"},'export OAUTH_ENABLED="true"')),(0,o.kt)("li",{parentName:"ol"},"the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html"},"Java system properties"),"; for example, a Java system property can be set using\n",(0,o.kt)("inlineCode",{parentName:"li"},'System.setProperty("OAUTH_ENABLED", "true")')),(0,o.kt)("li",{parentName:"ol"},"a ",(0,o.kt)("strong",{parentName:"li"},".properties")," file placed under CLASSPATH. This file can be put under ",(0,o.kt)("inlineCode",{parentName:"li"},"src/main/resources")," source directory with\ncontents, for example, ",(0,o.kt)("inlineCode",{parentName:"li"},"OAUTH_ENABLED=true"))),(0,o.kt)("h2",{id:"core-properties"},"Core Properties"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,o.kt)("strong",{parentName:"p"},"application.properties"))),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(w,{value:"jpa-elide",label:"JPA(Elide)",default:!0,mdxType:"TabItem"},"- **MODEL_PACKAGE_NAME**: The fully qualified package name that contains a set of Elide JPA models")),(0,o.kt)("h2",{id:"oauth-2"},"OAuth 2"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,o.kt)("strong",{parentName:"p"},"oauth.properties"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"OAUTH_ENABLED"),": Whether or not to enable ",(0,o.kt)("a",{parentName:"p",href:"https://paion-data.github.io/astraios/apidocs/com/paiondata/astraios/web/filters/OAuthFilter.html"},"OAuthFilter")," container request filter.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"JWKS_URL"),": (",(0,o.kt)("strong",{parentName:"p"},"Required if ",(0,o.kt)("inlineCode",{parentName:"strong"},"OAUTH_ENABLED")," is set to ",(0,o.kt)("inlineCode",{parentName:"strong"},"true")),") A standard ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWKS")," URL that, on GET, returns a json\nobject such as"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "keys": [\n        {\n            "kty": "EC",\n            "use": "sig",\n            "kid": "eTERknhur9q8gisdaf_dfrqrgdfsg",\n            "alg": "ES384",\n            "crv": "P-384",\n            "x": "sdfrgHGYF...",\n            "y": "sdfuUIG&8..."\n        }\n    ]\n}\n')))),(0,o.kt)("h2",{id:"elide-jpa-datastore"},"(Elide) JPA DataStore"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following configurations can be placed in the properties file called ",(0,o.kt)("strong",{parentName:"p"},"jpadatastore.properties"))),(0,o.kt)(T,{mdxType:"Tabs"},(0,o.kt)(w,{value:"jpa-elide",label:"JPA(Elide)",default:!0,mdxType:"TabItem"},'- **DB_USER**: Persistence DB username (needs have both Read and Write permissions). - **DB_PASSWORD**: The persistence DB user password. - **DB_URL**: The persistence DB URL, such as "jdbc:mysql://localhost/elide?serverTimezone=UTC". - **DB_DRIVER**: The SQL DB driver class name, such as "com.mysql.jdbc.Driver". - **DB_DIALECT**: The SQL DB dialect name, such as "org.hibernate.dialect.MySQLDialect".')))}x.isMDXComponent=!0}}]);