(window.webpackJsonp=window.webpackJsonp||[]).push([[197,25],{1012:function(e,t,r){"use strict";r(928)},1013:function(e,t,r){var o=r(53)(!1);o.push([e.i,"img[data-v-68b886ec]{width:30%;display:block;margin:auto auto 10px}",""]),e.exports=o},1162:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"animat-block"},[o("div",{staticClass:"bg_circle"},[o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div"),e._v(" "),o("div")]),e._v(" "),o("div",{staticClass:"cross"}),e._v(" "),o("div",{staticClass:"cross1"}),e._v(" "),o("div",{staticClass:"cross2"}),e._v(" "),o("div",{staticClass:"dot"}),e._v(" "),o("div",{staticClass:"dot1"}),e._v(" "),o("div",{staticClass:"top-circle"}),e._v(" "),o("div",{staticClass:"center-circle"}),e._v(" "),o("div",{staticClass:"bottom-circle1"}),e._v(" "),o("div",{staticClass:"right-circle"}),e._v(" "),o("div",{staticClass:"right-circle1"}),e._v(" "),o("div",{staticClass:"quarterCircle"}),e._v(" "),o("img",{staticClass:"cloud-logo",attrs:{src:r(370),alt:"login logo"}}),o("img",{staticClass:"cloud-logo1",attrs:{src:r(370),alt:"login logo"}}),o("img",{staticClass:"cloud-logo2",attrs:{src:r(370),alt:"login logo"}}),o("img",{staticClass:"cloud-logo3",attrs:{src:r(370),alt:"login logo"}}),o("img",{staticClass:"cloud-logo4",attrs:{src:r(370),alt:"login logo"}}),o("img",{staticClass:"cloud-logo5",attrs:{src:r(370),alt:"login logo"}})])}],l=(r(11),r(74),r(39),r(9)),n=r(406),c=r(86);l.default.use(n.a);var d={data:function(){return{image:"",originalSN:"",userName:"",subject:"",userId:"",userPhone:"",userEmail:"",userPassword:"",userPassword2:"",secretNumber:"",isUserIdFocus:!1,isUserEmailFocus:!1,isUserPasswordFocus:!1,isUserPassword2Focus:!1,isSecretFocus:!1,isUserNameFocus:!1,isUserIdValid:!1,isUserEmailValid:!1,isUserPasswordValid:!1,isUserPassword2Valid:!1,isSecretValid:!1,isUserNameValid:!1,cnt:0}},computed:{isUserIdFocusAndValid:function(){return this.isUserIdFocus&&this.isUserIdValid},isUserIdFocusAndInvalid:function(){return this.isUserIdFocus&&!this.isUserIdValid},isUserNameFocusAndValid:function(){return this.isUserNameFocus&&this.isUserNameValid},isUserNameFocusAndInValid:function(){return this.isUserNameFocus&&!this.isUserNameValid},isUserEmailFocusAndValid:function(){return this.isUserEmailFocus&&this.isUserEmailValid},isUserEmailFocusAndInValid:function(){return this.isUserEmailFocus&&!this.isUserEmailValid},isUserPasswordFocusAndValid:function(){return this.isUserPasswordFocus&&this.isUserPasswordValid},isUserPasswordFocusAndInvalid:function(){return this.isUserPasswordFocus&&!this.isUserPasswordValid},isUserPassword2FocusAndValid:function(){return this.isUserPassword2Focus&&this.isUserPassword2Valid},isUserPassword2FocusAndInvalid:function(){return this.isUserPassword2Focus&&!this.isUserPassword2Valid},isSecretFocusAndValid:function(){return this.isSecretFocus&&this.isSecretValid},isSecretFocusAndInvalid:function(){return this.isSecretFocus&&!this.isSecretValid}},methods:{validateSecret:function(){var e=this;if(!this.isSecretValid||this.secretNumber!=this.originalSN)return this.isSecretValid&&this.secretNumber!=this.originalSN?(this.$alertify.warning("인증번호가 만료되었습니다 다시 발급해주세요."),void(this.isSecretValid=!1)):void c.default.post("/api/v1/users/sms/confirms",{to:this.userPhone,number:this.secretNumber}).then((function(t){t.data;e.cnt=1,e.isSecretValid=!0,e.originalSN=e.secretNumber})).catch((function(t){console.log("RegisterVue: error : "),e.$alertify.error("인증번호가 틀렸습니다."),e.isSecretValid=!1}))},validateUserId:function(){this.isUserIdValid=this.userId.length>=5,console.log(this.isUserIdValid)},validateDBUserId:function(){var e=this;this.userId.length>=5&&c.default.post("/api/v1/users/id/confirms",{userId:this.userId}).then((function(t){t.data;e.$alertify.success("아이디를 사용할 수 있습니다."),e.isUserIdValid=!0})).catch((function(t){console.log("RegisterVue: error : "),e.$alertify.error("아이디가 중복됩니다.."),e.isUserIdValid=!1}))},validateName:function(){this.isUserNameValid=this.userName.length>1},validateEmail:function(){this.isUserEmailValid=!!/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(this.userEmail),console.log(this.isUserEmailValid)},validateDBEmail:function(){var e=this;/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(this.userEmail)&&c.default.post("/api/v1/users/email/confirms",{email:this.userEmail}).then((function(t){t.data;e.$alertify.success("이메일을 사용할 수 있습니다."),e.isUserEmailValid=!0})).catch((function(t){console.log("RegisterVue: error : "),e.$alertify.error("이메일이 중복됩니다.."),e.isUserEmailValid=!1}))},validatePassword:function(){var e=new RegExp(/[a-zA-Z]+/),t=new RegExp(/[~!@#$%^&*()_+|<>?:{}]+/),r=new RegExp(/[0-9]+/);this.isUserPasswordValid=!!(e.test(this.userPassword)&&t.test(this.userPassword)&&r.test(this.userPassword)&&this.userPassword.length>=8)},validatePassword2:function(){this.isUserPassword2Valid=this.userPassword==this.userPassword2},getSms:function(){var e=this;this.$alertify.success("문자가 발송되었습니다!"),c.default.post("/api/v1/users/sms/sends",{to:this.userPhone}).then((function(e){var data=e.data;console.log(data)})).catch((function(t){console.log("RegisterVue: error : "),e.$alertify.error("서버 오류 발생.")}))},register:function(){var e=this;0==this.cnt&&c.default.post("/api/v1/users/sms/confirms",{to:this.userPhone,number:this.secretNumber}).then((function(t){t.data;e.cnt=0,e.isSecretValid=!0,e.originalSN=e.secretNumber})).catch((function(t){console.log("RegisterVue: error : "),e.$alertify.error("인증번호가 틀렸습니다."),e.isSecretValid=!1})),this.isUserPasswordValid&&this.isUserPassword2Valid&&this.isUserIdValid&&""!=this.userName&&this.isSecretValid?(console.log("register"),c.default.post("/api/v1/users",{userName:this.userName,userPassword:this.userPassword,userId:this.userId,userEmail:this.userEmail}).then((function(t){var data=t.data;console.log("RegisterVue: data : "),console.log(data);e.$alertify.alert("회원가입을 축하합니다. 로그인 페이지로 이동합니다",(function(){})).set({title:"수화닥터.site"}),e.$nuxt.$options.router.push("/authentication/login")})).catch((function(t){console.log("RegisterVue: error : "),console.log(t),"404"==t.response.status&&e.$alertify.error("Opps!! 서버에 문제가 발생했습니다.")}))):this.$alertify.error("정보를 정확하게 입력해주세요")}}},m=(r(1012),r(60)),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-page2 animat-rate"},[o("div",{staticClass:"login-content-main"},[o("div",{staticClass:"login-content"},[o("div",{staticClass:"login-content-header"},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:r(376),alt:"sign-logo"}})])],1),e._v(" "),o("h4",[e._v("회원님 환영합니다! 정보를 입력해주세요.")]),e._v(" "),o("form",{staticClass:"form2"},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userId,expression:"userId"}],staticClass:"form-control",class:{"is-valid":e.isUserIdFocusAndValid,"is-invalid":e.isUserIdFocusAndInvalid},attrs:{id:"inputname",type:"text",placeholder:"아이디"},domProps:{value:e.userId},on:{input:[function(t){t.target.composing||(e.userId=t.target.value)},e.validateUserId],focus:function(t){e.isUserIdFocus=!0},blur:e.validateDBUserId}}),e._v(" "),o("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px"}},[e._v("\n            최소 5글자이상 입력하세요.\n          ")])]),e._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword,expression:"userPassword"}],staticClass:"form-control",class:{"is-valid":e.isUserPasswordFocusAndValid,"is-invalid":e.isUserPasswordFocusAndInvalid},attrs:{id:"inputPassword",type:"password",placeholder:"비밀번호"},domProps:{value:e.userPassword},on:{input:[function(t){t.target.composing||(e.userPassword=t.target.value)},e.validatePassword],focus:function(t){e.isUserPasswordFocus=!0}}}),e._v(" "),o("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px","margin-bottom":"10px"}},[e._v("\n            1개 이상의 특수문자를 포함하고 8자리 이상이여야 합니다.\n          ")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.userPassword2,expression:"userPassword2"}],staticClass:"form-control",class:{"is-valid":e.isUserPassword2FocusAndValid,"is-invalid":e.isUserPassword2FocusAndInvalid},attrs:{id:"inputPassword2",type:"password",placeholder:"비밀번호 재확인"},domProps:{value:e.userPassword2},on:{input:[function(t){t.target.composing||(e.userPassword2=t.target.value)},e.validatePassword2],focus:function(t){e.isUserPassword2Focus=!0}}})]),e._v(" "),o("div",{staticClass:"form-group",staticStyle:{"padding-top":"0px"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"form-control",class:{"is-valid":e.isUserNameFocusAndValid,"is-invalid":e.isUserNameFocusAndInValid},attrs:{id:"inputname",type:"text",placeholder:"이름"},domProps:{value:e.userName},on:{input:[function(t){t.target.composing||(e.userName=t.target.value)},e.validateName],focus:function(t){e.isUserNameFocus=!0}}})]),e._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userEmail,expression:"userEmail"}],staticClass:"form-control",class:{"is-valid":e.isUserEmailFocusAndValid,"is-invalid":e.isUserEmailFocusAndInValid},attrs:{id:"email",type:"email",placeholder:"이메일"},domProps:{value:e.userEmail},on:{input:[function(t){t.target.composing||(e.userEmail=t.target.value)},e.validateEmail],focus:function(t){e.isUserEmailFocus=!0},blur:e.validateDBEmail}}),e._v(" "),o("h5",{staticStyle:{"margin-left":"10px","margin-top":"10px"}},[e._v("\n            이메일 형식으로 입력해주세요.\n          ")])]),e._v(" "),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.userPhone,expression:"userPhone"}],staticClass:"form-control",staticStyle:{width:"250px",display:"inline-block"},attrs:{id:"inputname",type:"text",placeholder:"휴대전화번호 입력"},domProps:{value:e.userPhone},on:{input:function(t){t.target.composing||(e.userPhone=t.target.value)}}}),e._v(" "),o("a",{staticClass:"ml-1 btn button-effect btn-info signpbtn",on:{click:e.getSms}},[e._v("인증번호 받기")]),e._v(" "),o("span",{attrs:{id:"timer"}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.secretNumber,expression:"secretNumber"}],staticClass:"form-control",class:{"is-valid":e.isSecretFocusAndValid,"is-invalid":e.isSecretFocusAndInvalid},attrs:{id:"inputname",type:"text",placeholder:"인증번호 입력하세요"},domProps:{value:e.secretNumber},on:{focus:function(t){e.isSecretFocus=!0},blur:e.validateSecret,input:function(t){t.target.composing||(e.secretNumber=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"form-group mb-0"},[o("div",{staticClass:"buttons"},[o("a",{staticClass:"btn button-effect btn-primary signpbtn",on:{click:e.register}},[e._v("가입 완료")])])])])])]),e._v(" "),e._m(0)])}),o,!1,null,"68b886ec",null);t.default=component.exports},1355:function(e,t,r){"use strict";r.r(t);var o={components:{SignUp:r(1162).default}},l=r(60),component=Object(l.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("SignUp")}),[],!1,null,null,null);t.default=component.exports},370:function(e,t,r){e.exports=r.p+"img/2.9a70deb.png"},376:function(e,t,r){e.exports=r.p+"img/landing-logo.a81471c.png"},928:function(e,t,r){var content=r(1013);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(54).default)("5f116cde",content,!0,{sourceMap:!1})}}]);