<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
const tableData = [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: 'bamboo-watch.jpg',
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1001',
                    code: 'nvklal433',
                    name: 'Black Watch',
                    description: 'Product Description',
                    image: 'black-watch.jpg',
                    price: 72,
                    category: 'Accessories',
                    quantity: 61,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1002',
                    code: 'zz21cz3c1',
                    name: 'Blue Band',
                    description: 'Product Description',
                    image: 'blue-band.jpg',
                    price: 79,
                    category: 'Fitness',
                    quantity: 2,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3
                },
                {
                    id: '1003',
                    code: '244wgerg2',
                    name: 'Blue T-Shirt',
                    description: 'Product Description',
                    image: 'blue-t-shirt.jpg',
                    price: 29,
                    category: 'Clothing',
                    quantity: 25,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1004',
                    code: 'h456wer53',
                    name: 'Bracelet',
                    description: 'Product Description',
                    image: 'bracelet.jpg',
                    price: 15,
                    category: 'Accessories',
                    quantity: 73,
                    inventoryStatus: 'INSTOCK',
                    rating: 4
                },
                {
                    id: '1005',
                    code: 'av2231fwg',
                    name: 'Brown Purse',
                    description: 'Product Description',
                    image: 'brown-purse.jpg',
                    price: 120,
                    category: 'Accessories',
                    quantity: 0,
                    inventoryStatus: 'OUTOFSTOCK',
                    rating: 4
                },
                {
                    id: '1006',
                    code: 'bib36pfvm',
                    name: 'Chakra Bracelet',
                    description: 'Product Description',
                    image: 'chakra-bracelet.jpg',
                    price: 32,
                    category: 'Accessories',
                    quantity: 5,
                    inventoryStatus: 'LOWSTOCK',
                    rating: 3
                },
            ];
</script>

<template>
  <div class="results-container">
    <h1 class="text-2xl font-semibold">Results</h1>
    <div class="card">
      <DataTable :value="tableData" tableStyle="min-width: 50rem">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
  </div>
  </div>
</template>

<style>
.results-container {
  overflow: scroll;
  width: 60em;
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
