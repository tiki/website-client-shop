<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import { ref } from 'vue'

const route = ref<string>('')
</script>

<template>
  <div class="container">
    <!-- first column  -->
    <navigation-column @route="(routeName: string) => (route = routeName)" />

    <!-- second column -->
    <content-column> You are in the route: {{ route }}</content-column>

    <!-- third column -->

    <table-column :table="route" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
