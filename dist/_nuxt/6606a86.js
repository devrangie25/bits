(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{666:function(t,e,o){"use strict";o.r(e);o(11),o(10),o(13),o(15),o(16);var r=o(72),n=o(3);o(4),o(12),o(465),o(35);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"productItemModal",props:{formData:Object,showDialog:Boolean,action:String},data:function(){return{dialog:!1,copyData:l({},this.formData),rules:{required:function(t){return!!t||"Required field"}}}},watch:{showDialog:function(t){this.dialog=t,this.copyData=l({},this.formData)},"copyData.product_id":function(t){var e=this;this.storeProducts.forEach((function(o){o.id===t&&(e.copyData.shipping_fee=parseFloat(o.shipping_fee).toFixed(2),e.copyData.name=o.name,e.copyData.id=o.id)}))},"copyData.quantity":function(t){var e;this.copyData.total=parseFloat((null===(e=this.copyData)||void 0===e?void 0:e.shipping_fee)*t).toFixed(2)}},computed:{storeProducts:function(){return Object(r.a)(this.$store.state.products.products)}},methods:{cancel:function(){"new"===this.action?(this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("cancel-edit-product",!1),this.dialog=!1)},addItem:function(){if(this.$refs.productItemForm.validate())return 0==this.copyData.quantity?this.$swal.fire({title:"Quantity cannot be 0",icon:"warning"}):void("new"===this.action?(this.$emit("save-product-item",this.copyData),this.dialog=!1,this.copyData={},this.$refs.productItemForm.resetValidation()):(this.$emit("update-product-item",this.copyData),this.$emit("cancel-edit-product",!1),this.dialog=!1))}}},f=o(30),y=o(31),v=o.n(y),h=o(240),m=o(225),D=o(92),_=o(647),w=o(648),O=o(226),x=o(686),j=o(652),P=o(147),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{width:"500",persistent:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"text-capitalize",attrs:{color:"primary",depressed:""}},"v-btn",n,!1),r),[o("v-icon",{attrs:{left:""}},[t._v("\n                mdi-plus\n            ")]),t._v("\n            Add Product\n        ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("v-form",{ref:"productItemForm"},[o("v-card-title",[t._v("\n                Product\n            ")]),t._v(" "),o("v-card-text",[o("v-select",{attrs:{items:t.storeProducts,"item-value":"id","item-text":"name",label:"Select Product",outlined:"",dense:"",rules:[t.rules.required],readonly:"edit"===t.action},model:{value:t.copyData.product_id,callback:function(e){t.$set(t.copyData,"product_id",e)},expression:"copyData.product_id"}}),t._v(" "),o("v-text-field",{attrs:{label:"Quantity",outlined:"",dense:"",type:"number",rules:[t.rules.required]},model:{value:t.copyData.quantity,callback:function(e){t.$set(t.copyData,"quantity",e)},expression:"copyData.quantity"}}),t._v(" "),o("v-text-field",{attrs:{label:"Shipping Fee",outlined:"",dense:"",rules:[t.rules.required],readonly:"",type:"number"},model:{value:t.copyData.shipping_fee,callback:function(e){t.$set(t.copyData,"shipping_fee",e)},expression:"copyData.shipping_fee"}}),t._v(" "),o("v-text-field",{attrs:{label:"Total Amount",outlined:"",dense:"",rules:[t.rules.required],type:"number",readonly:""},model:{value:t.copyData.total,callback:function(e){t.$set(t.copyData,"total",e)},expression:"copyData.total"}})],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"gray",text:""},on:{click:t.cancel}},[t._v("\n                    Cancel\n                ")]),t._v(" "),o("v-btn",{attrs:{color:"primary",depressed:""},on:{click:t.addItem}},[t._v("\n                    "+t._s("new"===t.action?"Add":"Save")+"\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:m.a,VCardActions:D.a,VCardText:D.c,VCardTitle:D.d,VDialog:_.a,VForm:w.a,VIcon:O.a,VSelect:x.a,VSpacer:j.a,VTextField:P.a})}}]);