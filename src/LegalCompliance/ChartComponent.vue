<script setup lang="ts">
import { onMounted } from 'vue'
import { renderLegalComplianceChart } from '../DatasetContent/createCharts'
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
const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color')

const datasources: ChartData[] =
  props.containerId === 'data-sources'
    ? [
        {
          width: 5,
          height: 2,
          type: 'doughnut',
          labels: ['App 1', 'App 2', 'Stripe', 'Hubspot'],
          datasets: [
            {
              data: [90, 52, 36, 10],
              label: '',
              backgroundColor: [68, 52, 36, 20].map((el) => accentColor + el)
            }
          ]
        }
      ]
    : [
        {
          width: 5,
          height: 2,
          type: 'doughnut',
          labels: ['ANALYTICS', 'AI TRAINING', 'ADVERTISING', 'ATTRIBUTION'],
          datasets: [
            {
              data: [68, 52, 36, 20],
              label: '',
              backgroundColor: [68, 52, 36, 20].map((el) => accentColor + el)
            }
          ]
        }
      ]
onMounted(() => {
  try {
    renderLegalComplianceChart(datasources, props.containerId)
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
}
h1 {
  display: flex;
  padding: 0.75rem;
  align-items: flex-start;
  gap: 1.4375rem;
  align-self: stretch;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: var(--primary-text-color);
}
</style>
