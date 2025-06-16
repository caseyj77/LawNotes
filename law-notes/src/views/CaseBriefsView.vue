<!-- src/views/CaseBriefsView.vue -->
<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import CaseBriefForm from '@/components/briefs/CaseBriefForm.vue'
</script>

<template>
  <AppLayout>
    <div class="case-briefs-page">
      <header class="page-header">
        <h2>📚 Case Briefs</h2>
        <p class="subtitle">Manage your legal briefs and attach related documents.</p>
      </header>

      <div class="briefs-body">
        <!-- 🔧 Placeholder -->
        <div class="brief-list-placeholder">
          [ Case Brief List Goes Here ]
        </div>

        <div class="brief-form-placeholder">
          <CaseBriefForm />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped>
.case-briefs-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.page-header h2 {
  font-size: 1.8rem;
  margin: 0;
  color: var(--color-deep-brown);
}

.subtitle {
  font-size: 1rem;
  color: var(--color-taupe);
}

.briefs-body {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

/* Placeholder boxes */
.brief-list-placeholder,
.brief-form-placeholder {
  flex: 1;
  background-color: white;
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  min-height: 300px;
  border-radius: 10px;
}
</style>
