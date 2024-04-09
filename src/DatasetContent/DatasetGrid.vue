<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import { onMounted } from 'vue'
import createCharts from './createCharts'
import type { ChartData, Stats } from './types'

const chartsData: ChartData[] = [
  {
    width: 5,
    height: 2,
    type: 'bar',
    labels: ['January', 'February', 'March'],
    datasets: [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Something' }]
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
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: '#00b272'
      },
      {
        label: 'My second Dataset',
        data: [55, 99, 112, 81, 56, 55, 40],
        borderColor: 'rgb(75, 192, 192)'
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
        borderColor: 'rgb(75, 192, 192)'
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
  createCharts(chartsData)
})
</script>

<template>
  <div id="dataset-first-grid-container">
    <dataset-stats :stats="stats" />
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
  margin-top: 1em;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
}
</style>
