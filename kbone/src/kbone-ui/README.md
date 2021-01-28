# kbone-ui

## 简介

`kbone-ui` 是一个支持在 Web 端使用小程序内置组件和 weui 组件的 UI 库。

kbone 在小程序端支持了[内置组件](../guide/advanced.html#使用小程序内置组件)和 [weui 组件库](../guide/advanced.html#ui-库)的使用，但是这些是小程序端的特性，在 Web 端不可使用。为了磨平这块内容而提供了 kbone-ui 库。通过，kbone-ui 来磨平大部分的组件实现差异，方便跨端同构。

## 版本

kbone-ui 目前有两个实现版本，版本间无法兼容，建议直接使用 1.x 版本。

```
npm install kbone-ui
```

* 1.x 版本：基于 Web Components 实现，无框架依赖，支持更完整的组件列表
* 0.x 版本：基于 vue 实现，可通过 `npm install kbone-ui@core-v0` 安装，[文档请看这里](../ui/intro/)

## 使用

使用方式非常简单，开发者仅需要在 Web 端代码入口处引入 kbone-ui 并注册即可：

```js
import KBoneUI from 'kbone-ui'

KBoneUI.register()
```

默认引入内置组件和 weui 组件的完整内容，如果需要只需要包含内置组件的裁剪版 kbone-ui，可按如下引入：

```js
import KBoneUI from 'kbone-ui/wx-components' // 只引入内置组件

KBoneUI.register()
```

之后便可像使用 dom 组件那样直接使用内置组件/ weui 组件：

```html
<!-- 内置组件 -->
<wx-picker>test</wx-picker>

<!-- weui 组件 -->
<mp-dialog>test</mp-dialog>
```

> PS：具体例子可参考 [demo27（内置组件）](https://github.com/wechat-miniprogram/kbone/tree/develop/examples/demo27) 和 [demo28（weui 组件）](https://github.com/wechat-miniprogram/kbone/tree/develop/examples/demo28)

## API

### register

注册 kbone-ui。

| 参数 | 类型 | 默认值 | 描述 |
|---|---|---|---|
| components | Array/String | all | 需要注册的组件列表，支持数组传入列表，也支持字符串 `all`，表示注册所有组件 |
| style | Object | {} | 需要注入到组件内部的样式 |
| domExtend | Boolean | true | dom/bom 扩展 API |

## 支持情况

### 内置组件

内置组件对齐基础库 2.14.0 版本。

| 组件 | <div style="width: 70px;">支持情况</div> | 备注 |
|:-:|:-:|---|
| wx-cover-image | <div style="color: #888">不支持</div> | 请使用 img 标签代替 |
| wx-cover-view | <div style="color: #888">不支持</div> | 请使用 div 标签代替 |
| wx-match-media | <div style="color: #888">不支持</div> | |
| wx-movable-area | <div style="color: #3a8e3a">完全支持</div> | |
| wx-movable-view | <div style="color: #3a8e3a">完全支持</div> | |
| wx-scroll-view | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>enable-back-to-top</li><li>scroll-anchoring</li><li>enhanced</li><li>bounces</li><li>show-scrollbar</li><li>paging-enabled</li><li>fast-deceleration</li></ul><br/>以下事件不支持：<ul><li>dragstart</li><li>dragging</li><li>dragend</li></ul> |
| wx-swiper | <div style="color: #3a8e3a">完全支持</div> | |
| wx-swiper-item | <div style="color: #3a8e3a">完全支持</div> | |
| wx-view | <div style="color: #3a8e3a">完全支持</div> | **不建议使用**，请使用 div 标签代替 |
| wx-icon | <div style="color: #3a8e3a">完全支持</div> | |
| wx-progress | <div style="color: #3a8e3a">完全支持</div> | |
| wx-rich-text | <div style="color: #3a8e3a">完全支持</div> | |
| wx-text | <div style="color: #3a8e3a">完全支持</div> | **不建议使用**，请使用 span 标签代替 |
| wx-button | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>open-type</li><li>lang</li><li>session-from</li><li>send-message-title</li><li>send-message-path</li><li>send-message-img</li><li>app-parameter</li><li>show-message-card</li></ul><br/>以下事件不支持：<ul><li>getuserinfo</li><li>contact</li><li>getphonenumber</li><li>error</li><li>opensetting</li><li>launchapp</li></ul> |
| wx-checkbox | <div style="color: #3a8e3a">完全支持</div> | |
| wx-checkbox-group | <div style="color: #3a8e3a">完全支持</div> | |
| wx-editor | <div style="color: #888">不支持</div> | |
| wx-form | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>report-submit</li><li>report-submit-timeout</li></ul> |
| wx-input | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>cursor-spacing</li><li>confirm-type</li><li>always-embed</li><li>adjust-position</li><li>hold-keyboard</li></ul><br/>以下事件不支持：<ul><li>keyboardheightchange</li></ul> |
| wx-label | <div style="color: #3a8e3a">完全支持</div> | |
| wx-picker | <div style="color: #3a8e3a">完全支持</div> | |
| wx-picker-view | <div style="color: #3a8e3a">完全支持</div> | |
| wx-picker-view-column | <div style="color: #3a8e3a">完全支持</div> | |
| wx-radio | <div style="color: #3a8e3a">完全支持</div> | |
| wx-radio-group | <div style="color: #3a8e3a">完全支持</div> | |
| wx-slider | <div style="color: #3a8e3a">完全支持</div> | |
| wx-switch | <div style="color: #3a8e3a">完全支持</div> | |
| wx-textarea | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>cursor-spacing</li><li>show-confirm-bar</li><li>adjust-position</li><li>hold-keyboard</li><li>disable-default-padding</li><li>confirm-type</li></ul><br/>以下事件不支持：<ul><li>keyboardheightchange</li></ul> |
| wx-functional-page-navigatore | <div style="color: #888">不支持</div> | |
| wx-navigator | <div style="color: #888">不支持</div> | 请使用 a 标签代替 |
| wx-audio | <div style="color: #888">不支持</div> | 官方已废弃 |
| wx-camera | <div style="color: #888">不支持</div> | |
| wx-image | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>show-menu-by-longpress</li></ul> |
| wx-live-player | <div style="color: #888">不支持</div> | |
| wx-live-pusher | <div style="color: #888">不支持</div> | |
| wx-video | <div style="color: #888">不支持</div> | |
| wx-voip-room | <div style="color: #888">不支持</div> | |
| wx-map | <div style="color: #888">不支持</div> | |
| wx-canvas | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>canvas-id（旧版 canvas 官方已不再维护，建议使用新版 canvas）</li></ul> |
| wx-ad | <div style="color: #888">不支持</div> | |
| wx-ad-custom | <div style="color: #888">不支持</div> | |
| wx-official-account | <div style="color: #888">不支持</div> | |
| wx-open-data | <div style="color: #888">不支持</div> | |
| wx-web-view | <div style="color: #888">不支持</div> | |

### weui 组件

weui 组件对齐 npm 上 1.0.7 版本。

| 组件 | <div style="width: 70px;">支持情况</div> | 备注 |
|:-:|:-:|---|
| mp-badge | <div style="color: #3a8e3a">完全支持</div> | |
| mp-gallery | <div style="color: #3a8e3a">完全支持</div> | |
| mp-loading | <div style="color: #3a8e3a">完全支持</div> | |
| mp-icon | <div style="color: #3a8e3a">完全支持</div> | |
| mp-form | <div style="color: #3a8e3a">完全支持</div> | |
| mp-form-page | <div style="color: #3a8e3a">完全支持</div> | |
| mp-cell | <div style="color: #3a8e3a">完全支持</div> | |
| mp-cells | <div style="color: #3a8e3a">完全支持</div> | |
| mp-checkbox-group | <div style="color: #3a8e3a">完全支持</div> | |
| mp-checkbox | <div style="color: #3a8e3a">完全支持</div> | |
| mp-slideview | <div style="color: #3a8e3a">完全支持</div> | |
| mp-uploader | <div style="color: #4646cc">部分支持</div> | 以下属性不支持：<ul><li>size-type</li><li>source-type</li></ul><br/>以下事件不支持：<ul><li>cancel</li></ul> |
| mp-dialog | <div style="color: #3a8e3a">完全支持</div> | |
| mp-msg | <div style="color: #3a8e3a">完全支持</div> | |
| mp-toptips | <div style="color: #3a8e3a">完全支持</div> | |
| mp-half-screen-dialog | <div style="color: #3a8e3a">完全支持</div> | |
| mp-actionsheet | <div style="color: #3a8e3a">完全支持</div> | |
| mp-navigation-bar | <div style="color: #3a8e3a">完全支持</div> | |
| mp-tabbar | <div style="color: #3a8e3a">完全支持</div> | |
| mp-searchbar | <div style="color: #3a8e3a">完全支持</div> | |
| mp-grids | <div style="color: #3a8e3a">完全支持</div> | |

### dom/bom 扩展 API

有些接口无法在小程序中直接模拟出来，所以 kbone 提供了一些在 Web 端不存在的扩展接口给小程序使用。为了对齐这些扩展接口，kbone-ui 也同步实现了一套允许其在 Web 端使用。

#### 组件

| 组件 | <div style="width: 70px;">支持情况</div> | 备注 |
|:-:|:-:|---|
| wx-capture | <div style="color: #3a8e3a">完全支持</div> | |
| wx-catch | <div style="color: #3a8e3a">完全支持</div> | |
| wx-animation | <div style="color: #3a8e3a">完全支持</div> | |

#### 接口

| 接口 | <div style="width: 70px;">支持情况</div> | 备注 |
|---|:-:|---|
| window.$$getComputedStyle | <div style="color: #3a8e3a">完全支持</div> | |
| window.$$forceRender | <div style="color: #3a8e3a">完全支持</div> | 在 Web 端是一个空函数 |
| dom.$$getBoundingClientRect | <div style="color: #3a8e3a">完全支持</div> | |
| canvas.$$prepare | <div style="color: #3a8e3a">完全支持</div> | |

## 在线 demo

<div style="display: flex; width: 100%; padding: 40px 0; align-items: center; flex-direction: column;">
    <img src="../images/wx-components.png" width="300" height="300" alt="内置组件" />
    <span style="margin-top: 10px; font-size: 20px;">内置组件 demo</span>
</div>

<div style="display: flex; width: 100%; padding: 40px 0; align-items: center; flex-direction: column;">
    <img src="../images/weui.png" width="300" height="300" alt="weui 组件" />
    <span style="margin-top: 10px; font-size: 20px;">weui 组件 demo</span>
</div>
