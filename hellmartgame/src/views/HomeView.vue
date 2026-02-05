<template>
  <main>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="badge store-badge">STAFF ONLY</span>
            <h1 class="hero-title">Hellmart Game, Endings, Wiki, Strategy Guide & Walkthrough</h1>
            <p class="hero-subtitle">Night Shift Protocol: Survive until 6:00 AM. Ensure all shelves are stocked, floors are clean, and containment procedures for Class-C entities are strictly followed. Failure to comply will result in immediate termination.</p>
            
            <div class="hero-actions">
              <router-link to="/walkthrough" class="btn primary">Start Shift</router-link>
              <router-link to="/wiki" class="btn secondary">Employee Manual</router-link>
            </div>
            
            <div class="hero-stats">
              <div class="stat">
                <span class="label">Store Status</span>
                <span class="value blink-red">OPEN 24/7</span>
              </div>
              <div class="stat">
                <span class="label">Incidents</span>
                <span class="value">0 Days Since Last Accident</span>
              </div>
              <div class="stat">
                <span class="label">Platform</span>
                <span class="value">PC (Steam)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Guides Section -->
    <section class="section quick-guides-section">
      <div class="container">
        <h2 class="section-title">Hellmart Game: Quick Link</h2>
        <p class="section-subtitle">Essential knowledge for new employees.</p>
        
        <div class="grid-3">
          <div class="card">
            <div class="card-image">
              <img src="/images/link-01.webp" alt="Entity Database">
              <div class="card-overlay"></div>
              <div class="price-tag">FREE</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">Entity Database</h3>
              <p class="card-text">Identify the entities trying to enter the store. Learn who to trust and who to deny.</p>
              <router-link to="/wiki" class="card-link">Read Protocol &rarr;</router-link>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/images/link-02.webp" alt="Survival Walkthrough">
              <div class="card-overlay"></div>
              <div class="price-tag">NEW</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">7-Day Walkthrough</h3>
              <p class="card-text">Standard operating procedures for surviving from Day 1 to Day 7.</p>
              <router-link to="/walkthrough" class="card-link">Start Training &rarr;</router-link>
            </div>
          </div>
          <div class="card">
            <div class="card-image">
              <img src="/images/link-03.webp" alt="All Endings Guide">
              <div class="card-overlay"></div>
              <div class="price-tag">HOT</div>
            </div>
            <div class="card-content">
              <h3 class="card-title">All Endings Guide</h3>
              <p class="card-text">Unlock all 3 endings: Owner, Loop, and Monster. Master the Karma system.</p>
              <router-link to="/endings" class="card-link">View Outcomes &rarr;</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Endings Section -->
    <section class="section all-endings-section">
      <div class="container">
        <h2 class="section-title">Hellmart Game: All Endings</h2>
        <p class="section-subtitle">Complete guide to all termination scenarios.</p>
        
        <div class="grid-3">
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge bad">BAD</div>
              <img src="/images/endings-02.webp" alt="Ending 2: Groundhog Day">
            </div>
            <div class="card-content">
              <h3 class="card-title">Ending: Groundhog Day</h3>
              <p class="card-text">Trapped in an eternal loop. The most common fate for new employees.</p>
            </div>
          </div>
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge neutral">EVIL</div>
              <img src="/images/endings-01.webp" alt="Ending 3: Judgment Night">
            </div>
            <div class="card-content">
              <h3 class="card-title">Ending: Judgment Night</h3>
              <p class="card-text">You stole, you killed, and now you have become one of them.</p>
            </div>
          </div>
          <div class="card ending-card">
            <div class="card-image">
              <div class="ending-badge true">TRUE ENDING</div>
              <img src="/images/endings-03.webp" alt="Ending 1: Keys to the Kingdom">
            </div>
            <div class="card-content">
              <h3 class="card-title">Ending: Keys to the Kingdom</h3>
              <p class="card-text">Prove your loyalty, protect the store, and become the new Owner.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hellmart Demo Screenshots Section -->
    <section class="section screenshots-section">
      <div class="container">
        <h2 class="section-title">Hellmart Demo Screenshots</h2>
        <p class="section-subtitle">Surveillance footage from previous shifts.</p>
        <div class="grid-4">
          <div class="screenshot-item">
            <img src="/images/hellmart-01.webp" alt="Screenshot 1">
            <div class="cam-overlay">CAM 01</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-02.webp" alt="Screenshot 2">
            <div class="cam-overlay">CAM 02</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-03.webp" alt="Screenshot 3">
            <div class="cam-overlay">CAM 03</div>
          </div>
          <div class="screenshot-item">
            <img src="/images/hellmart-04.webp" alt="Screenshot 4">
            <div class="cam-overlay">CAM 04</div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is Hellmart Section -->
    <section class="section what-is-hellmart-section">
      <div class="container">
        <div class="what-is-content">
          <div class="text-col">
            <h2 class="section-title" style="text-align: left;">What is Hellmart</h2>
            <p class="section-subtitle" style="text-align: left;">The night shift is waiting for you.</p>
            <p class="intro-text">HELLMART is a psychological horror survival simulation. As the night shift clerk at a convenience store in the middle of nowhere, your job is simple: serve customers, restock shelves, and don't let the darkness in.</p>
            <p class="intro-text">Management advises ignoring any hallucinations, strange noises, or customers with too many limbs. Your safety is not guaranteed, but your paycheck is.</p>
            <router-link to="/mechanics" class="btn primary">Start Training</router-link>
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
        <h2 class="section-title">Hellmart Game Blog</h2>
        <p class="section-subtitle">Latest announcements from corporate.</p>
        <div class="news-grid">
          <div v-for="post in homePosts" :key="post.id" class="news-item">
            <span class="news-date">{{ formatDate(post.publishDate) }}</span>
            <router-link :to="`/blog/${post.addressBar}`" class="news-title">{{ post.title }}</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-subtitle">Read before signing your contract.</p>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">Does Father Grayson kill you?</h3>
            <p class="faq-answer">Yes. Father Grayson is an anomaly. If you let him in, it triggers a Game Over. Watch for typos in his dialogue.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is Tiny Bob a monster?</h3>
            <p class="faq-answer">No. Despite his terrifying appearance (tall, slender), Tiny Bob is a safe human customer. Letting him in is required for Quota.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Can I fight back?</h3>
            <p class="faq-answer">Not directly. You must use defense items (UV Light, Blinds) or simply deny entry. The Axe is only for specific events.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">How do I save my progress?</h3>
            <p class="faq-answer">The game saves automatically after every successful shift (6:00 AM). If you die during a shift, you will restart the day. In Hardcore mode, death deletes your save.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Why is my screen getting blurry?</h3>
            <p class="faq-answer">This indicates low Sanity. You have likely witnessed a paranormal event or stayed in the dark too long. Find a light source immediately or take Sanity Pills.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-question">Is there Multiplayer?</h3>
            <p class="faq-answer">No. Hellmart is a single-player experience designed to isolate you. You are alone on the night shift.</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import blogData from '../data/blog.js'

// Filter blog posts for the homepage
const homePosts = computed(() => {
  return blogData.filter(post => post.isHome).slice(0, 4)
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
