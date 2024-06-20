<script setup lang="ts">
import { demographics, transactions, receipts } from '../TableColumn/Tables'
import CustomSelect from './CustomSelect.vue';

const tables = ['demographics', 'receipts', 'transactions']

const emit = defineEmits(['insert', 'update'])
const checkTable = (table: string) => {
  switch (table) {
    case 'demographics':
      return demographics
    case 'receipts':
      return receipts
    case 'transactions':
      return transactions
  }
}

// const updateTable = (event: any) => {
//   if (event.newState === 'open') emit('update', `tiki.${event.srcElement.id}`)
// }
</script>

<template>
  <div class="table-selection-container">
    <custom-select name="data source" :options="['Github', 'Ocean', 'Lake', 'Something']"/>
    <custom-select name="database" :options="['Github', 'Ocean', 'Lake', 'Something']"/>
    <details>
      <summary>TABLES (3)</summary>

      <details v-for="table in tables" :id="table" :key="table">
        <summary>
          {{ table }}
          <span></span>
        </summary>
        <ul>
          <li
            v-for="data of checkTable(table)"
            :key="data.data"
            @dblclick="$emit('insert', data.data)"
          >
            <span>
              {{ data.data }}
            </span>
            <span>{{ data.type }}</span>
          </li>
        </ul>
      </details>
    </details>
  </div>
</template>

<style scoped>
.table-selection-container {
  padding: 1.125em;
  display: flex;
  flex-direction: column;
  gap: 1em;
}

summary {
    margin: 0 0 0.5em 0;
}
li {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-size: 0.8em;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.875em;
}

/* details summary::-webkit-details-marker,
details summary::marker {
  display: none;
} */

</style>
