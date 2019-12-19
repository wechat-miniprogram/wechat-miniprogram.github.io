# KSlider

滑动选择器。

## 使用指南

```js
import { KSlider } from 'kbone-ui'
```

## 示例

```html
<KSlider :show-value="true" />
```

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- | 
| min | number | 0 | 否 | 最小值 | 
| max | number | 100 | 否 | 最大值 | 
| step | number | 1 | 否 | 步长，取值必须大于 0，并且可被(max - min)整除 | 
| disabled | boolean | false | 否 | 是否禁用 | 
| value | number | 0 | 否 | 当前取值 | 
| color | color | #e9e9e9 | 否 | 背景条的颜色（请使用 backgroundColor） | 
| selected-color | color | #1aad19 | 否 | 已选择的颜色（请使用 activeColor） | 
| activeColor | color | #1aad19 | 否 | 已选择的颜色 | 
| backgroundColor | color | #e9e9e9 | 否 | 背景条的颜色 | 
| block-size | number | 28 | 否 | 滑块的大小，取值范围为 12 - 28 | 
| block-color | color | #ffffff | 否 | 滑块的颜色 | 
| show-value | boolean | false | 否 | 是否显示当前 value | 
| bindchange | eventhandle |  | 否 | 完成一次拖动后触发的事件，event.detail = {value} | 
| bindchanging | eventhandle |  | 否 | 拖动过程中触发的事件，event.detail = {value} | 