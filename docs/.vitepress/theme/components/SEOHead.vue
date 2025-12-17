<template>
  <component :is="'script'" type="application/ld+json" v-html="structuredDataJson"></component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const structuredData = computed(() => {
  const baseUrl = 'https://autojs.me'
  const currentUrl = `${baseUrl}${route.path}`
  
  // 根据路由判断页面类型
  let pageType = 'WebSite'
  let name = 'Auto.js Pro'
  let description = 'Auto.js Pro 是一个在 Android、鸿蒙平台编写、运行 JavaScript 代码的集成开发环境。提供完整的API文档和开发指南。'
  
  if (route.path.startsWith('/api-v1/') || route.path.startsWith('/api-v2/')) {
    pageType = 'TechArticle'
    name = 'Auto.js Pro API 文档'
    description = 'Auto.js Pro API 参考文档，包含第一代API和第二代API的完整说明和示例代码。'
  } else if (route.path.startsWith('/guide/')) {
    pageType = 'Article'
    name = 'Auto.js Pro 开发指南'
    description = 'Auto.js Pro 开发指南，包含快速上手、项目配置、打包部署等完整教程。'
  }
  
  const data = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: name,
    alternateName: 'Auto.js Pro 文档',
    url: currentUrl,
    description: description,
    publisher: {
      '@type': 'Organization',
      name: 'Auto.js Pro',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    }
  }
  
  // 首页添加搜索功能
  if (route.path === '/') {
    data.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }
  
  return data
})

const structuredDataJson = computed(() => {
  return JSON.stringify(structuredData.value, null, 2)
})
</script>
