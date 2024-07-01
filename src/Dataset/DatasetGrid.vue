<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import { onMounted, type PropType } from 'vue'
import ChartService from '../ChartService/index'
import { type ChartData } from '../ChartService/types/Chart'
import type { Attributes } from '@/Dataset/types/DatasetResponse';
import Button from 'primevue/button';



const props = defineProps({
  datasetAttributes: {
    type: Object as PropType<Attributes>,
    required: true
  }
})

const chartsData: ChartData[][] = props.datasetAttributes.charts

onMounted(() => {
  ChartService.renderDatasetScreenChart(
    chartsData,
    'chart-button-container',
    'dataset-last-grid-container'
  )
})
</script>

<template>
  <div id="dataset-first-grid-container">
    <dataset-stats :stats="datasetAttributes.stats" />
    <div id="first-chart-container">
      <div id="chart-button-container"></div>
      <div class="button-container">
        <Button label="View Sample" severity="success" class="w-44"/>
        <Button label="Compliance Report" severity="contrast" outlined class="w-44"/>
      </div>
    </div>
  </div>

  <div id="dataset-last-grid-container"></div>
</template>

<style scoped>
#dataset-first-grid-container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1em;
}
#dataset-last-grid-container {
  margin-top: 2em;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
}
#chart-button-container {
  display: flex;
  flex-direction: row;
  gap: 2em;
  align-items: center;
  justify-content: center;
}
#first-chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (max-width: 960px) {
  #dataset-first-grid-container {
    grid-template-columns: 100%;
  }
  #dataset-last-grid-container {
    grid-template-columns: 100%;
  }
}
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex: 1 0 0;
  margin-top: 1.5em;
  align-self: stretch;
}
</style>
