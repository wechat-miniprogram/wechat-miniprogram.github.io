# 配置

以下是 webpack 插件 mp-webpack-plugin 的配置说明。

## 页面名称

webpack 构建中 entry 配置项里的 key，如下 webpack 配置中 `page1`，`page2` 和 `page3` 即是页面名称：

```js
// 注意这里是 webpack 配置，不是 mp-webpack-plugin 的配置
{
    entry: {
        page1: path.resolve(__dirname, '../src/page1/main.mp.js'),
        page2: path.resolve(__dirname, '../src/page2/main.mp.js'),
        page3: path.resolve(__dirname, '../src/page3/main.mp.js'),
    },
    // 其他配置...
}
```

## origin

页面 origin，默认是 `https://miniprogram.default`。

> PS：因为是所有页面共用一个 orgin，所以要求所有页面必须同源，不然无法正常跳转。

## entry

入口页面路由，默认是 `/`。

## router

页面路由，用于页面间跳转。其值是一个以[页面名称](#页面名称)作为 key 的对象，每项的值是该页面可以响应的路由。

路由可以是多个值，同时支持动态路由。

```js
// mp-webpack-plugin 配置
{
    router: {
        home: [
            '/(home|index)?',
            '/test/(home|index)',
        ],
        list: [
            '/test/list/:id',
        ],
        detail: [
            '/test/detail/:id',
        ],
        profile: [
            '/test/profile',
        ],
    },
    // 其他配置...
}
```

## redirect

特殊路由跳转。

### redirect.notFound

跳转遇到同一个 origin 但是不在 router 里的页面时处理方式，支持的值：

* `none`：**默认值**，什么都不做
* `webview`：使用 web-view 组件打开
* `error`：抛出异常
* [页面名称](#页面名称)：会跳转到对应页面，这个页面必须在主包中

```js
// mp-webpack-plugin 配置
{
    redirect: {
        notFound: 'home',
    },
    // 其他配置...
}
```

### redirect.accessDenied

跳转到 origin 之外的页面时处理方式，值同 [redirect.notFound](#redirect-notfound)。

## generate

构建输出配置。

### generate.app

app 输出配置，支持的值：

* `default`：**默认值**，会输出 app.js、app.json、app.wxss 和 project.config.json 等文件
* `noemit`：不输出 app 相关文件

### generate.appWxss

app.wxss 输出配置，支持的值：

* `default`：**默认值**，输出默认标签样式
* `none`：输出为空
* `display`：只输出 display 相关的内容

### generate.subpackages

小程序分包，暂不支持独立分包，详细注意事项可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)。其值是一个以包名称作为 key 的对象，每项的值是该分包内包含的[页面名称](#页面名称)。

```js
// mp-webpack-plugin 配置
{
    generate: {
        subpackages: {
            package1: ['list'],
            package2: ['detail'],
        },
    },
    // 其他配置...
}
```

### generate.preloadRule

小程序分包预下载，详细注意事项可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)。

> PS：此配置必须搭配 [generate.subpackages](#generate-subpackages) 使用。

```js
// mp-webpack-plugin 配置
{
    generate: {
        preloadRule: {
            // 进入 list 页面时，会预下载名为 package2 的分包
            list: {
                network: 'all',
                packages: ['package2'],
            },
        },
    },
    // 其他配置...
}
```

### generate.tabBar

小程序 tabBar，详细注意事项可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#tabBar)。其值和官方配置基本一致，但是存在些微不同：

* 使用 `pageName` 代替官方的 `pagePage` 字段，其值为[页面名称](#页面名称)
* `iconPath` 和 `selectedIconPath` 因为不支持网络图片，需要指定对应图片的绝对路径

如果需要使用**自定义 tabBar**，则需要配置 `custom` 字段，其值为需要拷贝到小程序 custom-tab-bar 目录的目录地址。

```js
// mp-webpack-plugin 配置
{
    generate: {
        tabBar: {
            color: '#000000',
            selectedColor: '#07c160',
            backgroundColor: '#ffffff',
            list: [{
                pageName: 'home',
                text: '主页',
                iconPath: path.resolve(__dirname, '../src/img/home.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/home-sel.png'),
            }, {
                pageName: 'profile',
                text: '个人页',
                iconPath: path.resolve(__dirname, '../src/img/profile.png'),
                selectedIconPath: path.resolve(__dirname, '../src/img/profile-sel.png'),
            }],
            // 使用自定义 tabBar
            custom: path.join(__dirname, '../src/custom-tab-bar'),
        },
    },
    // 其他配置...
}
```

### generate.app

自定义生成小程序 app.js，值为 webpack entry 配置项中的 key。如果一个 webpack 配置的入口被声明为 app.js 的入口，那么它就不会被作为页面处理。

### generate.wxCustomComponent

小程序自定义组件使用配置，如果需要在 kbone 项目中使用现有的小程序自定义组件，必须先在此处声明方可使用。需要声明的字段：

* `root`：所有要使用的自定义组件所在的根目录，构建时这个目录会被完整拷贝到小程序目录下
* `usingComponents`：要使用的自定义组件配置

其中每个自定义组件的配置都需要指明其相对于 `root` 的路径，如果需要传递 properties 到这个自定义组件里面，则需要配置 `props` 字段，如果需要监听这个自定义组件的事件，则需要配置 `events` 字段。

```js
// mp-webpack-plugin 配置
{
    generate: {
        wxCustomComponent: {
            root: path.join(__dirname, '../src/custom-components'),
			usingComponents: {
				'comp-a': 'comp-a/index',
				'comp-b': {
                    path: 'comp-b/index',
                    props: ['propa', 'propb'], // 组件 properties，如果在相应的 dom 节点上设置了和列表中的 property 同名的 attribute，那么它会同步到组件的 properties 上
                    events: ['someevent'], // 组件事件，会转化成 dom 事件触发到对应的 dom 节点上
                },
			},
        },
    },
    // 其他配置...
}
```

### generate.globalVars

注入全局变量，每一项为 `[key, value]` 的结构。构建时会将需要注入的全局变量声明在所有要执行的代码之前，以方便代码里直接使用。

如果配置了 `['TEST_VAR_STRING', '\'miniprogram\'']`，则会生成类似 `var TEST_VAR_STRING = 'miniprogram'` 的声明语句；不指定 value 的话，则会从 window 下读取，如 `['CustomEvent']` 则会生成类似 `var CustomEvent = window.CustomEvent` 的声明语句。

```js
// mp-webpack-plugin 配置
{
    generate: {
        globalVars: [
            ['TEST_VAR_STRING', '\'miniprogram\''],
            ['TEST_VAR_NUMBER', '123'],
            ['TEST_VAR_BOOL', 'true'],
            ['TEST_VAR_FUNCTION', 'function() {return \'I am function\'}'],
            ['TEST_VAR_OTHERS', 'window.document'],
            ['CustomEvent'],
        ],
    },
    // 其他配置...
}
```

### generate.autoBuildNpm

构建完成后是否自动安装小程序依赖，支持的值：

* `false`：**默认值**，不自动安装依赖
* `true/'npm'`：使用 npm 自动安装依赖
* `'yarn'`：使用 yarn 自动安装依赖

## runtime

运行时配置。

### runtime.wxComponent

内置组件使用配置，支持的值：

* `default`：**默认值**，表示可使用 `wx-component` 标签或类似 `wx-view` 这样使用前缀的用法来使用内置组件
* `noprefix`：支持 `default` 用法的前提下，也支持无前缀的用法，比如直接使用 `view` 标签表示 `view` 内置组件

```html
<!-- wx-component 标签用法 -->
<wx-component behavior="picker" mode="region" @change="onChange">选择城市</wx-component>
<wx-component behavior="button" open-type="share" @click="onClickShare">分享</wx-component>

<!-- wx- 前缀用法 -->
<wx-picker mode="region" @change="onChange">选择城市</wx-picker>
<wx-button open-type="share" @click="onClickShare">分享</wx-button>

<!-- 如果配置值为 noprefix，还支持下面的用法 -->
<picker mode="region" @change="onChange">选择城市</picker>
<button open-type="share" @click="onClickShare">分享</button>
```

### runtime.cookieStore

cookie 存储方式，支持的值：

* `default`：**默认值**，存储在小程序的 storage 中
* `storage`：同 `default`
* `memory`：存储在内存中

## app

app 窗口配置，可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window)。

## appExtraConfig

app 补充配置，除 pages、window、tabBar、subpackages、preloadRule 配置外的其他配置，可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

## global

所有页面的全局配置。

### global.loadingText

页面加载时是否需要 loading 提示，默认空，即不出现提示。

### global.share

是否支持分享，若支持，会展示分享按钮并调用 app 的 onShareAppMessage 按钮，默认 `false`。

### global.windowScroll

是否需要 window scroll 事件，在低端安卓机会影响性能，默认 `false`。

### global.pageBackgroundColor

page 的背景色，若配置了，会在每个页面的 wxss 前面追加 `page {background-color: ${pageBackgroundColor};}`。

### global.reachBottom

是否支持上拉触底，若支持可监听 window 的 reachbottom 事件，默认 `false`。

### global.reachBottomDistance

页面上拉触底事件触发时距页面底部距离，单位为 px，必须搭配 [global.reachBottom](#global-reachbottom) 使用。

### global.pullDownRefresh

是否支持下拉刷新，若支持可监听 window 的 pulldownrefresh 事件，默认 `false`。

### global.rem

是否支持 rem，默认 `false`。若需要使用 rem，在小程序端可参考下述方式来设置根字体大小：

```js
window.onload = function() {
    if (process.env.isMiniprogram) {
        // 小程序
        document.documentElement.style.fontSize = wx.getSystemInfoSync().screenWidth / 16 + 'px'
    }
}
```

> PS：这个特性只在基础库 2.9.0 及以上版本支持。

### global.pageStyle

是否支持通过修改 `document.documentElement` 的样式来修改页面的样式，默认 `false`。

```js
document.documentElement.style.backgroundColor = '#fffbe7'
```

> PS：这个特性只在基础库 2.9.0 及以上版本支持。

### global.extra

其他页面配置，可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)。

## pages

各个页面的单独配置，可以为单个页面做个性化处理，覆盖全局配置。每个页面的配置项同 [global](#global) 配置。

```js
// mp-webpack-plugin 配置
{
    pages: {
        home: {
            pullDownRefresh: true,
        },
        list: {
            loadingText: '加载中...',
            share: false,
        },
    },
    // 其他配置...
}
```

## optimization

优化配置，控制优化级别，通常使用默认配置即可。

### optimization.domSubTreeLevel

将多少层级的 dom 子树作为一个自定义组件渲染，支持 `1 - 10`，默认值为 `10`。

### optimization.elementMultiplexing

element 对象复用，默认 `true`。当页面被关闭时会回收对象，但是如果有地方保留有对象引用的话，注意要关闭此项，否则可能出问题

### optimization.textMultiplexing

文本节点对象复用，默认 `true`。注意事项同 [optimization.elementMultiplexing](#optimization-elementmultiplexing)。

### optimization.commentMultiplexing

注释节点对象复用，默认 `true`。注意事项同 [optimization.elementMultiplexing](#optimization-elementmultiplexing)。

### optimization.domExtendMultiplexing

节点相关对象复用，如 style、classList 对象等，默认 `true`。注意事项同 [optimization.elementMultiplexing](#optimization-elementmultiplexing)。

### optimization.styleValueReduce

如果设置 style 属性时存在某个属性的值超过一定值，则进行删减，默认空，即不做删减。

一个常见的例子是样式中的 backgroundImage 如果设置一张非常大的图片的 base64 串，那么它的值可能就会很大。如果配置了其值为 5000，那么这个 base64 串长度如果超过了 5000 就会被删减，backgroundImage 的值置为 `undefined`。

```js
// mp-webpack-plugin 配置
{
    optimization: {
        styleValueReduce: 5000,
    },
    // 其他配置...
}
```

### optimization.attrValueReduce

如果设置 dom 属性时存在某个属性的值超过一定值，则进行删减，默认空，即不做删减。使用场景可参考 [optimization.styleValueReduce](#optimization-stylevaluereduce)。

## projectConfig

项目配置，会被合并到 project.config.json。

```js
// mp-webpack-plugin 配置
{
    projectConfig: {
        appid: 'wx1234567890',
    },
    // 其他配置...
}
```

## packageConfig

包配置，会被合并到 package.json。

```js
// mp-webpack-plugin 配置
{
    packageConfig: {
        author: 'wechat-miniprogram',
    },
    // 其他配置...
}
```
