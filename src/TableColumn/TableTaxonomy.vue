<script setup lang="ts">
import type { PropType } from 'vue';
import type { Taxonomy } from '@/Dataset/types/DatasetResponse';

defineProps({
  table: {
    type: String,
    required: true
  },
  taxonomy: {
    type: Object as PropType<Taxonomy>,
    required: true
  }
})

</script>

<template>
  <div class="table-taxonomy-container">
    <h2>TAXONOMY</h2>
    <ul>
      <li v-for="data of taxonomy[table.toLowerCase()]" :key="data.data">
        <div class="table-cell-container">
          <span class="table-cell-type">
            {{ data.data }}
          </span>
          <span class="table-cell-type">{{ data.type }}</span>
        </div>
        <span class="table-cell-description"
          >{{ data.description }}</span
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.table-taxonomy-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
}

ul {
  width: 100%;
}

h2 {
  color: var(--secondary-text-color);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}
li {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
  width: 100%;
}
.table-cell-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;
}

.table-cell-description {
  color: color-mix(in srgb, var(--primary-text-color) 50%, transparent);
  font-size: 0.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
