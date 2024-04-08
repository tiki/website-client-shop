<script setup lang="ts">
window.addEventListener('keydown', (event) => {
  const condition = event.code === 'Slash' && (event.metaKey || event.ctrlKey)
  if (condition) {
    document.querySelector('input')?.focus()
  }
})
</script>

<template>
  <input type="text" placeholder="Jump to" />
</template>

<style scoped>
input {
  padding: 0.65em 0.5em;
  width: 100%;
  border-radius: 0.5em;
  border: 0.15em solid rgba(0, 0, 0, 0.6);
  background: url('src/assets/searchBarSuffix.svg') no-repeat scroll 95% 50%;
  margin-top: 2em;
  margin-bottom: 0.5em;
}

input::placeholder {
  color: var(--primary-text-color);
}
</style>
