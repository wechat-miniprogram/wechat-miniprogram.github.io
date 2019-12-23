# KRadioGroup

单项选择器，内部由多个 radio 组成。

## 使用指南

```
import {KRadioGroup} from 'kbone-ui'
```

## 示例

```
<KRadioGroup @change="raidoChange" v-model="radioValue">
    <KRadio :value="1">微信</KRadio>
    <KRadio :value="2">微信支付</KRadio>
    <KRadio :value="3">小程序</KRadio>
</KRadioGroup>
```

<KFormDemo></KFormDemo>

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- | -------- |
| value/v-model | string/number |  | 否 | radio 标识。当该 radio 选中时， radio-group 的 change 事件会携带 radio 的 value | 
| change | EventHandle |  | 否 | radio-group 中选中项发生改变时触发 change 事件，detail = {value:选中的 radio 的 value} | 

