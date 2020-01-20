# KSwiper

滑块视图容器。其中只可放置一级 swiper-item 组件，否则会导致未定义的行为。

## 使用指南

```js
import {KSwiper} from 'kbone-ui'
```

## 实例

```html
<KSwiper
  :indicator-dots="indicatorDots"
  :circular="circularFlag"
  :autoplay="autoplay"
  :duration="duration"
  :interval="interval"
>
  <KSwiperItem
    v-for="(item,index) in background"
    :key="index" >
    <KView :class="'swiper-item '+ item"/>
  </KSwiperItem>
</KSwiper>
```




## 使用参数

| H5 | 小程序 | 属性 | 类型 | 默认值 | 必填 | 说明 | 
| --- | --- | ---- | ---- | ------ | -------- | ---- |
| o | o | current/v-model | number | 0 | 否 | 当前所在滑块的 index, 推荐直接使用 v-model 监听值的改变 |
| o | o | autoplay | boolean | false | 否 | 是否自动切换 |  
| o | o | interval | number | 5000 | 否 | 自动切换时间间隔 | 
| o | o | duration | number | 500 | 否 | 滑动动画时长 | 
| o | o | circular | boolean | false | 否 | 是否采用衔接滑动 | 
|  | o | vertical | boolean | false | 否 | 滑动方向是否为纵向 | 
| o | o | indicator-dots | boolean | false | 否 | 是否显示面板指示点 | 
|  | o | indicator-color | color | rgba(0, 0, 0, .3) | 否 | 指示点颜色 | 
|  | o | indicator-active-color | color | #000000 | 否 | 当前选中的指示点颜色 | 
|  | o | previous-margin | string | "0px" | 否 | 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值 | 
|  | o | next-margin | string | "0px" | 否 | 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值 | 
|  | o | display-multiple-items | number | 1 | 否 | 同时显示的滑块数量 | 
|  | o | skip-hidden-item-layout | boolean | false | 否 | 是否跳过未显示的滑块布局，设为 true 可优化复杂情况下的滑动性能，但会丢失隐藏状态滑块的布局信息 | 
|  | o | easing-function | string | "default" | 否 | 指定 swiper 切换缓动动画类型 | 
| o | o | bindchange | eventhandle |  | 否 | current 改变时会触发 change 事件，event.detail = {current, source} | 
|  | o | bindtransition | eventhandle |  | 否 | swiper-item 的位置发生改变时会触发 transition 事件，event.detail = {dx: dx, dy: dy} | 
|  | o | bindanimationfinish | eventhandle |  | 否 | 动画结束时会触发 animationfinish 事件，event.detail 同上 | 


**easing-function 的合法值**

| 值 | 说明 | 最低版本 |
| -- | ---- | ---- |
| default | 默认缓动函数 |  |
| linear | 线性动画 |  |
| easeInCubic | 缓入动画 |  |
| easeOutCubic | 缓出动画 |  |
| easeInOutCubic | 缓入缓出动画 |  |