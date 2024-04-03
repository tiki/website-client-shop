<script setup lang="ts">
import TableColumnHeader from './TableColumnHeader.vue'
import TableTaxonomy from './TableTaxonomy.vue'
</script>

<template>
  <div class="table-column-container">
    <table-column-header />
    <table-taxonomy />
  </div>
</template>

<style scoped>
.table-column-container {
  height: 100vh;
  width: 30%;
  margin-top: 1.5em;
  padding: 0 1.5em;
}
</style>
