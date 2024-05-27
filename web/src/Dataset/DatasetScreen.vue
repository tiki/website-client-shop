<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import DatasetGrid from './DatasetGrid.vue'
import { type DatasetResponse } from '@/Dataset/types'
import { onActivated, ref } from 'vue'

const props = defineProps({
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

const dataset = ref<DatasetResponse | undefined>()

const headers = new Headers()

headers.append(
  'Authorization',
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRfaWQiLCJhdWQiOiJteXRpa2kuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.C_xGCt8BsAUjfFm6dJ60VoMu1qyxu7LAzbe6bm0B7Rw'
)

fetch(`${import.meta.env.VITE_API_URL}/datasets`, {
  method: 'GET',
  headers: headers
})
  .then((res) => res.json())
  .then((res) => {
    console.log('AAAAAAA', res)
    dataset.value = res
  })

console.log('datasets', dataset.value)


// return datasets.data.find((dtset) => dtset.attributes.name === props.table)
</script>

<template>
  <content-column :is-open="isOpen" :title="title" :subtitle="subtitle" @toggle="$emit('toggle')">
    <dataset-grid :dataset="dataset" />
  </content-column>
  <third-column :is-open="isOpen" @click="$emit('close')">
    <table-column :table="table" />
  </third-column>
</template>
