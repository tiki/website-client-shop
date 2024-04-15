<script setup lang="ts">
import AuditTrail from './AuditTrail.vue'

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
    <h1>charts</h1>
  </div>
</template>

<style scoped>
.legal-compliance-container {
  display: flex;
  justify-content: space-between;
}
</style>
