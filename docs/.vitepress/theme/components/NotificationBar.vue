<template>
  <div v-if="showNotification" class="notification-bar-wrapper">
    <div class="notification-bar">
      <div class="notification-content">
        <span class="notification-text">
          祝贺DeekeScript自动化脚本平台正式发布，一站式商用自动化APP解决方案。官网：
          <a href="https://doc.deeke.cn" target="_blank" class="notification-link">https://doc.deeke.cn</a>
        </span>
        <button @click.stop.prevent="closeNotification" class="notification-close" aria-label="关闭通知">
          ×
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const showNotification = ref(false)
const isMobile = ref(false)

// 检测是否为移动端
const checkIsMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768
  }
}

const getTodayKey = () => {
  const today = new Date()
  return `notification-closed-${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
}

const checkNotificationStatus = () => {
  // 移动端不显示通知
  if (isMobile.value) {
    showNotification.value = false
    return
  }
  
  const todayKey = getTodayKey()
  const closed = localStorage.getItem(todayKey)
  showNotification.value = !closed
}

const closeNotification = (event) => {
  // 阻止事件冒泡和默认行为
  if (event) {
    event.preventDefault()
    event.stopPropagation()
  }
  const todayKey = getTodayKey()
  localStorage.setItem(todayKey, 'true')
  showNotification.value = false
}

// 监听通知栏显示状态，动态调整页面padding
watch(showNotification, (newVal) => {
  if (typeof document !== 'undefined' && !isMobile.value) {
    const body = document.body
    if (newVal) {
      // 显示通知栏时，给body添加padding-top
      body.style.paddingTop = '50px'
    } else {
      // 关闭通知栏时，移除padding-top
      body.style.paddingTop = '0'
    }
  }
})

// 监听窗口大小变化
const handleResize = () => {
  const wasMobile = isMobile.value
  checkIsMobile()
  
  // 如果从桌面端切换到移动端，隐藏通知并移除padding
  if (wasMobile !== isMobile.value && isMobile.value) {
    showNotification.value = false
    if (typeof document !== 'undefined') {
      document.body.style.paddingTop = '0'
    }
  } else if (wasMobile !== isMobile.value && !isMobile.value) {
    // 如果从移动端切换到桌面端，重新检查通知状态
    checkNotificationStatus()
  }
}

onMounted(() => {
  checkIsMobile()
  checkNotificationStatus()
  
  // 监听窗口大小变化
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }
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

