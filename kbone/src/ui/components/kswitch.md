# KSwitch

开关选择器。

## 使用指南

```js
import {KSwitch} from 'kbone-ui'
```

## 示例

```html
<KSwitch v-model="switchItem" label="Switch文本" />
```

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 | 
| ---- | ---- | ------ | -------- | ---- | 
| value / v-model | boolean | - | | 是 | 是否选中 |
| disabled | boolean | false | 否 | 是否禁用 |
| bindchange | eventhandle |  | 否 | checked 改变时触发 change 事件，event.detail={ value} |
