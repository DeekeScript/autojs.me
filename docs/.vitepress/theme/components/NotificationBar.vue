<template>
  <div v-if="showNotification" class="notification-bar-wrapper">
    <div class="notification-bar">
      <div class="notification-content">
        <span class="notification-text">
          热烈祝贺DeekeScript自动化平台正式对外发布，填补了自动化脚本快速商业化的市场空白，官网：
          <a href="https://doc.deeke.cn" target="_blank" class="notification-link">https://doc.deeke.cn</a>
        </span>
        <button @click="closeNotification" class="notification-close" aria-label="关闭通知">
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const showNotification = ref(false)

const getTodayKey = () => {
  const today = new Date()
  return `notification-closed-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
}

const checkNotificationStatus = () => {
  const todayKey = getTodayKey()
  const closed = localStorage.getItem(todayKey)
  showNotification.value = !closed
}

const closeNotification = () => {
  const todayKey = getTodayKey()
  localStorage.setItem(todayKey, 'true')
  showNotification.value = false
}

// 监听通知栏显示状态，动态调整页面padding
watch(showNotification, (newVal) => {
  if (typeof document !== 'undefined') {
    const body = document.body
    if (newVal) {
      // 显示通知栏时，给body添加padding-top
      body.style.paddingTop = '50px'
    } else {
      // 关闭通知栏时，移除padding-top，页面回到顶部
      body.style.paddingTop = '0'
      // 滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})

onMounted(() => {
  checkNotificationStatus()
})
</script>

<style scoped>
.notification-bar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
}

.notification-bar {
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.notification-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}

.notification-text {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
}

.notification-link {
  color: #ffd700;
  text-decoration: underline;
  font-weight: bold;
  transition: color 0.2s;
}

.notification-link:hover {
  color: #fff;
}

.notification-close {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 24px;
  line-height: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  flex-shrink: 0;
}

.notification-close:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .notification-bar {
    padding: 10px 15px;
  }
  
  .notification-text {
    font-size: 13px;
  }
  
  .notification-close {
    width: 24px;
    height: 24px;
    font-size: 20px;
  }
}
</style>

