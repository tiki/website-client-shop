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
  padding: 0.375em;
  width: 139px;
  border-radius: 0.3125em;
  border: 1px solid #000;
  background: url('../assets/searchBarSuffix.svg') no-repeat scroll 95% 50%;
  margin-top: 2em;
  margin-bottom: 0.5em;
}

input::placeholder {
  color: var(--primary-text-color);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: var(--theme-font-family);
}
</style>
