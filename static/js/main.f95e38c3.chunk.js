(this["webpackJsonpacamica-rewards"]=this["webpackJsonpacamica-rewards"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),i=t(5),n=t.n(i),r=(t(4),t(2)),o=t(0);function l(e){return Object(o.jsxs)("div",{className:"Account",children:[Object(o.jsx)("div",{className:"account-title",children:"Historial"}),Object(o.jsx)("ul",{children:e.user.redeemHistory.slice(0,30).map((function(e){return Object(o.jsx)("p",{children:e.name},e._id)}))})]})}function u(e){return Object(o.jsxs)("div",{className:"Account",children:[Object(o.jsx)("div",{className:"account-title",children:" + Puntos "}),Object(o.jsxs)("div",{className:"account-btn",children:[Object(o.jsxs)("div",{onClick:function(){return e.sumarPuntos(1e3)},children:["1000 ",Object(o.jsx)("img",{src:"./recursos/coin.svg",alt:"moneda"})]}),Object(o.jsxs)("div",{onClick:function(){return e.sumarPuntos(5e3)},children:["5000 ",Object(o.jsx)("img",{src:"./recursos/coin.svg",alt:"moneda"})]}),Object(o.jsxs)("div",{onClick:function(){return e.sumarPuntos(7500)},children:["7500 ",Object(o.jsx)("img",{src:"./recursos/coin.svg",alt:"moneda"})]})]})]})}function j(e){var c=Object(s.useState)(!1),t=Object(r.a)(c,2),a=t[0],i=t[1],n=Object(s.useState)(!1),j=Object(r.a)(n,2),d=j[0],O=j[1];return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)("img",{className:"logo-img",src:"./recursos/aerolab-logo.svg",alt:"imagen logo"}),Object(o.jsxs)("div",{className:"User",children:[Object(o.jsxs)("div",{className:"btn-header ",children:[!0===a?Object(o.jsx)(l,{user:e.user}):null,Object(o.jsxs)("div",{onClick:function(){i(!a),O(!1)},children:[e.user.name," ",Object(o.jsx)("img",{className:"Arrow-img",src:"./recursos/down-arrow.png",alt:"flecha hacia abajo"})," "]})]}),Object(o.jsxs)("div",{className:"btn-header",children:[!0===d?Object(o.jsx)(u,{user:e.user,sumarPuntos:e.sumarPuntos}):null,Object(o.jsxs)("div",{onClick:function(){O(!d),i(!1)},children:[e.user.points," ",Object(o.jsx)("img",{className:"Coin-img",src:"./recursos/coin.svg",alt:"imagen moneda"}),Object(o.jsx)("img",{className:"Arrow-img",src:"./recursos/down-arrow.png",alt:"flecha hacia abajo"})]})]})]})]})}var d="All products",O="All prices",b={name:"",redeemHistory:[],points:0};function h(e){return Object(o.jsxs)("div",{className:"Filter",children:[Object(o.jsxs)("div",{className:"Filter-text",children:[Object(o.jsxs)("div",{className:"Filter-number",children:[e.totalProductos<=e.productosPorPagina?e.totalProductos:e.productosPorPagina," of ",e.totalProductos," products"]}),Object(o.jsxs)("div",{className:"Filter-btn",children:[Object(o.jsx)("div",{children:"Sort by:"}),Object(o.jsxs)("select",{className:"Filter-select",value:e.categoriaActual,onChange:function(c){e.actualizarCategoria(c.target.value)},children:[Object(o.jsx)("option",{value:d,children:d}),Object(o.jsx)("option",{value:"Phones",children:"Phones"}),Object(o.jsx)("option",{value:"Laptops",children:"Laptops"}),Object(o.jsx)("option",{value:"Gaming",children:"Gaming"}),Object(o.jsx)("option",{value:"Audio",children:"Audio"}),Object(o.jsx)("option",{value:"Tablets & E-readers",children:"Tablets & E-readers"}),Object(o.jsx)("option",{value:"Phone Accessories",children:"Phone accessories"}),Object(o.jsx)("option",{value:"Cameras",children:"Cameras"}),Object(o.jsx)("option",{value:"PC Accessories",children:"PC accessories"}),Object(o.jsx)("option",{value:"Monitors & TV",children:"Monitors & TV"}),Object(o.jsx)("option",{value:"Smart Home",children:"Smart Home"}),Object(o.jsx)("option",{value:"Drones",children:"Drones"})]}),Object(o.jsx)("button",{onClick:function(){return e.actualizarOrden("lowest")},className:"lowest"===e.ordenActual?"active":"",children:"Lowest price"}),Object(o.jsx)("button",{onClick:function(){return e.actualizarOrden("highest")},className:"highest"===e.ordenActual?"active":"",children:"Highest price"})]})]}),Object(o.jsxs)("div",{className:"Filter-arrows",children:[e.paginaActual>1?Object(o.jsx)("div",{onClick:e.manejarClickPaginaAnterior,children:Object(o.jsx)("img",{src:"./recursos/arrow-left.svg",alt:"flecha izquierda"})}):null,e.paginaActual<e.totalPaginas?Object(o.jsx)("div",{onClick:e.manejarClickPaginaSiguiente,children:Object(o.jsx)("img",{src:"./recursos/arrow-right.svg",alt:"flecha derecha"})}):null]})]})}function m(){return Object(o.jsxs)("div",{className:"Main",children:[Object(o.jsx)("img",{src:"./recursos/header-x1.png",alt:"imagen central"}),Object(o.jsx)("p",{children:"Electronics"})]})}var g=function(e){return Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"message",children:[Object(o.jsx)("img",{className:"icon-message",src:"./recursos/tick.png",alt:"success"}),Object(o.jsx)("h1",{children:"CONGRATS"}),Object(o.jsx)("p",{children:"Fantastic! Your purchase will be added to your history"}),Object(o.jsx)("button",{onClick:function(){return e.actualizarCongratsOpen(!1)},children:"CONTINUE"})]})})},p=function(e){return Object(o.jsx)("div",{className:"modal",children:Object(o.jsxs)("div",{className:"message",children:[Object(o.jsx)("img",{className:"icon-message",src:"./recursos/close.png",alt:"error"}),Object(o.jsx)("h2",{children:"ERROR"}),Object(o.jsx)("p",{children:"Oh no! Something went wrong!"}),Object(o.jsx)("button",{onClick:function(){return e.actualizarErrorOpen(!1)},children:"TRY AGAIN"})]})})};function x(e){var c=Object(s.useState)(!1),t=Object(r.a)(c,2),a=t[0],i=t[1],n=Object(s.useState)(!1),l=Object(r.a)(n,2),u=l[0],j=l[1],d=Object(s.useState)(!1),O=Object(r.a)(d,2),b=O[0],h=O[1],m=Object(s.useState)(!1),x=Object(r.a)(m,2),v=x[0],f=x[1];return Object(o.jsxs)("div",{onMouseOver:function(c){e.active&&i(!0)},onMouseLeave:function(e){i(!1)},className:"Product",children:[!0===a?Object(o.jsxs)("div",{className:"product-modal",children:[Object(o.jsx)("img",{className:"product-modal-img",src:"./recursos/buy-white.svg",alt:"buy icon"}),Object(o.jsxs)("div",{className:"product-modal-description",children:[Object(o.jsxs)("div",{className:"product-modal-points",children:[Object(o.jsx)("h1",{children:e.points}),Object(o.jsx)("img",{className:"Coin-modal-img",src:"./recursos/coin.svg",alt:"imagen moneda"})]}),Object(o.jsxs)("button",{onClick:function(c){f(!0);var t={productId:e.productId};fetch("https://coding-challenge-api.aerolab.co/redeem",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}}).then((function(e){return e.json()})).then((function(c){c&&"You've redeem the product successfully"===c.message?(j(!0),e.cargarUsuario()):h(!0)})).finally((function(){f(!1)}))},className:"product-modal-btn",children:[" ",!0===v?Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)("img",{width:"25px",src:"./recursos/Spinner-2.gif",alt:"loading"})}):"Redeem now"]})]})]}):null,Object(o.jsxs)("div",{className:"product-description",children:[Object(o.jsx)("div",{className:"product-img",children:Object(o.jsx)("img",{height:"95%",width:"95%",src:e.photo,alt:"foto del producto"})}),Object(o.jsx)("p",{className:"product-category",children:e.category}),Object(o.jsx)("p",{className:"product-name",children:e.name})]}),e.active?Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("img",{className:"product-img-blue",src:"./recursos/buy-blue.svg",alt:"buy icon"})," "]}):Object(o.jsxs)("div",{className:"product-buy",children:["you need ",e.points-e.userPoints,Object(o.jsx)("img",{className:"Coin-img",src:"./recursos/coin.svg",alt:"imagen moneda"})]}),!0===u?Object(o.jsx)(g,{actualizarCongratsOpen:j}):null,!0===b?Object(o.jsx)(p,{actualizarErrorOpen:h}):null]})}function v(e){var c=function(){return e.productosPorPagina*(e.paginaActual-1)},t=c(),s=c()+e.productosPorPagina;return Object(o.jsx)("div",{className:"List",children:e.productos.slice(t,s).map((function(c){return Object(o.jsx)(x,{productId:c._id,photo:c.img.url,category:c.category,name:c.name,userPoints:e.user.points,points:c.cost,active:c.cost<=e.user.points,cargarUsuario:e.cargarUsuario},c._id)}))})}function f(e){return Object(o.jsxs)("div",{className:"Filter",children:[Object(o.jsx)("div",{className:"Filter-number",children:"16 of 32 products"}),Object(o.jsxs)("div",{className:"Filter-arrows",children:[e.paginaActual>1?Object(o.jsx)("div",{onClick:e.manejarClickPaginaAnterior,children:Object(o.jsx)("img",{src:"./recursos/arrow-left.svg",alt:"flecha izquierda"})}):null,e.paginaActual<e.totalPaginas?Object(o.jsx)("div",{onClick:e.manejarClickPaginaSiguiente,children:Object(o.jsx)("img",{src:"./recursos/arrow-right.svg",alt:"flecha derecha"})}):null]})]})}function N(){var e=Object(s.useState)(O),c=Object(r.a)(e,2),t=c[0],a=c[1],i=Object(s.useState)([]),n=Object(r.a)(i,2),l=n[0],u=n[1],g=Object(s.useState)(b),p=Object(r.a)(g,2),x=p[0],N=p[1],P=Object(s.useState)(d),C=Object(r.a)(P,2),I=C[0],k=C[1],y=Object(s.useState)(d),A=Object(r.a)(y,2),w=A[0],S=A[1],T=Object(s.useState)(1),J=Object(r.a)(T,2),z=J[0],G=J[1];Object(s.useEffect)((function(){if(l.length>0)return!1;fetch("https://coding-challenge-api.aerolab.co/products",{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}}).then((function(e){return e.json()})).then((function(e){u(e)}))}),[l]);var B=function(){fetch("https://coding-challenge-api.aerolab.co/user/me",{method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}}).then((function(e){return e.json()})).then((function(e){e.redeemHistory.reverse(),N(e)}))};Object(s.useEffect)((function(){if(x.name)return!1;B()}),[x]);var F=l.filter((function(e){return I===d||e.category===I})).sort((function(e,c){return"lowest"===w?e.cost-c.cost:c.cost-e.cost})),E=function(e){G(z-1)},Q=function(e){G(z+1)},R=Math.ceil(F.length/16);return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{user:x,sumarPuntos:function(e){var c={amount:e};fetch("https://coding-challenge-api.aerolab.co/user/points",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"}}).then((function(e){return e.json()})).then((function(e){var c=Object.assign({},x);c.points=e["New Points"],N(c),alert("actualizado!")}))}}),Object(o.jsx)(m,{}),Object(o.jsx)(h,{productosPorPagina:16,precioActual:t,actualizarPrecio:a,categoriaActual:I,actualizarCategoria:k,ordenActual:w,actualizarOrden:S,paginaActual:z,actualizarPagina:G,totalProductos:F.length,manejarClickPaginaAnterior:E,manejarClickPaginaSiguiente:Q,totalPaginas:R}),Object(o.jsx)(v,{productosPorPagina:16,productos:F,user:x,paginaActual:z,cargarUsuario:B}),Object(o.jsx)(f,{paginaActual:z,manejarClickPaginaAnterior:E,manejarClickPaginaSiguiente:Q,totalPaginas:R})]})}var P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,i=c.getLCP,n=c.getTTFB;t(e),s(e),a(e),i(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),P()},4:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.f95e38c3.chunk.js.map