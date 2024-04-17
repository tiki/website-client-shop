<script setup lang="ts">
import AuditTrail from './AuditTrail.vue'
import ChartComponent from './ChartComponent.vue'

const trailInfo = [
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
</script>

<template>
  <div class="legal-compliance-container">
    <audit-trail :trailInfo="trailInfo" />
    <div class="chart-container">
      <chart-component :title="'DATA SOURCES'" />
      <chart-component :title="'DATA SOURCES'" />
    </div>
  </div>
</template>

<style scoped>
.legal-compliance-container {
  display: flex;
  justify-content: space-between;
}

.chart-container {
  width: 100%;
  padding-left: 2em;
  display: flex;
  flex-direction: column;
}
</style>
