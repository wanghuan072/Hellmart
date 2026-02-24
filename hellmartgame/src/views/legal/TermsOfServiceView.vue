<template>
  <div class="legal-page">
    <div class="hero-page">
      <div class="container">
        <h1>{{ t('termsOfServicePage.hero.title') }}</h1>
        <p>{{ t('termsOfServicePage.hero.subtitle') }} {{ currentDate }}</p>
      </div>
    </div>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>{{ t('termsOfServicePage.sections.agreement.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.agreement.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.use.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.use.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.intellectual.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.intellectual.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.userContent.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.userContent.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.disclaimer.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.disclaimer.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.limitation.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.limitation.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.changes.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.changes.text') }}
            </p>

            <h2>{{ t('termsOfServicePage.sections.contact.title') }}</h2>
            <p>
              {{ t('termsOfServicePage.sections.contact.text') }} <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const currentDate = 'February 3, 2026'
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
  font-size: 1.8rem;
  color: rgba(255, 230, 230, 0.95);
  margin: 40px 0 16px;
  font-weight: 600;
}

.legal-text h2:first-child {
  margin-top: 0;
}

.legal-text p {
  font-size: 1rem;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.legal-text a {
  color: var(--accent);
  text-decoration: none;
}

.legal-text a:hover {
  text-decoration: underline;
}

/* iPad端 - 1024px */
@media (max-width: 1024px) {
  .legal-header {
    padding: 50px 0 30px;
  }

  .page-title {
    font-size: 2.5rem;
  }
}

/* 移动端 - 768px */
@media (max-width: 768px) {
  .legal-header {
    padding: 40px 0 20px;
  }

  .page-title {
    font-size: 24px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .page-date {
    font-size: 12px;
  }

  .legal-content {
    padding: 30px 0 60px;
  }

  .legal-text h2 {
    font-size: 20px;
    margin: 30px 0 12px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .legal-text p {
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
}
</style>
