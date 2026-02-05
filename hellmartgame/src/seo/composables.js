import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { seoConfig } from './config.js'
import blogData from '../data/blog.js'

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

const setSEO = (seo) => {
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

  const resolveTDKFromMeta = (meta) => {
    if (!meta || !meta.tdk) return null
    return {
      title: meta.tdk.title,
      description: meta.tdk.description,
      keywords: meta.tdk.keywords
    }
  }

  const applySEOForRoute = () => {
    const path = route.path
    const canonical = `${seoConfig.fullDomain}${path}`
    let seo = { canonical }
    const tdk = resolveTDKFromMeta(route.meta)
    if (tdk) {
      seo = { ...seo, ...tdk }
      setSEO(seo)
      addStructuredData(generateStructuredData(seo, 'WebPage'))
      return
    }
    if (route.name === 'blog-detail') {
      const slug = route.params.slug
      const post = blogData.find((p) => p.addressBar === slug)
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
        setSEO(seo)
        const extras = {
          '@type': 'Article',
          datePublished: post.publishDate,
          image: image
        }
        addStructuredData(generateStructuredData(seo, 'Article', extras))
        return
      }
    }
    seo = { ...seo, ...seoConfig.defaults }
    setSEO(seo)
    addStructuredData(generateStructuredData(seo, 'WebPage'))
  }

  watch([() => route.fullPath, () => route.name], () => applySEOForRoute(), { immediate: true })
}
