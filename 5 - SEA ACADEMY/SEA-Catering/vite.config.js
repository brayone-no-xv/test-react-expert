import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        navbar: "./src/components/landingPage/navbar/navbar.vue", 
        home: "./src/components/landingPage/hero/hero.vue",
        subscription: "./src/components/subscription/subscription.vue",
        contact: "./src/components/contact/contact.vue",
        testimonial: "./src/components/landingPage/testimonials/testimonial.vue"
      }
    }
  }
})
