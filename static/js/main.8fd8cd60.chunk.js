(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(22),r=n.n(a),s=n(16),i=n.n(s),l=n(21),o=n.n(l),u=n(27),j=n(18),d=n(8),b=(n(122),n(5)),h=function(e){var t=e.id,n=(e.go,e.fetchedUser,e.scheme,Object(c.useState)(8)),a=Object(j.a)(n,2),r=a[0],s=a[1],l=Object(c.useState)(Array.from({length:r},(function(e,t){return 0}))),o=Object(j.a)(l,2),u=o[0],h=o[1],p=Object(c.useState)(!1),f=Object(j.a)(p,2),O=(f[0],f[1]),v=Object(c.useState)(0),x=Object(j.a)(v,2),g=x[0],m=x[1],y=Object(c.useState)(null),S=Object(j.a)(y,2),k=S[0],A=S[1],I=function(e){var t=e+1;return t%10===3?t+"-\u044f \u0441\u0435\u043a\u0443\u043d\u0434\u0430":t+"-\u0430\u044f \u0441\u0435\u043a\u0443\u043d\u0434\u0430"},C=function(e,t){O(!1),W(),u[e]=1^u[e]},W=function(){clearInterval(k),m(0),console.log("Stop!"),i.a.send("VKWebAppFlashSetLevel",{level:0})},K=function(e,t){if(e===t)return"#D7FDDB"};return Object(b.jsxs)(d.h,{id:t,children:[Object(b.jsx)(d.i,{children:"\u041e\u0434\u0438\u043d-\u043d\u043e\u043b\u044c \u0444\u043e\u043d\u0430\u0440\u0438\u043a"}),Object(b.jsxs)(d.f,{children:[Object(b.jsx)(d.e,{top:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0435\u043a\u0443\u043d\u0434",children:Object(b.jsx)(d.l,{placeholder:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c",options:function(){for(var e=[],t=1;t<=60;t++)e.push({value:t-1,label:t+" \u0441\u0435\u043a."});return e}(),value:r-1,onChange:function(e){s(parseInt(e.target.value)+1),h(Array.from({length:parseInt(e.target.value)+1},(function(e,t){return 0}))),W(),O(!1)}})}),Object(b.jsxs)(d.d,{style:{display:"flex"},children:[Object(b.jsx)(d.c,{size:"l",stretched:!0,style:{marginRight:8},onClick:function(){!function(e){null!==k&&clearInterval(k);var t=1;m(1),console.log(e[t-1]),i.a.send("VKWebAppFlashSetLevel",{level:e[t-1]});var n=setInterval((function(){m(t=1+t%r),console.log(e[t-1]),i.a.send("VKWebAppFlashSetLevel",{level:e[t-1]})}),1e3);A(n)}(u)},children:"\u041d\u0430\u0447\u0430\u0442\u044c"}),Object(b.jsx)(d.c,{size:"l",stretched:!0,mode:"secondary",onClick:W,children:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"})]})]}),Object(b.jsxs)(d.f,{children:[Object(b.jsx)(d.g,{mode:"secondary",children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u043c\u0438"}),r>8?u.map((function(e,t){return Object(b.jsx)(d.m,{after:Object(b.jsx)(d.n,{onChange:function(e){C(t,e.target.value)}}),style:{backgroundColor:K(t+1,g)},children:I(t)},t)})):Object(b.jsx)(d.d,{style:{display:"flex"},children:u.map((function(e,t){return Object(b.jsxs)(d.d,{style:{padding:"0",marginLeft:"2%",backgroundColor:K(t+1,g)},children:[Object(b.jsx)(d.d,{style:{padding:"0"},children:"1 \u0441\u0435\u043a"}),Object(b.jsx)(d.n,{onChange:function(e){C(t,e.target.value)}})]},t)}))})]})]})},p=(n.p,n(125)),f=function(e){var t=e.id,n=(e.fetchedUser,e.go);return Object(b.jsx)(d.h,{id:t,children:Object(b.jsx)(d.f,{children:Object(b.jsx)(d.j,{icon:Object(b.jsx)(p.a,{}),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u043c, \u041f\u0440\u0438\u044f\u0442\u0435\u043b\u044c!",action:Object(b.jsx)(d.c,{size:"m",onClick:n,"data-to":"Home",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0444\u043e\u043d\u0430\u0440\u0438\u043a\u0443"}),children:'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0445\u0430\u043a\u0430\u0442\u043e\u043d\u0430 "\u0412\u0435\u0437\u0434\u0435\u043a\u043e\u0434 2021"'})})})},O=function(){var e=Object(c.useState)("WelcomeScreen"),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(j.a)(r,2),l=s[0],p=s[1],O=Object(c.useState)(Object(b.jsx)(d.k,{size:"large"})),v=Object(j.a)(O,2),x=v[0],g=v[1],m=Object(c.useState)(null),y=Object(j.a)(m,2),S=y[0],k=y[1];Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(null),e.next=3,i.a.send("VKWebAppGetUserInfo");case 3:t=e.sent,p(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.a.send("VKWebAppFlashGetInfo").then((function(e){e.is_available||alert("\u041d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442/\u043d\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0444\u043e\u043d\u0430\u0440\u0438\u043a :(")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i.a.subscribe((function(e){var t=e.detail,n=t.type;t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value="client_light",k(c.value),document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]);var A=function(e){a(e.currentTarget.dataset.to)};return Object(b.jsx)(d.a,{children:Object(b.jsx)(d.b,{children:Object(b.jsxs)(d.o,{activePanel:n,popout:x,children:[Object(b.jsx)(f,{id:"WelcomeScreen",fetchedUser:l,go:A}),Object(b.jsx)(h,{id:"Home",fetchedUser:l,go:A,scheme:S})]})})})};i.a.send("VKWebAppInit"),r.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.8fd8cd60.chunk.js.map