"use strict";function b(a,b){if(null==a)return{};var d,e,f=c(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(e=0;e<g.length;e++)d=g[e],!(0<=b.indexOf(d))&&Object.prototype.propertyIsEnumerable.call(a,d)&&(f[d]=a[d])}return f}function c(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function d(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function f(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?d(Object(b),!0).forEach(function(c){i(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):d(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function i(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function j(a,b){return m(a)||l(a,b)||k()}function k(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function l(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function m(a){if(Array.isArray(a))return a}function n(a){"@babel/helpers - typeof";return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},n(a)}var o=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)p(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(q(a.children[h]=v(a.children[h]),c,d));return a.node=f},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(u[x]);)s(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(u[z]);)s(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(u[x]=v(u[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(s(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,u[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===n(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||c.type!==a||t(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){n(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=o(j,k([i(b)]),n)),d&&!c&&g(p,c=!0)),b},n=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?n(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?n(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](n,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=s(e.parentNode,e,h,h=u(d(b)),l)};n(a.init)}}}(),q=o.h,e=o.app,h=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===n(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return q(a,{},b);return q(a,b,d)}},r=h("a"),a=h("button"),s=h("circle"),t=h("div"),u=h("footer"),v=h("g"),g=h("h1"),w=h("h2"),x=h("h3"),y=h("h4"),z=h("h5"),A=h("header"),B=h("img"),C=h("input"),D=h("label"),E=h("li"),F=h("link"),G=h("main"),H=h("meta"),I=h("nav"),J=h("p"),p=h("path"),K=h("script"),L=h("span"),M=h("svg"),N=h("title"),O=h("ul"),P=h("view"),Q={description:"@magic static and serverless webapp framework.",gdpr:{allowed:[],show:!1},logo:"/logo.png",logotext:"@magic",menu:[{text:"about @magic",to:"/"},{items:[{text:"accordion",to:"#gl-magic-modules-li-accordion"},{text:"gdpr",to:"#gl-magic-modules-li-gdpr"},{text:"git-badges",to:"#gl-magic-modules-li-git-badges"},{text:"git-list",to:"#gl-magic-modules-li-git-list"},{text:"hero",to:"#gl-magic-modules-li-hero"},{text:"language-switch",to:"#gl-magic-modules-li-language-switch"},{text:"library-list",to:"#gl-magic-modules-li-library-list"},{text:"messages",to:"#gl-magic-modules-li-messages"},{text:"module-list",to:"#gl-magic-modules-li-module-list"},{text:"pre",to:"#gl-magic-modules-li-pre"},{text:"sound-cloud",to:"#gl-magic-modules-li-sound-cloud"},{text:"theme-list",to:"#gl-magic-modules-li-theme-list"},{text:"video-embed",to:"#gl-magic-modules-li-video-embed"}],text:"magic-modules",to:"/magic-modules/"},{items:[{text:"docs",to:"#gl-magic-themes-li-docs"}],text:"magic-themes",to:"/magic-themes/"},{items:[{text:"db",to:"#gl-magic-libraries-li-db"},{text:"gql",to:"#gl-magic-libraries-li-gql"},{text:"is",to:"#gl-magic-libraries-li-is"},{text:"json",to:"#gl-magic-libraries-li-json"},{text:"uri",to:"#gl-magic-libraries-li-uri"}],text:"magic-libraries",to:"/magic-libraries/"}],pageClass:{},root:"/",theme:"dark",title:"@magic",url:"/"},R={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},S=function(a){var b,c=a.blog,d=a.link,e=a.month,g=a.url,h=a.year,i=Object.entries(c[h][e]),k=[e];return d?b="".concat(d).concat(e,"/"):k.push(" - ",h),[x(b?ba({to:b},k):k),i.map(function(c){var d=j(c,2),e=d[0],g=d[1];return g.map(function(c){return T(f({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},T=function(a){return t([y([a.day,"-",a.month,"-",a.year," - ",ba({to:a.name},a.title)]),J(a.description)])},U=function(a){var b,c=a.link,d=a.year,e=a.blog,g=a.url;return c?b="".concat(c).concat(d,"/"):g.endsWith("".concat(d,"/"))&&(b=g),t([w(c?ba({to:b},d):d),Object.entries(e[d]).map(function(c){var d=j(c,2),e=d[0],g=d[1];return S(f({},a,{month:e,days:g,link:b}))})])},V=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[t({class:"Container"},[a,t({class:"Credits"},["made with a few bits of ",ba({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])])},W=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Information":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.noDataText,l=void 0===k?"Awesome.":k,m=c.allowTitle,n=void 0===m?"Allow:":m,o=c.allowAllText,q=void 0===o?"All":o,r=c.allowText,u=void 0===r?"Selected":r,w=c.denyText,A=void 0===w?"None":w;if(!f)return t({class:"Gdpr"},M({class:"ShowHide",onclick:[ka.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[v([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),s({cx:"192",cy:"128",r:"32"}),s({cx:"128",cy:"256",r:"32"}),s({cx:"288",cy:"384",r:"32"}),s({cx:"272",cy:"272",r:"16"}),s({cx:"400",cy:"336",r:"16"}),s({cx:"176",cy:"368",r:"16"})])]));var B=!!e.length;return t({class:"Gdpr"},[t({class:"Container"},[h&&x(h),j&&J(j),B&&[O(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return E({class:"Cookie"},[C({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[ka.gdpr.toggleAllow,{name:b}]}),(d||e)&&D({for:b},[d&&y(d),e&&J(e)])])}))],B?[z(n),C({class:"allow all",onclick:ka.gdpr.allow,type:"button",value:q}),C({class:"allow",onclick:ka.gdpr.close,type:"button",value:u}),C({class:"allow none",onclick:ka.gdpr.deny,type:"button",value:A})]:C({onclick:ka.gdpr.close,value:l,type:"button"})])])},X=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=j(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=j(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return i.length?O({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return E([ba({to:b},$({src:c}))])})):void 0},Y=function(a){var b=a.items,c=void 0===b?[]:b,d=a.org,e=a.host,g=void 0===e?"github":e,h=a.header,i=a.desc,j=void 0===i?a.description:i,k={};return a["class"]?!a["class"].includes("GitList")&&(k["class"]="GitList ".concat(a["class"])):k["class"]="GitList",k.id=a.id?a.id:d,k.id.startsWith("gl")||(k.id="gl-".concat(k.id)),t(k,[h&&w(h),j&&t({class:"description"},j),O({id:"".concat(k.id,"-ul")},[c.map(function(a){return Y.Item(f({org:d,id:"".concat(k.id,"-li"),host:g},a))})])])};Y.Item=function(a){var b=a.name,c=a.org,d=a.id,e=a.host,f=a.desc||a.description;return E({id:"".concat(d,"-").concat(b),class:"GitListItem"},[x([ba({to:"https://".concat(e,".com/").concat(c,"/").concat(b)},"@".concat(c,"/").concat(b))]),f&&J(f),X("".concat(c,"/").concat(b)),ba({to:"https://".concat(c,".").concat(e,".io/").concat(b)},"docs / demo")])};var Z=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},c=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.logo,e=a.menu,f=a.logotext,g=b(a,["logo","menu","logotext"]);return d||e||f?A({class:"Header"},[(d||f)&&ba({to:g.root,class:"Logo"},[d&&$(d),f&&L(f)]),e&&ca({state:g,items:e}),c]):void 0},$=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)},_=function(){return Y({org:"magic-libraries",header:[ba({to:"https://magic-libraries.github.io"},"@magic-libraries")],desc:["below is a collection of the available @magic client libraries."],items:[{name:"db",description:"key => value store using localstorage"},{name:"gql",description:["the @magic-libraries/gql module"," encodes template strings to graphql queries ready to be sent to a server."]},{name:"is",description:"the @magic-libraries/is module unifies the javascript type testing apis."},{name:"json",description:["the @magic-libraries/json module parses and stringifies json."," it also returns errors instead of throwing them."]},{name:"uri",description:["the @magic-libraries/uri module"," encodes objects to uri strings and decodes uri strings to objects."]}]})},aa=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:ka.changeTheme},M({viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ba=function(a,c){var d=a.to,e=a.action,f=void 0===e?ka.go:e,g=b(a,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=b(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,ja.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),r(l,[i,c])},ca=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,g=a.state,h=g.url,i=g.hash,j=g.root;return i&&!h.endsWith(i)&&(h+="#".concat(i)),I({className:c},O(e.map(function(a){return da(f({},a,{url:h,root:j,collapse:void 0===d||d}))})))},da=function(a){var c=a.text,d=a.items,e=void 0===d?[]:d,g=a.url,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=b(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;j&&p&&("-"===o||"#"===o)&&(n=j+n);var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/"),l.to===g&&(m["class"].active=!0);var r=[],s=g.startsWith(l.to)||!k;return s&&e.length&&(r=O(e.map(function(a){return da(f({parentTo:l.to,url:g,root:h,collapse:k},a))}))),E(m,[l.to?ea(l,c):L(l,c),r])},ea=function(a,b){return ba(a,b)},fa=function(){return Y({class:"ModuleList",org:"magic-modules",header:[ba({to:"https://magic-modules/github.io"},"@magic-modules")],description:["modules are the grimoires of ",ba({to:"https://magic.github.io/core"},"@magic"),". modules add both client and server functionality to your @magic app."],items:[{name:"accordion",description:"Accordion shows a list of items that horizontally open/close."},{name:"gdpr",description:"Gdpr compliant popup that allows users to allow or deny cookies."},{name:"git-badges",description:"GitBadges shows a list of github repository status badges."},{name:"git-list",description:"show a list of git repositories like the one you are looking at."},{name:"hero",description:"Hero modules are full screen top of page content."},{name:"language-switch",description:["LanguageSwitch provides"," file hierarchy based multilanguage support for magic."]},{name:"light-switch",description:"dark/light theme color switch button."},{name:"library-list",description:"LibraryList shows a list of all @magic-libraries libraries."},{name:"messages",description:"Messages shows popup messages."},{name:"module-list",description:"ModuleList shows the list of @magic-modules you are looking at."},{name:"pre",description:"Pre allows you to display javascript code with syntax highlighting."},{name:"sound-cloud",description:"embed soundcloud track, playlist and user widgets"},{name:"theme-list",description:"ThemeList shows a list of all @magic-themes."},{name:"video-embed",description:["VideoEmbed embeds videos from any video hoster using iframes. "," comes with default support for vimeo and youtube."]}]})},ga=function(a,b){var c=a.page,d=a.state;c=c?c(d):"404 - not found";var e={id:"Magic",class:d.pageClass};return G(e,t({class:{Wrapper:!0}},[ha({state:d,page:c}),b]))},ha=function(a){var b=a.page,c=a.state;return[Z(c),t({class:"Page",id:"page"},b),V(c)]},ia=function(){return Y({org:"magic-themes",header:[ba({to:"https://magic-themes.github.io"},"@magic-themes")],desc:["below is a collection of the available @magic app themes."],items:[{name:"docs",description:"the @magic documentation theme. used in all @magic docs."}]})},ja={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=ja.db.init(),g=ja.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=ja.db.init(),f=void 0;return d&&e[d]&&(f=ja.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=ja.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},ka={changeTheme:function changeTheme(a){return f({},a,{pageClass:f({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[ja.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[ka.gdpr.show,{show:!1}]}]]},close:function close(a){return[f({},a,{gdpr:f({},a.gdpr,{show:!1})}),[ja.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[ka.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[f({},a,{gdpr:f({},a.gdpr,{allowed:[]})}),[ja.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[ka.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?f({},a,{gdpr:f({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,g=e.allowed.includes(d);return g?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),f({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=j(d,2),g=e[0],h=e[1],i=void 0===h?"":h;if(g===a.url&&i===a.hash)return window.location.hash=i,a;var k=window,l=k.scrollY,m=a.titles[g];if(m&&(document.title=a.title=m),window.history.pushState({url:g,hash:i,scrollY:l},a.title,c),g===a.url)window.location.hash=i;else if(!i){var n=document.getElementsByTagName("html"),o=j(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return f({},a,{url:g,hash:i,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var g=0;return b.state&&(d=b.state.url,e=b.state.hash,g=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:g,behavior:"smooth"}),f({},a,{url:d,hash:e})}},la={"/":function _(){return[g([ba({to:"/"},"@magic")]),J("magic is a module/component based generator for static pages and serverless deployments."),J("goal of the project is to keep the client boilerplate footprint minimal yet easily extendable"),X("magic/core"),w({id:"philosophy"},"philosophy"),J(["@magic aims to make it easy to stitch together any kind of webapp."," by providing simple, well documented and self contained modules,"," @magic makes it possible to create stunningly fast"," webpages with minimal cognitive overhead."]),w({id:"privacy"},"privacy"),J(["@magic does not spy on it's users."," we not only try to be legally compliant,"," but to be ethical and do the right thing for all users of the web."]),w({id:"buzzwords"},"why should i use magic?"),x("@magic is tiny"),J(["~4 kb javascript boilerplate."," usually, all the javascript in your homepage will be 30-60kb big (after unpacking),"," 10-30kb get transmitted from the server to the client."," this complete documentation page you are reading with all sub pages loads about 40kb of unpacked,"," 15kb of gzipped javascript."]),x("@magic works without javascript"),J(["most of the functionality works without javascript,"," some buttons and realtime user interactions obviously won't,"," but @magic always tries to provide a non-javascript fallback via css."]),x("@magic generates static pages"),J(["this makes free hosting (using github or gitlab pages) possible."," and it's easy."]),J(["@magic publishes to ",ba({to:"https://github.com"},"github"),", ",ba({to:"https://gitlab.com"},"gitlab")," and any other git-pages enabled hosting service."]),x("serverless / faas"),J(["automagically generates "," serverless lambdas, derived from the ",ba({to:"https://github.com/magic-modules/"},"@magic-modules")," you use in your pages."," this makes visitor statistics, user authentication and authorization,"," chat, and all other server side services possible."])]},"/404/":function _(){return t("404 - not found")},"/magic-libraries/":function magicLibraries(){return _()},"/magic-modules/":function magicModules(){return fa()},"/magic-themes/":function magicThemes(){return ia()}};e({init:[f({},Q,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[ja.db.get,{key:"magic-gdpr",action:ka.gdpr.show}]]],subscriptions:function subscriptions(){return[[R.listenPopState,ka.pop]]},view:function(a){var b=la[a.url]?a.url:"/404/",c=la[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.titles={},ga({page:c,state:a},[W(a),aa(a)])},node:document.getElementById("Magic")});