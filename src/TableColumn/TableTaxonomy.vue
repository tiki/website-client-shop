<script setup lang="ts">
import { demographics, transactions, receipts } from './Tables'

const props = defineProps({
  table: {
    type: String,
    required: true
  }
})

const checkTable = () => {
  switch (props.table!.toLowerCase()) {
    case 'demographics':
      return demographics
    case 'receipts':
      return receipts
    case 'transactions':
      return transactions
  }
}
</script>

<template>
  <div class="table-taxonomy-container">
    <h2>TAXONOMY</h2>
    <ul>
      <li v-for="data of checkTable()" :key="data.data">
        <div class="table-cell-container">
          <span class="table-cell-type">
            {{ data.data }}
          </span>
          <span class="table-cell-description"
            >Table Description: Transaction Category Level 1: SHOPS</span
          >
        </div>
        <span class="table-cell-type">{{ data.type }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1em;
  margin-bottom: 0.5em;
  color: var(--secondary-text-color);
  font-weight: 500;
}
li {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6em;
}

.table-cell-type {
  font-weight: 300;
}

.table-cell-container {
  display: flex;
  flex-direction: column;
}

.table-cell-description {
  color: color-mix(in srgb, var(--primary-text-color) 50%, transparent);
  font-size: 0.85em;
}
</style>
