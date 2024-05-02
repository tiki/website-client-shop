<script setup lang="ts">
import type { ChartData } from '@/ChartService/types/Chart'
import AuditTrail from './AuditTrail.vue'
import ChartComponent from './ChartComponent.vue'
import type TrailInfo from './types/TrailInfo'

const accentColor = getComputedStyle(document.body).getPropertyValue('--accent-color')

const trailInfo: TrailInfo[] = [
  {
    date: 'JAN. 03, 2024',
    approved: true,
    agreement: 'APP 1'
  },
  {
    date: 'FEB. 17, 2024',
    approved: true,
    agreement: 'APP 2'
  },
  {
    date: 'FEB. 17, 2024',
    approved: true,
    agreement: 'COMPANY.COM'
  },
  {
    date: 'MAR. 05, 2024',
    approved: false,
    agreement: 'APP 2'
  }
]

const dataSourceChartData: ChartData = {
  labels: ['App 1', 'App 2', 'Stripe', 'Hubspot'],
  datasets: [
    {
      data: [90, 52, 36, 10],
      label: '',
      backgroundColor: [68, 52, 36, 20].map((el) => accentColor + el)
    }
  ]
}

const approvedChartData: ChartData = {
  labels: ['ANALYTICS', 'AI TRAINING', 'ADVERTISING', 'ATTRIBUTION'],
  datasets: [
    {
      data: [68, 52, 36, 20],
      label: '',
      backgroundColor: [68, 52, 36, 20].map((el) => accentColor + el)
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
