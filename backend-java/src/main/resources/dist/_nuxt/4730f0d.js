(window.webpackJsonp=window.webpackJsonp||[]).push([[6,33,36,37,38,39,72,76],{1063:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"page-decore"},[r("li",{staticClass:"top"},[r("img",{staticClass:"img-fluid inner2",attrs:{src:n(340),alt:"footer-back-img"}})]),t._v(" "),r("li",{staticClass:"bottom"},[r("img",{staticClass:"img-fluid inner2",attrs:{src:n(340),alt:"footer-back-img"}})])])}],o=n(778),c=n(507),l=n(537),d=n(626),m={components:{AboutPage:o.default,Testimonial:c.default,SecureApp:l.default,Counter:d.default}},v=n(57),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("AboutPage"),t._v(" "),n("section",{staticClass:"section-py-space"},[n("Testimonial")],1),t._v(" "),n("SecureApp"),t._v(" "),n("Counter")],1)}),r,!1,null,null,null);e.default=component.exports},340:function(t,e,n){t.exports=n.p+"img/2.a54c787.png"},395:function(t,e,n){"use strict";n.r(e);var r={name:"OvVideo",components:{},props:{streamManager:Object,test:Boolean},mounted:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)},updated:function(){this.streamManager.stream&&this.streamManager.addVideoElement(this.$refs.video)}},o=n(57),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("video",{ref:"video",attrs:{id:"video",autoplay:""}})])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){t.exports=n.p+"img/1.a54c787.png"},406:function(t,e,n){"use strict";n.r(e);var r={name:"UserVideo",components:{OvVideo:n(395).default},props:{streamManager:Object},computed:{clientData:function(){var t=this.getConnectionData().clientData;return t}},methods:{getConnectionData:function(){var t=this.streamManager.stream.connection;return JSON.parse(t.data)}}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.streamManager?n("div",[n("ov-video",{attrs:{"stream-manager":t.streamManager,test:!0}}),t._v(" "),n("div",[n("p",[t._v(t._s(t.clientData))])])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},438:function(t,e,n){t.exports=n.p+"img/1.8b458a4.jpg"},439:function(t,e,n){t.exports=n.p+"img/icon1.5a0d3be.png"},440:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAACFklEQVR42qyUPWhVQRCFZzYRUmlAhTRJoYUWFioWaaxiBGMlVkIK09lbmkZEJGhvpYWIpY1g8UAMmARMmoBIFAwWamUViSa8mBm//bv3Kti95c3bmT27s2fO7l51dxlECzKgNnz8yYZoCKI6lPvGhtgm/IvdxC7i7NO/UA0P1y+MyJnXe9PDEktzfyZid3Hfi6vkMROtvlgQl2V3nYyxSlpzydWvnH612yfhp4BGo9g1bAXwXExQkvMzwtj7PDaZMfPSoj8NeJkZ4+xkfTHbZ+Ag4Bp2hwSH00TLzLCrnhI3CaTuQNumX42MfmH3PIORyTy26WaPGZsFO4uFv5k2RpW+sj41shA1Ogr6lv4DwMm0wPSQBp9jbC4n0L1EJWGC1tomFd9Jp0bQJ3hOv6VxciwnWNbYVYvwBxC+YFm7eihM2Ez3iLVbDNzHjkSqlXZJ0AhDqVn8FlNJsfUqI5LbrXii7DnL2Hg+3c41sLhlG7eYb5OtVxnVwSX83y2jIq5VYU06mGa9/Pa7mVFvGCUGiEZdx3KQK0qTRdqLWbQpV+MbWj7ovLVGk0VsAn8B2/gfG69s3Kek8+Cb0srEL/w9YuLPuKBTdi1H0X8HOw/+sfvliKWdILyuGp+Hn+KMx4T7p/mNabkGVa+eBrtB/LkptUkk/p3+a6QKpzFuTh9/N+/mMeEPFrzBfUr0sqtVtzQd1IftjwADAIccNLR1QRtfAAAAAElFTkSuQmCC"},441:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABYUlEQVR42qxTPUsDQRCd2buYQi20ECQgpLCzUDEpbLQI8U8EOyGkt7OwTyXClf4DQUHwA2NnYTo7f4CtVQQL3R3f3l7MGXKbS8guc7Mss4/33syxiJBvHbS6FWZ1itgm5nlcfdyeb5WH60IfSL35vMMcdAFAgs3YWIujar1AIiayICQOwnIHs96oWpUFUjt6WiYxFQTZgAUP+GwiNiZiBDZLRI4NxaL47C6qvmbVZ0sz5p2UA7LuQNOXzwYe7tr+4fU6qyCAySVW4SPOwECo4Bj5hnC+j6pvYxlB0gtYJLLMnzTkNnIbEr9xMTdempiFwWMNicj/JRZyeQRGGo8KA6O1y/EI9O/ymC1mVxzQKh5dpSSe4IwRYJ3L7P7aa1wqGKwTo6EorHUu6p2J2w+JaymjrcQVX/uz5yie5jQQ01RAYATdMwCaHSMSxbZbAEgAi9My+kE/e/EP64A+fUC/AgwAOouMEDrAhA0AAAAASUVORK5CYII="},442:function(t,e,n){t.exports=n.p+"img/6.e433226.png"},443:function(t,e,n){t.exports=n.p+"img/1.dd01d4d.png"},444:function(t,e,n){t.exports=n.p+"img/2.54f6e16.png"},445:function(t,e,n){t.exports=n.p+"img/3.8b66f50.png"},446:function(t,e,n){t.exports=n.p+"img/4.ab67fea.png"},507:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"test-icon"},[r("li",[r("a",{attrs:{href:"https://www.google.com/"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(439),alt:"icon-google"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(440),alt:"icon-google"}})])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.facebook.com/"}},[r("img",{staticClass:"img-fluid",attrs:{src:n(441),alt:"icon-google"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"testimonial-back-content"},[e("img",{staticClass:"img-fluid test-img2",attrs:{src:n(442),alt:"testimonial"}})])}],o={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:20},600:{slidesPerView:2,spaceBetween:0},1070:{slidesPerView:3,spaceBetween:20},1600:{slidesPerView:4}}},testimonial:[{img:n(443),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(444),heart:!1,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(445),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},{img:n(446),heart:!0,manager:"project manager",equipment:"Advanced Equipment",desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}]}}},c=n(57),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-container testimonial-main"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.testimonial,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"testimonial-box mt-0"},[n("div",{staticClass:"test-img"},[n("img",{staticClass:"img-fluid",attrs:{src:e.img,alt:"test-img"}}),e.heart?n("i",{staticClass:"test-wish fa fa-heart"}):t._e()]),t._v(" "),n("div",{staticClass:"test-contain"},[n("h4",[t._v(t._s(e.manager))]),t._v(" "),n("h3",[t._v(t._s(e.equipment))]),t._v(" "),n("h6",[t._v(t._s(e.desc))]),t._v(" "),t._m(0,!0)])])])])})),0),t._v(" "),n("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),t._v(" "),n("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})])])])]),t._v(" "),t._m(1)])}),r,!1,null,null,null);e.default=component.exports},537:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ply-main"},[n("div",{staticClass:"ply-content"},[n("i",{staticClass:"ti-shield"})]),t._v(" "),n("h3",[t._v("Secure Your "),n("span",[t._v("Messages")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h4",[n("span",[t._v("Desktop App ")]),t._v("– Easy to use our chat app, Attractive\n              and clean design, with many Features :- Dark & light, Recent\n              Chat And many more.......\n            ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"secure-back-content"},[e("img",{staticClass:"img-fluid secure-img1",attrs:{src:n(401),alt:"parellex-img1"}}),e("img",{staticClass:"img-fluid secure-img2",attrs:{src:n(401),alt:"parellex-img1"}})])}],o=n(57),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section-pb-space secure-app-main"},[n("div",{staticClass:"custom-container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-5 offset-lg-7 col-lg-5 offset-lg-2"},[n("div",{staticClass:"secure-app-content"},[n("div",[t._m(0),t._v(" "),n("h1",[t._v("The world's top secure App")]),t._v(" "),t._m(1),t._v(" "),n("nuxt-link",{attrs:{to:"/messenger/messenger"}},[n("a",{staticClass:"btn pricing-btn"},[t._v("learn more")])])],1)])])])]),t._v(" "),t._m(2)])}),r,!1,null,null,null);e.default=component.exports},585:function(t,e){},586:function(t,e){},598:function(t,e){},617:function(t,e){},618:function(t,e){},619:function(t,e){},620:function(t,e){},621:function(t,e){},625:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(34),c=(n(176),n(18),n(136),n(36),n(22),n(1),n(89),n(399)),l=n.n(c),d=n(426),m=n(406),v=n(623),f=["ache","cough","head","snot"];l.a.defaults.headers.post["Content-Type"]="application/json";var h="https://i6e206.p.ssafy.io",w="Z5YF9UcUB9",_={name:"App",components:{UserVideo:m.default},data:function(){return{OV:void 0,session:void 0,mainStreamManager:void 0,publisher:void 0,subscribers:[],mySessionId:"SessionA",myUserName:"Participant"+Math.floor(100*Math.random()),state:{model:null,preview:"",predictions:[]}}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.e("/web_model/model.json").then((function(e){t.state.model=e,e.save("indexeddb://sign-doctor"),e.save("downloads://sign-doctor")}));case 2:case"end":return e.stop()}}),e)})))()},methods:{cropToCanvas:function(image,canvas,t){t.clearRect(0,0,t.canvas.width,t.canvas.height),t.fillStyle="#000000",t.fillRect(0,0,canvas.width,canvas.height),t.drawImage(image,0,0,640,640)},joinSession:function(){var t=this;this.OV=new d.OpenVidu,this.session=this.OV.initSession(),this.session.on("streamCreated",(function(e){var n=e.stream,r=t.session.subscribe(n);t.subscribers.push(r)})),this.session.on("streamDestroyed",(function(e){var n=e.stream,r=t.subscribers.indexOf(n.streamManager,0);r>=0&&t.subscribers.splice(r,1)})),this.session.on("exception",(function(t){var e=t.exception;console.warn(e)}));var e=this;this.getToken(this.mySessionId).then((function(n){t.session.connect(n,{clientData:t.myUserName}).then((function(){navigator.mediaDevices.getUserMedia({audio:!0,video:{width:640,height:640}}).then((function(t){var n=t.getVideoTracks()[0],video=document.createElement("video");video.srcObject=new MediaStream([n]);var canvas=document.getElementById("canvas");canvas.width=640,canvas.height=640;var o=canvas.getContext("2d");video.onloadedmetadata=function(t){video.addEventListener("play",(function(){!function t(){if(!video.paused&&!video.ended){e.cropToCanvas(video,canvas,o),v.c().startScope();var input=v.f((function(){return v.d.resizeBilinear(v.a.fromPixels(video),[640,640]).div(255).expandDims(0)}));e.state.model.executeAsync(input).then((function(t){var e="16px sans-serif";o.font=e,o.textBaseline="top";var i,n=Object(r.a)(t,4),c=n[0],l=n[1],d=n[2],m=n[3],h=c.dataSync(),w=l.dataSync(),_=d.dataSync(),C=m.dataSync()[0];for(v.b(t),i=0;i<C;++i){var y=h.slice(4*i,4*(i+1)),A=Object(r.a)(y,4),x=A[0],S=A[1],E=A[2],O=A[3];x*=canvas.width,E*=canvas.width,S*=canvas.height;var V=E-x,k=(O*=canvas.height)-S,M=f[_[i]],I=w[i].toFixed(2);o.strokeStyle="#00FFFF",o.lineWidth=4,o.strokeRect(x,S,V,k),o.fillStyle="#00FFFF";var j=o.measureText(M+":"+I).width,P=parseInt(e,10);o.fillRect(x,S,j+4,P+4)}for(i=0;i<C;++i){var U=h.slice(4*i,4*(i+1)),T=Object(r.a)(U,3),L=T[0],N=T[1];L*=canvas.width,N*=canvas.height;var B=f[_[i]],F=w[i].toFixed(2);o.fillStyle="#000000",o.fillText(B+":"+F,L,N)}})),o.drawImage(video,0,0,640,640),setTimeout(t,1e3/30),v.c().endScope()}}()})),video.msHorizontalMirror=!0,video.play();var n=canvas.captureStream(30).getVideoTracks()[0];canvas.addEventListener("webglcontextlost",(function(t){console.log("tttttttttttttttttttttttttttttttttttttttttttttttt")}),!1);var c=e.OV.initPublisher(void 0,{audioSource:!1,videoSource:n});e.publisher=c,e.session.publish(e.publisher)}})).catch((function(t){console.log(t.name+": "+t.message)})),t.session.publish(t.publisher)})).catch((function(t){console.log("There was an error connecting to the session:",t.code,t.message)}))})),window.addEventListener("beforeunload",this.leaveSession)},leaveSession:function(){this.session&&this.session.disconnect(),this.session=void 0,this.mainStreamManager=void 0,this.publisher=void 0,this.subscribers=[],this.OV=void 0,window.removeEventListener("beforeunload",this.leaveSession)},updateMainVideoStreamManager:function(t){this.mainStreamManager!==t&&(this.mainStreamManager=t)},getToken:function(t){var e=this;return this.createSession(t).then((function(t){return e.createToken(t)}))},createSession:function(t){return new Promise((function(e,n){l.a.post("".concat(h,"/openvidu/api/sessions"),JSON.stringify({customSessionId:t}),{auth:{username:"OPENVIDUAPP",password:w}}).then((function(t){return t.data})).then((function(data){return e(data.id)})).catch((function(r){409===r.response.status?e(t):(console.warn("No connection to OpenVidu Server. This may be a certificate error at ".concat(h)),window.confirm("No connection to OpenVidu Server. This may be a certificate error at ".concat(h,'\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "').concat(h,'"'))&&location.assign("".concat(h,"/accept-certificate")),n(r.response))}))}))},createToken:function(t){return new Promise((function(e,n){l.a.post("".concat(h,"/openvidu/api/sessions/").concat(t,"/connection"),{},{auth:{username:"OPENVIDUAPP",password:w}}).then((function(t){return t.data})).then((function(data){return e(data.token)})).catch((function(t){return n(t.response)}))}))}}},C=n(57),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"main-container"}},[t.session?t._e():n("div",{attrs:{id:"join"}},[t._m(0),t._v(" "),n("div",{staticClass:"jumbotron vertical-center",attrs:{id:"join-dialog"}},[n("h1",[t._v("Join a video session")]),t._v(" "),n("div",{staticClass:"form-group"},[n("p",[n("label",[t._v("Participant")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.myUserName,expression:"myUserName"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.myUserName},on:{input:function(e){e.target.composing||(t.myUserName=e.target.value)}}})]),t._v(" "),n("p",[n("label",[t._v("Session")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.mySessionId,expression:"mySessionId"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.mySessionId},on:{input:function(e){e.target.composing||(t.mySessionId=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-lg btn-success",on:{click:function(e){return t.joinSession()}}},[t._v("\n            Join!\n          ")])])])])]),t._v(" "),t.session?n("div",{attrs:{id:"session"}},[n("div",{attrs:{id:"session-header"}},[n("h1",{attrs:{id:"session-title"}},[t._v(t._s(t.mySessionId))]),t._v(" "),n("input",{staticClass:"btn btn-large btn-danger",attrs:{type:"button",id:"buttonLeaveSession",value:"Leave session"},on:{click:t.leaveSession}})]),t._v(" "),n("div",{staticClass:"col-md-6",attrs:{id:"video-container"}},t._l(t.subscribers,(function(sub){return n("user-video",{key:sub.stream.connection.connectionId,attrs:{"stream-manager":sub},nativeOn:{click:function(e){return t.updateMainVideoStreamManager(sub)}}})})),1),t._v(" "),t._m(1)]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"img-div"}},[e("img",{attrs:{src:"resources/images/openvidu_grey_bg_transp_cropped.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"canvas"}})])}],!1,null,null,null);e.default=component.exports},626:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{swiperOption:{loop:!0,autoplay:{delay:2e3},breakpoints:{481:{slidesPerView:2},576:{slidesPerView:3},992:{slidesPerView:4}}},counterdata:[{tag:"counter-icon fa fa-user-o",count:80,desc:"Happy Clients"},{tag:"counter-icon fa fa-square-o",count:120,desc:"Project Completed"},{tag:"counter-icon fa fa-heart-o",count:90,desc:"Photo Capture"},{tag:"counter-icon fa fa-comments-o",count:140,desc:"Telephonic Talk"}]}}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"counter-sec section-py-space counter-main"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"pt-0 counter-slider"},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[n("div",{staticClass:"swiper-wrapper"},t._l(t.counterdata,(function(e,r){return n("div",{key:r,staticClass:"swiper-slide"},[n("div",{staticClass:"item"},[n("div",{staticClass:"counter-box-second"},[n("div",{staticClass:"counter-box"},[n("div",[n("i",{class:e.tag}),t._v(" "),n("h6",{staticClass:"counter-no count"},[t._v(t._s(e.count))]),t._v(" "),n("span",[t._v(t._s(e.desc)+" ")])])])])])])})),0)])])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"counter-title"},[n("h4",{staticClass:"title-line"},[t._v("Counters")])])}],!1,null,null,null);e.default=component.exports},778:function(t,e,n){"use strict";n.r(e);var r={name:"about-page",components:{Camera:n(625).default}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"about-page section-py-space"},[r("div",{staticClass:"custom-container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-8 offset-sm-2 text-center"},[r("Camera"),t._v(" "),r("img",{staticClass:"img-fluid w-100 pb-4",attrs:{src:n(438),alt:"about"}}),t._v(" "),t._m(0)],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-10 offset-md-1"},[n("p",[t._v("\n              On the other hand, we denounce with righteous indignation and\n              dislike men who are so beguiled and demoralized by the charms of\n              pleasure of the moment, so blinded by desire, that they cannot\n              foresee the pain and trouble that are bound to ensue; and equal\n              blame belongs to those who fail in their duty through weakness\n              of will, which is the same as saying through shrinking from toil\n              and pain. These cases are perfectly simple and easy to\n              distinguish.\n            ")])])])}],!1,null,null,null);e.default=component.exports}}]);