<template>
  <div class="legal-page">
    <div class="hero-page">
      <div class="container">
        <h1>About Us</h1>
        <p>Hellmart Corp: Our History, Mission, and Employment Opportunities</p>
      </div>
    </div>

    <section class="legal-content">
      <div class="container">
        <div class="content-wrapper">
          <div class="legal-text">
            <h2>Welcome to Hellmart</h2>
            <p>
              <RouterLink to="/">Hellmart Game</RouterLink> is the premier destination for survival horror enthusiasts and retail simulation strategists. Born from the collective nightmares of service industry workers, our game challenges players to manage the unmanageable: a convenience store located on the threshold of the abyss.
            </p>
            <p>
              This website serves as the official employee handbook and survival guide. Here, we archive the latest anomalous entity reports (<RouterLink to="/wiki">Wiki</RouterLink>), shift protocols (<RouterLink to="/walkthrough">Walkthroughs</RouterLink>), and corporate mandates (<RouterLink to="/blog">Blog</RouterLink>) to help you survive your 7-day contract.
            </p>

            <div class="image-block">
              <img src="/images/about-img.webp" alt="Hellmart Storefront" loading="lazy" />
              <p class="caption">The facade of our flagship location. Open 24/7, eternally.</p>
            </div>

            <h2>Our Mission</h2>
            <p>
              At Hellmart Corp, our mission is simple: <strong>Profit at any cost</strong>. But for you, the player, the mission is survival. We aim to provide:
            </p>
            <ul>
              <li><strong>Immersive Horror:</strong> A blend of mundane retail tasks and eldritch terror.</li>
              <li><strong>Strategic Gameplay:</strong> Resource management where the currency is your sanity.</li>
              <li><strong>Deep Lore:</strong> A fragmented narrative hidden within item descriptions and customer dialogues. Uncover the truth behind every <RouterLink to="/endings">Ending</RouterLink>.</li>
              <li><strong>Community Driven Development:</strong> We listen to our "employees" (players) to refine the suffering (gameplay).</li>
            </ul>

            <h2>The Hellmart Experience</h2>
            <p>
              Every shift at Hellmart is unique. One moment you're restocking sodas, the next you're banishing a customer who has too many eyes. Our team has worked tirelessly to create an atmosphere that is both familiar and deeply unsettling.
            </p>
            <p>
              We believe in the power of environmental storytelling. Every aisle tells a story, and every product might be a trap. The game is designed to test your observation skills, your reflexes, and your ability to follow strict, often contradictory, rules. Master the <RouterLink to="/mechanics">Game Mechanics</RouterLink> to increase your survival odds.
            </p>

            <div class="image-block">
              <img src="/images/hellmart-01.webp" alt="Inside Hellmart" loading="lazy" />
              <p class="caption">A quiet moment before the night rush. Keep the shelves stocked.</p>
            </div>

            <h2>Join the Workforce</h2>
            <p>
              We are always looking for new talent. Whether you're a player sharing your strategies or a developer interested in our tech stack, Hellmart welcomes you.
            </p>
            <p>
              Connect with us through our official channels. Share your survival stories, report bugs (anomalies), and help us build the ultimate retail nightmare.
            </p>

            <h2>Contact Us</h2>
            <p>
              For press inquiries, bug reports, or if you just want to scream into the void, reach us at:
              <a href="mailto:wyong@hellmartgame.com">wyong@hellmartgame.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'About Us - Hellmart Game'
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = "description"
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = 'Learn about Hellmart Game, the survival retail horror simulation. Discover our lore, mission, and the team behind the nightmare.'
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
