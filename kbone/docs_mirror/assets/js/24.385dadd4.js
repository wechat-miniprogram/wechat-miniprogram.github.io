(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{412:function(s,a,e){"use strict";e.r(a);var n=e(42),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"贡献规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#贡献规范"}},[s._v("#")]),s._v(" 贡献规范")]),s._v(" "),e("p",[s._v("如果有兴趣一起参与开发和维护 kbone，可遵循此规范进行代码贡献。")]),s._v(" "),e("h2",{attrs:{id:"开发流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发流程"}},[s._v("#")]),s._v(" 开发流程")]),s._v(" "),e("p",[s._v("首先需要将代码仓库 clone 下来：https://github.com/wechat-miniprogram/kbone，然后切到 develop 分支。")]),s._v(" "),e("p",[s._v("初次将代码 clone 下来后，需要先运行 "),e("code",[s._v("npm run prepare")]),s._v(" 来完成 lerna 的初始化，之后才能进入开发的流程：")]),s._v(" "),e("ol",[e("li",[s._v("完成代码开发")]),s._v(" "),e("li",[s._v("补充单元测试")]),s._v(" "),e("li",[s._v("在包内执行 "),e("code",[s._v("npm run test")]),s._v(" 确保单元测试没有问题")]),s._v(" "),e("li",[s._v("在 kbone 根目录执行 "),e("code",[s._v("npm run check")]),s._v(" 确保代码检查和所有包单元测试正常")]),s._v(" "),e("li",[s._v("在包内的 CHANGELOG.md 中补充版本更新日志，具体格式可参考 packages/miniprogram-element/CHANGELOG.md")]),s._v(" "),e("li",[s._v("如有必要，需要修改 docs 目录下的文档")]),s._v(" "),e("li",[s._v("提交到 git")]),s._v(" "),e("li",[s._v("在 kbone 根目录执行 "),e("code",[s._v("npm run publish")]),s._v(" 打标签并发布到 npm")])]),s._v(" "),e("p",[s._v("具体规范下面进行说明：")]),s._v(" "),e("h2",{attrs:{id:"目录规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[s._v("#")]),s._v(" 目录规范")]),s._v(" "),e("p",[s._v("kbone 是一套同构方案，包含多个包，各个包之间可能会有依赖关系，故采用 lerna 来进行管理。")]),s._v(" "),e("h3",{attrs:{id:"包外结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包外结构"}},[s._v("#")]),s._v(" 包外结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("|-- docs 文档\n|-- examples 案例\n|     |-- demo1\n|     |-- demo2\n|     |-- ...\n|     |-- README.md 案例说明\n|\n|-- packages\n|-- .eslintignore\n|-- .eslintrc.js\n|-- .gitignore\n|-- lerna.json\n|-- LICENSE\n|-- package.json\n|-- README.md\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("eslint 相关配置所有包统一，所以放到包外。")]),s._v(" "),e("h3",{attrs:{id:"包内结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包内结构"}},[s._v("#")]),s._v(" 包内结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("|-- src 源码\n|-- test 单元测试\n|-- tool 构建相关代码\n|-- .npmignore\n|-- CHANGELOG.md 更新日志\n|-- package.json\n|-- README.md\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("对于部分包需要构建，则构建相关的配置、脚本需要放到 tool 目录下；如果包还有特殊需求，亦可以在不修改现有目录结构的前提下在根目录补充其他文件和目录（如补充 eslint 配置等）。")]),s._v(" "),e("h3",{attrs:{id:"案例结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#案例结构"}},[s._v("#")]),s._v(" 案例结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("|-- build\n|     |-- miniprogram.config.js kbone 插件配置\n|     |-- webpack.config.js Web 端构建配置\n|     |-- webpack.mp.config.js 小程序端构建配置\n|\n|-- src 源码\n|-- index.html Web 端入口 html 文件\n|-- package.json\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("如果此 demo 不需要 Web 端的展示，可以去掉 Web 端代码；一般情况下尽量遵从此结构来编写案例，但是也允许针对特殊情况调整结构（如 vue-cli3 插件案例）。")]),s._v(" "),e("h2",{attrs:{id:"其他规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他规范"}},[s._v("#")]),s._v(" 其他规范")]),s._v(" "),e("h3",{attrs:{id:"代码检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码检查"}},[s._v("#")]),s._v(" 代码检查")]),s._v(" "),e("p",[s._v("统一走 eslint 来约束，在 kbone 根目录下执行："),e("code",[s._v("npm run lint")]),s._v(" 会对各个包内的 src、test、tool 目录下的 js 文件进行检查，确保无任何规则失败提示。")]),s._v(" "),e("h3",{attrs:{id:"单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[s._v("#")]),s._v(" 单元测试")]),s._v(" "),e("p",[s._v("各个包内部实现单元测试和覆盖率检查，统一使用 jest 工具链；如果涉及到自定义组件则使用 miniprogram-simulate；如果有 CI 需求，则使用 codecov 来管理覆盖率检查。")]),s._v(" "),e("p",[s._v("包内命令统一为：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 执行单元测试\nnpm run test\n\n# 调试单元测试\nnpm run test-debug\n\n# 执行覆盖率检查\nnpm run coverage\n\n# 接入 CI 覆盖率检查\nnpm run codecov\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("PS：可参考 packages/miniprogram-element 的实现。")])]),s._v(" "),e("p",[s._v("在包内实现完单元测试后，需要在 kbone 根目录下的 package.json 中补充相应的执行命令，确保在 kbone 根目录下执行 "),e("code",[s._v("npm run test")]),s._v(" 可以执行所有包内的单元测试。")]),s._v(" "),e("h3",{attrs:{id:"版本规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本规范"}},[s._v("#")]),s._v(" 版本规范")]),s._v(" "),e("p",[s._v("参考：https://semver.org/lang/zh-CN/")]),s._v(" "),e("h3",{attrs:{id:"commit-信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-信息"}},[s._v("#")]),s._v(" commit 信息")]),s._v(" "),e("p",[s._v("格式为 "),e("code",[s._v("[变化]: 具体操作")]),s._v("，一条完整的示例："),e("code",[s._v("feature: support camera inner component")]),s._v("。")]),s._v(" "),e("p",[s._v("变化支持如下枚举值：")]),s._v(" "),e("ul",[e("li",[s._v("feature：新增特性")]),s._v(" "),e("li",[s._v("fixed：修复 bug")]),s._v(" "),e("li",[s._v("docs：文档更新")]),s._v(" "),e("li",[s._v("update：demo、更新日志、构建代码等源码之外的一些更新调整")]),s._v(" "),e("li",[s._v("refactor：重构")]),s._v(" "),e("li",[s._v("lint：调整代码以通过代码检查")])]),s._v(" "),e("h3",{attrs:{id:"分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),e("p",[s._v("默认开发分支为 develop 分支，如果需要提 pr，则以此分支为基准。当 develop 分支稳定后会合入 master 分支。")]),s._v(" "),e("p",[s._v("创建其他分支的命名规范：")]),s._v(" "),e("ul",[e("li",[s._v("feature-xxx：新特性分支")]),s._v(" "),e("li",[s._v("fixed-xxx：bugfix 分支")]),s._v(" "),e("li",[s._v("refactor-xxx：重构分支")])]),s._v(" "),e("p",[s._v("合入流程：")]),s._v(" "),e("p",[s._v("其他分支 ---\x3e develop 分支 ---\x3e master 分支")])])}),[],!1,null,null,null);a.default=t.exports}}]);