(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{43:function(e,t,a){e.exports=a.p+"static/media/Octicons.18da5e34.png"},44:function(e,t,a){e.exports=a.p+"static/media/myProfile.012f5106.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/gh-rep-icon.41c4909c.jpg"},56:function(e,t,a){e.exports=a(73)},6:function(e,t,a){e.exports={cusBody:"stars_cusBody__3W3q1",night:"stars_night__3mYxM",shooting_star:"stars_shooting_star__23nZl",tail:"stars_tail__Sfbuv",shooting:"stars_shooting__3WREY",shining:"stars_shining__3hYO4",sky:"stars_sky__3CTTq"}},61:function(e,t,a){},62:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(23),c=a.n(i),l=(a(61),a(8)),s=a(11),o=a(9),m=a(10),u=a(28),d=a(7),h=a(14),E=(a(62),a(27)),g=a(55),f=a(22),p=a(24);var b=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"border-top justify-content-between p-3"},r.a.createElement(p.a,{className:"p-0",md:3,sm:12},"Isaac Garza"),r.a.createElement(p.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Isaac Garza."))))},v=a(42),N=(a(63),a(6)),_=a.n(N),k=function(){return r.a.createElement("div",{className:_.a.night},r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}),r.a.createElement("div",{className:_.a.shooting_star}))};var w=function(e){return r.a.createElement("div",null,r.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid p-0"},r.a.createElement(k,null),r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-center py-5"},r.a.createElement(p.a,{md:8,sm:6},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&r.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&r.a.createElement("h3",{className:"lead font-weight-light"},e.text))))))},y=a(20),j=a(37);var C=function(e){var t=Object(j.b)({opacity:1,from:{opacity:0}});return r.a.createElement(j.a.div,{className:"ig-card-info",style:t},r.a.createElement("p",{className:"ig-card-title"},e.title),r.a.createElement("p",{className:"ig-card-sub-title"},e.subTitle),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var T=function(e){return r.a.createElement("div",{className:"d-inline-block ig-card",onClick:function(t){return e.click(e.item)}},r.a.createElement("img",{className:"ig-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&r.a.createElement(C,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},O=a(43),x=a.n(O),I=a(44),z=a.n(I),S=a(45),G=a.n(S),W=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){console.log(e);var a=Object(y.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return r.a.createElement(T,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"GitHub",subTitle:"What I've worked on.",imgSrc:x.a,link:"https://github.com/Isaac-Garza",selected:!1},{id:1,title:"Isaac Garza",subTitle:"This is Who I am",imgSrc:z.a,link:"https://google.com",selected:!1},{id:2,title:"Current Works",subTitle:"What I'm working on Now",imgSrc:G.a,link:"https://github.com/Isaac-Garza/CSUCI-LRC-TutorLogin/",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(r.a.Component);var q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{title:e.title,subTitle:e.subTitle,text:e.text}),r.a.createElement(W,null))};var B=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(p.a,{md:8},e.children)))};var L=function(e){return r.a.createElement("div",null,r.a.createElement(w,{title:e.title}),r.a.createElement(B,null,r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec."),r.a.createElement("p",null,"Porta lorem mollis aliquam ut porttitor leo a diam. Risus pretium quam vulputate dignissim suspendisse in est ante. Tempor nec feugiat nisl pretium fusce id velit ut tortor."),r.a.createElement("p",null,"Lacus luctus accumsan tortor posuere. Tincidunt vitae semper quis lectus. Urna nunc id cursus metus aliquam eleifend mi. Nunc sed augue lacus viverra vitae. Ornare arcu odio ut sem nulla pharetra. Diam vulputate ut pharetra sit amet.")))},A=a(19),M=a(46),R=a(48),D=a(47),H=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkBox"===t.type?t.checked:t.value,r=t.name;n.setState(Object(A.a)({},r,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0})},n.state={name:"",email:"",messenge:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,{title:this.props.title}),r.a.createElement("div",null,r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="mailto:igarza957@yahoo.com"}},r.a.createElement(M.a,{size:"7em"})),r.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="https://www.linkedin.com/in/isaac-garza957/"}},r.a.createElement(D.a,{size:"7em"})),r.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="https://github.com/Isaac-Garza"}},r.a.createElement(R.a,{size:"7em"})))))}}]),a}(r.a.Component),P=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={title:"Isaac Garza",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/aobut"},{title:"Contact",path:"/contact"}],home:{title:"Don't be Suspicious",subTitle:"Projects that make a difference",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Reach Me"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement(h.a,{className:"p-0 div-background",fluid:!0},r.a.createElement(E.a,{className:"border-bottom",bg:"transparent",expand:"lg"},r.a.createElement(E.a.Brand,null,"Isaac Garza"),r.a.createElement(E.a.Toggle,{"aria-controls":"navbar-toggle"}),r.a.createElement(E.a.Collapse,{id:"navbar-toggle"},r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),r.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),r.a.createElement(d.a,{path:"/",exact:!0,render:function(){return r.a.createElement(q,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),r.a.createElement(d.a,{path:"/about",render:function(){return r.a.createElement(L,{title:e.state.about.title})}}),r.a.createElement(d.a,{path:"/contact",render:function(){return r.a.createElement(H,{title:e.state.contact.title})}}),r.a.createElement(b,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("title",null,"Isaac-Garza"),r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.3370ee2f.chunk.js.map