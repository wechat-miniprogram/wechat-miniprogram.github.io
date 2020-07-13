import KboneUI from 'kbone-ui'
import 'kbone-ui/lib/weui/weui.css'
import './components/base.less'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(KboneUI)

  // 初始滚动处理
  options.mounted = () => {
    const scrollDom = document.querySelector(decodeURIComponent(location.hash))
    if (scrollDom) {
      scrollDom.scrollIntoView(true)
    } else if (window.MutationObserver) {
      const observer = new window.MutationObserver(() => {
        if (!location.hash) observer.disconnect()

        const scrollDom = document.querySelector(decodeURIComponent(location.hash))
        if (scrollDom) {
          scrollDom.scrollIntoView(true)
          observer.disconnect()
        }
      })
      observer.observe(document.body, {childList: true, subtree: true})
    }
  }
}