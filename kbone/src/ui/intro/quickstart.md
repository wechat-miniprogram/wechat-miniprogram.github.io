# 快速上手

## 安装使用

**1. 安装 kbone-cli 工具**

对于新项目，可以使用 `kbone-cli` 来创建项目，首先安装 `kbone-cli`:

```
npm install -g kbone-cli
```

**2. 初始化 kbone 项目**

创建项目：

```
kbone init my-app
```


**3. 安装 kbone-ui 项目**

```
npm install kbone-ui
```


进入项目，按照 README.md 的指引进行开发：

```
// 开发小程序端
npm run mp

// 开发 Web 端
npm run web

// 构建 Web 端
npm run build
```

> PS：项目基于 webpack 构建，关于 webpack 方面的配置可以[点此查看](https://webpack.js.org/configuration/)，而关于小程序构建相关的详细配置细节可以[参考此文档](https://wechat-miniprogram.github.io/kbone/docs/guide/tutorial.html)。


**4. 使用 kbone-ui 项目**

加载全部组件内容，并引入 weui 样式库：

```js
import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'

Vue.use(KboneUI)
```

或者使用按需引入：

```js
import KButton from 'kbone-ui/lib/KButton.js'
import KView from 'kbone-ui/lib/KView.js'

Vue.use(KButton)
Vue.use(KView)
```