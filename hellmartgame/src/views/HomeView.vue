<template>
  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="badge store-badge">{{ t('homePage.hero.badge') }}</span>
            <h1 class="hero-title">{{ t('homePage.hero.title') }}</h1>
            <p class="hero-subtitle">{{ t('homePage.hero.subtitle') }}</p>
            
            <div class="hero-actions">
              <router-link :to="getLocalizedPath('/walkthrough')" class="btn primary">{{ t('homePage.hero.button1') }}</router-link>
              <router-link :to="getLocalizedPath('/wiki')" class="btn secondary">{{ t('homePage.hero.button2') }}</router-link>
            </div>
            
            <div class="hero-stats">
              <div class="stat">
                <span class="label">{{ t('homePage.hero.stats.label1') }}</span>
                <span class="value blink-red">{{ t('homePage.hero.stats.value1') }}</span>
              </div>
              <div class="stat">
                <span class="label">{{ t('homePage.hero.stats.label2') }}</span>
                <span class="value">{{ t('homePage.hero.stats.value2') }}</span>
              </div>
              <div class="stat">
                <span class="label">{{ t('homePage.hero.stats.label3') }}</span>
                <span class="value">{{ t('homePage.hero.stats.value3') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Guides Section -->
    <section class="section quick-guides-section">
      <div class="container">
        <h2 class="section-title">{{ t('homePage.quickGuides.title') }}</h2>
        <p class="section-subtitle">{{ t('homePage.quickGuides.subtitle') }}</p>
        
        <div class="grid-3">
          <div class="card">
            <div class="card-image">
              <img src="/images/link-01.webp" alt="Entity Database">
              <div class="card-overlay"></div>
              <div class="price-tag">{{ t('homePage.quickGuides.card1.tag') }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.quickGuides.card1.title') }}</h3>
              <p class="card-text">{{ t('homePage.quickGuides.card1.text') }}</p>
              <router-link :to="getLocalizedPath('/wiki')" class="card-link">{{ t('homePage.quickGuides.card1.link') }}</router-link>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/images/link-02.webp" alt="Survival Walkthrough">
              <div class="card-overlay"></div>
              <div class="price-tag">{{ t('homePage.quickGuides.card2.tag') }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.quickGuides.card2.title') }}</h3>
              <p class="card-text">{{ t('homePage.quickGuides.card2.text') }}</p>
              <router-link :to="getLocalizedPath('/walkthrough')" class="card-link">{{ t('homePage.quickGuides.card2.link') }}</router-link>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/images/link-03.webp" alt="All Endings Guide">
              <div class="card-overlay"></div>
              <div class="price-tag">{{ t('homePage.quickGuides.card3.tag') }}</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.quickGuides.card3.title') }}</h3>
              <p class="card-text">{{ t('homePage.quickGuides.card3.text') }}</p>
              <router-link :to="getLocalizedPath('/endings')" class="card-link">{{ t('homePage.quickGuides.card3.link') }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Endings Section -->
    <section class="section all-endings-section">
      <div class="container">
        <h2 class="section-title">{{ t('homePage.endings.title') }}</h2>
        <p class="section-subtitle">{{ t('homePage.endings.subtitle') }}</p>
        
        <div class="grid-3">
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge bad">{{ t('homePage.endings.ending1.badge') }}</div>
              <img src="/images/endings-01.webp" alt="Ending 2: Groundhog Day">
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.endings.ending1.title') }}</h3>
              <p class="card-text">{{ t('homePage.endings.ending1.text') }}</p>
            </div>
          </div>
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge neutral">{{ t('homePage.endings.ending2.badge') }}</div>
              <img src="/images/endings-02.webp" alt="Ending 3: Judgment Night">
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.endings.ending2.title') }}</h3>
              <p class="card-text">{{ t('homePage.endings.ending2.text') }}</p>
            </div>
          </div>
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge true">{{ t('homePage.endings.ending3.badge') }}</div>
              <img src="/images/endings-03.webp" alt="Ending 1: Keys to the Kingdom">
            </div>
            <div class="card-content">
              <h3 class="card-title">{{ t('homePage.endings.ending3.title') }}</h3>
              <p class="card-text">{{ t('homePage.endings.ending3.text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hellmart Demo Screenshots Section -->
    <section class="section screenshots-section">
      <div class="container">
        <h2 class="section-title">{{ t('homePage.screenshots.title') }}</h2>
        <p class="section-subtitle">{{ t('homePage.screenshots.subtitle') }}</p>
        <div class="grid-4">
          <div class="screenshot-item">
            <img src="/images/hellmart-01.webp" alt="Screenshot 1">
            <div class="cam-overlay">{{ t('homePage.screenshots.cam1') }}</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-02.webp" alt="Screenshot 2">
            <div class="cam-overlay">{{ t('homePage.screenshots.cam2') }}</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-03.webp" alt="Screenshot 3">
            <div class="cam-overlay">{{ t('homePage.screenshots.cam3') }}</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-04.webp" alt="Screenshot 4">
            <div class="cam-overlay">{{ t('homePage.screenshots.cam4') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is Hellmart Section -->
    <section class="section what-is-hellmart-section">
      <div class="container">
        <div class="what-is-content">
          <div class="text-col">
            <h2 class="section-title" style="text-align: left;">{{ t('homePage.whatIs.title') }}</h2>
            <p class="section-subtitle" style="text-align: left;">{{ t('homePage.whatIs.subtitle') }}</p>
            <p class="intro-text">{{ t('homePage.whatIs.text1') }}</p>
            <p class="intro-text">{{ t('homePage.whatIs.text2') }}</p>
            <router-link :to="getLocalizedPath('/mechanics')" class="btn primary">{{ t('homePage.whatIs.button') }}</router-link>
          </div>
          <div class="image-col">
            <img src="/images/about-img.webp" alt="Hellmart Gameplay">
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section (Renamed from Latest News & Guides) -->
    <section class="section latest-news-section">
      <div class="container">
        <h2 class="section-title">{{ t('homePage.blog.title') }}</h2>
        <p class="section-subtitle">{{ t('homePage.blog.subtitle') }}</p>
        <div class="news-grid">
          <div v-for="post in homePosts" :key="post.id" class="news-item">
            <span class="news-date">{{ formatDate(post.publishDate) }}</span>
            <router-link :to="getLocalizedPath(`/blog/${post.addressBar}`)" class="news-title">{{ post.title }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <h2 class="section-title">{{ t('homePage.faq.title') }}</h2>
        <p class="section-subtitle">{{ t('homePage.faq.subtitle') }}</p>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q1.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q1.answer') }}</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q2.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q2.answer') }}</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q3.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q3.answer') }}</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q4.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q4.answer') }}</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q5.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q5.answer') }}</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">{{ t('homePage.faq.q6.question') }}</h3>
            <p class="faq-answer">{{ t('homePage.faq.q6.answer') }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { loadBlogData } from '../data/blog.js'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t, locale } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const blogData = ref([])

const loadData = async (lang) => {
  blogData.value = await loadBlogData(lang)
}

onMounted(() => {
  loadData(locale.value)
})

watch(locale, (newLocale) => {
  loadData(newLocale)
})

// Filter blog posts for the homepage
const homePosts = computed(() => {
  return blogData.value.filter(post => post.isHome).slice(0, 4)
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
</script>

<style scoped>
/* Page Styles */
.section {
  padding: 2rem 0;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

/* Utility Classes Moved from Global */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 2px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: var(--font-mono);
}

.btn.primary {
  background: var(--accent);
  color: white;
  border: 1px solid var(--accent);
  box-shadow: 0 0 15px rgba(255, 0, 60, 0.4);
}

.btn.primary:hover {
  background: transparent;
  color: var(--accent);
  box-shadow: 0 0 25px rgba(255, 0, 60, 0.6);
}

.btn.secondary {
  background: transparent;
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn.secondary:hover {
  border-color: var(--accent-secondary);
  color: var(--accent-secondary);
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
}

.hero-page h1, .hero-title{
  color: #8b0000;
}

.section-title {
  font-family: var(--font-display);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  letter-spacing: 2px;
  color: var(--text);
  text-align: center;
  text-shadow: 2px 2px 0px var(--accent);
}

.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  font-family: var(--font-mono);
}

/* Alternate section backgrounds (Masks) */
.section:nth-child(odd) {
  background-color: rgba(0, 0, 0, 0.6); /* Darker mask for alternating sections */
  backdrop-filter: blur(2px);
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

/* Card Styles */
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 2px;
  overflow: hidden;
  transition: all 0.3s;
  position: relative;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  filter: grayscale(0.5) contrast(1.2);
}

.card:hover img {
  transform: scale(1.1);
  filter: grayscale(0) contrast(1);
}

.price-tag {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: var(--highlight);
  color: black;
  padding: 2px 8px;
  font-weight: 800;
  font-size: 0.8rem;
  transform: rotate(-5deg);
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
  z-index: 2;
}

.card-content {
  padding: 1.5rem;
  border-top: 1px solid var(--border);
}

.card-title {
  color: var(--text);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  letter-spacing: 0.5px;
}

.card:hover .card-title {
  color: var(--accent);
}

.card-text {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.card-link {
  color: var(--accent-secondary);
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.card-link:hover {
  color: var(--accent);
  text-decoration: underline;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  padding: 20px 0;
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.6);
  /* Removed radial-gradient to let global background + overlay show through */
}

.hero-content {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  text-align: center;
}

.store-badge {
  display: inline-block;
  padding: 8px 16px;
  background: var(--highlight);
  color: black;
  font-weight: 900;
  font-size: 0.9rem;
  transform: rotate(-2deg);
  margin-bottom: 2rem;
  box-shadow: 0 0 15px rgba(255, 230, 0, 0.3);
  border: 2px solid black;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat .label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.stat .value {
  font-family: var(--font-mono);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--accent-secondary);
}

.blink-red {
  animation: blink 2s infinite;
  color: var(--accent) !important;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* All Endings Section */
.ending-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 4px 10px;
  font-weight: 900;
  font-size: 0.75rem;
  color: white;
  border-radius: 2px;
  z-index: 2;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.5);
}

.ending-badge.bad {
  background: var(--accent);
}

.ending-badge.neutral {
  background: var(--text-muted);
}

.ending-badge.true {
  background: var(--accent-secondary);
  color: black;
}

/* Screenshots Section */
.screenshot-item {
  position: relative;
  border: 1px solid var(--border);
  height: 180px;
  overflow: hidden;
}

.screenshot-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: sepia(0.2) contrast(1.1);
}

.cam-overlay {
  position: absolute;
  top: 10px;
  left: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 6px;
}

/* What is Hellmart Section */
.what-is-content {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.text-col {
  flex: 1;
}

.intro-text {
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.image-col {
  flex: 1;
  height: 350px;
  border: 1px solid var(--border);
  position: relative;
}

.image-col::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--accent);
  transform: translate(10px, 10px);
  z-index: -1;
}

.image-col img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Latest News Section */
.news-grid {
  display: grid;
  gap: 1rem;
}

.news-item {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--border);
  transition: all 0.3s;
}

.news-item:hover {
  background: rgba(255, 255, 255, 0.05);
  border-left-color: var(--highlight);
  transform: translateX(5px);
}

.news-date {
  font-family: var(--font-mono);
  color: var(--accent-secondary);
  font-size: 0.9rem;
  margin-right: 2rem;
  min-width: 100px;
}

.news-title {
  color: var(--text);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
}

.news-title:hover {
  color: var(--highlight);
}

/* FAQ Section */
.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: var(--bg-soft);
  padding: 2rem;
  border: 1px solid var(--border);
  transition: all 0.3s;
}

.faq-item:hover {
  border-color: var(--highlight);
  background: rgba(255, 255, 255, 0.05);
}

.faq-question {
  color: var(--highlight);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
}

.faq-answer {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }

  .what-is-content {
    flex-direction: column;
  }

  .image-col {
    height: 300px;
  }
}

@media (max-width: 768px) {
  /* Layout */
  .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
  }

  .what-is-content {
    gap: 1rem;
  }

  .news-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .news-date {
    margin-bottom: 0.5rem;
  }

  /* Section Spacing */
  .section {
    padding: 1rem 0;
  }

  /* Buttons */
  .btn, .card-link, .read-more {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
  
  .btn-secondary {
    margin-top: 0.5rem;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 0.8rem;
    width: 100%;
  }

  .cta-buttons .btn {
    width: 100%;
    text-align: center;
  }

  /* Other Spacing & Elements */
  .container {
    padding: 0 1rem;
  }

  .hero-page {
    padding: 4rem 0 2rem 0;
    min-height: auto;
  }
  
  .card {
    padding: 1rem;
  }
  
  .image-col {
    height: 200px;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  /* Typography & Spacing */
  .hero-title {
    font-size: 1.5rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .card-title, .faq-question {
    font-size: 1.1rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }

  .hero-subtitle, .section-subtitle, .card-text, .faq-answer, .intro-text {
    font-size: 0.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
  }
}
</style>
