(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{690:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(15),r(12),r(16);var n=r(3);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var o={name:"branchForm",props:{formData:Object,action:String},data:function(){return{branch:l({},this.formData),rules:{required:function(e){return!!e||"Required field"}}}},methods:{cancel:function(){this.$emit("cancel-branch",!0)},save:function(){this.$refs.branchForm.validate()&&this.$emit("".concat("New"===this.action?"save":"update","-branch"),l(l({},this.branch),{},{status:1}))}}},d=r(30),v=r(31),h=r.n(v),m=r(240),f=r(225),x=r(92),y=r(646),O=r(648),_=r(649),w=r(147),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-card-title",[e._v("\n            "+e._s("create"===e.action?"New":"Edit")+" Branch\n        ")]),e._v(" "),r("v-form",{ref:"branchForm"},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Trucking Name",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.name,callback:function(t){e.$set(e.branch,"name",t)},expression:"branch.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Address",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.address,callback:function(t){e.$set(e.branch,"address",t)},expression:"branch.address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Schedule",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.schedule,callback:function(t){e.$set(e.branch,"schedule",t)},expression:"branch.schedule"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Zip Code",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.branch.zipcode,callback:function(t){e.$set(e.branch,"zipcode",t)},expression:"branch.zipcode"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Municipality",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.municipality,callback:function(t){e.$set(e.branch,"municipality",t)},expression:"branch.municipality"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Contact Number",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.branch.contact_number,callback:function(t){e.$set(e.branch,"contact_number",t)},expression:"branch.contact_number"}})],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"mx-2 d-flex justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"gray",depressed:""},on:{click:e.cancel}},[e._v("\n                    Cancel\n                ")]),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",depressed:""},on:{click:e.save}},[e._v("\n                    Save\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:m.a,VCard:f.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:y.a,VForm:O.a,VRow:_.a,VTextField:w.a})}}]);