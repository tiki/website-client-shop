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
.table-taxonomy-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
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
