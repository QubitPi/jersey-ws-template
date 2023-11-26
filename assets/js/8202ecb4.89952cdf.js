"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4482],{7893:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var n=a(5893),s=a(1151);const i={slug:"java-ee",title:"What is Java EE",authors:"jiaqi",tags:["Java","Standard"]},r=void 0,o={permalink:"/jersey-webservice-template/blog/java-ee",editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/blog/2020-10-26-java-ee/index.md",source:"@site/blog/2020-10-26-java-ee/index.md",title:"What is Java EE",description:"[//]: # (Copyright Jiaqi Liu)",date:"2020-10-26T00:00:00.000Z",formattedDate:"October 26, 2020",tags:[{label:"Java",permalink:"/jersey-webservice-template/blog/tags/java"},{label:"Standard",permalink:"/jersey-webservice-template/blog/tags/standard"}],readingTime:5.645,hasTruncateMarker:!0,authors:[{name:"Jack",title:"Maintainer of Jersey Webservice Template",url:"https://github.com/QubitPi",imageURL:"https://avatars.githubusercontent.com/u/16126939?v=4",key:"jiaqi"}],frontMatter:{slug:"java-ee",title:"What is Java EE",authors:"jiaqi",tags:["Java","Standard"]},unlisted:!1,prevItem:{title:"Java 8 Stream",permalink:"/jersey-webservice-template/blog/java-stream"},nextItem:{title:"Refer to Environment Variables in POM",permalink:"/jersey-webservice-template/blog/env-var-in-pom"}},l={authorsImageUrls:[void 0]},h=[{value:"Evolution of Java EE",id:"evolution-of-java-ee",level:2},{value:"History",id:"history",level:3},{value:"In Transition",id:"in-transition",level:3},{value:"The Future",id:"the-future",level:3},{value:"The JCP -&gt; EFSP",id:"the-jcp---efsp",level:3},{value:"JSRs",id:"jsrs",level:3},{value:"Glassfish",id:"glassfish",level:3},{value:"TCK",id:"tck",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.oracle.com/java/technologies/java-ee-glance.html",children:"Java EE"})," is a collection of specifications for developing\nand deploying enterprise applications."]}),"\n",(0,n.jsx)(t.p,{children:"In general, enterprise applications refer to software hosted on servers that provide the applications that support the\nenterprise."}),"\n",(0,n.jsx)(t.p,{children:"The specifications (defined by Sun) describe services, application programming interfaces (APIs), and protocols."}),"\n",(0,n.jsx)(t.p,{children:"The Java EE product provider is typically an application-server, web-server, or database-system vendor who provides\nclasses that implement the interfaces defined in the specifications. These vendors compete on implementations of the\nJava EE specifications."}),"\n",(0,n.jsx)(t.p,{children:"When a company requires Java EE experience what are they really asking for is experience using the technologies that\nmake up Java EE. Frequently, a company will only be using a subset of the Java EE technologies."}),"\n",(0,n.jsxs)(t.p,{children:["A reference implementation of Java EE is ",(0,n.jsx)(t.a,{href:"https://javaee.github.io/glassfish/documentation",children:"GlassFish"})]}),"\n",(0,n.jsx)(t.h2,{id:"evolution-of-java-ee",children:"Evolution of Java EE"}),"\n",(0,n.jsx)(t.p,{children:"Ever heard of Java EE? How about Java 2EE, J2EE, or now Jakarta EE? Actually, these are all different names for the same\nthing: a set of enterprise specifications that extend Java SE. In this section, we discuss the evolution of Java EE."}),"\n",(0,n.jsx)(t.h3,{id:"history",children:"History"}),"\n",(0,n.jsxs)(t.p,{children:["In the first version of Java, Java enterprise extensions were simply\n",(0,n.jsx)(t.a,{href:"http://titanium.cs.berkeley.edu/doc/java-langspec-1.0/",children:"a part of the core JDK"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, as part of Java 2 in 1999, these extensions were broken out of the standard binaries, and J2EE, or\n",(0,n.jsx)(t.a,{href:"https://www.oracle.com/java/technologies/appmodel.html",children:"Java 2 Platform Enterprise Edition"}),", was born. It would keep\nthat name until 2006."]}),"\n",(0,n.jsxs)(t.p,{children:["For Java 5 in 2006, J2EE was renamed to Java EE or Java Platform Enterprise Edition. That name would stick all the way\nto September 2017, when ",(0,n.jsx)(t.strong,{children:"something major happened"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["In September 2017,\n",(0,n.jsx)(t.a,{href:"https://www.redhat.com/en/blog/java-ee-moves-eclipse",children:"Oracle decided to give away the rights for Java EE to the Eclipse Foundation"}),"\n(the language is still owned by Oracle)"]}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Error loading java-evolution.png",src:a(7759).Z+"",width:"197",height:"161"})}),"\n",(0,n.jsx)(t.h3,{id:"in-transition",children:"In Transition"}),"\n",(0,n.jsxs)(t.p,{children:["Actually, the Eclipse Foundation legally ",(0,n.jsx)(t.em,{children:"had to"}),' rename Java EE. That\'s because Oracle has the rights over the "Java"\nbrand.']}),"\n",(0,n.jsxs)(t.p,{children:["So to choose the new name, the community voted and picked: ",(0,n.jsx)(t.strong,{children:"Jakarta EE"}),". In a certain way, it's still JEE."]}),"\n",(0,n.jsx)(t.p,{children:"This is still an evolving story, though, and the dust hasn't completely settled. For example, while Oracle open-sourced\nthe source code, they did not open-source all the documentation. There's still a lot of discussion over this matter\nbecause of legal issues that make it tricky to open-source documentation related to, for example, JMS and EJB."}),"\n",(0,n.jsx)(t.p,{children:"It's not clear yet if new Eclipse Foundation documentation will be able to refer to the originals."}),"\n",(0,n.jsx)(t.p,{children:"Also, curiously, the Eclipse Foundation can't create any new Java packages using the javax namespace, but it can create\nnew classes and subclasses under the existing ones."}),"\n",(0,n.jsxs)(t.p,{children:["The transition also means ",(0,n.jsx)(t.a,{href:"https://www.eclipse.org/projects/efsp/",children:"a new process for adding specifications"})," to Jakarta\nEE. To understand it better, let's take a look at what that process was like under Oracle and how it changes under the\nEclipse Foundation in the next section."]}),"\n",(0,n.jsx)(t.h3,{id:"the-future",children:"The Future"}),"\n",(0,n.jsx)(t.p,{children:'Historically, in order for a feature to make it into "EE", we needed three things:'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"a specification,"}),"\n",(0,n.jsx)(t.li,{children:"a reference implementation, and"}),"\n",(0,n.jsx)(t.li,{children:"tests"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These three things could be provided by anyone in the community, and an Executive Committee would decide when these were\nready to add to the language."}),"\n",(0,n.jsx)(t.p,{children:"To better understand the past process, let's take a closer look at what JSRs(specification), Glassfish(implementation),\nand the TCK(test) are and how they embodied new EE features."}),"\n",(0,n.jsx)(t.h3,{id:"the-jcp---efsp",children:"The JCP -> EFSP"}),"\n",(0,n.jsxs)(t.p,{children:["In the past, the process by which a new EE feature was born was called the Java Community Process\n(",(0,n.jsx)(t.a,{href:"https://jcp.org/en/home/index",children:"JCP"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["Java SE still uses the JCP today. But, since EE has changed its ownership, from Oracle to the Eclipse Foundation, we\nhave a new and separate process for that. It's the Eclipse Foundation Specification Process\n(",(0,n.jsx)(t.a,{href:"https://www.eclipse.org/projects/efsp/",children:"EFSP"}),") and it's an extension of the\n",(0,n.jsx)(t.a,{href:"https://www.eclipse.org/projects/dev_process",children:"Eclipse Development Process"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["There are\n",(0,n.jsx)(t.a,{href:"https://blogs.eclipse.org/post/tanja-obradovic/how-eclipse-foundation-specification-process-efsp-different-java-community",children:"some important differences"}),',\nthough, mostly around "Transparency, Openness, Shared Burden and Vendor Neutrality"". The EFSP organizers, for example,\nenvision collaborative working groups that are vendor-neutral, a certification process that is self-service, and an\norganization that operates and governs as a meritocracy.']}),"\n",(0,n.jsx)(t.h3,{id:"jsrs",children:"JSRs"}),"\n",(0,n.jsx)(t.p,{children:"In the JCP, the first step to adding a feature to EE was to create a JSR or Java Specification Request. The JSR was a\nbit like the interface for an EE feature. The JCP Executive Committee reviewed and approved a completed JSR, and then\nJSR contributors would code it up and make it available to the community."}),"\n",(0,n.jsxs)(t.p,{children:["A good example of this was ",(0,n.jsx)(t.a,{href:"https://jcp.org/en/jsr/detail?id=339",children:"JSR-339"}),"  - or JAX-RS - which was originally proposed\nin 2011, approved by JCP in 2012 and finally released in 2013."]}),"\n",(0,n.jsxs)(t.p,{children:["And while the community could always weigh in while a specification was under discussion, time showed that an\nimplementation-first approach \u2013 like in the case of ",(0,n.jsx)(t.a,{href:"https://jcp.org/en/jsr/detail?id=310",children:"JSR 310"}),", ",(0,n.jsx)(t.code,{children:"java.time"}),", and\nJoda Time - tended to create more widely-accepted features and APIs."]}),"\n",(0,n.jsx)(t.p,{children:'So, the EFSP reflects this code-first view in its stated goal: "EFSP will be based on hands-on experimenting and coding\nfirst, as a way to prove something is worthy of documenting in a specification".'}),"\n",(0,n.jsx)(t.h3,{id:"glassfish",children:"Glassfish"}),"\n",(0,n.jsx)(t.p,{children:"Then, as part of the JCP, a JSR needed a reference implementation. This is a bit like the class that implements the\ninterface. A reference implementation helps developers of compatible libraries or other organizations that want to\ncreate their own implementation of the spec."}),"\n",(0,n.jsx)(t.p,{children:"For Java EE features, the JCP used Glassfish for its reference implementations."}),"\n",(0,n.jsx)(t.p,{children:"And while this centralization on Glassfish simplified the discovery process for implementers, that centralization also\nrequired more governance and had a tendency to favor one vendor over another."}),"\n",(0,n.jsxs)(t.p,{children:["Hence, the EFSP doesn't require a reference implementation, but instead only a compatible implementation. Simply put,\nthis subtle change makes so that ",(0,n.jsx)(t.strong,{children:"implementations inside of a central architecture, like Glassfish, won't be\ninadvertently preferred by the foundation"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"tck",children:"TCK"}),"\n",(0,n.jsxs)(t.p,{children:["Finally, the JCP required that EE features be tested through the Technology Compatibility Kit, or\n",(0,n.jsx)(t.a,{href:"https://projects.eclipse.org/projects/ee4j.jakartaee-tck",children:"TCK"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The TCK was a suite of tests to validate a specific EE JSR. Simply put, in order to comply with Java EE, an application\nserver needs to implement all of its JSRs and pass all the tests on the designated TCK."}),"\n",(0,n.jsx)(t.p,{children:"Not much changes here. Oracle open-sourced the TCK as well as the EE JSRs. Of course, all future documents and the TCK\nwill be open-source."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},7759:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);