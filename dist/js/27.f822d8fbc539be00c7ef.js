webpackJsonp([27],{1067:function(t,e){t.exports="/images/ekiti-logo.png?d3cfaa568afb3c25c7723c9a1610cf11"},1410:function(t,e,a){var s=a(1411);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(32)("9eb02812",s,!0,{})},1411:function(t,e,a){(t.exports=a(28)(!1)).push([t.i,".login-content[data-v-39e6dc72]{margin:7% auto;-webkit-box-shadow:0 0 20px #ccc;box-shadow:0 0 20px #ccc;border-radius:7px;background-color:#fff;width:288px!important;padding:20px;font-size:12px}.user-message[data-v-39e6dc72]{padding:15px 0;font-size:14px;color:#777}.img_backgrond[data-v-39e6dc72]{width:100%}.logo[data-v-39e6dc72]{min-height:60px}label[data-v-39e6dc72]{font-size:14px!important}[data-v-39e6dc72]::-webkit-input-placeholder{font-size:14px}",""])},1412:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(33),i=a.n(s),o=a(234),r=a.n(o);i.a.use(r.a),e.default={name:"forgetpassword",data:function(){return{formstate:{},model:{email:""}}},methods:{onSubmit:function(){this.formstate.$invalid||this.$router.push("/reset_password")}},mounted:function(){},destroyed:function(){}}},1413:function(t,e,a){var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 mt-4"},[e("h2",{staticClass:"text-center logo"},[e("img",{attrs:{width:"240",height:"auto",src:a(1067),alt:"Logo"}})])]),this._v(" "),e("div",{staticClass:"col-sm-12 mt-4"},[e("h3",{staticClass:"page-name text-center"},[this._v("Forgot Password")])])])}];t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"login-content mt-5"},[t._m(0),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"col-lg-12"},[a("p",{staticClass:"user-message "},[t._v(" Please enter the email you are registered with. An email message will be sent to the email address with further instructions.")]),t._v(" "),a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"E-mail"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit",value:"Send Confirmation Mail"}})])])])],1)])])},staticRenderFns:s}},1463:function(t,e,a){var s=a(48)(a(1412),a(1413),!1,function(t){a(1410)},"data-v-39e6dc72",null);t.exports=s.exports}});