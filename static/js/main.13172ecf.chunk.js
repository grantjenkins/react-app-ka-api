(this["webpackJsonpreact-app-ka-api"]=this["webpackJsonpreact-app-ka-api"]||[]).push([[0],{30:function(t,e,n){},50:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(20),i=n.n(a),s=(n(30),n(4)),u=n.n(s),o=n(6),l=n(25),j=(n(21),n(22)),d=n.n(j),h=(n.p,n(50),n(1)),p=function(t){var e=t.title;return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("h1",{children:e})})};p.defaultProps={title:"KA API"};var f=p,b=function(t){var e=t.tile;return Object(h.jsx)("div",{className:"tile",children:Object(h.jsx)("h3",{children:e.title})})};b.defaultProps={tiles:[{tile:"Foo",index:1},{tile:"Bar",index:2}]};var O=function(t){var e=t.tiles;return Object(h.jsx)(h.Fragment,{children:e.map((function(t,e){return Object(h.jsx)(b,{tile:t},e)}))})},x=n(24),v=function(){var t=Object(c.useState)((function(){return[]})),e=Object(l.a)(t,2),n=e[0],a=e[1];return Object(c.useEffect)((function(){(function(){var t=Object(o.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.getJSON("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&limit=50&callback=?",(function(t){})).done((function(t){return console.log(t.scratchpads),t.scratchpads}));case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(x.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{title:"jQuery"}),n.length>0?Object(h.jsx)(O,{tiles:n}):"No tiles to show"]})})})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),g()}},[[57,1,2]]]);
//# sourceMappingURL=main.13172ecf.chunk.js.map