(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{41:function(e,t,a){},44:function(e,t,a){e.exports=a.p+"static/media/Octicons.18da5e34.png"},45:function(e,t,a){e.exports=a.p+"static/media/myProfile.012f5106.jpg"},46:function(e,t,a){e.exports=a.p+"static/media/gh-rep-icon.41c4909c.jpg"},56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),l=a(23),r=a.n(l),i=(a(61),a(8)),s=a(11),o=a(10),m=a(9),u=a(27),d=a(6),h=a(14),b=(a(41),a(28)),f=a(55),E=a(22),p=a(24);var g=function(){return c.a.createElement("footer",{class:"mt-5"},c.a.createElement(h.a,{fluid:!0},c.a.createElement(E.a,{className:"border-top justify-content-between p-3"},c.a.createElement(p.a,{className:"p-0",md:3,sm:12},"Isaac Garza"),c.a.createElement(p.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Isaac Garza."))))},v=a(43);var k=function(e){return c.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid p-0"},c.a.createElement(h.a,{fluid:!0},c.a.createElement(E.a,{className:"justify-content-center py-5"},c.a.createElement(p.a,{md:8,sm:6},e.title&&c.a.createElement("h1",{className:"display-1 font-weight-bolder"},e.title),e.subTitle&&c.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&c.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},w=a(20),y=a(38);var j=function(e){var t=Object(y.b)({opacity:1,from:{opacity:0}});return c.a.createElement(y.a.div,{className:"ig-card-info",style:t},c.a.createElement("p",{className:"ig-card-title"},e.title),c.a.createElement("p",{className:"ig-card-sub-title"},e.subTitle),c.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var N=function(e){return c.a.createElement("div",{className:"d-inline-block ig-card",onClick:function(t){return e.click(e.item)}},c.a.createElement("img",{className:"ig-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&c.a.createElement(j,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link}))},C=a(44),I=a.n(C),T=a(45),x=a.n(T),z=a(46),O=a.n(z),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleCardClick=function(e,t){var a=Object(w.a)(n.state.items);a[e].selected=!a[e].selected,a.forEach((function(t){t.id!==e&&(t.selected=!1)})),n.setState({items:a})},n.makeItems=function(e){return e.map((function(e){return c.a.createElement(N,{item:e,click:function(t){return n.handleCardClick(e.id,t)},key:e.id})}))},n.state={items:[{id:0,title:"GitHub",subTitle:"What I've worked on.",imgSrc:I.a,link:"https://github.com/Isaac-Garza",selected:!1},{id:1,title:"Isaac Garza",subTitle:"This is Who I am",imgSrc:x.a,link:"https://www.linkedin.com/in/isaac-garza957/",selected:!1},{id:2,title:"Latest Works",subTitle:"CI Tutor App",imgSrc:O.a,link:"https://github.com/Isaac-Garza/CSUCI-LRC-TutorLogin/",selected:!1}]},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(h.a,{style:{zIndex:"5"},fluid:!0},c.a.createElement(E.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(c.a.Component);var G=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{title:e.title,subTitle:e.subTitle,text:e.text}),c.a.createElement(S,null))};var W=function(e){return c.a.createElement(h.a,{fluid:!0},c.a.createElement(E.a,{className:"justify-content-center"},c.a.createElement(p.a,{md:8},e.children)))};var B=function(e){return c.a.createElement("div",null,c.a.createElement(k,{title:e.title}),c.a.createElement(W,null,c.a.createElement("p",null,"My name is Isaac Garza, I am a Software Enginner, Game Developer, and Web Developer. "),c.a.createElement("p",null,"I've alway in search of new techniques and finding challenging problems that can expand my knowledge and skills."),c.a.createElement("p",null)))},D=a(19),A=a(47),L=a(49),M=a(48),H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a="checkBox"===t.type?t.checked:t.value,c=t.name;n.setState(Object(D.a)({},c,a))},n.handleSubmit=function(e){e.preventDefault(),n.setState({disabled:!0})},n.state={name:"",email:"",messenge:"",disabled:!1,emailSent:null},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(k,{title:this.props.title}),c.a.createElement("div",null,c.a.createElement(E.a,{className:"justify-content-center"},c.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="mailto:igarza957@yahoo.com"}},c.a.createElement(A.a,{size:"7em"})),c.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="https://www.linkedin.com/in/isaac-garza957/"}},c.a.createElement(M.a,{size:"7em"})),c.a.createElement("button",{class:"btn",onClick:function(){return window.location.href="https://github.com/Isaac-Garza"}},c.a.createElement(L.a,{size:"7em"})))))}}]),a}(c.a.Component),J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Isaac Garza",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/aobut"},{title:"Contact",path:"/contact"}],home:{title:"Be Determined!",subTitle:"Projects that make a Difference",text:"Checkout my projects below"},about:{title:"About Me"},contact:{title:"Reach Me"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(h.a,{className:"p-0 div-background",fluid:!0},c.a.createElement(b.a,{className:"nav-bar",bg:"white",expand:"lg"},c.a.createElement(b.a.Brand,null,"Isaac Garza"),c.a.createElement(b.a.Toggle,{"aria-controls":"navbar-toggle"}),c.a.createElement(b.a.Collapse,{id:"navbar-toggle"},c.a.createElement(f.a,{className:"ml-auto"},c.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),c.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),c.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),c.a.createElement(d.a,{path:"/",exact:!0,render:function(){return c.a.createElement(G,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),c.a.createElement(d.a,{path:"/about",render:function(){return c.a.createElement(B,{title:e.state.about.title})}}),c.a.createElement(d.a,{path:"/contact",render:function(){return c.a.createElement(H,{title:e.state.contact.title})}}),c.a.createElement(g,null)))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(70);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement("title",null,"Isaac-Garza"),c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.44b484e5.chunk.js.map