/* global process */
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url'
import { loadBlogData } from '../src/data/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://hellmartgame.com'
}

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
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/wiki', priority: 0.8, changefreq: 'weekly' },
  { path: '/walkthrough', priority: 0.9, changefreq: 'weekly' },
  { path: '/endings', priority: 0.8, changefreq: 'monthly' },
  { path: '/mechanics', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  { path: '/copyright', priority: 0.3, changefreq: 'yearly' },
  { path: '/about-us', priority: 0.5, changefreq: 'monthly' },
  { path: '/contact-us', priority: 0.5, changefreq: 'monthly' }
]

async function main() {
  try {
    console.log('Starting multilingual sitemap generation...')
    
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    const currentDate = new Date().toISOString().split('T')[0]

    // 1. 添加所有语言的基础路由
    console.log('Adding base routes for all languages...')
    baseRoutes.forEach(route => {
      supportedLocales.forEach(locale => {
        const localizedPath = createRoutePath(route.path, locale)
        sitemapContent += `
  <url>
    <loc>${seoConfig.fullDomain}${localizedPath}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
      })
    })

    // 2. 添加所有语言的博客文章
    console.log('Adding blog posts for all languages...')
    for (const locale of supportedLocales) {
      try {
        const blogData = await loadBlogData(locale)
        if (blogData && Array.isArray(blogData)) {
          blogData.forEach(post => {
            if (post.addressBar) {
              const cleanSlug = post.addressBar.replace(/^\//, '').replace(/\/$/, '')
              const blogPath = createRoutePath(`/blog/${cleanSlug}`, locale)
              sitemapContent += `
  <url>
    <loc>${seoConfig.fullDomain}${blogPath}</loc>
    <lastmod>${post.publishDate || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
            }
          })
        }
      } catch (error) {
        console.warn(`⚠️  Failed to load blog data for ${locale}:`, error.message)
      }
    }

    sitemapContent += '\n</urlset>'

    // 写入文件
    const publicDir = path.resolve(__dirname, '../public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemapContent)

    // 统计信息
    const urlCount = (sitemapContent.match(/<url>/g) || []).length
    const localeCount = supportedLocales.length
    
    console.log(`\n✨ Multilingual sitemap generated successfully at: ${sitemapPath}`)
    console.log(`   Total URLs: ${urlCount}`)
    console.log(`   Languages: ${localeCount} (${supportedLocales.join(', ')})`)
    console.log(`   Total size: ${(sitemapContent.length / 1024).toFixed(2)} KB`)
    
    // 验证生成的站点地图
    const validation = sitemapContent.includes('<?xml') && 
                      sitemapContent.includes('<urlset') && 
                      sitemapContent.includes('</urlset>')
    
    if (validation) {
      console.log('\n✅ Sitemap validation passed')
    } else {
      console.warn('\n⚠️  Sitemap validation failed')
    }
  } catch (error) {
    console.error('❌ Error generating sitemap:', error)
    process.exit(1)
  }
}

main()
