"use strict";function c(a){return s(a)||d(a)||o(a)||n()}function d(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function e(a,b){if(null==a)return{};var c,d,e=f(a,b);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(a);for(d=0;d<g.length;d++)c=g[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function f(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function j(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function k(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?j(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):j(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a,b){return s(a)||r(a,b)||o(a,b)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}var u=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){o(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),o)),d&&!c&&g(p,c=!0)),b},o=(a.middleware||function(a){return a})(function(a,c){return"function"==typeof a?o(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?o(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](o,a[1])},m(a[0])),b):m(a)}),p=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};o(a.init)}}}(),v=u.h,h=u.app,i=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=!!(1<arguments.length&&arguments[1]!==void 0)&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(!d)if(e(b,"string","number","function")||Array.isArray(b))d=b,b={};else if(e(b.View,"function"))d=b.View,b={};else if(b.props||b.c)return v(a,{},b);return v(a,b,d)}},w=i("a"),a=i("b"),b=i("button"),x=i("circle"),y=i("code"),z=i("div"),A=i("footer"),B=i("g"),g=i("h1"),C=i("h2"),D=i("h3"),E=i("h4"),F=i("header"),G=i("img"),H=i("input"),I=i("li"),J=i("link"),K=i("main"),L=i("meta"),M=i("nav"),N=i("ol"),O=i("p"),p=i("path"),P=i("pre"),Q=i("script"),R=i("span"),S=i("svg"),T=i("title"),U=i("ul"),V=i("view"),W={branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],nospy:{show:!1},pageClass:{},pages:{"/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic",url:"/"},"/404/":{description:"404 - not found.",title:"404 - not found"},"/canary/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic - warrant canary",url:"/"},"/getting-started/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic - getting started",url:"/"},"/organizations/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic - git organizations",url:"/"},"/privacy/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic - privacy policy",url:"/"},"/why/":{branding:"@magic",description:"@magic static and serverless webapp framework.",footer:{one:{before:["jamstack generator","created by","Wizards & Witches"],title:"@magic"},three:{menu:[{text:"npm",to:"https://www.npmjs.com/org/magic"},{text:"github",to:"https://github.com/magic"}],title:"social links"},two:{menu:[{text:"@magic",to:"https://github.com/magic/"},{text:"@grundstein",to:"https://github.com/grundstein/"},{text:"@webboot",to:"https://github.com/webboot/"}],title:"projects"}},hero:{content:"automagically generate and publish \"jsomorphic\" webapps.",description:"jamstack generator",menu:[{text:"getting started",to:"/getting-started/"},{text:"why magic?",to:"/why/"},{text:"organizations",to:"/organizations/"}],title:"@magic"},menu:[{text:"about",to:"/"},{text:"usage",to:"/getting-started/"},{text:"why?",to:"/why/"}],root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},title:"@magic - why magic?",url:"/"}},root:"/",seo:{about:"magic is a jamstack generator.",author:{"@type":"person",image:"https:/jaeh.at/img/jascha.ehrenreich.jpg",jobTitle:"Technomancer",name:"Jascha Ehrenreich",url:"https://jaeh.at"},image:"https://magic.github.io/magic-preview.jpg",name:"@magic",url:"https://magic.github.io/"},theme:"dark",title:"@magic",url:"/"},X={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},Y=function(){return S({class:"Bird",viewBox:"0 0 839 839",height:"20",width:"20"},[p({d:"M431 536a550 550 0 00392 159c8 0 13-9 8-16-51-69-260-339-454-453 20-12 36-31 46-52l46-18c7-2 9-11 3-16l-41-40C408 40 357 0 307 0h-1C123 49 91 268 180 392c12 67 53 182 184 234 24 9 46 17 68 23v106H0v84h840v-84H508c2-37 40-87 39-87-142-98-223-206-224-347 10 82 58 164 108 215zM347 71a25 25 0 010 50c-14-1-24-12-25-25 1-14 14-25 25-25z"})])},Z=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[D(b?ha({to:b},i):i),h.map(function(c){var d=m(c,2),e=d[0],f=d[1];return f.map(function(c){return $(k(k(k({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},$=function(a){return z([E([a.day,"-",a.month,"-",a.year," - ",ha({to:a.name},a.title)]),O(a.description)])},_=function(a){var b,c=a.link,d=a.year,e=a.blog,f=a.url;return c?b="".concat(c).concat(d,"/"):f.endsWith("".concat(d,"/"))&&(b=f),z([C(c?ha({to:b},d):d),Object.entries(e[d]).map(function(c){var d=m(c,2),e=d[0],f=d[1];return Z(k(k({},a),{},{month:e,days:f,link:b}))})])},aa=function(){return z({class:"Credits"},["made with a few bits of ",ha({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},ba=function(a,b){var c=a.footer,d=c.one,e=c.two,f=c.three;return A({class:"Footer"},[z({class:"Container"},[(d||e||f)&&z({class:"Menus"},[d&&z({class:"Child Info"},[d.title&&C(d.title),d.before&&d.before.map(function(b){return O(b)}),d.menu&&U([d.menu.map(function(a){return I(ha(a))})]),d.after&&d.after.map(function(b){return O(b)})]),e&&z({class:"Child"},[e.title&&C(e.title),e.before&&e.before.map(function(b){return O(b)}),e.menu&&U([e.menu.map(function(a){return I(ha(a))})]),e.after&&e.after.map(function(b){return O(b)})]),f&&z({class:"Child"},[f.title&&C(f.title),f.before&&f.before.map(function(b){return O(b)}),f.menu&&U([f.menu.map(function(a){return I(ha(a))})]),f.after&&f.after.map(function(b){return O(b)})])]),aa(a),b])])},ca=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var l=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=m(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=m(b,2),d=c[0],e=c[1];return e(a[d])});return l.length?U({class:"GitBadges"},l.map(function(a){var b=a.to,c=a.src;if(c){var d=fa({src:c,height:"23"});return b?I(ha({to:b},d)):I(d)}})):void 0},da=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],d=a.menu,f=e(a,["menu"]),g=f.branding,h=void 0===g?[]:g,i=f.root;Array.isArray(h)||(h=[h]);var j=h,k=c(j),l=k[0],m=k.slice(1);return F({class:"Header"},z([ia(i),l&&ha({to:i,class:"branding"},[R(l),m]),d&&ja({state:f,items:d})]))},ea=function(a){var b=a.state,c=b.hero,d=Array.isArray(c.title)?c.title:[c.title],e=c.content;return e&&!Array.isArray(e)&&(e=[e]),z({id:"hero",class:"Hero"},[z({class:"LogoWrapper"},[ia(b),c.title&&g([R(d[0]),d[1]]),c.description&&O(c.description)]),e&&z({class:"content"},e.map(function(b){return O(b)})),c.menu&&ja({items:c.menu,state:b})])},fa=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),G(a)},ga=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return b({class:"LightSwitch",onclick:qa.changeTheme},S({class:"icon",height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})]))},ha=function(a){var b=a.to,c=a.action,d=void 0===c?qa.go:c,f=e(a,["to","action"]),g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],h=f.href,i=f.text,j=f.nofollow,k=f.noreferrer,l=e(f,["href","text","nofollow","noreferrer"]);b=b||h||"",l.href=b;var m="/"===b[0]||"#"===b[0];return m?l.onclick=[d,pa.preventDefault]:(l.target="_blank",l.rel="noopener",j&&(l.rel+=" nofollow"),k&&(l.rel+=" noreferrer")),w(l,[i,g])},ia=function(a){return ha({to:a,class:"Logo"},[S({viewBox:"0 0 512 444"},[p({d:"M512 444L256 0 0 444z",fill:"#663695"}),x({cx:"256",cy:"294",r:"130",fill:"#fff"}),x({cx:"256",cy:"281",r:"40",fill:"#663695"}),p({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),p({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},ja=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a["class"],c=void 0===b?"Menu":b,d=a.collapse,e=a.items,f=a.state,g=f.url,h=f.hash,i=f.root;return h&&!g.endsWith(h)&&(g+="#".concat(h)),M({className:c},U(e.map(function(a){return ka(k(k({},a),{},{url:g,root:i,collapse:void 0===d||d}))})))},ka=function(a){var b=a.text,c=a.items,d=void 0===c?[]:c,f=a.url,g=a.root,h=a.parentTo,i=void 0===h?void 0:h,j=a.collapse,l=e(a,["text","items","url","root","parentTo","collapse"]),m={class:{}},n=l.to;g&&n.startsWith("/")&&(n=n.substr(1));var o=l.to[0];i&&("-"===o||"#"===o)&&(n=i+n);var p=n.startsWith(g);g&&("/"===o||"-"===o||"#"===o)&&!p&&(n=g+n),l.to=n.replace(/\/\//g,"/"),l.to===f&&(m["class"].active=!0);var q=[],r=f.startsWith(l.to)||!j;return r&&d.length&&(q=U(d.map(function(a){return ka(k({parentTo:l.to,url:f,root:g,collapse:j},a))}))),I(m,[l.to?la(l,b):R(l,b),q])},la=function(a,b){return ha(a,b)},ma=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?z({class:"NoSpy"},[z({class:"Container"},[h&&D(h),j&&O(j),H({onclick:qa.nospy.close,value:l,type:"button"})])]):z({class:"NoSpy"},S({class:"ShowHide icon",onclick:[qa.nospy.show,{show:!0}],width:"25",height:"25",viewBox:"0 0 512 512"},[B([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),x({cx:"192",cy:"128",r:"32"}),x({cx:"128",cy:"256",r:"32"}),x({cx:"288",cy:"384",r:"32"}),x({cx:"272",cy:"272",r:"16"}),x({cx:"400",cy:"336",r:"16"}),x({cx:"176",cy:"368",r:"16"})])]))},na=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return K(e,z({class:{Wrapper:!0}},[da(d),z({class:"Page",id:"page"},c(d)),ba(d),b]))},oa=function(a,c){"string"==typeof a?a={content:a}:c?a=k({content:c},a):Array.isArray(a)&&(a={content:a.join("")});var d=a,f=d.content,g=d.lines,h=!(void 0!==g)||g;return z({class:{Pre:!0,lines:!h||"false"!==h}},[z({class:"menu"},[b({onclick:[qa.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),P(f.trim().split("\n").map(oa.Line))])};oa.Comment=function(a){return R({class:"comment"},a)},oa.Line=function(a){return y({class:"line"},oa.Words(a))},oa.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return ha({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":pa.pre.keywords.includes(a)?d="keyword":pa.pre.builtins.includes(a)?d="builtin":pa.pre.booleans.includes(a)&&(d="boolean"),d?R({class:d},a):a},oa.Words=function(a){var b=a.split(pa.pre.commentRegex),d=c(b),e=d[0],f=d.slice(1),g=!e.endsWith(":")&&f.length;if(g)return[oa.Words(e),oa.Comment(f.join("").split(pa.pre.wordRegex).map(oa.Word))];var h=[],i=a;if(a.replace(pa.pre.stringRegex,function(a){var b=i.split(a),c=m(b,2),d=c[0],e=c[1];h.push(d.split(pa.pre.wordRegex).map(oa.Word)),h.push(R({class:"string"},a)),i=e}),i!==a)return h.push(i.split(pa.pre.wordRegex).map(oa.Word)),h;var j=a.split(pa.pre.wordRegex);return j.map(oa.Word)};var pa={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a}},qa={changeTheme:function changeTheme(a){return k(k({},a),{},{pageClass:k(k({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=m(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=window,j=i.scrollY,l=a.pages&&a.pages[f]&&a.pages[f].title;if(l&&(document.title=a.title=l),f===a.url)window.location.hash=h;else if(!h){var n=document.getElementsByTagName("html"),o=m(n,1),p=o[0],q=p.style.scrollBehavior;p.style.scrollBehavior="auto",window.scrollTo({top:0,behavior:"smooth"}),p.style.scrollBehavior=q}return window.history.pushState({url:f,hash:h,scrollY:j},a.title,c),k(k({},a),{},{url:f,hash:h,prev:a.url})},nospy:{close:function close(a){return k(k({},a),{},{nospy:k(k({},a.nospy),{},{show:!1})})},show:function(a,b){var c=b.show;return"boolean"==typeof c?k(k({},a),{},{nospy:k(k({},a.nospy),{},{show:c})}):a}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f,behavior:"smooth"}),k(k({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ra={"/":function _(b){return[ea({state:b}),z({id:"about"},[g({id:"about-magic"},"about @magic"),O("magic is a module based generator for interactive clients, apis and static pages."),O(["this is also called a ",ha({to:"https://jamstack.org/",text:"jamstack"}),", javascript, apis and markup."]),O("less than 15kb of html + css + javascript boilerplate means @magic is minimal,\nand the module based approach means that it is also easily extendable and customizable."),ca("@magic/core"),C({id:"philosophy"},"philosophy"),D({id:"simplicity"},"simplicity"),O("@magic makes it easy to stitch any kind of webapp together."),O("by providing simple, well documented, and self contained modules,\n@magic enables you to create complex interfaces with minimal cognitive overhead."),D({id:"audience"},"audience"),O("@magic will work in any team that has one or more developers / content creators / editors."),O(["it is intended for organizational structures focused around small teams\nworking in ",ha({to:"https://www.youtube.com/watch?v=tIxHmsWCd7g",text:"programmer anarchy"}),",\nwhere every person and every team is responsible for their own slice of the pie,\nwith minimal oversight and organizational overhead."]),O("some call it agile."),D({id:"workflow"},"workflow"),O("the developers create custom components,\nwhich the content creators use to create the actual content of the pages,\nwritten in markdown."),O("once the content has been created,\nthe developer (or editor) creates a new bundle and pushes the changes to the page."),O(["this allows every team member to spend time with the things they are good at,\nmapping individual respons",a("A"),"bilities to a natural hierarchy of competency."]),D({id:"jsomorphic"},"jsomorphic"),O("by creating html, css and javascript files,\n@magic makes sure that your pages load as quickly as possible,\nand a well designed app will stay usable without javascript."),O("if javascript is enabled,\nthe client will automagically enhance itself with javascript only functionality."),D({id:"minimal-dependencies"},"minimal dependencies"),O(["@magic has one external production dependency (spanning about 500 lines of code),\n",ha({to:"https://github.com/jorgebucaran",text:"jorge bucaran"}),"'s excellent\n",ha({to:"https://hyperapp.dev",text:"hyperapp"})," library,\nwhich provides the foundational state machine that @magic is built upon."]),D({id:"privacy"},"privacy"),O("@magic does not spy on it's users."),O("in addition to being legally compliant to the european privacy laws,\nwe will always aim to do the ethical and right thing for all users of the web."),O("this means that we place your right to privacy above our want to know,\nbut at the same time this means that we place the rights of your users above your wants."),O("we think that this is the only fair solution."),ha({to:"/privacy/",text:"privacy policy"})])]},"/404/":function _(){return z("404 - not found.")},"/canary/":function canary(b){return[ea({state:b}),z([Y(),D({id:"canary-notice"},"canary notice:"),E({id:"we-have-never-shared-any-data-about-our-users-with-anyone"},"we have never shared any data about our users with anyone."),O(a("if this notice disappears, it means that the rule above has been broken by force.")),O("please note that, at the moment, @magic does not even have any servers to send your data to."),O("we will also not suddenly start uploading any data anywhere or to anyone.")])]},"/getting-started/":function gettingStarted(a){return[ea({state:a}),z([C({id:"starting-the-ritual"},"starting the ritual"),D({id:"cloning-a-page"},"cloning a page:"),O("to start your page, simply clone one of the example directories:"),D({id:"minimal"},"minimal"),O("this is a minimal example for purists that want to start from (almost) scratch"),U([I(ha({to:"https://github.com/magic-examples/minimal/",text:"github"})),I(ha({to:"https://magic-examples.github.io/minimal/",text:"demo"}))]),oa("git clone https://github.com/magic-examples/minimal ./yourAwesomeDomain.tld\ncd ./yourAwesomeDomain.tld\nnpm install\nnpm run dev\n// goto http://localhost:2323"),D({id:"interactive"},"interactive"),O("a small example showing off some client side interactions."),U([I(ha({to:"https://github.com/magic-examples/example/",text:"github"})),I(ha({to:"https://magic-examples.github.io/example/",text:"demo"}))]),oa("git clone https://github.com/magic-examples/example ./yourAwesomeDomain.tld\ncd ./yourAwesomeDomain.tld\nnpm install\nnpm run dev\n// goto http://localhost:2323"),D({id:"project"},"project"),O(["using ",ha({to:"https://github.com/magic-themes/project",text:"@magic-themes/project"}),",\na good starter template for any project or company representation page."]),U([I(ha({to:"https://github.com/magic-examples/project",text:"github"})),I(ha({to:"https://magic-examples.github.io/project/",text:"demo"}))]),oa("git clone https://github.com/magic-examples/project ./yourAwesomeDomain.tld\ncd ./yourAwesomeDomain.tld\nnpm install\nnpm run dev\n// goto http://localhost:2323")])]},"/organizations/":function organizations(a){return[ea({state:a}),z([C({id:"organizations"},"organizations"),O("@magic is quite a big ecosystem already and spans 5 github organizations."),z({class:"Packages"},[D({id:"magic-core-utilities"},ha({to:"https://github.com/magic/",text:"@magic core utilities"})),O(["the magic core utilities include\n",ha({to:"https://magic.github.io/test",text:"a test framework"}),", a\n",ha({to:"https://github.com/magic/css/",text:"css-in-js"})," library,\nmarkdown/html to @magic mjs ",ha({to:"https://github.com/magic/transmute/",text:"transmutations"}),",\na javascript ",ha({to:"https://github.com/magic/format/",text:"prettifier"}),",\nmany other ",ha({to:"https://github.com/magic/",text:"libraries"}),",\nthat get used throughout the magic ecosystem, and, of course, the\n",ha({to:"https://github.com/magic/core",text:"@magic/core"}),"\npackage."]),D({id:"magic-examples"},ha({to:"https://github.com/magic-examples/",text:"@magic-examples"})),O("example pages to help getting started with new @magic projects."),ha({to:"https://magic-examples.github.io/",text:"Do you want to know more?"}),D({id:"magic-modules"},ha({to:"https://github.com/magic-modules/",text:"@magic-modules"})),O("modules are the building blocks of your app."),O("since most of the pages built using @magic are documentation pages for @magic libraries,\na lot of the existing modules make it easier to document projects."),ha({to:"https://magic-modules.github.io/",text:"Do you want to know more?"}),D({id:"magic-themes"},ha({to:"https://github.com/magic-themes/",text:"@magic-themes"})),O("themes make pages look nice."),O(["this page uses the prepared ",ha({to:"https://magic-themes.github.io/project",text:"project"})," theme."]),ha({to:"https://magic-themes.github.io/",text:"Do you want to know more?"}),D({id:"magic-libraries"},ha({to:"https://github.com/magic-libraries",text:"@magic-libraries"})),O(["@magic-libraries provide browser functionality.\nthey can handle ",ha({to:"https://github.com/magic-libraries/json/",text:"json"}),",\nprovide a ",ha({to:"https://github.com/magic-libraries/db",text:"database"}),",\nconvert ",ha({to:"https://github.com/magic-libraries/graphql",text:"graphql"}),",\nparse and serialize ",ha({to:"https://github.com/magic-libraries/uri",text:"uri"}),"'s,\nand ",ha({to:"https://github.com/magic-libraries/is",text:"type check"})]),ha({to:"https://magic-libraries.github.io/",text:"Do you want to know more?"})])])]},"/privacy/":function privacy(b){return[ea({state:b}),z([g({id:"privacy-policy"},"privacy policy"),C({id:"dos"},"Do's"),D({id:"encourage-anonymity"},"encourage anonymity"),O("most of our services will include measures that prevent us from knowing your ip address."),O("since the threat vector in those cases are we,\n@magic, it usually is sufficient to relay all requests through anonymizer networks."),O("for a chance at actual anonymity,\nusage of tools like tor is encouraged,\nand our networks will not block requests from those networks."),C({id:"donts"},"Dont's"),O(["we will never, under no circumstances, share information about our users with ",a("any")," third parties."]),D({id:"canary"},"canary:"),O(["as long as ",ha({to:"/canary/",text:"this canary link works"}),",\nwe have not shared any data about our users with anyone."]),D({id:"local-data"},"local data"),O("personal data we access on your machine and do not send anywhere, ever:"),N([I("your git config user.email (never uploaded)"),I("your public gpg key associated with that email."),I("your gpg keys published on github or gitlab.")]),O("thats it.")])]},"/why/":function why(a){return[ea({state:a}),z([g({id:"why-magic"},"why magic?"),D({id:"magic-is-tiny"},"@magic is tiny"),O("usually, all the javascript in your homepage will be 30-60 kb big (after unpacking),\n10-30 kb get transmitted from the server to the client."),O("this complete page you are reading with all sub pages loads about 40kb of unpacked,\n15kb of gzipped javascript."),D({id:"magic-works-without-javascript"},"@magic works without javascript"),O("most of the functionality works without javascript,\nsome buttons and realtime user interactions obviously won't,\nbut @magic always provides a non-javascript fallback that gets enhanced by js if possible."),D({id:"magic-generates-static-pages"},"@magic generates static pages"),O(["this makes free hosting (using github or gitlab pages) possible.\nand it's easy to\n",ha({to:"/getting-started/",text:"get started"}),"."]),C({id:"free-hosting"},"free hosting"),O(["@magic publishes to\n",ha({to:"https://github.com",text:"github"}),ha({to:"https://gitlab.com",text:"gitlab"}),"\nand any other git-pages enabled hosting service."]),D({id:"serverless--faas"},"serverless / faas"),O(["automagically generate\nserverless lambdas, derived from the\n",ha({to:"https://github.com/magic-modules/",text:"@magic-modules"}),"\nyou use in your pages."]),O("this makes contact forms, visitor statistics, user authentication and authorization,\nchat, and all other server side services possible.")])]}};h({init:k(k({},W),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[X.listenPopState,qa.pop]]},view:function(a){var b=ra[a.url]?a.url:"/404/",c=ra[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,na({page:c,state:a},[ma(a),ga(a)])},node:document.getElementById("Magic")});