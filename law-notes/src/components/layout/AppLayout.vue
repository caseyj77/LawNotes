<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>

<template>
  <div class="app-layout">
    <Sidebar />

    <!-- Main layout content -->
    <div class="layout-main">
      <!-- 🔷 Top Header -->
      <header class="layout-header">
        <h1>LawNotes</h1>
      </header>

      <!-- 🔶 Dynamic routed content -->
      <main class="layout-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

/* Main content area */
.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
}

/* Header styling */
.layout-header {
  background-color: var(--color-warm-oak);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: 1px solid var(--color-border);
}

/* Routed view content */
.layout-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
