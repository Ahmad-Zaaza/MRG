(this.webpackJsonpattiahmall=this.webpackJsonpattiahmall||[]).push([[19],{264:function(e,t,a){e.exports=a.p+"static/media/cartEmpty.84c9a7b0.png"},267:function(e,t,a){"use strict";a.d(t,"a",(function(){return N}));var n=a(1),l=a.n(n),i=a(66),c=a(4),r=a(25),s=a(264),o=a.n(s),m=a(5),d=a(35),u=a(7),b=a(3),p=a.n(b),x=a(6),v=a(2),f=a(18),y=a(14),E=a.n(y),h=(a(28),a(46));function g(e){var t=e.item,a=e.setSideMenuOpen,n=l.a.useContext(d.a),r=n.removeFromCartMutation,s=n.removeFromGuestCartMutation,o=n.coupon,b=l.a.useContext(u.a).deliveryCountry,y=Object(i.a)(),g=y.formatMessage,N=y.locale,C=l.a.useState(!1),k=Object(v.a)(C,2),w=k[0],_=k[1],O=l.a.useContext(f.a).userId,j=function(){var e=Object(x.a)(p.a.mark((function e(){var a,n,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_(!0),e.prev=1,!O){e.next=10;break}return a=t.id,n=t.cart_id,e.next=7,r({id:a,cart_id:n,userId:O,deliveryCountry:b,coupon:o});case 7:_(!1),e.next=14;break;case 10:return l=t.options.sku,e.next=13,s({sku:l,deliveryCountry:b,coupon:o});case 13:_(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),_(!1);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),M={hidden:{x:"".concat("ar"===N?"-100%":"100%")},visible:{x:"0",delay:3},exited:{opacity:0}};return l.a.createElement(m.c.div,{initial:"hidden",animate:"visible",exit:"exited",variants:M,className:" side-cart-menu__item mb-2 "},l.a.createElement("div",{className:""},l.a.createElement(c.b,{title:"".concat(t["name_".concat(N)]),to:"/".concat(N,"/products/").concat(t.slug,"/").concat(t.id),onClick:function(){return a(!1)}},l.a.createElement(h.a,{src:t.image,origin:"original",alt:t["name_".concat(N)],pb:"calc(100% * 210/210)"}))),l.a.createElement("div",{className:""},l.a.createElement(c.b,{title:"".concat(t["name_".concat(N)]),className:"hover:underline",to:"/".concat(N,"/products/").concat(t.slug,"/").concat(t.id),onClick:function(){return a(!1)}},l.a.createElement("h1",{className:"text-clamp-2 text-sm uppercase font-semibold"},"".concat(t["name_".concat(N)]))),l.a.createElement("div",{className:"flex items-center text-gray-700"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("h1",{className:"text-xs font-semibold"},g({id:"price"})),l.a.createElement("h1",{className:"text-xs font-bold mx-1"},t.total," ",null===b||void 0===b?void 0:b.currency.translation[N].symbol)),l.a.createElement("div",{className:"flex items-center text-xs mx-2"},l.a.createElement("h1",{className:"font-semibold"},g({id:"qty"})," :"),l.a.createElement("h1",{className:"mx-1 font-bold"},t.qty))),l.a.createElement("div",null,l.a.createElement("button",{className:"\n                bg-main-color text-main-text\n            text-xs rounded p-1 my-1 flex uppercase items-center font-semibold justify-center ",style:{width:"140px"},onClick:j},w?l.a.createElement(E.a,{type:"ThreeDots",color:"#fff",height:18,width:18,visible:!0}):g({id:"remove-from-cart"})))))}function N(e){var t=e.setSideMenuOpen,a=l.a.useContext(d.a),n=a.sideCartItems,s=a.sideCartSubTotal,b=a.sideCartCouponCost,p=l.a.useContext(u.a).deliveryCountry,x=Object(i.a)(),v=x.formatMessage,f=x.locale,y={hidden:{x:"".concat("ar"===f?"-100%":"100%"),opacity:0},visible:{x:"0%",opacity:1,transition:{type:"tween"}},exited:{x:"".concat("ar"===f?"-100%":"100%"),transition:{when:"afterChildren"}}};return l.a.createElement(m.c.div,{variants:y,initial:"hidden",animate:"visible",exit:"exited",className:"side-add-to-cart__container ".concat("ar"===f?"left-0":"right-0")},l.a.createElement("div",{className:" bg-body-light p-2 h-full flex flex-col "},l.a.createElement("div",{className:"flex items-center justify-between"},l.a.createElement("h1",{className:"font-semibold"},v({id:"shopping-cart"})),l.a.createElement("button",{onClick:function(){return t(!1)}},l.a.createElement(r.b,{className:"w-5 h-5 "}))),l.a.createElement("hr",{className:"my-2"}),0===(null===n||void 0===n?void 0:n.length)&&l.a.createElement("div",{className:"flex flex-col justify-center items-center"},l.a.createElement("img",{src:o.a,alt:"Empty cart"}),l.a.createElement("h1",{className:"font-bold mb-2"},v({id:"cart-empty"})),l.a.createElement(c.b,{to:"/".concat(f),className:"text-sm text-blue-600 hover:underline"},v({id:"check-today-deals"}))),n.length>0&&l.a.createElement("div",{className:" flex-1 overflow-y-auto overflow-x-hidden"},l.a.createElement(m.a,null,n.map((function(e){return l.a.createElement(g,{key:e.options.sku,item:e,setSideMenuOpen:t})})))),l.a.createElement("hr",{className:"my-1"}),n.length>0&&l.a.createElement("div",null,"0.000"!==b&&l.a.createElement("div",{className:"flex text-green-700 justify-between semibold items-center  my-2"},l.a.createElement("h1",{className:"font-bold "},v({id:"coupon-sale"})),l.a.createElement("h1",{className:" font-bold"},b," ",null===p||void 0===p?void 0:p.currency.translation[f].symbol)),l.a.createElement("div",{className:"flex justify-between semibold items-center  my-2"},l.a.createElement("h1",{className:"font-bold"},v({id:"subtotal"})),l.a.createElement("h1",{className:" font-bold"},s," ",null===p||void 0===p?void 0:p.currency.translation[f].symbol)),l.a.createElement("hr",{className:"my-1"}),l.a.createElement("div",{className:" flex items-center my-2 text-center text-main-text "},l.a.createElement(c.b,{to:"/".concat(f,"/cart"),className:"flex-1 py-2 px-3 border font-semibold border-main-color text-main-color mx-1 hover:bg-main-color hover:text-main-text uppercase transition duration-150   rounded"},v({id:"go-to-cart"}))))))}},308:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(2),l=a(5),i=a(1),c=a.n(i),r=a(265),s=a(104),o=a(66),m=a(149),d=a.n(m),u=a(10),b=a(34),p=a(101),x=a(150),v=a(135),f=a(136),y=a(69),E=a(267),h=a(17);function g(){var e,t,a,i,m=Object(o.a)(),g=m.formatMessage,N=m.locale,C=Object(b.i)().slug,k=c.a.useState(1),w=Object(n.a)(k,2),_=w[0],O=w[1],j=c.a.useState(!1),M=Object(n.a)(j,2),S=M[0],L=M[1],D=Object(u.c)(["single-brand",{slug:C,page:_,number:42}],h.y,{retry:!0,refetchOnWindowFocus:!1,keepPreviousData:!0}),I=D.data,P=D.isLoading;return c.a.createElement(y.a,null,c.a.createElement(r.a,null,c.a.createElement("title",null,(null===I||void 0===I||null===(e=I.brandName)||void 0===e?void 0:e[N].name)||g({id:"shop-on-mrg"}))),c.a.createElement(l.a,null,S&&c.a.createElement(E.a,{key:"side-cart",setSideMenuOpen:L}),S&&c.a.createElement(l.c.div,{key:"sidecart-bg",initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},onClick:function(){return L(!1)},className:"side__addCart-bg"})),c.a.createElement("div",{className:"max-w-default mx-auto p-4 overflow-hidden",style:{minHeight:"calc(100vh - 150px)"}},!P&&c.a.createElement("div",{className:"flex justify-center flex-col items-center"},c.a.createElement("h1",{className:"font-bold text-2xl mb-3"},g({id:"shop-brands"})," ",null===I||void 0===I||null===(t=I.brandName)||void 0===t?void 0:t[N].name," ",g({id:"at-mrg"})),c.a.createElement("img",{src:"".concat("https://admin-mrg.mrg-mall.com/storage","/original/").concat(null===I||void 0===I?void 0:I.brandLogo),alt:null===I||void 0===I||null===(a=I.brandName)||void 0===a?void 0:a[N].name,style:{maxHeight:"200px",width:"auto"}})),P&&c.a.createElement("div",{className:"brand-grid__desktop py-2 "},[0,1,2,3,4,5,6,7,8].map((function(e){return c.a.createElement(x.a,{key:e})}))),c.a.createElement("div",{className:"brand-grid__desktop py-2 "},null===I||void 0===I||null===(i=I.products)||void 0===i?void 0:i.map((function(e){return"variation"===e.type&&e.new_variation_addons.length>0?c.a.createElement(f.a,{key:e.id,setCartMenuOpen:L,item:e}):c.a.createElement(v.a,{key:e.id,setCartMenuOpen:L,item:e})})))),c.a.createElement(d.a,{previousLabel:c.a.createElement(s.a,{className:"w-6 h-6 inline"}),nextLabel:c.a.createElement(s.b,{className:"w-6 h-6 inline"}),breakLabel:"...",breakClassName:"inline",pageCount:null===I||void 0===I?void 0:I.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:2,initialPage:_-1,disableInitialCallback:!0,onPageChange:function(e){Object(p.b)(window,{top:500}),O(e.selected+1)},containerClassName:"my-2 w-full text-center",subContainerClassName:"p-3 inline",pageLinkClassName:"p-3",activeClassName:"bg-main-color font-bold text-main-text",pageClassName:" inline-block mx-2 rounded-full text-lg",previousClassName:"p-3 inline font-bold",nextClassName:"p-3 inline font-bold",disabledClassName:"text-gray-500"}))}}}]);
//# sourceMappingURL=19.8977a956.chunk.js.map