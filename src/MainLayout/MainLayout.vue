<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
</script>

<template>
  <div class="flex">
    <navigation-column />
    <RouterView :key="$route.fullPath" />
  </div>
</template>

