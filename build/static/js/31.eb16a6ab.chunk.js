(this.webpackJsonpattiahmall=this.webpackJsonpattiahmall||[]).push([[31],{319:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var n=a(2),l=a(1),r=a.n(l),i=a(63),c=a(14),o=a(32),u=a(154),s=a(170),d=a(69),m=a(18),v=a(7),p=a(163),f=a(107),b=a(147),h=a.n(b),g=a(102),y=a(9);function E(){var e,t,a=Object(o.i)().query,l=Object(i.a)(),b=l.locale,E=l.formatMessage,O=r.a.useState([]),N=Object(n.a)(O,2),w=N[0],P=N[1],C=r.a.useState({value:"newest",label:"Newest"}),S=Object(n.a)(C,2),j=S[0],x=S[1],k=r.a.useState(1),L=Object(n.a)(k,2),B=L[0],F=L[1],M=r.a.useState(1),I=Object(n.a)(M,2),R=I[0],q=I[1],A=r.a.useState(!1),D=Object(n.a)(A,2),J=D[0],T=D[1],W=r.a.useState(null),_=Object(n.a)(W,2),Y=_[0],z=_[1],G=r.a.useState([]),H=Object(n.a)(G,2),K=H[0],Q=H[1],U=r.a.useState({label:20,value:20}),V=Object(n.a)(U,2),X=V[0],Z=V[1],$=r.a.useState(!1),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=r.a.useState(!1),le=Object(n.a)(ne,2),re=le[0],ie=le[1],ce=r.a.useState(!1),oe=Object(n.a)(ce,2),ue=oe[0],se=oe[1],de=r.a.useState(!1),me=Object(n.a)(de,2),ve=me[0],pe=me[1],fe=r.a.useContext(y.a),be=fe.deliveryCountry,he=fe.sideMenuOpen;r.a.useEffect((function(){var e=function(){window.scrollY>=200?pe(!0):pe(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}})),r.a.useEffect((function(){re&&setTimeout((function(){return ie(!1)}),100),ue&&setTimeout((function(){return se(!1)}),100)}),[ve]);var ge=Object(c.c)(["searchProducts",{query:a,page:B,resultsPerPage:X}],m.R,{retry:!0,refetchOnWindowFocus:!1}),ye=ge.data,Ee=ge.isLoading,Oe=Object(c.c)(["filtered-products",{search:a,brandFilters:w,sortBy:j,page:R,resultsPerPage:X,locale:b,priceFilters:Y}],m.m,{retry:!0,refetchOnWindowFocus:!1,enabled:J}),Ne=Oe.data,we=Oe.isLoading;r.a.useEffect((function(){0===K.length?T(!1):T(!0)}),[K]);return r.a.createElement(d.a,null,r.a.createElement("div",{className:"min-h-screen relative"},r.a.createElement(v.a,null,te&&r.a.createElement(p.a,{key:"side-cart",setSideMenuOpen:ae}),te&&r.a.createElement(v.c.div,{key:"sidecart-bg",initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},onClick:function(){return ae(!1)},className:"side__addCart-bg"})),!J&&(null===ye||void 0===ye?void 0:ye.products.length)>0&&!Ee||J&&(null===Ne||void 0===Ne?void 0:Ne.filteredProducts.length)>0&&!we?r.a.createElement("div",{className:"mb-1"},r.a.createElement("div",{className:"px-3 pt-3"},r.a.createElement("h1",{className:"font-semibold text-lg"},(null===ye||void 0===ye?void 0:ye.products.length)>2&&(null===ye||void 0===ye?void 0:ye.products.length)," ",function(){switch(null===ye||void 0===ye?void 0:ye.products.length){case 1:return E({id:"one-search-result"});case 2:return E({id:"two-search-results"});case(null===ye||void 0===ye?void 0:ye.products.length)>10&&ye.products.length:return E({id:"more-than-10-search-results"});default:return E({id:"search-results"})}}()," ",r.a.createElement("strong",null,a)))):null,r.a.createElement(v.b,null,r.a.createElement(v.c.div,{layout:!0,className:"px-3"},0!==K.length&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.c.h1,{layout:!0,className:" mb-1 font-semibold"},E({id:"filtered-by"})," :"),r.a.createElement(v.c.div,{layout:!0,className:"flex items-center"},K.map((function(e){return r.a.createElement(v.c.button,{layout:!0,className:"mx-1 py-1 px-3 bg-main-color text-main-text rounded-full",key:e.value,onClick:function(){return t=e,Q((function(e){return e.filter((function(e){return e.value!==t.value}))})),"Brand"===t.type&&P((function(e){return e.filter((function(e){return e.label!==t.value}))})),"Sort"===t.type&&x({value:"newest",label:"Newest"}),void("Price"===t.type&&Q((function(e){return e.filter((function(e){return"Price"!==e.type}))})));var t}},E({id:e.type})," : ",e.value)})))))),r.a.createElement("hr",{className:"my-3"}),r.a.createElement(u.a,{products:null===ye||void 0===ye?void 0:ye.products,productsLoading:Ee,setCartMenuOpen:ae,filteredProducts:null===Ne||void 0===Ne?void 0:Ne.filteredProducts,filteredProductsLoading:we,setProductsPage:F,filtersApplied:J,handleResultPerPageChange:function(e){Z(e)}}),!J&&(null===ye||void 0===ye||null===(e=ye.products)||void 0===e?void 0:e.length)>0&&!Ee||J&&(null===Ne||void 0===Ne||null===(t=Ne.filteredProducts)||void 0===t?void 0:t.length)>0&&!we?r.a.createElement(h.a,{previousLabel:"ar"===b?r.a.createElement(g.b,{className:"w-6 h-6 inline"}):r.a.createElement(g.a,{className:"w-6 h-6 inline"}),nextLabel:"ar"===b?r.a.createElement(g.a,{className:"w-6 h-6 inline"}):r.a.createElement(g.b,{className:"w-6 h-6 inline"}),breakLabel:"...",breakClassName:"inline",pageCount:J?null===Ne||void 0===Ne?void 0:Ne.lastPage:null===ye||void 0===ye?void 0:ye.lastPage,marginPagesDisplayed:2,pageRangeDisplayed:2,initialPage:J?R-1:B-1,disableInitialCallback:!0,onPageChange:J?function(e){Object(f.a)(document.getElementById("main"),document.body),q(e.selected+1)}:function(e){Object(f.a)(document.getElementById("main"),document.body),F(e.selected+1)},containerClassName:"text-center my-2",subContainerClassName:"p-3 inline",pageLinkClassName:"p-3",activeClassName:"bg-main-color font-bold text-main-text",pageClassName:" inline-block mx-2 rounded-full text-lg",previousClassName:"p-3 inline font-bold",nextClassName:"p-3 inline font-bold",disabledClassName:"text-gray-500"}):null,r.a.createElement(v.a,null,ve&&!he&&0!==(null===ye||void 0===ye?void 0:ye.products.length)&&r.a.createElement(s.a,{productsLoading:Ee,products:null===ye||void 0===ye?void 0:ye.products,brandFilters:w,filtersApplied:J,setSortByOpen:ie,setFiltersOpen:se,filtersOpen:ue,sortByOpen:re,sortBy:j,handleSortByChange:function(e){if("newest"===e.value)return Q((function(e){return e.filter((function(e){return"Sort"!==e.type}))})),void x(e);Q((function(t){var a=t.filter((function(e){return"Sort"!==e.type}));return a.push({type:"Sort",value:e.label}),a})),x(e)},priceFilters:Y,handleSubmitFilters:function(e,t){P(t),z(e),Object(f.b)(window,{top:300,behavior:"smooth"}),Q((function(){if(e&&!t.length>0)return[{type:"Price",value:"".concat(E({id:"less-than"})," ").concat(e," ").concat(null===be||void 0===be?void 0:be.currency.translation[b].symbol)}];if(!e&&t.length>0){var a=[];return t.forEach((function(e){return a.push({type:"Brand",value:e.label})})),[].concat(a)}var n={type:"Price",value:"".concat(E({id:"less-than"})," ").concat(e," ").concat(null===be||void 0===be?void 0:be.currency.translation[b].symbol)},l=[];return t.forEach((function(e){return l.push({type:"Brand",value:e.label})})),[n].concat(l)}))}}))))}}}]);
//# sourceMappingURL=31.eb16a6ab.chunk.js.map