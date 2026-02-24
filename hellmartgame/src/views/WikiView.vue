<template>
  <main class="wiki-page">
    <div class="hero-page">
      <div class="container">
        <h1 class="hero-title">{{ t('wikiPage.hero.title') }}</h1>
        <p class="subtitle">{{ t('wikiPage.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container">
      <div class="wiki-layout">
        <!-- Left Sidebar: Table of Contents -->
        <aside class="wiki-sidebar">
          <nav class="toc">
            <h2 class="toc-title">{{ t('wikiPage.toc.title') }}</h2>
            <ul class="toc-list">
              <li class="toc-item"><a href="#golden-rules" :class="['toc-link', { active: activeTopSection === 'golden-rules' }]" @click.prevent="scrollToSection('golden-rules')">{{ t('wikiPage.toc.item1') }}</a></li>
              <li class="toc-item">
                <a href="#all-characters" :class="['toc-link', { active: activeTopSection === 'all-characters' }]" @click.prevent="scrollToSection('all-characters')">{{ t('wikiPage.toc.item2') }}</a>
                <ul class="toc-sublist">
                  <li><a href="#core-characters" :class="['toc-sublink', { active: activeSection === 'core-characters' }]" @click.prevent="scrollToSection('core-characters')">{{ t('wikiPage.toc.item2Sub1') }}</a></li>
                  <li><a href="#regulars-day" :class="['toc-sublink', { active: activeSection === 'regulars-day' }]" @click.prevent="scrollToSection('regulars-day')">{{ t('wikiPage.toc.item2Sub2') }}</a></li>
                  <li><a href="#night-visitors" :class="['toc-sublink', { active: activeSection === 'night-visitors' }]" @click.prevent="scrollToSection('night-visitors')">{{ t('wikiPage.toc.item2Sub3') }}</a></li>
                  <li><a href="#entities-anomalies" :class="['toc-sublink', { active: activeSection === 'entities-anomalies' }]" @click.prevent="scrollToSection('entities-anomalies')">{{ t('wikiPage.toc.item2Sub4') }}</a></li>
                </ul>
              </li>
              <li class="toc-item"><a href="#special-events" :class="['toc-link', { active: activeTopSection === 'special-events' }]" @click.prevent="scrollToSection('special-events')">{{ t('wikiPage.toc.item3') }}</a></li>
              <li class="toc-item"><a href="#faq" :class="['toc-link', { active: activeTopSection === 'faq' }]" @click.prevent="scrollToSection('faq')">{{ t('wikiPage.toc.item4') }}</a></li>
            </ul>
          </nav>
        </aside>

        <!-- Right Content -->
        <div class="wiki-content">
          <!-- Part 1: Golden Rules -->
          <section id="golden-rules" class="wiki-section">
            <h2 class="section-title">{{ t('wikiPage.goldenRules.title') }}</h2>
            <p class="section-intro">{{ t('wikiPage.goldenRules.intro') }} <strong>{{ t('wikiPage.goldenRules.introBold') }}</strong>{{ t('wikiPage.goldenRules.introEnd') }}</p>
            <div class="rules-list">
              <div class="rule-row">
                <div class="rule-number">01</div>
                <div class="rule-content">
                  <h3 class="rule-title">{{ t('wikiPage.goldenRules.rule1.title') }}</h3>
                  <p class="rule-desc">{{ t('wikiPage.goldenRules.rule1.desc') }}</p>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-number">02</div>
                <div class="rule-content">
                  <h3 class="rule-title">{{ t('wikiPage.goldenRules.rule2.title') }}</h3>
                  <p class="rule-desc">{{ t('wikiPage.goldenRules.rule2.desc') }}</p>
                </div>
              </div>
              <div class="rule-row">
                <div class="rule-number">03</div>
                <div class="rule-content">
                  <h3 class="rule-title">{{ t('wikiPage.goldenRules.rule3.title') }}</h3>
                  <p class="rule-desc">{{ t('wikiPage.goldenRules.rule3.desc') }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Part 2: All Characters -->
          <section id="all-characters" class="wiki-section">
            <h2 class="section-title">{{ t('wikiPage.characters.title') }}</h2>
            <!-- Core / Story Characters -->
            <div id="core-characters" class="wiki-subsection">
              <h3 class="subsection-title">{{ t('wikiPage.characters.core.title') }}</h3>
              <div class="entity-list">
                <div class="entity-card special">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.core.player.name') }}</h3>
                      <span class="status-badge purple">{{ t('wikiPage.characters.core.player.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.core.player.text') }}</p>
                  </div>
                </div>
                <div class="entity-card special">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.core.boss.name') }}</h3>
                      <span class="status-badge purple">{{ t('wikiPage.characters.core.boss.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.core.boss.text') }}</p>
                  </div>
                </div>
                <div class="entity-card safe">
                   <div class="entity-image">
                    <img src="/images/wiki/wiki-01.webp" alt="Karen">
                  </div>
                  <div class="entity-info">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.core.stranger.name') }}</h3>
                      <span class="status-badge purple">{{ t('wikiPage.characters.core.stranger.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.core.stranger.text') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- The Regulars (Daytime) -->
            <div id="regulars-day" class="wiki-subsection">
              <h3 class="subsection-title">{{ t('wikiPage.characters.regulars.title') }}</h3>
              <div class="entity-list">
                <!-- Karen -->
                <div class="entity-card safe">
                  <div class="entity-image">
                    <img src="/images/wiki/wiki-02.webp" alt="Karen">
                  </div>
                  <div class="entity-info">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.karen.name') }}</h3>
                      <span class="status-badge green">{{ t('wikiPage.characters.regulars.karen.badge') }}</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">{{ t('wikiPage.characters.regulars.karen.behavior') }}</strong>
                      <p class="info-text">{{ t('wikiPage.characters.regulars.karen.text') }}</p>
                    </div>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.karen.protocol') }}</span>
                      <span class="action-value green">{{ t('wikiPage.characters.regulars.karen.action') }}</span>
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
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.oldLady.name') }}</h3>
                      <span class="status-badge yellow">{{ t('wikiPage.characters.regulars.oldLady.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.oldLady.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.oldLady.protocol') }}</span>
                      <span class="action-value yellow">{{ t('wikiPage.characters.regulars.oldLady.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Tiny Bob (Day) -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.tinyBobDay.name') }}</h3>
                      <span class="status-badge green">{{ t('wikiPage.characters.regulars.tinyBobDay.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.tinyBobDay.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.tinyBobDay.protocol') }}</span>
                      <span class="action-value green">{{ t('wikiPage.characters.regulars.tinyBobDay.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Coin Toss Man -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.coinToss.name') }}</h3>
                      <span class="status-badge yellow">{{ t('wikiPage.characters.regulars.coinToss.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.coinToss.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.coinToss.protocol') }}</span>
                      <span class="action-value yellow">{{ t('wikiPage.characters.regulars.coinToss.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Boozer (Day) -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.boozerDay.name') }}</h3>
                      <span class="status-badge yellow">{{ t('wikiPage.characters.regulars.boozerDay.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.boozerDay.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.boozerDay.protocol') }}</span>
                      <span class="action-value yellow">{{ t('wikiPage.characters.regulars.boozerDay.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Suspicious Customer -->
                <div class="entity-card warning">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.suspicious.name') }}</h3>
                      <span class="status-badge yellow">{{ t('wikiPage.characters.regulars.suspicious.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.suspicious.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.suspicious.protocol') }}</span>
                      <span class="action-value yellow">{{ t('wikiPage.characters.regulars.suspicious.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Faceless Customer -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.regulars.faceless.name') }}</h3>
                      <span class="status-badge green">{{ t('wikiPage.characters.regulars.faceless.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.regulars.faceless.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.regulars.faceless.protocol') }}</span>
                      <span class="action-value green">{{ t('wikiPage.characters.regulars.faceless.action') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Night Visitors -->
            <div id="night-visitors" class="wiki-subsection">
              <h3 class="subsection-title">{{ t('wikiPage.characters.night.title') }}</h3>
              <div class="entity-list">
                <!-- Colin -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.night.colin.name') }}</h3>
                      <span class="status-badge green">{{ t('wikiPage.characters.night.colin.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.night.colin.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.night.colin.protocol') }}</span>
                      <span class="action-value green">{{ t('wikiPage.characters.night.colin.action') }}</span>
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
                      <h3 class="entity-name">{{ t('wikiPage.characters.night.smilingWoman.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.night.smilingWoman.badge') }}</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">{{ t('wikiPage.characters.night.smilingWoman.appearance') }}</strong>
                      <p class="info-text">{{ t('wikiPage.characters.night.smilingWoman.appearanceText') }}</p>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">{{ t('wikiPage.characters.night.smilingWoman.trap') }}</strong>
                      <p class="info-text">{{ t('wikiPage.characters.night.smilingWoman.trapText') }}</p>
                    </div>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.night.smilingWoman.protocol') }}</span>
                      <span class="action-value red">{{ t('wikiPage.characters.night.smilingWoman.action') }}</span>
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
                      <h3 class="entity-name">{{ t('wikiPage.characters.night.fatherGrayson.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.night.fatherGrayson.badge') }}</span>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">{{ t('wikiPage.characters.night.fatherGrayson.appearance') }}</strong>
                      <p class="info-text">{{ t('wikiPage.characters.night.fatherGrayson.appearanceText') }}</p>
                    </div>
                    <div class="info-group">
                      <strong class="info-label">{{ t('wikiPage.characters.night.fatherGrayson.identification') }}</strong>
                      <ul class="bullet-list">
                        <li>{{ t('wikiPage.characters.night.fatherGrayson.id1') }}</li>
                        <li>{{ t('wikiPage.characters.night.fatherGrayson.id2') }}</li>
                      </ul>
                    </div>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.night.fatherGrayson.protocol') }}</span>
                      <span class="action-value red">{{ t('wikiPage.characters.night.fatherGrayson.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Boozer (Night) -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.night.boozerNight.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.night.boozerNight.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.night.boozerNight.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.night.boozerNight.protocol') }}</span>
                      <span class="action-value red">{{ t('wikiPage.characters.night.boozerNight.action') }}</span>
                    </div>
                  </div>
                </div>

                <!-- Tiny Bob (Night) -->
                <div class="entity-card safe">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.night.tinyBobNight.name') }}</h3>
                      <span class="status-badge green">{{ t('wikiPage.characters.night.tinyBobNight.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.night.tinyBobNight.text') }}</p>
                    <div class="action-row">
                      <span class="action-label">{{ t('wikiPage.characters.night.tinyBobNight.protocol') }}</span>
                      <span class="action-value green">{{ t('wikiPage.characters.night.tinyBobNight.action') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Entities / Anomalies -->
            <div id="entities-anomalies" class="wiki-subsection">
              <h3 class="subsection-title">{{ t('wikiPage.characters.entities.title') }}</h3>
              <div class="entity-list">
                <!-- The Grabber Arm -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.entities.grabberArm.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.entities.grabberArm.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.entities.grabberArm.text') }}</p>
                  </div>
                </div>
                <!-- The Meat Worm -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.entities.meatWorm.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.entities.meatWorm.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.entities.meatWorm.text') }}</p>
                  </div>
                </div>
                <!-- Flesh Pile -->
                <div class="entity-card anomaly">
                  <div class="entity-info full-width">
                    <div class="entity-header">
                      <h3 class="entity-name">{{ t('wikiPage.characters.entities.fleshPile.name') }}</h3>
                      <span class="status-badge red">{{ t('wikiPage.characters.entities.fleshPile.badge') }}</span>
                    </div>
                    <p class="info-text">{{ t('wikiPage.characters.entities.fleshPile.text') }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Part 3: Game Modes & Events -->
          <section id="special-events" class="wiki-section">
            <h2 class="section-title text-purple">{{ t('wikiPage.gameModes.title') }}</h2>
            <div class="entity-list">
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.dayShift.name') }}</h3>
                    <span class="status-badge purple">{{ t('wikiPage.gameModes.dayShift.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.dayShift.text') }} <strong>{{ t('wikiPage.gameModes.dayShift.goal') }}</strong> {{ t('wikiPage.gameModes.dayShift.goalText') }}</p>
                </div>
              </div>
              
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.nightShift.name') }}</h3>
                    <span class="status-badge red">{{ t('wikiPage.gameModes.nightShift.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.nightShift.text') }} <strong>{{ t('wikiPage.gameModes.nightShift.goal') }}</strong> {{ t('wikiPage.gameModes.nightShift.goalText') }}</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.dailyQuota.name') }}</h3>
                    <span class="status-badge purple">{{ t('wikiPage.gameModes.dailyQuota.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.dailyQuota.text') }}</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.technicalBreak.name') }}</h3>
                    <span class="status-badge purple">{{ t('wikiPage.gameModes.technicalBreak.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.technicalBreak.text') }}</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.generator.name') }}</h3>
                    <span class="status-badge purple">{{ t('wikiPage.gameModes.generator.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.generator.text') }}</p>
                </div>
              </div>
              <div class="entity-card special">
                <div class="entity-info full-width">
                  <div class="entity-header">
                    <h3 class="entity-name">{{ t('wikiPage.gameModes.busRide.name') }}</h3>
                    <span class="status-badge purple">{{ t('wikiPage.gameModes.busRide.badge') }}</span>
                  </div>
                  <p class="info-text">{{ t('wikiPage.gameModes.busRide.text') }}</p>
                </div>
              </div>
            </div>
          </section>

          <!-- FAQ -->
          <section id="faq" class="wiki-section">
            <h2 class="section-title">{{ t('wikiPage.faq.title') }}</h2>
            <div class="faq-grid">
              <div class="faq-card">
                <h3 class="faq-question">{{ t('wikiPage.faq.q1.question') }}</h3>
                <p class="faq-answer">{{ t('wikiPage.faq.q1.answer') }}</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">{{ t('wikiPage.faq.q2.question') }}</h3>
                <p class="faq-answer">{{ t('wikiPage.faq.q2.answer') }}</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">{{ t('wikiPage.faq.q3.question') }}</h3>
                <p class="faq-answer">{{ t('wikiPage.faq.q3.answer') }}</p>
              </div>
              <div class="faq-card">
                <h3 class="faq-question">{{ t('wikiPage.faq.q4.question') }}</h3>
                <p class="faq-answer">{{ t('wikiPage.faq.q4.answer') }}</p>
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
