(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{240:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(16),i=n.n(r),l=(n(93),n(31)),s=n(32),c=n(34),u=n(33),m=n(35),d=(n(95),n(81)),h=n(15),g=n.n(h),p=n(46),f=n.n(p),b=n(17),v=n.n(b),E=n(47),y=n.n(E);var x=Object(d.withStyles)(function(e){return{root:{flexGrow:1,maxWidth:700,padding:2*e.spacing.unit,"margin-top":2,"margin-right":"auto","margin-bottom":0,"margin-left":"auto","text-align":"left",cursor:"pointer"},image:{width:100,height:100},img:{margin:"auto",display:"block",maxWidth:"100%",maxHeight:"100%"}}})(function(e){var t=e.classes,n=e.searchResult,a=e.getBookDetails,r=e.index;return o.a.createElement(f.a,{className:t.root,key:"id-"+r,onClick:function(){return a(n.best_book.id["#text"])}},o.a.createElement(g.a,{container:!0,spacing:16},o.a.createElement(g.a,{item:!0},o.a.createElement(y.a,{className:t.image},o.a.createElement("img",{className:t.img,alt:"complex",src:n.best_book.small_image_url}))),o.a.createElement(g.a,{item:!0,xs:12,sm:!0,container:!0},o.a.createElement(g.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},o.a.createElement(g.a,{item:!0,xs:!0},o.a.createElement(v.a,{gutterBottom:!0,variant:"h5"},n.best_book.title))))))}),k=n(48),w=n.n(k),S=n(82),j=n.n(S),C=n(85),O=n.n(C),D=n(84),T=n.n(D),N=n(83),B=n.n(N),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0,scroll:"paper"},n.handleClickOpen=function(e){return function(){n.setState({open:!0,scroll:e})}},n.handleClose=function(){n.setState({open:!1}),n.props.reset()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.bookDetail;return o.a.createElement("div",null,o.a.createElement(j.a,{open:this.state.open,onClose:this.handleClose,scroll:this.state.scroll,"aria-labelledby":"scroll-dialog-title"},e?o.a.createElement("span",null,o.a.createElement(B.a,{id:"scroll-dialog-title"},"Bood Detail"),o.a.createElement(T.a,null,o.a.createElement(g.a,{container:!0,spacing:16},o.a.createElement(g.a,{item:!0},o.a.createElement("img",{alt:"complex",src:e.image_url})),o.a.createElement(g.a,{item:!0,xs:12,sm:!0,container:!0},o.a.createElement(g.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:16},o.a.createElement(g.a,{item:!0,xs:!0},o.a.createElement(v.a,{gutterBottom:!0,variant:"h5"},e.title["#cdata"]),o.a.createElement(v.a,{gutterBottom:!0,variant:"h5"},o.a.createElement("b",null,"by ",Array.isArray(e.authors.author)?e.authors.author.map(function(e){return e.name+", "}):e.authors.author.name," ")),o.a.createElement(v.a,{color:"textSecondary"},"*****: ",e.average_rating," | Rating details | ",e.ratings_count["#cdata"]," Ratings | ",e.text_reviews_count["#cdata"]," Reviews"))))),o.a.createElement("br",null),o.a.createElement(a.Fragment,null,o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.description&&e.description["#cdata"]}}))),o.a.createElement(O.a,null,o.a.createElement(w.a,{onClick:this.handleClose,color:"primary"},"Close"))):o.a.createElement("span",null,"Loading...")))}}]),t}(o.a.Component),A=n(49),P=n.n(A),R=function(e,t){var n={toObj:function(e){var t={};if(1===e.nodeType){if(e.attributes.length)for(var a=0;a<e.attributes.length;a++)t["@"+e.attributes[a].nodeName]=(e.attributes[a].nodeValue||"").toString();if(e.firstChild){for(var o=0,r=0,i=!1,l=e.firstChild;l;l=l.nextSibling)1===l.nodeType?i=!0:3===l.nodeType&&l.nodeValue.match(/[^ \f\n\r\t\v]/)?o++:4===l.nodeType&&r++;if(i)if(o<2&&r<2){n.removeWhite(e);for(var s=e.firstChild;s;s=s.nextSibling)3===s.nodeType?t["#text"]=n.escape(s.nodeValue):4===s.nodeType?t["#cdata"]=n.escape(s.nodeValue):t[s.nodeName]?t[s.nodeName]instanceof Array?t[s.nodeName][t[s.nodeName].length]=n.toObj(s):t[s.nodeName]=[t[s.nodeName],n.toObj(s)]:t[s.nodeName]=n.toObj(s)}else e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(o)e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(r)if(r>1)t=n.escape(n.innerXml(e));else for(var c=e.firstChild;c;c=c.nextSibling)t["#cdata"]=n.escape(c.nodeValue)}e.attributes.length||e.firstChild||(t=null)}else 9===e.nodeType?t=n.toObj(e.documentElement):alert("unhandled node type: "+e.nodeType);return t},toJson:function(e,t,a){var o=t?'"'+t+'"':"";if(e instanceof Array){for(var r=0,i=e.length;r<i;r++)e[r]=n.toJson(e[r],"",a+"\t");o+=(t?":[":"[")+(e.length>1?"\n"+a+"\t"+e.join(",\n"+a+"\t")+"\n"+a:e.join(""))+"]"}else if(null===e)o+=(t&&":")+"null";else if("object"===typeof e){var l=[];for(var s in e)l[l.length]=n.toJson(e[s],s,a+"\t");o+=(t?":{":"{")+(l.length>1?"\n"+a+"\t"+l.join(",\n"+a+"\t")+"\n"+a:l.join(""))+"}"}else o+="string"===typeof e?(t&&":")+'"'+e.toString()+'"':(t&&":")+e.toString();return o},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=function e(t){var n="";if(1===t.nodeType){n+="<"+t.nodeName;for(var a=0;a<t.attributes.length;a++)n+=" "+t.attributes[a].nodeName+'="'+(t.attributes[a].nodeValue||"").toString()+'"';if(t.firstChild){n+=">";for(var o=t.firstChild;o;o=o.nextSibling)n+=e(o);n+="</"+t.nodeName+">"}else n+="/>"}else 3===t.nodeType?n+=t.nodeValue:4===t.nodeType&&(n+="<![CDATA["+t.nodeValue+"]]>");return n},a=e.firstChild;a;a=a.nextSibling)t+=n(a);return t},escape:function(e){return e.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3===t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var a=t.nextSibling;e.removeChild(t),t=a}else 1===t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};9===e.nodeType&&(e=e.documentElement);var a=n.toJson(n.toObj(n.removeWhite(e)),e.nodeName,"\t");return"{\n"+t+(t?a.replace(/\t/g,t):a.replace(/\t|\n/g,""))+"\n}"},V=function(e){var t=null;if(window.DOMParser)try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(n){t=null}else alert("cannot parse xml string!");return t},J=function(e){return new Promise(function(t,n){P()("api/search?q="+e,{method:"GET"}).then(function(e){var n=V(e.data),a=R(n);t(JSON.parse(a.replace("undefined","")))}).catch(function(e){console.log(e),n(e)})})},L=function(e){return new Promise(function(t,n){P()("api/getDetails?q="+e,{method:"GET"}).then(function(e){var n=V(e.data),a=R(n);t(JSON.parse(a.replace("undefined","")))}).catch(function(e){console.log(e),n(e)})})},W=n(87),F=n.n(W),X=n(86),G=n.n(X),M=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).reset=function(){n.setState({isShowDialogBox:!1,bookDetail:void 0})},n.handleKeyPress=function(e){13===e.charCode&&(n.setState({isLoading:!0}),J(e.target.value).then(function(e){return n.setState({posts:e,isLoading:!1})}))},n.getBookDetails=function(e){n.setState({isShowDialogBox:!0}),L(e).then(function(e){n.setState({bookDetail:e})})},n.state={isShowDialogBox:!1},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.posts?this.state.posts.GoodreadsResponse.search.results:void 0,n=this.state.bookDetail?this.state.bookDetail.GoodreadsResponse.book:void 0;return[o.a.createElement("div",{className:"App"},o.a.createElement(G.a,{htmlFor:"search"},"Provide Book Title and Press Enter (ex. react)"),"\xa0\xa0\xa0\xa0",o.a.createElement(F.a,{type:"text",name:"search",id:"search",onKeyPress:this.handleKeyPress,autoFocus:!0}),this.state.isLoading&&o.a.createElement("span",{id:"loading"},"Loading..."),null===t?o.a.createElement("span",{id:"notFound"},"No Result Found"):"",t&&Array.isArray(t.work)?t.work.map(function(t,n){return o.a.createElement(x,{searchResult:t,getBookDetails:e.getBookDetails,index:n})}):t&&o.a.createElement(x,{searchResult:t.work,getBookDetails:e.getBookDetails,index:1})),this.state.isShowDialogBox?o.a.createElement(_,{bookDetail:n,reset:this.reset}):null]}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},88:function(e,t,n){e.exports=n(240)},93:function(e,t,n){},95:function(e,t,n){}},[[88,2,1]]]);
//# sourceMappingURL=main.1f880e23.chunk.js.map