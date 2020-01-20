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

<KSliderDemo/>

## 使用参数

| H5 | 小程序 | 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ---- | ---- | ------ | -------- | ---- | 
| o | o | min | number | 0 | 否 | 最小值 | 
| o | o | max | number | 100 | 否 | 最大值 | 
| o | o | step | number | 1 | 否 | 步长，取值必须大于 0，并且可被(max - min)整除 | 
| | o | disabled | boolean | false | 否 | 是否禁用 | 
| o | o | value/v-model | number | 0 | 否 | 当前取值 | 
| | o | color | color | #e9e9e9 | 否 | 背景条的颜色（请使用 backgroundColor） | 
| | o | selected-color | color | #1aad19 | 否 | 已选择的颜色（请使用 activeColor） | 
| | o | activeColor | color | #1aad19 | 否 | 已选择的颜色 | 
| | o | backgroundColor | color | #e9e9e9 | 否 | 背景条的颜色 | 
| | o | block-size | number | 28 | 否 | 滑块的大小，取值范围为 12 - 28 | 
| | o | block-color | color | #ffffff | 否 | 滑块的颜色 | 
| o | o | show-value | boolean | false | 否 | 是否显示当前 value | 
| o | o | bindchange | eventhandle |  | 否 | 完成一次拖动后触发的事件，event.detail = {value}，在 kbone-ui 中，推荐直接通过 v-model 来获取，在 H5 中暂不支持 event.detail.value 属性 | 
| o | o | bindchanging | eventhandle |  | 否 | 拖动过程中触发的事件，event.detail = {value}，同上。 | 

