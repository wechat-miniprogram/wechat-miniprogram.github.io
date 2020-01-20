# KScrollView

可滚动视图区域。使用竖向滚动时，需要通过 CSS 给 scroll-view 一个固定高度。

## 使用指南

```js
import { KScrollView } from 'kbone-ui'
```

## 示例

```html
<KSlider scroll-y style="height: 100px" />
```

## 使用参数

| H5 | 小程序 | 属性 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | ---- | ---- | ------ | -------- | ---- |
| o | o | scroll-x | boolean | false | 否 | 允许横向滚动 |
| o | o | scroll-y | boolean | false | 否 | 允许纵向滚动 |
| o | o | upper-threshold | number/string | 50 | 否 | 距顶部/左边多远时，触发 scrolltoupper 事件。默认单位为 px ，在 H5 中仅能使用 px 单位，在小程序中还可以使用 rpx |
| o | o | lower-threshold | number/string | 50 | 否 | 距顶部/左边多远时，触发 scrolltoupper 事件。默认单位为 px ，在 H5 中仅能使用 px 单位，在小程序中还可以使用 rpx |
| o | o | scroll-top | number/string | 50 | 否 | 设置竖向滚动条位置。默认单位为 px ，在 H5 中仅能使用 px 单位，在小程序中还可以使用 rpx |
| o | o | scroll-left | number/string | 50 | 否 | 设置横向滚动条位置。默认单位为 px ，在 H5 中仅能使用 px 单位，在小程序中还可以使用 rpx |
| o | o | scroll-into-view | number/string | 50 | 否 | 值应为某子元素 id （ id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |
| o | o | scroll-with-animation | boolean | false | 否 | 在设置滚动条位置时使用动画过渡 |
| o | o | bindscrolltoupper | eventhandle | | 否 | 滚动到顶部/左边时触发 |
| o | o | bindscrolltolower | eventhandle | | 否 | 滚动到底部/右边时触发 |
| o | o | bindscroll | eventhandle | | 否 | 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY} |
