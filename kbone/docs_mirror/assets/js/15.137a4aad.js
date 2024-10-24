(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{412:function(t,e,a){t.exports=a.p+"assets/img/wx-components.bfeaaba0.png"},413:function(t,e,a){t.exports=a.p+"assets/img/weui.8ed40275.png"},452:function(t,e,a){"use strict";a.r(e);var i=a(56),v=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"kbone-ui"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#kbone-ui"}},[t._v("#")]),t._v(" kbone-ui")]),t._v(" "),i("h2",{attrs:{id:"简介"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),i("p",[i("code",[t._v("kbone-ui")]),t._v(" 是一个支持在 Web 端使用小程序内置组件和 weui 组件的 UI 库。")]),t._v(" "),i("p",[t._v("kbone 在小程序端支持了"),i("RouterLink",{attrs:{to:"/guide/advanced.html#使用小程序内置组件"}},[t._v("内置组件")]),t._v("和 "),i("RouterLink",{attrs:{to:"/guide/advanced.html#ui-库"}},[t._v("weui 组件库")]),t._v("的使用，但是这些是小程序端的特性，在 Web 端不可使用。为了磨平这块内容而提供了 kbone-ui 库。通过，kbone-ui 来磨平大部分的组件实现差异，方便跨端同构。")],1),t._v(" "),i("h2",{attrs:{id:"版本"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#版本"}},[t._v("#")]),t._v(" 版本")]),t._v(" "),i("p",[t._v("kbone-ui 目前有两个实现版本，版本间无法兼容，建议直接使用 1.x 版本。")]),t._v(" "),i("div",{staticClass:"language- line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npm install kbone-ui\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br")])]),i("ul",[i("li",[t._v("1.x 版本：基于 Web Components 实现，无框架依赖，支持更完整的组件列表")]),t._v(" "),i("li",[t._v("0.x 版本：基于 vue 实现，可通过 "),i("code",[t._v("npm install kbone-ui@core-v0")]),t._v(" 安装，"),i("RouterLink",{attrs:{to:"/ui/intro/"}},[t._v("文档请看这里")])],1)]),t._v(" "),i("h2",{attrs:{id:"使用"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),i("p",[t._v("使用方式非常简单，开发者仅需要在 Web 端代码入口处引入 kbone-ui 并注册即可：")]),t._v(" "),i("div",{staticClass:"language-js line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-js"}},[i("code",[i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KBoneUI "),i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kbone-ui'")]),t._v("\n\nKBoneUI"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br")])]),i("p",[t._v("默认引入内置组件和 weui 组件的完整内容，如果需要只需要包含内置组件的裁剪版 kbone-ui，可按如下引入：")]),t._v(" "),i("div",{staticClass:"language-js line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-js"}},[i("code",[i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" KBoneUI "),i("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kbone-ui/wx-components'")]),t._v(" "),i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只引入内置组件")]),t._v("\n\nKBoneUI"),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),i("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br")])]),i("p",[t._v("之后便可像使用 dom 组件那样直接使用内置组件/ weui 组件：")]),t._v(" "),i("div",{staticClass:"language-html line-numbers-mode"},[i("pre",{pre:!0,attrs:{class:"language-html"}},[i("code",[i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 内置组件 --\x3e")]),t._v("\n"),i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("wx-picker")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("wx-picker")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),i("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- weui 组件 --\x3e")]),t._v("\n"),i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("mp-dialog")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("test"),i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token tag"}},[i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("mp-dialog")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),i("div",{staticClass:"line-numbers-wrapper"},[i("span",{staticClass:"line-number"},[t._v("1")]),i("br"),i("span",{staticClass:"line-number"},[t._v("2")]),i("br"),i("span",{staticClass:"line-number"},[t._v("3")]),i("br"),i("span",{staticClass:"line-number"},[t._v("4")]),i("br"),i("span",{staticClass:"line-number"},[t._v("5")]),i("br")])]),i("blockquote",[i("p",[t._v("PS：具体例子可参考 "),i("a",{attrs:{href:"https://github.com/wechat-miniprogram/kbone/tree/develop/examples/demo27",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo27（内置组件）"),i("OutboundLink")],1),t._v(" 和 "),i("a",{attrs:{href:"https://github.com/wechat-miniprogram/kbone/tree/develop/examples/demo28",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo28（weui 组件）"),i("OutboundLink")],1)])]),t._v(" "),i("h2",{attrs:{id:"api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),i("h3",{attrs:{id:"register"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#register"}},[t._v("#")]),t._v(" register")]),t._v(" "),i("p",[t._v("注册 kbone-ui。")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("默认值")]),t._v(" "),i("th",[t._v("描述")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("components")]),t._v(" "),i("td",[t._v("Array/String")]),t._v(" "),i("td",[t._v("all")]),t._v(" "),i("td",[t._v("需要注册的组件列表，支持数组传入列表，也支持字符串 "),i("code",[t._v("all")]),t._v("，表示注册所有组件")])]),t._v(" "),i("tr",[i("td",[t._v("style")]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("{}")]),t._v(" "),i("td",[t._v("需要注入到组件内部的样式")])]),t._v(" "),i("tr",[i("td",[t._v("domExtend")]),t._v(" "),i("td",[t._v("Boolean")]),t._v(" "),i("td",[t._v("true")]),t._v(" "),i("td",[t._v("dom/bom 扩展 API")])])])]),t._v(" "),i("h2",{attrs:{id:"支持情况"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#支持情况"}},[t._v("#")]),t._v(" 支持情况")]),t._v(" "),i("h3",{attrs:{id:"内置组件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#内置组件"}},[t._v("#")]),t._v(" 内置组件")]),t._v(" "),i("p",[t._v("内置组件对齐基础库 2.14.0 版本。")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("组件")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{width:"70px"}},[t._v("支持情况")])]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-cover-image")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td",[t._v("请使用 img 标签代替")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-cover-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td",[t._v("请使用 div 标签代替")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-match-media")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-movable-area")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-movable-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-scroll-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("enable-back-to-top")]),i("li",[t._v("scroll-anchoring")]),i("li",[t._v("enhanced")]),i("li",[t._v("bounces")]),i("li",[t._v("show-scrollbar")]),i("li",[t._v("paging-enabled")]),i("li",[t._v("fast-deceleration")])]),i("br"),t._v("以下事件不支持："),i("ul",[i("li",[t._v("dragstart")]),i("li",[t._v("dragging")]),i("li",[t._v("dragend")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-swiper")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-swiper-item")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td",[i("strong",[t._v("不建议使用")]),t._v("，请使用 div 标签代替")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-icon")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-progress")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-rich-text")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-text")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td",[i("strong",[t._v("不建议使用")]),t._v("，请使用 span 标签代替")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-button")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("open-type")]),i("li",[t._v("lang")]),i("li",[t._v("session-from")]),i("li",[t._v("send-message-title")]),i("li",[t._v("send-message-path")]),i("li",[t._v("send-message-img")]),i("li",[t._v("app-parameter")]),i("li",[t._v("show-message-card")])]),i("br"),t._v("以下事件不支持："),i("ul",[i("li",[t._v("getuserinfo")]),i("li",[t._v("contact")]),i("li",[t._v("getphonenumber")]),i("li",[t._v("error")]),i("li",[t._v("opensetting")]),i("li",[t._v("launchapp")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-checkbox")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-checkbox-group")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-editor")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-form")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("report-submit")]),i("li",[t._v("report-submit-timeout")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-input")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("cursor-spacing")]),i("li",[t._v("confirm-type")]),i("li",[t._v("always-embed")]),i("li",[t._v("adjust-position")]),i("li",[t._v("hold-keyboard")])]),i("br"),t._v("以下事件不支持："),i("ul",[i("li",[t._v("keyboardheightchange")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-label")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-picker")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-picker-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-picker-view-column")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-radio")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-radio-group")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-slider")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-switch")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-textarea")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("cursor-spacing")]),i("li",[t._v("show-confirm-bar")]),i("li",[t._v("adjust-position")]),i("li",[t._v("hold-keyboard")]),i("li",[t._v("disable-default-padding")]),i("li",[t._v("confirm-type")])]),i("br"),t._v("以下事件不支持："),i("ul",[i("li",[t._v("keyboardheightchange")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-functional-page-navigatore")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-navigator")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td",[t._v("请使用 a 标签代替")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-audio")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td",[t._v("官方已废弃")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-camera")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-image")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("show-menu-by-longpress")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-live-player")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-live-pusher")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-video")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-voip-room")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-map")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-canvas")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("canvas-id（旧版 canvas 官方已不再维护，建议使用新版 canvas）")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-ad")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-ad-custom")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-official-account")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-open-data")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-web-view")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#888"}},[t._v("不支持")])]),t._v(" "),i("td")])])]),t._v(" "),i("h3",{attrs:{id:"weui-组件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#weui-组件"}},[t._v("#")]),t._v(" weui 组件")]),t._v(" "),i("p",[t._v("weui 组件对齐 npm 上 1.0.7 版本。")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("组件")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{width:"70px"}},[t._v("支持情况")])]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-badge")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-gallery")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-loading")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-icon")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-form")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-form-page")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-cell")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-cells")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-checkbox-group")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-checkbox")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-slideview")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-uploader")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#4646cc"}},[t._v("部分支持")])]),t._v(" "),i("td",[t._v("以下属性不支持："),i("ul",[i("li",[t._v("size-type")]),i("li",[t._v("source-type")])]),i("br"),t._v("以下事件不支持："),i("ul",[i("li",[t._v("cancel")])])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-dialog")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-msg")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-toptips")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-half-screen-dialog")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-actionsheet")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-navigation-bar")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-tabbar")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-searchbar")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("mp-grids")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")])])]),t._v(" "),i("h3",{attrs:{id:"dom-bom-扩展-api"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dom-bom-扩展-api"}},[t._v("#")]),t._v(" dom/bom 扩展 API")]),t._v(" "),i("p",[t._v("有些接口无法在小程序中直接模拟出来，所以 kbone 提供了一些在 Web 端不存在的扩展接口给小程序使用。为了对齐这些扩展接口，kbone-ui 也同步实现了一套允许其在 Web 端使用。")]),t._v(" "),i("h4",{attrs:{id:"组件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"center"}},[t._v("组件")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{width:"70px"}},[t._v("支持情况")])]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-capture")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-catch")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"center"}},[t._v("wx-animation")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")])])]),t._v(" "),i("h4",{attrs:{id:"接口"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",[t._v("接口")]),t._v(" "),i("th",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{width:"70px"}},[t._v("支持情况")])]),t._v(" "),i("th",[t._v("备注")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("window.$$getComputedStyle")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("window.$$forceRender")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td",[t._v("在 Web 端是一个空函数")])]),t._v(" "),i("tr",[i("td",[t._v("dom.$$getBoundingClientRect")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")]),t._v(" "),i("tr",[i("td",[t._v("canvas.$$prepare")]),t._v(" "),i("td",{staticStyle:{"text-align":"center"}},[i("div",{staticStyle:{color:"#3a8e3a"}},[t._v("完全支持")])]),t._v(" "),i("td")])])]),t._v(" "),i("h2",{attrs:{id:"在线-demo"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#在线-demo"}},[t._v("#")]),t._v(" 在线 demo")]),t._v(" "),i("div",{staticStyle:{display:"flex",width:"100%",padding:"40px 0","align-items":"center","flex-direction":"column"}},[i("img",{attrs:{src:a(412),width:"300",height:"300",alt:"内置组件"}}),t._v(" "),i("span",{staticStyle:{"margin-top":"10px","font-size":"20px"}},[t._v("内置组件 demo")])]),t._v(" "),i("div",{staticStyle:{display:"flex",width:"100%",padding:"40px 0","align-items":"center","flex-direction":"column"}},[i("img",{attrs:{src:a(413),width:"300",height:"300",alt:"weui 组件"}}),t._v(" "),i("span",{staticStyle:{"margin-top":"10px","font-size":"20px"}},[t._v("weui 组件 demo")])])])}),[],!1,null,null,null);e.default=v.exports}}]);