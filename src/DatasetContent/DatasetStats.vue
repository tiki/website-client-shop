<script setup lang="ts">
defineProps({
  stats: {
    required: true
  }
})
</script>

<template>
  <div class="dataset-stats-container">
    <div class="stats-list">
      <div class="stat-item"><span>Updates</span> Daily</div>
      <div class="stat-item"><span>Updates</span> Daily</div>
      <div class="stat-item"><span>Updates</span> Daily</div>
    </div>
    <div class="tags-container">
      <span>CONTAINS</span>
      <div class="tags-list">
        <div class="contain-item">Card Transactions</div>
        <div class="contain-item">in-store purchases</div>
        <div class="contain-item">ecommerce purchases</div>
        <div class="contain-item">sku-level receipts</div>
      </div>
    </div>
    <div class="tags-container">
      <span>APPROVED FOR</span>
      <div class="tags-list">
        <div class="contain-item">Card Transactions</div>
        <div class="contain-item">in-store purchases</div>
        <div class="contain-item">ecommerce purchases</div>
        <div class="contain-item">sku-level receipts</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.stat-item {
  display: flex;
  justify-content: space-between;
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
