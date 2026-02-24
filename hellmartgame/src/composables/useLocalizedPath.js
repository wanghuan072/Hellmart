import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

// 支持的语言列表
const supportedLocales = ['en', 'de', 'fr']

/**
 * 从路径中提取语言
 */
export function extractLocaleFromPath(path) {
  const pathSegments = path.split('/').filter(Boolean)
  const firstSegment = pathSegments[0]
  
  if (supportedLocales.includes(firstSegment)) {
    return firstSegment
  }
  return 'en' // 默认英文
}

/**
 * 获取本地化路径的 composable
 */
export function useLocalizedPath() {
  const { locale } = useI18n()
  const route = useRoute()

  /**
   * 生成本地化路径
   * @param {string} path - 基础路径
   * @param {string} targetLocale - 目标语言（可选，默认使用当前语言）
   * @returns {string} 本地化路径
   */
  const getLocalizedPath = (path, targetLocale = null) => {
    const currentLocale = targetLocale || locale.value || 'en'
    
    // 如果路径已经是本地化的，先提取基础路径
    let basePath = path
    const pathSegments = path.split('/').filter(Boolean)
    if (pathSegments.length > 0 && supportedLocales.includes(pathSegments[0])) {
      basePath = '/' + pathSegments.slice(1).join('/')
    }
    
    // 英文路径无前缀
    if (currentLocale === 'en') {
      return basePath || '/'
    }
    
    // 其他语言添加前缀
    return `/${currentLocale}${basePath || '/'}`
  }

  return {
    getLocalizedPath,
    extractLocaleFromPath
  }
}
