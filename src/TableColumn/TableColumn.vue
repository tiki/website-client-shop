<script setup lang="ts">
import TableColumnHeader from './TableColumnHeader.vue'
import TableTaxonomy from './TableTaxonomy.vue'

defineProps({
  table: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="table-column-container">
    <table-column-header />
    <table-taxonomy :table="table" />
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
