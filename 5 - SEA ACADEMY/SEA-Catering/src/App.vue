<template>
  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <!-- Skip to content link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Brand Logo -->
    <router-link to="/" class="navbar-brand" aria-current="page">
      <p>SEA Catering</p>
    </router-link>

    <div class="navbar-group">
      <router-link 
        to="/" 
        class="navbar-item"
        :aria-current="route.path === '/' ? 'page' : null"
      >
        <i class="fa-solid fa-house"></i> Home
      </router-link>
      
      <router-link 
        to="/menu" 
        class="navbar-item"
        :aria-current="route.path === '/menu' ? 'page' : null"
      >
        <i class="fa-solid fa-table-list"></i> Menu
      </router-link>
      
      <!-- Other navigation items similarly -->
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>