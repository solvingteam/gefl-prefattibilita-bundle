(window["webpackJsonprichiesta-details-widget"]=window["webpackJsonprichiesta-details-widget"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},30:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);a(30);var n=a(12),r=a(13),c=a(19),i=a(10),l=a(18),o=a(28),s=a(0),m=a.n(s),u=a(8),p=a.n(u),d=(a(38),a(39),a(7)),E=a(49),f=a(50),b=a(51),g=a(52),v=a(22),h=a(16),N=a(21),w={serviceUrl:null,richiesta:{esito:!0,durata:"5 mesi",importo:1e5,tasso:777},errPraticaEsistente:"Non \xe8 possibile inviare pi\xf9 volte la stessa richiesta, ti preghiamo di tornare alla home e procedere con una nuova richiesta se necessario.",errTigranTimeout:"Il server \xe8 momentaneamente non raggiungibile, vi invitiamo a riprovare pi\xf9 tardi.",errPivaNotValid:"La P.IVA inserita non \xe8 idonea per il nostro prodotto. Verificare il corretto inserimento e/o che si tratti di una Societ\xe0 di Capitali.",errGenerico:"Si \xe8 verificato un errore, riprovare pi\xf9 tardi.",errEsitoNegativoEsistente:"Non \xe8 possibile inviare pi\xf9 volte una richiesta rifiutata in precedenza."},O=a(11),j=a.n(O),y=a(15),k=a(3),x=function(){return{headers:new Headers({"Content-Type":"application/json"})}},P=function(){var e=Object(y.a)(j.a.mark((function e(t,a){var n,r,c=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!(c.length>2&&void 0!==c[2])||c[2],e.next=3,fetch(t,a);case 3:if(204!==(r=e.sent).status){e.next=6;break}return e.abrupt("return",{});case 6:if(!(r.status>=200&&r.status<300)){e.next=10;break}if(!n){e.next=9;break}return e.abrupt("return",r.json());case 9:return e.abrupt("return",{});case 10:return e.abrupt("return",Promise.reject(r.status));case 11:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){var t=C({},x(),{method:"GET"});return P(e,t)},z=function(e,t){var a=C({},x(),{method:"PUT",body:JSON.stringify(t)});return P(e,a)},_=function(){var e=Object(y.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",T("".concat(t,"/api/richiesta/esito?id=").concat(a)));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z("".concat(t,"/api/richiesta/accetta?id=").concat(a)));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(j.a.mark((function e(t,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z("".concat(t,"/api/richiesta/rifiuta?id=").concat(a)));case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(!1),c=Object(d.a)(r,2),i=c[0],l=c[1],o=Object(s.useState)(!1),u=Object(d.a)(o,2),p=u[0],O=u[1],j=Object(s.useState)(""),y=Object(d.a)(j,2),k=y[0],x=y[1],P=Object(s.useState)(!1),S=Object(d.a)(P,2),C=S[0],T=S[1];console.log(a);var z,F=new URLSearchParams(window.location.search).get("id");return Object(s.useEffect)((function(){!function(e){null===localStorage.getItem("gefl_esito_tigran")?_(w.serviceUrl,e).then((function(e){n(e),localStorage.setItem("gefl_esito_tigran",JSON.stringify(e))})).catch((function(e){console.log(e),x(e),O(!0)})):n(JSON.parse(localStorage.getItem("gefl_esito_tigran")))}(F)}),[]),m.a.createElement(m.a.Fragment,null,!0===p&&m.a.createElement("div",{className:"card text-center"},m.a.createElement("div",{className:"card-body"},409===k?m.a.createElement("h5",{className:"card-title"},"Attenzione"):m.a.createElement("h5",{className:"card-title"},"Errore di sistema"),409===k&&m.a.createElement("p",{className:"card-text"},w.errEsitoNegativoEsistente),400===k&&m.a.createElement("p",{className:"card-text"},w.errPivaNotValid),408===k&&m.a.createElement("p",{className:"card-text"},w.errTigranTimeout),422===k&&m.a.createElement("p",{className:"card-text"},w.errPraticaEsistente),500===k&&m.a.createElement("p",{className:"card-text"},w.errGenerico),m.a.createElement("button",{className:"btn btn-primary",onClick:function(e){return window.location.href="/entando-de-app"}},"Torna alla Home"))),!1===p&&m.a.createElement(m.a.Fragment,null,a?m.a.createElement(m.a.Fragment,null,!1===i?m.a.createElement("div",{className:"align-items-center back-col p-4"},m.a.createElement("div",{className:"white-div align-content-center"},!0===a.esito?m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement(v.a,{icon:N.a,size:"6x",className:"green-check mb-4"}))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("p",{className:"title-esito align-content-center"},"La tua azienda \xe8 risultata finanziabile."))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("p",{className:"subtitle"},"Per completare la pratica leggi ed accetta la nostra proposta commerciale"," "))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("button",{className:"custom-button-richiesta",onClick:function(){return l(!0)}}," ","Vai alla proposta"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("button",{className:"custom-button-richiesta",onClick:function(e){return window.location.href="/entando-de-app"}}," ","Ritorna alla home page")))):m.a.createElement(m.a.Fragment,null,m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement(v.a,{icon:N.b,size:"6x",color:"red",className:"mb-4"}))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("p",{className:"title-esito align-to-center"},"Siamo spiacenti, al momento non possiamo soddisfare la sua richiesta di finanziamento"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("button",{className:"custom-button-richiesta",onClick:function(e){return window.location.href="/entando-de-app"}}," ","Ritorna alla home page")))))):m.a.createElement("div",{className:"align-items-center back-col p-4"},m.a.createElement("div",{className:"white-div align-content-center"},m.a.createElement(h.a,{show:C,onHide:function(){return T(!1)}},m.a.createElement(h.a.Header,{closeButton:!0},m.a.createElement(h.a.Title,null,"Non Accettare")),m.a.createElement(h.a.Body,null,m.a.createElement("p",null,"Sei sicuro di non volere accettare la nostra proposta?")),m.a.createElement(h.a.Footer,null,m.a.createElement(g.a,{variant:"secondary",onClick:function(){return T(!1)}},"No"),m.a.createElement(g.a,{variant:"primary",onClick:function(){var e;e=a.id,U(w.serviceUrl,e).then((function(e){console.log("ok"),localStorage.removeItem("gefl_esito_tigran")})).catch((function(e){return console.log("err put")})),window.location.href="/entando-de-app"}},"Si"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("p",{className:"title-esito align-content-center"},"La Prefattibilit\xe0 della tua richiesta ha dato esito positivo"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("p",{className:"subtitle"},"Possiamo avviare il nostro processo di delibera per la seguente operazione"," "))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("span",{className:"subtitle-proposta"},"Importo: ")," ",m.a.createElement("span",{className:"subtitle"},a.importo?(z=a.importo,"".concat(z.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")," \u20ac")):""))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("span",{className:"subtitle-proposta"},"Durata: ")," ",m.a.createElement("span",{className:"subtitle"},a.durata),m.a.createElement("span",{className:"subtitle"},"12"===a.preammortamento?" di cui 12 di preammortamento":""))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("span",{className:"subtitle-proposta"},"Tasso variabile: ")," ",m.a.createElement("span",{className:"subtitle"}," ","euribor mese + spread ",a.tassoVariabile,"%"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("span",{className:"subtitle-proposta"},"Spese Istruttoria: ")," ",m.a.createElement("span",{className:"subtitle"},"2% del finanziamento"))),m.a.createElement(E.a,null,m.a.createElement(b.a,{md:12,className:"align-to-center"},m.a.createElement("button",{className:"custom-button-richiesta mx-2",onClick:function(){return T(!0)}},"Non accettare"),m.a.createElement("button",{className:"custom-button-richiesta mx-2",onClick:function(){I(w.serviceUrl,F).then((function(e){console.log("ok"),window.location.href="/entando-de-app/en/dettaglio.page?guid=".concat(e.guid),localStorage.removeItem("gefl_esito_tigran")})).catch((function(e){return console.log("err put")}))}},"Accetta")))))):m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"spinner"},m.a.createElement("div",{className:"d-flex flex-column align-items-center justify-content-center"},m.a.createElement(E.a,null,m.a.createElement(f.a,{animation:"grow",variant:"primary"})),m.a.createElement(E.a,{className:"row"},m.a.createElement("strong",{className:"mt-2"},"Elaborazione richiesta ...")))))))};var A=function(){return m.a.createElement(F,null)},V={serviceUrl:"service-url"},D=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"connectedCallback",value:function(){var e=this.getAttribute("service-url");!function(e){w.serviceUrl=e}(e),this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),p.a.render(m.a.createElement(A,{serviceUrl:e}),this.mountPoint)}}],[{key:"observedAttributes",get:function(){return Object.values(V)}}]),t}(Object(o.a)(HTMLElement));customElements.define("details-widget",D)}},[[29,1,2]]]);
//# sourceMappingURL=main.b9811377.chunk.js.map