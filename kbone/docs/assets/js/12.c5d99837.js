(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{327:function(o,s,n){},371:function(o,s,n){"use strict";var e=n(327);n.n(e).a},375:function(o,s,n){"use strict";n.r(s);var e={data:function(){return{successShow:!1,infoShow:!1,errorShow:!1}},methods:{openSuccess:function(){this.successShow=!0},openinfo:function(){this.infoShow=!0},openerror:function(){this.errorShow=!0}}},t=(n(371),n(42)),c=Object(t.a)(e,(function(){var o=this,s=o.$createElement,n=o._self._c||s;return n("KView",{staticClass:"page progress js_show"},[n("KView",{staticClass:"page__hd"},[n("h1",{staticClass:"page__title"},[o._v("Toptips")]),o._v(" "),n("p",{staticClass:"page__desc"},[o._v("Toptips 布局")])]),o._v(" "),n("KView",{staticClass:"page__bd page__bd_spacing"},[n("KButton",{on:{click:o.openSuccess}},[o._v("Success")]),o._v(" "),n("KButton",{on:{click:o.openinfo}},[o._v("Info")]),o._v(" "),n("KButton",{on:{click:o.openerror}},[o._v("Error")])],1),o._v(" "),n("KToptips",{attrs:{duration:1e3},model:{value:o.successShow,callback:function(s){o.successShow=s},expression:"successShow"}},[o._v("\n        成功\n    ")]),o._v(" "),n("KToptips",{attrs:{type:"info",duration:1e3},model:{value:o.infoShow,callback:function(s){o.infoShow=s},expression:"infoShow"}},[o._v("\n        提示\n    ")]),o._v(" "),n("KToptips",{attrs:{type:"error",duration:1e3},model:{value:o.errorShow,callback:function(s){o.errorShow=s},expression:"errorShow"}},[o._v("\n        错误\n    ")])],1)}),[],!1,null,null,null);s.default=c.exports}}]);