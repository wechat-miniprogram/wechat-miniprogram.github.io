(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{337:function(t,s,n){},377:function(t,s,n){var e=n(0),i=n(3),o=n(68),a=[].slice,c=function(t){return function(s,n){var e=arguments.length>2,i=e?a.call(arguments,2):void 0;return t(e?function(){("function"==typeof s?s:Function(s)).apply(this,i)}:s,n)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},378:function(t,s,n){"use strict";n(337)},395:function(t,s,n){"use strict";n.r(s);n(377);var e={data:function(){return{successTips:!1,loadingToast:!1}},methods:{successShow:function(){this.successTips=!0},loadingShow:function(){var t=this;this.loadingToast=!0,clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.loadingToast=!1}),1e3)}}},i=(n(378),n(42)),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("KView",{staticClass:"page toast js_show"},[n("KView",{staticClass:"page__hd"},[n("h1",{staticClass:"page__title"},[t._v("Toast")]),t._v(" "),n("p",{staticClass:"page__desc"},[t._v("弹出式提示")])]),t._v(" "),n("KView",{staticClass:"page__bd page__bd_spacing"},[n("KButton",{on:{click:t.successShow}},[t._v("\n            成功提示\n        ")]),t._v(" "),n("KButton",{on:{click:t.loadingShow}},[t._v("\n            加载中提示\n        ")])],1),t._v(" "),n("KToast",{attrs:{type:"success",duration:1e3},model:{value:t.successTips,callback:function(s){t.successTips=s},expression:"successTips"}},[t._v("已完成")]),t._v(" "),n("KToast",{attrs:{type:"loading"},model:{value:t.loadingToast,callback:function(s){t.loadingToast=s},expression:"loadingToast"}},[t._v("加载中提示")])],1)}),[],!1,null,null,null);s.default=o.exports}}]);