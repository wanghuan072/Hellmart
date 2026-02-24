<template>
  <main class="walkthrough-page">
    <div class="hero-page">
      <div class="container">
        <h1>{{ t('walkthroughPage.hero.title') }}</h1>
        <p>{{ t('walkthroughPage.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container">
      <div class="content-layout">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
          <nav class="toc">
            <h2 class="toc-title">{{ t('walkthroughPage.toc.title') }}</h2>
            <ul class="toc-list">
              <li><a href="#intro" :class="['toc-link', { active: activeSection === 'intro' }]" @click.prevent="scrollToSection('intro')">{{ t('walkthroughPage.toc.intro') }}</a></li>
              <li><a href="#day1" :class="['toc-link', { active: activeSection === 'day1' }]" @click.prevent="scrollToSection('day1')">{{ t('walkthroughPage.toc.day1') }}</a></li>
              <li><a href="#day2" :class="['toc-link', { active: activeSection === 'day2' }]" @click.prevent="scrollToSection('day2')">{{ t('walkthroughPage.toc.day2') }}</a></li>
              <li><a href="#day3" :class="['toc-link', { active: activeSection === 'day3' }]" @click.prevent="scrollToSection('day3')">{{ t('walkthroughPage.toc.day3') }}</a></li>
              <li><a href="#day4" :class="['toc-link', { active: activeSection === 'day4' }]" @click.prevent="scrollToSection('day4')">{{ t('walkthroughPage.toc.day4') }}</a></li>
              <li><a href="#day5" :class="['toc-link', { active: activeSection === 'day5' }]" @click.prevent="scrollToSection('day5')">{{ t('walkthroughPage.toc.day5') }}</a></li>
              <li><a href="#day6" :class="['toc-link', { active: activeSection === 'day6' }]" @click.prevent="scrollToSection('day6')">{{ t('walkthroughPage.toc.day6') }}</a></li>
              <li><a href="#day7" :class="['toc-link', { active: activeSection === 'day7' }]" @click.prevent="scrollToSection('day7')">{{ t('walkthroughPage.toc.day7') }}</a></li>
              <li><a href="#day8" :class="['toc-link', { active: activeSection === 'day8' }]" @click.prevent="scrollToSection('day8')">{{ t('walkthroughPage.toc.day8') }}</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="main-content">
          
          <!-- Intro -->
          <section id="intro" class="section-block">
            <h2 class="section-title">{{ t('walkthroughPage.intro.title') }}</h2>
            <p>{{ t('walkthroughPage.intro.text') }}</p>
            
            <div class="gameplay-loop">
              <div class="loop-phase safe">
                <div class="phase-header">
                  <span class="phase-label">{{ t('walkthroughPage.intro.phase1.label') }}</span>
                  <h3 class="subsection-title">{{ t('walkthroughPage.intro.phase1.title') }}</h3>
                </div>
                <p>{{ t('walkthroughPage.intro.phase1.text') }}</p>
              </div>
              <div class="loop-phase danger">
                <div class="phase-header">
                  <span class="phase-label">{{ t('walkthroughPage.intro.phase2.label') }}</span>
                  <h3 class="subsection-title">{{ t('walkthroughPage.intro.phase2.title') }}</h3>
                </div>
                <p>{{ t('walkthroughPage.intro.phase2.text') }}</p>
              </div>
              <div class="loop-phase core">
                <div class="phase-header">
                  <span class="phase-label">{{ t('walkthroughPage.intro.phase3.label') }}</span>
                  <h3 class="subsection-title">{{ t('walkthroughPage.intro.phase3.title') }}</h3>
                </div>
                <p>{{ t('walkthroughPage.intro.phase3.text') }}</p>
              </div>
            </div>
          </section>

          <!-- Day 1 -->
          <section id="day1" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day1.title') }}</h2>
              <span class="tag low">{{ t('walkthroughPage.day1.tag') }}</span>
            </div>
            
            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day1.morning.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('walkthroughPage.day1.morning.item1') }}</strong> {{ t('walkthroughPage.day1.morning.item1Text') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('walkthroughPage.day1.call.title') }}</h3>
              <ul class="simple-list">
                <li>{{ t('walkthroughPage.day1.call.item1') }}</li>
              </ul>
              
              <h3 class="subsection-title">{{ t('walkthroughPage.day1.setup.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('walkthroughPage.day1.setup.item1') }}</strong> {{ t('walkthroughPage.day1.setup.item1Text') }}</li>
                <li>{{ t('walkthroughPage.day1.setup.item2') }} <strong>{{ t('walkthroughPage.day1.setup.item2Bold') }}</strong> {{ t('walkthroughPage.day1.setup.item2Text') }}</li>
                <li><strong>{{ t('walkthroughPage.day1.setup.item3') }}</strong> {{ t('walkthroughPage.day1.setup.item3Text') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('walkthroughPage.day1.openStore.title') }}</h3>
              <ul class="simple-list">
                <li>{{ t('walkthroughPage.day1.openStore.item1') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('walkthroughPage.day1.dayShift.title') }}</h3>
              <ul class="simple-list">
                <li>{{ t('walkthroughPage.day1.dayShift.item1') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('walkthroughPage.day1.closing.title') }}</h3>
              <ul class="simple-list">
                <li>{{ t('walkthroughPage.day1.closing.item1') }}</li>
              </ul>

              <div class="alert-box success">
                <strong>{{ t('walkthroughPage.day1.night.label') }}</strong> {{ t('walkthroughPage.day1.night.text') }}
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-01.webp" alt="Day 1" class="section-image">
          </section>

          <!-- Day 2 -->
          <section id="day2" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day2.title') }}</h2>
              <span class="tag medium">{{ t('walkthroughPage.day2.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day2.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day2.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day2.tinyBob.title') }}</h3>
              <ul class="simple-list">
                <li>{{ t('walkthroughPage.day2.tinyBob.item1') }} <strong>{{ t('walkthroughPage.day2.tinyBob.item1Bold') }}</strong> {{ t('walkthroughPage.day2.tinyBob.item1Text') }}</li>
              </ul>

              <h3 class="subsection-title">{{ t('walkthroughPage.day2.nightEvent.title') }}</h3>
              <div class="alert-box info">
                <strong>{{ t('walkthroughPage.day2.nightEvent.visitor') }}</strong> {{ t('walkthroughPage.day2.nightEvent.visitorText') }}<br>
                <strong>{{ t('walkthroughPage.day2.nightEvent.story') }}</strong> {{ t('walkthroughPage.day2.nightEvent.storyText') }}<br>
                <strong>{{ t('walkthroughPage.day2.nightEvent.decision') }}</strong> <span class="tag low">{{ t('walkthroughPage.day2.nightEvent.decisionText') }}</span><br>
                <strong>{{ t('walkthroughPage.day2.nightEvent.result') }}</strong> {{ t('walkthroughPage.day2.nightEvent.resultText') }}
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-02.webp" alt="Day 2" class="section-image">
          </section>

          <!-- Day 3 -->
          <section id="day3" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day3.title') }}</h2>
              <span class="tag high">{{ t('walkthroughPage.day3.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day3.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day3.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day3.powerOutage.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('walkthroughPage.day3.powerOutage.text') }}</strong>
              </div>
              <h3 class="subsection-title">{{ t('walkthroughPage.day3.solution.title') }}</h3>
              <ul class="ordered-list">
                <li>{{ t('walkthroughPage.day3.solution.item1') }}</li>
                <li>{{ t('walkthroughPage.day3.solution.item2') }} <strong>{{ t('walkthroughPage.day3.solution.item2Bold') }}</strong>{{ t('walkthroughPage.day3.solution.item2Text') }}</li>
                <li>{{ t('walkthroughPage.day3.solution.item3') }} <strong>{{ t('walkthroughPage.day3.solution.item3Bold') }}</strong>{{ t('walkthroughPage.day3.solution.item3Text') }}</li>
              </ul>
              <h3 class="subsection-title">{{ t('walkthroughPage.day3.weapon.title') }}</h3>
              <p>{{ t('walkthroughPage.day3.weapon.text') }} <strong>{{ t('walkthroughPage.day3.weapon.textBold') }}</strong>{{ t('walkthroughPage.day3.weapon.textEnd') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day3.nightThreat.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('walkthroughPage.day3.nightThreat.item1') }}</strong> {{ t('walkthroughPage.day3.nightThreat.item1Text') }}</li>
                <li><strong>{{ t('walkthroughPage.day3.nightThreat.item2') }}</strong> {{ t('walkthroughPage.day3.nightThreat.item2Text') }}</li>
              </ul>
            </div>

            <img src="/images/walkthrough/walkthrough-03.webp" alt="Day 3" class="section-image">
          </section>

          <!-- Day 4 -->
          <section id="day4" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day4.title') }}</h2>
              <span class="tag high">{{ t('walkthroughPage.day4.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day4.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day4.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day4.coinToss.title') }}</h3>
              <p>{{ t('walkthroughPage.day4.coinToss.text') }}</p>
              <div class="alert-box success">
                <strong>{{ t('walkthroughPage.day4.coinToss.tip') }}</strong> {{ t('walkthroughPage.day4.coinToss.tipText') }}
              </div>

              <h3 class="subsection-title">{{ t('walkthroughPage.day4.nightEvent.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('walkthroughPage.day4.nightEvent.visitor') }}</strong> {{ t('walkthroughPage.day4.nightEvent.visitorText') }}<br>
                <strong>{{ t('walkthroughPage.day4.nightEvent.story') }}</strong> {{ t('walkthroughPage.day4.nightEvent.storyText') }}<br>
                <strong>{{ t('walkthroughPage.day4.nightEvent.decision') }}</strong> <span class="tag severe">{{ t('walkthroughPage.day4.nightEvent.decisionText') }}</span><br>
                <strong>{{ t('walkthroughPage.day4.nightEvent.reason') }}</strong> {{ t('walkthroughPage.day4.nightEvent.reasonText') }}
              </div>
            </div>

            <img src="/images/walkthrough/walkthrough-04.webp" alt="Day 4" class="section-image">
          </section>

          <!-- Day 5 -->
          <section id="day5" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day5.title') }}</h2>
              <span class="tag high">{{ t('walkthroughPage.day5.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day5.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day5.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day5.stickyNotes.title') }}</h3>
              <p>{{ t('walkthroughPage.day5.stickyNotes.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day5.nightEvent.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('walkthroughPage.day5.nightEvent.visitor') }}</strong> {{ t('walkthroughPage.day5.nightEvent.visitorText') }}<br>
                <strong>{{ t('walkthroughPage.day5.nightEvent.story') }}</strong> {{ t('walkthroughPage.day5.nightEvent.storyText') }}<br>
                <strong>{{ t('walkthroughPage.day5.nightEvent.decision') }}</strong> <span class="tag severe">{{ t('walkthroughPage.day5.nightEvent.decisionText') }}</span><br>
                <strong>{{ t('walkthroughPage.day5.nightEvent.reason') }}</strong> {{ t('walkthroughPage.day5.nightEvent.reasonText') }}
              </div>
            </div>
          </section>

          <!-- Day 6 -->
          <section id="day6" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day6.title') }}</h2>
              <span class="tag severe">{{ t('walkthroughPage.day6.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day6.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day6.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day6.boozer.title') }}</h3>
              <p>{{ t('walkthroughPage.day6.boozer.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day6.nightEvent.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('walkthroughPage.day6.nightEvent.visitor') }}</strong> {{ t('walkthroughPage.day6.nightEvent.visitorText') }}<br>
                <strong>{{ t('walkthroughPage.day6.nightEvent.story') }}</strong> {{ t('walkthroughPage.day6.nightEvent.storyText') }}<br>
                <strong>{{ t('walkthroughPage.day6.nightEvent.decision') }}</strong> <span class="tag severe">{{ t('walkthroughPage.day6.nightEvent.decisionText') }}</span><br>
                <strong>{{ t('walkthroughPage.day6.nightEvent.reason') }}</strong> {{ t('walkthroughPage.day6.nightEvent.reasonText') }}
              </div>
            </div>
          </section>

          <!-- Day 7 -->
          <section id="day7" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day7.title') }}</h2>
              <span class="tag nightmare">{{ t('walkthroughPage.day7.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day7.newProduct.title') }}</h3>
              <p>{{ t('walkthroughPage.day7.newProduct.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day7.environment.title') }}</h3>
              <p>{{ t('walkthroughPage.day7.environment.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day7.nightEvent.title') }}</h3>
              <div class="alert-box danger">
                <strong>{{ t('walkthroughPage.day7.nightEvent.visitor') }}</strong> {{ t('walkthroughPage.day7.nightEvent.visitorText') }}<br>
                <strong>{{ t('walkthroughPage.day7.nightEvent.interaction') }}</strong> {{ t('walkthroughPage.day7.nightEvent.interactionText') }}<br>
                <strong>{{ t('walkthroughPage.day7.nightEvent.decision') }}</strong> <span class="tag success">{{ t('walkthroughPage.day7.nightEvent.decisionText') }}</span>{{ t('walkthroughPage.day7.nightEvent.decisionText2') }}<br>
                <strong>{{ t('walkthroughPage.day7.nightEvent.result') }}</strong> {{ t('walkthroughPage.day7.nightEvent.resultText') }}
              </div>
            </div>
          </section>

          <!-- Day 8 -->
          <section id="day8" class="section-block">
            <div class="section-header-row">
              <h2 class="section-title">{{ t('walkthroughPage.day8.title') }}</h2>
              <span class="tag success">{{ t('walkthroughPage.day8.tag') }}</span>
            </div>

            <div class="content-body">
              <h3 class="subsection-title">{{ t('walkthroughPage.day8.morning.title') }}</h3>
              <p>{{ t('walkthroughPage.day8.morning.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day8.parkingLot.title') }}</h3>
              <p>{{ t('walkthroughPage.day8.parkingLot.text') }}</p>

              <h3 class="subsection-title">{{ t('walkthroughPage.day8.bus.title') }}</h3>
              <ul class="simple-list">
                <li><strong>{{ t('walkthroughPage.day8.bus.arrival') }}</strong> {{ t('walkthroughPage.day8.bus.arrivalText') }}</li>
                <li><strong>{{ t('walkthroughPage.day8.bus.action') }}</strong> {{ t('walkthroughPage.day8.bus.actionText') }}</li>
                <li><strong>{{ t('walkthroughPage.day8.bus.result') }}</strong> {{ t('walkthroughPage.day8.bus.resultText') }}</li>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
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
