import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import NotificationBar from './components/NotificationBar.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(NotificationBar)
    })
  },
  enhanceApp({ app }) {
    // 可以在这里注册全局组件
  }
}

