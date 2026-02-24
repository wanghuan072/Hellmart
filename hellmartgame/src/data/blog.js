import { useI18n } from 'vue-i18n'

// 默认导出英文数据（用于 SSR 或初始加载）
import enData from './blog/en.js'

// 动态加载函数（用于客户端多语言切换）
export async function loadBlogData(locale = 'en') {
  try {
    if (locale === 'en') {
      return enData
    }
    const module = await import(`./blog/${locale}.js`)
    return module.default || []
  } catch (error) {
    console.warn(`Failed to load blog data for locale: ${locale}, falling back to en`, error)
    return enData
  }
}

// 默认导出英文数据（向后兼容）
export default enData
