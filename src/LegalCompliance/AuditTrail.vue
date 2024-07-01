<script setup lang="ts">
import { type PropType } from 'vue'
import type TrailInfo from './types/TrailInfo'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

defineProps({
  trailInfo: {
    required: true,
    type: Object as PropType<TrailInfo[]>
  }
})
</script>

<template>
  <div class="card">
    <DataTable :value="trailInfo" >
      <Column field="date" header="Date"></Column>
      <Column field="approved" header="Approved"></Column>
      <Column field="agreement" header="Agreement"></Column>
    </DataTable>
  </div>
</template>

