(this["webpackJsonppolaris-example-create-react-app"]=this["webpackJsonppolaris-example-create-react-app"]||[]).push([[0],{105:function(e,t,n){e.exports=n.p+"static/media/banner.b4044a15.png"},117:function(e,t,n){e.exports=n(265)},265:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(28),i=n.n(r),c=(n(122),n(1)),s=n(113),o=n(49),u=n(23),m={utilities:{1:{path:"/remove-unreferenced-strings",title:"Find unreferenced locale strings",description:"This utility verifies if any strings in a locale file (en.json) are unreferenced in schema.json"},2:{path:"/remap-translations",title:"Remap translation strings",description:"This utility remaps locale files to a new structure"},3:{path:"/extract-links",title:"Extract links",description:"This utility extracts links from a block of text"}},locales:["da","de","en","es","fi","fr","hi","it","ja","ko","nb","nl","pt-BR","pt-PT","sv","th","zh-CN","zh-TW"]},h=n(267),p=n(105),d=n.n(p),f=m.utilities;var E=function(){return l.a.createElement(c.k,{title:"Utilities"},l.a.createElement(c.i,null,l.a.createElement(c.i.Section,null,l.a.createElement("img",{alt:"Utilities",src:d.a,style:{width:"100%",marginBottom:"1em"}}))),l.a.createElement(c.i,null,Object.keys(f).map((function(e){return l.a.createElement(c.i.Section,{oneHalf:!0,key:e},l.a.createElement(c.e,{title:f[e].title},l.a.createElement(c.e.Section,null,f[e].description),l.a.createElement(c.e.Section,null,l.a.createElement(o.b,{to:f[e].path},l.a.createElement(c.d,null,"Try it")))))})),l.a.createElement(c.i.Section,{oneHalf:!0},l.a.createElement(c.e,null,l.a.createElement(c.e.Header,{title:"Toggle all collapsibles"},l.a.createElement(c.b,null,"Chrome extension")),l.a.createElement(c.e.Section,null,'Toggles all collapsibles on a page from "themes.shopify.com" with one click'),l.a.createElement(c.e.Section,null,l.a.createElement("a",{target:"_blank",href:"https://chrome.google.com/webstore/detail/toggle-all-collapsibles/abecpmipjeckjjnkddmjaphidooeinid"},l.a.createElement(c.d,null,l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement("span",{style:{paddingRight:"0.5em"}},"Try it"),l.a.createElement(c.h,{source:h.a}))))))),Object.keys(f).length%2+1!==0&&l.a.createElement(c.i.Section,{oneHalf:!0})))},g=n(29),b=n(30),y=n(32),k=n(31),v=n(33),j=function e(t){var n={};for(var a in t)if(t.hasOwnProperty(a))if("object"==typeof t[a]&&null!==t[a]){var l=e(t[a]);for(var r in l)l.hasOwnProperty(r)&&(n[a+"."+r]=l[r])}else n[a]=t[a];return n},S=function(e){var t={};for(var n in e){var a=n.split(".");a.reduce((function(t,l,r){return t[l]||(t[l]=isNaN(Number(a[r+1]))?a.length-1==r?e[n]:{}:[])}),t)}return t},O=function(e,t){return new Promise((function(n,a){setTimeout((function(){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),n("Success!")}),150)}))},x=m.utilities,w=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(k.a)(t).call(this,e))).onChangeHandlerSchema=function(e){n.setState({schema:e})},n.onChangeHandlerLang=function(e){n.setState({lang:e})},n.onClickHandlerVerify=function(){n.setState({isVerified:!1});var e=j(JSON.parse(n.state.lang)),t=[];Object.keys(e).forEach((function(a){-1===n.state.schema.indexOf(a)&&(delete e[a],t.push(a))})),n.setState({keys:t,isVerified:!0,newLang:JSON.stringify(S(e),void 0,2)})},n.state={schema:"",lang:"",isVerified:!1,keys:[],newLang:""},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(c.k,{title:x[1].title,breadcrumbs:[{content:"Utilities",url:"/internal-tools"}]},l.a.createElement(c.i,null,l.a.createElement(c.i.Section,null,l.a.createElement(c.l,null,l.a.createElement("p",null,x[1].description))),l.a.createElement(c.i.Section,null,l.a.createElement(c.e,{primaryFooterAction:{content:"Verify",onAction:this.onClickHandlerVerify.bind(this)}},l.a.createElement(c.e.Section,null,l.a.createElement(c.g,null,l.a.createElement("label",null,"schema.json"),l.a.createElement("textarea",{onChange:function(t){return e.onChangeHandlerSchema(t.target.value)},style:{width:"100%",height:"180px",resize:"none"}}),l.a.createElement("label",null,"en.json"),l.a.createElement("textarea",{onChange:function(t){return e.onChangeHandlerLang(t.target.value)},style:{width:"100%",height:"180px",resize:"none"}}))))),this.state.isVerified&&l.a.createElement(c.i.Section,null,0===this.state.keys.length&&l.a.createElement(c.c,{title:"All keys in en.json are used in schema",status:"success"}),this.state.keys.length>0&&l.a.createElement(c.c,{title:"Following keys from en.json are not used in schema and have been removed:",status:"success"},l.a.createElement(c.j,{type:"bullet"},this.state.keys.map((function(e){return l.a.createElement(c.j.Item,{key:e},e)})))),this.state.keys.length>0&&l.a.createElement(c.e,null,l.a.createElement(c.e.Section,null,l.a.createElement(c.g,null,l.a.createElement("label",null,"Updated en.json"),l.a.createElement("textarea",{value:this.state.newLang,readOnly:!0,style:{width:"100%",height:"180px",resize:"none"}})))))))}}]),t}(l.a.Component),C=n(39),H=n.n(C),N=n(65),A=n(114),T=m.utilities,U=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(k.a)(t).call(this,e))).reset=function(){n.setState({complete:!1,error:{title:"",message:""}})},n.onChangeHandlerNew=function(e){n.reset(),n.setState({enNew:e})},n.onChangeHandlerLang=function(e,t){n.reset();var a=Object(A.a)({},n.state.langOld);""===t?delete a[e]:a[e]=t,n.setState({langOld:a})},n.onChangeHandlerUpload=function(e){n.reset();var t={},a=function(e){return new Promise((function(n,a){var l=new FileReader;l.onload=function(){var a=e.name.substr(0,e.name.lastIndexOf("."));m.locales.includes(a)&&(t[a]=l.result),n()},l.readAsText(e)}))};Array.from(e).reduce(function(){var e=Object(N.a)(H.a.mark((function e(t,n){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.abrupt("return",a(n));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Promise.resolve()).then((function(){n.setState({langOld:t})}))},n.onClickHandlerRemap=function(){n.reset();var e=n.state,t=[];if(0===e.enNew.length)return n.setState({error:{title:"Error",message:"No updated en.json defined"}}),-1;if(0===Object.keys(e.langOld).length)return n.setState({error:{title:"Error",message:"No locale files defined"}}),-1;function a(n,a){try{var l=j(JSON.parse(e.enNew)),r=j(JSON.parse(e.enNew)),i=j(JSON.parse(e.langOld.en)),c=j(JSON.parse(n));Object.keys(r).forEach((function(e){var n,s,o=r[e],u=(n=i,s=o,Object.keys(n).find((function(e){return n[e]===s})));u?l[e]=c[u]:(delete l[e],t.push("".concat(a,".json - ").concat(e)))}));var s=S(l);return JSON.stringify(s,void 0,2)}catch(o){return o}}Object.keys(e.langOld).reduce(function(){var t=Object(N.a)(H.a.mark((function t(l,r){var i;return H.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l;case 2:if("en"===r){t.next=12;break}if(!((i=a(e.langOld[r],r))instanceof Error)){t.next=9;break}return n.setState({error:{title:"Error",message:i.message}}),t.abrupt("return",Promise.reject());case 9:return t.abrupt("return",O("".concat(r,".json"),i));case 10:t.next=13;break;case 12:return t.abrupt("return",Promise.resolve());case 13:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()).then((function(){n.setState({missing:t,complete:!0})}))},n.state={enNew:"",langOld:{},missing:[],complete:!1,error:{title:"",message:""}},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(c.k,{title:T[2].title,breadcrumbs:[{content:"Utilities",url:"/internal-tools"}]},l.a.createElement(c.i,null,l.a.createElement(c.i.Section,null,l.a.createElement(c.l,null,l.a.createElement("p",null,T[2].description))),l.a.createElement(c.i.Section,null,l.a.createElement(c.e,{primaryFooterAction:{content:"Download updated locales",onAction:this.onClickHandlerRemap.bind(this)}},l.a.createElement(c.e.Section,{subdued:!0},l.a.createElement(c.g,null,l.a.createElement(c.b,{status:"success"},"Updated file"),l.a.createElement("label",null,"en.json"),l.a.createElement("textarea",{value:this.state.enNew,onChange:function(t){return e.onChangeHandlerNew(t.target.value)},style:{width:"100%",height:"100px",resize:"none"}}))),l.a.createElement(c.e.Section,null,l.a.createElement(c.g,null,l.a.createElement(c.b,{status:"attention"},"Original files"),l.a.createElement(c.f,{label:"Select locale files",onDrop:function(t){e.onChangeHandlerUpload(t)}},l.a.createElement(c.f.FileUpload,null)),m.locales.map((function(t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("label",null,t,".json"),l.a.createElement("textarea",{value:e.state.langOld[t],onChange:function(n){return e.onChangeHandlerLang(t,n.target.value)},style:{width:"100%",height:"100px",resize:"none",marginTop:"1em"}}))})))))),l.a.createElement(c.i.Section,null,this.state.complete&&l.a.createElement(c.c,{title:"Files downloaded",status:"success"}),this.state.complete&&this.state.missing.length>0&&l.a.createElement(c.c,{title:"Following translations could not be remapped:",status:"warning"},l.a.createElement(c.j,{type:"bullet"},this.state.missing.map((function(e){return l.a.createElement(c.j.Item,{key:e},e)})))),this.state.error.title.length>0&&l.a.createElement(c.c,{title:this.state.error.title,status:"critical"},l.a.createElement("p",null,this.state.error.message)))))}}]),t}(l.a.Component),F=m.utilities,J=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(y.a)(this,Object(k.a)(t).call(this,e))).onChangeHandlerText=function(e){n.setState({text:e,complete:!1})},n.onChangeHandlerAppend=function(e){n.setState({append:e,complete:!1})},n.onClickHandlerExtract=function(){var e=n.state.text.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi),t=e?e.map((function(e){return"".concat(e).concat(n.state.append)})):[];n.setState({links:t,complete:!0})},n.state={text:"",append:"",links:[],complete:!1},n}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(c.k,{title:F[3].title,breadcrumbs:[{content:"Utilities",url:"/internal-tools"}]},l.a.createElement(c.i,null,l.a.createElement(c.i.Section,null,l.a.createElement(c.l,null,l.a.createElement("p",null,F[3].description))),l.a.createElement(c.i.Section,null,l.a.createElement(c.e,{primaryFooterAction:{content:"Extract links",onAction:this.onClickHandlerExtract.bind(this)}},l.a.createElement(c.e.Section,null,l.a.createElement(c.g,null,l.a.createElement("label",null,"Text"),l.a.createElement("textarea",{value:this.state.text,onChange:function(t){return e.onChangeHandlerText(t.target.value)},style:{width:"100%",height:"180px",resize:"none"}}),l.a.createElement(c.m,{label:"Append links with",value:this.state.append,onChange:function(t){return e.onChangeHandlerAppend(t)}}))))),this.state.complete&&l.a.createElement(c.i.Section,null,this.state.links.length>0&&l.a.createElement(c.c,{title:"Links extracted",status:"success"}),this.state.links.length>0&&l.a.createElement(c.e,null,l.a.createElement(c.e.Section,null,l.a.createElement(c.j,{type:"bullet"},this.state.links.map((function(e){return l.a.createElement(c.j.Item,{key:e},l.a.createElement("a",{target:"_blank",href:e},e))}))))),0===this.state.links.length&&l.a.createElement(c.c,{title:"No links found",status:"warning"}))))}}]),t}(l.a.Component),P=m.utilities;function z(){return l.a.createElement(o.a,{basename:"/internal-tools"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:P[1].path},l.a.createElement(w,null)),l.a.createElement(u.a,{path:P[2].path},l.a.createElement(U,null)),l.a.createElement(u.a,{path:P[3].path},l.a.createElement(J,null)),l.a.createElement(u.a,{path:"/"},l.a.createElement(E,null))))}i.a.render(l.a.createElement((function(){return l.a.createElement(c.a,{i18n:s},l.a.createElement(z,null))}),null),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.50b45cc5.chunk.js.map