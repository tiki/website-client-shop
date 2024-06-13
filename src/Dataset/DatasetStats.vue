<script setup lang="ts">
import type { Stats } from './types'
import { type PropType } from 'vue'

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
.dataset-stats-container {
  display: flex;
  padding: 0.75rem 0rem;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  gap: 0.75rem;
  align-self: stretch;
}

.stats-list {
  gap: 0.75rem;
  display: flex;
  flex-direction: column;
}
.stat-item {
  display: flex;
  color: var(--primary-text-color);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
}

.stat-item span,
.tags-container span {
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primary-text-color);
  font-size: 0.6875rem;
  width: 6.25rem;
}

.tags-list {
  display: flex;
  padding: 0.375rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 0.5625rem;
  align-self: stretch;
  flex-wrap: wrap;
}

.contain-item {
  color: var(--primary-text-color);
  display: flex;
  border-radius: 6.25rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
}
</style>
