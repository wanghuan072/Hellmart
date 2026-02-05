/* global process */
import fs from 'fs';
import path from 'path'
import { fileURLToPath } from 'url'
import blogData from '../src/data/blog.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// SEO配置
const seoConfig = {
  fullDomain: 'https://hellmartgame.com'
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
    console.log('Starting sitemap generation...')
    
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

    const currentDate = new Date().toISOString().split('T')[0]

    // 1. 添加基础路由
    console.log('Adding base routes...')
    baseRoutes.forEach(route => {
      sitemapContent += `
  <url>
    <loc>${seoConfig.fullDomain}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    })

    // 2. 添加博客文章
    console.log('Adding blog posts...')
    if (blogData && Array.isArray(blogData)) {
      blogData.forEach(post => {
        if (post.addressBar) {
          const cleanSlug = post.addressBar.replace(/^\//, '').replace(/\/$/, '')
          sitemapContent += `
  <url>
    <loc>${seoConfig.fullDomain}/blog/${cleanSlug}</loc>
    <lastmod>${post.publishDate || currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
        }
      })
    }

    sitemapContent += '\n</urlset>'

    // 写入文件
    const publicDir = path.resolve(__dirname, '../public')
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }

    const sitemapPath = path.join(publicDir, 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemapContent)

    console.log(`\n✨ Sitemap generated successfully at: ${sitemapPath}`)
    console.log(`Total size: ${(sitemapContent.length / 1024).toFixed(2)} KB`)
    
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
