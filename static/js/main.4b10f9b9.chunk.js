(this["webpackJsonpreact-app-ka-api"]=this["webpackJsonpreact-app-ka-api"]||[]).push([[0],{30:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(21),a=n.n(r),s=(n(30),n(4),n(6),n(25)),l=(n(22),n(9)),u=n.n(l),o=(n.p,n(50),n(1)),j=function(e){var t=e.title;return Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{children:t})})};j.defaultProps={title:"KA API"};var d=j,h=function(e){var t=e.tile;return Object(o.jsx)("div",{className:"tile",children:Object(o.jsx)("h3",{children:t.title})})};h.defaultProps={tiles:[{tile:"Foo",index:1},{tile:"Bar",index:2}]};var p=function(e){var t=e.tiles;return Object(o.jsx)(o.Fragment,{children:t.map((function(e,t){return Object(o.jsx)(h,{tile:e},t)}))})},b=n(24),f=function(){var e=Object(c.useState)((function(){return[]})),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){u.a.when(u.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(){})).done((function(e){return e}))).then((function(e){r(e.scratchpads)}))}),[]),Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{title:"jQuery v6"}),n&&n.length>0?Object(o.jsx)(p,{tiles:n}):"No tiles to show"]})})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[57,1,2]]]);
//# sourceMappingURL=main.4b10f9b9.chunk.js.map