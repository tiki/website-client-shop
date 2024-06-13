<script setup lang="ts">
import { type PropType } from 'vue';
import TableColumnHeader from './TableColumnHeader.vue'
import TableTaxonomy from './TableTaxonomy.vue'
import type { Attributes } from '@/Dataset/types/DatasetResponse';

defineProps({
  table: {
    type: String,
    required: true
  },
  datasetAttributes: {
    type: Object as PropType<Attributes>,
    required: true
  }
})
</script>

<template>
  <div class="table-column">
    <table-column-header :table="table" />
    <table-taxonomy :table="table" :taxonomy="datasetAttributes.taxonomy"/>
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
