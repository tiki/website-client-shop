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
  padding: 0.2em 1em;
  border-bottom: 1px solid #00000020;
  text-align: center;
  text-transform: uppercase;
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
