# KRadio

单选选择器。

## 使用指南

```js
import {KRadio} from 'kbone-ui'
```

## 示例

```html
<KRadioGroup @change="raidoChange" v-model="radioValue">
    <KRadio :value="1">微信</KRadio>
    <KRadio :value="2">微信支付</KRadio>
    <KRadio :value="3">小程序</KRadio>
</KRadioGroup>
```

## 使用参数


| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| value | string |  | 否 | radio 标识。当该 radio 选中时， radio-group 的 change 事件会携带 radio 的 value | 
| checked | boolean | false | 否 | 当前是否选中 | 
| disabled | boolean | false | 否 | 是否禁用 | 
| color | string | #09BB07 | 否 | radio的颜色，同css的color | 