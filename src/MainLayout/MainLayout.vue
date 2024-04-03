<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
</script>

<template>
  <div class="container">
    <!-- first column  -->
    <navigation-column />

    <!-- second column -->
    <content-column />

    <!-- third column -->
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
