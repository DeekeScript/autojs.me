import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NotificationBar from './components/NotificationBar.vue'
import SEOHead from './components/SEOHead.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(NotificationBar),
      'layout-top': () => h(SEOHead)
    })
  },
  enhanceApp({ app }) {
    // 可以在这里注册全局组件
  }
}

