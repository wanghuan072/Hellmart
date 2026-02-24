<template>
  <main class="endings-page">
    <div class="hero-page">
      <div class="container">
        <h1>{{ t('endingsPage.hero.title') }}</h1>
        <p>{{ t('endingsPage.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container">
      <div class="content-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <nav class="toc">
            <h2 class="toc-title">{{ t('endingsPage.toc.title') }}</h2>
            <ul class="toc-list">
              <li><a href="#intro" :class="['toc-link', { active: activeSection === 'intro' }]" @click.prevent="scrollToSection('intro')">{{ t('endingsPage.toc.intro') }}</a></li>
              <li><a href="#ending1" :class="['toc-link', { active: activeSection === 'ending1' }]" @click.prevent="scrollToSection('ending1')">{{ t('endingsPage.toc.ending1') }}</a></li>
              <li><a href="#ending2" :class="['toc-link', { active: activeSection === 'ending2' }]" @click.prevent="scrollToSection('ending2')">{{ t('endingsPage.toc.ending2') }}</a></li>
              <li><a href="#ending3" :class="['toc-link', { active: activeSection === 'ending3' }]" @click.prevent="scrollToSection('ending3')">{{ t('endingsPage.toc.ending3') }}</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Intro -->
          <section id="intro" class="section-block">
            <h2 class="section-title">{{ t('endingsPage.intro.title') }}</h2>
            <p>{{ t('endingsPage.intro.text') }}</p>
            <div class="alert-box info">
              <strong>{{ t('endingsPage.intro.tip') }}</strong> {{ t('endingsPage.intro.tipText') }}
            </div>
          </section>

          <!-- Ending 1 -->
          <section id="ending1" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('endingsPage.ending1.title') }}</h2>
              <span class="tag success">{{ t('endingsPage.ending1.tag') }}</span>
            </div>
            
            <div class="content-body">
              <h3 class="subsection-title">{{ t('endingsPage.ending1.outcome.title') }}</h3>
              <p>{{ t('endingsPage.ending1.outcome.text') }}</p>
              
              <h3 class="subsection-title">{{ t('endingsPage.ending1.unlock.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('endingsPage.ending1.unlock.item1') }}</strong> {{ t('endingsPage.ending1.unlock.item1Text') }}</li>
                <li><strong>{{ t('endingsPage.ending1.unlock.item2') }}</strong> {{ t('endingsPage.ending1.unlock.item2Text') }}</li>
                <li><strong>{{ t('endingsPage.ending1.unlock.item3') }}</strong> {{ t('endingsPage.ending1.unlock.item3Text') }} <router-link :to="getLocalizedPath('/wiki')">{{ t('endingsPage.ending1.unlock.item3Link') }}</router-link> {{ t('endingsPage.ending1.unlock.item3TextEnd') }}</li>
                <li><strong>{{ t('endingsPage.ending1.unlock.item4') }}</strong> {{ t('endingsPage.ending1.unlock.item4Text') }}</li>
                <li><strong>{{ t('endingsPage.ending1.unlock.item5') }}</strong> {{ t('endingsPage.ending1.unlock.item5Text') }}</li>
                <li><strong>{{ t('endingsPage.ending1.unlock.item6') }}</strong> {{ t('endingsPage.ending1.unlock.item6Text') }}</li>
              </ul>
            </div>

            <img src="/images/endings-03.webp" alt="Ending 1" class="section-image">
          </section>

          <!-- Ending 2 -->
          <section id="ending2" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('endingsPage.ending2.title') }}</h2>
              <span class="tag neutral">{{ t('endingsPage.ending2.tag') }}</span>
            </div>
            <p class="subtitle">{{ t('endingsPage.ending2.subtitle') }}</p>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('endingsPage.ending2.outcome.title') }}</h3>
              <p>{{ t('endingsPage.ending2.outcome.text') }}</p>
              
              <h3 class="subsection-title">{{ t('endingsPage.ending2.unlock.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('endingsPage.ending2.unlock.item1') }}</strong> {{ t('endingsPage.ending2.unlock.item1Text') }}</li>
                <li><strong>{{ t('endingsPage.ending2.unlock.item2') }}</strong> {{ t('endingsPage.ending2.unlock.item2Text') }}</li>
                <li><strong>{{ t('endingsPage.ending2.unlock.item3') }}</strong> {{ t('endingsPage.ending2.unlock.item3Text') }}</li>
                <li>{{ t('endingsPage.ending2.unlock.item4') }}</li>
              </ul>
            </div>

            <img src="/images/endings-01.webp" alt="Ending 2" class="section-image">
          </section>

          <!-- Ending 3 -->
          <section id="ending3" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('endingsPage.ending3.title') }}</h2>
              <span class="tag danger">{{ t('endingsPage.ending3.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('endingsPage.ending3.outcome.title') }}</h3>
              <p>{{ t('endingsPage.ending3.outcome.text') }}</p>
              
              <h3 class="subsection-title">{{ t('endingsPage.ending3.unlock.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('endingsPage.ending3.unlock.item1') }}</strong> {{ t('endingsPage.ending3.unlock.item1Text') }}</li>
                <li><strong>{{ t('endingsPage.ending3.unlock.item2') }}</strong> {{ t('endingsPage.ending3.unlock.item2Text') }}</li>
                <li><strong>{{ t('endingsPage.ending3.unlock.item3') }}</strong> {{ t('endingsPage.ending3.unlock.item3Text') }}</li>
                <li><strong>{{ t('endingsPage.ending3.unlock.item4') }}</strong> {{ t('endingsPage.ending3.unlock.item4Text') }}</li>
                <li><strong>{{ t('endingsPage.ending3.unlock.item5') }}</strong> {{ t('endingsPage.ending3.unlock.item5Text') }}</li>
              </ul>
            </div>

            <img src="/images/endings-02.webp" alt="Ending 3" class="section-image">
          </section>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
const activeSection = ref('intro')

let observer = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, {
    rootMargin: '-15% 0px -80% 0px' 
  })

  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = id
  }
}
</script>

<style scoped>
.endings-page {
  /* Removed background-color to let global background show */
  min-height: 100vh;
  padding-bottom: 5rem;
  color: var(--text);
}

.page-header {
  display: none; /* Deprecated, using global .hero-page */
}

.content-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Sidebar Styling */
.sidebar {
  position: sticky;
  top: 6rem;
}

.toc {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--border);
}

.toc-title {
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-link {
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: all 0.2s;
  text-decoration: none;
}

.toc-link:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.1);
}

.toc-link.active {
  color: var(--highlight);
  background: rgba(255, 230, 0, 0.1);
  font-weight: bold;
}

/* Main Content Styling */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.main-content img{
  max-width: 100%;
  height: auto;
}

.section-block {
  scroll-margin-top: 6rem;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.section-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  margin: 0;
  color: var(--text);
}

.subsection-title {
  font-size: 1.2rem;
  color: var(--accent-secondary);
  margin: 1.5rem 0 0.5rem;
}

.section-block p {
  color: #ccc;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.subtitle {
  font-style: italic;
  color: var(--text-muted);
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  display: block;
}

/* Tags */
.tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}
.tag.success { background: rgba(0, 255, 0, 0.2); color: #00ff88; border: 1px solid #00ff88; }
.tag.neutral { background: rgba(100, 100, 100, 0.2); color: #ccc; border: 1px solid #ccc; }
.tag.danger { background: rgba(255, 0, 0, 0.2); color: #ff4444; border: 1px solid #ff4444; }

/* Lists */
.simple-list {
  padding-left: 1.5rem;
  color: #ccc;
}
.simple-list li { list-style: disc; margin-bottom: 0.5rem; }
.simple-list strong { color: var(--text); }

/* Alert Boxes */
.alert-box {
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border-left: 4px solid;
  background: rgba(255, 255, 255, 0.05);
}
.alert-box.info { border-color: var(--accent-secondary); color: var(--text-muted); }

/* Responsive Design */
@media (max-width: 1024px) {
  .content-layout {
    grid-template-columns: 220px 1fr;
    gap: 1.5rem;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
}

@media (max-width: 768px) {
  .content-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .sidebar {
    position: relative;
    top: 0;
    width: 100%;
    z-index: 10;
  }
  
  .toc {
    padding: 1rem;
  }
  
  .toc-title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .toc-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .toc-link {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--border);
  }

  .section-block {
    padding: 1.5rem;
  }

  .section-header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .section-title {
    font-size: 1.4rem;
  }
  
  .subsection-title {
    font-size: 1.1rem;
  }
  
  .tag {
    align-self: flex-start;
  }
}
</style>
