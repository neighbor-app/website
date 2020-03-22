(this["webpackJsonpneighbor-app"]=this["webpackJsonpneighbor-app"]||[]).push([[0],{121:function(e,t,a){e.exports=a(155)},126:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),i=a.n(l),c=a(10),m=a(32),s=a(198);a(126),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(11),u=a(8),h=a(12),d=a(13),E=a(197),p=a(52),g=a(156),f=a(200),b=a(199),y=a(218),v=a(201),k=a(17),x=a(188),w=a(192),j=a(193),O=a(102),C=a(196),S=a(92),A=a.n(S),K=a(88),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r,l=sessionStorage.getItem("auth");return l&&(r=JSON.parse(l)),n.state={auth:r,menuOpen:!1,menuAnchorEl:null},n.handleLogout=n.handleLogout.bind(Object(k.a)(n)),n.handleClick=n.handleClick.bind(Object(k.a)(n)),n.handleClose=n.handleClose.bind(Object(k.a)(n)),n}return Object(u.a)(a,[{key:"handleLogout",value:function(){sessionStorage.removeItem("auth"),this.setState({auth:void 0,menuOpen:this.state.menuOpen,menuAnchorEl:this.state.menuAnchorEl})}},{key:"handleClick",value:function(e){this.setState({auth:this.state.auth,menuOpen:!0,menuAnchorEl:e.currentTarget})}},{key:"handleClose",value:function(){this.setState({auth:this.state.auth,menuOpen:!1,menuAnchorEl:null})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Neighbor App")),r.a.createElement(x.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(j.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:this.handleClick},r.a.createElement(A.a,null)),r.a.createElement(O.a,{id:"simple-menu",anchorEl:this.state.menuAnchorEl,keepMounted:!0,open:this.state.menuOpen,onClose:this.handleClose},r.a.createElement(C.a,{component:c.b,to:"/website/",onClick:this.handleClose},"Startseite"),r.a.createElement(C.a,{component:c.b,to:"/website/helper",onClick:this.handleClose},"Helfer"),r.a.createElement(C.a,{component:c.b,to:"/website/needer",onClick:this.handleClose},"Hilfe suchend")),r.a.createElement(p.a,{variant:"h6",style:{flexGrow:1}},"Neighbor App"),this.state.auth?r.a.createElement(E.a,{onClick:this.handleLogout,color:"inherit"},"Logout"):r.a.createElement(E.a,{component:c.b,to:"/website/login",color:"inherit"},"Login"))))}}]),a}(r.a.Component),I=a(94),F=a.n(I),H=a(27),D=a.n(H),R=a(41),z=a.n(R),L=a(42),B=a.n(L),G=a(66),M=a.n(G),N=a(67),W=a.n(N),q=a(68),P=a.n(q),U=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(s.a,{container:!0,justify:"center",alignItems:"center",style:{backgroundImage:"url(".concat(F.a,")"),minHeight:"500px"}},r.a.createElement(s.a,{item:!0,style:{textAlign:"center",marginTop:"100px"}},r.a.createElement(p.a,{variant:"h1",align:"center",style:{color:"#fff",textShadow:"2px 2px #000000"}},"Nachbarn wollen helfen"),r.a.createElement(s.a,{container:!0,style:{marginTop:"75px"}},r.a.createElement(s.a,{item:!0,xs:6,style:{textAlign:"left"}},r.a.createElement(E.a,{component:c.b,to:"/website/helper",color:"primary",variant:"contained",style:{height:"100px",width:"350px",fontSize:"26px"}},"Hilfe anbieten")),r.a.createElement(s.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(E.a,{component:c.b,to:"/website/select",color:"primary",variant:"contained",style:{height:"100px",width:"350px",fontSize:"26px"}},"Hilfe suchen"))))),r.a.createElement(s.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(p.a,{variant:"h5",style:{color:"#333",padding:"25px 150px 25px 150px",display:"inline-block"}},"W\xe4hrend der Krise konzentrieren wir uns auf die Verringerung der Einkaufenden in den Superm\xe4rkten. Zeigt wann ihr einkaufen geht oder was ihr ben\xf6tigt. Erfahrt, f\xfcr wen ihr Lebensmittel & Medikamente mitbringen k\xf6nnt oder wer sie euch mitbringt. Helft euch und sch\xfctzt unsere tapferen Kassierer*innen.")),r.a.createElement(s.a,{container:!0,spacing:2,style:{margin:"10px"}},r.a.createElement(s.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{variant:"h6"},"Helfer in deiner N\xe4he"),r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:z.a})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:D.a})),r.a.createElement(f.a,{primary:"Emily E.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:B.a})),r.a.createElement(f.a,{primary:"Franziska F.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"}))),r.a.createElement(s.a,{item:!0,xs:12,md:6},r.a.createElement(p.a,{variant:"h6"},"Ben\xf6tigte Hilfe in deiner N\xe4he"),r.a.createElement(g.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:M.a})),r.a.createElement(f.a,{primary:"Philipp K.",secondary:"Braucht einen Einkauf f\xfcr 30 \u20ac"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:W.a})),r.a.createElement(f.a,{primary:"Marco P.",secondary:"Braucht einen Einkauf f\xfcr 20 \u20ac"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:P.a})),r.a.createElement(f.a,{primary:"Tim S.",secondary:"Braucht einen Einkauf f\xfcr 15 \u20ac"}),r.a.createElement(f.a,{primary:"< 40 m"})))))}}]),a}(r.a.Component),J=a(195),V=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"handleToggle",value:function(e){alert("Weiter")}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(J.a,null,r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:D.a})),r.a.createElement(f.a,{primary:"Emily E.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:z.a})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:B.a})),r.a.createElement(f.a,{primary:"Franziska F.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:M.a})),r.a.createElement(f.a,{primary:"Philipp K.",secondary:"Kann f\xfcr dich mit dem Hund Gassi gehen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:W.a})),r.a.createElement(f.a,{primary:"Marco P.",secondary:"Kann f\xfcr dich mit dem Hund Gassi gehen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,onClick:this.handleToggle},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:P.a})),r.a.createElement(f.a,{primary:"Tim S.",secondary:"Kann f\xfcr dich mit dem Hund Gassi gehen"}),r.a.createElement(f.a,{primary:"< 40 m"})))),r.a.createElement(s.a,{item:!0,xs:12,style:{margin:"10px"}},r.a.createElement(E.a,{color:"primary",variant:"contained",component:c.b,to:"/website/new-help"},"Neue Hilfe Anbieten"))))}}]),a}(r.a.Component),Z=a(95),Q=a.n(Z),$={position:"absolute",width:40,height:40,left:-20,top:-20,textAlign:"center",color:"#3f51b5",fontSize:16,padding:4,cursor:"pointer"},X=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=!1;return this.props.clicked&&(e=!0),r.a.createElement("div",{style:$},r.a.createElement(y.a,{alt:"",src:this.props.image}),e?r.a.createElement("div",{style:{backgroundColor:"#fff",width:"350px"}},r.a.createElement(g.a,null,r.a.createElement(f.a,{primary:this.props.name,secondary:this.props.offerText}),r.a.createElement(f.a,{primary:this.props.distance}))):"")}}]),a}(r.a.Component),Y=a(96),_=a.n(Y),ee={position:"absolute",width:40,height:40,left:-20,top:-20,textAlign:"center",color:"#b5263b",fontSize:16,padding:4},te=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:ee},r.a.createElement(_.a,{fontSize:"large",color:"primary"}))}}]),a}(r.a.Component),ae=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={clicked:null,lat:52.519098,lng:13.40391047},n.onGMarkerClick=n.onGMarkerClick.bind(Object(k.a)(n)),n.handleGeolocation=n.handleGeolocation.bind(Object(k.a)(n)),navigator.geolocation.getCurrentPosition(n.handleGeolocation),n}return Object(u.a)(a,[{key:"handleGeolocation",value:function(e){this.setState({clicked:this.state.clicked,lat:e.coords.latitude,lng:e.coords.longitude})}},{key:"onGMarkerClick",value:function(e,t){this.setState({clicked:parseInt(e),lat:this.state.lat,lng:this.state.lng})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(s.a,{container:!0,spacing:2,justify:"center",alignContent:"center",alignItems:"center",style:{margin:"10px"}},r.a.createElement(s.a,{item:!0,xs:12,style:{height:"50vh",width:"100%"}},r.a.createElement(Q.a,{bootstrapURLKeys:{key:"AIzaSyDawgu3zHf0qoi6ch1TGl35rO9viDOu5bQ"},center:{lat:this.state.lat,lng:this.state.lng},defaultZoom:15,yesIWantToUseGoogleMapApiInternals:!0,onChildClick:this.onGMarkerClick},r.a.createElement(X,{key:0,lat:this.state.lat+9e-4,lng:this.state.lng+.002,image:z.a,clicked:0===this.state.clicked,name:"Simon v. R.",offerText:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen",distance:"< 10 m"}),r.a.createElement(X,{key:1,lat:this.state.lat+2e-4,lng:this.state.lng-.0039,image:D.a,clicked:1===this.state.clicked,name:"Emily E.",offerText:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen",distance:"< 30 m"}),r.a.createElement(X,{key:2,lat:this.state.lat+8e-4,lng:this.state.lng+.016,image:B.a,clicked:2===this.state.clicked,name:"Armin R.",offerText:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen",distance:"< 40 m"}),r.a.createElement(te,{lat:this.state.lat,lng:this.state.lng}))),r.a.createElement(s.a,{item:!0,xs:12,md:6},r.a.createElement(J.a,null,r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:D.a})),r.a.createElement(f.a,{primary:"Emily E.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:z.a})),r.a.createElement(f.a,{primary:"Simon v. R.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset",component:"li"}),r.a.createElement(g.a,{button:!0,component:c.b,to:"/website/offer"},r.a.createElement(b.a,null,r.a.createElement(y.a,{alt:"",src:B.a})),r.a.createElement(f.a,{primary:"Franziska F.",secondary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"}))))))}}]),a}(r.a.Component),ne=a(212),re=a(213),le=a(69),ie=a(20),ce=a(210),me=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).selectedDate=new Date,e.stores=["REWE","Aldi","Lidl","Netto","Fressnapf","Edeka"],e}return Object(u.a)(a,[{key:"handleDateChange",value:function(e){this.selectedDate=e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{style:{width:"100%",maxWidth:"500px",marginTop:"40px"}},r.a.createElement(p.a,{variant:"h4",style:{textAlign:"center",color:"#3f51b5",paddingBottom:"50px"}},"Finde Hilfe in deiner Umgebung"),r.a.createElement(s.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"stretch"},r.a.createElement(s.a,{item:!0},r.a.createElement(ie.a,{utils:le.a},r.a.createElement(ce.a,{disablePast:!0,style:{display:"flex"},format:"dd/MM/yyyy",margin:"normal",id:"date-picker-",label:"Wann brauchst du deinen Einkauf",value:this.selectedDate,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(s.a,{item:!0},r.a.createElement(re.a,{options:this.stores,getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(ne.a,Object.assign({},e,{label:"Aus welchem Laden brauchst du etwas?",variant:"outlined"}))}})),r.a.createElement(v.a,null),r.a.createElement(s.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement(c.b,{to:"/website/needer"},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Suchen")))))))}}]),a}(r.a.Component),se=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).selectedDate=new Date,n.currentTime=void 0,n.stores=["REWE","Aldi","Lidl","Netto","Fressnapf","Edeka"],n.styles={container:{width:"100%",maxWidth:"800px"},header:{color:"#3f51b5"}},n.currentTime=(new Date).getHours()+":00",n}return Object(u.a)(a,[{key:"handleDateChange",value:function(e){this.selectedDate=e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{style:this.styles.container},r.a.createElement("h1",{style:this.styles.header},"Biete deine Hilfe in deiner Umgebung an"),r.a.createElement(s.a,{container:!0,direction:"column",spacing:4,justify:"center",alignItems:"stretch"},r.a.createElement(s.a,{item:!0},r.a.createElement(ie.a,{utils:le.a},r.a.createElement(ce.a,{disablePast:!0,format:"dd/MM/yyyy",margin:"normal",id:"date-picker-",label:"Wann kannst du deinen Einkauf durchf\xfchren?",style:{width:"350px"},value:this.selectedDate,onChange:this.handleDateChange.bind(this),KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(s.a,{item:!0},r.a.createElement(ne.a,{label:"Zu welcher Uhrzeit kannst du einkaufen?",defaultValue:this.currentTime,style:{width:"350px"}})),r.a.createElement(s.a,{item:!0},r.a.createElement(ne.a,{label:"F\xfcr wie viele Leute kannst du einkaufen?",defaultValue:"1",type:"number",style:{width:"350px"}})),r.a.createElement(s.a,{item:!0},r.a.createElement(ne.a,{label:"F\xfcr wie viele \u20ac kannst du einkaufen?",defaultValue:"10",type:"number",style:{width:"350px"}})),r.a.createElement(s.a,{item:!0},r.a.createElement(ne.a,{label:"Beschreibung deines Angebotes?",style:{width:"350px"}})),r.a.createElement(s.a,{item:!0},r.a.createElement(re.a,{options:this.stores,getOptionLabel:function(e){return e},renderInput:function(e){return r.a.createElement(ne.a,Object.assign({},e,{label:"Zu welchem Laden gehst du?",variant:"outlined"}))}})),r.a.createElement(v.a,null),r.a.createElement(s.a,{item:!0,container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement(c.b,{to:"/website/helper"},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Hinzuf\xfcgen")))))))}}]),a}(r.a.Component),oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=!1;return sessionStorage.getItem("auth")&&(r=!0),n.authenticate=n.authenticate.bind(Object(k.a)(n)),n.handleChange=n.handleChange.bind(Object(k.a)(n)),n.state={username:"",password:"",error:{username:!1,password:!1},loggedIn:r},n}return Object(u.a)(a,[{key:"handleChange",value:function(e){var t=this.state.username,a=this.state.password;"username"===e.target.name?t=e.target.value:"password"===e.target.name&&(a=e.target.value),this.setState({username:t,password:a,error:{username:!1,password:!1},loggedIn:!1})}},{key:"authenticate",value:function(e){e.preventDefault();var t,a=!1;"helper"===this.state.username&&"test123"===this.state.password?t={token:"ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7",user:{username:"helper",name:"Max Helfer"}}:"needer"===this.state.username&&"test123"===this.state.password&&(t={token:"ea1e7d8d586ca3a97e84082746dc758a7dbb3e8daf985a9e0fbc3408da029bc7",user:{username:"needer",name:"Max Hilfe"}}),"object"===typeof t&&(sessionStorage.setItem("auth",JSON.stringify(t)),a=!0),this.setState({username:this.state.username,password:"",error:{username:!0,password:!0},loggedIn:a})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),this.state.loggedIn?r.a.createElement(m.a,{to:"/website/"}):null,r.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:this.authenticate},r.a.createElement("div",null,r.a.createElement(ne.a,{error:this.state.error.username,value:this.state.username,label:"Username",name:"username",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(ne.a,{error:this.state.error.password,value:this.state.password,label:"Password",type:"password",name:"password",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement(E.a,{type:"submit"},"Login"))))}}]),a}(r.a.Component),ue=a(215),he=a(204),de=a(202),Ee=a(205),pe=a(203),ge=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleRequest=n.handleRequest.bind(Object(k.a)(n)),n.handleCloseRequest=n.handleCloseRequest.bind(Object(k.a)(n)),n.state={requesting:!1},n}return Object(u.a)(a,[{key:"handleRequest",value:function(e,t){this.setState({requesting:!0})}},{key:"handleCloseRequest",value:function(e,t){this.setState({requesting:!1})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{style:{maxWidth:"500px",marginTop:"40px"}},r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(c.b,{to:"/website/user-detail/1",style:{textDecoration:"none",color:"inherit"}},r.a.createElement(y.a,{src:D.a,style:{width:"100px",height:"100px"}}))),r.a.createElement(s.a,{item:!0},r.a.createElement(p.a,{variant:"h5"},r.a.createElement(c.b,{to:"/website/user-detail/1",style:{textDecoration:"none",color:"inherit"}},"Emily E.")),r.a.createElement(p.a,{variant:"subtitle2"},"Aus deiner Umgebung m\xf6chte helfen"))),r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0},r.a.createElement(p.a,{variant:"subtitle2"},"Ich kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac erledigen, Ich werden bei Rewe und Lidl gegen 15:00 einkaufen ")),r.a.createElement(s.a,{item:!0},r.a.createElement(c.b,{to:"chat"},r.a.createElement(E.a,{variant:"contained",color:"primary"},"Nachricht senden"))),r.a.createElement(s.a,{item:!0},r.a.createElement(E.a,{variant:"contained",color:"primary",onClick:this.handleRequest},"Einkauf anfragen"))),r.a.createElement(ue.a,{open:this.state.requesting},r.a.createElement(he.a,{id:"alert-dialog-title"}),r.a.createElement(de.a,null,r.a.createElement(Ee.a,{id:"alert-dialog-description"},"Deine Anfrage ist wurde gesendet")),r.a.createElement(pe.a,null,r.a.createElement(E.a,{onClick:this.handleCloseRequest,color:"primary"},"Alles Klar")))))}}]),a}(r.a.Component),fe=a(206),be=a(207),ye=a(208),ve=a(99),ke=a.n(ve),xe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).style={me:{background:"rgb(182, 223, 158)",padding:"15px",borderRadius:"10px",width:"70%",flexBasis:"left",alignSelf:"end",marginBottom:"20px"},nme:{background:"rgb(232, 232, 232)",padding:"15px",borderRadius:"10px",width:"70%",marginBottom:"20px"}},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(fe.a,{style:{marginTop:"30px"}},r.a.createElement(be.a,null,r.a.createElement("div",{style:{display:"flex",flexDirection:"column",minHeight:"400px"}},r.a.createElement("div",{className:"me",style:this.style.me},"Ich brauche M\xf6hren, Kartoffeln und Zwiebeln, geht das?"),r.a.createElement("div",{className:"him",style:this.style.nme},"Ja, geht klar"),r.a.createElement("div",{className:"me",style:this.style.me},"Danke"))),r.a.createElement(ye.a,null,r.a.createElement(ne.a,{style:{width:"440px"}}),r.a.createElement(E.a,null,r.a.createElement(ke.a,null)))))}}]),a}(r.a.Component),we=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(s.a,{container:!0,spacing:2,style:{margin:"10px"}},r.a.createElement(s.a,{item:!0,xs:2},r.a.createElement(y.a,{alt:"",src:D.a,style:{width:"100px",height:"100px"}})),r.a.createElement(s.a,{item:!0,xs:10},r.a.createElement(p.a,{variant:"h4"}," Emily E.")),r.a.createElement(s.a,{item:!0,xs:12,style:{marginTop:"10px"}},"Helfer aus Berlin"),r.a.createElement(s.a,{item:!0,xs:12,style:{marginTop:"10px"}},r.a.createElement(p.a,{variant:"body1"},"Aktuelle Angebote"),r.a.createElement(g.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 20 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 30 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 30 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 10 m"})),r.a.createElement(v.a,{variant:"inset"}),r.a.createElement(g.a,{button:!0},r.a.createElement(f.a,{primary:"Kann f\xfcr dich einen Einkauf f\xfcr 15 \u20ac t\xe4tigen"}),r.a.createElement(f.a,{primary:"< 40 m"})))))}}]),a}(r.a.Component),je=Object(m.g)(we),Oe=a(209),Ce=a(100),Se=a.n(Ce),Ae=a(101),Ke=a.n(Ae),Te=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={redirect:null},e}return Object(u.a)(a,[{key:"handleSelect",value:function(e){this.setState({redirect:"/website/search"})}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(m.a,{to:this.state.redirect}):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{style:{maxWidth:"500px",width:"100%",marginTop:"40px"}},r.a.createElement(p.a,{variant:"h4",style:{textAlign:"center",color:"#3f51b5",paddingBottom:"50px"}},"Wobei brauchst du Unterst\xfctztung"),r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(fe.a,null,r.a.createElement(Oe.a,{style:{textAlign:"center",padding:"13px"},onClick:this.handleSelect.bind(this)},r.a.createElement(Se.a,{style:{fontSize:140,textAlign:"center"}}),r.a.createElement(p.a,{variant:"subtitle1"},"Einkaufen gehen")))),r.a.createElement(s.a,{item:!0,xs:6},r.a.createElement(fe.a,null,r.a.createElement(Oe.a,{style:{textAlign:"center",padding:"13px"},onClick:this.handleSelect.bind(this)},r.a.createElement(Ke.a,{style:{fontSize:140}}),r.a.createElement(p.a,{variant:"subtitle1"},"Gassi gehen")))))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(c.a,null,r.a.createElement(s.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{flexGrow:1}},r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/website/"},r.a.createElement(U,null)),r.a.createElement(m.b,{path:"/website/helper"},r.a.createElement(V,null)),r.a.createElement(m.b,{path:"/website/needer"},r.a.createElement(ae,null)),r.a.createElement(m.b,{path:"/website/login"},r.a.createElement(oe,null)),r.a.createElement(m.b,{path:"/website/select"},r.a.createElement(Te,null)),r.a.createElement(m.b,{path:"/website/search"},r.a.createElement(me,null)),r.a.createElement(m.b,{path:"/website/offer"},r.a.createElement(ge,null)),r.a.createElement(m.b,{path:"/website/new-help"},r.a.createElement(se,null)),r.a.createElement(m.b,{path:"/website/chat"},r.a.createElement(xe,null)),r.a.createElement(m.b,{path:"/website/user-detail/:id"},r.a.createElement(je,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){e.exports=a.p+"static/media/001.c601be69.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/002.68202f84.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/003.05e2c3f3.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/004.c34e1c32.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/005.e4224608.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/006.8900c389.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/home.89405429.jpg"}},[[121,1,2]]]);
//# sourceMappingURL=main.c49fa1d3.chunk.js.map