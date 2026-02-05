<template>
  <main class="mechanics-page">
    <div class="hero-page">
      <div class="container">
        <h1>Hellmart Game Mechanics & Controls Guide</h1>
        <p>Master the register, manage your Sanity, and learn how to use the CCTV to fix anomalies. A complete guide to every tool and system.</p>
      </div>
    </div>

    <div class="container">
      <div class="content-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <nav class="toc">
            <h3 class="toc-title">Contents</h3>
            <ul class="toc-list">
              <li><a href="#cashier" :class="['toc-link', { active: activeSection === 'cashier' }]" @click.prevent="scrollToSection('cashier')">Part 1: Cashier Systems</a></li>
              <li><a href="#maintenance" :class="['toc-link', { active: activeSection === 'maintenance' }]" @click.prevent="scrollToSection('maintenance')">Part 2: Store Maintenance</a></li>
              <li><a href="#survival" :class="['toc-link', { active: activeSection === 'survival' }]" @click.prevent="scrollToSection('survival')">Part 3: Survival Tools</a></li>
              <li><a href="#stats" :class="['toc-link', { active: activeSection === 'stats' }]" @click.prevent="scrollToSection('stats')">Part 4: Player Stats</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Part 1: Cashier Systems -->
          <section id="cashier" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Part 1: The Cashier Systems</h2>
              <span class="tag primary">Core Gameplay</span>
            </div>
            <p>This is the foundation of the game. Learn how to earn money quickly to meet your KPI.</p>
            
            <div class="content-body">
              <h3 class="subsection-title">1. Scanning & Bagging</h3>
              <ul class="simple-list">
                <li><strong>The Basics:</strong> Pick up item &rarr; Aim at barcode &rarr; Scan &rarr; Put in bag.</li>
                <li><strong>Pro Tip (Combo):</strong> Do NOT scan one by one. Pick up all items on the counter first and pile them in your hand. Then, quickly scan and bag them all at once. This triggers a <strong>"Speed Bonus"</strong>.</li>
                <li><strong>The Scanner:</strong> The default scanner is slow. Buy the <strong>High-Capacity Scanner ($200)</strong> ASAP to double your scanning speed.</li>
              </ul>

              <h3 class="subsection-title">2. The Silent Alarm</h3>
              <p>Located under the counter (a small red button). This is a critical tool for store security.</p>
              <ul class="simple-list">
                <li><strong>Usage:</strong> Specifically designed for <strong>The Shoplifter</strong>.</li>
                <li><strong>Action:</strong> Press the alarm the exact moment the Shoplifter puts an item into their pocket.</li>
              </ul>
              <div class="alert-box danger">
                <strong>Warning:</strong> If you press it by mistake (on a normal customer), you will lose a massive amount of <strong>Reputation</strong>.
              </div>

              <h3 class="subsection-title">3. Dealing with Scammers</h3>
              <p>Scammers start appearing from <strong>Day 4</strong> onwards.</p>
              <ul class="simple-list">
                <li><strong>Fake Money:</strong> Examine the bills closely. Fake notes have blurry watermarks or the denomination reads "$0".</li>
                <li><strong>Wrong Change:</strong> Some customers will claim you gave them the wrong change. Do not believe them blindly. Check the register log. If the math is correct, click <strong>"Reject Complaint"</strong>.</li>
              </ul>
            </div>
          </section>

          <!-- Part 2: Store Maintenance -->
          <section id="maintenance" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Part 2: Store Maintenance</h2>
              <span class="tag warning">Management</span>
            </div>
            <p>If you neglect the store, customers will leave angry or equipment will break down.</p>

            <div class="content-body">
              <h3 class="subsection-title">1. Cleaning</h3>
              <ul class="simple-list">
                <li><strong>Footprints:</strong> Customers track in snow and mud. Use the <strong>Mop</strong> to clean it up.</li>
                <li><strong>Trash:</strong> Pick up trash on the floor and throw it in the bin outside.</li>
                <li><strong>Consequence:</strong> Dirty Store = Low Tips = Missed KPI.</li>
              </ul>

              <h3 class="subsection-title">2. Power Management</h3>
              <ul class="simple-list">
                <li><strong>The Fuse Box:</strong> Located on the wall in the <strong>Storage Room</strong> (Backroom).</li>
                <li><strong>Overload:</strong> If you have too many lights/devices on, or if the blizzard is too strong, the circuit breaker will trip.</li>
                <li><strong>Repair:</strong> You must go to the Storage Room and flip the lever back up. <strong>Remember to bring a flashlight!</strong></li>
              </ul>
            </div>
          </section>

          <!-- Part 3: Survival Tools -->
          <section id="survival" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Part 3: Survival Tools</h2>
              <span class="tag danger">Defense</span>
            </div>
            <p>Understanding your defensive tools is the only way to survive the night.</p>

            <div class="content-body">
              <h3 class="subsection-title">1. UV Light</h3>
              <ul class="simple-list">
                <li><strong>Usage:</strong> Identify <strong>Mimics</strong>.</li>
                <li><strong>How to use:</strong> Shine the light on a customer's hands, neck, or face.</li>
                <li><strong>Signs:</strong> If you see <strong>Glowing Seams</strong> on the skin or incorrect fingerprints, it is a monster.</li>
              </ul>

              <h3 class="subsection-title">2. CCTV Monitor</h3>
              <ul class="simple-list">
                <li><strong>Static (Interference):</strong> The most basic indicator. If the camera feed shakes or shows static noise when looking at someone, <strong>DO NOT OPEN THE DOOR</strong>.</li>
                <li><strong>Blind Spots:</strong> Cameras have blind spots. Some monsters will hide directly under the camera. You must visually confirm their presence through the window.</li>
              </ul>

              <h3 class="subsection-title">3. The Blinds</h3>
              <ul class="simple-list">
                <li><strong>Usage:</strong> Defense against visual-based monsters (e.g., <strong>The Smiling Woman</strong>).</li>
                <li><strong>Mechanic:</strong> Pulling the blinds cuts off their <strong>Line of Sight</strong>. Use this immediately when you hear a tapping sound on the window.</li>
              </ul>

              <h3 class="subsection-title">4. The Axe</h3>
              <div class="alert-box danger">
                <strong>Usage:</strong> Only used for the <strong>Day 3 Hand Event</strong> or specific scripted kills.
                <br><strong>Warning:</strong> Do NOT use it on normal customers. This results in an immediate <strong>Game Over</strong>.
              </div>
            </div>
          </section>

          <!-- Part 4: Player Stats -->
          <section id="stats" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Part 4: Player Stats</h2>
              <span class="tag info">Status</span>
            </div>
            <p>Many players die without knowing why. Keep an eye on your vitals.</p>

            <div class="content-body">
              <h3 class="subsection-title">1. Sanity</h3>
              <ul class="simple-list">
                <li><strong>What lowers it:</strong> Staying in the dark, staring at monsters, or witnessing paranormal events.</li>
                <li><strong>Symptoms:</strong> Blurry vision, distorted audio, loud heartbeat, and seeing fake figures (Hallucinations).</li>
                <li><strong>How to recover:</strong> Stand near <strong>Light Sources</strong> or take <strong>Sanity Pills</strong> (buy from Pharmacy).</li>
              </ul>

              <h3 class="subsection-title">2. Stamina</h3>
              <ul class="simple-list">
                <li><strong>Mechanic:</strong> Your ability to <strong>Sprint</strong> is limited.</li>
                <li><strong>Boost:</strong> Drinking <strong>Coffee</strong> or <strong>Soda</strong> temporarily increases your stamina recovery speed.</li>
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
