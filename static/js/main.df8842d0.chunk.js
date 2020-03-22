(this["webpackJsonpneighbor-app"]=this["webpackJsonpneighbor-app"]||[]).push([[0],{104:function(e,a,t){e.exports=t(120)},109:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),c=t(12),m=t(30),o=t(164);t(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(15),u=t(9),d=t(16),h=t(17),E=t(163),p=t(62),b=t(122),f=t(166),g=t(165),y=t(175),v=t(167),w=t(20),k=t(154),j=t(158),x=t(159),O=t(85),C=t(162),A=t(80),S=t.n(A),I=t(76),K=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;Object(s.a)(this,t),n=a.call(this,e);var r,l=sessionStorage.getItem("auth");return l&&(r=JSON.parse(l)),n.state={auth:r,menuOpen:!1,menuAnchorEl:null},n.handleLogout=n.handleLogout.bind(Object(w.a)(n)),n.handleClick=n.handleClick.bind(Object(w.a)(n)),n.handleClose=n.handleClose.bind(Object(w.a)(n)),n}return Object(u.a)(t,[{key:"handleLogout",value:function(){sessionStorage.removeItem("auth"),this.setState({auth:void 0,menuOpen:this.state.menuOpen,menuAnchorEl:this.state.menuAnchorEl})}},{key:"handleClick",value:function(e){this.setState({auth:this.state.auth,menuOpen:!0,menuAnchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({auth:this.state.auth,menuOpen:!1,menuAnchorEl:null})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Neighbor App")),r.a.createElement(k.a,{position:"static"},r.a.createElement(j.a,null,r.a.createElement(x.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.handleClick},r.a.createElement(S.a,null)),r.a.createElement(O.a,{id:"simple-menu",anchorEl:this.state.menuAnchorEl,keepMounted:!0,open:this.state.menuOpen,onClose:this.handleClose},r.a.createElement(C.a,{component:c.b,to:"/website/",onClick:this.handleClose},"Startseite"),r.a.createElement(C.a,{component:c.b,to:"/website/helper",onClick:this.handleClose},"Helfer"),r.a.createElement(C.a,{component:c.b,to:"/website/needer",onClick:this.handleClose},"Hilfe suchend")),r.a.createElement(p.a,{variant:"h6",style:{flexGrow:1}},"Neighbor App"),this.state.auth?r.a.createElement(E.a,{onClick:this.handleLogout,color:"inherit"},"Logout"):r.a.createElement(E.a,{component:c.b,to:"/website/login",color:"inherit"},"Login"))))}}]),t}(r.a.Component),T=t(82),H=t.n(T),D=t(58),L=t.n(D),F=t(59),B=t.n(F),R=t(60),N=t.n(R),W=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"center",style:{backgroundImage:"url(".concat(H.a,")"),minHeight:"500px"}},r.a.createElement(o.a,{item:!0,xs:12,style:{textAlign:"center",marginTop:"150px"}},r.a.createElement(p.a,{variant:"h1",style:{color:"#fff"}},"Headline text")),r.a.createElement(o.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(p.a,{variant:"h4",style:{color:"#fff",marginTop:"-50px"}},"Subheadline text")),r.a.createElement(o.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},r.a.createElement(E.a,{component:c.b,to:"/website/helper",color:"primary",variant:"contained"},"Hilfe anbieten")),r.a.createElement(o.a,{item:!0,xs:12,md:6,style:{textAlign:"center"}},r.a.createElement(E.a,{component:c.b,to:"/website/search",color:"primary",variant:"contained"},"Hilfe suchen"))),r.a.createElement(o.a,{container:!0,spacing:2,style:{margin:"10px"}},r.a.createElement(o.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{variant:"h6"},"Helfer in deiner N\xe4he"),r.a.createElement(b.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:B.a})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:L.a})),r.a.createElement(f.a,{primary:"Andy K",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:N.a})),r.a.createElement(f.a,{primary:"Armin R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"}))),r.a.createElement(o.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{variant:"h6"},"Ben\xf6tigte Hilfe in deiner N\xe4he"),r.a.createElement(b.a,{button:!0},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/2.jpg"})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Braucht einen Einkauf f\xfcr 30 \u20ac"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/1.jpg"})),r.a.createElement(f.a,{primary:"Andy K",secondary:"Braucht einen Einkauf f\xfcr 20 \u20ac"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/3.jpg"})),r.a.createElement(f.a,{primary:"Armin R.",secondary:"Braucht einen Einkauf f\xfcr 15 \u20ac"}),r.a.createElement(f.a,{primary:"< 40 m"})))))}}]),t}(r.a.Component),M=t(161),P=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"handleToggle",value:function(e){alert("Weiter")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(o.a,{container:!0,spacing:2},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(M.a,null,r.a.createElement(b.a,{button:!0,onClick:this.handleToggle},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/1.jpg"})),r.a.createElement(f.a,{primary:"Andy K",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(b.a,{button:!0,onClick:this.handleToggle},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/2.jpg"})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(b.a,{button:!0,onClick:this.handleToggle},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:"/media/avatar/3.jpg"})),r.a.createElement(f.a,{primary:"Armin R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"})))),r.a.createElement(o.a,{item:!0,xs:12,style:{margin:"10px"}},r.a.createElement(E.a,{color:"primary",variant:"contained",component:c.b,to:"/website/new-help"},"Neue Hilfe Anbieten"))))}}]),t}(r.a.Component),U=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={redirect:null},e}return Object(u.a)(t,[{key:"handleToggle",value:function(e){this.setState({redirect:"/website/offer"})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(m.a,{to:this.state.redirect}):r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(M.a,null,r.a.createElement(b.a,{button:!0,onClick:this.handleToggle.bind(this)},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:L.a})),r.a.createElement(f.a,{primary:"Andy K",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(b.a,{button:!0,onClick:this.handleToggle.bind(this)},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:B.a})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(b.a,{button:!0,onClick:this.handleToggle.bind(this)},r.a.createElement(g.a,null,r.a.createElement(y.a,{alt:"",src:N.a})),r.a.createElement(f.a,{primary:"Armin R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"}))))}}]),t}(r.a.Component),J=t(170),V=t(171),X=t(61),z=t(19),G=t(168),Z=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).selectedDate=new Date,e.stores=["REWE","Aldi","Lidl","Netto","Fressnapf","Edeka"],e}return Object(u.a)(t,[{key:"handleDateChange",value:function(e){this.selectedDate=e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement("div",{style:{width:"100%",maxWidth:"500px",marginTop:"40px"}},r.a.createElement(p.a,{variant:"h4",style:{color:"#3f51b5",paddingBottom:"50px"}},"Finde Hilfe in deiner Umgebung"),r.a.createElement(o.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"stretch"},r.a.createElement(o.a,{item:!0},r.a.createElement(z.a,{utils:X.a},r.a.createElement(G.a,{disablePast:!0,style:{display:"flex"},format:"dd/MM/yyyy",margin:"normal",id:"date-picker-",label:"Wann brauchst du deinen Einkauf",value:this.selectedDate,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(o.a,{item:!0},r.a.createElement(V.a,{options:this.stores,getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(J.a,Object.assign({},e,{label:"Aus welchem Laden brauchst du etwas?",variant:"outlined"}))}})),r.a.createElement(v.a,null),r.a.createElement(o.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(o.a,{item:!0},r.a.createElement(c.b,{to:"/website/needer"},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Suchen")))))))}}]),t}(r.a.Component),$=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).selectedDate=new Date,n.currentTime=void 0,n.stores=["REWE","Aldi","Lidl","Netto","Fressnapf","Edeka"],n.styles={container:{width:"100%",maxWidth:"800px"},header:{color:"#3f51b5"}},n.currentTime=(new Date).getHours()+":00",n}return Object(u.a)(t,[{key:"handleDateChange",value:function(e){this.selectedDate=e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement("div",{style:this.styles.container},r.a.createElement("h1",{style:this.styles.header},"Biete deine Hilfe in deiner Umgebung an"),r.a.createElement(o.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"stretch"},r.a.createElement(o.a,{item:!0},r.a.createElement(z.a,{utils:X.a},r.a.createElement(G.a,{disablePast:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-",label:"Wann kannst du deinen Einkauf durchf\xfchren?",style:{width:"350px"},value:this.selectedDate,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(o.a,{item:!0},r.a.createElement(J.a,{label:"Zu welcher Uhrzeit kannst du einkaufen?",defaultValue:this.currentTime,style:{width:"350px"}})),r.a.createElement(o.a,{item:!0},r.a.createElement(J.a,{label:"F\xfcr wie viele Leute kannst du einkaufen?",defaultValue:"1",type:"number",style:{width:"350px"}})),r.a.createElement(o.a,{item:!0},r.a.createElement(J.a,{label:"F\xfcr wie viele \u20ac kannst du einkaufen?",defaultValue:"10",type:"number",style:{width:"350px"}})),r.a.createElement(o.a,{item:!0},r.a.createElement(J.a,{label:"Beschreibung deines Angebotes?",style:{width:"350px"}})),r.a.createElement(o.a,{item:!0},r.a.createElement(V.a,{options:this.stores,getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(J.a,Object.assign({},e,{label:"Zu welchem Laden gehst du?",variant:"outlined"}))}})),r.a.createElement(v.a,null),r.a.createElement(o.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(o.a,{item:!0},r.a.createElement(c.b,{to:"/website/helper"},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Hinzuf\xfcgen")))))))}}]),t}(r.a.Component),q=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(e){var n;Object(s.a)(this,t),n=a.call(this,e);var r=!1;return sessionStorage.getItem("auth")&&(r=!0),n.authenticate=n.authenticate.bind(Object(w.a)(n)),n.handleChange=n.handleChange.bind(Object(w.a)(n)),n.state={username:"",password:"",error:{username:!1,password:!1},loggedIn:r},n}return Object(u.a)(t,[{key:"handleChange",value:function(e){var a=this.state.username,t=this.state.password;"username"===e.target.name?a=e.target.value:"password"===e.target.name&&(t=e.target.value),this.setState({username:a,password:t,error:{username:!1,password:!1},loggedIn:!1})}},{key:"authenticate",value:function(e){e.preventDefault();var a,t=!1;"helper"===this.state.username&&"test123"===this.state.password?a={token:"ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7",user:{username:"helper",name:"Max Helfer"}}:"needer"===this.state.username&&"test123"===this.state.password&&(a={token:"ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7",user:{username:"needer",name:"Max Hilfe"}}),"object"===typeof a&&(sessionStorage.setItem("auth",JSON.stringify(a)),t=!0),this.setState({username:this.state.username,password:"",error:{username:!0,password:!0},loggedIn:t})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),this.state.loggedIn?r.a.createElement(m.a,{to:"/website/"}):null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.authenticate},r.a.createElement("div",null,r.a.createElement(J.a,{error:this.state.error.username,value:this.state.username,label:"Username",name:"username",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(J.a,{error:this.state.error.password,value:this.state.password,label:"Password",type:"password",name:"password",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(E.a,{type:"submit"},"Login"))))}}]),t}(r.a.Component),Q=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={redirect:null},e}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement("div",{style:{maxWidth:"500px",marginTop:"40px"}},r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0},r.a.createElement(y.a,{src:"/media/avatar/1.jpg",style:{width:"100px",height:"100px"}})),r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,{variant:"h5"},r.a.createElement(c.b,{to:"/website/user-detail/1",style:{textDecoration:"underline",color:"inherit"}},"Andy K.")),r.a.createElement(p.a,{variant:"subtitle2"},"Aus deiner Umgebung m\xf6chte helfen"))),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle2"},"Ich kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac erledigen, Ich werden bei Rewe und Lidl gegen 15:00 einkaufen ")),r.a.createElement(o.a,{item:!0},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Nachricht senden")),r.a.createElement(o.a,{item:!0},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Einkauf anfragen")))))}}]),t}(r.a.Component),Y=function(e){Object(h.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(o.a,{container:!0,spacing:2,style:{margin:"10px"}},r.a.createElement(o.a,{item:!0,xs:2},r.a.createElement(y.a,{alt:"",src:"/media/avatar/1.jpg"})),r.a.createElement(o.a,{item:!0,xs:10},"Andy K"),r.a.createElement(o.a,{item:!0,xs:12,style:{marginTop:"10px"}},"Helfer aus XXXX"),r.a.createElement(o.a,{item:!0,xs:12,style:{marginTop:"10px"}},r.a.createElement(p.a,{variant:"body1"},"Aktuelle Angebote"),r.a.createElement(b.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(b.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"})))))}}]),t}(r.a.Component),_=Object(m.g)(Y);i.a.render(r.a.createElement(c.a,null,r.a.createElement(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{flexGrow:1}},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/website/"},r.a.createElement(W,null)),r.a.createElement(m.b,{path:"/website/helper"},r.a.createElement(P,null)),r.a.createElement(m.b,{path:"/website/needer"},r.a.createElement(U,null)),r.a.createElement(m.b,{path:"/website/login"},r.a.createElement(q,null)),r.a.createElement(m.b,{path:"/website/search"},r.a.createElement(Z,null)),r.a.createElement(m.b,{path:"/website/offer"},r.a.createElement(Q,null)),r.a.createElement(m.b,{path:"/website/new-help"},r.a.createElement($,null)),r.a.createElement(m.b,{path:"/website/user-detail/:id"},r.a.createElement(_,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a,t){e.exports=t.p+"static/media/001.c601be69.jpg"},59:function(e,a,t){e.exports=t.p+"static/media/002.68202f84.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/003.05e2c3f3.jpg"},82:function(e,a,t){e.exports=t.p+"static/media/home.89405429.jpg"}},[[104,1,2]]]);
//# sourceMappingURL=main.df8842d0.chunk.js.map