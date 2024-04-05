<script setup lang="ts">
import Stats from './types/Stats.ts'
import { PropType } from 'vue'

defineProps({
  stats: {
    required: true,
    type: Object as PropType<Stats>
  }
})
</script>

<template>
  <div class="dataset-stats-container">
    <div class="stats-list">
      <div class="stat-item"><span>Updates</span> {{ stats.updates }}</div>
      <div class="stat-item"><span>Updated At</span> {{ stats.updated_at.toLocaleString() }}</div>
      <div class="stat-item"><span>years</span> {{ stats.years }}</div>
    </div>
    <div class="tags-container">
      <span>CONTAINS</span>
      <div class="tags-list">
        <div class="contain-item" v-for="contain in stats.contains" :key="contain">
          {{ contain }}
        </div>
      </div>
    </div>
    <div class="tags-container">
      <span>APPROVED FOR</span>
      <div class="tags-list">
        <div class="contain-item" v-for="approved in stats.approved_for">{{ approved }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  justify-content: space-between;
  padding-right: 2em;
  margin: 1em 0;
}

.stat-item span,
.tags-container span {
  font-weight: 600;
  text-transform: uppercase;
}

.tags-list {
  display: flex;
  flex-flow: wrap;
  gap: 0.5em;
}

.tags-container {
  margin: 1em 0;
}

.contain-item {
  display: flex;
  align-items: center;
  font-size: 0.85em;
  text-align: center;
  border: 1px solid #00000020;
  padding: 0.5em;
  border-radius: 2em;
  text-transform: uppercase;
  margin-top: 1em;
}
</style>
