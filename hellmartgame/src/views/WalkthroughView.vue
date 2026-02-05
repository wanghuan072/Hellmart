<template>
  <main class="walkthrough-page">
    <div class="hero-page">
      <div class="container">
        <h1>Hellmart Full Gameplay Walkthrough: Day 1 to Ending</h1>
        <p>The complete day-by-day survival guide. Learn how to manage the economy, survive power outages, and reach the final shift.</p>
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
              <li><a href="#day1" :class="['toc-link', { active: activeSection === 'day1' }]" @click.prevent="scrollToSection('day1')">Day 1: Orientation</a></li>
              <li><a href="#day2" :class="['toc-link', { active: activeSection === 'day2' }]" @click.prevent="scrollToSection('day2')">Day 2: First Anomalies</a></li>
              <li><a href="#day3" :class="['toc-link', { active: activeSection === 'day3' }]" @click.prevent="scrollToSection('day3')">Day 3: Generator & Axe</a></li>
              <li><a href="#day4" :class="['toc-link', { active: activeSection === 'day4' }]" @click.prevent="scrollToSection('day4')">Day 4: Faith & Coin</a></li>
              <li><a href="#day5" :class="['toc-link', { active: activeSection === 'day5' }]" @click.prevent="scrollToSection('day5')">Day 5: Smiling Woman</a></li>
              <li><a href="#day6" :class="['toc-link', { active: activeSection === 'day6' }]" @click.prevent="scrollToSection('day6')">Day 6: Drunk & Imposter</a></li>
              <li><a href="#day7" :class="['toc-link', { active: activeSection === 'day7' }]" @click.prevent="scrollToSection('day7')">Day 7: The Stranger</a></li>
              <li><a href="#day8" :class="['toc-link', { active: activeSection === 'day8' }]" @click.prevent="scrollToSection('day8')">Day 8: The End</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Intro -->
          <section id="intro" class="section-block">
            <h2 class="section-title">Introduction: The Gameplay Loop</h2>
            <p>In Hellmart, your goal is simple: Earn enough money to meet the daily Quota (KPI) while surviving the night. The day is split into two phases:</p>
            
            <div class="gameplay-loop">
              <div class="loop-phase safe">
                <div class="phase-header">
                  <span class="phase-label">PHASE 01</span>
                  <h3 class="subsection-title">Stocking & Cleaning</h3>
                </div>
                <p>The Safe phase. Keep the store tidy, shelf items, and clear snow to keep customers happy.</p>
              </div>
              <div class="loop-phase danger">
                <div class="phase-header">
                  <span class="phase-label">PHASE 02</span>
                  <h3 class="subsection-title">The Night Shift</h3>
                </div>
                <p>The Defense phase. Use CCTV and intuition to filter out Anomalies.</p>
              </div>
              <div class="loop-phase core">
                <div class="phase-header">
                  <span class="phase-label">CORE</span>
                  <h3 class="subsection-title">Energy Management</h3>
                </div>
                <p>Watch your Stamina. Buy Coffee to move faster.</p>
              </div>
            </div>
          </section>

          <!-- Day 1 -->
          <section id="day1" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 1: Orientation & Basics</h2>
              <span class="tag low">Focus: Learning the controls. No lethal threats.</span>
            </div>
            
            <div class="content-body">
              <h3 class="subsection-title">Morning</h3>
              <ul class="simple-list">
                <li><strong>Pick up the Shovel</strong> outside and clear the snow pile. You cannot enter until this is done.</li>
              </ul>

              <h3 class="subsection-title">The Call</h3>
              <ul class="simple-list">
                <li>Answer the phone at the booth. The Boss introduces the job.</li>
              </ul>
              
              <h3 class="subsection-title">Setup</h3>
              <ul class="simple-list">
                <li><strong>Go to Storage</strong> (back building), pick up boxes (Chips/Peanuts), and stock the shelves.</li>
                <li>Find the <strong>Pager</strong> on the counter.</li>
                <li><strong>Clean</strong> any dirt spots with the Mop or Sponge.</li>
              </ul>

              <h3 class="subsection-title">Open Store</h3>
              <ul class="simple-list">
                <li>Flip the sign to "OPEN".</li>
              </ul>

              <h3 class="subsection-title">Day Shift</h3>
              <ul class="simple-list">
                <li>Serve customers. Scan items, take cash, give change.</li>
              </ul>

              <h3 class="subsection-title">Closing</h3>
              <ul class="simple-list">
                <li>When the pager beeps, flip the sign to "TECHNICAL BREAK".</li>
              </ul>

              <div class="alert-box success">
                <strong>Night:</strong> No visitors tonight. Go to the staff room and sleep.
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-01.webp" alt="Day 1" class="section-image">
          </section>

          <!-- Day 2 -->
          <section id="day2" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 2: First Anomalies</h2>
              <span class="tag medium">Focus: Identifying your first Night Visitor.</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Soda is now available in Storage. Stock it.</p>

              <h3 class="subsection-title">The Tall Man (Tiny Bob)</h3>
              <ul class="simple-list">
                <li>A giant man in a green jacket will enter. <strong>Do not panic.</strong> He is a safe, paying customer.</li>
              </ul>

              <h3 class="subsection-title">Night Shift Event</h3>
              <div class="alert-box info">
                <strong>Visitor:</strong> Colin (Bald man in black coat).<br>
                <strong>Story:</strong> Claims he missed the bus and hears noises.<br>
                <strong>Decision:</strong> <span class="tag low">LET IN</span><br>
                <strong>Result:</strong> He pays you $5 and shops peacefully.
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-02.webp" alt="Day 2" class="section-image">
          </section>

          <!-- Day 3 -->
          <section id="day3" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 3: The Generator & The Axe</h2>
              <span class="tag high">Focus: Survival & Weaponry</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Beer & Whiskey.</p>

              <h3 class="subsection-title">Event: Power Outage</h3>
              <div class="alert-box danger">
                <strong>The lights will cut out.</strong>
              </div>
              <h3 class="subsection-title">Solution</h3>
              <ul class="ordered-list">
                <li>Go to the Storage shed outside.</li>
                <li>Find the <strong>Fuel Canister</strong>.</li>
                <li>Fill the <strong>Generator</strong> (side of the building) and pull the cord.</li>
              </ul>
              <h3 class="subsection-title">Weapon Acquired</h3>
              <p>You will find a <strong>Fire Axe</strong> in the emergency glass case. Take it.</p>

              <h3 class="subsection-title">Night Threat</h3>
              <ul class="simple-list">
                <li><strong>The Meat Worm:</strong> A giant tentacle might appear on the floor. Use the Axe.</li>
                <li><strong>The Grabber Arm:</strong> A hand reaching from shelves/ceiling. Use the Axe.</li>
              </ul>
            </div>

            <img src="/images/walkthrough/walkthrough-03.webp" alt="Day 3" class="section-image">
          </section>

          <!-- Day 4 -->
          <section id="day4" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 4: Faith & The Coin</h2>
              <span class="tag high">Focus: Moral choices</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Cereal & Hotdogs.</p>

              <h3 class="subsection-title">Special Customer: The Coin Toss Man</h3>
              <p>He asks "Heads or Tails?".</p>
              <div class="alert-box success">
                <strong>Tip:</strong> If you win, he gives you a Lucky Quarter. Keep it!
              </div>

              <h3 class="subsection-title">Night Shift Event</h3>
              <div class="alert-box danger">
                <strong>Visitor:</strong> Father Grayson (Priest with glowing eyes).<br>
                <strong>Story:</strong> Claims he feels a "darkness" and wants to enter to cleanse it.<br>
                <strong>Decision:</strong> <span class="tag severe">DENY / CHASE OFF</span><br>
                <strong>Reason:</strong> He is an anomaly trying to sacrifice you.
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-04.webp" alt="Day 4" class="section-image">
          </section>

          <!-- Day 5 -->
          <section id="day5" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 5: The Smiling Woman</h2>
              <span class="tag high">Focus: Psychological Horror</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Pickles.</p>

              <h3 class="subsection-title">Sticky Notes</h3>
              <p>You will start finding yellow notes (Lore) revealing the store might be a living organism.</p>

              <h3 class="subsection-title">Night Shift Event</h3>
              <div class="alert-box danger">
                <strong>Visitor:</strong> The Smiling Woman (Black raincoat, huge grin).<br>
                <strong>Story:</strong> Claims she "used to work here" and is scared.<br>
                <strong>Decision:</strong> <span class="tag severe">DENY / CHASE OFF</span><br>
                <strong>Reason:</strong> Her story is a lie, and her appearance triggers static/audio cues.
              </div>
            </div>
          </section>

          <!-- Day 6 -->
          <section id="day6" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 6: The Drunk & The Imposter</h2>
              <span class="tag severe">Focus: Spotting the difference</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Minced Meat.</p>

              <h3 class="subsection-title">Problem Customer: Boozer</h3>
              <p>Drunk guy in green jacket. He will try to drink in the store. You must tell him to leave or pay.</p>

              <h3 class="subsection-title">Night Shift Event</h3>
              <div class="alert-box danger">
                <strong>Visitor:</strong> Stalled Car Man (Looks exactly like Boozer but acts sober/weird).<br>
                <strong>Story:</strong> Claims his car stalled.<br>
                <strong>Decision:</strong> <span class="tag severe">DENY</span><br>
                <strong>Reason:</strong> It's a Mimic of the drunk guy you saw earlier.
              </div>
            </div>
          </section>

          <!-- Day 7 -->
          <section id="day7" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 7: The Stranger (Climax)</h2>
              <span class="tag nightmare">Focus: The Final Test</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">New Product</h3>
              <p>Cat Food.</p>

              <h3 class="subsection-title">Environment</h3>
              <p>The sky turns Blood Red.</p>

              <h3 class="subsection-title">Night Shift Event (BOSS)</h3>
              <div class="alert-box danger">
                <strong>Visitor:</strong> The Stranger (Masked figure in green robes).<br>
                <strong>Interaction:</strong> He reveals the store is a cage. He asks you to help him destroy it or "join the family."<br>
                <strong>Decision:</strong> <span class="tag success">REFUSE HIM</span>. Say "I have to protect this place."<br>
                <strong>Result:</strong> You remain loyal to your duty (essential for the Good Ending).
              </div>
            </div>
          </section>

          <!-- Day 8 -->
          <section id="day8" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">Day 8: The End</h2>
              <span class="tag success">Focus: Victory Lap</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">Morning</h3>
              <p>The store is on fire.</p>

              <h3 class="subsection-title">The Parking Lot</h3>
              <p>All the customers you saved/served (Tiny Bob, Karen, Coin Man, etc.) are standing outside applauding you.</p>

              <h3 class="subsection-title">The Bus</h3>
              <ul class="simple-list">
                <li><strong>Arrival:</strong> The bus arrives.</li>
                <li><strong>Action:</strong> Get on the bus. Pay your fare (2 coins). Sit down.</li>
                <li><strong>Result:</strong> Good Ending Achieved. The title screen changes to "HelloMart".</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const activeSection = ref('');

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, {
    rootMargin: '-15% 0px -80% 0px' 
  });

  const sections = document.querySelectorAll('.section-block');
  sections.forEach(section => {
    observer.observe(section);
  });

  onUnmounted(() => {
    sections.forEach(section => {
      observer.unobserve(section);
    });
  });
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    activeSection.value = id;
  }
};
</script>

