(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,r){"use strict";r.r(t);r(80);var a=r(2),n=r(3),o=r(7),i=r(1),c=r(6),l=r(40),u=r(0),s=r.n(u),m=r(72),f=r.n(m),p=(r(88),r(89),function(e){var t=e.children,r=e.className,a=e.style;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"white-rounded-shadowed "+(r||""),style:a},t))}),h=r(195),d=r(196),v={serviceUrl:null,stato:[{key:"Prefattbilit\xe0",value:"PREFATTIBILITA"},{key:"Istruttoria Documentale",value:"ISTRUTTORIA_DOCUMENTALE"},{key:"Istruttoria Creditizia",value:"ISTRUTTORIA_CREDITIZIA"},{key:"Analisi conclusa",value:"ANALISI_CONCLUSA"},{key:"pratica scaduta",value:"PRATICA_SCADUTA"}],prodotto:[{key:"Finanziamento chirografario",value:"FINANZIAMENTO_CHIROGRAFARIO"}],durata:[{key:"60",value:"60"},{key:"72",value:"72"},{key:"84",value:"84"},{key:"96",value:"96"}],finalita:[{key:"Fornitori",value:"FORNITORI"},{key:"Scorte",value:"SCORTE"},{key:"Investimenti",value:"INVESTIMENTI"}],periodicita:[{key:"Mensile",value:"MENSILE"}],preammortamento:[{key:"0",value:"0"},{key:"12",value:"12"}]},y=r(10),g=r(36);function b(){b=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),i=new x(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var s={};function m(){}function f(){}function p(){}var h={};c(h,n,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==t&&r.call(v,n)&&(h=v);var y=p.prototype=m.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var a;this._invoke=function(n,o){function i(){return new t(function(a,i){!function a(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,o,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new E(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,n,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var E=function(){return{headers:new Headers({"Content-Type":"application/json"})}},w=function(){var e=Object(g.a)(b().mark(function e(t,r){var a,n,o=arguments;return b().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=!(o.length>2&&void 0!==o[2])||o[2],e.next=3,fetch(t,r);case 3:if(204!==(n=e.sent).status){e.next=6;break}return e.abrupt("return",{});case 6:if(!(n.status>=200&&n.status<300)){e.next=10;break}if(!a){e.next=9;break}return e.abrupt("return",n.json());case 9:return e.abrupt("return",{});case 10:return e.abrupt("return",Promise.reject(n.status));case 11:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}();function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(S){c=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),i=new x(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return O()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var l=u(e,t,r);if("normal"===l.type){if(a=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(a="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=l;var s={};function m(){}function f(){}function p(){}var h={};c(h,n,function(){return this});var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==t&&r.call(v,n)&&(h=v);var y=p.prototype=m.prototype=Object.create(h);function g(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var a;this._invoke=function(n,o){function i(){return new t(function(a,i){!function a(n,o,i,c){var l=u(e[n],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then(function(e){a("next",e,i,c)},function(e){a("throw",e,i,c)}):t.resolve(m).then(function(e){s.value=e,i(s)},function(e){return a("throw",e,i,c)})}c(l.arg)}(n,o,a,i)})}return a=a?a.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new b(l(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(y),c(y,i,"Generator"),c(y,n,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return i.type="throw",i.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;k(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}var k=function(){var e=Object(g.a)(N().mark(function e(t,r){return N().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x("".concat(t,"/api"),r));case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),x=function(e,t){var r=Object(y.a)({},E(),{method:"POST",body:JSON.stringify(t)});return w(e,r)},L=r(4),O=r(9),S=r(78),F=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"align-items-center back-col"},s.a.createElement("div",{className:"image-div"},s.a.createElement(h.a,null,s.a.createElement(d.a,{md:6},s.a.createElement("div",{className:"image-div-content"},s.a.createElement("div",{className:"align-content-start p-4"},s.a.createElement("h1",{className:"default-color"},"Hai bisogno di un finanziamento?"),s.a.createElement("p",{className:"default-color p-image"}," ","Compila il modulo sottostante ed in tempo reale ti diremo se la tua richiesta potr\xe0 essere finanziata."," "),s.a.createElement("a",{href:"#formStart",type:"button",className:"custom-button-form"},"Compila il form")))))),s.a.createElement(d.a,{md:12},s.a.createElement("div",{className:"form-div",id:"formStart"},s.a.createElement(L.d,{initialValues:{pec:"",periodicita:"",preammortamento:"",contattoTelefonico:"",codiceFiscale:"",nominativoRiferimento:"",prodotto:"",ragioneSociale:"",finalita:"",importo:0,durata:"",recaptcha:""},validationSchema:O.b().shape({importo:O.a().min(1,"Importo obbligatorio"),ragioneSociale:O.c().required("Campo obbligatorio"),pec:O.c().email("PEC non valida").required("PEC obbligatoria"),codiceFiscale:O.c().matches(/(^[A-Za-z]{6}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{2}[A-Za-z]{1}[0-9LMNPQRSTUV]{3}[A-Za-z]{1})|(^[0-9]{11})$/,"Codice Fiscale o Partita IVA non valida").required("Campo obbligatorio"),contattoTelefonico:O.c().matches(/^(([+]|00)39)?((3[1-6][0-9]))(\d{7})$/,"Numero non valido"),prodotto:O.c().required("Campo obbligatorio"),durata:O.c().required("Campo obbligatorio"),finalita:O.c().required("Campo obbligatorio"),periodicita:O.c().required("Campo obbligatorio"),preammortamento:O.c().required("Campo obbligatorio"),recaptcha:O.c().required()}),onSubmit:function(e){console.log(e),k(v.serviceUrl,e).then(function(e){console.log(e),window.location.href="/entando-de-app/en/richiesta_fido_esito.page?id="+e.id}).catch(function(e){return console.log(e)})},render:function(e){var t=e.errors,r=(e.status,e.touched),a=(e.isValid,e.setFieldValue),n=e.handleSubmit;return s.a.createElement(L.c,{onSubmit:n},s.a.createElement(p,{className:"white-div align-content-center"},s.a.createElement(h.a,{className:"align-to-end"},s.a.createElement(d.a,{md:1},s.a.createElement("p",{className:"from-text-header"},"ANAGRAFICA")),s.a.createElement(d.a,{md:11},s.a.createElement("p",{className:"from-text-header"},"*Campi Obbligatori"))),s.a.createElement(h.a,null,s.a.createElement(d.a,null,s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"ragioneSociale"},"Ragione Sociale*"),s.a.createElement(L.b,{name:"ragioneSociale",type:"text",className:"form-control"+(t.ragioneSociale&&r.ragioneSociale?" is-invalid":"")}),s.a.createElement(L.a,{name:"ragioneSociale",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"pec"},"Pec*"),s.a.createElement(L.b,{name:"pec",type:"text",className:"form-control"+(t.pec&&r.pec?" is-invalid":"")}),s.a.createElement(L.a,{name:"pec",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"contattoTelefonico"},"Contatto Telefonico"),s.a.createElement(L.b,{name:"contattoTelefonico",type:"phone",className:"form-control"+(t.contattoTelefonico&&r.contattoTelefonico?" is-invalid":"")}),s.a.createElement(L.a,{name:"contattoTelefonico",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"importo"},"Importo Richiesto*"),s.a.createElement(L.b,{name:"importo",type:"number",className:"form-control"+(t.importo&&r.importo?" is-invalid":"")}),s.a.createElement(L.a,{name:"importo",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"finalita"},"Finalit\xe0*"),s.a.createElement(L.b,{as:"select",name:"finalita",className:"form-select"+(t.finalita&&r.finalita?" is-invalid":"")},s.a.createElement("option",{className:"custom-select-option",value:""},"Seleziona una Finalit\xe0"),v.finalita.map(function(e){return s.a.createElement("option",{key:e.key,className:"custom-select-option",value:e.value},e.key)})),s.a.createElement(L.a,{name:"finalita",component:"div",className:"invalid-feedback"}))),s.a.createElement(d.a,null,s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"codiceFiscale"},"P.IVA/Codice Fiscale*"),s.a.createElement(L.b,{name:"codiceFiscale",type:"text",className:"form-control"+(t.codiceFiscale&&r.codiceFiscale?" is-invalid":"")}),s.a.createElement(L.a,{name:"codiceFiscale",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"nominativoRiferimento"},"Nominativo Riferimento"),s.a.createElement(L.b,{name:"nominativoRiferimento",type:"text",className:"form-control"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"prodotto"},"Prodotto*"),s.a.createElement(L.b,{as:"select",name:"prodotto",className:"form-select"+(t.prodotto&&r.prodotto?" is-invalid":"")},s.a.createElement("option",{className:"custom-select-option",value:""},"Seleziona un Prodotto"),v.prodotto.map(function(e){return s.a.createElement("option",{key:e.key,className:"custom-select-option",value:e.value},e.key)})),s.a.createElement(L.a,{name:"prodotto",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"durata"},"Durata*"),s.a.createElement(L.b,{as:"select",name:"durata",className:"form-select"+(t.durata&&r.durata?" is-invalid":"")},s.a.createElement("option",{className:"custom-select-option",value:""},"Seleziona una Durata"),"*/}",v.durata.map(function(e){return s.a.createElement("option",{key:e.key,className:"custom-select-option",value:e.value},e.key)})),s.a.createElement(L.a,{name:"durata",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"preammortamento"},"Preammortamento*"),s.a.createElement(L.b,{as:"select",name:"preammortamento",className:"form-select"+(t.preammortamento&&r.preammortamento?" is-invalid":"")},s.a.createElement("option",{className:"custom-select-option",value:""},"Seleziona Preammortamento"),"*/}",v.preammortamento.map(function(e){return s.a.createElement("option",{key:e.key,className:"custom-select-option",value:e.value},e.key)})),s.a.createElement(L.a,{name:"preammortamento",component:"div",className:"invalid-feedback"})),s.a.createElement("div",{className:"form-group mb-4"},s.a.createElement("label",{htmlFor:"periodicita"},"Periodicit\xe0*"),s.a.createElement(L.b,{as:"select",name:"periodicita",className:"form-select"+(t.periodicita&&r.periodicita?" is-invalid":"")},s.a.createElement("option",{className:"custom-select-option",value:""},"Seleziona una Periodicit\xe0"),"*/}",v.periodicita.map(function(e){return s.a.createElement("option",{key:e.key,className:"custom-select-option",value:e.value},e.key)})),s.a.createElement(L.a,{name:"periodicita",component:"div",className:"invalid-feedback"}))))),s.a.createElement("div",{className:"text-xs-end"},s.a.createElement(S.a,{className:t.recaptcha&&r.recaptcha?"rec-div-invalid":"rec-div",sitekey:"6LdP908iAAAAAAyZ8deXI2VsUkchMhGgVB8w4gR0",render:"explicit",onChange:function(e){a("recaptcha",e)}}),t.recaptcha&&r.recaptcha&&s.a.createElement("p",null,"Verifica obbligatoria")),s.a.createElement(h.a,null,s.a.createElement(d.a,{className:"align-to-end mt-2"},s.a.createElement("button",{type:"submit",className:"custom-button-richiesta"}," ","Invia la tua richiesta"))))}})))))};var T=function(){return s.a.createElement(F,null)},A={serviceUrl:"service-url"},I=function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"connectedCallback",value:function(){var e=this.getAttribute("service-url");!function(e){v.serviceUrl=e}(e),this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),f.a.render(s.a.createElement(T,{serviceUrl:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(A)}}]),t}(Object(l.a)(HTMLElement));customElements.define("richiesta-widget",I)},79:function(e,t,r){e.exports=r(193)},80:function(e,t,r){},88:function(e,t,r){}},[[79,1,2]]]);
//# sourceMappingURL=main.ebda5b56.chunk.js.map