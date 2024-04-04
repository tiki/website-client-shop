<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
</script>

<template>
  <div class="dataset-first-grid-container">
    <dataset-stats />
    <div style="border: 1px solid red"></div>
  </div>
  <div class="dataset-last-grid-container">
    <div style="border: 1px solid red"></div>
    <div style="border: 1px solid red"></div>
    <div style="border: 1px solid red"></div>
    <div style="border: 1px solid red"></div>
  </div>
</template>

<style scoped>
.dataset-first-grid-container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1em;
}
.dataset-last-grid-container {
  margin-top: 1em;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
}
</style>
