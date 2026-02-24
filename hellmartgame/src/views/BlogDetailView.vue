<script setup>
import { computed, onMounted, ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { loadBlogData } from '../data/blog.js'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()
const { getLocalizedPath } = useLocalizedPath()
const blogData = ref([])

const loadData = async (lang) => {
  blogData.value = await loadBlogData(lang)
}

// 初始化加载数据并查找 post
const initPost = async () => {
  await nextTick() // 等待路由守卫设置语言
  await loadData(locale.value)
  const slug = route.params.slug
  const foundPost = blogData.value.find(p => p.addressBar === slug)
  if (!foundPost) {
    router.replace(getLocalizedPath('/blog'))
  }
}

onMounted(async () => {
  await initPost()
})

// 监听路由完整路径变化（包括语言前缀变化）
watch(
  () => route.fullPath,
  async (newPath, oldPath) => {
    if (newPath !== oldPath && oldPath) {
      await nextTick() // 等待路由守卫设置语言
      await initPost()
    }
  },
  { immediate: false }
)

// 监听路由参数变化，更新当前 post
watch(
  () => route.params.slug,
  async () => {
    await nextTick() // 等待路由守卫设置语言
    await loadData(locale.value)
  }
)

// 监听语言变化，重新加载数据
watch(
  () => locale.value,
  async (newLocale, oldLocale) => {
    // 只有当语言真正变化时才重新加载
    if (newLocale !== oldLocale && oldLocale !== undefined) {
      await initPost()
    }
  }
)

const post = computed(() => {
  return blogData.value.find(p => p.addressBar === route.params.slug)
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

</script>

<template>
  <main class="blog-detail-page" v-if="post">
    <div class="hero-page">
      <div class="container">
        <nav class="breadcrumb">
          <router-link :to="getLocalizedPath('/')">{{ t('blogDetailPage.breadcrumb.home') }}</router-link> 
          <span class="separator">/</span>
          <router-link :to="getLocalizedPath('/blog')">{{ t('blogDetailPage.breadcrumb.blog') }}</router-link>
          <span class="separator">/</span>
          <span class="current">{{ post.title }}</span>
        </nav>
        <h1>{{ post.title }}</h1>
        <p class="subtitle">{{ t('blogDetailPage.published') }} {{ formatDate(post.publishDate) }} • {{ t('blogDetailPage.official') }}</p>
      </div>
    </div>

    <div class="container">
      <div class="two-column-layout">
        <!-- Left Column: Content -->
        <div class="left-column">
          <div class="post-body" v-html="post.detailsHtml"></div>

          <div class="post-footer">
            <router-link :to="getLocalizedPath('/blog')" class="back-link">{{ t('blogDetailPage.backToBlog') }}</router-link>
          </div>
        </div>

        <!-- Right Column: Sidebar (Image, Desc, Tags) -->
        <aside class="right-column">
          <div class="sidebar-card">
            <div class="sidebar-image">
              <img :src="post.imageUrl" :alt="post.imageAlt || post.title" />
            </div>
            <div class="sidebar-content">
              <h3>{{ t('blogDetailPage.about') }}</h3>
              <p class="description">{{ post.description }}</p>
              
              <div class="tags-section">
                <h4>{{ t('blogDetailPage.tags') }}</h4>
                <div class="tags">
                  <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<style scoped>
.blog-detail-page {
  overflow: hidden;
  padding-bottom: 4rem;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 320px; /* Increased sidebar width slightly */
  gap: 2.5rem;
  align-items: start;
}

/* Left Column Styles */
.left-column {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3rem;
}

/* Post Body Styles */
.post-body :deep(h2) {
  font-family: var(--font-display);
  color: var(--text);
  font-size: 1.8rem;
  margin: 2rem 0 1rem;
}

.post-body :deep(h3) {
  font-family: var(--font-display);
  color: var(--accent);
  font-size: 1.4rem;
  margin: 1.5rem 0 0.8rem;
}

.post-body :deep(p) {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
  font-size: 1.05rem;
}

.post-body :deep(ul), .post-body :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  color: var(--text-muted);
}

.post-body :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.post-body :deep(blockquote) {
  border-left: 4px solid var(--primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: var(--text);
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 0 4px 4px 0;
}

.post-footer {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
}

.back-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--primary);
}

/* Right Column Styles */
.right-column {
  position: sticky;
  top: 6rem; /* Sticky sidebar adjusted for navbar */
}

.sidebar-card {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

.sidebar-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.sidebar-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.sidebar-card:hover .sidebar-image img {
  transform: scale(1.05);
}

.sidebar-content {
  padding: 1.5rem;
}

.sidebar-content h3 {
  font-family: var(--font-display);
  color: var(--text);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.description {
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.tags-section h4 {
  font-family: var(--font-display);
  color: var(--text);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--text-muted);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.tag:hover {
  border-color: var(--primary);
  color: var(--primary);
}

/* Breadcrumb Styles */
.breadcrumb {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.breadcrumb a {
  color: var(--text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--primary);
}

.breadcrumb .separator {
  color: var(--text-muted);
  opacity: 0.5;
}

.breadcrumb .current {
  color: var(--accent);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px; /* Truncate long titles in breadcrumb */
}

/* Responsive Design */
@media (max-width: 1024px) {
  .two-column-layout {
    grid-template-columns: 1fr 280px;
    gap: 1.5rem;
  }
  
  .left-column {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .two-column-layout {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .right-column {
    position: static;
    width: 100%;
    order: 2; /* Sidebar after content */
  }
  
  .left-column {
    width: 100%;
    padding: 1.5rem;
    order: 1;
  }

  .post-body :deep(h2) {
    font-size: 1.5rem;
  }
  
  .post-body :deep(h3) {
    font-size: 1.2rem;
  }
  
  .breadcrumb .current {
    max-width: 150px;
  }
}
</style>
