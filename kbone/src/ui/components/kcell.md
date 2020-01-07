# KCell

KCell是列表或者是表单的一项，常用于设置页的展示，或者用在表单中，作为表单的每一个要填写的项，KCell必须要放在 KCells 组件的下面。

## 使用指南

```js
import {KCell} from 'kbone-ui'
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
| icon | string |  | 否 | Cell的最左侧的icon，是本地图片的路径，icon和名为icon的slot互斥 |
| title | string |  | 否 | Cell最左侧的标题，一般用在 Form 表单组件里面，icon和title二选一，title和名为title的slot互斥 |
| hover | boolean | false | 否 | 是否有hover效果 |
| value | string |  | 是 | Cell的值，和默认的slot互斥 |
| footer | string |  | 否 | Cell右侧区域的内容，和名为footer的slot互斥 |


## Slot
| 名称 | 描述 |
| ---- | ---- |
| icon | 左侧图标slot |
| title | 标题slot |
| 默认 | 内容slot |
| footer | 右侧区域slot |


