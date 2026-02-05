<template>
  <main class="endings-page">
    <div class="hero-page">
      <div class="container">
        <h1>Hellmart All Endings Guide: How to Unlock Every Fate</h1>
        <p>Step-by-step guide to unlocking the Good, Bad, and Monster endings. Learn the specific requirements and choices for the True Ending.</p>
      </div>
    </div>

    <div class="container">
      <div class="content-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <nav class="toc">
            <h2 class="toc-title">Contents</h2>
            <ul class="toc-list">
              <li><a href="#intro" :class="['toc-link', { active: activeSection === 'intro' }]" @click.prevent="scrollToSection('intro')">Introduction</a></li>
              <li><a href="#ending1" :class="['toc-link', { active: activeSection === 'ending1' }]" @click.prevent="scrollToSection('ending1')">Ending 1: Owner</a></li>
              <li><a href="#ending2" :class="['toc-link', { active: activeSection === 'ending2' }]" @click.prevent="scrollToSection('ending2')">Ending 2: Loop</a></li>
              <li><a href="#ending3" :class="['toc-link', { active: activeSection === 'ending3' }]" @click.prevent="scrollToSection('ending3')">Ending 3: Monster</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Intro -->
          <section id="intro" class="section-block">
            <h2 class="section-title">Introduction: The Karma System</h2>
            <p>Hellmart features a hidden "Karma" system. Every decision you make—from scanning items correctly to choosing dialogue options with the Stranger—pushes you toward one of three fates.</p>
            <div class="alert-box info">
              <strong>Tip:</strong> Your "Customer Satisfaction" rating and interactions with key characters like Father Grayson and Tiny Bob are critical for determining your path.
            </div>
          </section>

          <!-- Ending 1 -->
          <section id="ending1" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Ending 1: Keys to the Kingdom (The "Owner" Ending)</h2>
              <span class="tag success">Rating: 🟢 Best Ending</span>
            </div>
            
            <div class="content-body">
              <h3 class="subsection-title">The Outcome</h3>
              <p>You prove your loyalty. The Manager promotes you, giving you the keys to the store. The neon sign outside changes from "Hellmart" to "HelloMart". You are no longer a worker; you are part of the system.</p>
              
              <h3 class="subsection-title">How to Unlock (Requirements)</h3>
              <ul class="simple-list">
                <li><strong>Perfect Attendance:</strong> Survive all 7 days without dying.</li>
                <li><strong>High KPI:</strong> You must meet the sales quota (Quota) on most days (at least 5/7 days).</li>
                <li><strong>Zero Anomalies:</strong> Do NOT let any lethal monsters inside. Check the <router-link to="/wiki">Entity Database</router-link> for identification tips.</li>
                <li><strong>Be Nice:</strong> Do not steal money. Do not be rude to customers (choose polite dialogue options).</li>
                <li><strong>Good Deeds:</strong> Donate to Father Grayson ($10) if possible.</li>
                <li><strong>Critical Choice:</strong> On Day 6, when the Stranger asks you to leave, reply: "I have to protect this place."</li>
              </ul>
            </div>

            <img src="/images/endings-03.webp" alt="Ending 1" class="section-image">
          </section>

          <!-- Ending 2 -->
          <section id="ending2" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Ending 2: Groundhog Day (The "Loop" Ending)</h2>
              <span class="tag neutral">Rating: ⚪ Neutral / Bad Ending</span>
            </div>
            <p class="subtitle">(Most players get this on their first run)</p>

            <div class="content-body">
              <h3 class="subsection-title">The Outcome</h3>
              <p>The clock strikes 6:00 AM on Day 7. You expect freedom. Instead, the phone rings. The Manager says: "Due to staffing shortages, your shift has been extended." The calendar rewinds back to Day 1. You are trapped in an eternal work cycle.</p>
              
              <h3 class="subsection-title">How to Unlock</h3>
              <ul class="simple-list">
                <li><strong>Mediocre Performance:</strong> Survive 7 days, but miss the Quota on some days.</li>
                <li><strong>Mixed Karma:</strong> You didn't steal enough to trigger the Evil ending, but you weren't perfect enough for the Owner ending.</li>
                <li><strong>Mixed Decisions:</strong> Sometimes let anomalies in, sometimes keep them out.</li>
                <li>Simply playing the game "normally" usually results in this.</li>
              </ul>
            </div>

            <img src="/images/endings-01.webp" alt="Ending 2" class="section-image">
          </section>

          <!-- Ending 3 -->
          <section id="ending3" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Ending 3: Judgment Night (The "Monster" Ending)</h2>
              <span class="tag danger">Rating: 🔴 Evil Ending</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">The Outcome</h3>
              <p>You succumb to the corruption. The store's security turns on you. Instead of dying, you transform. You kill the Manager when he arrives. The final shot implies you are now the monster that the next employee will have to face.</p>
              
              <h3 class="subsection-title">How to Unlock</h3>
              <ul class="simple-list">
                <li><strong>Max Bad Karma:</strong> Be the worst employee possible.</li>
                <li><strong>Theft:</strong> Steal money from the register whenever possible (Total > $500).</li>
                <li><strong>Sabotage:</strong> Deliberately let non-lethal anomalies (like The Shoplifter) inside or ignore them.</li>
                <li><strong>Rude Dialogue:</strong> Choose aggressive options when talking to The Stranger or customers.</li>
                <li><strong>Corruption:</strong> Stare at the "Shadow Man" in the aisles to increase your corruption level.</li>
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
