<script setup lang="ts">
const props = defineProps({
  table: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="header-container">
    <h1>TABLE</h1>
    <div class="table-name">tiki.{{ table.toLowerCase() }}</div>
  </div>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;
  align-self: stretch;
}
h1 {
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

.table-name {
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0.375rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
}
</style>
