(this["webpackJsonpfetch-fe-take-home"]=this["webpackJsonpfetch-fe-take-home"]||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n.n(r),c=n(0),s=n(201),o=n(179),i=n(86),u=n(198),l=n(177),j={components:{MuiButton:{defaultProps:{variant:"contained"}},MuiFormControl:{defaultProps:{fullWidth:!0}},MuiTextField:{defaultProps:{required:!0,fullWidth:!0}}}},d=n(2);function b(e){var t=e.children,n=Object(l.a)("(prefers-color-scheme: dark)"),r=Object(i.a)({palette:{mode:n?"dark":"light"}},j),a=Object(l.a)(r.breakpoints.down("lg"));return Object(d.jsx)(c.StrictMode,{children:Object(d.jsxs)(u.a,{theme:r,children:[Object(d.jsx)(o.a,{}),Object(d.jsx)(s.a,{maxWidth:a?"sm":"md",children:t})]})})}var h=n(13),m=n(193),f=n(194),O=n(192),p=n(189);function x(e){var t=e.name,n=e.options,r=e.callback,a=void 0===r?function(e){return Object(d.jsx)(O.a,{value:e,children:e},e)}:r,s=t.toLowerCase(),o="".concat(t[0].toUpperCase()).concat(s.slice(1)),i="".concat(s,"-select-label"),u=Object(c.useState)(""),l=Object(h.a)(u,2),j=l[0],b=l[1];return Object(d.jsxs)(m.a,{required:!0,children:[Object(d.jsx)(f.a,{id:i,children:o}),Object(d.jsx)(p.a,{name:s,labelId:i,label:o,value:j,onChange:function(e){var t=e.target;return b(t.value)},children:(null===n||void 0===n?void 0:n.map(a))||Object(d.jsxs)(O.a,{disabled:!0,children:["Loading ",s,"s..."]})})]})}var v=n(45),w=n(32),g=n.n(w),k=n(202),y=n(197),C=n(196),S=n(195),P=n(85),T=n(68),E=n.n(T),F="https://frontend-take-home.fetchrewards.com/form",M=function(){var e=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get(F).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(v.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post(F,t).then((function(e){return e.status}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=n(53),L=n(52),W=Object(D.a)((function e(t){Object(L.a)(this,e),this.title=t;for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];this.content=r.join("\n")})),A=function(){return new W("Oops.","Something went wrong when trying to create that user.","It could be our fault, try again?")},B="Passwords do not match";function I(){var e=Object(c.useState)({}),t=Object(h.a)(e,2),n=t[0],r=n.states,a=n.occupations,s=t[1],o=Object(c.useState)({}),i=Object(h.a)(o,2),u=i[0],l=u.title,j=u.content,b=i[1],m=Object(c.useState)(!1),f=Object(h.a)(m,2),p=f[0],w=f[1],T=Object(c.useState)(!1),E=Object(h.a)(T,2),F=E[0],D=E[1];return Object(c.useEffect)((function(){return Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,M();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(d.jsx)(k.a,{component:"form",onSubmit:function(e){e.preventDefault();var t=e.currentTarget,n=new FormData(t),r=!Object(P.validate)(n.get("email")),a=n.get("password")!==n.get("password2");w(r),D(a),r||a||(n.delete("password2"),q(Object.fromEntries(n.entries())).then((function(e){if(200!==e)return b(A());var t;b(new W("Success!",'Created new user "'.concat((t=n).get("name"),'".'),"Look for an email confirmation in your inbox: ".concat(t.get("email"))))})).catch((function(){return b(A())})))},children:Object(d.jsxs)(C.a,{container:!0,height:"100vh",justifyContent:"center",flexDirection:"column",children:[Object(d.jsx)(G,{title:l,content:j}),Object(d.jsxs)(C.a,{item:!0,children:[Object(d.jsxs)(C.a,{container:!0,spacing:2,columns:2,children:[Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(S.a,{name:"name",label:"Full Name"})}),Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(S.a,{name:"email",label:"Email Address",error:p,helperText:p&&"Email address is invalid",onChange:function(){return w(!1)}})}),Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(S.a,{name:"password",label:"Password",type:"password",error:F,helperText:F&&B,onChange:function(){return D(!1)}})}),Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(S.a,{name:"password2",label:"Confirm Password",type:"password",error:F,helperText:F&&B,onChange:function(){return D(!1)}})}),Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(x,{name:"occupation",options:a})}),Object(d.jsx)(C.a,{item:!0,xs:2,sm:1,children:Object(d.jsx)(x,{name:"state",options:r,callback:function(e){var t=e.name,n=e.abbreviation;return Object(d.jsx)(O.a,{value:n,children:t},n)}})})]}),Object(d.jsx)(k.a,{sx:{mt:2},children:Object(d.jsx)(C.a,{container:!0,spacing:2,justifyContent:"end",children:Object(d.jsx)(C.a,{item:!0,children:Object(d.jsx)(y.a,{type:"submit",children:"Signup"})})})})]})]})})}var J=n(203),N=n(204),U=n(205),z=n(188);function G(e){var t=e.title,n=e.content;return Object(d.jsxs)(J.a,{open:Boolean(n),onClose:function(){return window.location.reload()},children:[t&&Object(d.jsx)(z.a,{children:t}),Object(d.jsx)(N.a,{children:Object(d.jsx)(U.a,{children:n})})]})}a.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(I,{})}),document.querySelector("#root"))}},[[135,1,2]]]);
//# sourceMappingURL=main.a58fc78e.chunk.js.map