(window.webpackJsonp=window.webpackJsonp||[]).push([[137,103],{409:function(t,e,o){"use strict";o.r(e);var n={components:{Datepicker:o(509).a},data:function(){return{selected:null}},methods:{selectext:function(t){this.selected=t}}},d=o(60),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"drop-picker"},[o("datepicker",{attrs:{placeholder:"Due date","input-class":"datepicker-here form-control digits"}}),t._v(" "),o("b-dropdown",{attrs:{id:"dropdown-1",text:t.selected?t.selected:"Assign To"}},[o("b-dropdown-item",[o("div",{staticClass:"d-flex"},[o("div",{staticClass:"fa fa-user mr-2"}),t._v(" "),o("h5",{staticClass:"p-0 m-0"},[t._v("Assign To")])])]),t._v(" "),o("b-dropdown-divider"),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.selectext("Josephin john")}}},[t._v("Josephin john")]),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.selectext("Lynetin john")}}},[t._v("Lynetin john")]),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.selectext("Sufiya john")}}},[t._v("Sufiya john")]),t._v(" "),o("b-dropdown-item",{on:{click:function(e){return t.selectext("Jhon john")}}},[t._v("Jhon john")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},485:function(t,e,o){"use strict";o.r(e);var n={components:{UserDropDown:o(409).default},methods:{show:function(){this.$refs.todoModal.show()},hide:function(){this.$refs.todoModal.hide()}}},d=o(60),component=Object(d.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{ref:"todoModal",staticClass:"modal fade",attrs:{"content-class":"add-popup todo-main-modal",id:"todoModal",tabindex:"-1",role:"dialog","aria-hidden":"true","hide-footer":"","hide-header":"","hide-header-close":"",centered:""}},[o("div",{staticClass:"modal-header"},[o("h2",{staticClass:"modal-title"},[t._v("Welcome to Chitchat")]),t._v(" "),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return t.hide()}}},[o("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),o("div",{staticClass:"modal-body"},[o("form",{staticClass:"default-form"},[o("div",{staticClass:"todo-task"},[o("h5",[t._v("Felling Lonely")]),t._v(" "),o("div",{staticClass:"todo-main-content"},[o("div",{staticClass:"form-group"},[o("input",{attrs:{type:"checkbox","aria-label":"Checkbox for following text input"}}),t._v(" "),o("input",{staticClass:"w-100",attrs:{id:"user_input123",type:"text",placeholder:"Fill Your Fillings "}})]),t._v(" "),o("UserDropDown")],1)])])]),t._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-danger button-effect btn-sm",attrs:{type:"button"},on:{click:function(e){return t.hide()}}},[t._v("\n      Save\n    ")]),t._v(" "),o("button",{staticClass:"btn btn-primary button-effect btn-sm",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.hide()}}},[t._v("\n      Cancel\n    ")])])])}),[],!1,null,null,null);e.default=component.exports}}]);