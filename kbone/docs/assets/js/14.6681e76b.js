(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{338:function(o,s,e){},379:function(o,s,e){"use strict";e(338)},396:function(o,s,e){"use strict";e.r(s);var n={data:function(){return{successShow:!1,infoShow:!1,errorShow:!1}},methods:{openSuccess:function(){this.successShow=!0},openinfo:function(){this.infoShow=!0},openerror:function(){this.errorShow=!0}}},t=(e(379),e(42)),c=Object(t.a)(n,(function(){var o=this,s=o.$createElement,e=o._self._c||s;return e("KView",{staticClass:"page progress js_show"},[e("KView",{staticClass:"page__hd"},[e("h1",{staticClass:"page__title"},[o._v("Toptips")]),o._v(" "),e("p",{staticClass:"page__desc"},[o._v("Toptips 布局")])]),o._v(" "),e("KView",{staticClass:"page__bd page__bd_spacing"},[e("KButton",{on:{click:o.openSuccess}},[o._v("Success")]),o._v(" "),e("KButton",{on:{click:o.openinfo}},[o._v("Info")]),o._v(" "),e("KButton",{on:{click:o.openerror}},[o._v("Error")])],1),o._v(" "),e("KToptips",{attrs:{duration:1e3},model:{value:o.successShow,callback:function(s){o.successShow=s},expression:"successShow"}},[o._v("\n        成功\n    ")]),o._v(" "),e("KToptips",{attrs:{type:"info",duration:1e3},model:{value:o.infoShow,callback:function(s){o.infoShow=s},expression:"infoShow"}},[o._v("\n        提示\n    ")]),o._v(" "),e("KToptips",{attrs:{type:"error",duration:1e3},model:{value:o.errorShow,callback:function(s){o.errorShow=s},expression:"errorShow"}},[o._v("\n        错误\n    ")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);