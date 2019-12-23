# KButtonArea

按钮的包裹区域，可以用来控制当前 KButton 的排列方向。

## 使用指南

```js
import {KButtonArea} from 'kbone-ui'
```

## 示例

```html
 <KButtonArea>
    <KButton type="primary" >页面主要操作</KButton>
    <KButton type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo" getUserInfo </KButton>
    <KButton type="primary" :loading="true">Loading</KButton>
    <KButton type="primary" :disabled="true">禁止点击</KButton>
    <KButton >页面次要操作</KButton>
    <KButton type="warn">警告类操作</KButton>
    <KButton type="warn" :loading="true">警告类操作</KButton>
    <KButton type="warn" :disabled="true">警告类操作</KButton>
</KButtonArea>
```
<KButtonDemo />

## 使用参数

|属性|类型|默认值|必填|说明|
|---|---|---|---|---|
|direction|string|vertical|否|用来控制 KButton 的显示方向|


**direction 合法值**

|值|说明|
|---|---|
|vertical|垂直排列|
|horizontal|水平排列|
