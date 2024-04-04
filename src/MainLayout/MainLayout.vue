<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import { ref } from 'vue'
import type { selectedRoute } from '../NavColumn/types/selectedRoute'
import DatasetGrid from '../DatasetContent/DatasetGrid.vue'

import Router from '../router'

const datasetsRoutes = ['Transactions', 'Receipts', 'Demographics']
const navigationList = Router.getRoutes(datasetsRoutes)

const route = ref<selectedRoute>(Router.getInitialRoute())
</script>

<template>
  <div class="container">
    <!-- first column  -->
    <navigation-column
      @route="
        (routeName: selectedRoute) => {
          console.log('teste', routeName.route)
          route = routeName
        }
      "
      :navigationList="navigationList"
    />

    <!-- second column -->
    <content-column>
      You are in the route: {{ route.route }}
      <dataset-grid />
    </content-column>

    <!-- third column -->

    <table-column :table="route.route" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
