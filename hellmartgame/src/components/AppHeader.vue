<template>
  <header class="app-header">
    <div class="container header-content">
      <div class="logo">
        <a :href="getLocalizedPath('/')" class="logo-link">
          <img src="/images/logo.webp" alt="Hellmart Game Logo" class="logo-icon" />
          <span class="logo-text">Hellmart Game</span>
        </a>
      </div>

      <button class="menu-toggle" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" :aria-label="t('common.nav.toggleMenu')">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li><router-link :to="getLocalizedPath('/')" active-class="active" @click="closeMenu">{{ t('common.nav.home') }}</router-link></li>
          <li><router-link :to="getLocalizedPath('/wiki')" active-class="active" @click="closeMenu">{{ t('common.nav.wiki') }}</router-link></li>
          <li><router-link :to="getLocalizedPath('/walkthrough')" active-class="active" @click="closeMenu">{{ t('common.nav.walkthrough') }}</router-link></li>
          <li><router-link :to="getLocalizedPath('/endings')" active-class="active" @click="closeMenu">{{ t('common.nav.endings') }}</router-link></li>
          <li><router-link :to="getLocalizedPath('/mechanics')" active-class="active" @click="closeMenu">{{ t('common.nav.mechanics') }}</router-link></li>
          <li><router-link :to="getLocalizedPath('/blog')" active-class="active" @click="closeMenu">{{ t('common.nav.blog') }}</router-link></li>
        </ul>
      </nav>

      <div class="language-switcher" ref="langSwitcherRef">
        <button 
          class="lang-button" 
          @click="toggleLangDropdown"
          :aria-label="'Language Switcher'"
          :aria-expanded="isLangDropdownOpen"
        >
          <span class="lang-current">{{ currentLocale.toUpperCase() }}</span>
          <svg 
            class="lang-arrow" 
            :class="{ open: isLangDropdownOpen }"
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <polyline points="6,9 12,15 18,9" />
          </svg>
        </button>
        <div 
          v-if="isLangDropdownOpen" 
          class="lang-dropdown"
        >
          <button
            class="lang-option"
            :class="{ active: currentLocale === 'en' }"
            @click="selectLanguage('en')"
          >
            <span class="lang-code">EN</span>
          </button>
          <button
            class="lang-option"
            :class="{ active: currentLocale === 'de' }"
            @click="selectLanguage('de')"
          >
            <span class="lang-code">DE</span>
          </button>
          <button
            class="lang-option"
            :class="{ active: currentLocale === 'fr' }"
            @click="selectLanguage('fr')"
          >
            <span class="lang-code">FR</span>
          </button>
          <button
            class="lang-option"
            :class="{ active: currentLocale === 'pt' }"
            @click="selectLanguage('pt')"
          >
            <span class="lang-code">PT</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()

const isMenuOpen = ref(false)
const isLangDropdownOpen = ref(false)
const langSwitcherRef = ref(null)

// 当前语言
const currentLocale = computed(() => locale.value || 'en')

// 切换语言下拉菜单
const toggleLangDropdown = () => {
  isLangDropdownOpen.value = !isLangDropdownOpen.value
  if (isLangDropdownOpen.value) {
    isMenuOpen.value = false
  }
}

// 选择语言
const selectLanguage = (newLocale) => {
  if (newLocale === currentLocale.value) {
    isLangDropdownOpen.value = false
    return
  }
  
  // 获取当前路径（去除语言前缀）
  let currentPath = route.path
  const pathSegments = currentPath.split('/').filter(Boolean)
  
  // 如果当前路径有语言前缀，移除它
  if (pathSegments.length > 0 && ['en', 'de', 'fr', 'pt'].includes(pathSegments[0])) {
    pathSegments.shift()
    currentPath = '/' + pathSegments.join('/')
  }
  
  // 处理 blog detail 路由的特殊情况
  if (route.name && route.name.startsWith('blog-detail')) {
    const slug = route.params.slug
    if (newLocale === 'en') {
      router.push(`/blog/${slug}`)
    } else {
      router.push(`/${newLocale}/blog/${slug}`)
    }
    isLangDropdownOpen.value = false
    return
  }
  
  // 如果新语言是英文，直接跳转（无前缀）
  if (newLocale === 'en') {
    router.push(currentPath || '/')
  } else {
    // 其他语言添加前缀
    router.push(`/${newLocale}${currentPath || '/'}`)
  }
  
  isLangDropdownOpen.value = false
  closeMenu()
}

// 点击外部关闭下拉菜单
const handleClickOutside = (event) => {
  if (langSwitcherRef.value && !langSwitcherRef.value.contains(event.target)) {
    isLangDropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    isLangDropdownOpen.value = false
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  height: 80px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.8rem;
  letter-spacing: 1px;
}

.logo-icon {
  width: 55px;
  height: 55px;
}

.logo-text {
  color: var(--text);
  text-shadow: 4px 4px 0px var(--accent);
  font-weight: 900;
}

.main-nav ul {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  padding: 5px 0;
  font-family: var(--font-mono);
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--highlight);
  transition: width 0.3s ease;
  box-shadow: 0 0 8px var(--highlight);
}

.main-nav a:hover::after,
.main-nav a.active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: var(--text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Hamburger Animation */
.menu-toggle.is-active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background-color: var(--accent);
}

.menu-toggle.is-active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background-color: var(--accent);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .main-nav {
    display: block; /* Reset from none */
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(15px);
    padding-top: 100px;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 1000;
  }

  .main-nav.is-open {
    right: 0;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .main-nav a {
    font-size: 1.5rem;
    color: var(--text);
    padding: 10px 20px;
  }

  .main-nav a.active {
    color: var(--accent);
  }

  .main-nav a::after {
    display: none; /* No underline animation on mobile */
  }
}

/* Language Switcher */
.language-switcher {
  position: relative;
  margin-left: 1rem;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.875rem;
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 70px;
  font-family: var(--font-mono);
}

.lang-button:hover {
  background: rgba(30, 30, 30, 0.8);
  border-color: var(--accent);
  color: var(--text);
  box-shadow: 0 0 12px rgba(255, 54, 54, 0.2);
}

.lang-current {
  font-weight: 600;
  letter-spacing: 0.5px;
}

.lang-arrow {
  width: 14px;
  height: 14px;
  color: var(--text-muted);
  transition: transform 0.3s ease;
}

.lang-arrow.open {
  transform: rotate(180deg);
}

.lang-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 100px;
  background: rgba(10, 10, 10, 0.98);
  border: 1px solid var(--border);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1001;
  backdrop-filter: blur(10px);
}

.lang-option {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-family: var(--font-mono);
}

.lang-option:last-child {
  border-bottom: none;
}

.lang-option:hover {
  background: rgba(255, 54, 54, 0.1);
  color: var(--text);
}

.lang-option.active {
  background: rgba(255, 54, 54, 0.15);
  color: var(--accent);
}

.lang-option.active .lang-code {
  font-weight: 700;
}

.lang-code {
  font-weight: 600;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .language-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1002;
    margin: 0;
  }
  
  .lang-button {
    min-width: 60px;
    padding: 0.5rem 0.75rem;
  }
  
  .lang-dropdown {
    right: 0;
    min-width: 90px;
  }
}
</style>
