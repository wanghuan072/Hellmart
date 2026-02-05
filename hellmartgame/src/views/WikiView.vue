<template>
  <main class="wiki-page">
    <div class="hero-page">
      <div class="container">
        <h1 class="hero-title">Hellmart Entity Database: All Characters, Monsters & Anomalies</h1>
        <p class="subtitle">The ultimate identification guide for the night shift. Learn who is Safe, who is Dangerous, and exactly what happens if you let them in.</p>
      </div>
    </div>

    <div class="container">
      <div class="wiki-layout">
        <!-- Left Sidebar: Table of Contents -->
        <aside class="wiki-sidebar">
          <nav class="toc">
            <h2 class="toc-title">Directory</h2>
            <ul class="toc-list">
              <li class="toc-item"><a href="#golden-rules" :class="['toc-link', { active: activeTopSection === 'golden-rules' }]" @click.prevent="scrollToSection('golden-rules')">1. Golden Rules</a></li>
              <li class="toc-item">
                <a href="#all-characters" :class="['toc-link', { active: activeTopSection === 'all-characters' }]" @click.prevent="scrollToSection('all-characters')">2. All Characters</a>
                <ul class="toc-sublist">
                  <li><a href="#core-characters" :class="['toc-sublink', { active: activeSection === 'core-characters' }]" @click.prevent="scrollToSection('core-characters')">Core / Story Characters</a></li>
                  <li><a href="#regulars-day" :class="['toc-sublink', { active: activeSection === 'regulars-day' }]" @click.prevent="scrollToSection('regulars-day')">The Regulars (Daytime)</a></li>
                  <li><a href="#night-visitors" :class="['toc-sublink', { active: activeSection === 'night-visitors' }]" @click.prevent="scrollToSection('night-visitors')">Night Visitors</a></li>
                  <li><a href="#entities-anomalies" :class="['toc-sublink', { active: activeSection === 'entities-anomalies' }]" @click.prevent="scrollToSection('entities-anomalies')">Entities / Anomalies</a></li>
                </ul>
              </li>
              <li class="toc-item"><a href="#special-events" :class="['toc-link', { active: activeTopSection === 'special-events' }]" @click.prevent="scrollToSection('special-events')">3. Game Modes & Events</a></li>
              <li class="toc-item"><a href="#faq" :class="['toc-link', { active: activeTopSection === 'faq' }]" @click.prevent="scrollToSection('faq')">4. FAQ</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Right Content -->
        <div class="wiki-content">
          <!-- Part 1: Golden Rules -->
          <section id="golden-rules" class="wiki-section">
            <h2 class="section-title">The 3 Golden Rules</h2>
            <p class="section-intro">Applicable primarily during the <strong>Night Shift</strong>. Trust your equipment over your eyes.</p>
            <div class="rules-list">
              <div class="rule-row">
                <div class="rule-number">01</div>
                <div class="rule-content">
                  <h3 class="rule-title">CCTV First</h3>
                  <p class="rule-desc">When someone knocks at night, check CCTV first. Flickering or interference usually signals danger—deny entry.</p>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-number">02</div>
                <div class="rule-content">
                  <h3 class="rule-title">Don’t Judge by Looks</h3>
                  <p class="rule-desc">Some scary-looking customers are honest payers. Tiny Bob and the Faceless Customer are usually safe—serve them normally.</p>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-number">03</div>
                <div class="rule-content">
                  <h3 class="rule-title">Cleaning Is Defense</h3>
                  <p class="rule-desc">Blood, meat piles, and puke attract flies and more anomalies. Keep floors and walls clean to reduce risks and keep customers calm.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Part 2: All Characters -->
          <section id="all-characters" class="wiki-section">
            <h2 class="section-title">All Characters</h2>
            <!-- Core / Story Characters -->
            <div id="core-characters" class="wiki-subsection">
              <h3 class="subsection-title">Core / Story Characters</h3>
              <div class="entity-list">
                <div class="entity-card special">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Helluser (Player)</h3>
                      <span class="status-badge purple">CORE</span>
                    </div>
                    <p class="info-text">The protagonist; Hellmart’s new employee.</p>
                  </div>
                </div>
                <div class="entity-card special">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">The Boss</h3>
                      <span class="status-badge purple">LORE</span>
                    </div>
                    <p class="info-text">Only heard via the Phone Booth in the morning. Tasks escalate from encouraging to threatening. Key line: “Fear keeps you alive.”</p>
                  </div>
                </div>
                <div class="entity-card safe">
                   <div class="entity-image">
                    <img src="/images/wiki/wiki-01.webp" alt="Karen">
                  </div>
                  <div class="entity-info">
                    <div class="entity-header">
                      <h3 class="entity-name">The Stranger</h3>
                      <span class="status-badge purple">LORE</span>
                    </div>
                    <p class="info-text">Antagonist in green raincoat/robe with a horror mask. Tries to recruit you (“Join the family”). Refusing and holding out leads toward the good ending.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- The Regulars (Daytime) -->
            <div id="regulars-day" class="wiki-subsection">
              <h3 class="subsection-title">The Regulars (Daytime)</h3>
              <div class="entity-list">
                <!-- Karen -->
                <div class="entity-card safe">
                  <div class="entity-image">
                    <img src="/images/wiki/wiki-02.webp" alt="Karen">
                  </div>
                  <div class="entity-info">
                    <div class="entity-header">
                      <h3 class="entity-name">Karen</h3>
                      <span class="status-badge green">SAFE</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">Behavior:</strong>
                      <p class="info-text">Extremely picky. If the store is dirty (puke/dirt), she may refuse to pay and cause a scene.</p>
                    </div>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value green">LET IN</span>
                    </div>
                  </div>
                </div>
                
                <!-- Old Lady -->
                <div class="entity-card warning">
                  <div class="entity-image">
                    <img src="/images/wiki/wiki-03.webp" alt="Karen">
                  </div>
                  <div class="entity-info">
                    <div class="entity-header">
                      <h3 class="entity-name">Old Lady</h3>
                      <span class="status-badge yellow">WATCH</span>
                    </div>
                    <p class="info-text">Wears purple/red hat, rambling speech. Mentions forgetting her knife and threatens to cut someone’s face.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value yellow">LET IN & WATCH</span>
                    </div>
                  </div>
                </div>

                <!-- Tiny Bob (Day) -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Tiny Bob (Day)</h3>
                      <span class="status-badge green">SAFE</span>
                    </div>
                    <p class="info-text">Extremely tall, quiet man. Despite the scary appearance, commonly considered “good”.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value green">LET IN</span>
                    </div>
                  </div>
                </div>

                <!-- Coin Toss Man -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">The Coin Toss Man</h3>
                      <span class="status-badge yellow">WATCH</span>
                    </div>
                    <p class="info-text">Mushroom-style haircut, leather jacket. Invites you to guess heads or tails and hands you a “Lucky Quarter”.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value yellow">LET IN & WATCH</span>
                    </div>
                  </div>
                </div>

                <!-- Boozer (Day) -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Boozer (Day)</h3>
                      <span class="status-badge yellow">WATCH</span>
                    </div>
                    <p class="info-text">Green jacket, dark eye circles. Tries to drink inside or not pay. Highly unstable.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value yellow">LET IN & WATCH</span>
                    </div>
                  </div>
                </div>

                <!-- Suspicious Customer -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Suspicious Customer</h3>
                      <span class="status-badge yellow">WATCH</span>
                    </div>
                    <p class="info-text">Wears hoodie, avoids showing face, acts shifty.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value yellow">LET IN & WATCH</span>
                    </div>
                  </div>
                </div>

                <!-- Faceless Customer -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Faceless Customer</h3>
                      <span class="status-badge green">SAFE</span>
                    </div>
                    <p class="info-text">A blank, flesh-colored face. Despite appearances, he’s a regular daytime customer—checkout normally.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value green">LET IN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Night Visitors -->
            <div id="night-visitors" class="wiki-subsection">
              <h3 class="subsection-title">Night Visitors</h3>
              <div class="entity-list">
                <!-- Colin -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Colin</h3>
                      <span class="status-badge green">SAFE</span>
                    </div>
                    <p class="info-text">Claims to be a local who missed the last bus. Generally considered safe if let in.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value green">LET IN</span>
                    </div>
                  </div>
                </div>

                <!-- The Smiling Woman -->
                <div class="entity-card anomaly">
                  <!-- <div class="entity-image">
                    <img src="/images/wiki/wiki-01.webp" alt="Smiling Woman">
                  </div> -->
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">The Smiling Woman</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">Appearance:</strong>
                      <p class="info-text">Woman pressing face against glass. Unnaturally wide "Skibidi" smile showing gums.</p>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">The Trap:</strong>
                      <p class="info-text">Uses psychological manipulation. "I am not outside. YOU are outside." Do not open the door.</p>
                    </div>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value red">DENY & CLOSE BLINDS</span>
                    </div>
                  </div>
                </div>

                <!-- Father Grayson -->
                <div class="entity-card anomaly">
                  <!-- <div class="entity-image">
                    <img src="/images/wiki/wiki-02.webp" alt="Father Grayson">
                  </div> -->
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Father Grayson</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">Appearance:</strong>
                      <p class="info-text">Elderly man in priest outfit. Speaks calmly, asks for "donation".</p>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">Identification:</strong>
                      <ul class="bullet-list">
                        <li>Spelling errors (e.g., "Salvation" wrong).</li>
                        <li>Heavy CCTV glitch.</li>
                      </ul>
                    </div>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value red">DENY (Multiple times)</span>
                    </div>
                  </div>
                </div>

                <!-- Boozer (Night) -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Boozer (Night)</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <p class="info-text">Returns at night, floating or convulsing—clearly possessed or transformed.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value red">DENY</span>
                    </div>
                  </div>
                </div>

                <!-- Tiny Bob (Night) -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Tiny Bob (Night)</h3>
                      <span class="status-badge green">SAFE</span>
                    </div>
                    <p class="info-text">Appears at night and offers $100 to enter and hide from pursuers.</p>
                    <div class="action-row">
                      <span class="action-label">Protocol:</span>
                      <span class="action-value green">LET IN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Entities / Anomalies -->
            <div id="entities-anomalies" class="wiki-subsection">
              <h3 class="subsection-title">Entities / Anomalies</h3>
              <div class="entity-list">
                <!-- The Grabber Arm -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">The Grabber Arm</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <p class="info-text">A giant flesh-colored arm reaching from vents or behind shelves. Use the Axe when scripted.</p>
                  </div>
                </div>
                <!-- The Meat Worm -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">The Meat Worm</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <p class="info-text">A massive intestine-like worm crawling on the floor.</p>
                  </div>
                </div>
                <!-- Flesh Pile -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">Flesh Pile</h3>
                      <span class="status-badge red">ANOMALY</span>
                    </div>
                    <p class="info-text">A puddle of blood and flesh requiring cleanup.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Part 3: Game Modes & Events -->
          <section id="special-events" class="wiki-section">
            <h2 class="section-title text-purple">Game Modes & Events</h2>
            <div class="entity-list">
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Day Shift</h3>
                    <span class="status-badge purple">SIMULATION</span>
                  </div>
                  <p class="info-text">Standard shop management. Stock shelves, clean spills, and serve customers to earn money. <strong>Goal:</strong> Maximize profit to buy defense items for the night.</p>
                </div>
              </div>
              
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Night Shift</h3>
                    <span class="status-badge red">SURVIVAL</span>
                  </div>
                  <p class="info-text">The core horror experience. Anomalies appear. Use your earnings to buy tools (flashlight, holy water, etc.). <strong>Goal:</strong> Survive until 6 AM.</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Daily Quota</h3>
                    <span class="status-badge purple">SYSTEM</span>
                  </div>
                  <p class="info-text">Each day has a sales target (e.g., $15, $35, $100). Failing repeatedly steers you toward a bad ending.</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Technical Break</h3>
                    <span class="status-badge purple">SCHEDULE</span>
                  </div>
                  <p class="info-text">At dusk, flip the sign to “Closed” and secure the front door before the night phase begins.</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Generator Maintenance</h3>
                    <span class="status-badge purple">MAINTENANCE</span>
                  </div>
                  <p class="info-text">Outdoor generator needs fuel and a manual pull. If it dies, fix power immediately—never open the door during outages.</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">Bus Ride</h3>
                    <span class="status-badge purple">TRAVEL</span>
                  </div>
                  <p class="info-text">Commute by bus in the morning and leave at night—unless endings or events alter your routine.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- FAQ -->
          <section id="faq" class="wiki-section">
            <h2 class="section-title">FAQ</h2>
            <div class="faq-grid">
              <div class="faq-card">
                <h3 class="faq-question">Can I kill the customers?</h3>
                <p class="faq-answer">No. Hitting regular customers with an axe only annoys them or makes them complain; it doesn’t solve problems.</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">What happens if I don’t clean the puke?</h3>
                <p class="faq-answer">Puke and grime lower store reputation. Picky customers (like Karen) may refuse to pay or tip less.</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">Where do I get planks?</h3>
                <p class="faq-answer">Order via the in-store computer (SUPPLY.exe). Deliveries arrive at the bus stop outside.</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">Can I fight back?</h3>
                <p class="faq-answer">Not directly. You must use defense items bought with your Day Shift earnings or simply deny entry to anomalies.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue';

