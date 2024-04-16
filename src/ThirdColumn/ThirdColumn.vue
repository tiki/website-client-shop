<script setup lang="ts"></script>

<template>
  <div class="table-column-container">
    <slot />
  </div>
</template>

<style scoped>
.table-column-container {
  height: 100vh;
  width: 30%;
  margin-top: 1.5em;
  padding: 0 1.5em;
}
</style>
