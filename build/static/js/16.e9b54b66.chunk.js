(this.webpackJsonpattiahmall=this.webpackJsonpattiahmall||[]).push([[16],{277:function(e,t,a){e.exports=a.p+"static/media/cartEmpty.84c9a7b0.png"},279:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(1),r=a.n(n),l=a(60),c=a(5),i=a(29),o=a(277),s=a.n(o),m=a(4),d=a(51),u=a(25),f=a(3),g=a.n(f),p=a(6),h=a(2),b=a(18),v=a(15),y=a.n(v);a(32);function x(e){var t=e.item,a=r.a.useContext(d.a),n=a.removeFromCartMutation,i=a.removeFromGuestCartMutation,o=r.a.useContext(u.a).deliveryCountry,s=Object(l.a)(),f=s.formatMessage,v=s.locale,x=r.a.useState(!1),E=Object(h.a)(x,2),N=E[0],C=E[1],P=r.a.useContext(b.a).userId,w=function(){var e=Object(p.a)(g.a.mark((function e(){var a,r,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),e.prev=1,!P){e.next=10;break}return a=t.id,r=t.cart_id,e.next=7,n({id:a,cart_id:r,userId:P,deliveryCountry:o});case 7:C(!1),e.next=14;break;case 10:return l=t.options.sku,e.next=13,i({sku:l,deliveryCountry:o});case 13:C(!1);case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),C(!1),console.log(e.t0.response);case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),k={hidden:{x:"".concat("ar"===v?"-100%":"100%")},visible:{x:"0",delay:3},exited:{opacity:0}};return r.a.createElement(m.c.div,{initial:"hidden",animate:"visible",exit:"exited",variants:k,className:" side-cart-menu__item mb-2"},r.a.createElement("div",{className:""},r.a.createElement(c.b,{title:"".concat(t["name_".concat(v)]),className:"hover:underline",to:"/".concat(v,"/c/").concat(t.id)},r.a.createElement("img",{src:"".concat("https://admin-mrg.mrg-mall.com/storage","/small/").concat(t.image),alt:"".concat(t["name_".concat(v)]),className:"max-w-full h-auto"}))),r.a.createElement("div",{className:""},r.a.createElement(c.b,{title:"".concat(t["name_".concat(v)]),className:"hover:underline",to:"/".concat(v,"/c/").concat(t.id)},r.a.createElement("h1",{className:"text-clamp-2 text-sm font-semibold"},"".concat(t["name_".concat(v)]))),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("h1",{className:"text-xs rounded p-1 font-bold  bg-gray-200 inline"},t.total," ",null===o||void 0===o?void 0:o.currency.translation[v].symbol),r.a.createElement("h1",{className:"mx-1 text-sm"},f({id:"quantity"})," : ",t.qty)),r.a.createElement("div",null,r.a.createElement("button",{className:"".concat(N?"bg-gray-300":"bg-main-color text-main-text"," text-xs rounded p-1 my-1 "),onClick:function(){w()}},N?r.a.createElement(y.a,{type:"ThreeDots",color:"#b72b2b",height:21,width:21,visible:!0}):f({id:"remove-from-cart"})))))}function E(e){var t=e.setSideMenuOpen,a=r.a.useContext(d.a),n=a.sideCartItems,o=a.sideCartSubTotal,f=r.a.useContext(u.a).deliveryCountry,g=Object(l.a)(),p=g.formatMessage,h=g.locale,b={hidden:{x:"".concat("ar"===h?"-100%":"100%"),opacity:0},visible:{x:"0%",opacity:1,transition:{type:"tween",staggerChildren:.1}},exited:{x:"".concat("ar"===h?"-100%":"100%"),transition:{when:"afterChildren"}}};return r.a.createElement(m.c.div,{variants:b,initial:"hidden",animate:"visible",exit:"exited",className:"side-add-to-cart__container ".concat("ar"===h?"left-0":"right-0")},r.a.createElement("div",{className:" bg-body-light p-2 h-full flex flex-col "},r.a.createElement("div",{className:"flex items-center justify-between"},r.a.createElement("h1",{className:"font-semibold"},p({id:"shopping-cart"})),r.a.createElement("button",{onClick:function(){return t(!1)}},r.a.createElement(i.b,{className:"w-5 h-5 "}))),r.a.createElement("hr",{className:"my-2"}),0===(null===n||void 0===n?void 0:n.length)&&r.a.createElement("div",{className:"flex flex-col justify-center items-center"},r.a.createElement("img",{src:s.a,alt:"Empty cart"}),r.a.createElement("h1",{className:"font-bold mb-2"},p({id:"cart-empty"})),r.a.createElement(c.b,{to:"/".concat(h),className:"text-sm text-blue-600 hover:underline"},p({id:"check-today-deals"}))),0!==n.length&&r.a.createElement("div",{className:"flex-1 overflow-y-auto overflow-x-hidden",style:{maxHeight:"calc(-110px + 100vh)"}},r.a.createElement(m.a,null,n.map((function(e){return r.a.createElement(x,{key:e.options.sku,item:e})})))),r.a.createElement("hr",{className:"my-1"}),0!==n.length&&r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-between semibold items-center  my-2"},r.a.createElement("h1",{className:""},p({id:"subtotal"})),r.a.createElement("h1",{className:" font-semibold"},o," ",null===f||void 0===f?void 0:f.currency.translation[h].symbol)),r.a.createElement("hr",{className:"my-1"}),r.a.createElement("div",{className:" flex items-center my-2 text-center text-second-nav-text-light "},r.a.createElement(c.b,{to:"/".concat(h,"/cart"),className:"flex-1 py-2 px-3 border border-main-color text-main-color mx-1 hover:bg-main-color hover:text-main-text uppercase transition duration-150   rounded"},p({id:"go-to-cart"}))))))}},305:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(79),r=a(1),l=a.n(r),c=a(60);function i(e){var t=e.products,a=e.handleBrandChange,r=e.brandFilters,i=Object(c.a)(),o=i.formatMessage,s=i.locale,m=l.a.useMemo((function(){var e=[];return t.forEach((function(t){t.brand&&e.push({label:t.brand.translation[s].name,id:t.brand.id})})),e=Object(n.a)(new Set(e.map((function(e){return JSON.stringify(e)})))).map((function(e){return JSON.parse(e)}))}),[]);return 0===m.length?null:l.a.createElement("div",{className:"mb-4"},l.a.createElement("h1",{className:"text-xl py-3 font-semibold"},o({id:"filter-by-brand"})),l.a.createElement("hr",null),l.a.createElement("div",{className:"flex flex-col justify-center"},m.map((function(e){var t=r.find((function(t){return t.id===e.id}));return l.a.createElement("div",{key:e.id,className:"flex items-center mb-2 my-1"},l.a.createElement("input",{id:e.id,type:"checkbox",className:"form-checkbox border-gray-600 text-main-color",onChange:function(){return a(e)},checked:!!t}),l.a.createElement("label",{htmlFor:e.id,className:"hover:underline hover:text-blue-700 cursor-pointer  mx-5"},e.label))}))))}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(14),r=a(4),l=a(1),c=a.n(l),i=a(60),o=a(156),s=a(25);function m(e){var t=e.handlePriceChange,a=e.priceFilters,l=e.handleChangePriceInput,m=e.handleSubmitPrice,d=Object(i.a)(),u=d.locale,f=d.formatMessage,g=c.a.useContext(s.a).deliveryCountry;return c.a.createElement(r.c.div,{layout:!0,className:"mb-4"},c.a.createElement("h1",{className:"text-xl font-semibold"},f({id:"filter-by-price"})," (",null===g||void 0===g?void 0:g.currency.translation[u].symbol,")"),c.a.createElement("hr",{className:"my-2"}),c.a.createElement("div",{className:"p-3"},c.a.createElement(o.Range,{step:.1,min:0,rtl:"ar"===u,max:1e4,values:a,onChange:t,renderTrack:function(e){var t=e.props,a=e.children;return c.a.createElement("div",Object.assign({},t,{style:Object(n.a)({},t.style,{height:"6px",width:"100%",backgroundColor:"#ccc"})}),a)},renderThumb:function(e){var t=e.props;return c.a.createElement("div",Object.assign({},t,{style:Object(n.a)({},t.style,{height:"15px",width:"15px",borderRadius:"50%",backgroundColor:"#999"})}))}})),c.a.createElement("div",{className:"mb-3",style:{display:"grid",gridTemplateColumns:"0.5fr 1fr 0.5fr"}},c.a.createElement("div",{className:"text-center"},0),c.a.createElement("div",{className:"text-center"},c.a.createElement("input",{type:"number",value:a[0],onChange:l,className:"p-1 text-center border rounded-lg min-w-0"})),c.a.createElement("div",{className:"text-center"},1e4)),c.a.createElement("div",{className:"flex items-center justify-center"},c.a.createElement("button",{className:"px-2 py-1 bg-green-700 text-main-text rounded",onClick:m},f({id:"submit"}))))}},355:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var n=a(14),r=a(79),l=a(2),c=a(1),i=a.n(c),o=a(278),s=a(60),m=a(5),d=a(305),u=a(306);function f(e){var t=e.productsLoading,a=e.handlePriceChange,n=e.products,r=e.categoryInfo,l=e.categoryInfoLoading,c=e.brandFilters,o=e.handleChangePriceInput,f=e.handleBrandChange,g=e.priceFilters,p=e.handleSubmitPrice,h=Object(s.a)(),b=h.locale,v=h.formatMessage;return i.a.createElement("div",{className:"py-2"},!l&&i.a.createElement("div",{className:"mb-4"},i.a.createElement("h1",{className:"text-xl font-semibold"},v({id:"categories"})),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("div",{className:"my-2"},i.a.createElement("div",{className:"flex justify-between"},i.a.createElement("h1",{className:"font-semibold text-sm"},r.translation[b].name)),0!==r.children.length&&r.children.map((function(e,t){return i.a.createElement(m.b,{to:"/".concat(b,"/categories/").concat(e.slug),key:t,className:"text-sm block hover:underline hover:text-blue-700"},e.translation[b].name)})))),!t&&i.a.createElement(d.a,{products:n,brandFilters:c,handleBrandChange:f}),!t&&i.a.createElement(u.a,{products:n,priceFilters:g,handlePriceChange:a,handleChangePriceInput:o,handleSubmitPrice:p}))}var g=a(4),p=a(78),h=a(155),b=a(142),v=a(44);function y(e){var t=e.sortBy,a=e.resultsPerPage,n=e.handleSortByChange,r=e.handleResultPerPageChange,l=Object(s.a)().formatMessage,c=i.a.useMemo((function(){return[{value:"newest",label:l({id:"Newest"})},{label:l({id:"Price (Low to High)"}),value:"price-asc"},{label:l({id:"Price (High to Low)"}),value:"price-desc"}]}),[l]),o=i.a.useMemo((function(){return[{label:5,value:5},{label:20,value:20},{label:30,value:30},{label:40,value:40}]}),[]);return i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 0.8fr 0.8fr",marginBottom:"0.5rem"}},i.a.createElement("div",null),i.a.createElement("div",{className:"flex items-center w-full"},i.a.createElement("h1",null,l({id:"number-per-page"})),i.a.createElement(v.a,{isSearchable:!1,options:o,value:a,onChange:r,className:"mx-2 flex-1"})),i.a.createElement("div",{className:"flex items-center w-full"},i.a.createElement("h1",null,l({id:"sort-by"})),i.a.createElement(v.a,{isSearchable:!1,options:c,value:t,onChange:n,className:"mx-2 flex-1"})))}var x=a(143),E=a(154),N=a.n(E),C=a(141);function P(e){var t=e.products,a=e.productsLoading,n=e.resultsPerPage,r=e.sortBy,l=e.filteredProducts,c=e.filteredProductsLoading,o=e.filtersApplied,m=e.handleRemoveFilters,d=e.handleSortByChange,u=e.filters,f=e.setCartMenuOpen,v=e.handleResultPerPageChange,E=e.productsPageCount,P=e.filteredPageCount,w=e.handleFilteredChangePage,k=e.handleProductChangePage,O=e.filteredPage,j=e.productsPage,S=Object(s.a)().formatMessage;return a?i.a.createElement("div",{className:"py-2"},i.a.createElement(p.a,{speed:2,viewBox:"0 0 752 38",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},i.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"38"})),i.a.createElement("div",{className:"category-page-items__grid py-2",style:{minHeight:"calc(100vh - 150px)"}},[0,1,2,3,4,5,6,7,8,9].map((function(e){return i.a.createElement(h.a,{key:e})})))):i.a.createElement("div",{className:"h-full"},i.a.createElement(y,{sortBy:r,resultsPerPage:n,handleSortByChange:d,handleResultPerPageChange:v}),i.a.createElement(g.b,null,i.a.createElement(g.c.div,{layout:!0,className:"flex items-center"},0!==u.length&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.c.h1,{layout:!0,className:"text-lg font-semibold"},S({id:"filtered-by"})),i.a.createElement(g.c.div,{layout:!0,className:"mx-1 flex items-center"},u.map((function(e){return i.a.createElement(g.c.button,{layout:!0,className:"mx-1 py-1 px-2 bg-main-color text-main-text rounded-full whitespace-no-wrap",key:e.value,onClick:function(){return m(e)}},S({id:e.type})," : ",e.value)})))))),0!==t.length&&i.a.createElement("div",{className:"category-page-items__grid py-2 min-h-full",style:{minHeight:"calc(100vh - 150px)"}},!o&&t.map((function(e){return"simple"===e.type?i.a.createElement(b.a,{key:e.id,setCartMenuOpen:f,item:e}):i.a.createElement(x.a,{key:e.id,setCartMenuOpen:f,item:e})})),o&&c&&[0,1,2,3,4,5,6,7,8].map((function(e){return i.a.createElement(h.a,{key:e})})),o&&!c&&l&&l.map((function(e){return"simple"===e.type?i.a.createElement(b.a,{key:e.id,setCartMenuOpen:f,item:e}):i.a.createElement(x.a,{key:e.id,setCartMenuOpen:f,item:e})}))),!a&&!c&&i.a.createElement(N.a,{previousLabel:i.a.createElement(C.a,{className:"w-6 h-6 inline"}),nextLabel:i.a.createElement(C.b,{className:"w-6 h-6 inline"}),breakLabel:"...",breakClassName:"inline",pageCount:o?P:E,marginPagesDisplayed:2,pageRangeDisplayed:2,initialPage:o?O-1:j-1,disableInitialCallback:!0,onPageChange:o?w:k,containerClassName:"my-2 w-full text-center",subContainerClassName:"p-3 inline",pageLinkClassName:"p-3",activeClassName:"bg-main-color font-bold text-main-text",pageClassName:" inline-block mx-2 rounded-full text-lg",previousClassName:"p-3 inline font-bold",nextClassName:"p-3 inline font-bold",disabledClassName:"text-gray-500"}),0===t.length&&i.a.createElement("div",{className:"p-6 flex items-center justify-center text-xl h-full"},S({id:"no-products"})),o&&!c&&0===(null===l||void 0===l?void 0:l.length)&&i.a.createElement("div",{className:"p-6 flex items-center justify-center text-xl h-full"},S({id:"no-filter-results"})))}var w=a(85),k=a(9),O=a(30),j=a(17),S=a(274),B=a(270),F=a(272),M=a(269),I=(a(150),a(66));function L(e){var t=e.categoryInfo,a=Object(s.a)().locale;return i.a.createElement(S.a,{navigation:!0,id:"main",className:"my-3",breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:20},640:{slidesPerView:4,spaceBetween:20},860:{slidesPerView:5,spaceBetween:20},1100:{slidesPerView:7,spaceBetween:20},1440:{slidesPerView:8,spaceBetween:20}}},t.children.map((function(e){var t;return i.a.createElement(B.a,{key:e.id,className:"overflow-hidden border my-2  relative bg-gray-100\n             shadow\n            rounded"},i.a.createElement(m.b,{to:"/".concat(a,"/categories/").concat(e.slug)},i.a.createElement(I.a,{src:"".concat("https://admin-mrg.mrg-mall.com/storage","/original/").concat(null===(t=e.image)||void 0===t?void 0:t.link),alt:e.translation[a].name,pb:"calc(100% * 286/210)"}),i.a.createElement("h1",{className:"font-semibold text-center p-1"},e.translation[a].name)))})))}function _(e){var t,a=e.categoryInfo,n=e.categoryInfoLoading,r=Object(s.a)().locale;return n?i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{speed:4,viewBox:"0 0 1440 300",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},i.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"300"})),i.a.createElement(S.a,{navigation:!0,id:"main",slidesPerView:7,spaceBetween:15,className:"my-3"},[0,1,2,3,4,5,6].map((function(e){return i.a.createElement(B.a,{key:e,className:"my-2"},i.a.createElement(p.a,{speed:4,viewBox:"0 0   171 258.36",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},i.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"100%",height:"258.36"})))})))):i.a.createElement("div",null,i.a.createElement(I.a,{src:"".concat("https://admin-mrg.mrg-mall.com/storage","/original/").concat(null===(t=a.cover_desktop)||void 0===t?void 0:t.link),alt:a.translation[r].name,pb:"calc(100% * 300/1440)"}),0!==a.children.length&&i.a.createElement(L,{categoryInfo:a}))}F.a.use([M.a]);var R=a(279),V=a(138);function H(){var e=Object(O.i)().category,t=Object(s.a)(),a=t.locale,c=t.formatMessage,m=i.a.useState([]),d=Object(l.a)(m,2),u=d[0],p=d[1],h=i.a.useState({value:"newest",label:c({id:"Newest"})}),b=Object(l.a)(h,2),v=b[0],y=b[1],x=i.a.useState(1),E=Object(l.a)(x,2),N=E[0],C=E[1],S=i.a.useState(1),B=Object(l.a)(S,2),F=B[0],M=B[1],I=i.a.useState({label:20,value:20}),L=Object(l.a)(I,2),H=L[0],T=L[1],J=i.a.useState(!1),D=Object(l.a)(J,2),W=D[0],q=D[1],A=i.a.useState([1e4]),G=Object(l.a)(A,2),z=G[0],K=G[1],Q=i.a.useState([]),U=Object(l.a)(Q,2),X=U[0],Y=U[1],Z=i.a.useState(!1),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ae=Object(k.c)(["category-products",{category:e,page:N,resultsPerPage:H}],j.p,{retry:!0,refetchOnWindowFocus:!1}),ne=ae.data,re=ae.isLoading,le=Object(k.c)(["categoryInfo",e],j.w,{retry:!0,refetchOnWindowFocus:!1}),ce=le.data,ie=le.isLoading,oe=Object(k.c)(["filtered-products",{category:null===ce||void 0===ce?void 0:ce.id,brandFilters:u,sortBy:v,page:F,resultsPerPage:H,locale:a,priceFilters:z}],j.l,{retry:!0,refetchOnWindowFocus:!1,enabled:W}),se=oe.data,me=oe.isLoading;return i.a.useEffect((function(){0===X.length?q(!1):q(!0)}),[X]),i.a.createElement(w.a,null,i.a.createElement(o.a,null,i.a.createElement("title",null,ce?ce.translation[a].name:c({id:"shop-on-mrg"}))),i.a.createElement(g.a,null,ee&&i.a.createElement(R.a,{key:"side-cart",setSideMenuOpen:te}),ee&&i.a.createElement(g.c.div,{key:"sidecart-bg",initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},onClick:function(){return te(!1)},className:"side__addCart-bg"})),i.a.createElement("div",{className:"max-w-default mx-auto p-4 overflow-hidden",style:{minHeight:"calc(100vh - 150px)"}},i.a.createElement(_,{categoryInfo:ce,categoryInfoLoading:ie}),i.a.createElement("div",{className:"search-page__container"},i.a.createElement(f,{categoryInfo:ce,categoryInfoLoading:ie,products:null===ne||void 0===ne?void 0:ne.products,productsLoading:re,brandFilters:u,setBrandFilters:p,handleBrandChange:function(e){u.find((function(t){return t.id===e.id}))?(p((function(t){return t.filter((function(t){return t.id!==e.id}))})),Y((function(t){return t.filter((function(t){return t.value!==e.label}))}))):(Y((function(t){return[].concat(Object(r.a)(t),[{type:"Brand",value:e.label}])})),p((function(t){return[].concat(Object(r.a)(t),[Object(n.a)({},e)])})))},priceFilters:z,handlePriceChange:function(e){K(e)},handleChangePriceInput:function(e){e.target.value<0||e.target.value>1e4||K([e.target.value])},handleSubmitPrice:function(){Y((function(e){var t=e.filter((function(e){return"Price"!==e.type}));return t.push({type:"Price",value:"Max ".concat(z[0])}),t}))}}),i.a.createElement(P,{products:null===ne||void 0===ne?void 0:ne.products,productsLoading:re,sortBy:v,setResultsPerPage:T,filteredProducts:null===se||void 0===se?void 0:se.filteredProducts,filteredProductsLoading:me,filtersApplied:W,filters:X,handleRemoveFilters:function(e){Y((function(t){return t.filter((function(t){return t.value!==e.value}))})),"Brand"===e.type&&p((function(t){return t.filter((function(t){return t.label!==e.value}))})),"Sort"===e.type&&y({value:"newest",label:"Newest"}),"Price"===e.type&&Y((function(e){return e.filter((function(e){return"Price"!==e.type}))}))},handleSortByChange:function(e){if("newest"===e.value)return Y((function(e){return e.filter((function(e){return"Sort"!==e.type}))})),void y(e);Y((function(t){var a=t.filter((function(e){return"Sort"!==e.type}));return a.push({type:"Sort",value:e.label}),a})),y(e)},setCartMenuOpen:te,resultsPerPage:H,handleResultPerPageChange:function(e){T(e)},productsPageCount:null===ne||void 0===ne?void 0:ne.lastPage,filteredPageCount:null===se||void 0===se?void 0:se.lastPage,handleProductChangePage:function(e){Object(V.a)(document.getElementById("main"),document.body),C(e.selected+1)},handleFilteredChangePage:function(e){Object(V.a)(document.getElementById("main"),document.body),M(e.selected+1)},filteredPage:F,productsPage:N}))))}}}]);
//# sourceMappingURL=16.e9b54b66.chunk.js.map