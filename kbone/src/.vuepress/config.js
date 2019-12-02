const path = require('path')

module.exports = {
    title: 'wechat-miniprogram / kbone',
    description: 'Web 与小程序同构解决方案',
    base: '/kbone/docs/',
    dest: path.resolve(__dirname, '../../docs'),
    themeConfig: {
        nav: [
            {text: '指南', link: '/'},
            {text: '配置', link: '/config/'},
            {text: 'dom/bom 扩展 API', link: '/domextend/'},
            {text: 'Q&A', link: '/qa/'},
            {text: '更新日志', link: '/changelog/'},
            {text: 'GitHub', link: 'https://github.com/wechat-miniprogram/kbone', target:'_blank'},
        ],
        sidebar: {
            '/advanced/': [
                '',
            ],
            '/config/': [''],
            '/domextend/': [''],
            '/qa/': [''],
            '/changelog/': [''],
            '/': [
                '',
                '/guide/quickstart',
                '/guide/tutorial',
                '/guide/advanced',
                '/guide/principle',
                '/guide/optimize',
                '/guide/suggest',
                '/guide/develop',
            ],
        },
        sidebarDepth: 2,
        // algolia: {
        //     apiKey: '626178cb614d1dc0584d19df84838c2a',
        //     indexName: 'kbone',
        // },
    },
    markdown: {
        lineNumbers: true,
    },
}
