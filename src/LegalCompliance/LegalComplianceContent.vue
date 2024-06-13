<script setup lang="ts">
import type { ChartData } from '@/ChartService/types/Chart'
import AuditTrail from './AuditTrail.vue'
import ChartComponent from './ChartComponent.vue'
import type TrailInfo from './types/TrailInfo'

import type { PropType } from 'vue'
import { type LegalComplianceRsp, type LegalComplianceData } from './types/LegalComplianceRsp'

const props = defineProps({
  content: {
    type: Object as PropType<LegalComplianceRsp>,
    required: true
  }
})

const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color')

const trailInfo: TrailInfo[] = props.content.data.map((el: LegalComplianceData) => {
  return {
    date: el.attributes.publishedAt,
    approved: el.attributes.approved,
    agreement: el.attributes.name
  }
})

function calculatePercentages(arr: number[]): number[] {
  const total = arr.reduce((acc, val) => acc + val, 0)
  return arr.map((val) => (val / total) * 100)
}

const chartsDatasetsValue = props.content.data.map((el: LegalComplianceData) =>
  Number(el.attributes.records)
)
const dataSourcesPercentages = calculatePercentages(chartsDatasetsValue)

const dataSourcesColors = dataSourcesPercentages.map((el) => accentColor + el.toFixed(0))

const dataSourceChartData: ChartData = {
  labels: props.content.data.map((el: LegalComplianceData) => el.attributes.name),
  datasets: [
    {
      data: chartsDatasetsValue,
      label: 'Records',
      backgroundColor: dataSourcesColors
    }
  ]
}

const approvedForArray = props.content.data.flatMap(
  (el: LegalComplianceData) => el.attributes.approved_for.approved_for
)

const approvedForCountMap = approvedForArray.reduce(
  (acc: Record<string, number>, approvedFor: string) => {
    acc[approvedFor] = (acc[approvedFor] || 0) + 1
    return acc
  },
  {}
)

const uniqueApprovedForArray = [...new Set(approvedForArray)]

const approvedForCountArray = uniqueApprovedForArray.map(
  (approvedFor) => approvedForCountMap[approvedFor]
)

const approvedPercentages = calculatePercentages(approvedForCountArray)

const approvedColors = approvedPercentages.map((el) => accentColor + el.toFixed(0))

const approvedChartData: ChartData = {
  labels: uniqueApprovedForArray,
  datasets: [
    {
      data: approvedForCountArray,
      label: '',
      backgroundColor: approvedColors
    }
  ]
}
</script>

<template>
  <div class="legal-compliance-container">
    <audit-trail :trailInfo="trailInfo" />
    <div class="chart-container">
      <chart-component
        :title="'DATA SOURCES'"
        :containerId="'data-sources'"
        :chart-data="dataSourceChartData"
      />
      <chart-component
        :title="'APPROVED FOR'"
        :containerId="'approved-for'"
        :chart-data="approvedChartData"
      />
    </div>
  </div>
</template>

<style scoped>
.legal-compliance-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
}

.chart-container {
  width: 100%;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
}

@media (max-width: 1279px) {
  .legal-compliance-container {
    flex-direction: column;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }
}
</style>
