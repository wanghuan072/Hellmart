import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'
import HomeView from '../views/HomeView.vue'
import WikiView from '../views/WikiView.vue'
import WalkthroughView from '../views/WalkthroughView.vue'

// 支持的语言列表（英文是默认，不需要前缀）
const supportedLocales = ['en', 'de', 'fr', 'pt']

// 生成路由路径（英文无前缀，其他语言有前缀）
const createRoutePath = (path, locale = 'en') => {
  if (locale === 'en') {
    return path
  }
  return `/${locale}${path}`
}

// 基础路由配置
const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      tdkKey: 'home'
    }
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: WikiView,
    meta: {
      tdkKey: 'wiki'
    }
  },
  {
    path: '/walkthrough',
    name: 'walkthrough',
    component: WalkthroughView,
    meta: {
      tdkKey: 'walkthrough'
    }
  },
  {
    path: '/endings',
    name: 'endings',
    component: () => import('../views/EndingsView.vue'),
    meta: {
      tdkKey: 'endings'
    }
  },
  {
    path: '/mechanics',
    name: 'mechanics',
    component: () => import('../views/MechanicsView.vue'),
    meta: {
      tdkKey: 'mechanics'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      tdkKey: 'blog'
    }
  },
  {
    path: '/blog/:slug',
    name: 'blog-detail',
    component: () => import('../views/BlogDetailView.vue'),
    meta: {
      // Blog detail TDK is driven by data (post.seo). This is only a fallback.
      tdkKey: 'blogDetail'
    }
  },
  // Legal Pages
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/legal/PrivacyPolicyView.vue'),
    meta: {
      tdkKey: 'privacyPolicy'
    }
  },
  {
    path: '/terms-of-service',
    name: 'terms-of-service',
    component: () => import('../views/legal/TermsOfServiceView.vue'),
    meta: {
      tdkKey: 'termsOfService'
    }
  },
  {
    path: '/copyright',
    name: 'copyright',
    component: () => import('../views/legal/CopyrightView.vue'),
    meta: {
      tdkKey: 'copyright'
    }
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/legal/AboutUsView.vue'),
    meta: {
      tdkKey: 'aboutUs'
    }
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/legal/ContactUsView.vue'),
    meta: {
      tdkKey: 'contactUs'
    }
  },
]

// 生成所有语言的路由
const routes = []
baseRoutes.forEach(route => {
  // 英文路由（无前缀）
  routes.push({
    ...route,
    path: route.path,
    meta: {
      ...route.meta,
      locale: 'en'
    }
  })
  
  // 其他语言路由（有前缀）
  supportedLocales.filter(locale => locale !== 'en').forEach(locale => {
    // 为每个语言创建独立的路由，使用唯一的名称
    const localizedRoute = {
      ...route,
      path: createRoutePath(route.path, locale),
      name: route.name ? `${route.name}-${locale}` : undefined,
      meta: {
        ...route.meta,
        locale: locale
      }
    }
    routes.push(localizedRoute)
  })
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 路由守卫：从 URL 中提取语言并设置 i18n
router.beforeEach((to, from, next) => {
  // 从路径中提取语言
  const pathSegments = to.path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  let locale = 'en' // 默认英文
  
  // 检查第一个路径段是否是支持的语言
  if (supportedLocales.includes(firstSegment)) {
    locale = firstSegment
  }
  
  // 强制设置 i18n 语言（确保在组件加载前设置）
  i18n.global.locale.value = locale
  
  next()
})

export default router
