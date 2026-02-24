import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { seoConfig } from './config.js'
import { loadBlogData } from '../data/blog.js'
import { useLocalizedPath } from '../composables/useLocalizedPath'

// 支持的语言列表
const supportedLocales = ['en', 'de', 'fr']

const updateMetaTag = (name, content, attribute = 'name') => {
  if (!content || typeof document === 'undefined') return
  let tag = document.querySelector(`meta[${attribute}="${name}"]`)
  if (tag) {
    tag.setAttribute('content', content)
  } else {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, name)
    tag.setAttribute('content', content)
    document.head.appendChild(tag)
  }
}

const updateCanonicalLink = (href) => {
  if (typeof document === 'undefined') return
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', href)
}

const updateHreflangLinks = (currentPath, getLocalizedPath) => {
  if (typeof document === 'undefined') return
  
  // 移除现有的 hreflang 链接
  const existingHreflangs = document.querySelectorAll('link[hreflang]')
  existingHreflangs.forEach(link => link.remove())
  
  // 添加所有语言的 hreflang 链接
  supportedLocales.forEach(locale => {
    const localizedPath = getLocalizedPath(currentPath, locale)
    const hreflang = document.createElement('link')
    hreflang.setAttribute('rel', 'alternate')
    hreflang.setAttribute('hreflang', locale)
    hreflang.setAttribute('href', `${seoConfig.fullDomain}${localizedPath}`)
    document.head.appendChild(hreflang)
  })
  
  // 添加 x-default（指向英文版本）
  const defaultPath = getLocalizedPath(currentPath, 'en')
  const xDefault = document.createElement('link')
  xDefault.setAttribute('rel', 'alternate')
  xDefault.setAttribute('hreflang', 'x-default')
  xDefault.setAttribute('href', `${seoConfig.fullDomain}${defaultPath}`)
  document.head.appendChild(xDefault)
}

const setSEO = (seo, locale = 'en') => {
  const finalSEO = { ...seoConfig.defaults, ...seo }
  if (typeof document !== 'undefined') {
    document.title = finalSEO.title
  }
  updateMetaTag('description', finalSEO.description)
  updateMetaTag('keywords', finalSEO.keywords)
  updateMetaTag('author', finalSEO.author)
  updateMetaTag('og:title', finalSEO.title, 'property')
  updateMetaTag('og:description', finalSEO.description, 'property')
  updateMetaTag('og:image', finalSEO.image, 'property')
  updateMetaTag('og:url', finalSEO.canonical, 'property')
  updateMetaTag('og:type', finalSEO.type, 'property')
  updateMetaTag('og:site_name', 'Hellmart Game', 'property')
  // Open Graph locale (格式: en_US, de_DE, fr_FR)
  const ogLocale = locale === 'en' ? 'en_US' : locale === 'de' ? 'de_DE' : 'fr_FR'
  updateMetaTag('og:locale', ogLocale, 'property')
  // 清理旧的 alternate locale 标签
  if (typeof document !== 'undefined') {
    const existingAlternates = document.querySelectorAll('meta[property="og:locale:alternate"]')
    existingAlternates.forEach(tag => tag.remove())
  }
  // 添加其他语言的 alternate locale
  supportedLocales.filter(l => l !== locale).forEach(altLocale => {
    const altOgLocale = altLocale === 'en' ? 'en_US' : altLocale === 'de' ? 'de_DE' : 'fr_FR'
    updateMetaTag('og:locale:alternate', altOgLocale, 'property')
  })
  updateMetaTag('twitter:card', 'summary_large_image', 'name')
  updateMetaTag('twitter:title', finalSEO.title, 'name')
  updateMetaTag('twitter:description', finalSEO.description, 'name')
  updateMetaTag('twitter:image', finalSEO.image, 'name')
  updateMetaTag('twitter:site', seoConfig.social.twitter, 'name')
  updateCanonicalLink(finalSEO.canonical)
}

const generateStructuredData = (seo, pageType = 'WebPage', extras = {}) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: seo.title,
    description: seo.description,
    url: seo.canonical,
    publisher: {
      '@type': 'Organization',
      name: 'Hellmart Game',
      url: seoConfig.fullDomain,
      logo: {
        '@type': 'ImageObject',
        url: `${seoConfig.fullDomain}/favicon.ico`
      },
      sameAs: [
        `https://twitter.com/${seoConfig.social.twitter.replace('@', '')}`,
        `https://facebook.com/${seoConfig.social.facebook}`,
        `https://instagram.com/${seoConfig.social.instagram}`,
        `https://discord.gg/${seoConfig.social.discord}`
      ]
    },
    ...extras
  }
  return data
}

const addStructuredData = (data) => {
  if (typeof document === 'undefined') return
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function useAutoSEO() {
  const route = useRoute()
  const { t, te, locale } = useI18n()
  const { getLocalizedPath } = useLocalizedPath()
  const blogData = ref([])

  // 加载 blog 数据
  const loadBlog = async (lang) => {
    blogData.value = await loadBlogData(lang)
  }

  // 初始化加载
  loadBlog(locale.value)

  // 监听语言变化
  watch(locale, (newLocale) => {
    loadBlog(newLocale)
  })

  const resolveTDKFromI18n = (tdkKey) => {
    if (!tdkKey) return null
    const base = `tdk.${tdkKey}`
    const titleKey = `${base}.title`
    const descKey = `${base}.description`
    const kwKey = `${base}.keywords`
    if (!te(titleKey)) return null
    return {
      title: t(titleKey),
      description: te(descKey) ? t(descKey) : undefined,
      keywords: te(kwKey) ? t(kwKey) : undefined
    }
  }

  const applySEOForRoute = async () => {
    const path = route.path
    const canonical = `${seoConfig.fullDomain}${path}`
    let seo = { canonical }

    // Blog detail: SEO comes from data (post.seo). Keep it out of locales by design.
    if (route.name && route.name.startsWith('blog-detail')) {
      // 确保 blog 数据已加载
      if (blogData.value.length === 0) {
        await loadBlog(locale.value)
      }
      const slug = route.params.slug
      const post = blogData.value.find((p) => p.addressBar === slug)
      if (post) {
        const title = (post.seo && post.seo.title) || post.title
        const description = (post.seo && post.seo.description) || post.description
        const keywords = (post.seo && post.seo.keywords) || seoConfig.defaults.keywords
        const image = post.imageUrl || seoConfig.defaults.image
        seo = {
          ...seo,
          title,
          description,
          keywords,
          image,
          type: 'article'
        }
        setSEO(seo, locale.value)
        const extras = {
          '@type': 'Article',
          datePublished: post.publishDate,
          image: image
        }
        addStructuredData(generateStructuredData(seo, 'Article', extras))
        // 添加 hreflang 链接
        updateHreflangLinks(path, getLocalizedPath)
        return
      }
    }

    // Static pages: SEO comes from i18n locales (tdk.*)
    const tdk = resolveTDKFromI18n(route.meta && route.meta.tdkKey)
    if (tdk) {
      seo = { ...seo, ...tdk }
      setSEO(seo, locale.value)
      addStructuredData(generateStructuredData(seo, 'WebPage'))
      // 添加 hreflang 链接
      updateHreflangLinks(path, getLocalizedPath)
      return
    }

    seo = { ...seo, ...seoConfig.defaults }
    setSEO(seo, locale.value)
    addStructuredData(generateStructuredData(seo, 'WebPage'))
    // 添加 hreflang 链接
    updateHreflangLinks(path, getLocalizedPath)
  }

  watch([() => route.fullPath, () => route.name, () => locale.value], () => applySEOForRoute(), { immediate: true })
}
