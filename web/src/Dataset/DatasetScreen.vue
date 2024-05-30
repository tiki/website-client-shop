<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import DatasetGrid from './DatasetGrid.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = `${String(route.name)}: ${route.params.name}`

const subtitle = `This dataset contains purchase transaction information like the date, amount, merchant, type, and location. Combine with demographics to build profiles against spend. See Taxonomy for all available fields. Each record contains a standard userid which can be used to join demographics to various other datasets, such as receipts and demographics.`

</script>

<template>
  <content-column :title="title" :subtitle="subtitle" >
    <dataset-grid />
  </content-column>
  <third-column>
    <table-column :table="$route.params.name" />
  </third-column>
</template>
