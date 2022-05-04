(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6],{658:function(t,e,o){var content=o(661);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("9b1f261a",content,!0,{sourceMap:!1})},660:function(t,e,o){"use strict";o(658)},661:function(t,e,o){var r=o(19)(!1);r.push([t.i,".signup-title[data-v-30f65908]{color:#434343!important}.forgot-password[data-v-30f65908]{cursor:pointer}",""]),t.exports=r},663:function(t,e,o){"use strict";o.r(e);o(27);var r={name:"authForm",props:{title:String,formData:Object},data:function(){var t=this;return{isResetPassword:!1,seeConfirmPassword:!1,seePassword:!1,rules:{required:function(t){return!!t||"Required field"},email:function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"},password:function(t){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(t)||"Min. 8 characters with at least one capital letter, a number and a special character."},confirmPassword:function(e){return e===t.formData.password||"Password does not match."}}}},computed:{isResetPasswordPage:function(){return"Reset Password"===this.title},isLoginPage:function(){return"Login"===this.title},authActionText:function(){return"Login"===this.title?"Login":"Sign up"===this.title?"Sign up":"Reset Password"},authDescription:function(){return"Login"===this.title?"Don't have an account? ":"Sign up"===this.title?"Already have an account?":"Back to"},authText:function(){return"Login"===this.title?"Sign up":"Sign up"===this.title?"Sign in":"Login"},to:function(){return"Login"===this.title?"register":"login"}},methods:{resetPassword:function(){this.$router.push("/reset-password")},toggleEye:function(){this.seePassword=!this.seePassword},toggleEyeConfirm:function(){this.seeConfirmPassword=!this.seeConfirmPassword},authAction:function(){this.$refs.form.validate()&&("Sign up"===this.title&&this.$emit("register-user",this.formData),"Login"===this.title?this.$emit("login-user",this.formData):this.$emit("reset-password",this.formData))}}},n=(o(660),o(30)),l=o(31),c=o.n(l),d=o(240),m=o(225),f=o(92),v=o(646),h=o(648),w=o(649),_=o(147),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-form",{ref:"form"},[o("v-card",{staticClass:"transparent px-16",attrs:{flat:""}},[o("v-card-title",[o("v-card-title",{staticClass:"signup-title font-weight-bold text-break ml-n4"},[t._v("\n                    "+t._s(t.title)+"\n                ")])],1),t._v(" "),o("v-card-text",[o("v-row",[t.isLoginPage||t.isResetPasswordPage?t._e():o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v("First Name")]),t._v(" "),o("v-text-field",{staticClass:"mt-1",attrs:{type:"email",outlined:"","hide-details":"auto",dense:"",rules:[t.rules.required]},model:{value:t.formData.first_name,callback:function(e){t.$set(t.formData,"first_name",e)},expression:"formData.first_name"}})],1),t._v(" "),t.isLoginPage||t.isResetPasswordPage?t._e():o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v("Last Name")]),t._v(" "),o("v-text-field",{staticClass:"mt-1",attrs:{type:"email",outlined:"","hide-details":"auto",dense:"",rules:[t.rules.required]},model:{value:t.formData.last_name,callback:function(e){t.$set(t.formData,"last_name",e)},expression:"formData.last_name"}})],1),t._v(" "),t.isLoginPage||t.isResetPasswordPage?t._e():o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v("Mobile Number")]),t._v(" "),o("v-text-field",{staticClass:"mt-1",attrs:{type:"number",outlined:"","hide-details":"auto",dense:"",rules:[t.rules.required]},model:{value:t.formData.mobile_number,callback:function(e){t.$set(t.formData,"mobile_number",e)},expression:"formData.mobile_number"}})],1),t._v(" "),o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v("Email")]),t._v(" "),o("v-text-field",{staticClass:"mt-1",attrs:{type:"email",outlined:"","hide-details":"auto",dense:"",rules:[t.rules.required,t.rules.email]},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v(t._s(t.isResetPasswordPage?"New Password":"Password"))]),t._v(" "),o("v-text-field",{staticClass:"my-1",attrs:{outlined:"","hide-details":"auto",dense:"","append-icon":t.seePassword?"mdi-eye":"mdi-eye-off",type:t.seePassword?"text":"password",rules:"Login"===t.title?[]:[t.rules.required,t.rules.password]},on:{"click:append":t.toggleEye},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),t.isResetPasswordPage?o("v-col",{staticClass:"mb-n3",attrs:{cols:"12"}},[o("label",[t._v("Confirm Password")]),t._v(" "),o("v-text-field",{staticClass:"my-1",attrs:{outlined:"","hide-details":"auto",dense:"","append-icon":t.seeConfirmPassword?"mdi-eye":"mdi-eye-off",type:t.seeConfirmPassword?"text":"password",rules:"Login"===t.title?[]:[t.rules.required,t.rules.confirmPassword]},on:{"click:append":t.toggleEyeConfirm},model:{value:t.formData.confirmPassword,callback:function(e){t.$set(t.formData,"confirmPassword",e)},expression:"formData.confirmPassword"}})],1):t._e(),t._v(" "),t.isLoginPage?o("v-col",{staticClass:"my-n1",attrs:{cols:"12"}},[o("div",[t._v("\n                            Forgot Password?\n                            "),o("nuxt-link",{staticClass:"text-decoration-none primary--text font-weight-bold forgot-password",attrs:{to:"/auth/reset-password"}},[t._v("Reset here")])],1)]):t._e()],1)],1),t._v(" "),o("v-card-actions",{class:(t.isLoginPage?"":"mt-6")+" mx-2"},[o("v-btn",{attrs:{color:"primary",block:"",depressed:"",height:"42"},on:{click:function(e){return e.preventDefault(),t.authAction.apply(null,arguments)}}},[o("span",{staticClass:"font-weight-bold text-capitalize"},[t._v("\n                        "+t._s(t.authActionText)+"\n                    ")])])],1),t._v(" "),t.isResetPassword?t._e():o("div",{staticClass:"text-center mx-4 mt-2 body-2 font-weight-medium"},[t._v("\n                "+t._s(t.authDescription)+"\n                "),o("nuxt-link",{staticClass:"text-decoration-none primary--text font-weight-bold",attrs:{to:"/auth/"+t.to}},[t._v(t._s(t.authText))])],1),t._v(" "),t.isResetPassword?o("div",{staticClass:"text-center mx-4 mt-2 body-2 font-weight-medium"},[t._v("\n                Back to\n                "),o("span",{staticClass:"primary--text font-weight-bold forgot-password"},[t._v("Login")])]):t._e()],1)],1)],1)}),[],!1,null,"30f65908",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VCol:v.a,VForm:h.a,VRow:w.a,VTextField:_.a})},682:function(t,e,o){var content=o(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("a44bc210",content,!0,{sourceMap:!1})},724:function(t,e,o){"use strict";o(682)},725:function(t,e,o){var r=o(19)(!1);r.push([t.i,".bg-img[data-v-ac192d30]{background-image:url(/img/truck.jpeg)!important;background-color:#3c5a77!important;background-blend-mode:multiply!important;background-repeat:no-repeat!important;background-size:cover!important;background-position:50%!important;opacity:.8!important}.col-1-center-form[data-v-ac192d30]{color:#fff!important}.col-1-center-form[data-v-ac192d30],.col-2-center-form[data-v-ac192d30]{display:flex!important;align-items:center!important;justify-content:center!important;flex:1!important;height:100vh!important}",""]),t.exports=r},747:function(t,e,o){"use strict";o.r(e);var r=o(14),n=(o(65),{layout:"auth",name:"login",data:function(){return{formData:{email:"",password:""}}},computed:{width:function(){var t=this.$vuetify.breakpoint.width;return t<600?(console.log("Extra Small Screen"),"extra-small"):t>600&&t<960?(console.log("Small Screen"),"small"):t>960&&t<1264?(console.log("Medium Screen"),"medium"):t>1264&&t<1904?(console.log("Large Screen"),"large"):t>1904?(console.log("Extra Large Screen"),"extra-large"):void 0}},methods:{showParcelNotification:function(t){var e=t.position,o=t.icon,title=t.title,r=t.showConfirmButton,time=t.time;return this.$swal.fire({position:e||"success",icon:o||"success",title:title||"Success",showConfirmButton:r||!1,timer:time||1500})},loginUser:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,e.$store.dispatch("auth/loginUser",t);case 3:if(o.sent.error){o.next=11;break}return o.next=7,e.$router.push("/admin/dashboard");case 7:return o.next=9,e.showParcelNotification({icon:"success",title:"Successfully Login"});case 9:o.next=13;break;case 11:return o.next=13,e.showParcelNotification({icon:"error",title:"User Not Foud"});case 13:o.next=18;break;case 15:o.prev=15,o.t0=o.catch(0),console.error("error",o.t0.message);case 18:case"end":return o.stop()}}),o,null,[[0,15]])})))()}}}),l=(o(724),o(30)),c=o(31),d=o.n(c),m=o(646),f=o(649),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"bg-img d-none d-lg-flex",attrs:{cols:"12",lg:"7"}},[o("div",{class:(["large"].includes(t.width)?"display-1":"display-2")+" font-weight-bold col-1-center-form"},[t._v("\n                Bantayan Island Trucking Services\n            ")])]),t._v(" "),o("v-col",{staticClass:"col-2-center-form",attrs:{cols:"12",lg:"5"}},[o("bt-m-auth-form",{attrs:{formData:t.formData,title:"Login"},on:{"login-user":t.loginUser}})],1)],1)],1)}),[],!1,null,"ac192d30",null);e.default=component.exports;d()(component,{BtMAuthForm:o(663).default}),d()(component,{VCol:m.a,VRow:f.a})}}]);