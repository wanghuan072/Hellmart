<template>
  <main class="blog-page">
    <div class="hero-page">
      <div class="container">
        <h1>Hellmart Blog: Latest News & Strategy Guides</h1>
        <p>Your go-to resource for deep dives, technical fixes, lore theories, and survival tips that keep you alive on the night shift.</p>
      </div>
    </div>

    <div class="container">
      <div class="blog-grid">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="blog-card"
          @click="navigateToDetail(post.addressBar)"
        >
          <div class="card-image">
            <img :src="post.imageUrl" :alt="post.imageAlt || post.title" loading="lazy" />
          </div>
          <div class="card-content">
            <div class="card-meta">
              <span class="date">{{ formatDate(post.publishDate) }}</span>
              <div class="tags">
                <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
            <h2 class="blog-title">{{ post.title }}</h2>
            <p class="description">{{ post.description }}</p>
            <span class="read-more">Read Article &rarr;</span>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import blogData from '../data/blog.js'

const router = useRouter()
const posts = ref(blogData)

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

const navigateToDetail = (slug) => {
  router.push(`/blog/${slug}`)
}
</script>

<style scoped>
.blog-page {
  color: var(--text);
  min-height: 100vh;
  padding-bottom: 4rem;
}

.page-header {
  display: none; /* Deprecated, using global .hero-page */
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-color: var(--primary);
}

.card-image {
  height: 200px;
  overflow: hidden;
  background-color: #000;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  text-transform: uppercase;
}

.blog-title {
  font-family: var(--font-display);
  color: var(--text);
  margin-bottom: 0.75rem;
  font-size: 1.4rem;
  line-height: 1.3;
  margin-top: 0;
}

.blog-card:hover .blog-title {
  color: var(--primary);
}

.description {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
  display: -webkit-box;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-card {
    max-width: 400px;
    margin: 0 auto;
    width: 100%;
  }

  .card-content {
    padding: 1.25rem;
  }

  .blog-title {
    font-size: 1.2rem;
  }

  .card-image {
    height: 180px;
  }
}
</style>
