<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useAutoSEO } from './seo/composables.js'
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
