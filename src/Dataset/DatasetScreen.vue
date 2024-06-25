<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import DatasetGrid from './DatasetGrid.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { type DatasetResponse, type Attributes, type Data } from './types/DatasetResponse'

const route = useRoute()

const title = `${String(route.name)}: ${route.params.name}`

const datasetAttributes = ref<Attributes | null>()

onMounted(async () => {
  const headers = new Headers()
  headers.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRfaWQiLCJhdWQiOiJteXRpa2kuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.C_xGCt8BsAUjfFm6dJ60VoMu1qyxu7LAzbe6bm0B7Rw'
  )
  const options = {
    method: 'GET',
    headers: headers
  }
  const response: DatasetResponse = await (
    await fetch(`${import.meta.env.VITE_API_URL}/datasets`, options)
  ).json()
  const dataset = response.data.find((el: Data) => {
    return el.attributes.name.toLowerCase() === route.params.name
  })

  datasetAttributes.value = dataset?.attributes

})


</script>

<template>
  <div v-if="datasetAttributes" id="dataset-screen">
    <content-column :title="title" :subtitle="datasetAttributes.description">
      <dataset-grid :dataset-attributes="datasetAttributes"/>
    </content-column>
    <third-column>
      <table-column :table="datasetAttributes.name" :dataset-attributes="datasetAttributes"/>
    </third-column>
  </div>
  </template>

<style scoped>
#dataset-screen{
  display: flex;
}
</style>