<script setup lang="ts">
import { PropType } from 'vue'
import type TrailInfo from './types/TrailInfo'

defineProps({
  trailInfo: {
    required: true,
    type: Object as PropType<TrailInfo[]>
  }
})
</script>

<template>
  <div>
    <h1>AUDIT TRAIL</h1>
    <table>
      <thead>
        <tr>
          <th>DATE</th>
          <th>APPROVED</th>
          <th>AGREEMENT</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in trailInfo">
          <td>{{ info.date }}</td>
          <td>{{ info.approved }}</td>
          <td>{{ info.agreement }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1em;
  margin-bottom: 1em;
  color: var(--primary-text-color);
  font-weight: 600;
}

td,
th {
  padding: 1em;
  border-bottom: 1px solid #00000020;
  border-right: 1px solid #00000020;
}
table {
  border-top: 1px solid #00000020;
  border-left: 1px solid #00000020;
}
</style>
