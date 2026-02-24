<template>
  <main class="mechanics-page">
    <div class="hero-page">
      <div class="container">
        <h1>{{ t('mechanicsPage.hero.title') }}</h1>
        <p>{{ t('mechanicsPage.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container">
      <div class="content-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <nav class="toc">
            <h3 class="toc-title">{{ t('mechanicsPage.toc.title') }}</h3>
            <ul class="toc-list">
              <li><a href="#cashier" :class="['toc-link', { active: activeSection === 'cashier' }]" @click.prevent="scrollToSection('cashier')">{{ t('mechanicsPage.toc.part1') }}</a></li>
              <li><a href="#maintenance" :class="['toc-link', { active: activeSection === 'maintenance' }]" @click.prevent="scrollToSection('maintenance')">{{ t('mechanicsPage.toc.part2') }}</a></li>
              <li><a href="#survival" :class="['toc-link', { active: activeSection === 'survival' }]" @click.prevent="scrollToSection('survival')">{{ t('mechanicsPage.toc.part3') }}</a></li>
              <li><a href="#stats" :class="['toc-link', { active: activeSection === 'stats' }]" @click.prevent="scrollToSection('stats')">{{ t('mechanicsPage.toc.part4') }}</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Part 1: Cashier Systems -->
          <section id="cashier" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('mechanicsPage.part1.title') }}</h2>
              <span class="tag primary">{{ t('mechanicsPage.part1.tag') }}</span>
            </div>
            <p>{{ t('mechanicsPage.part1.intro') }}</p>
            
            <div class="content-body">
              <h3 class="subsection-title">{{ t('mechanicsPage.part1.scanning.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part1.scanning.item1') }}</strong> {{ t('mechanicsPage.part1.scanning.item1Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part1.scanning.item2') }}</strong> {{ t('mechanicsPage.part1.scanning.item2Text') }} <strong>{{ t('mechanicsPage.part1.scanning.item2Bold') }}</strong>{{ t('mechanicsPage.part1.scanning.item2TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part1.scanning.item3') }}</strong> {{ t('mechanicsPage.part1.scanning.item3Text') }} <strong>{{ t('mechanicsPage.part1.scanning.item3Bold') }}</strong>{{ t('mechanicsPage.part1.scanning.item3TextEnd') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part1.alarm.title') }}</h3>
              <p>{{ t('mechanicsPage.part1.alarm.text') }}</p>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part1.alarm.item1') }}</strong> {{ t('mechanicsPage.part1.alarm.item1Text') }} <strong>{{ t('mechanicsPage.part1.alarm.item1Bold') }}</strong>{{ t('mechanicsPage.part1.alarm.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part1.alarm.item2') }}</strong> {{ t('mechanicsPage.part1.alarm.item2Text') }}</li>
              </ul>
              <div class="alert-box danger">
                <strong>{{ t('mechanicsPage.part1.alarm.warning') }}</strong> {{ t('mechanicsPage.part1.alarm.warningText') }} <strong>{{ t('mechanicsPage.part1.alarm.warningBold') }}</strong>{{ t('mechanicsPage.part1.alarm.warningTextEnd') }}
              </div>

              <h3 class="subsection-title">{{ t('mechanicsPage.part1.scammers.title') }}</h3>
              <p>{{ t('mechanicsPage.part1.scammers.text') }} <strong>{{ t('mechanicsPage.part1.scammers.textBold') }}</strong>{{ t('mechanicsPage.part1.scammers.textEnd') }}</p>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part1.scammers.item1') }}</strong> {{ t('mechanicsPage.part1.scammers.item1Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part1.scammers.item2') }}</strong> {{ t('mechanicsPage.part1.scammers.item2Text') }} <strong>{{ t('mechanicsPage.part1.scammers.item2Bold') }}</strong>{{ t('mechanicsPage.part1.scammers.item2TextEnd') }}</li>
              </ul>
            </div>
          </section>

          <!-- Part 2: Store Maintenance -->
          <section id="maintenance" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('mechanicsPage.part2.title') }}</h2>
              <span class="tag warning">{{ t('mechanicsPage.part2.tag') }}</span>
            </div>
            <p>{{ t('mechanicsPage.part2.intro') }}</p>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('mechanicsPage.part2.cleaning.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part2.cleaning.item1') }}</strong> {{ t('mechanicsPage.part2.cleaning.item1Text') }} <strong>{{ t('mechanicsPage.part2.cleaning.item1Bold') }}</strong>{{ t('mechanicsPage.part2.cleaning.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part2.cleaning.item2') }}</strong> {{ t('mechanicsPage.part2.cleaning.item2Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part2.cleaning.item3') }}</strong> {{ t('mechanicsPage.part2.cleaning.item3Text') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part2.power.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part2.power.item1') }}</strong> {{ t('mechanicsPage.part2.power.item1Text') }} <strong>{{ t('mechanicsPage.part2.power.item1Bold') }}</strong>{{ t('mechanicsPage.part2.power.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part2.power.item2') }}</strong> {{ t('mechanicsPage.part2.power.item2Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part2.power.item3') }}</strong> {{ t('mechanicsPage.part2.power.item3Text') }} <strong>{{ t('mechanicsPage.part2.power.item3Bold') }}</strong></li>
              </ul>
            </div>
          </section>

          <!-- Part 3: Survival Tools -->
          <section id="survival" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('mechanicsPage.part3.title') }}</h2>
              <span class="tag danger">{{ t('mechanicsPage.part3.tag') }}</span>
            </div>
            <p>{{ t('mechanicsPage.part3.intro') }}</p>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('mechanicsPage.part3.uvLight.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part3.uvLight.item1') }}</strong> {{ t('mechanicsPage.part3.uvLight.item1Text') }} <strong>{{ t('mechanicsPage.part3.uvLight.item1Bold') }}</strong>{{ t('mechanicsPage.part3.uvLight.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part3.uvLight.item2') }}</strong> {{ t('mechanicsPage.part3.uvLight.item2Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part3.uvLight.item3') }}</strong> {{ t('mechanicsPage.part3.uvLight.item3Text') }} <strong>{{ t('mechanicsPage.part3.uvLight.item3Bold') }}</strong>{{ t('mechanicsPage.part3.uvLight.item3TextEnd') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part3.cctv.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part3.cctv.item1') }}</strong> {{ t('mechanicsPage.part3.cctv.item1Text') }} <strong>{{ t('mechanicsPage.part3.cctv.item1Bold') }}</strong>{{ t('mechanicsPage.part3.cctv.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part3.cctv.item2') }}</strong> {{ t('mechanicsPage.part3.cctv.item2Text') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part3.blinds.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part3.blinds.item1') }}</strong> {{ t('mechanicsPage.part3.blinds.item1Text') }} <strong>{{ t('mechanicsPage.part3.blinds.item1Bold') }}</strong>{{ t('mechanicsPage.part3.blinds.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part3.blinds.item2') }}</strong> {{ t('mechanicsPage.part3.blinds.item2Text') }} <strong>{{ t('mechanicsPage.part3.blinds.item2Bold') }}</strong>{{ t('mechanicsPage.part3.blinds.item2TextEnd') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part3.axe.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('mechanicsPage.part3.axe.usage') }}</strong> {{ t('mechanicsPage.part3.axe.usageText') }} <strong>{{ t('mechanicsPage.part3.axe.usageBold') }}</strong>{{ t('mechanicsPage.part3.axe.usageTextEnd') }}
                <br><strong>{{ t('mechanicsPage.part3.axe.warning') }}</strong> {{ t('mechanicsPage.part3.axe.warningText') }} <strong>{{ t('mechanicsPage.part3.axe.warningBold') }}</strong>{{ t('mechanicsPage.part3.axe.warningTextEnd') }}
              </div>
            </div>
          </section>

          <!-- Part 4: Player Stats -->
          <section id="stats" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('mechanicsPage.part4.title') }}</h2>
              <span class="tag info">{{ t('mechanicsPage.part4.tag') }}</span>
            </div>
            <p>{{ t('mechanicsPage.part4.intro') }}</p>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('mechanicsPage.part4.sanity.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part4.sanity.item1') }}</strong> {{ t('mechanicsPage.part4.sanity.item1Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part4.sanity.item2') }}</strong> {{ t('mechanicsPage.part4.sanity.item2Text') }}</li>
                <li><strong>{{ t('mechanicsPage.part4.sanity.item3') }}</strong> {{ t('mechanicsPage.part4.sanity.item3Text') }} <strong>{{ t('mechanicsPage.part4.sanity.item3Bold') }}</strong>{{ t('mechanicsPage.part4.sanity.item3TextEnd') }} <strong>{{ t('mechanicsPage.part4.sanity.item3Bold2') }}</strong>{{ t('mechanicsPage.part4.sanity.item3TextEnd2') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('mechanicsPage.part4.stamina.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('mechanicsPage.part4.stamina.item1') }}</strong> {{ t('mechanicsPage.part4.stamina.item1Text') }} <strong>{{ t('mechanicsPage.part4.stamina.item1Bold') }}</strong>{{ t('mechanicsPage.part4.stamina.item1TextEnd') }}</li>
                <li><strong>{{ t('mechanicsPage.part4.stamina.item2') }}</strong> {{ t('mechanicsPage.part4.stamina.item2Text') }} <strong>{{ t('mechanicsPage.part4.stamina.item2Bold') }}</strong>{{ t('mechanicsPage.part4.stamina.item2TextEnd') }} <strong>{{ t('mechanicsPage.part4.stamina.item2Bold2') }}</strong>{{ t('mechanicsPage.part4.stamina.item2TextEnd2') }}</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeSection = ref('cashier')

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
.mechanics-page {
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
  grid-template-columns: 260px 1fr;
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

/* Tags */
.tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}
.tag.primary { background: rgba(16, 185, 129, 0.2); color: #10b981; border: 1px solid #10b981; }
.tag.warning { background: rgba(245, 158, 11, 0.2); color: #f59e0b; border: 1px solid #f59e0b; }
.tag.danger { background: rgba(220, 38, 38, 0.2); color: #ef4444; border: 1px solid #ef4444; }
.tag.info { background: rgba(59, 130, 246, 0.2); color: #3b82f6; border: 1px solid #3b82f6; }

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
.alert-box.danger { border-color: #ef4444; color: var(--text-muted); }

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
