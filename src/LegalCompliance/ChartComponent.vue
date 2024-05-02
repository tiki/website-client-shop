<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import ChartService from '../ChartService/index'
import { type ChartData } from '../ChartService/types/Chart'

const props = defineProps({
  title: {
    required: true,
    type: String
  },
  containerId: {
    type: String,
    required: true
  },
  chartData: {
    required: true,
    type: Object as PropType<ChartData>
  }
})

onMounted(() => {
  try {
    ChartService.renderLegalComplianceChart(props.chartData, props.containerId)
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
