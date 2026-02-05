<script setup>
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
            The #1 community resource for Hellmart players. 
            Explore our comprehensive wiki, detailed walkthroughs, and survival guides to master the night shift and uncover every ending.
          </p>
        </div>
        
        <div class="link-column">
          <h2>Navigate</h2>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/wiki">Wiki</router-link></li>
            <li><router-link to="/walkthrough">Walkthrough</router-link></li>
            <li><router-link to="/endings">Endings</router-link></li>
            <li><router-link to="/mechanics">Mechanics</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </div>

        <div class="link-column">
          <h2>Legal</h2>
          <ul>
            <li><a href="/privacy-policy" rel="noopener noreferrer nofollow">Privacy Policy</a></li>
            <li><a href="/terms-of-service" rel="noopener noreferrer nofollow">Terms of Service</a></li>
            <li><a href="/copyright" rel="noopener noreferrer nofollow">Copyright</a></li>
            <li><a href="/about-us" rel="noopener noreferrer nofollow">About Us</a></li>
            <li><a href="/contact-us" rel="noopener noreferrer nofollow">Contact Us</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 hellmartgame.com. All rights reserved. Updated: 2026-02-05.</p>
        <p>This is an independent fan site created for informational purposes only. All trademarks and copyrights belong to their respective owners. Contact: <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a></p>
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
