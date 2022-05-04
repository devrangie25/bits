(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8],{690:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(15),r(12),r(16);var n=r(3);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={name:"branchForm",props:{formData:Object,action:String},data:function(){return{branch:o({},this.formData),rules:{required:function(e){return!!e||"Required field"}}}},methods:{cancel:function(){this.$emit("cancel-branch",!0)},save:function(){this.$refs.branchForm.validate()&&this.$emit("".concat("New"===this.action?"save":"update","-branch"),o(o({},this.branch),{},{status:1}))}}},d=r(30),h=r(31),f=r.n(h),v=r(240),m=r(225),x=r(92),w=r(646),y=r(648),O=r(649),B=r(147),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-card-title",[e._v("\n            "+e._s("create"===e.action?"New":"Edit")+" Branch\n        ")]),e._v(" "),r("v-form",{ref:"branchForm"},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Trucking Name",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.name,callback:function(t){e.$set(e.branch,"name",t)},expression:"branch.name"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Address",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.address,callback:function(t){e.$set(e.branch,"address",t)},expression:"branch.address"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Schedule",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.schedule,callback:function(t){e.$set(e.branch,"schedule",t)},expression:"branch.schedule"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Zip Code",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.branch.zipcode,callback:function(t){e.$set(e.branch,"zipcode",t)},expression:"branch.zipcode"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Municipality",dense:"","hide-details":"auto",rules:[e.rules.required]},model:{value:e.branch.municipality,callback:function(t){e.$set(e.branch,"municipality",t)},expression:"branch.municipality"}})],1),e._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[r("v-text-field",{attrs:{outlined:"",label:"Contact Number",dense:"","hide-details":"auto",type:"number",rules:[e.rules.required]},model:{value:e.branch.contact_number,callback:function(t){e.$set(e.branch,"contact_number",t)},expression:"branch.contact_number"}})],1)],1)],1),e._v(" "),r("v-card-actions",{staticClass:"mx-2 d-flex justify-end"},[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"gray",depressed:""},on:{click:e.cancel}},[e._v("\n                    Cancel\n                ")]),e._v(" "),r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary",depressed:""},on:{click:e.save}},[e._v("\n                    Save\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VCol:w.a,VForm:y.a,VRow:O.a,VTextField:B.a})},741:function(e,t,r){"use strict";r.r(t);r(11),r(10),r(13),r(4),r(15),r(12),r(16);var n=r(3),c=r(14);r(65);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"loggedin",middleware:"secure",data:function(){return{page:1,search:"",headers:[{text:"Name",value:"name"},{text:"Municipality",value:"municipality"},{text:"Zip Code",value:"zipcode"},{text:"Contact #",value:"contact_number"},{text:"Actions",value:"actions",sortable:!1}],branches:[],formData:{},action:"New"}},computed:{storeBranches:function(){return this.$store.state.branches.branches}},methods:{deleteBranch:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("branchToDelete",e.id),r.prev=1,r.next=4,t.$swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});case 4:if(!r.sent.isConfirmed){r.next=19;break}return r.next=8,t.$store.dispatch("branches/deleteBranch",{branch_id:e.id});case 8:if(r.sent.error){r.next=17;break}return r.next=12,t.getBranches();case 12:return r.next=14,t.showParcelNotification({icon:"success",title:"Branch Successfully Deleted"});case 14:t.page=1,r.next=19;break;case 17:return r.next=19,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 19:r.next=24;break;case 21:r.prev=21,r.t0=r.catch(1),console.error("error",r.t0);case 24:case"end":return r.stop()}}),r,null,[[1,21]])})))()},editBranch:function(e){this.formData=e,this.action="Edit",this.page=2},showParcelNotification:function(e){var t=e.position,r=e.icon,title=e.title,n=e.showConfirmButton,time=e.time;return this.$swal.fire({position:t||"success",icon:r||"success",title:title||"Success",showConfirmButton:n||!1,timer:time||1500})},getBranches:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("branches/getBranches");case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.error("error",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},updateBranch:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("branches/updateBranch",l(l({},e),{},{branch_id:e.id}));case 3:if(r.sent.error){r.next=12;break}return r.next=7,t.getBranches();case 7:return r.next=9,t.showParcelNotification({icon:"success",title:"Branch Successfully Updated"});case 9:t.page=1,r.next=14;break;case 12:return r.next=14,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),console.error("error",r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,16]])})))()},addNewBranch:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("branches/createBranch",e);case 3:if(r.sent.error){r.next=12;break}return r.next=7,t.getBranches();case 7:return r.next=9,t.showParcelNotification({icon:"success",title:"Branch Successfully Added"});case 9:t.page=1,r.next=14;break;case 12:return r.next=14,t.showParcelNotification({icon:"error",title:"An Error Occured"});case 14:r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),console.error("error",r.t0);case 19:case"end":return r.stop()}}),r,null,[[0,16]])})))()},cancelBranch:function(){this.page=1},saveBranch:function(){this.page=1,this.$swal.fire({position:"center",icon:"success",title:"Branch Successully Added",showConfirmButton:!1,timer:1500})},addBranchForm:function(){this.page=2}}},h=r(30),f=r(31),v=r.n(f),m=r(240),x=r(225),w=r(646),y=r(737),O=r(226),B=r(649),k=r(652),_=r(147),j=r(63),C=r(192),component=Object(h.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"parcel-container"},[r("v-row",[1===e.page?r("v-col",{attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-6",attrs:{rounded:"lg",flat:""}},[r("v-data-table",{staticClass:"transparent rounded-lg",attrs:{headers:e.headers,items:e.storeBranches,"sort-by":"calories",search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-toolbar",{attrs:{flat:"",rounded:"lg"}},[r("v-toolbar-title",[e._v("Branches")]),e._v(" "),r("v-btn",{staticClass:"ml-2",attrs:{"x-small":"",depressed:"",fab:"",color:"primary"},on:{click:e.addBranchForm}},[r("v-icon",[e._v(" mdi-plus ")])],1),e._v(" "),e._l(6,(function(i){return r("v-spacer",{key:i})})),e._v(" "),r("v-text-field",{staticClass:"mr-n4",attrs:{"append-icon":"mdi-magnify",label:"Search Branch",outlined:"",dense:"","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],2)]},proxy:!0},{key:"item.actions",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:"",color:"orange"},on:{click:function(t){return e.editBranch(n)}}},[e._v("\n                                mdi-pencil\n                            ")]),e._v(" "),r("v-icon",{attrs:{color:"red",small:""},on:{click:function(t){return e.deleteBranch(n)}}},[e._v("\n                                mdi-delete\n                            ")])]}}],null,!1,424838627)})],1)],1):e._e(),e._v(" "),2===e.page?r("v-col",{attrs:{cols:"12"}},[r("bt-m-form-branch",{attrs:{formData:e.formData,action:e.action},on:{"cancel-branch":e.cancelBranch,"save-branch":e.addNewBranch,"update-branch":e.updateBranch}})],1):e._e()],1)],1)])}),[],!1,null,null,null);t.default=component.exports;v()(component,{BtMFormBranch:r(690).default}),v()(component,{VBtn:m.a,VCard:x.a,VCol:w.a,VDataTable:y.a,VIcon:O.a,VRow:B.a,VSpacer:k.a,VTextField:_.a,VToolbar:j.a,VToolbarTitle:C.a})}}]);