# KCheckbox

多选项目，一般结合 KCheckboxGroup 一起使用。

## 使用指南

```
import {KCheckbox} from 'kbone-vue-weui'
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
| ---- | ---- | ------ | -------- | ---- |
| value/v-model | string |  | 否 | checkbox 标识，选中时触发 checkbox-group 的 change 事件，并携带 checkbox  的 value | 
| disabled | boolean | false | 否 | 是否禁用 | 
| checked | boolean | false | 否 | 当前是否选中，可用来设置默认选中 | 
| color | string | #09BB07 | 否 | checkbox的颜色，同css的color | 