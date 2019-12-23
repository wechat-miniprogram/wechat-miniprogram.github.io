# KPickerView

嵌入页面的滚动选择器。其中只可放置 KPickerViewColumn 组件，并且必须和 KPickerViewColumn 为父子组件。


## 使用指南

```js
import { KPickerView } from 'kbone-ui'
```

## 示例

```html
<KPickerView indicator-style="height: 50px;" style="width: 100%; height: 300px;" @change="changeIndex">
            <KPickerViewColumn>
                <KView v-for="(item,index) in singleData" style="line-height: 50px;" :key="index" >
                    {{item}}
                </KView>
            </KPickerViewColumn>
</KPickerView>
```

<KPickerDemo/>


## 使用参数

| H5 | 小程序 |属性|类型|默认值|必填|说明| 
|---|---|---|---|---|---|---|
| o | o |value/v-model|`Array.<number>`||否|数组中的数字依次表示 picker-view 内的 picker-view-column 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。|
|  | o |indicator-style|string||否|设置选择器中间选中框的样式|
|  | o |indicator-class|string||否|设置选择器中间选中框的类名|
|  | o |mask-style|string||否|设置蒙层的样式|
|  | o |mask-class|string||否|设置蒙层的类名|
|  | o |change|eventhandle||否|滚动选择时触发change事件，event.detail = {value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）|
|  | o |pickstart|eventhandle||否|当滚动选择开始时候触发事件|
|  | o |pickend|eventhandle||否|当滚动选择结束时候触发事件|

