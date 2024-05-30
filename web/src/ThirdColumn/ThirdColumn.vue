<script setup lang="ts">


const emit = defineEmits(['toggle'])

</script>

<template>
  <div class="table-column-container">
    <slot />
  </div>
</template>

<style scoped>
.table-column-container {
  height: 100vh;
  min-width: 22.25rem;
}

@media (max-width: 1279px) {
  .table-column-container {
    height: auto;
    max-width: 22.25rem;
  }
}
</style>
