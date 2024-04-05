<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'
import createCharts from './createCharts.ts'
import ChartData from './types/Chart.ts'

const chartsData: ChartData[] = [
  {
    type: 'bar',
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Sales',
        data: 300
      },
      {
        label: 'Expenses',
        data: 200
      },
      {
        label: 'Sales',
        data: 300
      },
      {
        label: 'Expenses',
        data: 200
      },
      {
        label: 'Sales',
        data: 300
      },
      {
        label: 'Expenses',
        data: 200
      },
      {
        label: 'Sales',
        data: 300
      },
      {
        label: 'Expenses',
        data: 200
      }
    ]
  },
  {
    type: 'line',
    labels: ['Q1', 'Q2', 'Q3'],
    datasets: [
      {
        label: 'Profit',
        data: 500
      },
      {
        label: 'Profit',
        data: 600
      },
      {
        label: 'Profit',
        data: 700
      }
    ]
  },
  {
    type: 'doughnut',
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Profit',
        data: 500
      },
      {
        label: 'Profit',
        data: 600
      },
      {
        label: 'Profit',
        data: 700
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
./createCharts
