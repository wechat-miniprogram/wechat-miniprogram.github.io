const path = require("path");
const removeDiacritics = require("diacritics").remove;

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;

module.exports = {
  title: "wechat-miniprogram / mpflow",
  description: "原生小程序构建工具",
  less: {
    javascriptEnabled: true,
  },
  base: "/mpflow/docs/",
  dest: path.resolve(__dirname, "../../docs"),
  // head:[
  //   ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
  // ],
  themeConfig: {
    nav: [
      { text: "指南", link: "/" },
      {
        text: "插件",
        items: [
          { text: 'Babel', link: '/plugin/babel' },
          { text: 'Typescript', link: '/plugin/typescript' },
          { text: 'Css', link: '/plugin/css' },
          { text: '单元测试', link: '/plugin/unit-test' },
          { text: 'E2E测试', link: '/plugin/e2e-test' },
          { text: '瘦身', link: '/plugin/slim' },
        ]
      },
      { text: "Q&A", link: "/qa/" },
      { text: "更新日志", link: "/changelog/" },
      {
        text: "GitHub",
        link: "https://github.com/wechat-miniprogram/mpflow",
        target: "_blank",
      },
      {
        text: "社区",
        link:
          "https://developers.weixin.qq.com/community/minihome/mixflow/1213301129006825473",
        target: "_blank",
      },
    ],
    sidebar: {
      "/plugin/": [
        "/plugin/babel",
        "/plugin/typescript",
        "/plugin/css",
        "/plugin/unit-test",
        "/plugin/e2e-test",
        "/plugin/slim",
      ],
      "/": [
        "",
        "/getting-start",
        "/configurations",
        "/commands",
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
    slugify: (str) => {
      if (str === "app") return "config-app";
      else
        return (
          removeDiacritics(str)
            // Remove control characters
            .replace(rControl, "")
            // Replace special characters
            .replace(rSpecial, "-")
            // Remove continuous separators
            .replace(/\-{2,}/g, "-")
            // Remove prefixing and trailing separators
            .replace(/^\-+|\-+$/g, "")
            // ensure it doesn't start with a number (#121)
            .replace(/^(\d)/, "_$1")
            // lowercase
            .toLowerCase()
        );
    },
  },
};
