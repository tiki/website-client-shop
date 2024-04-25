<script setup lang="ts">
import { type PropType } from 'vue'
import type TrailInfo from './types/TrailInfo'

defineProps({
  trailInfo: {
    required: true,
    type: Object as PropType<TrailInfo[]>
  }
})
</script>

<template>
  <div class="container">
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
.container {
  display: flex;
  height: 29.25rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
}
h1 {
  color: var(--primary-text-color);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

td,
th {
  border-bottom: 1px solid #00000020;
  text-align: center;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  width: 6.25rem;
  padding: 0.25rem 0.6875rem;
  gap: 0.625rem;
}

th {
  font-weight: 700;
}

tbody tr:last-of-type td {
  border-bottom: none;
}

td:last-of-type,
th:last-of-type {
  text-align: left;
  padding-right: 3em;
}

td:last-of-type {
  text-decoration: underline;
}

th:nth-child(even),
td:nth-child(even) {
  border-right: 1px solid #00000020;
  border-left: 1px solid #00000020;
}

table {
  border: 1px solid #00000020;
  border-radius: 0.75em;
}
</style>
