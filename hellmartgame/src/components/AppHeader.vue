<template>
  <header class="app-header">
    <div class="container header-content">
      <div class="logo">
        <a href="/" class="logo-link">
          <img src="/images/logo.webp" alt="Hellmart Game Logo" class="logo-icon" />
          <span class="logo-text">Hellmart Game</span>
        </a>
      </div>

      <button class="menu-toggle" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }" aria-label="Toggle Menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <ul>
          <li><router-link to="/" active-class="active" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/wiki" active-class="active" @click="closeMenu">Wiki / Database</router-link></li>
          <li><router-link to="/walkthrough" active-class="active" @click="closeMenu">Walkthrough</router-link></li>
          <li><router-link to="/endings" active-class="active" @click="closeMenu">Endings</router-link></li>
          <li><router-link to="/mechanics" active-class="active" @click="closeMenu">Mechanics</router-link></li>
          <li><router-link to="/blog" active-class="active" @click="closeMenu">Blog</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(5, 5, 5, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  height: 80px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-display);
  font-size: 1.8rem;
  letter-spacing: 1px;
}

.logo-icon {
  width: 55px;
  height: 55px;
}

.logo-text {
  color: var(--text);
  text-shadow: 4px 4px 0px var(--accent);
  font-weight: 900;
}

.main-nav ul {
  display: flex;
  gap: 2rem;
}

.main-nav a {
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  position: relative;
  padding: 5px 0;
  font-family: var(--font-mono);
}

.main-nav a:hover,
.main-nav a.active {
  color: var(--text);
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--highlight);
  transition: width 0.3s ease;
  box-shadow: 0 0 8px var(--highlight);
}

.main-nav a:hover::after,
.main-nav a.active::after {
  width: 100%;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;
}

.menu-toggle .bar {
  width: 100%;
  height: 3px;
  background-color: var(--text);
  transition: all 0.3s ease;
  border-radius: 2px;
}

/* Hamburger Animation */
.menu-toggle.is-active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
  background-color: var(--accent);
}

.menu-toggle.is-active .bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
  background-color: var(--accent);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .main-nav {
    display: block; /* Reset from none */
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(15px);
    padding-top: 100px;
    transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 1000;
  }

  .main-nav.is-open {
    right: 0;
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .main-nav a {
    font-size: 1.5rem;
    color: var(--text);
    padding: 10px 20px;
  }

  .main-nav a.active {
    color: var(--accent);
  }

  .main-nav a::after {
    display: none; /* No underline animation on mobile */
  }
}
</style>
