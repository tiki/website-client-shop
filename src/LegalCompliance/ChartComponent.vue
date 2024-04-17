<script setup lang="ts">
import { onMounted } from 'vue'
import createCharts from '../DatasetContent/createCharts'
import type { ChartData } from '@/DatasetContent/types'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  containerId: {
    type: String,
    required: true
  }
})

const datasources: ChartData[] = [
  {
    width: 5,
    height: 2,
    type: 'doughnut',
    labels: ['App 1', 'App 2', 'Stripe', 'Hubspot'],
    datasets: [
      {
        data: [68, 52, 36, 20],
        label: '',
        backgroundColor: ['#00b27268', '#00b27252', '#00b27236', '#00b27220']
      }
    ]
  }
]
onMounted(() => {
  console.log('teste')
  try {
    createCharts(datasources, props.containerId)
  } catch {
    ;(e: any) => console.log(e)
  }
})
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div :id="containerId"></div>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #00000020;
  margin-bottom: 1em;
  border-radius: 0.3em;
  padding: 1em;
}
h1 {
  font-size: 1em;
  margin-bottom: 1em;
  color: var(--primary-text-color);
  font-weight: 400;
}
</style>
