<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import { onMounted } from 'vue'
import createCharts from './createCharts'
import type { ChartData, Stats } from './types'
import CustomButton from '../CustomButton/CustomButton.vue'
import { ButtonState } from '../CustomButton/ButtonState'

const chartsData: ChartData[] = [
  {
    width: 5,
    height: 2,
    type: 'bar',
    labels: ['January', 'February', 'March'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Something', backgroundColor: '#00b27250' }
    ]
  },
  {
    width: 12,
    height: 15,
    type: 'line',
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: '#00b27250',
        backgroundColor: '#00b27250',
        fill: true
      }
    ]
  },
  {
    width: 15,
    height: 15,
    type: 'scatter',
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [
          {
            x: -10,
            y: 0
          },
          {
            x: 0,
            y: 10
          },
          {
            x: 10,
            y: 5
          },
          {
            x: 0.5,
            y: 5.5
          }
        ],
        borderColor: '#00b27250',
        backgroundColor: '#00b27250'
      }
    ]
  }
]

const stats: Stats = {
  updates: 'DAILY',
  updated_at: new Date(),
  years: '3.1',
  contains: [
    'in-store purchases',
    'ecommerce purchases',
    'sku-level receipts',
    'Card transactions'
  ],
  approved_for: ['Analytics', 'Advertising', 'AI Training', 'Personalization']
}

onMounted(() => {
  createCharts(chartsData, 'chart-button-container', 'dataset-last-grid-container')
})
</script>

<template>
  <div id="dataset-first-grid-container">
    <dataset-stats :stats="stats" />
    <div id="chart-button-container">
      <custom-button :button-text="'Compliance Report'" :state="ButtonState.OUTLINED" />
      <custom-button :button-text="'View Sample'" :state="ButtonState.FILLED" />
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
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}
</style>
