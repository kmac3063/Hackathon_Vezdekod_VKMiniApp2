(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(20),s=n.n(a),r=n(13),i=n.n(r),l=n(19),o=n.n(l),j=n(26),d=n(15),u=n(6),b=(n(130),n(5)),p=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.scheme,Object(c.useState)(8)),a=Object(d.a)(n,2),s=a[0],r=(a[1],Object(c.useState)(Array.from({length:s},(function(e,t){return 0})))),l=Object(d.a)(r,2),o=l[0],j=(l[1],Object(c.useState)(!1)),p=Object(d.a)(j,2),h=(p[0],p[1]),O=Object(c.useState)(0),f=Object(d.a)(O,2),x=f[0],v=f[1],m=Object(c.useState)(null),g=Object(d.a)(m,2),y=g[0],S=g[1],F=function(){clearInterval(y),v(0),console.log("Stop!"),i.a.send("VKWebAppFlashSetLevel",{level:0})};return Object(b.jsxs)(u.g,{id:t,children:[Object(b.jsx)(u.h,{children:"\u041e\u0434\u0438\u043d-\u043d\u043e\u043b\u044c \u0444\u043e\u043d\u0430\u0440\u0438\u043a"}),Object(b.jsx)(u.e,{children:Object(b.jsxs)(u.d,{style:{display:"flex"},children:[Object(b.jsx)(u.c,{size:"l",stretched:!0,style:{marginRight:8},onClick:function(){!function(e){null!==y&&clearInterval(y);var t=0;i.a.send("VKWebAppFlashSetLevel",{level:e[0]}),v(1),console.log(e[0]);var n=setInterval((function(){t=(t+1)%s,i.a.send("VKWebAppFlashSetLevel",{level:e[t]}),v(t+1),console.log(e[t])}),1e3);S(n)}(o)},children:"\u041d\u0430\u0447\u0430\u0442\u044c"}),Object(b.jsx)(u.c,{size:"l",stretched:!0,mode:"secondary",onClick:F,children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"})]})}),Object(b.jsxs)(u.e,{children:[Object(b.jsx)(u.f,{mode:"secondary",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u043c\u0438"}),Object(b.jsx)(u.d,{style:{display:"flex",justifyContent:"space-between"},children:o.map((function(e,t){return Object(b.jsxs)(u.d,{style:{padding:"0",backgroundColor:(n=t+1,c=x,n===c?"#D7FDDB":"#FFFFFF")},children:[Object(b.jsxs)(u.d,{style:{padding:"0"},children:[t+1," \u0441\u0435\u043a"]}),Object(b.jsx)(u.k,{onChange:function(e){!function(e,t){h(!1),F(),o[e]=1^o[e]}(t,e.target.value)}})]},t);var n,c}))})]})]})},h=(n.p,n(133)),O=function(e){var t=e.id,n=(e.fetchedUser,e.go);return Object(b.jsx)(u.g,{id:t,children:Object(b.jsx)(u.e,{children:Object(b.jsx)(u.i,{icon:Object(b.jsx)(h.a,{}),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, \u041f\u0440\u0438\u044f\u0442\u0435\u043b\u044c!",action:Object(b.jsx)(u.c,{size:"m",onClick:n,"data-to":"Home",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0444\u043e\u043d\u0430\u0440\u0438\u043a\u0443"}),children:'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430 "\u0412\u0435\u0437\u0434\u0435\u043a\u043e\u0434 2021"'})})})},f=function(){var e=Object(c.useState)("WelcomeScreen"),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),r=Object(d.a)(s,2),l=r[0],h=r[1],f=Object(c.useState)(Object(b.jsx)(u.j,{size:"large"})),x=Object(d.a)(f,2),v=x[0],m=x[1],g=Object(c.useState)(null),y=Object(d.a)(g,2),S=y[0],F=y[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(null),e.next=3,i.a.send("VKWebAppGetUserInfo");case 3:t=e.sent,h(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.send("VKWebAppFlashGetInfo").then((function(e){e.is_available||alert("\u041d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442/\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0444\u043e\u043d\u0430\u0440\u0438\u043a :(")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type;t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value="client_light",F(c.value),document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]);var k=function(e){a(e.currentTarget.dataset.to)};return Object(b.jsx)(u.a,{children:Object(b.jsx)(u.b,{children:Object(b.jsxs)(u.l,{activePanel:n,popout:v,children:[Object(b.jsx)(O,{id:"WelcomeScreen",fetchedUser:l,go:k}),Object(b.jsx)(p,{id:"Home",fetchedUser:l,go:k,scheme:S})]})})})};i.a.send("VKWebAppInit"),s.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[132,1,2]]]);
//# sourceMappingURL=main.81ade5d7.chunk.js.map