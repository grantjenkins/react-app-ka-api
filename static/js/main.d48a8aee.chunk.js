(this["webpackJsonpreact-app-ka-api"]=this["webpackJsonpreact-app-ka-api"]||[]).push([[0],{29:function(e,t,n){},50:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(19),a=n.n(i),s=(n(29),n(7),n(20),n(24)),l=(n(31),n(21),n.p,n(50),n(1)),o=function(e){var t=e.title;return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:t})})};o.defaultProps={title:"KA API"};var d=o,j=function(e){var t=e.tile;return Object(l.jsxs)("div",{className:"tile",children:[Object(l.jsx)("div",{className:"tile-image",children:Object(l.jsx)("img",{src:t.thumb})}),Object(l.jsxs)("div",{className:"tile-details",children:[Object(l.jsx)("h3",{children:t.title}),Object(l.jsx)("p",{children:t.sumVotesIncremented})]})]})};j.defaultProps={tiles:[{tile:"Foo",index:1},{tile:"Bar",index:2}]};var u=function(e){var t=e.tiles;return Object(l.jsx)(l.Fragment,{children:t.map((function(e,t){return Object(l.jsx)(j,{tile:e},t)}))})},h=n(23),p=function(){var e=Object(c.useState)((function(){return[]})),t=Object(s.a)(e,2),n=t[0],i=t[1];function a(e){throw new URIError("The script "+e.target.src+" didn't load correctly.")}return Object(c.useEffect)((function(){!function(e,t){var n=document.createElement("script");n.onerror=a,t&&(n.onload=t),document.head.appendChild(n),n.src=e}("https://www.khanacademy.org/api/internal/user/scratchpads?username=grantjenkins&callback=foo",(function(e){i(e.scratchpads)}))}),[]),Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(h.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(d,{title:"jQuery v19"}),n&&n.length>0?Object(l.jsx)(u,{tiles:n}):"No tiles to show"]})})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),b()}},[[57,1,2]]]);
//# sourceMappingURL=main.d48a8aee.chunk.js.map