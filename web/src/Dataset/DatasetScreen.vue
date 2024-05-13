<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import DatasetGrid from './DatasetGrid.vue'

defineProps({
  isOpen: {
    required: true,
    type: Boolean
  },
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  },
  table: {
    required: true,
    type: String
  }
})
</script>

<template>
  <content-column :is-open="isOpen" :title="title" :subtitle="subtitle" @toggle="$emit('toggle')">
    <dataset-grid />
  </content-column>
  <third-column :is-open="isOpen" @click="$emit('close')">
    <table-column :table="table" />
  </third-column>
</template>
