(this["webpackJsonppolaris-example-create-react-app"]=this["webpackJsonppolaris-example-create-react-app"]||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/banner.b4044a15.png"},116:function(e,t,n){e.exports=n(264)},264:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(28),i=n.n(r),c=(n(121),n(1)),s=n(113),o=n(43),u=n(23),m={utilities:{1:{path:"/remove-unreferenced-strings",title:"Find unreferenced locale strings",description:"This utility verifies if any strings in a locale file (e.g.en.json) are unreferenced in schema.json"},2:{path:"/remap-translations",title:"Remap translation strings",description:"This utility remaps locale files to a new structure"}},locales:["da","de","en","es","fi","fr","hi","it","ja","ko","ms","nb","nl","pt-BR","pt-PT","sv","th","zh-CN","zh-TW"]},h=n(104),d=n.n(h),p=m.utilities;var f=function(){return l.a.createElement(c.i,{title:"Utilities"},l.a.createElement(c.g,null,l.a.createElement(c.g.Section,null,l.a.createElement("img",{alt:"Utilities",src:d.a,style:{width:"100%",marginBottom:"1em"}}))),l.a.createElement(c.g,null,Object.keys(p).map((function(e){return l.a.createElement(c.g.Section,{oneThird:!0,key:e},l.a.createElement(c.e,{title:p[e].title},l.a.createElement(c.e.Section,null,p[e].description),l.a.createElement(c.e.Section,null,l.a.createElement(o.b,{to:p[e].path},l.a.createElement(c.d,null,"Try it")))))}))))},g=n(44),E=n(45),b=n(47),y=n(46),v=n(48),O=function e(t){var n={};for(var a in t)if(t.hasOwnProperty(a))if("object"==typeof t[a]&&null!==t[a]){var l=e(t[a]);for(var r in l)l.hasOwnProperty(r)&&(n[a+"."+r]=l[r])}else n[a]=t[a];return n},j=function(e){var t={};for(var n in e){var a=n.split(".");a.reduce((function(t,l,r){return t[l]||(t[l]=isNaN(Number(a[r+1]))?a.length-1==r?e[n]:{}:[])}),t)}return t},S=function(e,t){return new Promise((function(n,a){setTimeout((function(){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a),n("Success!")}),150)}))},w=m.utilities,k=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(b.a)(this,Object(y.a)(t).call(this,e))).onChangeHandlerSchema=function(e){n.setState({schema:e})},n.onChangeHandlerLang=function(e){n.setState({lang:e})},n.onClickHandlerVerify=function(){n.setState({isVerified:!1});var e=O(JSON.parse(n.state.lang)),t=[];Object.keys(e).forEach((function(a){-1===n.state.schema.indexOf(a)&&(delete e[a],t.push(a))})),n.setState({keys:t,isVerified:!0,newLang:JSON.stringify(j(e),void 0,2)})},n.state={schema:"",lang:"",isVerified:!1,keys:[],newLang:""},n}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(c.i,{title:w[1].title,breadcrumbs:[{content:"Utilities",url:"/internal-tools"}]},l.a.createElement(c.g,null,l.a.createElement(c.g.Section,null,l.a.createElement(c.j,null,l.a.createElement("p",null,"This utility verifies if any strings from en.json are unreferenced in schema.json"))),l.a.createElement(c.g.Section,null,l.a.createElement(c.e,{primaryFooterAction:{content:"Verify",onAction:this.onClickHandlerVerify.bind(this)}},l.a.createElement(c.e.Section,null,l.a.createElement(c.f,null,l.a.createElement("label",null,"schema.json"),l.a.createElement("textarea",{onChange:function(t){return e.onChangeHandlerSchema(t.target.value)},style:{width:"100%",height:"180px",resize:"none"}}),l.a.createElement("label",null,"en.json"),l.a.createElement("textarea",{onChange:function(t){return e.onChangeHandlerLang(t.target.value)},style:{width:"100%",height:"180px",resize:"none"}}))))),this.state.isVerified&&l.a.createElement(c.g.Section,null,0===this.state.keys.length&&l.a.createElement(c.c,{title:"All keys in en.json are used in schema",status:"success"}),this.state.keys.length>0&&l.a.createElement(c.c,{title:"Following keys from en.json are not used in schema and have been removed:",status:"success"},l.a.createElement(c.h,{type:"bullet"},this.state.keys.map((function(e){return l.a.createElement(c.h.Item,{key:e},e)})))),this.state.keys.length>0&&l.a.createElement(c.e,null,l.a.createElement(c.e.Section,null,l.a.createElement(c.f,null,l.a.createElement("label",null,"Updated en.json"),l.a.createElement("textarea",{value:this.state.newLang,readOnly:!0,style:{width:"100%",height:"180px",resize:"none"}})))))))}}]),t}(l.a.Component),C=n(64),x=n.n(C),N=n(112),H=n(114),T=m.utilities,J=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(b.a)(this,Object(y.a)(t).call(this,e))).onChangeHandlerNew=function(e){n.setState({enNew:e})},n.onChangeHandlerLang=function(e,t){var a=Object(H.a)({},n.state.langOld);""===t?delete a[e]:a[e]=t,n.setState({langOld:a})},n.onClickHandlerRemap=function(){var e=n.state,t=[];function a(n,a){var l=O(JSON.parse(e.enNew)),r=O(JSON.parse(e.enNew)),i=O(JSON.parse(e.langOld.en)),c=O(JSON.parse(n));Object.keys(r).forEach((function(e){var n,s,o=r[e],u=(n=i,s=o,Object.keys(n).find((function(e){return n[e]===s})));u?l[e]=c[u]:(delete l[e],t.push("".concat(a,".json - ").concat(e)))}));var s=j(l);return JSON.stringify(s,void 0,2)}Object.keys(e.langOld).reduce(function(){var t=Object(N.a)(x.a.mark((function t(n,l){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:if("en"===l){t.next=6;break}return t.abrupt("return",S("".concat(l,".json"),a(e.langOld[l],l)));case 6:return t.abrupt("return",Promise.resolve());case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),Promise.resolve()).then((function(){n.setState({missing:t,complete:!0})}))},n.state={enNew:"",langOld:{},missing:[],complete:!1},n}return Object(v.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(c.i,{title:T[2].title,breadcrumbs:[{content:"Utilities",url:"/internal-tools"}]},l.a.createElement(c.g,null,l.a.createElement(c.g.Section,null,l.a.createElement(c.j,null,l.a.createElement("p",null,"This utility remaps locale files to a new structure"))),l.a.createElement(c.g.Section,null,l.a.createElement(c.e,{primaryFooterAction:{content:"Remap",onAction:this.onClickHandlerRemap.bind(this)}},l.a.createElement(c.e.Section,{subdued:!0},l.a.createElement(c.f,null,l.a.createElement(c.b,{status:"success"},"Updated file"),l.a.createElement("label",null,"en.json"),l.a.createElement("textarea",{value:this.state.enNew,onChange:function(t){return e.onChangeHandlerNew(t.target.value)},style:{width:"100%",height:"100px",resize:"none"}}))),l.a.createElement(c.e.Section,null,l.a.createElement(c.f,null,l.a.createElement(c.b,{status:"attention"},"Original files"),m.locales.map((function(t){return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("label",null,t,".json"),l.a.createElement("textarea",{value:e.state.langOld[t],onChange:function(n){return e.onChangeHandlerLang(t,n.target.value)},style:{width:"100%",height:"100px",resize:"none",marginTop:"1em"}}))})))))),l.a.createElement(c.g.Section,null,this.state.complete&&l.a.createElement(c.c,{title:"Files downloaded",status:"success"}),this.state.complete&&l.a.createElement(c.c,{title:"Following translations could not be remapped:",status:"warning"},l.a.createElement(c.h,{type:"bullet"},this.state.missing.map((function(e){return l.a.createElement(c.h.Item,{key:e},e)})))))))}}]),t}(l.a.Component),z=m.utilities;function A(){return l.a.createElement(o.a,{basename:"/internal-tools"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:z[1].path},l.a.createElement(k,null)),l.a.createElement(u.a,{path:z[2].path},l.a.createElement(J,null)),l.a.createElement(u.a,{path:"/"},l.a.createElement(f,null))))}i.a.render(l.a.createElement((function(){return l.a.createElement(c.a,{i18n:s},l.a.createElement(A,null))}),null),document.getElementById("root"))}},[[116,1,2]]]);
//# sourceMappingURL=main.92e303ea.chunk.js.map