<!-- src/components/layout/Sidebar.vue -->
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { name: 'Dashboard', path: '/' },
  { name: 'Case Briefs', path: '/briefs' },
  { name: 'Categories', path: '/categories' } // optional
]
</script>

<template>
  <nav class="sidebar">
    <h2 class="app-title">LawNotes</h2>
    <ul>
      <li
        v-for="link in links"
        :key="link.path"
        :class="{ active: route.path === link.path }"
      >
        <router-link :to="link.path">{{ link.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.sidebar {
  width: 240px;
  background-color: var(--color-deep-brown);
  color: white;
  padding: 2rem 1rem;
  height: 100vh;
}

.app-title {
  font-size: 1.4rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 1rem;
}

a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.active a {
  color: var(--color-accent);
}
</style>
