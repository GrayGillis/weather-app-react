(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{13:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var a=c(3),n=c(2),r=c(14),s=c(15),j=c.n(s),o=(c(13),c(0)),b=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("h1",{children:"Welcome to Grayson's Weather App"}),Object(o.jsx)("h4",{children:"This project was built on React"}),Object(o.jsx)("p",{children:"Please enter the City & Country:"})]})},i="650398dcf7dcf463b2c433c49bed5580",u="https://api.openweathermap.org/data/2.5/",h=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),h=Object(a.a)(s,2),d=h[0],O=h[1],l=Object(n.useState)("London"),p=Object(a.a)(l,2),x=p[0],m=p[1],f=Object(n.useState)("UK"),v=Object(a.a)(f,2),w=v[0],g=v[1],S=Object(n.useState)(""),y=Object(a.a)(S,2),C=y[0],N=y[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"header-div",children:Object(o.jsx)(b,{})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"main-div",children:[Object(o.jsxs)("div",{className:"date-weather",children:[(new Date).toLocaleString(),Object(o.jsx)("br",{}),x," Weather",Object(o.jsx)("br",{}),Math.round(100*d)/100," \u2103 ",Object(o.jsx)("br",{}),Math.round(100*c)/100," \u2109 ",Object(o.jsx)("br",{}),C]}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",value:x,onChange:function(e){return m(e.target.value)}}),Object(o.jsx)("input",{type:"text",value:w,onChange:function(e){return g(e.target.value)}}),Object(o.jsx)("button",{className:"btn",onClick:function(){!function(e,t){j()({method:"GET",url:"".concat(u,"weather?q=").concat(e,",").concat(t,"&APPID=").concat(i)}).then((function(e){console.log(e.data.main.temp),r(1.8*(e.data.main.temp-273.15)+32),O(e.data.main.temp-273.15),N(e.data.weather[0].main)})).catch((function(e){console.log(e)}))}(x,w)},children:" Submit "})]})]})};Object(r.render)(Object(o.jsx)(h,{}),document.querySelector("#root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d6896f6c.chunk.js.map