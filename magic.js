"use strict";function _toArray(a){return _arrayWithHoles(a)||_iterableToArray(a)||_nonIterableRest()}function _iterableToArray(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){_defineProperty(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function _arrayWithHoles(a){if(Array.isArray(a))return a}function _typeof(a){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}var _ref=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=u(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(v[x]);)r(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(v[z]);)r(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(v[x]=u(v[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(r(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,v[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},t=function(a){return"object"===_typeof(a)?a:w(a)},u=function(b,c){return b.type===a?((!c||c.type!==a||s(c.lazy,b.lazy))&&((c=t(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,void 0,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(t(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&x(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=t(d(b)),l)};o(a.init)}}}(),h=_ref.h,app=_ref.app,C=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===_typeof(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return h(a,{},b);return h(a,b,d)}},a=C("a"),b=C("b"),button=C("button"),circle=C("circle"),code=C("code"),div=C("div"),footer=C("footer"),g=C("g"),h1=C("h1"),h2=C("h2"),h3=C("h3"),h4=C("h4"),h5=C("h5"),header=C("header"),img=C("img"),input=C("input"),label=C("label"),li=C("li"),link=C("link"),main=C("main"),meta=C("meta"),nav=C("nav"),ol=C("ol"),p=C("p"),path=C("path"),pre=C("pre"),script=C("script"),span=C("span"),svg=C("svg"),title=C("title"),ul=C("ul"),view=C("view"),initialState={branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},gdpr:{allowed:[],show:!1},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"about",to:"/#about"},{text:"usage",to:"/getting-started/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],pageClass:{},pages:{"/canary/":{title:"@magic - warrant canary"},"/privacy/":{title:"@webboot - privacy policy"}},root:"/",theme:"dark",title:"@magic",url:"/"},helpers={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Bird=function(){return svg({class:"Bird",viewBox:"0 0 839 839",height:"20",width:"20"},[path({d:"M431 536a550 550 0 00392 159c8 0 13-9 8-16-51-69-260-339-454-453 20-12 36-31 46-52l46-18c7-2 9-11 3-16l-41-40C408 40 357 0 307 0h-1C123 49 91 268 180 392c12 67 53 182 184 234 24 9 46 17 68 23v106H0v84h840v-84H508c2-37 40-87 39-87-142-98-223-206-224-347 10 82 58 164 108 215zM347 71a25 25 0 010 50c-14-1-24-12-25-25 1-14 14-25 25-25z"})])},BlogMonth=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[h3(b?Link({to:b},i):i),h.map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return f.map(function(c){return BlogTeaser(_objectSpread({},a,{},c.state,{name:c.name,link:b,day:e}))})})]},BlogTeaser=function(a){return div([h4([a.day,"-",a.month,"-",a.year," - ",Link({to:a.name},a.title)]),p(a.description)])},BlogYear=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),div([h2(c?Link({to:b},d):d),Object.entries(e[d]).map(function(c){var d=_slicedToArray(c,2),e=d[0],f=d[1];return BlogMonth(_objectSpread({},a,{month:e,days:f,link:b}))})])},Credits=function(){return div({class:"Credits"},["made with a few bits of ",Link({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])},Footer=function(a,b){var c=a.footer,d=c.one,e=c.two,f=c.three;return footer({class:"Footer"},[div({class:"Container"},[(d||e||f)&&div({class:"Menus"},[d&&div({class:"Child Info"},[d.title&&h2(d.title),d.before&&d.before.map(function(b){return p(b)}),d.menu&&ul([d.menu.map(function(a){return li(Link(a))})]),d.after&&d.after.map(function(b){return p(b)})]),e&&div({class:"Child"},[e.title&&h2(e.title),e.before&&e.before.map(function(b){return p(b)}),e.menu&&ul([e.menu.map(function(a){return li(Link(a))})]),e.after&&e.after.map(function(b){return p(b)})]),f&&div({class:"Child"},[f.title&&h2(f.title),f.before&&f.before.map(function(b){return p(b)}),f.menu&&ul([f.menu.map(function(a){return li(Link(a))})]),f.after&&f.after.map(function(b){return p(b)})])]),Credits(a),b])])},Gdpr=function(a){var b=a.gdpr,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,h=c.title,i=void 0===h?"Privacy Information":h,j=c.content,k=void 0===j?"This app neither saves, collects, nor shares any data about you.":j,l=c.noDataText,m=void 0===l?"Awesome.":l,n=c.allowTitle,o=void 0===n?"Allow:":n,q=c.allowAllText,r=void 0===q?"All":q,s=c.allowText,t=void 0===s?"Selected":s,u=c.denyText,v=void 0===u?"None":u;if(!f)return div({class:"Gdpr"},svg({class:"ShowHide",onclick:[actions.gdpr.show,{show:!0}],viewBox:"0 0 512 512"},[g([path({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),circle({cx:"192",cy:"128",r:"32"}),circle({cx:"128",cy:"256",r:"32"}),circle({cx:"288",cy:"384",r:"32"}),circle({cx:"272",cy:"272",r:"16"}),circle({cx:"400",cy:"336",r:"16"}),circle({cx:"176",cy:"368",r:"16"})])]));var w=!!e.length;return div({class:"Gdpr"},[div({class:"Container"},[i&&h3(i),k&&p(k),w&&[ul(e.map(function(a){var b=a.name,d=a.title,e=a.content,f=a.allowed;return li({class:"Cookie"},[input({type:"checkbox",title:"allow ".concat(b," data"),id:b,checked:c.allowed.includes(b),onchange:[actions.gdpr.toggleAllow,{name:b}]}),(d||e)&&label({for:b},[d&&h4(d),e&&p(e)])])}))],w?[h5(o),input({class:"allow all",onclick:actions.gdpr.allow,type:"button",value:r}),input({class:"allow",onclick:actions.gdpr.close,type:"button",value:t}),input({class:"allow none",onclick:actions.gdpr.deny,type:"button",value:v})]:input({onclick:actions.gdpr.close,value:m,type:"button"})])])},GitBadges=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,i=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{src:"https://img.shields.io/node/v/@magic/core"}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=_slicedToArray(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=_slicedToArray(b,2),d=c[0],e=c[1];return e(a[d])});return i.length?ul({class:"GitBadges"},i.map(function(a){var b=a.to,c=a.src;return b?li(Link({to:b},Img({src:c}))):li(Img({src:c}))})):void 0},Header=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.title,f=_objectWithoutProperties(a,["logo","menu","title"]);if(c||d){var g=f.branding,h=void 0===g?[]:g,i=f.root;Array.isArray(h)||(h=[h]);var j=h,k=_toArray(j),l=k[0],m=k.slice(1);return header({class:"Header"},div([Logo({root:i}),l&&Link({to:i,class:"branding"},[span(l),m]),d&&Menu({state:f,items:d})]))}},Hero=function(a){var b=a.state,c=b.hero,d=Array.isArray(c.title)?c.title:[c.title],e=c.content;return e&&!Array.isArray(e)&&(e=[e]),div({id:"hero",class:"Hero"},[div({class:"LogoWrapper"},[Logo(b),c.title&&h1([span(d[0]),d[1]]),c.description&&p(c.description)]),e&&div({class:"content"},e.map(function(b){return p(b)})),c.menu&&Menu({items:c.menu,state:b})])},Img=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),img(a)},LightSwitch=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return button({class:"LightSwitch",onclick:actions.changeTheme},svg({viewBox:"0 0 352 460"},[path({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),path({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),path({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},Link=function(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],d=b.to,e=b.action,f=void 0===e?actions.go:e,g=_objectWithoutProperties(b,["to","action"]),h=g.href,i=g.text,j=g.nofollow,k=g.noreferrer,l=_objectWithoutProperties(g,["href","text","nofollow","noreferrer"]);d=d||h||"",l.href=d;var m="/"===d[0]||"#"===d[0];return m?l.onclick=[f,lib.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),a(l,[i,c])},Logo=function(a){var b=a.root;return Link({to:b,class:"Logo"},[svg({viewBox:"0 0 666 500",height:"50",width:"66"},[path({d:"M334 0C206-3 81 75 30 193c-43 96-41 215 13 307h583c84-150 32-364-117-453C457 16 395 0 334 0z",fill:"#639"}),path({d:"M335 5L44 490h583zm0 64l95 157c-51-46-142-41-189 0zm-3 182c38 1 80 28 97 68l16 1v27l-16 1c-10 24-31 26-43 32-8 27 16 37 22 8l23 4c-13 54-77 47-70-7l-17 1-2 36-25 3v-40c-31-4-66-8-80-37l-17-1 1-29 16 1c10-39 50-68 95-68zm0 25c-40 0-75 26-73 55 12 33 120 42 144-1-6-39-52-54-71-54zm0 12c15 0 28 13 28 29s-13 29-28 29c-16 0-30-13-30-29s14-29 30-29zm-139 16c-19 64 36 137 86 156H99zm285 0l94 156H392c63-23 101-92 86-156z",fill:"#fff"})])])},Menu=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),nav({className:c},ul(e.map(function(a){return MenuItem(_objectSpread({},a,{url:g,root:i,collapse:void 0===d||d}))})))},MenuItem=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,e=a.url,f=a.root,g=a.parentTo,h=void 0===g?void 0:g,j=a.collapse,k=_objectWithoutProperties(a,["text","items","url","root","parentTo","collapse"]),l={class:{}},i=k.to;f&&i.startsWith("/")&&(i=i.substr(1));var m=k.to[0];h&&("-"===m||"#"===m)&&(i=h+i);var n=i.startsWith(f);f&&("/"===m||"-"===m||"#"===m)&&!n&&(i=f+i),k.to=i.replace(/\/\//g,"/"),k.to===e&&(l["class"].active=!0);var o=[],p=e.startsWith(k.to)||!j;return p&&d.length&&(o=ul(d.map(function(a){return MenuItem(_objectSpread({parentTo:k.to,url:e,root:f,collapse:j},a))}))),li(l,[k.to?MenuLink(k,b):span(k,b),o])},MenuLink=function(a,b){return Link(a,b)},Page=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return main(e,div({class:{Wrapper:!0}},[Header(d),div({class:"Page",id:"page"},c(d)),Footer(d),b]))},Pre=function(a,b){"string"==typeof a?a={content:a}:b?a=_objectSpread({content:b},a):Array.isArray(a)&&(a={content:a.join("")});var c=a,d=c.content,e=c.lines,f=!(void 0!==e)||e;return div({class:{Pre:!0,lines:!f||"false"!==f}},[div({class:"menu"},[button({onclick:[actions.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),pre(lib.pre.format(d))])},lib={db:function(){return{set:function set(a,b){var c=b.action,d=b.key,e=b.value,f=lib.db.init(),g=lib.json.stringify(e);return"Error"==typeof g?void a(c,new Error("db:write ".concat(d))):void(f[d]=g,a(c,{key:d,value:e}))},get:function get(a,b){var c=b.action,d=b.key,e=lib.db.init(),f=void 0;return d&&e[d]&&(f=lib.json.parse(e[d]),"Error"==typeof res)?void a(c,new Error("db:read ".concat(d))):void a(c,{key:d,value:f})},del:function del(a,b){var c=b.action,d=b.key,e=lib.db.init();d&&e[d]&&e.removeItem(d),a(c,{key:d,value:void 0})},init:function init(){return"undefined"!=typeof window&&window.localStorage||{}}}}(),json:function(){var a=function(a){return function(){try{return a.apply(void 0,arguments)}catch(a){return a}}},b=a(JSON.parse),c=a(JSON.stringify);return{parse:b,stringify:c}}(),pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),b="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),c=["true","false"],d=function(d){if("string"!=typeof d)return d;var e=d.split(/\b/);return d=e.map(function(d,f){if(""!==d){var g="";return"state"===d?g="state":"actions"===d?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(d)?g="keyword":b.includes(d)?g="builtin":c.includes(d)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(d=span({class:g},d)),d}}),d},e=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,f=function(a){return a.split(e).map(function(a){if(e.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return Link({class:"email",to:b},c)}return d(a)})},g=function(a){return a.split(" ").map(function(a){if(!a.includes("://"))return j(a+" ");var b=a.split("://"),c=_slicedToArray(b,2),d=c[0],e=c[1];return d.match(/[a-z]/g)?Link({to:a},a):a})},h=function(a){return a.includes("://")&&!a.includes("@")?g(a):f(a)},i=function(a){var b=/("|'|`)(.*?)\1/gim,c=[],e=a;return a.replace(b,function(a){var b=e.split(a),d=_slicedToArray(b,2),f=d[0],g=d[1];c.push(h(f)),c.push(span({class:"string"},h(a))),e=g}),c.push(h(e)),e===a?d(h(a)):c.map(function(a){return"string"==typeof a?j(a):a})},j=function(a){var b=a.trim(),c=a.split(/\/\//g),d=_toArray(c),e=d[0],f=d.slice(1);if(f=f.join("//"),e&&e.trim()&&(e=i(e)),f&&f.trim()){a.search(/\S|$/);f=span({class:"comment"},["//",g(f)])}return[e,f]},k=function(a){return code({class:"line"},j(a))};return{format:function format(a){return a.trim().split("\n").map(k)}}}(),preventDefault:function(){return function preventDefault(a){return a.preventDefault(),a}}()},actions={changeTheme:function changeTheme(a){return _objectSpread({},a,{pageClass:_objectSpread({},a.pageClass,{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},gdpr:{allow:function allow(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:a.cookies.map(function(a){return a.name}),show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.cookies.map(function(a){return a.name}),show:!1},action:[actions.gdpr.show,{show:!1}]}]]},close:function close(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:!1})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:a.gdpr.allowed,show:!1},action:[actions.gdpr.show,{show:!1}]}]]},deny:function deny(a){return[_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{allowed:[]})}),[lib.db.set,{key:"magic-gdpr",value:{allowed:[],show:!1},action:[actions.gdpr.show,{show:!1}]}]]},show:function(a,b){var c=b.show,d=b.allowed,e=void 0===d?a.gdpr.allowed:d;return b.value&&(c=b.value.show,b.value.allowed&&(e=b.value.allowed)),"boolean"==typeof c?_objectSpread({},a,{gdpr:_objectSpread({},a.gdpr,{show:c,allowed:e})}):a},toggleAllow:function toggleAllow(a,b){var d=b.name,e=a.gdpr,f=e.allowed.includes(d);return f?e.allowed=e.allowed.filter(function(a){return a!==d}):e.allowed.push(d),_objectSpread({},a,{gdpr:e})}},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=_slicedToArray(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return a;var i=window,j=i.scrollY,k=a.pages&&a.pages[f]&&a.pages[f].title;if(k&&(document.title=a.title=k),f===a.url)window.location.hash=h;else if(!h){var l=document.getElementsByTagName("html"),m=_slicedToArray(l,1),n=m[0],o=n.style.scrollBehavior;n.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),n.style.scrollBehavior=o}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),_objectSpread({},a,{url:f,hash:h,prev:a.url})},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),_objectSpread({},a,{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},pages={"/":function _(a){return[Hero({state:a}),div({id:"about"},[h1({id:"about-magic"},"about @magic"),p("magic is a module based generator for interactive clients, apis and static pages."),p(["this is also called a ",Link({to:"https://jamstack.org/",text:"jamstack"}),", javascript, apis and markup."]),p("less than 15kb of html + css + javascript boilerplate means @magic is minimal,\nand the module based approach means that it is also easily extendable and customizable."),p("by creating html, css and javascript files,\n@magic makes sure that your pages load as quickly as possible,\nand your app will stay usable without javascript."),p(["@magic has one client side dependency (spanning about 500 lines of code),\n",Link({to:"https://github.com/jorgebucaran",text:"jorge bucaran"}),"'s excellent\n",Link({to:"https://hyperapp.dev",text:"hyperapp"})," library,\nwhich provides the foundational state machine that @magic is built upon."]),GitBadges("magic/core"),h2({id:"philosophy"},"philosophy"),p("@magic makes it easy to stitch any kind of webapp together."),p("by providing simple, well documented, and self contained modules,\n@magic enables you to create complex interfaces with minimal cognitive overhead."),h2({id:"audience"},"audience"),p("@magic will work in any team that has one or more developers / content creators / editors."),p(["it is intended for organizational structures focused around small teams\nworking in ",Link({to:"https://www.youtube.com/watch?v=tIxHmsWCd7g",text:"programmer anarchy"}),",\nwhere every person / team is responsible for his or her own slice of the pie,\nwith minimal oversight and minimal organizational overhead."]),p("some call it agile."),h3({id:"workflow"},"workflow"),p("the developers create custom components,\nwhich the content creators use to create the actual content of the pages,\nwritten in markdown."),p("once the content has been created,\nthe developer (or editor) creates a new bundle and pushes the changes to the page."),p(["this allows every team member to spend time with the things they are good at,\nmapping individual respons",b("A"),"bilities to a natural hierarchy of competency."]),h2({id:"privacy"},"privacy"),p("@magic does not spy on it's users.\nin addition to being legally compliant to the european privacy laws,\nwe will always aim to do the ethical and right thing for all users of the web."),p("this means that we place your right to privacy above our want to know,\nbut at the same time this means that we place the rights of your users above your wants."),p("we think that this is the only fair solution."),p(Link({to:"/privacy/",text:"privacy policy"}))])]},"/404/":function _(){return div("404 - not found")},"/canary/":function canary(){return[div([Bird(),h3({id:"canary-notice"},"canary notice:"),h4({id:"we-have-never-shared-any-data-about-our-users-with-anyone"},"we have never shared any data about our users with anyone."),p(b("if this notice disappears, it means that the rule above has been broken by force.")),p("please note that, at the moment, @magic does not even have any servers to send your data to."),p("we will also not suddenly start uploading any data anywhere or to anyone.")])]},"/getting-started/":function gettingStarted(){return[div([h2({id:"starting-the-ritual"},"starting the ritual"),h3({id:"cloning-a-page"},"cloning a page:"),p("to start your page, simply clone one of the example directories:"),h3({id:"minimal"},"minimal"),p("this is a minimal example for purists that want to start from (almost) scratch"),Pre("git clone https://github.com/magic-examples/minimal\ncd minimal\nnpm install\nnpm run dev\n// goto localhost:2323"),p(Link({to:"https://github.com/magic-examples/minimal",text:"minimal github"})),h3({id:"interactive"},"interactive"),p("a small example showing off some client side interactions."),Pre("git clone https://github.com/magic-examples/example\ncd example\nnpm install\nnpm run dev\n// goto localhost:2323"),p(Link({to:"https://github.com/magic-examples/example",text:"example github"})),h3({id:"wip---fancy"},"WIP - fancy"),p("a \"fancy\" page that does not look too nice, yet."),Pre("git clone https://github.com/magic/example-fancy\ncd example-fancy\nnpm install\nnpm run dev\n// goto localhost:2323"),p(Link({to:"https://github.com/magic-examples/fancy",text:"fancy github"})),h3({id:"wip---project"},"WIP - project"),p(["using ",Link({to:"https://github.com/magic-themes/project",text:"@magic-themes/project"}),",\na good starter template for any project or company representation page."]),p(Link({to:"https://github.com/magic/example-project-page",text:"project page github"}))])]},"/organizations/":function organizations(){return[div([h2({id:"organizations"},"organizations"),p("@magic is quite a big ecosystem already and spans 5 github organizations."),div({class:"Packages"},[h3({id:"magic-core-utilities"},Link({to:"https://github.com/magic/",text:"@magic core utilities"})),p(["the magic core utilities include\n",Link({to:"https://magic.github.io/test",text:"a test framework"}),", a\n",Link({to:"https://github.com/magic/css/",text:"css-in-js"})," library,\nmarkdown/html to @magic mjs ",Link({to:"https://github.com/magic/transmute/",text:"transmutations"}),",\na javascript ",Link({to:"https://github.com/magic/format/",text:"prettifier"}),",\nmany other ",Link({to:"https://github.com/magic/",text:"libraries"}),",\nthat get used throughout the magic ecosystem, and, of course, the\n",Link({to:"https://github.com/magic/core",text:"@magic/core"}),"\npackage."]),h3({id:"magic-examples"},Link({to:"https://github.com/magic-examples/",text:"@magic-examples"})),p("example pages to help getting started with new @magic projects."),p(Link({to:"https://magic-examples.github.io/",text:"Do you want to know more?"})),h3({id:"magic-modules"},Link({to:"https://github.com/magic-modules/",text:"@magic-modules"})),p("modules are the building blocks of your app."),p("since most of the pages built using @magic are documentation pages for @magic libraries,\na lot of the existing modules make it easier to document projects."),p(Link({to:"https://magic-modules.github.io/",text:"Do you want to know more?"})),h3({id:"magic-themes"},Link({to:"https://github.com/magic-themes/",text:"@magic-themes"})),p("themes make pages look nice."),p(["this page uses the prepared ",Link({to:"https://magic-themes.github.io/project",text:"project"})," theme."]),p(Link({to:"https://magic-themes.github.io/",text:"Do you want to know more?"})),h3({id:"magic-libraries"},Link({to:"https://github.com/magic-libraries",text:"@magic-libraries"})),p(["@magic-libraries provide browser functionality.\nthey can handle ",Link({to:"https://github.com/magic-libraries/json/",text:"json"}),",\nprovide a ",Link({to:"https://github.com/magic-libraries/db",text:"database"}),",\nconvert ",Link({to:"https://github.com/magic-libraries/graphql",text:"graphql"}),",\nparse and serialize ",Link({to:"https://github.com/magic-libraries/uri",text:"uri"}),"'s,\nand ",Link({to:"https://github.com/magic-libraries/is",text:"type check"})]),p(Link({to:"https://magic-libraries.github.io/",text:"Do you want to know more?"}))])])]},"/privacy/":function privacy(){return[div([h1({id:"privacy-policy"},"privacy policy"),h2({id:"dos"},"Do's"),h3({id:"encourage-anonymity"},"encourage anonymity"),p("most of our services will include measures that prevent us from knowing your ip address."),p("since the threat vector in those cases are we,\n@magic, it usually is sufficient to relay all requests through anonymizer networks."),p("for a chance at actual anonymity,\nusage of tools like tor is encouraged,\nand our networks will not block requests from those networks."),h2({id:"donts"},"Dont's"),p(["we will never, under no circumstances, share information about our users with ",b("any")," third parties."]),h3({id:"canary"},"canary:"),p(["as long as ",Link({to:"/canary/",text:"this canary link works"}),",\nwe have not shared any data about our users with anyone."]),h3({id:"local-data"},"local data"),p("personal data we access on your machine and do not send anywhere, ever:"),ol([li("your git config user.email (never uploaded)"),li("your public gpg key associated with that email."),li("your gpg keys published on github or gitlab.")]),p("thats it.")])]},"/why/":function why(){return[div([h1({id:"why-magic"},"why magic?"),h3({id:"magic-is-tiny"},"@magic is tiny"),p("usually, all the javascript in your homepage will be 30-60 kb big (after unpacking),\n10-30 kb get transmitted from the server to the client."),p("this complete page you are reading with all sub pages loads about 40kb of unpacked,\n15kb of gzipped javascript."),h3({id:"magic-works-without-javascript"},"@magic works without javascript"),p("most of the functionality works without javascript,\nsome buttons and realtime user interactions obviously won't,\nbut @magic always provides a non-javascript fallback that gets enhanced by js if possible."),h3({id:"magic-generates-static-pages"},"@magic generates static pages"),p(["this makes free hosting (using github or gitlab pages) possible.\nand it's easy to\n",Link({to:"/getting-started/",text:"get started"}),"."]),h2({id:"free-hosting"},"free hosting"),p(["@magic publishes to\n",Link({to:"https://github.com",text:"github"}),Link({to:"https://gitlab.com",text:"gitlab"}),"\nand any other git-pages enabled hosting service."]),h3({id:"serverless--faas"},"serverless / faas"),p(["automagically generate\nserverless lambdas, derived from the\n",Link({to:"https://github.com/magic-modules/",text:"@magic-modules"}),"\nyou use in your pages."]),p("this makes contact forms, visitor statistics, user authentication and authorization,\nchat, and all other server side services possible.")])]}};app({init:[_objectSpread({},initialState,{url:window.location.pathname,hash:window.location.hash.substr(1)}),[[lib.db.get,{key:"magic-gdpr",action:actions.gdpr.show}]]],subscriptions:function subscriptions(){return[[helpers.listenPopState,actions.pop]]},view:function(a){var b=pages[a.url]?a.url:"/404/",c=pages[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,Page({page:c,state:a},[Gdpr(a),LightSwitch(a)])},node:document.getElementById("Magic")});