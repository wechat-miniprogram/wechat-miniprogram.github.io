# KInput

输入框

## 使用指南

```js
import {KInput} from 'kbone-ui'
```

## 示例

```html
<KInput label="卡号" @change="inputChange" v-model="inputCardValue" placeholder="填写本人卡号" clearable/>
<KInput label="昵称" @change="inputChangv-model="inputNickName" placeholder="填写信号的昵称" clearable/>
```

## 使用参数

| H5 | 小程序 | 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ---- | ---- | ------ | -------- | ---- |
| o | o | value/v-model | string |  | 是 | 输入框的初始内容 | 
| o | o | type | string | text | 否 | input 的类型 | 
| o | o | password | boolean | false | 否 | 是否是密码类型 | 
| o | o | placeholder | string |  | 是 | 输入框为空时占位符 | 
|  | o | placeholder-style | string |  | 是 | 指定 placeholder 的样式 | 
|  | o | placeholder-class | string | input-placeholder | 否 | 指定 placeholder 的样式类 | 
| o | o | disabled | boolean | false | 否 | 是否禁用 | 
|  | o | maxlength | number | 140 | 否 | 最大输入长度，设置为 -1 的时候不限制最大长度 | 
|  | o | cursor-spacing | number | 0 | 否 | 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 | 
|  | o | auto-focus | boolean | false | 否 | (即将废弃，请直接使用 focus )自动聚焦，拉起键盘 | 
| o | o | focus | boolean | false | 否 | 获取焦点 | 
|  | o | confirm-type | string | done | 否 | 设置键盘右下角按钮的文字，仅在type='text'时生效 | 
|  | o | confirm-hold | boolean | false | 否 | 点击键盘右下角按钮时是否保持键盘不收起 | 
|  | o | cursor | number |  | 是 | 指定focus时的光标位置 | 
|  | o | selection-start | number | -1 | 否 | 光标起始位置，自动聚集时有效，需与selection-end搭配使用 | 
|  | o | selection-end | number | -1 | 否 | 光标结束位置，自动聚集时有效，需与selection-start搭配使用 | 
|  | o | adjust-position | boolean | true | 否 | 键盘弹起时，是否自动上推页面 | 
|  | o | hold-keyboard | boolean | false | 否 | focus时，点击页面的时候不收起键盘 | 
| o | o | input | eventhandle |  | 是 | 键盘输入时触发，event.detail = {value, cursor, keyCode}，keyCode 为键值，2.1.0 起支持，处理函数可以直接 return 一个字符串，将替换输入框的内容。 | 
| o | o | focus | eventhandle |  | 是 | 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度，在基础库 1.9.90 起支持 | 
| o | o | blur | eventhandle |  | 是 | 输入框失去焦点时触发，event.detail = {value: value} | 
|  | o | confirm | eventhandle |  | 是 | 点击完成按钮时触发，event.detail = {value: value} | 
|  | o | keyboardheightchange | eventhandle |  | 是 | 键盘高度发生变化的时候触发此事件，event.detail = {height: height, duration: duration} | 