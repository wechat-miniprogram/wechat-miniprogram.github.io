# KToptips

顶部消息通知。

## 使用指南

```js
import { KToptips } from 'kbone-ui'
```

## 示例

```html
<KToptips v-model="infoShow" type="info" :duration="1000">
    提示
</KToptips>
```

<KToptipsDemo/>

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 | 
| ---- | ---- | ------ | -------- | ---- |
| value/v-model | boolean | false | 是 | 顶部消息通知显示控制器 | 
| type | string | success | 否 | 顶部消息通知类型，可选项有 success、error、info | 
| duration | number |  | 否 | 自动关闭时长，不填则不会自动关闭 | 