<style scoped>
.walkthrough-page {
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
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

.main-content img{
  max-width: 100%;
  height: auto;
}

/* Sidebar */
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

/* Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.section-block {
  scroll-margin-top: 6rem;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
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
.tag.low { background: rgba(0, 255, 0, 0.2); color: #00ff88; }
.tag.medium { background: rgba(255, 200, 0, 0.2); color: #ffcc00; }
.tag.high { background: rgba(255, 100, 0, 0.2); color: #ff6600; }
.tag.severe, .tag.nightmare { background: rgba(255, 0, 0, 0.2); color: #ff003c; border: 1px solid #ff003c; }
.tag.success { background: rgba(0, 255, 0, 0.2); color: #00ff88; border: 1px solid #00ff88; }

/* Gameplay Loop List */
.gameplay-loop {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.loop-phase {
  background: rgba(255, 255, 255, 0.03);
  padding: 1.5rem;
  border-radius: 0 4px 4px 0;
  border-left: 4px solid var(--border);
  transition: all 0.3s ease;
}

.loop-phase:hover {
  background: rgba(255, 255, 255, 0.06);
  transform: translateX(5px);
}

.loop-phase.safe { border-left-color: #00ff88; }
.loop-phase.danger { border-left-color: var(--accent); }
.loop-phase.core { border-left-color: var(--highlight); }

.phase-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.phase-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 900;
  padding: 2px 6px;
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-muted);
  border-radius: 2px;
}

.loop-phase .subsection-title {
  margin: 0 !important; /* Override section-block h3 margin */
  font-size: 1.2rem;
  font-family: var(--font-display);
  color: var(--text);
  letter-spacing: 1px;
}

.loop-phase p {
  margin: 0;
  padding-left: calc(1rem + 50px); /* Align text under title roughly */
  font-size: 0.95rem;
  color: var(--text-muted);
}

@media (max-width: 600px) {
  .phase-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .loop-phase p {
    padding-left: 0;
    margin-top: 0.5rem;
  }
}

/* Alert Boxes */
.alert-box {
  padding: 1rem;
  border-radius: 6px;
  margin: 1rem 0;
  border-left: 4px solid;
  background: rgba(255, 255, 255, 0.05);
}
.alert-box.info { border-color: var(--accent-secondary); }
.alert-box.success { border-color: #00ff88; }
.alert-box.danger { border-color: var(--accent); color: #ffcccc; }

/* Lists */
.simple-list, .ordered-list {
  padding-left: 1.5rem;
  color: #ccc;
}
.simple-list li { list-style: disc; margin-bottom: 0.5rem; }
.ordered-list li { margin-bottom: 0.5rem; }

/* Shopping */
.shopping-row {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--border);
  color: var(--highlight);
  font-family: var(--font-mono);
}

/* Endings List */
.endings-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ending-item {
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
}

.ending-item.true { border-color: var(--highlight); box-shadow: 0 0 10px rgba(255, 230, 0, 0.1); }
.ending-item.evil { border-color: var(--accent); }

.ending-item h4 {
  margin-bottom: 0.5rem;
  color: #fff;
}

.ending-item ul {
  list-style: none;
  margin-bottom: 0.5rem;
  color: #aaa;
}

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
  }
  
  .toc-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .toc-link {
    background: rgba(255, 255, 255, 0.05);
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