const activeSection = ref('');
const activeTopSection = computed(() => {
  const id = activeSection.value;
  if (id === 'core-characters' || id === 'regulars-day' || id === 'night-visitors' || id === 'entities-anomalies') {
    return 'all-characters';
  }
  return id;
});

onMounted(() => {
  // Add structured data for FAQ
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Does the Priest kill you in Hellmart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Father Grayson is an anomaly. If you let him in, it triggers a game over."
      }
    }, {
      "@type": "Question",
      "name": "Is Tiny Bob a monster?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, Tiny Bob is a safe human customer despite his creepy appearance."
      }
    }, {
      "@type": "Question",
      "name": "What is the goal of Hellmart?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Survive 7 days in the Far North while managing the store and identifying anomalies."
      }
    }]
  });
  document.head.appendChild(script);

  // Scroll listener for active TOC state
  const handleScroll = () => {
    const sections = document.querySelectorAll('.wiki-section, .wiki-subsection');
    const threshold = 150; // Offset for header + padding
    
    let currentId = '';
    
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      // Find the last section that has its top above the threshold
      if (rect.top <= threshold) {
        currentId = section.id;
      }
    });

    if (currentId) {
      activeSection.value = currentId;
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check
  handleScroll();

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 120; // Header height + extra padding
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
/* Layout Grid */
.wiki-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Sidebar TOC */
.wiki-sidebar {
  position: sticky;
  top: 2rem;
  /* Added z-index to ensure it stays above content if needed, though grid handles layout */
  z-index: 10; 
}

.toc {
  background: var(--bg-soft);
  border-right: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: 8px;
}

.toc-title {
  font-family: var(--font-display);
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.toc-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.toc-link {
  text-decoration: none;
  color: var(--text);
  font-family: var(--font-mono);
  font-size: 0.95rem;
  transition: all 0.2s;
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
  border-left: 2px solid transparent;
}

.toc-link:hover {
  background: var(--highlight);
  color: black;
  transform: translateX(5px);
}

.toc-link.active {
  background: var(--bg-mute);
  color: var(--highlight);
  border-left: 2px solid var(--highlight);
  padding-left: 1rem;
}

.toc-sublist {
  list-style: none;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toc-sublink {
  text-decoration: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  transition: all 0.2s;
  display: block;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  border-left: 2px solid transparent;
}

.toc-sublink:hover, .toc-sublink.active {
  color: var(--highlight);
  background: rgba(255, 255, 255, 0.05);
}

.toc-sublink.active {
  border-left-color: var(--highlight);
}

/* Main Content */
.wiki-section {
  margin-bottom: 4rem;
  scroll-margin-top: 6rem;
  background: rgba(0, 0, 0, 0.6);
}

.section-title {
  font-family: var(--font-display);
  font-size: 2rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--border);
  display: inline-block;
}

.section-intro {
  margin-bottom: 1.5rem;
  color: var(--text-muted);
  font-style: italic;
}

.wiki-subsection {
  margin-top: 2rem;
  margin-bottom: 3rem;
  scroll-margin-top: 7rem;
}

.subsection-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 3px solid var(--highlight);
}

.text-green { color: #00ff00; border-color: #00ff00; }
.text-purple { color: #bd00ff; border-color: #bd00ff; }

/* Golden Rules List */
.rules-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.rule-row {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: var(--bg-soft);
  padding: 2rem;
  border-left: 4px solid var(--accent);
  transition: all 0.3s ease;
  border-radius: 0 4px 4px 0;
}

.rule-row:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateX(5px);
}

.rule-number {
  font-family: var(--font-display);
  font-size: 3rem;
  color: var(--text-muted);
  opacity: 0.2;
  line-height: 0.8;
  font-weight: 900;
}

.rule-title {
  color: var(--highlight);
  font-size: 1.3rem;
  margin: 0 0 0.5rem 0;
  font-family: var(--font-display);
  letter-spacing: 1px;
}

.rule-desc {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
}

.deny {
  color: var(--accent);
  font-weight: bold;
}

/* Entity Lists */
.entity-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.entity-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  background: var(--card);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.entity-card:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transform: translateY(-2px);
}

.entity-card.anomaly { border-left: 4px solid var(--accent); }
.entity-card.safe { border-left: 4px solid #00ff00; }
.entity-card.warning { border-left: 4px solid var(--highlight); }
.entity-card.special { border-left: 4px solid #bd00ff; grid-template-columns: 1fr; }

.entity-image {
  height: 100%;
  min-height: 200px;
}

.entity-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%);
  transition: filter 0.3s;
}

.entity-card:hover .entity-image img {
  filter: grayscale(0%);
}

.entity-info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.entity-info.full-width {
  grid-column: 1 / -1;
}

.entity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 0.5rem;
}

