# KCells

KCells是列表分组，常用于嵌套一组 KCell 或者 KCheckbox.

## 使用指南

```js
import {KCells} from 'kbone-ui'
```

## 实例

```html
 <KCells title="带说明的列表项">
        <KCell
          value="标题文字"
          footer="说明文字" />
        <KCell
          title="带图标"
          footer="说明文字">
          <KIcon
            slot="icon"
            type="info" />
        </KCell>
    </KCells>
```

## 使用参数

| 属性 | 类型 | 默认值 | 必填 | 说明 |
| ---- | ---- | ------ | -------- | ---- |
| title | string |  | 否 | Cells的标题 |
| footer | string |  | 否 | Cells底部的文字 |

## Slot

| 名称 | 描述 |
| ---- | ---- |
| 默认 | 内容slot |

