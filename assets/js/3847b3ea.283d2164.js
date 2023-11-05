"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(5893),s=n(1151);const r={sidebar_position:2,title:"Setup"},o=void 0,l={id:"setup",title:"Setup",description:"This section discusses the one-time setup in order to develop [Jersey Webservice Template].",source:"@site/docs/setup.md",sourceDirName:".",slug:"/setup",permalink:"/jersey-webservice-template/docs/setup",draft:!1,unlisted:!1,editUrl:"https://github.com/QubitPi/jersey-webservice-template/tree/master/docs/docs/setup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Jersey Webservice Template Documentation",permalink:"/jersey-webservice-template/docs/intro"},next:{title:"Development",permalink:"/jersey-webservice-template/docs/development"}},a={},c=[{value:"Prepare for Local Development",id:"prepare-for-local-development",level:2},{value:"Installing Java &amp; Maven (on Mac)",id:"installing-java--maven-on-mac",level:3},{value:"Installing Docker Engine",id:"installing-docker-engine",level:3},{value:"Getting Source Code",id:"getting-source-code",level:2},{value:"Syncing up with jersey-webservice-template&#39;s Code Styles with IntelliJ",id:"syncing-up-with-jersey-webservice-templates-code-styles-with-intellij",level:3},{value:"Modifying Templates",id:"modifying-templates",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This section discusses the one-time setup in order to develop ",(0,i.jsx)(t.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"prepare-for-local-development",children:"Prepare for Local Development"}),"\n",(0,i.jsx)(t.h3,{id:"installing-java--maven-on-mac",children:"Installing Java & Maven (on Mac)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"brew update\nbrew install openjdk@17\n"})}),"\n",(0,i.jsx)(t.p,{children:"At the end of the last command prompt, something like the below will show up:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'For the system Java wrappers to find this JDK, symlink it with\n  sudo ln -sfn ...openjdk@17/libexec/openjdk.jdk .../JavaVirtualMachines/openjdk-17.jdk\n\nopenjdk@17 is keg-only, which means it was not symlinked into /usr/local,\nbecause this is an alternate version of another formula.\n\nIf you need to have openjdk@17 first in your PATH, run:\n  echo \'export PATH=".../openjdk@17/bin:$PATH"\' >> .../.bash_profile\n\nFor compilers to find openjdk@17 you may need to set:\n  export CPPFLAGS="-I.../openjdk@17/include"\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Make sure to execute the ",(0,i.jsx)(t.code,{children:"sudo ln -sfn"}),", ",(0,i.jsx)(t.code,{children:"echo 'export PATH=..."}),", and the ",(0,i.jsx)(t.code,{children:"export CPPFLAGS="})," commands above"]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsxs)(t.p,{children:["Maven uses a separate JDK version, which can be seen via ",(0,i.jsx)(t.code,{children:"mvn -v"}),". If it's not JDK 17, we should have Maven point\nto our JDK 17 using ",(0,i.jsx)(t.a,{href:"https://stackoverflow.com/a/2503679",children:"JAVA_HOME"}),":"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ /usr/libexec/java_home\n/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n\n$ export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home\n"})})]}),"\n",(0,i.jsx)(t.p,{children:"If we see something similar after typing the command with the version flag below we're good to go"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ java --version\nopenjdk 17.0.10 2021-01-19\nOpenJDK Runtime Environment (build 17.0.10+9)\nOpenJDK 64-Bit Server VM (build 17.0.10+9, mixed mode)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installing-docker-engine",children:"Installing Docker Engine"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://qubitpi.github.io/jersey-webservice-template/",children:"Jersey Webservice Template"})," has ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/src/test/groovy/com/qubitpi/ws/jersey/template/DataServletITSpec.groovy",children:"Docker-based integration tests"}),";\nit also supports ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/Dockerfile",children:"running template webserivce in Docker"}),". Docker can be\ninstalled by following its ",(0,i.jsx)(t.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"official instructions"})]}),"\n",(0,i.jsx)(t.h2,{id:"getting-source-code",children:"Getting Source Code"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:QubitPi/jersey-webservice-template.git\ncd jersey-webservice-template\n"})}),"\n",(0,i.jsx)(t.h3,{id:"syncing-up-with-jersey-webservice-templates-code-styles-with-intellij",children:"Syncing up with jersey-webservice-template's Code Styles with IntelliJ"}),"\n",(0,i.jsxs)(t.p,{children:["For the moment, we have distilled the most important code style conventions with respect to\njersey-webservice-template's code as IntelliJ settings. If IntelliJ is used for IDE, we may import these code style\nsettings by importing the ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/Jersey-Webservice-Template-Project-intellij-code-style.xml",children:"jersey-webservice-template-Project-intellij-code-style.xml"}),' file in the root\nof the repo. The setting for the project will appear as a new Scheme named "jersey-webservice-template-Project" under\nIDE\'s ',(0,i.jsx)(t.code,{children:"Editor -> Code Style"})," section."]}),"\n",(0,i.jsx)(t.h2,{id:"modifying-templates",children:"Modifying Templates"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Setup ",(0,i.jsx)(t.a,{href:"ci-cd",children:"CI/CD"})]}),"\n"]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Renaming ",(0,i.jsx)(t.code,{children:"src"})," package"]}),"\n",(0,i.jsxs)(t.li,{children:["Setup SonarCloud Project and replace all ",(0,i.jsx)(t.code,{children:"QubitPi_jersey-webservice-template"})," with project ID accordingly"]}),"\n",(0,i.jsxs)(t.li,{children:["Update links by replacing all ",(0,i.jsx)(t.code,{children:"jersey-webservice-template"}),", ",(0,i.jsx)(t.code,{children:"Jersey Webservice Template"}),", and ",(0,i.jsx)(t.code,{children:"QubitPi"})," (including\ncases) accordingly"]}),"\n",(0,i.jsxs)(t.li,{children:["Update ",(0,i.jsx)(t.a,{href:"https://github.com/QubitPi/jersey-webservice-template/blob/master/src/main/java/com/qubitpi/ws/jersey/template/application/ResourceConfig.java",children:"endpoint package"})," accordingly"]}),"\n",(0,i.jsx)(t.li,{children:'Update Copyright holder "Jiaqi Liu"'}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);