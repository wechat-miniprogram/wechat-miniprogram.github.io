# CLI 命令

本文档展示 mpflow 的命令行指令说明，你也可以直接通过 `mpflow --help` 查看

## `create <appName>`

创建 mpflow 项目

### `<appName>`
+ 必填
+ 类型 `String`

要创建的项目名称，会在当前执行目录下创建同名文件夹

### `--template`
+ 类型 `String`
+ 默认 `@mpflow/template-miniprogram`

创建项目要使用的项目模板。支持传递以下类型：
1. 本地地址，指向模板文件夹。以 `file://` 开头，如 `file:///Users/chyizheng/workspace/template-miniprogram`
1. 网络地址，指向一个网络压缩包。以 `http://` 或 `https://` 开头，如 `https://registry.npmjs.org/@mpflow/template-miniprogram/-/template-miniprogram-0.0.6.tgz`
1. NPM 包名，可以传递完整的包名或者省略开头的 `@mpflow/template-`。如传递 `@mpflow/template-miniprogram` 和 `miniprogram` 等价

官方模板列表：
+ [@mpflow/template-miniprogram](https://www.npmjs.com/package/@mpflow/template-miniprogram)
+ [@mpflow/template-miniprogram-plugin](https://www.npmjs.com/package/@mpflow/template-miniprogram-plugin)
+ [@mpflow/template-miniprogram-components](https://www.npmjs.com/package/@mpflow/template-miniprogram-components)

### `--appId`
+ 类型 `String`

创建小程序项目使用的 AppId，如填写，则创建过程中会跳过询问 AppId 的步骤

## `add <pluginName>`

为项目安装插件，必须要在 mpflow 项目目录下执行

### `<pluginName>`
+ 必填
+ 类型 `String`

要安装的插件 NPM 包名，如 `@mpflow/plugin-slim`

也可以省略开头的 `@mpflow/plugin-` 或 `mpflow-plugin-`，如传递 `slim` 等价于 `@mpflow/plugin-slim` 和 `mpflow-plugin-slim`。

:::warning 注意
此处的 NPM 包名解析存在优先级，以命令 `mpflow add slim` 为例，会以如下顺序尝试查找对应的 NPM 包，如果没有则查找下一个：

+ `@mpflow/plugin-slim`
+ `mpflow-plugin-slim`
+ `slim`
:::

## `build`

触发项目构建。必须要在 mpflow 项目目录下执行。

:::tip 提示
执行 `mpflow build` 等价于 `mpflow-service build`

`mpflow-service` 即安装在项目本地（而非全局）的 `@mpflow/service`
:::

### `--dev`
+ 类型 `Boolean`

使用开发模式构建，会关闭默认的一些优化，如代码压缩

### `--report`
+ 类型 `Boolean`

生成并展示构建产物报告，会展示本次构建的产物分析信息

## `dev`

开启项目开发，会监听源码文件，当文件发生变更时立即重新构建。必须要在 mpflow 项目目录下执行。

### `--open`
+ 类型 `Boolean`

是否同时拉起小程序开发者工具

::: warning 注意
当使用 `--open` 自动拉起小程序开发者工具时，要求当前电脑必须安装了 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)

并且要求开发者必须要登录为当前小程序 APPID 开发者
:::

## `inspect`

检查当前的 webpack 配置，用于发生问题时快速获取 webpack 配置

## `generate <pluginName>`

用于手动触发插件的 generator 钩子

### `<pluginName>`
+ 必填
+ 类型 `String`

要触发的插件名称
