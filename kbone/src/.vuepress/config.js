const path = require('path')
const removeDiacritics = require('diacritics').remove

const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g
const isMirror = process.env.TYPE === 'mirror'
const prefix = isMirror ? '/miniprogram' : ''

module.exports = {
    title: 'wechat-miniprogram / kbone',
    description: 'Web 与小程序同构解决方案',
    less: {
        javascriptEnabled: true,
      },
    base: `${prefix}/kbone/docs`,
    dest: isMirror ? path.resolve(__dirname, '../../docs_mirror') : path.resolve(__dirname, '../../docs'),
    head:[
        ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
    ],
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            {text: '指南', link: '/'},
            {text: '配置', link: '/config/'},
            {text: 'dom/bom 扩展 API', link: '/domextend/'},
            {text: 'Q&A', link: '/qa/'},
            {text: '更新日志', link: '/changelog/'},
            {text: 'kbone-ui', link: `${prefix}/kbone/docs/ui/intro/`, target:'_blank'},
            {text: 'GitHub', link: 'https://github.com/wechat-miniprogram/kbone', target:'_blank'},
            {text: '社区', link: 'https://developers.weixin.qq.com/community/minihome/mixflow/1213301129006825473', target:'_blank'},
        ],
        sidebar: {
            '/advanced/': [
                '',
            ],
            '/config/': [''],
            '/domextend/': [''],
            '/qa/': [''],
            '/changelog/': [''],
            '/ui/':[
                '/ui/intro/quickstart',
                '/ui/intro/',
                {
                    title:"视图容器",
                    children:[
                        '/ui/components/kview',
                        '/ui/components/kflex',
                        '/ui/components/kswiper',
                        '/ui/components/kswiperitem',
                        '/ui/components/kscrollview',
                        '/ui/components/kmovable'
                    ]
                },
                {
                    title:"表单组件",
                    children:[
                        '/ui/components/kbutton',
                        '/ui/components/kbuttonarea',
                        '/ui/components/kcheckbox',
                        '/ui/components/kcheckboxgroup',
                        '/ui/components/kinput',
                        '/ui/components/kradio',
                        '/ui/components/kswitch',
                        "/ui/components/kcell",
                        "/ui/components/kcells",
                        '/ui/components/kslider',
                        '/ui/components/kpickerview',
                        '/ui/components/kpickercolumn',
                    ]
                },
                {
                    title:"操作反馈",
                    children:[
                        '/ui/components/kactionsheet',
                        '/ui/components/ktoast',
                        '/ui/components/kdialog',
                        '/ui/components/ktoptips',
                    ]
                }
            ],
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
        slugify: str => {
            if (str === 'app') return 'config-app'
            else return removeDiacritics(str)
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuous separators
                .replace(/\-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^\-+|\-+$/g, '')
                // ensure it doesn't start with a number (#121)
                .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        },
    },
}
