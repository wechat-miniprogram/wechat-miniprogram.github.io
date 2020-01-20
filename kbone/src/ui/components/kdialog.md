# KDialog

弹窗组件。

## 使用指南

```js
import { KDialog } from 'kbone-ui'
```

## 示例

```html
<KDialog
  v-model="diaShow"
  :buttons="diaBtn"
  title="零度的田"
  desc="弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内"
/>

<script>
export default {
    data() {
        return {
            diaShow: false,
            diaBtn: [
                {
                    text: '确定',
                    click: () => {
                        console.log('确定')
                        this.diaShow = false
                    }
                }
            ],
        }
    }
}
</script>
```

<KDialogDemo/>


## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 | 
| ---- | ---- | ------ | -------- | ---- | 
| v-model | boolean | false | 否 | 是否暂时弹窗 |
| title | string | - | | 否 | 弹窗的标题 |
| desc | string | - | | 否 | 弹窗的内容 |
| cancel | eventhandle |  | 否 | 弹窗关闭时，触发的事件 |
| buttons | `array<object>` | [] | | 否 | 底部的按钮组，建议最多提供两个按钮 |
