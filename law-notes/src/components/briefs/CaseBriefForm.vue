<!-- src/components/briefs/CaseBriefForm.vue -->
<script setup>
</script>

<template>
  <form class="case-brief-form">
    <h3>📝 New Case Brief</h3>

    <!-- Basic Case Metadata -->
    <div class="form-section">
      <label>Case Name</label>
      <input type="text" placeholder="e.g., Marbury v. Madison" />

      <label>Citation</label>
      <input type="text" placeholder="e.g., 5 U.S. 137 (1803)" />

      <label>Category</label>
      <select>
        <option disabled selected>Select a category</option>
        <option>Contracts</option>
        <option>Torts</option>
      </select>

      <label>Priority</label>
      <select>
        <option disabled selected>Select priority</option>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
    </div>

    <!-- Placeholder for Long Form Sections -->
    <div class="form-section">
      <label>Facts</label>
      <textarea rows="4"></textarea>

      <label>Issue(s)</label>
      <textarea rows="2"></textarea>

      <label>Rule(s)</label>
      <textarea rows="2"></textarea>

      <label>Holding</label>
      <textarea rows="2"></textarea>

      <label>Reasoning</label>
      <textarea rows="3"></textarea>

      <label>Disposition</label>
      <textarea rows="2"></textarea>
    </div>

    <!-- File Attachment Placeholder -->
    <div class="form-section">
      <label>Attach PDFs</label>
      <input type="file" accept=".pdf" multiple />
    </div>

    <!-- Form Buttons -->
    <div class="form-actions">
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </div>
  </form>
</template>

<style scoped>
.case-brief-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

h3 {
  margin-bottom: 1rem;
  color: var(--color-deep-brown);
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1rem;
  background: white;
}

.form-actions {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--color-warm-oak);
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: var(--color-desert-clay);
}
</style>
