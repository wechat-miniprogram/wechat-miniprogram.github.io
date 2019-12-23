# KActionSheet

弹出式菜单。

## 使用指南

```js
import { KActionSheet } from 'kbone-ui'
```

## 示例

```html
 <KActionSheet
            :actions="['villainhr','小程序']"
            label="选择你的名字"
            v-model="isShowTitle"
            :actionClick='actionChoose'
        />
```
<KActionSheetDemo/>


## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| value/v-model | string |  | 是 | kactionsheet 的选中值。当选中时， 会默认切换为当前的 value 内容 | 
| actions | `Array<string>` | [] | 是 | 当前 kactionsheet 的展示内容 | 
| label | string |  | 否 | kactionsheet 带有 title 的展示内容 | 
| click | eventhandler |  | 否 | 当选中 item 的事件回调 | 
