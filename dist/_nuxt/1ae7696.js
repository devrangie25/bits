(window.webpackJsonp=window.webpackJsonp||[]).push([[19,9],{693:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(15),r(12),r(16);var c=r(3);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"productForm",props:{formData:Object,action:String},data:function(){return{product:o({},this.formData),rules:{required:function(e){return!!e||"Required field"}}}},watch:{"product.shipping_fee":function(e){},"product.size":function(e){}},methods:{cancel:function(){this.$emit("cancel-product",!0)},save:function(){this.$refs.productForm.validate()&&this.$emit("".concat("New"===this.action?"save":"update","-product"),this.product)}}},d=r(30),f=r(31),v=r.n(f),m=r(240),h=r(225),x=r(92),w=r(646),P=r(648),y=r(649),O=r(686),_=r(147),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-card-title",[e._v("\n            "+e._s("New"===e.action?"New":"Edit")+" Product\n        ")]),e._v(" "),r("v-form",{ref:"productForm"},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Product Name",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.product.name,callback:function(t){e.$set(e.product,"name",t)},expression:"product.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Shipping Fee",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.product.shipping_fee,callback:function(t){e.$set(e.product,"shipping_fee",t)},expression:"product.shipping_fee"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-select",{attrs:{outlined:"",label:"Type",items:["Goods","Flammable","Fragile"],dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.product.type,callback:function(t){e.$set(e.product,"type",t)},expression:"product.type"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Size",type:"text",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.product.size,callback:function(t){e.$set(e.product,"size",t)},expression:"product.size"}})],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"mx-2 d-flex justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"gray",depressed:""},on:{click:e.cancel}},[e._v("\n                    Cancel\n                ")]),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",depressed:""},on:{click:e.save}},[e._v("\n                    Save\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:m.a,VCard:h.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:w.a,VForm:P.a,VRow:y.a,VSelect:O.a,VTextField:_.a})},744:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(15),r(12),r(16);var c=r(3),n=r(14);r(65);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"loggedin",middleware:"secure",data:function(){return{page:1,search:"",headers:[{text:"Item",value:"name"},{text:"Type",value:"type"},{text:"Size",value:"size"},{text:"Shipping Fee (₱)",value:"shipping_fee"},{text:"Actions",value:"actions",sortable:!1}],products:[],formData:{},action:"New"}},computed:{storeProducts:function(){return this.$store.state.products.products}},methods:{deleteProduct:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 3:if(!r.sent.isConfirmed){r.next=18;break}return r.next=7,t.$store.dispatch("products/deleteProduct",{product_id:e.id});case 7:if(r.sent.error){r.next=16;break}return r.next=11,t.getProducts();case 11:return r.next=13,t.showParcelNotification({icon:"success",title:"Product Successfully Deleted"});case 13:t.page=1,r.next=18;break;case 16:return r.next=18,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 18:r.next=23;break;case 20:r.prev=20,r.t0=r.catch(0),console.error("error",r.t0);case 23:case"end":return r.stop()}}),r,null,[[0,20]])})))()},editProduct:function(e){this.formData=e,this.action="Edit",this.page=2},showParcelNotification:function(e){var t=e.position,r=e.icon,title=e.title,c=e.showConfirmButton,time=e.time;return this.$swal.fire({position:t||"success",icon:r||"success",title:title||"Success",showConfirmButton:c||!1,timer:time||1500})},getProducts:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("products/getProducts");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("error",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},updateProduct:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("products/updateProduct",l(l({},e),{},{product_id:e.id}));case 3:if(r.sent.error){r.next=12;break}return r.next=7,t.getProducts();case 7:return r.next=9,t.showParcelNotification({icon:"success",title:"Product Successfully Updated"});case 9:t.page=1,r.next=14;break;case 12:return r.next=14,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),console.error("error",r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,16]])})))()},addNewProduct:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("products/createProduct",e);case 3:if(r.sent.error){r.next=12;break}return r.next=7,t.getProducts();case 7:return r.next=9,t.showParcelNotification({icon:"success",title:"Product Successfully Added"});case 9:t.page=1,r.next=14;break;case 12:return r.next=14,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),console.error("error",r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,16]])})))()},cancelParcel:function(){this.page=1},saveParcel:function(){this.page=1,this.$swal.fire({position:"center",icon:"success",title:"Product Successfully Added.",showConfirmButton:!1,timer:1500})},addParcelForm:function(){this.action="New",this.page=2}}},f=r(30),v=r(31),m=r.n(v),h=r(240),x=r(225),w=r(646),P=r(737),y=r(226),O=r(649),_=r(652),j=r(147),k=r(63),C=r(192),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"parcel-container"},[r("v-row",[1===e.page?r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-data-table",{staticClass:"transparent rounded-lg",attrs:{headers:e.headers,items:e.storeProducts,"sort-by":"calories",search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",rounded:"lg"}},[r("v-toolbar-title",[e._v("Products")]),e._v(" "),r("v-btn",{staticClass:"ml-2",attrs:{"x-small":"",depressed:"",fab:"",color:"primary"},on:{click:e.addParcelForm}},[r("v-icon",[e._v(" mdi-plus ")])],1),e._v(" "),e._l(6,(function(i){return r("v-spacer",{key:i})})),e._v(" "),r("v-text-field",{staticClass:"mr-n4",attrs:{"append-icon":"mdi-magnify",label:"Search Product",outlined:"",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],2)]},proxy:!0},{key:"item.actions",fn:function(t){var c=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(t){return e.editProduct(c)}}},[e._v("\n                                mdi-pencil\n                            ")]),e._v(" "),r("v-icon",{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteProduct(c)}}},[e._v("\n                                mdi-delete\n                            ")])]}}],null,!1,913135771)})],1)],1):e._e(),e._v(" "),2===e.page?r("v-col",{attrs:{cols:"12"}},[r("bt-m-form-product",{attrs:{formData:e.formData,action:e.action},on:{"cancel-product":e.cancelParcel,"save-product":e.addNewProduct,"update-product":e.updateProduct}})],1):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;m()(component,{BtMFormProduct:r(693).default}),m()(component,{VBtn:h.a,VCard:x.a,VCol:w.a,VDataTable:P.a,VIcon:y.a,VRow:O.a,VSpacer:_.a,VTextField:j.a,VToolbar:k.a,VToolbarTitle:C.a})}}]);