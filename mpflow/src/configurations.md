---
tags:
  - 'mpflow.config.js'
---

# 配置文件

mpflow 配置文件为项目根目录下的 `mpflow.config.js` 文件。该文件导出一个对象，包含 mpflow 的配置内容。

## 基本配置

### appId
+ 类型 `string`

小程序项目的 appId，用于生成小程序配置以及提供给开发者工具从而能够正常开发

### compileType
+ 类型 `string`

小程序项目构建类型，用于提供给开发者工具

### plugins
+ 类型 `string[]`

mpflow 插件列表，需要填入完整的插件包名如 `@mpflow/plugin-babel`

## 构建配置

### sourceDir
+ 类型 `string`
+ 默认 `'src'`

项目的源码目录

### outputDir
+ 类型 `string`
+ 默认 `'dist'`

项目的输出目录

### miniprogramRoot
+ 类型 `string`
+ 默认 `''`

指定小程序源码的目录，需为相对 [sourceDir](#sourcedir) 的路径

### pluginRoot
+ 类型 `string`
+ 默认 `''`

指定插件源码的目录，需为相对 [sourceDir](#sourcedir) 的路径

### app
+ 类型 `string | ((mode: string) => string)`
+ 默认 `undefined`

打包小程序 app 路径，指定到小程序的 `app.js` 文件路径

### plugin
+ 类型 `string | ((mode: string) => string)`
+ 默认 `undefined`

打包小程序插件路径，指定到小程序插件的 `plugin.json` 文件路径

### pages
+ 类型 `string[] | ((mode: string) => string[])`
+ 默认 `undefined`

打包小程序组件路径，指定到组件的 `comp.js` 文件路径

:::warning 注意
`app`，`plugin`，`pages` 选项会分别开启独立的 webpack compiler 任务。这些任务之间相互隔离，共同的代码文件不会在任务之间共享

若这些选项同时设置，[configureWebpack](#configurewebpack) 和 [configureWebpackChain](#configurewebpackchain) 选项也会被执行多次
:::

### libs
+ 类型 `Record<string, string> | ((mode: string) => Record<string, string>`
+ 默认 `undefined`

打包 js 文件路径，`key` 为导出路径，`value` 为源文件路径

例如传入 `{ foo: 'src/bar.js' }`，则会将 `src/bar.js` 的内容打包输出到 `foo.js`

:::warning 注意
`libs` 选项必须要和 `pages` 配合使用
:::

### sourceMap
+ 类型 `boolean | ((mode: string) => boolean)`
+ 默认 `true`

打包时是否输出 sourceMap 文件

### minimize
+ 类型 `boolean | ((mode: string) => boolean)`
+ 默认 `mode => mode === 'production'`

打包时是否对代码进行压缩

### configureWebpack
+ 类型 `webpack.Configuration | ((config: webpack.Configuration) => webpack.Configuration)`
+ 默认 `undefined`

对 mpflow 内置的 webpack 配置做修改的配置，可以直接传递一个 `Configuration` 配置对象，也可以传递一个修改配置对象的函数。

### configureWebpackChain
+ 类型 `(config: WebpackChain) => void`
+ 默认 `undefined`

对 mpflow 内置的 webpack 配置做修改的配置，传递一个 [WebpackChain](https://github.com/neutrinojs/webpack-chain) 对象，可以更加方便地对配置进行修改

## 扩展配置

### settings
+ 类型 `object`

在 mpflow 生成 `project.config.json` 文件时，其中的 `setting` 配置内容
