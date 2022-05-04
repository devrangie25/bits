(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{102:function(t,e,r){"use strict";var n={name:"nuxt-error",props:{error:{type:Object,default:function(){}}},computed:{errorPage:function(){return 404===this.error.statusCode?"404":"500"}}},o=(r(502),r(30)),c=r(31),l=r.n(c),m=r(644),d=r(656),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-container",{staticClass:"container"},["404"===t.errorPage?r("bt-m-error-pages-type1"):r("bt-m-error-pages-type2")],1)],1)}),[],!1,null,"8e852c5e",null);e.a=component.exports;l()(component,{BtMErrorPagesType1:r(624).default,BtMErrorPagesType2:r(625).default}),l()(component,{VApp:m.a,VContainer:d.a})},234:function(t,e,r){"use strict";var n=r(2),o=r(191);n.a.component("line-chart",{extends:o.b,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("pie-chart",{extends:o.c,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}),n.a.component("doughnut-chart",{extends:o.a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}})},235:function(t,e,r){"use strict";var n=r(2),o=r(459),c=r.n(o);r(618);n.a.use(c.a)},236:function(t,e,r){"use strict";var n=r(2),o=r(460);n.a.use(o.a)},295:function(t,e,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("06eef03b",content,!0,{sourceMap:!1})},450:function(t,e,r){"use strict";r.r(e);var n={name:"app-bar",methods:{showDrawer:function(){this.$nuxt.$emit("show",!0)}}},o=r(30),c=r(31),l=r.n(c),m=r(655),d=r(651),f=r(652),v=r(192),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app-bar",{attrs:{app:"",absolute:"",color:t.$vuetify.breakpoint.mdAndDown&&"/customer"!==t.$route.path?"primary":"white",height:"80",flat:""}},["/customer"!==t.$route.path&&"/customer/"!==t.$route.path?r("v-app-bar-nav-icon",{class:"white--text",on:{click:t.showDrawer}}):t._e(),t._v(" "),"/customer"===t.$route.path||"/customer/"===t.$route.path?r("v-toolbar-title",{staticClass:"font-weight-light"},[t._v("\n        Bantayan Island Trucking Services\n    ")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),"/customer"===t.$route.path||"/customer/"===t.$route.path?r("bt-m-form-rate"):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{BtMFormRate:r(626).default}),l()(component,{VAppBar:m.a,VAppBarNavIcon:d.a,VSpacer:f.a,VToolbarTitle:v.a})},462:function(t,e,r){"use strict";var n={name:"auth"},o=r(30),c=r(31),l=r.n(c),m=r(644),d=r(645),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-main",[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:m.a,VMain:d.a})},463:function(t,e,r){"use strict";var n={name:"loggedin"},o=r(30),c=r(31),l=r.n(c),m=r(644),d=r(656),f=r(645),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[t.$vuetify.breakpoint.mdAndDown?r("bt-m-frame-app-bar"):t._e(),t._v(" "),r("bt-m-frame-nav-bar"),t._v(" "),r("v-main",[r("v-container",{staticClass:"pa-6",attrs:{fluid:""}},[r("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{BtMFrameAppBar:r(450).default,BtMFrameNavBar:r(627).default}),l()(component,{VApp:m.a,VContainer:d.a,VMain:f.a})},464:function(t,e,r){"use strict";var n={name:"public"},o=r(30),c=r(31),l=r.n(c),m=r(644),d=r(656),f=r(645),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"app"},[r("bt-m-frame-app-bar"),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1)],1),t._v(" "),r("bt-m-frame-footer")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{BtMFrameAppBar:r(450).default,BtMFrameFooter:r(628).default}),l()(component,{VApp:m.a,VContainer:d.a,VMain:f.a})},471:function(t,e,r){r(472),t.exports=r(473)},495:function(t,e,r){"use strict";r.r(e);r(11);e.default=function(t){var e=t.redirect,r=t.store;if(0===Object.keys(r.state.auth.user).length)return e("/auth/login")}},502:function(t,e,r){"use strict";r(295)},503:function(t,e,r){var n=r(19)(!1);n.push([t.i,".container[data-v-8e852c5e]{display:flex!important;flex:1!important;height:100vh!important;justify-content:center!important;align-items:center!important}",""]),t.exports=n},527:function(t,e,r){var content=r(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("3e7ab538",content,!0,{sourceMap:!1})},528:function(t,e,r){var n=r(19)(!1);n.push([t.i,".app{background:#f8f8f8!important}.public-container{display:flex!important;flex:1!important;justify-content:center!important;align-items:center!important;height:100vh!important}.copy-icon{cursor:pointer!important}.tracker-field-con{background:#499f6e!important}",""]),t.exports=n},591:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{products:[]}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_PRODUCTS:function(t,data){t.products=data}},l={getProducts:function(t){return t.products}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setProducts:function(t,data){(0,t.commit)("SET_PRODUCTS",data)},getProducts:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/products");case 4:(o=r.sent).status?n("SET_PRODUCTS",o.data):n("SET_PRODUCTS",[]),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/delete",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},updateProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createProduct:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/products/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},592:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{parcels:[],latest_action:{}}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_PARCELS:function(t,data){t.parcels=data},SET_LATEST_ACTION:function(t,data){t.latest_action=data}},l={getParcels:function(t){return t.parcels},getLatestAction:function(t){return t.latest_action}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setParcels:function(t,data){(0,t.commit)("SET_PARCELS",data)},setLatestAction:function(t,data){(0,t.commit)("SET_LATEST_ACTION",data)},getParcelByRefId:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/get-parcel-by-ref",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},deleteParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/delete-by-id",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},getParcelShippingDetails:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.prev=1,n.next=4,r.$axios.$post("/shipping-details/get-shipping-details-by-parcel",{parcel_id:e});case 4:if(!n.sent.status){n.next=9;break}return n.abrupt("return",{message:"Success",error:!1});case 9:return n.abrupt("return",{message:"Error",error:!0});case 10:n.next=16;break;case 12:return n.prev=12,n.t0=n.catch(1),console.error("error",n.t0),n.abrupt("return",{message:n.t0,error:!0});case 16:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getParcels:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/parcels");case 4:if(!(o=r.sent).status){r.next=10;break}return n("SET_PARCELS",o.data),r.abrupt("return",{data:o.data});case 10:n("SET_PARCELS",[]);case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(1),console.error("error",r.t0);case 16:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/update",data);case 4:if(!r.sent.status){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createParcel:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$post("/parcels/create",data);case 4:if(!(o=r.sent).status){r.next=10;break}return n("SET_LATEST_ACTION",{data:data,action:"Add",msg:"Parcel has been added"}),r.abrupt("return",{data:o.data,message:"Success",error:!1});case 10:return r.abrupt("return",{message:"Error",error:!0});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()}}},593:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{branches:[]}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_BRANCHES:function(t,data){t.branches=data}},l={getBranches:function(t){return t.branches}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setBranches:function(t,data){(0,t.commit)("SET_BRANCHES",data)},getBranches:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$get("/branches");case 4:(o=r.sent).status?n("SET_BRANCHES",o.data):n("SET_BRANCHES",[]),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error("error",r.t0);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},deleteBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/delete-by-id",data);case 4:if(!(n=r.sent).status){r.next=10;break}return console.log("deleteBranch",n),r.abrupt("return",{message:"Success",error:!1});case 10:return r.abrupt("return",{message:"Error",error:!0});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 17:case"end":return r.stop()}}),r,null,[[1,13]])})))()},updateBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/update",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},createBranch:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/branches/create",data);case 4:if(!(n=r.sent).status){r.next=9;break}return r.abrupt("return",{data:n.data,message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},594:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return c})),r.d(e,"getters",(function(){return l})),r.d(e,"actions",(function(){return m}));var n=r(14),o=(r(65),function(){return{user:{}}}),c={RESET_STATE:function(t){Object.assign(t,t())},SET_USER:function(t,data){t.user=data}},l={getUser:function(t){return t.user}},m={setState:function(t){(0,t.commit)("RESET_STATE")},setUser:function(t,data){(0,t.commit)("SET_USER",data)},resetPassword:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/forgot-password",data);case 4:if(!(n=r.sent).success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:n.message,error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loginUser:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/login",data);case 4:if(o=r.sent,console.log("login",o),!o.success){r.next=11;break}return n("SET_USER",o.data.user),r.abrupt("return",{message:"Success",error:!1});case 11:return r.abrupt("return",{message:"Error",error:!0});case 12:r.next=18;break;case 14:return r.prev=14,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()},registerUser:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.prev=1,r.next=4,e.$axios.$post("/users/create",data);case 4:if(!r.sent.success){r.next=9;break}return r.abrupt("return",{message:"Success",error:!1});case 9:return r.abrupt("return",{message:"Error",error:!0});case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(1),console.error("error",r.t0),r.abrupt("return",{message:r.t0,error:!0});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()}}},617:function(t,e,r){var map={"./af":315,"./af.js":315,"./ar":316,"./ar-dz":317,"./ar-dz.js":317,"./ar-kw":318,"./ar-kw.js":318,"./ar-ly":319,"./ar-ly.js":319,"./ar-ma":320,"./ar-ma.js":320,"./ar-sa":321,"./ar-sa.js":321,"./ar-tn":322,"./ar-tn.js":322,"./ar.js":316,"./az":323,"./az.js":323,"./be":324,"./be.js":324,"./bg":325,"./bg.js":325,"./bm":326,"./bm.js":326,"./bn":327,"./bn-bd":328,"./bn-bd.js":328,"./bn.js":327,"./bo":329,"./bo.js":329,"./br":330,"./br.js":330,"./bs":331,"./bs.js":331,"./ca":332,"./ca.js":332,"./cs":333,"./cs.js":333,"./cv":334,"./cv.js":334,"./cy":335,"./cy.js":335,"./da":336,"./da.js":336,"./de":337,"./de-at":338,"./de-at.js":338,"./de-ch":339,"./de-ch.js":339,"./de.js":337,"./dv":340,"./dv.js":340,"./el":341,"./el.js":341,"./en-au":342,"./en-au.js":342,"./en-ca":343,"./en-ca.js":343,"./en-gb":344,"./en-gb.js":344,"./en-ie":345,"./en-ie.js":345,"./en-il":346,"./en-il.js":346,"./en-in":347,"./en-in.js":347,"./en-nz":348,"./en-nz.js":348,"./en-sg":349,"./en-sg.js":349,"./eo":350,"./eo.js":350,"./es":351,"./es-do":352,"./es-do.js":352,"./es-mx":353,"./es-mx.js":353,"./es-us":354,"./es-us.js":354,"./es.js":351,"./et":355,"./et.js":355,"./eu":356,"./eu.js":356,"./fa":357,"./fa.js":357,"./fi":358,"./fi.js":358,"./fil":359,"./fil.js":359,"./fo":360,"./fo.js":360,"./fr":361,"./fr-ca":362,"./fr-ca.js":362,"./fr-ch":363,"./fr-ch.js":363,"./fr.js":361,"./fy":364,"./fy.js":364,"./ga":365,"./ga.js":365,"./gd":366,"./gd.js":366,"./gl":367,"./gl.js":367,"./gom-deva":368,"./gom-deva.js":368,"./gom-latn":369,"./gom-latn.js":369,"./gu":370,"./gu.js":370,"./he":371,"./he.js":371,"./hi":372,"./hi.js":372,"./hr":373,"./hr.js":373,"./hu":374,"./hu.js":374,"./hy-am":375,"./hy-am.js":375,"./id":376,"./id.js":376,"./is":377,"./is.js":377,"./it":378,"./it-ch":379,"./it-ch.js":379,"./it.js":378,"./ja":380,"./ja.js":380,"./jv":381,"./jv.js":381,"./ka":382,"./ka.js":382,"./kk":383,"./kk.js":383,"./km":384,"./km.js":384,"./kn":385,"./kn.js":385,"./ko":386,"./ko.js":386,"./ku":387,"./ku.js":387,"./ky":388,"./ky.js":388,"./lb":389,"./lb.js":389,"./lo":390,"./lo.js":390,"./lt":391,"./lt.js":391,"./lv":392,"./lv.js":392,"./me":393,"./me.js":393,"./mi":394,"./mi.js":394,"./mk":395,"./mk.js":395,"./ml":396,"./ml.js":396,"./mn":397,"./mn.js":397,"./mr":398,"./mr.js":398,"./ms":399,"./ms-my":400,"./ms-my.js":400,"./ms.js":399,"./mt":401,"./mt.js":401,"./my":402,"./my.js":402,"./nb":403,"./nb.js":403,"./ne":404,"./ne.js":404,"./nl":405,"./nl-be":406,"./nl-be.js":406,"./nl.js":405,"./nn":407,"./nn.js":407,"./oc-lnc":408,"./oc-lnc.js":408,"./pa-in":409,"./pa-in.js":409,"./pl":410,"./pl.js":410,"./pt":411,"./pt-br":412,"./pt-br.js":412,"./pt.js":411,"./ro":413,"./ro.js":413,"./ru":414,"./ru.js":414,"./sd":415,"./sd.js":415,"./se":416,"./se.js":416,"./si":417,"./si.js":417,"./sk":418,"./sk.js":418,"./sl":419,"./sl.js":419,"./sq":420,"./sq.js":420,"./sr":421,"./sr-cyrl":422,"./sr-cyrl.js":422,"./sr.js":421,"./ss":423,"./ss.js":423,"./sv":424,"./sv.js":424,"./sw":425,"./sw.js":425,"./ta":426,"./ta.js":426,"./te":427,"./te.js":427,"./tet":428,"./tet.js":428,"./tg":429,"./tg.js":429,"./th":430,"./th.js":430,"./tk":431,"./tk.js":431,"./tl-ph":432,"./tl-ph.js":432,"./tlh":433,"./tlh.js":433,"./tr":434,"./tr.js":434,"./tzl":435,"./tzl.js":435,"./tzm":436,"./tzm-latn":437,"./tzm-latn.js":437,"./tzm.js":436,"./ug-cn":438,"./ug-cn.js":438,"./uk":439,"./uk.js":439,"./ur":440,"./ur.js":440,"./uz":441,"./uz-latn":442,"./uz-latn.js":442,"./uz.js":441,"./vi":443,"./vi.js":443,"./x-pseudo":444,"./x-pseudo.js":444,"./yo":445,"./yo.js":445,"./zh-cn":446,"./zh-cn.js":446,"./zh-hk":447,"./zh-hk.js":447,"./zh-mo":448,"./zh-mo.js":448,"./zh-tw":449,"./zh-tw.js":449};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=617},624:function(t,e,r){"use strict";r.r(e);var n={name:"error-404",props:{error:{type:Object,default:function(){}}}},o=r(30),c=r(31),l=r.n(c),m=r(188),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/error-404.png","lazy-src":"/img/error-404.png",contain:"",width:t.$vuetify.breakpoint.mdAndDown?"200":""}})],1),t._v(" "),r("div",{staticClass:"text-center mt-6 title"},[t._v("\n        Page Not Found!\n        "),t.$vuetify.breakpoint.mdAndDown?r("br"):t._e(),t._v(" "),r("Nuxt-Link",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[t._v("Home page")])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:m.a})},625:function(t,e,r){"use strict";r.r(e);var n={name:"error-500",props:{error:{type:Object,default:function(){}}}},o=r(30),c=r(31),l=r.n(c),m=r(188),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"error-404"},[r("div",[r("v-img",{attrs:{src:"/img/warning.png","lazy-src":"/img/warning.png",contain:"",width:t.$vuetify.breakpoint.mdAndDown?"200":""}})],1),t._v(" "),r("div",{staticClass:"text-center title"},[t._v("\n        An Error Occured\n        "),t.$vuetify.breakpoint.mdAndDown?r("br"):t._e(),t._v(" "),r("NuxtLink",{staticClass:"mx-1",attrs:{to:"/admin/dashboard"}},[t._v("Home page")])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VImg:m.a})},626:function(t,e,r){"use strict";r.r(e);var n=r(14),o=(r(65),{name:"rateForm",data:function(){return{dialog:!1,formData:{},rules:{required:function(t){return!!t||"Required field"}}}},methods:{showParcelNotification:function(t){var e=t.position,r=t.icon,title=t.title,n=t.showConfirmButton,time=t.time;return this.$swal.fire({position:e||"success",icon:r||"success",title:title||"Success",showConfirmButton:n||!1,timer:time||1500})},submitFeedback:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:if(t.formData.rate){e.next=4;break}return e.abrupt("return",t.showParcelNotification({icon:"error",title:"Please add your rating."}));case 4:return e.prev=4,console.log("DATA TO BE SAVED",t.formData),e.next=8,t.$axios.$post("/ratings/create",t.formData);case 8:if(!(r=e.sent)){e.next=14;break}return console.log("rate",r),e.next=13,t.showParcelNotification({icon:"success",title:"Thank you for rating us."});case 13:t.reset();case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),console.error("error",e.t0);case 19:case"end":return e.stop()}}),e,null,[[4,16]])})))()},validate:function(){this.$refs.form.validate()},reset:function(){this.dialog=!1,this.formData={},this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}}),c=o,l=r(30),m=r(31),d=r.n(m),f=r(240),v=r(225),h=r(92),j=r(646),x=r(647),k=r(648),_=r(657),w=r(649),E=r(147),S=r(650),$=r(63),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({staticClass:"text-capitalize font-weight-bold",attrs:{color:"primary",depressed:""}},"v-btn",o,!1),n),[t._v("Rate Our Services")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("span",{staticClass:"title"},[t._v(" Customer Feedback ")])]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form"},[r("v-row",{staticClass:"mt-4"},[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.fullname,callback:function(e){t.$set(t.formData,"fullname",e)},expression:"formData.fullname"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Address",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Contact",outlined:"",dense:"","hide-details":"auto",rules:[t.rules.required]},model:{value:t.formData.contact,callback:function(e){t.$set(t.formData,"contact",e)},expression:"formData.contact"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-textarea",{attrs:{label:"Feedback",outlined:"",dense:"","hide-details":"auto",rows:"3",rules:[t.rules.required]},model:{value:t.formData.message,callback:function(e){t.$set(t.formData,"message",e)},expression:"formData.message"}})],1),t._v(" "),r("v-col",{staticClass:"d-flex justify-space-between align-center",attrs:{cols:"12"}},[r("div",{staticClass:"subtitle-2"},[t._v("\n                                    Rate\n                                ")]),t._v(" "),r("div",[r("v-rating",{attrs:{color:"warning","background-color":"grey darken-1"},model:{value:t.formData.rate,callback:function(e){t.$set(t.formData,"rate",e)},expression:"formData.rate"}})],1)])],1)],1)],1),t._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{text:""},on:{click:t.reset}},[t._v("Close")]),t._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{depressed:"",color:"primary"},on:{click:t.submitFeedback}},[t._v("\n                        Submit\n                    ")])],1)],1)]],2)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardText:h.c,VCol:j.a,VDialog:x.a,VForm:k.a,VRating:_.a,VRow:w.a,VTextField:E.a,VTextarea:S.a,VToolbar:$.a})},627:function(t,e,r){"use strict";r.r(e);var n={name:"navbar",data:function(){return{drawer:!0,items:[{title:"Dashboard",icon:"mdi-view-dashboard",to:"/admin/dashboard"},{title:"Parcels",icon:"mdi-cart",to:"/admin/parcels"},{title:"Products",icon:"mdi-briefcase",to:"/admin/product-information"},{title:"Branches",icon:"mdi-map-marker",to:"/admin/branches"},{title:"Reports",icon:"mdi-file-document-multiple",to:"/admin/reports"},{title:"About Us",icon:"mdi-account",to:"/about-us"}],mini:!0}},computed:{isMobileOrTable:function(){return!!this.$vuetify.breakpoint.mdAndDown}},created:function(){var t=this;this.$nuxt.$on("show",(function(e){console.log("bol"),t.drawer=!0}))},beforeDestroy:function(){this.$nuxt.$off("show")}},o=r(30),c=r(31),l=r.n(c),m=r(240),d=r(633),f=r(226),v=r(188),h=r(227),j=r(142),x=r(229),k=r(99),_=r(124),w=r(653),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"","mini-variant":t.mini,"mini-variant-width":"80",permanent:!t.isMobileOrTable,temporary:t.isMobileOrTable,color:"primary"},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},scopedSlots:t._u([{key:"append",fn:function(){return[r("div",{staticClass:"pa-2"},[r("v-btn",{attrs:{to:"/auth/login",block:"",depressed:"",color:"transparent"}},[r("v-icon",{attrs:{color:"white"}},[t._v(" mdi-logout ")]),t._v(" "),t.mini?t._e():r("span",{staticClass:"text-capitalize subtitle-1 white--text mx-4"},[t._v("\n                    Logout\n                ")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",{staticClass:"px-2 d-flex justify-center"},[r("v-img",{attrs:{src:"/img/bits-logo.png",width:"150"}})],1),t._v(" "),r("v-divider"),t._v(" "),r("v-list-item",{staticClass:"px-4"},[r("v-list-item-avatar",[r("v-icon",{attrs:{large:"",color:"white"}},[t._v(" mdi-account-circle ")])],1),t._v(" "),r("v-list-item-title",{staticClass:"white--text mx-2"},[t._v("Admin")]),t._v(" "),r("v-btn",{attrs:{dark:"",icon:""},on:{click:function(e){e.stopPropagation(),t.mini=!t.mini}}},[r("v-icon",[t._v("mdi-chevron-left")])],1)],1),t._v(" "),r("v-list",{attrs:{rounded:""}},t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{color:"white",ripple:"",link:"",to:e.to}},[r("v-list-item-icon",[r("v-icon",{attrs:{dark:""}},[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VDivider:d.a,VIcon:f.a,VImg:v.a,VList:h.a,VListItem:j.a,VListItemAvatar:x.a,VListItemContent:k.a,VListItemIcon:_.a,VListItemTitle:k.b,VNavigationDrawer:w.a})},628:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{socials:[{icon:"mdi-facebook",link:""},{icon:"mdi-twitter",link:""},{icon:"mdi-linkedin",link:""},{icon:"mdi-instagram",link:""}]}}},o=r(30),c=r(31),l=r.n(c),m=r(240),d=r(225),f=r(92),v=r(633),h=r(654),j=r(226),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"#499f6e",width:"100%"}},[r("v-card-text",t._l(t.socials,(function(e,n){return r("v-btn",{key:n,staticClass:"mx-4 white--text",attrs:{icon:""}},[r("v-icon",{attrs:{size:"24px"}},[t._v("\n          "+t._s(e.icon)+"\n        ")])],1)})),1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Bantayan Island Trucking Services")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardText:f.c,VDivider:v.a,VFooter:h.a,VIcon:j.a})}},[[471,29,4,30]]]);