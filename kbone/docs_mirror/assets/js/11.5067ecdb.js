(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{325:function(a,t,e){},368:function(a,t,e){"use strict";var i=e(325);e.n(i).a},378:function(a,t,e){"use strict";e.r(t);var i={data:function(){return{background:["demo-text-1","demo-text-2","demo-text-3"],indicatorDots:!0,circularFlag:!1,autoplay:!0,vertical:!1,pointer:!1,duration:500,interval:2e3,current:0}},methods:{changeItem:function(){console.log(this.current)}}},n=(e(368),e(42)),l=Object(n.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("KView",{staticClass:"page swiper js_show"},[e("KView",{staticClass:"page__hd"},[e("h1",{staticClass:"page__title"},[a._v("Swiper")]),a._v(" "),e("p",{staticClass:"page__desc"},[a._v("Swiper 内容")])]),a._v(" "),e("KView",{staticClass:"page__bd page__bd_spacing"},[e("KSwiper",{attrs:{"indicator-dots":a.indicatorDots,circular:a.circularFlag,autoplay:a.autoplay,duration:a.duration,interval:a.interval},on:{change:a.changeItem},model:{value:a.current,callback:function(t){a.current=t},expression:"current"}},a._l(a.background,(function(a,t){return e("KSwiperItem",{key:t},[e("KView",{class:"swiper-item "+a})],1)})),1)],1),a._v(" "),e("KView",[e("KCells",[e("KSwitch",{attrs:{label:"指示点"},model:{value:a.indicatorDots,callback:function(t){a.indicatorDots=t},expression:"indicatorDots"}}),a._v(" "),e("KSwitch",{attrs:{label:"衔接滑动"},model:{value:a.circularFlag,callback:function(t){a.circularFlag=t},expression:"circularFlag"}}),a._v(" "),e("KSwitch",{attrs:{label:"自动播放"},model:{value:a.autoplay,callback:function(t){a.autoplay=t},expression:"autoplay"}})],1)],1),a._v(" "),e("KView",{staticClass:"page__bd page__bd_spacing",staticStyle:{"margin-top":"20px"}},[e("KFlex",[e("KFlexItem",[a._v("\n        幻灯片切换时长\n      ")]),a._v(" "),e("KFlexItem",[a._v("\n        "+a._s(a.duration)+"ms\n      ")])],1),a._v(" "),e("KSlider",{attrs:{min:500,max:2e3},model:{value:a.duration,callback:function(t){a.duration=t},expression:"duration"}})],1),a._v(" "),e("KView",{staticClass:"page__bd page__bd_spacing"},[e("KFlex",[e("KFlexItem",[a._v("\n        自动播放间隔时长\n      ")]),a._v(" "),e("KFlexItem",[a._v("\n        "+a._s(a.interval)+"ms\n      ")])],1),a._v(" "),e("KSlider",{attrs:{min:2e3,max:1e4},model:{value:a.interval,callback:function(t){a.interval=t},expression:"interval"}})],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);