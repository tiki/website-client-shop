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
  <div>
    <table-column-header :table="table" />
    <table-taxonomy :table="table" />
  </div>
</template>

<style scoped></style>
