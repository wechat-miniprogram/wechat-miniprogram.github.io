const path = require("path");
const removeDiacritics = require("diacritics").remove;

const rControl = /[\u0000-\u001f]/g;
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g;

module.exports = {
  title: "wechat-miniprogram / weui",
  description: "WeUI组件库",
  less: {
    javascriptEnabled: true,
  },
  base: "/weui/docs/",
  dest: path.resolve(__dirname, "../../docs"),
  // head:[
  //   ['link', {rel: 'shortcut icon', href: '/favicon.ico'}],
  // ],
  themeConfig: {
    nav: [
      { text: "指南", link: "/" },
      {
        text: "GitHub",
        link: "https://github.com/wechat-miniprogram/weui-miniprogram",
        target: "_blank",
      },
      {
        text: "社区",
        link: "https://developers.weixin.qq.com/community/develop/mixflow",
        target: "_blank",
      },
    ],
    sidebar: [
      {
        title: '介绍',
        path: '/',
      },
      {
        title: '快速上手',  
        path: '/quickstart'     
      },
      {
        title: '基础组件',   
        path: '/badge', 
        collapsable: false,     
        children: [
          '/badge',
          '/gallery',
          '/loading',
          '/icon'
        ],
      },
      {
        title: '表单组件',   
        path: '/form',    
        collapsable: false,  
        children: [
          '/form',
          '/form-page',
          '/cell',
          '/cells',
          '/checkbox-group',
          '/slideview',
          '/uploader'
        ],
      },
      {
        title: '操作反馈',   
        path: '/dialog',   
        collapsable: false,   
        children: [
          '/dialog',
          '/msg',
          '/toptips',
          '/half-screen-dialog',
          '/actionsheet'
        ],
      },
      {
        title: '导航组件',   
        path: '/navigation',  
        collapsable: false,  
        children: [
          '/navigation',
          '/tabbar'
        ],
      },
      {
        title: '搜索组件',   
        path: '/search', 
        collapsable: false,     
        children: [
          '/search'
        ],
      },
      {
        title: '其他组件',   
        path: '/other',   
        collapsable: false,   
        children: [
          '/other'
        ],
      },
    ],
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
