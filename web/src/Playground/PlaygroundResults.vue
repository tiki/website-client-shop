<script setup lang="ts">
const sample = [
  'Product Name, Category, Price, Test, Test, Test, Test, test, test, test, test, test, test, test',
  'T-Shirt, Clothing, $10.99',
  'Laptop, Electronics, $599.99',
  'SmartphoneASIDHQ8DU1E01W0SKJD9ASJD8HXC8UZXHC8AHS8DH8, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
  'Smartphone, Electronics, $299.00',
]
</script>

<template>
  <div class="results-container">
    <h2>Results</h2>
    <table v-if="sample">
      <thead>
        <tr>
          <th
            v-for="(value, key) in sample[0].split(',')"
            :key="key"
          >
            {{ value }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sample.slice(1)" :key="index">
          <td
            v-for="(item, index) in row.split(',')"
            :key="index"
          >
            {{ item }}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style>
.results-container {
  overflow: scroll;
  width: 50em;
  padding: 0;
}

table {
  text-align: left;
  border-collapse: separate;
  border-spacing: 0.75rem 0.75rem;
}

th {
  color: var(--secondary-text-color);
  font-weight: 600;
}
td {
  color: var(--secondary-text-color);
  font-weight: 400;
  overflow: scroll;
} 
</style>
