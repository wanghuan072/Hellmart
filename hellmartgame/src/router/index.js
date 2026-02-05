import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WikiView from '../views/WikiView.vue'
import WalkthroughView from '../views/WalkthroughView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        tdk: {
          title: 'Hellmart Game: Wiki, Walkthrough, Endings & Mechanics',
          description:'Welcome to the ultimate Hellmart resource. Detailed guides on identifying anomalies, surviving 7 days, collecting all notes, and unlocking every ending.',
          keywords: 'Hellmart game, Hellmart wiki, Hellmart walkthrough, Hellmart guide, Hellmart endings, Hellmart strategy, Hellmart characters'
        }
      }
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: WikiView,
      meta: {
        tdk: {
          title: 'Hellmart Game Wiki: Complete Database of Anomalies & NPCs',
          description: 'Complete Hellmart guide. Identify safe humans vs deadly mimics. Full database of all characters, anomalies, and night visitors. Know exactly who to let in.',
          keywords: 'Hellmart wiki, entity database, anomalies, survival protocols'
        }
      }
    },
    {
      path: '/walkthrough',
      name: 'walkthrough',
      component: WalkthroughView,
      meta: {
        tdk: {
          title: 'Hellmart Walkthrough: Full 7 Day Survival Guide',
          description: 'Complete Hellmart gameplay walkthrough. A step-by-step guide for surviving Day 1 to Day 7. Tips for power outages, economy management, and all daily events.',
          keywords: 'Hellmart walkthrough, Hellmart gameplay guide, Hellmart survival guide, Hellmart day 1 to day 7, Hellmart power outage tips, Hellmart tips and tricks, how to play Hellmart'
        }
      }
    },
    {
      path: '/endings',
      name: 'endings',
      component: () => import('../views/EndingsView.vue'),
      meta: {
        tdk: {
          title: 'Hellmart Endings: All Endings Guide: Good, Bad & Secret',
          description: "How to unlock every ending in Hellmart. Detailed requirements for the Good (Owner), Bad (Loop), and Evil (Monster) endings. Don't miss the True Ending.",
          keywords: 'Hellmart endings, Hellmart all endings, Hellmart good ending, Hellmart bad ending, Hellmart monster ending, Hellmart secret ending, Hellmart unlock guide'
        }
      }
    },
    {
      path: '/mechanics',
      name: 'mechanics',
      component: () => import('../views/MechanicsView.vue'),
      meta: {
        tdk: {
          title: 'Hellmart Game Mechanics: Sanity, CCTV & Controls',
          description: 'Complete guide to Hellmart mechanics. Learn how to use CCTV, fix anomalies, manage Sanity, and clean the shop. Includes a full list of PC controls.',
          keywords: 'Hellmart mechanics, Hellmart controls, Hellmart sanity guide, Hellmart CCTV guide, Hellmart tips, how to play Hellmart, Hellmart fix anomaly'
        }
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        tdk: {
          title: 'Hellmart Blog: Latest News, Updates & Guides',
          description: 'The official source for Hellmart game news. Read in-depth articles on survival strategies, lore theories, technical fixes, and the latest patch notes.',
          keywords: 'Hellmart blog, Hellmart news, Hellmart updates, Hellmart tips, Hellmart patch notes, Hellmart lore, Hellmart articles'
        }
      }
    },
    {
      path: '/blog/:slug',
      name: 'blog-detail',
      component: () => import('../views/BlogDetailView.vue'),
      meta: {
        tdk: {
          title: 'Hellmart Blog Article',
          description:
            'Detailed developer communications and patch notes for Hellmart.',
          keywords: 'Hellmart article, blog, developer update'
        }
      }
    },
    // Legal Pages
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: () => import('../views/legal/PrivacyPolicyView.vue'),
      meta: {
        tdk: {
          title: 'Privacy Policy - Hellmart Game',
          description:
            'Official privacy policy for hellmartgame.com. Learn how we handle data.',
          keywords: 'Hellmart privacy policy, data protection'
        }
      }
    },
    {
      path: '/terms-of-service',
      name: 'terms-of-service',
      component: () => import('../views/legal/TermsOfServiceView.vue'),
      meta: {
        tdk: {
          title: 'Terms of Service - Hellmart Game',
          description:
            'Official terms of service for using hellmartgame.com content and services.',
          keywords: 'Hellmart terms of service, terms'
        }
      }
    },
    {
      path: '/copyright',
      name: 'copyright',
      component: () => import('../views/legal/CopyrightView.vue'),
      meta: {
        tdk: {
          title: 'Copyright - Hellmart Game',
          description:
            'Copyright notice and ownership information for hellmartgame.com.',
          keywords: 'Hellmart copyright, ownership'
        }
      }
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../views/legal/AboutUsView.vue'),
      meta: {
        tdk: {
          title: 'About Us - Hellmart Game',
          description:
            'Learn about Hellmart Corp history, mission, and opportunities.',
          keywords: 'Hellmart about us, mission, history'
        }
      }
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/legal/ContactUsView.vue'),
      meta: {
        tdk: {
          title: 'Contact Us - Hellmart Game',
          description:
            'Human Resources and Anomalous Incident reporting channels.',
          keywords: 'Hellmart contact, HR, report'
        }
      }
    },
  ],
})

export default router
