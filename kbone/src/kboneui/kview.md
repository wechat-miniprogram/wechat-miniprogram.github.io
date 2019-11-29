# KView

视图容器

## 使用指南

```
import {KView} from 'kbone-vue-weui'
```

## 示例

```
<KView class="extra_class">kboneui</KView>
```

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 | 
| ---- | ---- | ------ | -------- | ---- | 
| hover-class | string | none | 否 | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 | 
| hover-stop-propagation | boolean | false | 否 | 指定是否阻止本节点的祖先节点出现点击态 |
| hover-start-time | number | 50 | 否 | 按住后多久出现点击态，单位毫秒 | 
| hover-stay-time | number | 400 | 否 | 手指松开后点击态保留时间，单位毫秒 | 

