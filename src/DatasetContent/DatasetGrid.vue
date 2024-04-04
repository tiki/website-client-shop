<script setup lang="ts">
import DatasetStats from './DatasetStats.vue'
import Chart from 'chart.js/auto'
import { onMounted } from 'vue'

onMounted(() => {
  ;(async function () {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 }
    ]

    new Chart(document.getElementById('dataset-chart-container'), {
      type: 'bar',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count)
          }
        ]
      }
    })

    new Chart(document.getElementById('dataset-chart-container-2'), {
      type: 'bubble',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count)
          }
        ]
      }
    })
    new Chart(document.getElementById('dataset-chart-container-3'), {
      type: 'doughnut',
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map((row) => row.count)
          }
        ]
      }
    })
  })()
})
</script>

<template>
  <div class="dataset-first-grid-container">
    <dataset-stats />
    <div style="display: flex; flex-wrap: wrap">
      <canvas style="border: 1px solid red" id="dataset-chart-container" width="10"></canvas>
    </div>
  </div>

  <div class="dataset-last-grid-container">
    <div>
      <canvas style="border: 1px solid red" id="dataset-chart-container-2" width="20"></canvas>
    </div>
    <div>
      <canvas style="border: 1px solid red" id="dataset-chart-container-3"></canvas>
    </div>
  </div>
</template>

<style scoped>
.dataset-first-grid-container {
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1em;
}
.dataset-last-grid-container {
  margin-top: 1em;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
}
</style>
