(this["webpackJsonpreact-app-ka-api"]=this["webpackJsonpreact-app-ka-api"]||[]).push([[0],{27:function(e,t,n){},47:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(19),r=n.n(a),s=(n(27),n(22)),l=(n(28),n(7)),j=n.n(l),u=(n.p,n(47),n(1)),d=function(e){var t=e.title;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:t})})};d.defaultProps={title:"KA API"};var o=d,h=function(e){var t=e.tile;return Object(u.jsxs)("div",{className:"tile",children:[Object(u.jsx)("div",{className:"tile-image",children:Object(u.jsx)("img",{src:"https://www.khanacademy.org/"+t.thumb})}),Object(u.jsxs)("div",{className:"tile-details",children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("p",{children:t.sumVotesIncremented})]})]})};h.defaultProps={tiles:[{tile:"Foo",index:1},{tile:"Bar",index:2}]};var b=function(e){var t=e.tiles;return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)(h,{tile:e},t)}))})},p=n(21),O=function(){var e=Object(c.useState)((function(){return[]})),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){j.a.when(j.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(){})).done((function(e){return e}))).then((function(e){a(e.scratchpads)}))}),[]),Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(o,{title:"jQuery v31"}),n&&n.length>0?Object(u.jsx)(b,{tiles:n}):"No tiles to show"]})})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),f()}},[[54,1,2]]]);
//# sourceMappingURL=main.fe48f23e.chunk.js.map