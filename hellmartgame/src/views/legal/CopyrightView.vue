<template>
  <div class="legal-page">
    <div class="hero-page">
      <div class="container">
        <h1>Copyright</h1>
        <p>Official Legal Document • Effective Date: {{ currentDate }}</p>
      </div>
    </div>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Copyright Notice</h2>
            <p>
              © {{ currentYear }} Hellmart Game. All rights reserved. This website and its content are protected by copyright laws.
            </p>

            <h2>Ownership</h2>
            <p>
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Hellmart Game or its content suppliers and is protected by international copyright laws.
            </p>

            <h2>Trademark Notice</h2>
            <p>
              Hellmart is a trademark of Hellmart Game. All references to Hellmart and related trademarks are owned by Hellmart Game.
            </p>

            <h2>User-Generated Content</h2>
            <p>
              Users who submit content to our website retain ownership of their original content but grant Hellmart Game a license to use, display, and distribute that content on our website.
            </p>

            <h2>DMCA Policy</h2>
            <p>
              If you believe that any content on our website infringes your copyright, please contact us at <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a> with the following information:
            </p>
            <ul>
              <li>Your contact information</li>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The location of the allegedly infringing material on our website</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement that the information in your notice is accurate</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              For copyright-related inquiries, please contact us at <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const currentDate = 'February 3, 2026'

const currentYear = computed(() => {
  return new Date().getFullYear()
})

onMounted(() => {
  document.title = 'Copyright - Hellmart Game'
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = "description"
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = 'Copyright information for Hellmart Game. Learn about our copyright policies and intellectual property rights.'
})
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

.legal-text ul {
  margin: 20px 0;
  padding-left: 30px;
  list-style: disc;
}

.legal-text li {
  font-size: 1rem;
  margin-bottom: 10px;
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

  .legal-text ul {
    padding-left: 20px;
  }

  .legal-text li {
    font-size: 12px;
    margin-bottom: 8px;
  }
}
</style>
