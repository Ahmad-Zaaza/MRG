(this.webpackJsonpattiahmall=this.webpackJsonpattiahmall||[]).push([[30],{325:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return _}));var n=a(3),r=a.n(n),l=a(8),c=a(13),o=a(2),s=a(36),i=a(31),m=a(1),u=a.n(m),d=a(22),b=a(63),p=a(276),h=a(32),x=a(6),f=a(17),g=a.n(f),v=(a(30),a(54)),w=a(23),E=a(42),y=a(55),N=a(43),j=a(9),O=a(18),C=a(7),S=[{value:"+965",label:"+965"},{value:"+966",label:"+966"}],k=function(e){var t=e.label,a=(e.value,e.name),n=e.countryCode,r=e.setCountryCode,l=Object(s.a)(e,["label","value","name","countryCode","setCountryCode"]),m=Object(i.b)(a),d=Object(o.a)(m,2),b=d[0],p=d[1];return u.a.createElement("div",{className:"w-full mb-2 flex flex-col "},u.a.createElement("label",{htmlFor:a,className:"text-sm font-semibold text-gray-800 mb-1"},t),u.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"0.5fr 1fr",gap:"0.5rem"}},u.a.createElement(v.a,{options:S,isSearchable:!1,value:n,onChange:r,styles:{dropdownIndicator:function(e){return Object(c.a)(Object(c.a)({},e),{},{padding:"0.25rem"})},valueContainer:function(e){return Object(c.a)(Object(c.a)({},e),{},{padding:"0.5rem"})}}}),u.a.createElement("input",Object.assign({},b,l,{onBlur:function(e){b.onBlur(e)},className:" border rounded w-full p-2 ".concat(p.error&&"border-main-color")}))),p.touched&&p.error?u.a.createElement("h1",{className:"text-xs text-main-color mt-1"},p.error):u.a.createElement("h1",{className:"text-xs text-main-color mt-1",style:{height:"18px"}}," "))};function _(){var e=u.a.useContext(j.a).settings,t=u.a.useState(S[0]),a=Object(o.a)(t,2),n=a[0],c=a[1],s=Object(N.useMediaQuery)({query:"(min-width: 768px)"}),m=Object(b.a)(),f=m.formatMessage,v=m.locale,_=u.a.useState(!1),B=Object(o.a)(_,2),q=B[0],F=B[1],J=u.a.useState(!1),M=Object(o.a)(J,2),Q=M[0],T=M[1],z=u.a.useState(""),D=Object(o.a)(z,2),I=D[0],V=D[1],$=Object(h.g)(),A=Object(h.i)().token,G=w.a({newPassword:w.c().required(f({id:"password-empty"})).min(6,f({id:"password-min-6"})).max(15,f({id:"password-max-15"})),phoneNumber:w.c().matches(/^\d+$/,f({id:"number-only"})).required(f({id:"phone-empty"}))});return u.a.createElement("div",{className:" text-gray-900 px-2 flex justify-center items-center    h-screen relative"},q&&u.a.createElement(E.a,{message:I,closeFunction:function(){F(!1)}}),u.a.createElement("div",{className:" relative z-2  max-w-screen-sm "},u.a.createElement("div",{className:"flex items-center flex-col mb-4  rounded-lg text-center "},u.a.createElement(x.b,{to:"/"},u.a.createElement("img",{src:null===e||void 0===e?void 0:e.store_logo_color,alt:"logo",className:" mb-3",style:{width:"100px",height:"50px"}})),u.a.createElement("h2",{className:"text-xl mb-2 text-center font-semibold"},f({id:"set-up-new-password"})),u.a.createElement("h1",null,f({id:"password-reset-enter-new-password"}))),u.a.createElement("div",{className:"rounded-lg border bg-gray-100 mb-2"},u.a.createElement(i.a,{initialValues:{phoneNumber:"",newPassword:""},validationSchema:G,onSubmit:function(){var e=Object(l.a)(r.a.mark((function e(t,a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!1),e.prev=1,e.next=4,Object(O.Q)({phoneNumber:"".concat(n.value).concat(t.phoneNumber),token:A,newPassword:t.newPassword});case 4:"your password has been successfully changed"===e.sent.message?T(!0):a.setSubmitting(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),"Cannot find a user with this mobile"===e.t0.response.data.message?a.setErrors({phoneNumber:f({id:"invalid-phone"})}):(F(!0),V("Something went wrong, Please try again"));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var t=e.handleSubmit,a=e.values,r=e.isSubmitting;return u.a.createElement("form",{className:"px-3 py-2",onSubmit:t},u.a.createElement(k,{label:f({id:"phone-label"}),name:"phoneNumber",value:a.phoneNumber,countryCode:n,setCountryCode:c}),u.a.createElement(P,{label:f({id:"new-password-label"}),name:"newPassword",value:a.password,type:"password"}),u.a.createElement("div",{className:" py-1 mt-2"},u.a.createElement("button",{disabled:r,type:"submit",className:"".concat(r?"bg-main-color cursor-not-allowed":"bg-main-color text-second-nav-text-light hover:bg-red-800"," w-full rounded uppercase  flex items-center justify-center p-2 font-semibold  transition duration-150 ")},u.a.createElement(g.a,{type:"ThreeDots",color:"#fff",height:25,width:25,visible:r}),!r&&f({id:"submit"}))))}))),u.a.createElement(C.a,null,Q&&u.a.createElement(C.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"px-3 py-2  mx-auto top-100 text-center w-full  text-sm absolute text-main-text rounded font-semibold bg-green-700"},u.a.createElement("p",null,u.a.createElement(p.a,{id:"password-reset-success",values:{link:function(e){return u.a.createElement(x.b,{to:"/".concat(v,"/app/login"),className:"text-green-700 hover:underline"},e)}}}))))),u.a.createElement("div",{className:"".concat(s?"credentials-language__container":"credentials-language__container-mobile")},u.a.createElement(y.a,null)),u.a.createElement("div",{className:"".concat(s?"credentials-back-button__container":"credentials-back-button__container-mobile")},u.a.createElement("button",{onClick:function(){return $.goBack()}},u.a.createElement(d.f,{className:"w-6 h-6"}))))}var P=function(e){var t=e.label,a=(e.value,e.name),n=Object(s.a)(e,["label","value","name"]),r=Object(i.b)(a),l=Object(o.a)(r,2),c=l[0],m=l[1];return u.a.createElement("div",{className:"w-full relative mb-2 flex flex-col"},u.a.createElement("label",{htmlFor:a,className:" text-sm font-semibold text-gray-800 mb-1 "},t),u.a.createElement("input",Object.assign({},c,n,{onBlur:function(e){c.onBlur(e)},className:"".concat(m.error&&m.touched&&"border-main-color"," w-full rounded-lg border  p-2")})),m.touched&&m.error?u.a.createElement("h1",{className:"text-xs text-main-color mt-1"},m.error):u.a.createElement("h1",{className:"text-xs text-main-color mt-1",style:{height:"18px"}}," "))}}}]);
//# sourceMappingURL=30.de2e0dff.chunk.js.map