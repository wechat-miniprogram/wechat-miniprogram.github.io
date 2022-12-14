(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{376:function(t,v,_){"use strict";_.r(v);var a=_(42),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"navigation"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#navigation"}},[t._v("#")]),t._v(" Navigation")]),t._v(" "),_("p",[t._v("Navigation是小程序的顶部导航组件，当页面配置"),_("code",[t._v("navigationStyle")]),t._v("设置为"),_("code",[t._v("custom")]),t._v("的时候可以使用此组件替代原生导航栏。")]),t._v(" "),_("h2",{attrs:{id:"代码引入"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#代码引入"}},[t._v("#")]),t._v(" 代码引入")]),t._v(" "),_("p",[t._v("在 page.json 中引入组件")]),t._v(" "),_("div",{staticClass:"language-json line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"usingComponents"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mp-navigation-bar"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token string"}},[t._v('"weui-miniprogram/navigation-bar/navigation-bar"')]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br")])]),_("h2",{attrs:{id:"属性列表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性列表"}},[t._v("#")]),t._v(" 属性列表")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("属性")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("默认值")]),t._v(" "),_("th",[t._v("必填")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ext-class")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("添加在组件内部结构的class，可用于修改组件内部的样式")])]),t._v(" "),_("tr",[_("td",[t._v("title")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("导航标题，如果不提供，则名为center的slot有效")])]),t._v(" "),_("tr",[_("td",[t._v("back")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示返回按钮，默认点击按钮会执行navigateBack，如果为false，则名为left的slot有效")])]),t._v(" "),_("tr",[_("td",[t._v("delta")]),t._v(" "),_("td",[t._v("number")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("当back为true的时候有效，表示navigateBack的delta参数")])]),t._v(" "),_("tr",[_("td",[t._v("background")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td",[t._v("#f8f8f8")]),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("导航背景色")])]),t._v(" "),_("tr",[_("td",[t._v("color")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("导航颜色")])]),t._v(" "),_("tr",[_("td",[t._v("loading")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("是否显示标题左侧的loading")])]),t._v(" "),_("tr",[_("td",[t._v("show")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("显示隐藏导航，隐藏的时候navigation的高度占位还在")])]),t._v(" "),_("tr",[_("td",[t._v("animated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("显示隐藏导航的时候是有opacity过渡动画")])]),t._v(" "),_("tr",[_("td",[t._v("bindback")]),t._v(" "),_("td",[t._v("eventhandler")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("否")]),t._v(" "),_("td",[t._v("在back为true时，点击back按钮触发此事件，detail包含delta")])])])]),t._v(" "),_("h2",{attrs:{id:"slot"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" Slot")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名称")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("left")]),t._v(" "),_("td",[t._v("左侧slot，在back按钮位置显示，当back为false的时候有效")])]),t._v(" "),_("tr",[_("td",[t._v("center")]),t._v(" "),_("td",[t._v("标题slot，在标题位置显示，当title为空的时候有效")])]),t._v(" "),_("tr",[_("td",[t._v("right")]),t._v(" "),_("td",[t._v("在导航的右侧显示")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);