.entity-name {
  font-family: var(--font-display);
  font-size: 1.4rem;
  margin: 0;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.status-badge.red { background: rgba(255, 0, 60, 0.2); color: var(--accent); }
.status-badge.green { background: rgba(0, 255, 0, 0.2); color: #00ff00; }
.status-badge.yellow { background: rgba(255, 230, 0, 0.2); color: var(--highlight); }
.status-badge.purple { background: rgba(189, 0, 255, 0.2); color: #bd00ff; }

.info-label {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.2rem;
  font-weight: bold;
}

.info-text {
  margin: 0;
  color: var(--text);
  line-height: 1.5;
}

.bullet-list {
  padding-left: 1.2rem;
  margin: 0;
}

.action-row {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
}

.action-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.action-value {
  font-weight: bold;
}

.faq-question {
  color: var(--highlight);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
}

.faq-answer {
  color: var(--text-muted);
  line-height: 1.6;
}

.action-value.red { color: var(--accent); }
.action-value.green { color: #00ff00; }
.action-value.yellow { color: var(--highlight); }

.faq-grid {
  display: grid;
  gap: 1.5rem;
}

.faq-card {
  background: var(--bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 3px solid var(--highlight);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .wiki-layout {
    grid-template-columns: 240px 1fr;
    gap: 1.5rem;
  }
  
  .entity-card {
    grid-template-columns: 180px 1fr;
  }
}

@media (max-width: 768px) {
  .wiki-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .wiki-sidebar {
    position: relative;
    top: 0;
    z-index: 1;
    width: 100%;
  }

  .toc {
    padding: 0.8rem;
  }

  .toc-title{
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  .toc-list{
    gap: 0.5rem;
  }

  .toc-link{
    font-size: 0.8rem;
    padding: 0.3rem;
  }

  .wiki-section {
    margin-bottom: 1rem;
    scroll-margin-top: 2rem;
  }

  .section-title {
    font-size: 1.3rem;
    line-height: 1.2;
  }

  .section-intro{
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }

  /* Rules List */
  .rule-row {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-left-width: 3px;
  }

  .rule-number {
    font-size: 2rem;
    margin-bottom: 0;
  }

  .rule-title{
    font-size: 1.1rem;
  }

  .rule-desc{
    font-size: 0.8rem;
    line-height: 1.4;
  }

  /* Entity Cards */
  .entity-list{
    gap: 1rem;
  }

  .entity-card {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }

  .entity-image {
    min-height: 200px;
    height: 200px;
  }

  .entity-info {
    padding: 0.5rem;
    gap: 0.5rem;
  }

  .entity-name {
    font-size: 1.1rem;
  }

  .info-label{
    font-size: 0.8rem;
  }

  .info-text{
    font-size: 0.8rem;
  }

  .action-value{
    font-size: 0.8rem;
  }

  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 0.5rem;
  }
  
  .faq-grid {
    display: grid;
    gap: 0.5rem;
  }

  .faq-card{
    padding: 0.5rem 1rem;
  }

  .faq-answer{
    font-size: 0.8rem;
  }
}
</style>
