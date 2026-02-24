<script setup>
import { useI18n } from 'vue-i18n'
import { useLocalizedPath } from '../composables/useLocalizedPath'

const { t } = useI18n()
const { getLocalizedPath } = useLocalizedPath()
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/images/logo.webp" alt="footer-logo">
            <span class="footer-logo-text">Hellmart Game</span>
          </div>
          <p class="footer-desc">
            {{ t('common.footer.brandDesc') }}
          </p>
        </div>
        
        <div class="link-column">
          <h2>{{ t('common.footer.navigate') }}</h2>
          <ul>
            <li><router-link :to="getLocalizedPath('/')">{{ t('common.nav.home') }}</router-link></li>
            <li><router-link :to="getLocalizedPath('/wiki')">{{ t('common.nav.wiki') }}</router-link></li>
            <li><router-link :to="getLocalizedPath('/walkthrough')">{{ t('common.nav.walkthrough') }}</router-link></li>
            <li><router-link :to="getLocalizedPath('/endings')">{{ t('common.nav.endings') }}</router-link></li>
            <li><router-link :to="getLocalizedPath('/mechanics')">{{ t('common.nav.mechanics') }}</router-link></li>
            <li><router-link :to="getLocalizedPath('/blog')">{{ t('common.nav.blog') }}</router-link></li>
          </ul>
        </div>

        <div class="link-column">
          <h2>{{ t('common.footer.legal') }}</h2>
          <ul>
            <li><a :href="getLocalizedPath('/privacy-policy')" rel="noopener noreferrer nofollow">{{ t('common.footer.privacyPolicy') }}</a></li>
            <li><a :href="getLocalizedPath('/terms-of-service')" rel="noopener noreferrer nofollow">{{ t('common.footer.termsOfService') }}</a></li>
            <li><a :href="getLocalizedPath('/copyright')" rel="noopener noreferrer nofollow">{{ t('common.footer.copyright') }}</a></li>
            <li><a :href="getLocalizedPath('/about-us')" rel="noopener noreferrer nofollow">{{ t('common.footer.aboutUs') }}</a></li>
            <li><a :href="getLocalizedPath('/contact-us')" rel="noopener noreferrer nofollow">{{ t('common.footer.contactUs') }}</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>{{ t('common.footer.bottom1') }}</p>
        <p>{{ t('common.footer.bottom2Prefix') }} <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: #000;
  border-top: 1px solid var(--border);
  padding: 3rem 0 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 2rem;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: var(--accent);
  margin-bottom: 1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-logo img{
  width: 55px;
  height: 55px;
}

.footer-logo-text {
  color: var(--text);
  text-shadow: 4px 4px 0px var(--accent);
  font-weight: 900;
}



.highlight {
  color: var(--text);
}

.footer-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.link-column h2 {
  color: var(--text);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.link-column ul {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.link-column a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: all 0.2s;
}

.link-column a:hover {
  color: var(--highlight);
  padding-left: 5px;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-brand {
    max-width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
