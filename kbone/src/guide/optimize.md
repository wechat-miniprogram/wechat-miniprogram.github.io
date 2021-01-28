# 开发建议与代码优化

## 代码体积精简

### 使用 webpack 的代码剔除能力

可能存在部分逻辑在 web 端和小程序端需要使用不同的实现，该部分代码可以抽离成一个单独的模块或者插件，暴露接口给业务端代码使用。在模块内可以使用上述提到的 `process.env.isMiniprogram` 环境变量进行判断区分当前运行环境。比如上述提到的 actionSheet 实现就可以抽离成一个 vue 插件实现。

> PS：注意这里使用 process.env.isMiniprogram 环境变量时尽量不要加其他动态条件，以方便 webpack 编译时剪除死代码，比如 `if (false) { console.log('xxxx') }` 就属于死代码

```js
// 正确使用方式
if (!process.env.isMiniprogram) {
    // web 端
    if (isIPhone) {
        // do something
    }
}

// 错误使用方式
if (!process.env.isMiniprogram && isIPhone) {
    // web 端
    // do something
}
```

### 删除不需要的依赖

在编译到小程序代码的时候，会将整个 vue runtime 和一些 vue 特性插件（如 vue-router、vuex 等）给打包进来，这样会导致代码包比较庞大，而这些代码是无法去除的，因此得从业务代码上着手进行一些缩减。业务上存在一些代码可以用小程序接口替代，这部分是完全不需要打包进来的，因此可以使用一个行内 loader 和环境变量来进行代码的去除，简单做法如下：

```
npm install --save-dev reduce-loader
```

```js
import Vue from 'vue'
import ActionSheet from 'reduce-loader!./action-sheet' // 使用行内 loader，剔除 action-sheet 文件的引入

// 通过注入的环境变量判断代码运行环境，进而执行不同的逻辑
if (!process.env.isMiniprogram) {
    // web 端
    ActionSheet.show([1, 2, 3], success)
} else {
    // 小程序端
    wx.showActionSheet({
        itemList: [1, 2, 3],
        success,
    })
}
```

### 第三方库依赖调整

如果因业务需要使用第三方库，尽量选择使用轻量的库，以缩减构建出来的代码体积。

## dom 树的精简

对于一些站点会使用响应式设计，即 pc 端和 h5 端会共用一套代码，通常 pc 端很多节点在 h5 端是不需要展示出来的，这就需要在样式上对节点设置 `display: none`，而这些节点仍旧存在于 dom 树上，只是不渲染在视图上。如果这套代码直接转成小程序代码，也必定会创建一些无需展示的 dom 节点，这些节点本身是可以直接剔除。

因此可以使用另外一个 loader 对这些节点进行删减，在 webpack 配置中 vue loader 执行之前再添加一个 `vue-improve-loader`：

```
npm install --save-dev vue-improve-loader
```

```js
{
    test: /\.vue$/,
    use: [
        {
            loader: 'vue-loader',
            options: {
                compilerOptions: {
                    preserveWhitespace: false
                }
            }
        },
        'vue-improve-loader',
    ]
},
```

然后在 vue 文件中给要剔除的节点加上 check-reduce 属性：

```html
<!-- 删减前代码 -->
<template>
    <div>
        <span>some text</span>
        <a check-reduce>
            <span>some text other</span>
        </a>
    </div>
</template>
```

因为 web 端代码构建和小程序端代码构建走不同的配置，所以 web 端代码会忽略这个属性，而小程序端代码则会删减掉带这个属性的节点。以下便是会输出给 vue-loader 的代码，从构建层面上剔除掉不需要的节点。

```html
<!-- 删减后代码 -->
<template>
    <div>
        <span>some text</span>
    </div>
</template>
```

> PS：vue-improve-loader 必须在 vue-loader 之前执行，这样 vue-loader 才会接收到被删减后的代码。

## 处理频繁更新的 dom 节点

小程序的组件更新是以小程序为维度的，默认 10 层 dom 节点开一个自定义组件。

自定义组件里任意一部分更新，都会 diff 整棵自定义组件树，所以如果遇到频繁更新的部分，可以考虑使用 wx-view 组件强制开一个自定义组件，以减小每次更新的 diff 范围，优化性能：

```html
<div>
    <wx-view>
        <!-- 这里面的内容会被包含在一个自定义组件里面 -->
        <div></div>
        <div></div>
        <div></div>
    </wx-view>
</div>
```

## 小程序扩展库

小程序支持了[扩展库功能](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#useExtendedLib)，使用小程序扩展库可以不占用小程序包体积。扩展库目前已内置了 kbone 的 miniprogram-render 和 miniprogram-element 核心依赖库，在 mp-webpack-plugin 配置中补充如下配置即可使用：

```js
module.exports = {
    generate: {
        autoBuildNpm: false,
    },
    appExtraConfig: {
        useExtendedLib: {
            kbone: true,
        },
    },
    // ... other options
}
```

> PS：如果使用扩展库，需要将 [generate.autoBuildNpm](../config/#generate-autobuildnpm) 置为 false，这两个配置暂不支持同时使用。

> PS：因为 kbone 迭代较快，扩展库的版本会稍微落后于 npm 上最新版本，使用时敬请注意。

## 属性值的设置

一般 dom 属性值只支持字符串，但是小程序的内置组件/自定义组件的属性值可能是布尔值、数值、对象或数组等。

### 布尔值

部分属性值默认为 true，但是想要设置为 false，可能会让 Web 框架误以为要删除此属性导致无法应用上该属性值，所以标签上布尔值属性建议使用 = 号赋值或者使用布尔值对应字符串的写法：

```html
<!-- 常规写法 -->
<input type="checkbox" checked="checked" />

<!-- 传入布尔值 -->
<input type="checkbox" :checked="true" />

<!-- 布尔值对应的字符串写法 -->
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
```

### 数值

直接传入即可。

### 对象/数组

大部分 Web 框架直接传入即可，遇到一些会强行将值转为字符串的 Web 框架（比如 react），所以也可以将对象值转为 json 串传入：

```js
{
    data: {
        a: {num: 123},
        b: JSON.stringify({num: 123}),
    }
}
```

```html
<!-- 直接传对象 -->
<wx-xxx :data="a"></wx-xxx>

<!-- 传序列化成字符串的对象 -->
<wx-xxx :data="b"></wx-xxx>
```

## css 选择器的使用

避免使用 id 选择器、属性选择器，尽量少用标签选择器和 * 选择器，尽可能使用 class 选择器代替。

## dom/bom 扩展

虽然此方案将完整的 Web 框架 runtime 包含进来了，但必然存在一些无法直接适配的接口，比如 getBoundingClientRect，一部分会通过 dom/bom 扩展 api 间接实现，一部分则完全无法支持。**[查看 dom/bom 扩展 api 文档](../domextend/)**。
