(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{482:function(t,e,o){"use strict";o.r(e);o(5),o(4),o(2),o(1),o(6),o(3),o(7);var r=o(0),n=o(61);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.c)({showprofilemenu:function(t){return t.common.showprofilemenu}})),methods:{toggle:function(){this.$store.state.common.showprofilemenu=!this.$store.state.common.showprofilemenu},openprofile:function(){document.querySelector(".chitchat-main").classList.add("small-sidebar"),document.getElementById("body").classList.contains("menu-active")?(document.body.classList.remove("menu-active"),document.querySelector(".app-sidebar").classList.add("active")):(document.body.classList.add("menu-active"),document.querySelector(".app-sidebar").classList.remove("active"))}}},f=l,d=o(60),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("b-dropdown",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottomleft",modifiers:{hover:!0,bottomleft:!0}}],attrs:{title:"Quick action",size:"lg",variant:"link","toggle-class":"text-decoration-none","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("feather",{attrs:{type:"more-vertical",size:"15",height:"15"}})]},proxy:!0}])},[t._v(" "),o("b-dropdown-item",{attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.openprofile()}}},[o("a",{staticClass:"icon-btn btn-outline-primary button-effect btn-sm",attrs:{href:"javascript:void(0)"}},[o("feather",{attrs:{type:"user",size:"15",height:"15"}})],1),t._v(" "),o("h5",[t._v("Profile")])]),t._v(" "),o("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[o("a",{staticClass:"icon-btn btn-outline-danger button-effect btn-sm",attrs:{href:"javascript:void(0)"}},[o("feather",{attrs:{type:"trash-2",size:"15",height:"15"}})],1),t._v(" "),o("h5",[t._v("Delete")])]),t._v(" "),o("b-dropdown-item",{attrs:{href:"javascript:void(0)"}},[o("a",{staticClass:"icon-btn btn-outline-light button-effect btn-sm",attrs:{href:"javascript:void(0)"}},[o("feather",{attrs:{type:"slash",size:"15",height:"15"}})],1),t._v(" "),o("h5",[t._v("Block")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);