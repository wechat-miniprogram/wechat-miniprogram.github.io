# KPickerViewColumn

滚动选择器子项。仅可放置于 KPickerView 中，其孩子节点的高度会自动设置成与 KPickerView 的选中框的高度一致

## 使用指南

```js
import { KPickerViewColumn } from 'kbone-ui'
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