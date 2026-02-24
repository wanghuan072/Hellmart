<template>
  <div class="legal-page">
    <div class="hero-page">
      <div class="container">
        <h1>{{ t('aboutUsPage.hero.title') }}</h1>
        <p>{{ t('aboutUsPage.hero.subtitle') }}</p>
      </div>
    </div>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>{{ t('aboutUsPage.sections.welcome.title') }}</h2>
            <p>
              <RouterLink :to="getLocalizedPath('/')">{{ t('aboutUsPage.sections.welcome.text1') }}</RouterLink> {{ t('aboutUsPage.sections.welcome.text1Link') }}
            </p>
            <p>
              {{ t('aboutUsPage.sections.welcome.text2') }}<RouterLink :to="getLocalizedPath('/wiki')">{{ t('aboutUsPage.sections.welcome.text2Wiki') }}</RouterLink>{{ t('aboutUsPage.sections.welcome.text2Middle') }}<RouterLink :to="getLocalizedPath('/walkthrough')">{{ t('aboutUsPage.sections.welcome.text2Walkthrough') }}</RouterLink>{{ t('aboutUsPage.sections.welcome.text2Middle2') }}<RouterLink :to="getLocalizedPath('/blog')">{{ t('aboutUsPage.sections.welcome.text2Blog') }}</RouterLink>{{ t('aboutUsPage.sections.welcome.text2End') }}
            </p>

            <div class="image-block">
              <img src="/images/about-img.webp" alt="Hellmart Storefront" loading="lazy" />
              <p class="caption">{{ t('aboutUsPage.sections.welcome.imageCaption') }}</p>
            </div>

            <h2>{{ t('aboutUsPage.sections.mission.title') }}</h2>
            <p>
              {{ t('aboutUsPage.sections.mission.text') }} <strong>{{ t('aboutUsPage.sections.mission.textBold') }}</strong>{{ t('aboutUsPage.sections.mission.textEnd') }}
            </p>
            <ul>
              <li><strong>{{ t('aboutUsPage.sections.mission.item1') }}</strong> {{ t('aboutUsPage.sections.mission.item1Text') }}</li>
              <li><strong>{{ t('aboutUsPage.sections.mission.item2') }}</strong> {{ t('aboutUsPage.sections.mission.item2Text') }}</li>
              <li><strong>{{ t('aboutUsPage.sections.mission.item3') }}</strong> {{ t('aboutUsPage.sections.mission.item3Text') }} <RouterLink :to="getLocalizedPath('/endings')">{{ t('aboutUsPage.sections.mission.item3Link') }}</RouterLink>{{ t('aboutUsPage.sections.mission.item3TextEnd') }}</li>
              <li><strong>{{ t('aboutUsPage.sections.mission.item4') }}</strong> {{ t('aboutUsPage.sections.mission.item4Text') }}</li>
            </ul>

            <h2>{{ t('aboutUsPage.sections.experience.title') }}</h2>
            <p>
              {{ t('aboutUsPage.sections.experience.text1') }}
            </p>
            <p>
              {{ t('aboutUsPage.sections.experience.text2') }} <RouterLink :to="getLocalizedPath('/mechanics')">{{ t('aboutUsPage.sections.experience.text2Link') }}</RouterLink>{{ t('aboutUsPage.sections.experience.text2End') }}
            </p>

            <div class="image-block">
              <img src="/images/hellmart-01.webp" alt="Inside Hellmart" loading="lazy" />
              <p class="caption">{{ t('aboutUsPage.sections.experience.imageCaption') }}</p>
            </div>

            <h2>{{ t('aboutUsPage.sections.join.title') }}</h2>
            <p>
              {{ t('aboutUsPage.sections.join.text1') }}
            </p>
            <p>
              {{ t('aboutUsPage.sections.join.text2') }}
            </p>

            <h2>{{ t('aboutUsPage.sections.contact.title') }}</h2>
            <p>
              {{ t('aboutUsPage.sections.contact.text') }}
              <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../../composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<style scoped>
.legal-page {
  min-height: 100vh;
}

.legal-content {
  padding: 40px 0 80px;
}

.content-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.legal-text {
  color: rgba(255, 210, 210, 0.85);
  line-height: 1.8;
}

.legal-text h2 {
  font-family: var(--font-display); /* Use display font for headings */
  font-size: 2rem;
  color: var(--primary); /* Use primary red for headings */
  margin: 3rem 0 1.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.legal-text h2:first-child {
  margin-top: 0;
  border-bottom: none;
}

.legal-text p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: var(--text-muted);
}

.legal-text ul {
  margin: 2rem 0;
  padding-left: 2rem;
  list-style: none; /* Remove default bullets */
}

.legal-text li {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--text-muted);
  position: relative;
  padding-left: 1.5rem;
}

.legal-text li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.legal-text strong {
  color: var(--text);
  font-weight: 700;
}

.legal-text a {
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
}

.legal-text a:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

/* Image Block Styles */
.image-block {
  margin: 3rem 0;
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem;
  border: 1px solid var(--border);
  border-radius: 4px;
}

.image-block img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
  filter: sepia(0.2) contrast(1.1); /* Slight filter for atmosphere */
  transition: filter 0.3s ease;
}

.image-block:hover img {
  filter: sepia(0) contrast(1);
}

.caption {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 0.9rem !important;
  color: var(--text-muted) !important;
  font-style: italic;
  margin-bottom: 0 !important;
}

/* Responsive */
@media (max-width: 768px) {
  .legal-content {
    padding: 2rem 0 4rem;
  }

  .legal-text h2 {
    font-size: 1.6rem;
    margin: 2rem 0 1rem;
  }

  .legal-text p, .legal-text li {
    font-size: 1rem;
  }
  
  .image-block {
    margin: 2rem 0;
    padding: 0.5rem;
  }
}
</style>
