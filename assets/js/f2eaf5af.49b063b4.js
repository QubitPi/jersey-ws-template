"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[935],{5652:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=i(4848),r=i(8453),s=i(1470),a=i(9365);const o={sidebar_position:4,title:"GraphQL Subscriptions"},l=void 0,c={id:"crud/elide/clientapis/graphql-subscriptions",title:"GraphQL Subscriptions",description:"5-Minute Overview",source:"@site/docs/crud/elide/clientapis/graphql-subscriptions.mdx",sourceDirName:"crud/elide/clientapis",slug:"/crud/elide/clientapis/graphql-subscriptions",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/graphql-subscriptions",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/crud/elide/clientapis/graphql-subscriptions.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"GraphQL Subscriptions"},sidebar:"tutorialSidebar",previous:{title:"GraphQL Queries & Mutations",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/graphql"},next:{title:"GraphQL Federation",permalink:"/jersey-webservice-template/docs/crud/elide/clientapis/graphql-federation"}},d={},u=[{value:"5-Minute Overview",id:"5-minute-overview",level:2},{value:"Decorating an Elide Model",id:"decorating-an-elide-model",level:3},{value:"Running Queries",id:"running-queries",level:3},{value:"Simple Query",id:"simple-query",level:4},{value:"Filtering",id:"filtering",level:4},{value:"Security",id:"security",level:2},{value:"Configuration",id:"configuration",level:2},{value:"JMS Message Broker",id:"jms-message-broker",level:2},{value:"Global Settings",id:"global-settings",level:3},{value:"Authentication",id:"authentication",level:3},{value:"JMS Message Settings",id:"jms-message-settings",level:3},{value:"Custom Subscriptions",id:"custom-subscriptions",level:2},{value:"Recommendations",id:"recommendations",level:2}];function p(e){const n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"5-minute-overview",children:"5-Minute Overview"}),"\n",(0,t.jsxs)(n.p,{children:["We'll be leveraging the ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/elide-spring-boot-example",children:"elide-spring-boot-example"})," project to illustrate how to use subscriptions."]}),"\n",(0,t.jsx)(n.h3,{id:"decorating-an-elide-model",children:"Decorating an Elide Model"}),"\n",(0,t.jsxs)(n.p,{children:["A subscription can be made from any Elide model simply by annotating it with ",(0,t.jsx)(n.code,{children:"Subscription"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Data                    // Lombok\n@Subscription\n@Include(name = "group")\npublic class ArtifactGroup {\n    @Id\n    private String name;\n\n    @SubscriptionField\n    private String commonName;\n\n    @SubscriptionField\n    private String description;\n\n    @SubscriptionField\n    @OneToMany(mappedBy = "group")\n    private List<ArtifactProduct> products;\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The subscription annotation takes zero or more ",(0,t.jsx)(n.em,{children:"operations"})," which correspond to different topics."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Include\n@Subscription(operation = { CREATE, UPDATE, DELETE });\nclass Book {\n  ...\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Whenever a model is manipulated (created, deleted, or updated), elide will post a JSON serialized model to a JMS topic\nfor that operation. Only the fields decorated with ",(0,t.jsx)(n.code,{children:"@SubscriptionField"})," will be serialized (and hence available to be\nconsumed in the subscription). It is also possible to define ",(0,t.jsx)(n.a,{href:"#custom-subscriptions",children:"custom operations"})," that are\ntriggered by your service business logic."]}),"\n",(0,t.jsx)(n.h3,{id:"running-queries",children:"Running Queries"}),"\n",(0,t.jsxs)(n.p,{children:["Elide subscriptions are implemented using websockets. Websockets require a protocol to send and receive messages.",(0,t.jsx)(n.br,{}),"\n","Elide supports the ",(0,t.jsx)(n.a,{href:"https://github.com/enisdenjo/graphql-ws",children:"graphql-ws"})," protocol. This protocol works both with the\n",(0,t.jsx)(n.a,{href:"https://www.apollographql.com/docs/react/data/subscriptions/",children:"Apollo GraphQL"})," client as well as [Graphiql]\n(",(0,t.jsx)(n.a,{href:"https://github.com/graphql/graphiql",children:"https://github.com/graphql/graphiql"}),"). If we run the ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/elide-spring-boot-example",children:"example project"}),", it comes bundled with Graphiql."]}),"\n",(0,t.jsx)(n.p,{children:"Elide's subscription API is similar to its API for queries and mutations, but there are some notable differences:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Each Elide model annotated with ",(0,t.jsx)(n.code,{children:"Subscription"})," is a root field in the GraphQL schema."]}),"\n",(0,t.jsxs)(n.li,{children:["Each root model supports a topic (ADDED, DELETED, UPDATED) variable and an optional ",(0,t.jsx)(n.a,{href:"#filtering",children:"filter variable"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Responses are not wrapped in 'edges' and 'node' because there is no pagination."}),"\n",(0,t.jsx)(n.li,{children:"The API is read only."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"simple-query",children:"Simple Query"}),"\n",(0,t.jsx)(n.p,{children:"Query for newly added 'groups' returning their name and description:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"subscription { group(topic : ADDED) { name description } }\n"})}),"\n",(0,t.jsx)(n.p,{children:"The response will look like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "group": {\n      "name": "new group",\n      "description": "foo"\n    }\n  }\n}\n\n'})}),"\n",(0,t.jsx)(n.p,{children:"If there are errors, they will get reported in an errors field:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "group": {\n      "name": "new group",\n      "commonName": "",\n      "nope": null\n    }\n  },\n  "errors": [\n    {\n      "message": "Exception while fetching data (/group/nope) : ReadPermission Denied",\n      "locations": [\n        {\n          "line": 2,\n          "column": 53\n        }\n      ],\n      "path": [\n        "group",\n        "nope"\n      ],\n      "extensions": {\n        "classification": "DataFetchingException"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"filtering",children:"Filtering"}),"\n",(0,t.jsxs)(n.p,{children:["All elide subscriptions support RSQL filtering that is identical to\n",(0,t.jsx)(n.a,{href:"graphql#filtering",children:"filtering for queries and mutations"}),". The following query filters artifact group creation events by\nthe name 'com.paiondata.elide':"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"subscription { group(topic : ADDED, filter: \"name='com.paiondata.elide'\") { name description } }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,t.jsxs)(n.p,{children:["Elide honors ",(0,t.jsx)(n.a,{href:"security#read",children:"ReadPermission annotations"})," for all subscription fields in the model. Subscriptions are\nautomatically filtered by any ",(0,t.jsx)(n.a,{href:"security#filter-expression-checks",children:"FilterExpressionChecks"}),". Client requests to\nunauthorized fields will result in errors returned in the subscription response payload."]}),"\n",(0,t.jsxs)(n.p,{children:["See the section on ",(0,t.jsx)(n.a,{href:"#authentication",children:"Authentication"})," for details on how to build an Elide user principal."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"jms-message-broker",children:"JMS Message Broker"}),"\n",(0,t.jsx)(n.p,{children:"Elide leverages JMS to post and consume subscription messages. The example project runs an embedded (in-memory) broker.\nWe will want to replace this with a dedicated broker in production."}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,t.jsxs)(n.p,{children:["Configure in ",(0,t.jsx)(n.code,{children:"application.yaml"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"spring:\nactivemq:\nbroker-url: 'vm://embedded?broker.persistent=false,useShutdownHook=false'\nin-memory: true\n"})})]}),(0,t.jsxs)(a.A,{value:"upsert-to-modify-response",label:"Response",children:[(0,t.jsxs)(n.p,{children:["Override ",(0,t.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ElideStandaloneSubscriptionSettings getSubscriptionProperties() {\n        return new ElideStandaloneSubscriptionSettings() {\n            public ConnectionFactory getConnectionFactory() {\n\n                // Create, configure, and return a JMS connection factory....\n\n            }\n        };\n    }\n}\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"global-settings",children:"Global Settings"}),"\n",(0,t.jsx)(n.p,{children:"Elide subscriptions support the following, global configuration settings:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"enabled"})," - Turn on/off the subscription websocket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"path"})," - The HTTP root path of the subscription websocket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"idleTimeout"})," - How long in milliseconds the websocket can remain idle before the server closes it."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"maxMessageSize"})," - Maximum size in bytes of any message sent to the websocket (or it will be closed in error)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"maxSubscriptions"})," - The maximum number of concurrent subscriptions per websocket."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"connectionTimeout"})," - The time in milliseconds for the client to initiate a connection handshake before the server\ncloses the socket."]}),"\n"]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,t.jsxs)(n.p,{children:["Configure in ",(0,t.jsx)(n.code,{children:"application.yaml"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"elide:\n  graphql:\n    subscription:\n      enabled: true\n      path: /subscription\n      idle-timeout: 30000ms\n      max-message-size: 10000\n      max-subscriptions: 30\n      connection-timeout: 5000ms\n"})})]}),(0,t.jsxs)(a.A,{value:"upsert-to-modify-response",label:"Response",children:[(0,t.jsxs)(n.p,{children:["Override ",(0,t.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ElideStandaloneSubscriptionSettings getSubscriptionProperties() {\n        return new ElideStandaloneSubscriptionSettings() {\n\n            @Override\n            public boolean enabled() {\n                return true;\n            }\n\n            @Override\n            public String getPath() {\n                return "/subscription";\n            }\n\n            @Override\n            public Duration getConnectionTimeout() {\n                return Duration.ofMillis(5000L);\n            }\n\n            @Override\n            public Integer getMaxSubscriptions() {\n                return 30;\n            }\n\n            @Override\n            public Integer getMaxMessageSize() {\n                return 10000;\n            }\n\n            @Override\n            public Duration getIdleTimeout() {\n                return Duration.ofMillis(300000L);\n            }\n        };\n    }\n}\n'})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["There is no well-defined standard for how user credentials are passed via websockets. Instead, Elide allows developers\nto provide a function that maps a\n",(0,t.jsx)(n.a,{href:"https://jakarta.ee/specifications/websocket/2.0/apidocs/jakarta/websocket/session",children:"JSR-356 Session"})," to and Elide\n",(0,t.jsx)(n.a,{href:"security#user",children:"User object"}),". The session contains the HTTP request headers, path parameter, query parameters, and\nwebsocket parameters that can be leveraged to construct a user principal."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"@Configuration"})," class that defines our custom implementation as a ",(0,t.jsx)(n.code,{children:"@Bean"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public SubscriptionWebSocket.UserFactory userFactory() {\n        return new CustomUserFactory();\n    }\n}\n"})})]}),(0,t.jsxs)(a.A,{value:"upsert-to-modify-response",label:"Response",children:[(0,t.jsxs)(n.p,{children:["Override ",(0,t.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ElideStandaloneSubscriptionSettings getSubscriptionProperties() {\n        return new ElideStandaloneSubscriptionSettings() {\n\n            @Override\n            public SubscriptionWebSocket.UserFactory getUserFactory() {\n                return new CustomUserFactory();\n            }\n        };\n    }\n}\n"})})]})]}),"\n",(0,t.jsx)(n.h3,{id:"jms-message-settings",children:"JMS Message Settings"}),"\n",(0,t.jsx)(n.p,{children:"We can override some of the default settings for messages published to JMS topics by overriding the following\nbean:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"@Configuration"})," class that defines our custom implementation as a ",(0,t.jsx)(n.code,{children:"@Bean"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class ElideConfiguration {\n    @Bean\n    public SubscriptionScanner subscriptionScanner(Elide elide, ConnectionFactory connectionFactory) {\n        SubscriptionScanner scanner = SubscriptionScanner.builder()\n\n                // Things you may want to override...\n                .deliveryDelay(Message.DEFAULT_DELIVERY_DELAY)\n                .messagePriority(Message.DEFAULT_PRIORITY)\n                .timeToLive(Message.DEFAULT_TIME_TO_LIVE)\n                .deliveryMode(Message.DEFAULT_DELIVERY_MODE)\n\n                // Things you probably don't care about...\n                .scanner(elide.getScanner())\n                .dictionary(elide.getElideSettings().getDictionary())\n                .connectionFactory(connectionFactory)\n                .mapper(elide.getMapper().getObjectMapper())\n                .build();\n\n        scanner.bindLifecycleHooks();\n\n        return scanner;\n    }\n}\n"})})]}),(0,t.jsxs)(a.A,{value:"upsert-to-modify-response",label:"Response",children:[(0,t.jsxs)(n.p,{children:["Override ",(0,t.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public ElideStandaloneSubscriptionSettings getSubscriptionProperties() {\n        return new ElideStandaloneSubscriptionSettings() {\n\n            @Override\n            public SubscriptionScanner subscriptionScanner(Elide elide, ConnectionFactory connectionFactory) {\n                SubscriptionScanner scanner = SubscriptionScanner.builder()\n\n                        // Things you may want to override...\n                        .deliveryDelay(Message.DEFAULT_DELIVERY_DELAY)\n                        .messagePriority(Message.DEFAULT_PRIORITY)\n                        .timeToLive(Message.DEFAULT_TIME_TO_LIVE)\n                        .deliveryMode(Message.DEFAULT_DELIVERY_MODE)\n\n                        // Things you probably don't care about...\n                        .scanner(elide.getScanner())\n                        .dictionary(elide.getElideSettings().getDictionary())\n                        .connectionFactory(connectionFactory)\n                        .mapper(elide.getMapper().getObjectMapper())\n                        .build();\n\n                scanner.bindLifecycleHooks();\n\n                return scanner;\n            }\n        };\n    }\n}\n"})})]})]}),"\n",(0,t.jsx)(n.h2,{id:"custom-subscriptions",children:"Custom Subscriptions"}),"\n",(0,t.jsxs)(n.p,{children:["While Elide makes it easy to subscribe to model manipulations (create, update, and delete), it is also possible to add a\nsubscription topic for another event tied to our business logic. A custom subscription is simply an Elide model\nannotated with the ",(0,t.jsx)(n.code,{children:"@Subscription"})," annotation that explicitly sets the list of operations to empty:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Include\n\n//This is a custom subscription\n@Subscription(operations = {})\n@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Chat {\n\n\n    @Id\n    long id;\n\n    @SubscriptionField\n    String message;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To publish to our subscription, we can create a lifecycle hook on another model that posts ",(0,t.jsx)(n.code,{children:"Chat"})," messages."]}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"ChatBot.java",label:"ChatBot.java",default:!0,children:[(0,t.jsxs)(n.p,{children:["Create a ",(0,t.jsx)(n.code,{children:"@Configuration"})," class that defines our custom implementation as a ",(0,t.jsx)(n.code,{children:"@Bean"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"@Data // Lombok\n@Include\n@LifeCycleHookBinding(\n        hook = ChatBotCreateHook.class,\n        operation = LifeCycleHookBinding.Operation.CREATE,\n        phase = LifeCycleHookBinding.TransactionPhase.POSTCOMMIT\n)\npublic class ChatBot {\n\n    @Id\n    long id;\n\n    String name;\n}\n"})})]}),(0,t.jsx)(a.A,{value:"ChatBotCreateHook.java",label:"ChatBotCreateHook.java",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'@Data // Lombok\npublic class ChatBotCreateHook implements LifeCycleHook<ChatBot> {\n\n    @Inject\n    ConnectionFactory connectionFactory;\n\n    @Override\n    public void execute(\n            LifeCycleHookBinding.Operation operation,\n            LifeCycleHookBinding.TransactionPhase phase,\n            ChatBot bot,\n            RequestScope requestScope,\n            Optional<ChangeSpec> changes) {\n\n        NotifyTopicLifeCycleHook<Chat> publisher = new NotifyTopicLifeCycleHook<>(\n                connectionFactory,\n                new ObjectMapper(),\n                JMSContext::createProducer\n        );\n\n        publisher.publish(new Chat(1, "Hello!"), CHAT);\n        publisher.publish(new Chat(2, "How is your day?"), CHAT);\n        publisher.publish(new Chat(3, "My name is " + bot.getName()), CHAT);\n    }\n}\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,t.jsxs)(n.p,{children:["Even though the ",(0,t.jsx)(n.a,{href:"https://github.com/yahoo/elide-spring-boot-example",children:"example project"})," runs GraphQL queries, mutations, and subscriptions in the same\nservice, it is highly recommended that subscriptions run as a ",(0,t.jsx)(n.em,{children:"separate service"}),". Because websockets are long-lived and\nstateful, they impose different resource constraints and performance characteristics from queries and mutations."]}),"\n",(0,t.jsx)(n.p,{children:"Running websockets as a standalone service is as simple as disabling JSON-API and GraphQL HTTP endpoints:"}),"\n",(0,t.jsxs)(s.A,{children:[(0,t.jsxs)(a.A,{value:"Spring",label:"Spring",default:!0,children:[(0,t.jsxs)(n.p,{children:["Configure in ",(0,t.jsx)(n.code,{children:"application.yaml"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"elide:\n  json-api:\n    enabled: false\n  graphql:\n    enabled: false\n    subscription:\n      enabled: true\n"})})]}),(0,t.jsxs)(a.A,{value:"upsert-to-modify-response",label:"Response",children:[(0,t.jsxs)(n.p,{children:["Override ",(0,t.jsx)(n.code,{children:"ElideStandaloneSettings"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:"public abstract class Settings implements ElideStandaloneSettings {\n    @Override\n    public boolean enableJsonApi() {\n        return false;\n    }\n\n    @Override\n    public boolean enableGraphQL() {\n        return false;\n    }\n\n    @Override\n    public ElideStandaloneSubscriptionSettings getSubscriptionProperties() {\n        return new ElideStandaloneSubscriptionSettings() {\n\n            @Override\n            public boolean enabled() {\n                return true;\n            }\n        };\n    }\n}\n"})})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,i)=>{i.d(n,{A:()=>a});i(6540);var t=i(53);const r={tabItem:"tabItem_Ymn6"};var s=i(4848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:i,children:n})}},1470:(e,n,i)=>{i.d(n,{A:()=>y});var t=i(6540),r=i(53),s=i(3104),a=i(6347),o=i(205),l=i(7485),c=i(1682),d=i(9466);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:r}}=e;return{value:n,label:i,attributes:t,default:r}}))}(i);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function h(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:i}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:r}=e,s=p(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=b({queryString:i,groupId:r}),[g,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(i);return[r,(0,t.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:r}),j=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=i(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(4848);function f(e){let{className:n,block:i,selectedValue:t,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),r=o[i].value;r!==t&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:i??n},n)}))})}function v(e){let{lazy:n,children:i,selectedValue:r}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.A)();return(0,x.jsx)(S,{...e,children:u(e.children)},String(n))}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);