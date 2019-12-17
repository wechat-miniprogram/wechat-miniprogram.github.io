# KCheckboxGroup

多项选择器，内部由多个checkbox组成。

## 使用指南

```
import {KCheckboxGroup} from 'kbone-vue-weui'
```

## 示例

```
<KCheckboxGroup @change="handleChange" v-model="checkboxGrpValues">
    <KCheckbox value="零度的田">零度的田</KCheckbox> 
    <KCheckbox value="小程序开发">小程序开发</KCheckbox> 
</KCheckboxGroup>
```

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- | -------- |
| value/v-model | string/number |  | 否 | checkbox 标识。当该 checkbox 选中时， checkbox-group 的 change 事件会携带 checkbox 的 value | 
| change | EventHandle |  | 否 | checkbox-group 中选中项发生改变时触发 change 事件，detail = {value:[选中的 checkbox 的 value 数据]} | 