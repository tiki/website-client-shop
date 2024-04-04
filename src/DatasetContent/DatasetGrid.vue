<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
</script>

<template>
  <div class="dataset-grid-container">
    <dataset-stats />
    <div style="border: 1px solid red"></div>
    <div style="border: 1px solid red"></div>
    <div style="border: 1px solid red"></div>
  </div>
</template>

<style scoped>
.dataset-grid-container {
  display: grid;
  grid-template-columns: 30% 70%;
  gap: 1em;
}
</style>
