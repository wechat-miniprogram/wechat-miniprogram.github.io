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
* `noemit`：不输出 app 相关文件和 project.config.json
* `noconfig`：不输出 project.config.json

### generate.appWxss

app.wxss 输出配置，支持的值：

* `default`：**默认值**，输出默认标签样式
* `none`：输出为空
* `display`：只输出 display 相关的内容

### generate.subpackages

小程序分包，暂不支持独立分包，详细注意事项可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/basic.html)。其值是一个以分包名称作为 key 的对象，每项的值是该分包内包含的[页面名称](#页面名称)。

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

当然，你可能需要追加一些分包的额外配置，比如插件配置等，这样的话要将分包内容改成一个对象，其中 pages 表示该分包内包含的[页面名称](#页面名称)，其他配置则补充在对象中即可，如下述例子中的 plugins 配置：

```js
// mp-webpack-plugin 配置
{
    generate: {
        subpackages: {
            package1: ['list'],
            package2: {
                pages: ['detail'],
                plugins: {
                    myPlugin: {
                        version: '1.0.0',
                        provider: 'wxidxxxxxxxxxxxxxxxx',
                    },
                },
            },
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

* 使用 `pageName` 代替官方的 `pagePath` 字段，其值为[页面名称](#页面名称)
* `iconPath` 和 `selectedIconPath` 因为不支持网络图片，需要指定对应图片的绝对路径

如果需要使用**自定义 tabBar**，则需要配置 `custom` 字段，其值为需要拷贝到小程序 custom-tab-bar 目录的目录地址。

> PS：tabBar 页面默认进入的 `location.pathname` 为 `/`，如果该页面使用了单页路由配置（如 vue-router 等）且默认路由不是 `/` 的情况则需要处理 `/` 这个路由，如将其重定向到默认路由等方式。

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

### generate.appEntry

自定义生成小程序 app.js，值为 webpack entry 配置项中的 key。如果一个 webpack 配置的入口被声明为 app.js 的入口，那么它就不会被作为页面处理。

### generate.appEntryInject

仅在自定义生成小程序 app.js 时生效。app.js 本身不属于任何一个页面，所以无法获得标准的 window/document 对象。但是存在一些情况需要给 window/document 对象设置一些内容以便依赖的第三方代码可以做一些特殊逻辑，那就可以使用通过此字段来注入一些代码，此代码会在 app.js 运行之前运行。

```js
// mp-webpack-plugin 配置
{
    generate: {
        appEntryInject: `window.navigator = {product: 'kbone'};`,
    },
    // 其他配置...
}
```

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
* `true / 'npm'`：使用 npm 自动安装依赖
* `'yarn'`：使用 yarn 自动安装依赖

### generate.projectConfig

调整 project.config.json 文件的生成目录路径，需传入绝对路径。

```js
{
    generate: {
        projectConfig: path.join(__dirname, '../dist/mp'), // 注意，这是目录路径，不是文件路径
    },
    // 其他配置...
}
```

### generate.renderVersion

配置生成到 package.json 中 `miniprogram-render` npm 包的版本串，默认是 `latest`。

如若需要安装 1.x 版本，除了直接指定版本号外，也可将值设置成 `core-v1`。

### generate.elementVersion

配置生成到 package.json 中 `miniprogram-element` npm 包的版本串，默认是 `latest`。

如若需要安装 1.x 版本，除了直接指定版本号外，也可将值设置成 `core-v1`。

### generate.worker

是否要使用 Worker/SharedWorker，默认是 `false`。window.Worker/window.SharedWorker 的默认不可用，开启此项后会使用小程序的 worker 能力来模拟 window.Worker/window.SharedWorker。

小程序要求所有 worker 文件必须在一个目录中，所以此项的值也可为一个字符串，比如 `common/mp/workers`，字符串的值表示 worker 文件所在目录相对于小程序项目根目录的路径。假如设置此项为 `true`，则默认取目录 `common/workers` 作为 worker 文件所在目录。

```js
// mp-webpack-plugin 配置

// 设置布尔值
{
    generate: {
        worker: true, // 取目录：common/workers
    },
    // 其他配置...
}

// 设置字符串
{
    generate: {
        worker: 'common/mp/workers', // 取目录：common/mp/workers
    },
    // 其他配置...
}
```

> PS：受限于小程序限制，worker 里不可使用 XMLHttpRequest 对象，不可使用 wx 相关接口，并且限制只能有一个小程序 worker 实例。更多限制可查看[小程序官方 worker 文档](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html)。

### generate.weui

是否要使用 weui 组件库，默认是 `false`。

如果设置为 `true`，则开发者可直接通过类似下述代码来进行使用：

```html
<mp-navigation-bar :show="true">
    <div slot="center">我是标题</div>
</mp-navigation-bar>
```

这里有几个要点：

* 默认 weui 是通过扩展库的方式引入，故不会占用包体积
* 所有 weui 组件必须带上 `mp-` 前缀，例如使用 cell 组件，则要写成 `<mp-cell></mp-cell>`
* 对于支持指定 slot 的 weui 组件，必须将该 slot 属性设置在 div 节点上，并且将其置于 weui 组件下第一层，如上述例子中的 navigation-bar 组件
* 每个 weui 组件在使用时都会被外包一层自定义组件，建议按需使用，在不必要用到 weui 组件时使用 div/span/img 等 Web 标签代替

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

* `default`：**默认值**，存储在小程序的 storage 中，所有页面共享
* `storage`：存储在小程序的 storage 中，页面间不共享
* `memory`：存储在内存中，页面间不共享
* `globalstorage`：同 `default`
* `globalmemory`：存储在内存中，所有页面共享

### runtime.disableMpEvent

是否禁止抛出小程序的 tap、longpress 事件，方便开发者自己构建相关事件：

* `false`：**默认值**，不禁止抛出
* `true`：禁止抛出

### runtime.extraStyleList

补充 style 对象支持的样式，默认支持的样式列表可[点此查看](https://github.com/Tencent/kbone/blob/develop/packages/miniprogram-render/src/node/style-list.js)。

```js
// mp-webpack-plugin 配置
{
    runtime: {
        extraStyleList: ['webkitMask'], // 追加 -webkit-mask 支持
    },
    // 其他配置...
}
```

## app

app 窗口配置，可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#window)。

## appExtraConfig

app 补充配置，除 pages、window、tabBar、subpackages、preloadRule 配置外的其他配置，可参考[官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html)。

## global

所有页面的全局配置，如果需要对单个页面配置，则可在 [pages](#pages) 配置项中配置。

### global.loadingText

页面加载时是否需要 loading 提示，默认空，即不出现提示。

### global.loadingView

页面加载时的视图展示，默认空，即不展示任何东西。加载视图是一个大小和屏幕一样且使用 fixed 定位的自定义组件，使用时将要作为加载视图的自定义组件命名为 index，然后将其所在目录传入到 loadingView 配置中，在构建时该目录会被拷贝到小程序项目根目录，在运行过程中 kbone 会默认取该目录下名为 index 的组件作为加载视图。

```js
// mp-webpack-plugin 配置
{
    global: {
        loadingView: path.join(__dirname, '../src/loading-view'), // 加载视图所在的目录，kbone 会默认取该目录下名为 index 的组件
    },
    // 其他配置...
}
```

加载视图自定义组件可接收一个 pageName 参数，表示当前所在的页面名称

```js
Component({
    properties: {
        pageName: {
            type: String,
            value: '',
        },
    },

    attached() {
        console.log('page name: ', this.data.pageName)
    },
})
```

### global.loadingViewName

在使用 [global.loadingView](#global-loadingview) 的时候，默认取名为 index 的自定义组件作为加载视图，如果想要取其他名字的自定义组件，则可以指定此配置。

```js
// mp-webpack-plugin 配置
{
    global: {
        loadingView: path.join(__dirname, '../src/loading-view'), // 加载视图所在的目录
        loadingViewName: 'loading', // 指定取名为 loading 的自定义组件作为加载视图
    },
    // 其他配置...
}
```

### global.share

是否支持转发，若支持，会展示转发按钮并调用 app 的 onShareAppMessage 事件，默认 `false`。

### global.shareTimeline

是否支持分享朋友圈，会展示分享朋友圈按钮并调用 app 的 onShareTimeline 事件，默认 `false`。

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

> PS：如上述例子中，home、list 均为[页面名称](#页面名称)。

### pages[[页面名称](#页面名称)].loadingText

同 [global.loadingText](#global-loadingtext)。

### pages[[页面名称](#页面名称)].loadingView

同 [global.loadingView](#global-loadingview)。

### pages[[页面名称](#页面名称)].loadingViewName

同 [global.loadingViewName](#global-loadingviewname)。

### pages[[页面名称](#页面名称)].share

同 [global.share](#global-share)。

### pages[[页面名称](#页面名称)].shareTimeline

同 [global.shareTimeline](#global-sharetimeline)。

### pages[[页面名称](#页面名称)].windowScroll

同 [global.windowScroll](#global-windowscroll)。

### pages[[页面名称](#页面名称)].pageBackgroundColor

同 [global.pageBackgroundColor](#global-pagebackgroundcolor)。

### pages[[页面名称](#页面名称)].reachBottom

同 [global.reachBottom](#global-reachbottom)。

### pages[[页面名称](#页面名称)].reachBottomDistance

同 [global.reachBottomDistance](#global-reachbottomdistance)。

### pages[[页面名称](#页面名称)].pullDownRefresh

同 [global.pullDownRefresh](#global-pulldownrefresh)。

### pages[[页面名称](#页面名称)].rem

同 [global.rem](#global-rem)。

### pages[[页面名称](#页面名称)].pageStyle

同 [global.pageStyle](#global-pagestyle)。

### pages[[页面名称](#页面名称)].extra

同 [global.extra](#global-extra)。

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

### optimization.setDataMode

页面更新时使用的 setData 模式，默认使用优化模式：对于小范围更新使用 data path 的方式，对于大范围更新则使用全量 setData 的方式。

如果需要所有场景都使用全量 setData，可以将此项设为 `original`。

### optimization.wxssUniversalSelector

生成到 wxss 的通用选择器（* 选择器）的实现方式，支持的值：

* `taglist`：**默认值**，使用标签选择器来实现通用选择器
* `classprefix`：使用 class 属性前缀来实现通用选择器

使用 `classprefix` 值可以让输出的带通用选择器的 wxss 文件大小更小，但是因为当前小程序 wxss 支持的选择器有限，所以不是所有场景都可以使用 `classprefix` 值，比如选择器 `html > *`，使用 `classprefix` 值就会报 wxss 编译错误。

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

## packageConfigOverride

包配置，会直接覆盖掉默认的 package.json。配置此项后，[packageConfig](#packageconfig)/[generate.renderVersion](#generate-renderversion)/[generate.elementVersion](#generate-elementversion) 配置将被忽略，请慎用。

```js
// mp-webpack-plugin 配置
{
    packageConfigOverride: {
        dependencies: {
            'miniprogram-element-for-xxxx': 'test',
        },
    },
    // 其他配置...
}
```

## sitemapConfig

sitemap 配置，会被写入到项目根目录的 sitemap.json 中。

```js
// mp-webpack-plugin 配置
{
    sitemapConfig: {
		rules: [{
			action: 'allow',
			page: '*',
		}],
    },
    // 其他配置...
}
```
