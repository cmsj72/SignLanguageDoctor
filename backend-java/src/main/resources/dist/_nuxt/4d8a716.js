(window.webpackJsonp=window.webpackJsonp||[]).push([[95,110,111,162,190],{362:function(t,e,n){t.exports=n.p+"img/2.9a70deb.png"},368:function(t,e,n){t.exports=n.p+"img/landing-logo.a81471c.png"},410:function(t,e,n){t.exports=n.p+"img/profile1.c73c2c3.png"},424:function(t,e,n){var content=n(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("0263e1f8",content,!0,{sourceMap:!1})},435:function(t,e,n){t.exports=n.p+"img/ache.43d72ca.jpg"},436:function(t,e,n){t.exports=n.p+"img/chest.f6b644c.jpg"},437:function(t,e,n){t.exports=n.p+"img/closecard.1a017b7.png"},438:function(t,e,n){t.exports=n.p+"img/cold.44717e3.jpg"},439:function(t,e,n){t.exports=n.p+"img/cough.460ad6a.jpg"},440:function(t,e,n){t.exports=n.p+"img/digest.e4f97e0.jpg"},441:function(t,e,n){t.exports=n.p+"img/dizzy.4e93dc7.jpg"},442:function(t,e,n){t.exports=n.p+"img/head.d357db8.jpg"},443:function(t,e,n){t.exports=n.p+"img/itchy.9f80fda.jpg"},444:function(t,e,n){t.exports=n.p+"img/neck.f9ff17d.jpg"},445:function(t,e,n){t.exports=n.p+"img/snot.d06795b.jpg"},446:function(t,e,n){t.exports=n.p+"img/stomach.80ee35e.jpg"},447:function(t,e,n){t.exports=n.p+"img/strange.351e525.jpg"},448:function(t,e,n){t.exports=n.p+"img/sweat.0186432.jpg"},449:function(t,e,n){t.exports=n.p+"img/swell.d866f76.jpg"},463:function(t,e,n){t.exports=n.p+"img/send.050bfa4.png"},464:function(t,e,n){t.exports=n.p+"img/send2.3644568.png"},475:function(t,e,n){"use strict";n.r(e);var o={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},c=n(58),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("video",{ref:"video",attrs:{id:"video",autoplay:""}})}),[],!1,null,null,null);e.default=component.exports},493:function(t,e,n){"use strict";n.r(e);var o={name:"UserVideo",components:{OvVideo:n(475).default},props:{streamManager:Object},computed:{clientData:function(){var t=this.getConnectionData().clientData;return t}},methods:{getConnectionData:function(){var t=this.streamManager.stream.connection;return JSON.parse(t.data)}}},c=n(58),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":t.streamManager,test:!0}}),t._v(" "),n("div",[n("p",[t._v(t._s(t.clientData))])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},494:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-page2 animat-rate"},[o("div",{staticClass:"login-content-main"},[o("div",{staticClass:"login-content"},[o("div",{staticClass:"login-content-header"},[o("img",{attrs:{src:n(368),alt:"sign-logo"}})]),t._v(" "),o("h3",{staticClass:"mt-3"},[t._v("예약 환자를 선택해주세요.")]),t._v(" "),o("select",{staticClass:"custom-select",attrs:{id:"gender2"}},[o("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),o("option",{attrs:{value:"1"}},[t._v("이아경   4:00 예약")]),t._v(" "),o("option",{attrs:{value:"2"}},[t._v("김순신   6:00 예약")])]),t._v(" "),o("div",{staticClass:"card mt-4"},[o("div",{staticClass:"card-header"},[o("h5",[t._v("환자 이아경")])]),t._v(" "),o("img",{staticStyle:{height:"400px"},attrs:{src:n(410),alt:""}}),t._v(" "),o("div",{staticClass:"card-body"},[o("h5",{staticClass:"card-title"},[t._v("환자 증상")]),t._v(" "),o("p",{staticClass:"card-text"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas sed sem ut malesuada.")]),t._v(" "),o("button",{staticClass:"btn btn-primary btn-block"},[t._v("진료실 생성")])])])])]),t._v(" "),o("div",{staticClass:"animat-block"},[o("div",{staticClass:"bg_circle"},[o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div")]),t._v(" "),o("div",{staticClass:"cross"}),t._v(" "),o("div",{staticClass:"cross1"}),t._v(" "),o("div",{staticClass:"cross2"}),t._v(" "),o("div",{staticClass:"dot"}),t._v(" "),o("div",{staticClass:"dot1"}),t._v(" "),o("div",{staticClass:"top-circle"}),t._v(" "),o("div",{staticClass:"center-circle"}),t._v(" "),o("div",{staticClass:"bottom-circle1"}),t._v(" "),o("div",{staticClass:"right-circle"}),t._v(" "),o("div",{staticClass:"right-circle1"}),t._v(" "),o("div",{staticClass:"quarterCircle"}),t._v(" "),o("img",{staticClass:"cloud-logo",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo1",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo2",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo3",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo4",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo5",attrs:{src:n(362),alt:"login logo"}})])])}],c=n(9),r=n(404);c.default.use(r.a);var d={data:function(){return{options:[{id:"1",name:"[필수] 서비스 이용약관 동의"},{id:"2",name:"[필수] 개인정보 처리방침 동의"},{id:"3",name:"[필수] 개인 민감(건강)정보 처리방침 동의"}],optioned:[],alloptioned:!1,optionIds:[]}},mounted:function(){},methods:{}},l=n(58),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),o,!1,null,null,null);e.default=component.exports},500:function(t,e,n){t.exports=n.p+"img/profile2.15aca34.png"},513:function(t,e,n){var map={"./ache.jpg":435,"./chest.jpg":436,"./cold.jpg":438,"./cough.jpg":439,"./digest.jpg":440,"./dizzy.jpg":441,"./head.jpg":442,"./itchy.jpg":443,"./neck.jpg":444,"./snot.jpg":445,"./stomach.jpg":446,"./strange.jpg":447,"./sweat.jpg":448,"./swell.jpg":449};function o(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=c,t.exports=o,o.id=513},514:function(t,e,n){"use strict";n(424)},515:function(t,e,n){var o=n(51),c=n(175),r=n(437),d=o(!1),l=c(r);d.push([t.i,"#imagebox[data-v-328e0415]{position:relative}button.btn[data-v-328e0415]{background:url("+l+") no-repeat;position:absolute;top:-30px;left:80%;width:50px}",""]),t.exports=d},516:function(t,e,n){"use strict";n.r(e);n(173);var o={name:"SignCard",props:{imageUrl:void 0,cardList:[],index:void 0},component:{},data:function(){return{url:void 0}},mounted:function(){this.imageUrl&&(this.url=n(513)("./"+this.imageUrl+".jpg"))},methods:{delcard:function(t){console.log(this.index),this.cardList.splice(this.index,1),console.log(this.cardList)}}},c=(n(514),n(58)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"imagebox"}},[n("img",{staticStyle:{width:"150px",height:"80px"},attrs:{src:t.url}}),t._v(" "),n("button",{staticClass:"btn",attrs:{id:"btn",type:"submit"},on:{click:t.delcard}})])}),[],!1,null,"328e0415",null);e.default=component.exports},568:function(t,e,n){var content=n(799);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("a0847946",content,!0,{sourceMap:!1})},570:function(t,e){},571:function(t,e){},574:function(t,e){},575:function(t,e){},576:function(t,e){},577:function(t,e){},578:function(t,e){},579:function(t,e){},798:function(t,e,n){"use strict";n(568)},799:function(t,e,n){var o=n(51),c=n(175),r=n(463),d=n(464),l=o(!1),h=c(r),v=c(d);l.push([t.i,"#ssbtn{background:url("+h+");border:none;width:90px;height:34px;outline:0}#ssbtn:active{background:url("+v+")}#canvas{display:inline;float:left}",""]),t.exports=l},949:function(t,e,n){"use strict";n.r(e);var o,c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login-content-header"},[e("img",{attrs:{src:n(368),alt:"sign-logo"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"select"},[n("label",{attrs:{for:"audioOutput"}},[t._v("Audio output destination: ")]),n("select",{staticClass:"custom-select",attrs:{id:"audioOutput"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"animat-block"},[o("div",{staticClass:"bg_circle"},[o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div"),t._v(" "),o("div")]),t._v(" "),o("div",{staticClass:"cross"}),t._v(" "),o("div",{staticClass:"cross1"}),t._v(" "),o("div",{staticClass:"cross2"}),t._v(" "),o("div",{staticClass:"dot"}),t._v(" "),o("div",{staticClass:"dot1"}),t._v(" "),o("div",{staticClass:"top-circle"}),t._v(" "),o("div",{staticClass:"center-circle"}),t._v(" "),o("div",{staticClass:"bottom-circle1"}),t._v(" "),o("div",{staticClass:"right-circle"}),t._v(" "),o("div",{staticClass:"right-circle1"}),t._v(" "),o("div",{staticClass:"quarterCircle"}),t._v(" "),o("img",{staticClass:"cloud-logo",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo1",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo2",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo3",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo4",attrs:{src:n(362),alt:"login logo"}}),o("img",{staticClass:"cloud-logo5",attrs:{src:n(362),alt:"login logo"}})])}],r=n(0),d=n(32),l=n(33),h=(n(85),n(552),n(1),n(49),n(553),n(554),n(555),n(556),n(557),n(558),n(559),n(560),n(561),n(562),n(563),n(564),n(565),n(53),n(11),n(24),n(18),n(173),n(130),n(35),n(21),n(3),n(16),n(5),n(4),n(2),n(6),n(7),n(174)),v=n.n(h),m=n(82),f=n(495),_=n(493),C=n(59),S=n(494),y=n(9),O=n(404),j=n(516),x=n(566),w=n.n(x),M=(n(567),n(569));function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}y.default.use(O.a),v.a.defaults.headers.post["Content-Type"]="application/json";var V=["ache","cough","head","snot","neck","chest","stomach","digest","sweat","strange","swell","cold","dizzy","itchy"],L="https://i6e206.p.ssafy.io",N="Z5YF9UcUB9",$={name:"App",components:{UserVideo:_.default,CreateRoom:S.default,SignCard:j.default,HorizontalScroll:w.a},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],userAudioSource:void 0,userVideoSource:void 0,videoMute:!0,audioMute:!0,sttOff:!0,mySessionId:"",myUserName:"",message:"",chatSeq:0,chatList:[],patientList:[],patientName:"환자를 선택해주세요.",id:"",mydoctor:"",state:{model:null,preview:"",predictions:[]},signMap:new Map,cardList:[]}},methods:(o={cropToCanvas:function(image,canvas,t){t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="#000000",t.fillRect(0,0,canvas.width,canvas.height),t.drawImage(image,0,0,640,640)},joinSession:function(){var t=this;this.signMap.set("ache","아파요"),this.signMap.set("cough","기침"),this.signMap.set("head","머리"),this.signMap.set("snot","콧물"),this.signMap.set("neck","목"),this.signMap.set("chest","가슴"),this.signMap.set("stomach","배"),this.signMap.set("digest","소화"),this.signMap.set("sweat","땀"),this.signMap.set("strange","이상해요"),this.signMap.set("swell","부었어요"),this.signMap.set("cold","춥다"),this.signMap.set("dizzy","어지러워요"),this.signMap.set("itchy","가려워요"),this.OV=new f.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(e){var n=e.stream,o=t.session.subscribe(n);t.subscribers.push(o);var c=o.stream.connection.data.split(":"),r=c[1].slice(1,c[1].length-2);t.setRomoteName(r)})),this.session.on("streamDestroyed",(function(e){var n=e.stream,o=t.subscribers.indexOf(n.streamManager,0);o>=0&&t.subscribers.splice(o,1)})),this.session.on("exception",(function(t){var e=t.exception;console.warn(e)})),this.session.on("signal:my-chat",(function(e){t.chatSeq=t.chatSeq+1;var n={chatSeq:t.chatSeq,timeStamp:Date.now(),date:new Date,creationTime:e.from.creationTime,user:e.from.data,message:e.data};t.chatList.push(n);var o=e.from.data.split(":"),c=o[1].slice(1,o[1].length-2);t.myUserName==c||t.$store.dispatch("chat/addChat",{sender:1,msg:e.data})}));var e=this;this.getToken("sessionA").then((function(n){t.session.connect(n,{clientData:t.myUserName}).then((function(){var t=void 0;navigator.mediaDevices.getUserMedia({audio:!0,video:{width:640,height:640}}).then((function(n){var o=n.getVideoTracks()[0],video=document.createElement("video");video.srcObject=new MediaStream([o]);var canvas=document.getElementById("canvas");canvas.width=320,canvas.height=320;var c=canvas.getContext("2d");video.onloadedmetadata=function(n){video.addEventListener("play",(function(){!function n(){if(!video.paused&&!video.ended){e.cropToCanvas(video,canvas,c),M.c().startScope();var input=M.f((function(){return M.d.resizeBilinear(M.a.fromPixels(video),[640,640]).div(255).expandDims(0)}));e.state.model.executeAsync(input).then((function(n){var o="16px sans-serif";c.font=o,c.textBaseline="top";var i,r=Object(l.a)(n,4),d=r[0],h=r[1],v=r[2],m=r[3],f=d.dataSync(),_=h.dataSync(),C=v.dataSync(),S=m.dataSync()[0];for(M.b(n),i=0;i<S;++i){if((P=_[i].toFixed(2))>.9){var y=f.slice(4*i,4*(i+1)),O=Object(l.a)(y,4),j=O[0],x=O[1],w=O[2],D=O[3];j*=canvas.width,w*=canvas.width,x*=canvas.height;var k=w-j,L=(D*=canvas.height)-x,N=V[C[i]],$=_[i].toFixed(2);c.strokeStyle="#00FFFF",c.lineWidth=4,c.strokeRect(j,x,k,L),c.fillStyle="#00FFFF";var E=c.measureText(N+":"+$).width,A=parseInt(o,10);c.fillRect(j,x,E+4,A+4)}}for(i=0;i<S;++i){var P;if((P=_[i].toFixed(2))>.9){var T=f.slice(4*i,4*(i+1)),I=Object(l.a)(T,3),U=I[0],R=I[1];U*=canvas.width,R*=canvas.height;var z=V[C[i]];t!=z&&(t=z,console.log(z),console.log(e.signMap.get(z)),e.cardList.push({name:z,index:e.cardList.length}),console.log(e.cardList)),c.fillStyle="#000000",c.fillText(z+":"+P,U,R)}}})),c.drawImage(video,0,0,320,320),setTimeout(n,1e3/30),M.c().endScope()}}()})),video.msHorizontalMirror=!0,video.play();var o=canvas.captureStream(30).getVideoTracks()[0],r=e.OV.initPublisher(void 0,{audioSource:this.userAudioSource,videoSource:o,publishAudio:!0,publishVideo:!0,resolution:"320x320",frameRate:30,insertMode:"APPEND",mirror:!1});e.mainStreamManager=r,e.publisher=r,e.session.publish(e.publisher)}})).catch((function(t){console.log(t.name+": "+t.message)}))})).catch((function(t){console.log("There was an error connecting to the session:",t.code,t.message)})).finally((function(){}))})),window.addEventListener("beforeunload",this.leaveSession)},joinSessionNoTensor:function(){var t=this;this.OV=new f.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(e){var n=e.stream,o=t.session.subscribe(n);t.subscribers.push(o);var c=o.stream.connection.data.split(":"),r=c[1].slice(1,c[1].length-2);t.setRomoteName(r)})),this.session.on("streamDestroyed",(function(e){var n=e.stream,o=t.subscribers.indexOf(n.streamManager,0);o>=0&&t.subscribers.splice(o,1)})),this.session.on("exception",(function(t){var e=t.exception;console.warn(e)})),this.session.on("signal:my-chat",(function(e){t.chatSeq=t.chatSeq+1;var n={chatSeq:t.chatSeq,timeStamp:Date.now(),date:new Date,creationTime:e.from.creationTime,user:e.from.data,message:e.data};t.chatList.push(n)})),this.getToken("sessionA").then((function(e){t.session.connect(e,{clientData:t.myUserName}).then((function(){var e=t.OV.initPublisher(void 0,{audioSource:t.userAudioSource,videoSource:t.userVideoSource,publishAudio:!0,publishVideo:!0,resolution:"320x320",frameRate:30,insertMode:"APPEND",mirror:!1});t.mainStreamManager=e,t.publisher=e,t.session.publish(t.publisher)})).catch((function(t){console.log("There was an error connecting to the session:",t.code,t.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)}},Object(r.a)(o,"leaveSession",(function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession),navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(),this.addSessionOff()})),Object(r.a)(o,"updateMainVideoStreamManager",(function(t){this.mainStreamManager!==t&&(this.mainStreamManager=t)})),Object(r.a)(o,"getToken",(function(t){var e=this;return this.createSession(t).then((function(t){return e.createToken(t)}))})),Object(r.a)(o,"createSession",(function(t){return new Promise((function(e,n){v.a.post("".concat(L,"/openvidu/api/sessions"),JSON.stringify({customSessionId:t}),{auth:{username:"OPENVIDUAPP",password:N}}).then((function(t){return t.data})).then((function(data){return e(data.id)})).catch((function(o){409===o.response.status?e(t):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(L)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(L,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(L,'"'))&&location.assign("".concat(L,"/accept-certificate")),n(o.response))}))}))})),Object(r.a)(o,"createToken",(function(t){return new Promise((function(e,n){v.a.post("".concat(L,"/openvidu/api/sessions/").concat(t,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:N}}).then((function(t){return t.data})).then((function(data){return e(data.token)})).catch((function(t){return n(t.response)}))}))})),Object(r.a)(o,"videoOn",(function(){this.videoMute=!1,this.publisher.publishVideo(this.videoMute)})),Object(r.a)(o,"videoOff",(function(){this.videoMute=!0,this.publisher.publishVideo(this.videoMute)})),Object(r.a)(o,"audioOn",(function(){this.audioMute=!1,this.publisher.publishAudio(this.audioMute)})),Object(r.a)(o,"audioOff",(function(){this.audioMute=!0,this.publisher.publishAudio(this.audioMute)})),Object(r.a)(o,"audioController",(function(){this.audioMute=!this.audioMute,this.publisher.publishAudio(this.audioMute)})),Object(r.a)(o,"sendChat",(function(t){""!=t&&this.session.signal({data:t,to:[],type:"my-chat"}).then((function(){console.log("Message successfully sent")})).catch((function(t){console.error(t)}))})),Object(r.a)(o,"sendChatTest",(function(){var t=this;""!=this.message&&this.session.signal({data:this.message,to:[],type:"my-chat"}).then((function(){t.message="",console.log("Message successfully sent")})).catch((function(t){console.error(t)}))})),Object(r.a)(o,"sendSign",(function(){var t="",e=this;this.cardList.forEach((function(element){t+=e.signMap.get(element.name)+" "})),""!=t&&(this.sendChat(t),this.addChat(t)),this.cardList=[]})),Object(r.a)(o,"addVideoCss",(function(){document.querySelectorAll("video").forEach((function(element){return element.style.borderRadius="20px",element.style.width="320px",element.style.height="320px"}))})),Object(r.a)(o,"addSessionOn",(function(){this.$store.commit("chat/addSession",!0)})),Object(r.a)(o,"addSessionOff",(function(){this.$store.commit("chat/addSession",!1)})),Object(r.a)(o,"setActiveUser",(function(){this.$store.commit("chat/setActiveuser",0)})),Object(r.a)(o,"setLocalName",(function(t){this.$store.commit("chat/setLocalName",t)})),Object(r.a)(o,"setRomoteName",(function(t){this.$store.commit("chat/setRemoteName",t)})),Object(r.a)(o,"gotDevices",(function(t){var e=document.querySelector("select#audioSource"),n=document.querySelector("select#audioOutput"),o=document.querySelector("select#videoSource"),c=[e,n,o],r=c.map((function(select){return select.value}));c.forEach((function(select){for(;select.firstChild;)select.removeChild(select.firstChild)}));for(var i=0;i!==t.length;++i){var d=t[i],option=document.createElement("option");option.value=d.deviceId,"audioinput"===d.kind?(option.text=d.label||"microphone ".concat(e.length+1),e.appendChild(option)):"audiooutput"===d.kind?(option.text=d.label||"speaker ".concat(n.length+1),n.appendChild(option)):"videoinput"===d.kind?(option.text=d.label||"camera ".concat(o.length+1),o.appendChild(option)):console.log("Some other kind of source/device: ",d)}c.forEach((function(select,t){Array.prototype.slice.call(select.childNodes).some((function(e){return e.value===r[t]}))&&(select.value=r[t])}))})),Object(r.a)(o,"onChange",(function(t){if(console.log(t.target.value),this.$data.mySessionId="","Choose..."!=t.target.value){navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(),this.$data.patientName=this.$data.patientList[t.target.value].name,this.$data.id=this.$data.patientList[t.target.value].id;this.$data.mySessionId=this.$data.patientList[t.target.value].userId}})),Object(r.a)(o,"asyncfunction",(function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isDoctorGetters){e.next=4;break}t.joinSessionNoTensor(),e.next=7;break;case 4:return e.next=6,M.e("https://ssafy6webmodel.s3.ap-northeast-2.amazonaws.com/web_model2/model.json").then((function(e){t.state.model=e}));case 6:t.joinSession();case 7:t.addVideoCss(),t.addSessionOn(),t.setLocalName(t.myUserName);case 10:case"end":return e.stop()}}),e)})))()})),Object(r.a)(o,"addChat",(function(t){""!=t&&this.$store.dispatch("chat/addChat",{sender:0,msg:t})})),o),computed:k(k({},Object(C.b)({addNewChat:function(t){return t.chat.newChat.text},chatVideoOn:function(t){return t.chat.cameraState},chatMicOn:function(t){return t.chat.micState},chatSession:function(t){return t.chat.leaveSession},chatRoomCreated:function(t){return t.chat.session}})),{},{isDoctorGetters:function(){return this.$store.getters["login/isDoctor"]}}),watch:{addNewChat:function(){this.sendChat(this.addNewChat),console.log("new chatting")},chatVideoOn:function(){this.chatVideoOn?this.videoOff():this.videoOn()},chatSession:function(){this.leaveSession()},chatMicOn:function(){this.chatMicOn?this.audioOff():this.audioOn()}},mounted:function(){var t=this;console.log("Parent mounted"),console.log(navigator),navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(),this.isDoctorGetters?(this.myUserName=this.$store.state.login.login.userName+" 의사",this.$data.patientList=[],this.$data.mydoctor=this.$store.state.login.login.userName,m.default.post("/room/doctor",{userId:this.$store.state.login.login.userId}).then((function(e){var data=e.data;console.log(data);for(var i=0;i<data.confirmList.length;i++){var b={id:data.confirmList[i].id,name:data.confirmList[i].user.name,date:data.confirmList[i].reservedDt,email:data.confirmList[i].user.email,img:"",userId:data.confirmList[i].user.userId};t.$data.patientList.push(b)}console.log(t.$data.patientList),navigator.mediaDevices.enumerateDevices().then(t.gotDevices).catch()})).catch((function(e){console.log("PatientListCameraVue: error : "),t.$alertify.error("서버에러 발생.")}))):(this.$data.mySessionId=this.$store.state.login.sessionId,this.$data.mydoctor=this.$store.state.login.mydoctor,this.myUserName=this.$store.state.login.login.userName+" 환자")}},E=(n(798),n(58)),component=Object(E.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"main-container"}},[t.session?t._e():o("div",{staticStyle:{height:"100%",width:"100%",display:"flex","justify-content":"center"},attrs:{id:"join"}},[o("div",{staticClass:"hov-anim-box",staticStyle:{width:"100%",height:"100%",display:"table-cell","vertical-align":"middle"}},[o("div",{staticClass:"login-page2 animat-rate"},[o("div",{staticClass:"login-content-main"},[o("div",{staticClass:"login-content"},[t._m(0),t._v(" "),t.isDoctorGetters?o("h3",{staticClass:"mt-3"},[t._v("\n              예약 환자를 선택해주세요.\n            ")]):t._e(),t._v(" "),t.isDoctorGetters?o("select",{staticClass:"custom-select",attrs:{id:"gender2"},on:{change:function(e){return t.onChange(e)}}},[o("option",{attrs:{selected:""}},[t._v("Choose...")]),t._v(" "),t._l(t.patientList,(function(e,n){return o("option",{key:n,domProps:{value:n}},[t._v("\n                "+t._s(e.name+"        "+e.date)+"\n              ")])}))],2):t._e(),t._v(" "),o("div",{staticClass:"select"},[o("label",{attrs:{for:"audioSource"}},[t._v("Audio input source: ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.userAudioSource,expression:"userAudioSource"}],staticClass:"custom-select",attrs:{id:"audioSource"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.userAudioSource=e.target.multiple?n:n[0]}}})]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"select"},[o("label",{attrs:{for:"videoSource"}},[t._v("Video source: ")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.userVideoSource,expression:"userVideoSource"}],staticClass:"custom-select",attrs:{id:"videoSource"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.userVideoSource=e.target.multiple?n:n[0]}}})]),t._v(" "),o("div",{staticClass:"card mt-4"},[o("div",{staticClass:"card-header"},[t.isDoctorGetters?o("h5",[t._v(t._s(t.patientName))]):t._e(),t._v(" "),t.isDoctorGetters?t._e():o("h5",[t._v("\n                  담당의사 : "+t._s(t.mydoctor)+" 의사님\n                ")])]),t._v(" "),t.isDoctorGetters?o("img",{staticStyle:{height:"300px"},attrs:{src:n(410),alt:""}}):t._e(),t._v(" "),t.isDoctorGetters?t._e():o("img",{staticStyle:{height:"300px"},attrs:{src:n(500),alt:""}}),t._v(" "),o("div",{staticClass:"card-body"},[o("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.asyncfunction()}}},[t._v("\n                  진료실 입장\n                ")])])])])]),t._v(" "),t._m(2)])])]),t._v(" "),t.session?o("div",{attrs:{id:"session"}},[o("div",{attrs:{id:"session-header"}},[o("h1",{attrs:{id:"session-title"}},[t._v("\n        "+t._s(t.mydoctor)+" "),o("span",{staticStyle:{"font-size":"30px"}},[t._v(" 의사님의 진료실 ")])]),t._v(" "),o("input",{staticClass:"ssbtn",attrs:{type:"button",id:"ssbtn"},on:{click:t.sendSign}})]),t._v(" "),1==this.isDoctorGetters?o("div",[o("div",{staticClass:"col-md-6",attrs:{id:"main-video"}},[o("user-video",{attrs:{"stream-manager":t.mainStreamManager}})],1)]):o("div",[o("canvas",{attrs:{id:"canvas"}})]),t._v(" "),o("div",{staticStyle:{display:"flex"}},[o("div",{staticClass:"col-md-4",attrs:{id:"video-container"}},t._l(t.subscribers,(function(sub){return o("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(e){return t.updateMainVideoStreamManager(sub)}}})})),1)]),t._v(" "),o("div",{staticClass:"row"},[o("horizontal-scroll",t._l(t.cardList,(function(e,i){return o("sign-card",{key:e.index,attrs:{imageUrl:e.name,cardList:t.cardList,index:i}})})),1)],1)]):t._e()])}),c,!1,null,null,null);e.default=component.exports}}]);