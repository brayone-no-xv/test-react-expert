import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        navbar: "SEA-Catering/src/components/navbar/navbar.vue", 
        home: "SEA-Catering/src/components/hero/hero.vue",
        subscription: "",
        contact: "",
      }
    }
  }
})
