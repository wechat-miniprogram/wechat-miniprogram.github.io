# KButton

按钮。默认是占一行的，可以结合 KButtonArea 来控制 Button 的横纵排列。


## 使用指南

```js
import {KButton} from 'kbone-ui'
```

## 示例

```html
 <KButtonArea>
    <KButton type="primary" >页面主要操作</KButton>
    <KButton type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" getUserInfo </KButton>
    <KButton type="primary" :loading="true">零度的田</KButton>
    <KButton type="primary" :disabled="true">小程序开发</KButton>
    <KButton >页面次要操作</KButton>
    <KButton type="warn">警告类操作</KButton>
    <KButton type="warn" :loading="true">警告类操作</KButton>
    <KButton type="warn" :disabled="true">警告类操作</KButton>
</KButtonArea>
```

<KButtonDemo />

## 使用参数

|H5|小程序|属性|类型|默认值|必填|说明|
|---|---|---|---|---|---|---|
| o | o |size|string|default|否|按钮的大小|
| o | o |type|string|default|否|按钮的样式类型|
| o | o |plain|boolean|false|否|按钮是否镂空，背景色透明|
| o | o |disabled|boolean|false|否|是否禁用|
| o | o |loading|boolean|false|否|名称前是否带 loading 图标|
|  | o |form-type|string||否|用于 form 组件，点击分别会触发 form 组件的 submit/reset 事件|
|  | o |open-type|string||否|微信开放能力|
|  | o |hover-class|string|button-hover|否|指定按钮按下去的样式类。当 hover-class="none" 时，没有点击态效果|
|  | o |hover-stop-propagation|boolean|false|否|指定是否阻止本节点的祖先节点出现点击态|
|  | o |hover-start-time|number|20|否|按住后多久出现点击态，单位毫秒|
|  | o |hover-stay-time|number|70|否|手指松开后点击态保留时间，单位毫秒|
|  | o |lang|string|en|否|指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。|
|  | o |session-from|string||否|会话来源，open-type="contact"时有效|
|  | o |send-message-title|string|当前标题|否|会话内消息卡片标题，open-type="contact"时有效|
|  | o |send-message-path|string|当前分享路径|否|会话内消息卡片点击跳转小程序路径，open-type="contact"时有效|
|  | o |send-message-img|string|截图|否|会话内消息卡片图片，open-type="contact"时有效|
|  | o |app-parameter|string||否|打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效|
|  | o |show-message-card|boolean|false|否|是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，open-type="contact"时有效|
|  | o |bindgetuserinfo|eventhandle||否|用户点击该按钮时，会返回获取到的用户信息，回调的detail数据与wx.getUserInfo返回的一致，open-type="getUserInfo"时有效|
|  | o |bindcontact|eventhandle||否|客服消息回调，open-type="contact"时有效|
|  | o |bindgetphonenumber|eventhandle||否|获取用户手机号回调，open-type=getPhoneNumber时有效|
|  | o |binderror|eventhandle||否|当使用开放能力时，发生错误的回调，open-type=launchApp时有效|
|  | o |bindopensetting|eventhandle||否|在打开授权设置页后回调，open-type=openSetting时有效|
|  | o |bindlaunchapp|eventhandle||否|打开 APP 成功的回调，open-type=launchApp时有效|


**size 的合法值**

| 值 | 说明 | 最低版本 |
| -- | ---- | ---- |
| default | 默认大小 |  |
| mini | 小尺寸 |  |

**type 的合法值**

| 值 | 说明 | 最低版本 |
| -- | ---- | ---- |
| primary | 绿色 |  |
| default | 白色 |  |
| warn | 红色 |  |

**form-type 的合法值**

| 值 | 说明 | 最低版本 |
| -- | ---- | ---- |
| submit | 提交表单 |  |
| reset | 重置表单 |  |


更多属性，请参考[小程序 button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)。

## Bug & Tip

1. `tip`: `button-hover` 默认为`{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`
1. `tip`: `bindgetphonenumber` 从1.2.0 开始支持，但是在1.5.3以下版本中无法使用 wx.canIUse 进行检测，建议使用基础库版本进行判断。
1. `tip`: 在`bindgetphonenumber` 等返回加密信息的回调中调用 wx.login 登录，可能会刷新登录态。此时服务器使用 code 换取的 sessionKey 不是加密时使用的 sessionKey，导致解密失败。建议开发者提前进行 `login`；或者在回调中先使用 `checkSession` 进行登录态检查，避免 `login` 刷新登录态。
1. `tip`: 从 2.1.0 起，button 可作为原生组件的子节点嵌入，以便在原生组件上使用 `open-type` 的能力。
1. `tip`: 目前设置了 `form-type` 的 `button` 只会对当前组件中的 `form` 有效。因而，将 `button` 封装在自定义组件中，而 `from` 在自定义组件外，将会使这个 `button` 的 `form-type` 失效。
