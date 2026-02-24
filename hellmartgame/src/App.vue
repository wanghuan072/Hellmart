<script setup>
import { watch, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useAutoSEO } from './seo/composables.js'

const { locale } = useI18n()

// 更新 HTML lang 属性
const updateHtmlLang = (lang) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', lang)
  }
}

// 初始化设置
onMounted(() => {
  updateHtmlLang(locale.value)
})

// 监听语言变化
watch(locale, (newLocale) => {
  updateHtmlLang(newLocale)
})

useAutoSEO()
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <div class="page-content">
      <RouterView />
    </div>
    <AppFooter />
  </div>
</template>

<style scoped>
.page-content {
  padding-top: 80px; /* Height of the fixed header */
  min-height: 100vh;
}
</style>
