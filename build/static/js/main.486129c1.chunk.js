(this["webpackJsonpimpact-analytics-assignment"]=this["webpackJsonpimpact-analytics-assignment"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(21),r=a.n(s),i=(a(27),a(3)),l=(a(28),a(8)),d=a(2),j=a(6),u=a.n(j),o=a(7),b=a(22),h=a.n(b),O=function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Error Fetching Products",e.t0),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=a(0),f=[],x=function(e){var t=Object(d.f)(),a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),b=j[0],h=j[1],x=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,a=localStorage.getItem("candidateStatus"),t.map((function(e){return e.status="all"})),r(t),a||localStorage.setItem("candidateStatus",JSON.stringify(t));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){x()}),[]),console.log(":status",e),Object(n.useEffect)((function(){var t=s.filter((function(t){if(t.name&&e.navbar&&t.name.toLowerCase().includes(e.navbar.toLowerCase()))return t}));h(t),f=e.navbar&&e.navbar.length?b:s}),[e.navbar]);return null==s?Object(m.jsx)("div",{children:"Loading..."}):(f=e.navbar&&e.navbar.length?b:s,Object(m.jsx)("div",{className:"candidates",children:Object(m.jsx)("div",{className:"grid-container",children:f.map((function(e,a){return Object(m.jsx)("div",{className:"grid-item",children:Object(m.jsxs)("div",{className:"card",onClick:function(){return function(e){t("/candidate/".concat(e.id),{state:{item:e}})}(e)},children:[Object(m.jsx)("img",{className:"img",style:{height:"30%",width:"40%",borderRadius:10},src:e.Image,alt:"candidate"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h4",{children:Object(m.jsxs)("b",{children:[" ",e.name]})})})]})},e.id)}))})}))},v=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({}),r=Object(i.a)(s,2),l=r[0],j=r[1],u=Object(d.e)().state,o=Object(d.f)();return Object(n.useEffect)((function(){var e=localStorage.getItem("candidateStatus"),t=JSON.parse(e).filter((function(e){return e.id===u.item.id}));j(t[0]),c(JSON.parse(e))}),[]),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"single-candidate",children:[Object(m.jsxs)("div",{class:"product-card",children:[Object(m.jsx)("img",{src:u&&u.item&&u.item.Image,alt:"Avatar",className:"single-can-img "}),Object(m.jsx)("p",{className:"btns",children:l&&"all"===l.status?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{style:{marginRight:5},className:"btn2",onClick:function(){a.map((function(e){e.id==u.item.id&&(e.status="shortlisted")})),c(a),j(a),localStorage.setItem("candidateStatus",JSON.stringify(a)),o("../",{replace:!0})},children:"Shortlist"}),"",Object(m.jsx)("button",{className:"btn1",onClick:function(){a.map((function(e){e.id==u.item.id&&(e.status="rejected")})),c(a),j(a),localStorage.setItem("candidateStatus",JSON.stringify(a)),o("../",{replace:!0})},children:"Reject"})]}):Object(m.jsx)("button",{className:"shortlisted"==l.status?"btn2":"btn1",children:l.status})})]}),Object(m.jsxs)("div",{className:"card-data",style:{marginTop:20},children:[Object(m.jsx)("h1",{children:Object(m.jsx)("i",{children:"Details of Candidate"})}),Object(m.jsxs)("h2",{children:[Object(m.jsx)("strong",{children:"ID"})," : ",u&&u.item&&u.item.id]}),Object(m.jsxs)("h2",{children:["Name : ",u&&u.item&&u.item.name]})]})]})})},g=[],p=function(e){var t=Object(d.f)(),a=Object(n.useState)([]),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),b=j[0],h=j[1],O=function(){var e=Object(o.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("candidateStatus"))&&JSON.parse(t)&&(a=JSON.parse(t).filter((function(e){return e.status==window.location.pathname.split("/")[1]})),r(a));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var t=s.filter((function(t){if(t.name&&e.navbar&&t.name.toLowerCase().includes(e.navbar.toLowerCase()))return t}));h(t),g=e.navbar&&e.navbar.length?b:s}),[e.navbar]),Object(n.useEffect)((function(){O()}),[]);return g=e.navbar&&e.navbar.length?b:s,null==s?Object(m.jsx)("div",{children:"Loading..."}):Object(m.jsx)("div",{className:"candidates",children:Object(m.jsx)("div",{className:"grid-container",children:g.map((function(e,a){return Object(m.jsx)("div",{className:"grid-item",children:Object(m.jsxs)("div",{className:"card",onClick:function(){return function(e){t("/candidate/".concat(e.id),{state:{item:e}})}(e)},children:[Object(m.jsx)("img",{className:"img",src:e.Image,alt:"Avatar",style:{height:"30%",width:"40%",borderRadius:10}}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h4",{children:Object(m.jsxs)("b",{children:[" ",e.name]})})})]})},a)}))})})},N=function(e){return Object(m.jsxs)("nav",{children:[Object(m.jsx)("div",{className:"brand",children:Object(m.jsx)("h3",{children:"Candidate"})}),Object(m.jsxs)("div",{className:"navigation",children:[Object(m.jsx)("div",{className:"search",children:Object(m.jsxs)("div",{className:"search-content",children:[Object(m.jsx)("button",{className:"search-button",children:Object(m.jsx)("i",{class:"fa fa-search"})}),Object(m.jsx)("input",{onChange:function(t){e.onSearchChange(t.target.value)},value:e.navbar,type:"text",className:"search-input",placeholder:"Search here..."})]})}),Object(m.jsxs)("ul",{className:"menu",style:{marginLeft:-30},children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/shortlisted",children:"Shortlist"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:"/rejected",children:"Rejected"})})]})]})]})};var S=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(N,{module:"Home",navbar:a,onSearchChange:function(e){c(e)}}),Object(m.jsxs)(d.c,{children:[Object(m.jsx)(d.a,{exact:!0,path:"/",element:Object(m.jsx)(x,{navbar:a})}),Object(m.jsx)(d.a,{exact:!0,path:"/candidate/:candidateId",element:Object(m.jsx)(v,{navbar:a})}),Object(m.jsx)(d.a,{exact:!0,path:"/:candidateStatus",element:Object(m.jsx)(p,{navbar:a})})]})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,50)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),w()}},[[49,1,2]]]);
//# sourceMappingURL=main.486129c1.chunk.js.map