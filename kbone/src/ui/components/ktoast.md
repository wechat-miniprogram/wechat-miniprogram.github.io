# KToast

简单的浮窗提示。通常用来作为时间点击的 Loading 和 完成反馈。

## 使用指南

```js
import { KToast } from 'kbone-ui'
```

## 示例

```html
<KToast
    type="loading"
    v-model="loadingToast"
>加载中提示</KToast>
```

<KToastDemo></KToastDemo>


## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 | 
| ---- | ---- | ------ | -------- | ---- |
| value/v-model | boolean | false | 是 | 浮窗提示显示控制器 | 
| type | string | success | 否 | 浮窗提示类型，可选项有 success、loading、warn、info | 
| duration | number |  | 否 | 自动关闭时长，不填则不会自动关闭 | 