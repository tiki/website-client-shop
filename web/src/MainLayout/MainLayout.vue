<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
</script>

<template>
  <div class="container">
    <navigation-column />
    <RouterView :key="$route.fullPath" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
