import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Auto.js Pro',
  description: '学习与编程JavaScript IDE',
  lang: 'zh-CN',
  base: '/',
  
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { 
        text: '第一代API文档', 
        link: '/api-v1/controls' 
      },
      { 
        text: '第二代API文档', 
        link: '/api-v2/v9' 
      },
      { 
        text: '官网与相关链接', 
        link: '/links',
        items: [
          { text: '交流QQ群', link: 'https://jq.qq.com/?_wv=1027&k=642877773' },
          { text: '官方包下载', link: '/links#download' }
        ]
      }
    ],
    
    sidebar: {
      '/api-v1/': [
        {
          text: '第一代API文档',
          items: [
            { text: '自动化 - 控件操作', link: '/api-v1/controls' },
            { text: '自动化 - 坐标操作', link: '/api-v1/coordinates' },
            { text: 'app - 应用', link: '/api-v1/app' },
            { text: 'base64', link: '/api-v1/base64' },
            { text: 'colors - 颜色', link: '/api-v1/colors' },
            { text: 'canvas - 画布', link: '/api-v1/canvas' },
            { text: 'console - 控制台', link: '/api-v1/console' },
            { text: 'crypto - 加解密与消息摘要', link: '/api-v1/crypto' },
            { text: 'debug - 调试工具', link: '/api-v1/debug' },
            { text: 'device - 设备', link: '/api-v1/device' },
            { text: 'dialogs - 对话框', link: '/api-v1/dialogs' },
            { text: 'engines - 脚本引擎', link: '/api-v1/engines' },
            { text: 'events - 事件与监听', link: '/api-v1/events' },
            { text: 'floaty - 悬浮窗', link: '/api-v1/floaty' },
            { text: 'files - 文件系统', link: '/api-v1/files' },
            { text: 'globals - 全局变量与函数', link: '/api-v1/globals' },
            { text: 'http - HTTP网络请求', link: '/api-v1/http' },
            { text: 'images - 图片处理', link: '/api-v1/images' },
            { text: 'keys - 按键模拟', link: '/api-v1/keys' },
            { text: 'media - 多媒体', link: '/api-v1/media' },
            { text: 'module - 模块', link: '/api-v1/module' },
            { text: 'ocr - 文字识别', link: '/api-v1/ocr' },
            { text: 'plugins - 插件', link: '/api-v1/plugins' },
            { text: 'power_manager - 电源管理', link: '/api-v1/power_manager' },
            { text: 'sensors - 传感器', link: '/api-v1/sensors' },
            { text: 'shell - Shell命令', link: '/api-v1/shell' },
            { text: 'storages - 本地存储', link: '/api-v1/storages' },
            { text: 'settings - 设置', link: '/api-v1/settings' },
            { text: 'threads - 多线程', link: '/api-v1/threads' },
            { text: 'thirdPartyPlugins - 第三方插件', link: '/api-v1/thirdPartyPlugins' },
            { text: 'timers - 定时器', link: '/api-v1/timers' },
            { text: 'work_manager - 定时与任务', link: '/api-v1/work_manager' },
            { text: 'ui - 用户界面', link: '/api-v1/ui-module' },
            { text: 'util - 工具', link: '/api-v1/util' },
            { text: 'WebSocket', link: '/api-v1/websocket' },
            { text: 'zip - 压缩与解压', link: '/api-v1/zip' },
            { text: '和Java交互', link: '/api-v1/java' }
          ]
        }
      ],
      '/api-v2/': [
        {
          text: '指南',
          items: [
            { text: 'V9', link: '/api-v2/v9' },
            { text: '如何从第一代API迁移过来', link: '/api-v2/migrate-from-api-v1' }
          ]
        },
        {
          text: 'API文档',
          items: [
            { text: 'accessibility - 无障碍', link: '/api-v2/accessibility' },
            { text: 'app - 应用', link: '/api-v2/app' },
            { text: '@autojs/opencv - OpenCV', link: '/api-v2/opencv' },
            { text: 'axios - http请求', link: '/api-v2/axios' },
            { text: 'clip_manager - 剪贴板', link: '/api-v2/clip_manager' },
            { text: 'color - 颜色', link: '/api-v2/color' },
            { text: 'datastore - 本地储存', link: '/api-v2/datastore' },
            { text: 'device - 设备', link: '/api-v2/device' },
            { text: 'dialogs - 对话框', link: '/api-v2/dialogs' },
            { text: 'engines - 脚本引擎', link: '/api-v2/engines' },
            { text: 'floating_window - 悬浮窗', link: '/api-v2/floating_window' },
            { text: 'globals - 全局函数与变量', link: '/api-v2/globals' },
            { text: 'image - 图片处理', link: '/api-v2/image' },
            { text: 'lang - 语言', link: '/api-v2/lang' },
            { text: 'media - 多媒体', link: '/api-v2/media' },
            { text: 'notification - 通知', link: '/api-v2/notification' },
            { text: 'plugins - 插件', link: '/api-v2/plugins' },
            { text: 'power_manager - 电池管理', link: '/api-v2/power_manager' },
            { text: 'rhino - 犀牛Java交互', link: '/api-v2/rhino' },
            { text: 'sensors - 传感器', link: '/api-v2/sensors' },
            { text: 'settings - 设置', link: '/api-v2/settings' },
            { text: 'shell - Shell命令', link: '/api-v2/shell' },
            { text: 'toast - Toast', link: '/api-v2/toast' },
            { text: 'ui_object - 无障碍对象', link: '/api-v2/ui_object' },
            { text: 'ui_selector - 无障碍选择器', link: '/api-v2/ui_selector' },
            { text: 'ui - 用户界面', link: '/api-v2/ui' },
            { text: 'work_manager - 定时与任务', link: '/api-v2/work_manager' },
            { text: 'zip - 压缩与解压', link: '/api-v2/zip' }
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    
    footer: {
      message: 'Auto.js Pro 文档',
      copyright: 'Copyright © 2024 Auto.js Pro'
    },
    
    search: {
      provider: 'local'
    }
  }
})

