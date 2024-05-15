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
  <div class="table-column">
    <table-column-header :table="table" />
    <table-taxonomy :table="table" />
  </div>
</template>

<style scoped>
.table-column {
  display: flex;
  padding: 1.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex: 1 0 0;
  align-self: stretch;
}
</style>
