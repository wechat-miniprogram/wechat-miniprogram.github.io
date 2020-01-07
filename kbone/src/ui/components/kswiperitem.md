# KSwiperItem

仅可放置在KSwiper组件中，宽高自动设置为100%。

## 使用指南

```js
import {KSwiperItem} from 'kbone-ui'
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
|  | o | item-id | string |  | 否 | 该 swiper-item 的标识符 |
