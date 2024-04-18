<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import { computed, ref } from 'vue'
import type { selectedRoute } from '../NavColumn/types/selectedRoute'
import DatasetGrid from '../DatasetContent/DatasetGrid.vue'
import LegalComplianceContainer from '../LegalCompliance/LegalComplianceContent.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import DataSourceAgreement from '../LegalCompliance/DataSourceAgreement.vue'

import Router from '../router'

const datasetsRoutes = ['Transactions', 'Receipts', 'Demographics']
const navigationList = Router.getRoutes(datasetsRoutes)

const route = ref<selectedRoute>(Router.getInitialRoute())

const componentHandler = computed(() => {
  switch (route.value.route) {
    case 'Legal Compliance':
      return LegalComplianceContainer
  }
  return route.value.title === 'datasets' ? DatasetGrid : null
})

const handleSubtitle = computed(() => {
  switch (route.value.route) {
    case 'Legal Compliance':
      return `All data provided is licensed directly from the legal owner. Review and select the agreements that meet your due-diligence criteria to get started. `
    default:
      return `This dataset contains purchase transaction information like the date, amount, merchant, type,
      and location. Combine with demographics to build profiles against spend. See Taxonomy for all
      available fields. Each record contains a standard userid which can be used to join
      demographics to various other datasets, such as receipts and demographics.`
  }
})

const thirdColumnHandler = computed(() => {
  switch (true) {
    case route.value.title === 'datasets':
      return TableColumn
    case route.value.route === 'Legal Compliance':
      return DataSourceAgreement
  }
})
</script>

<template>
  <div class="container">
    <navigation-column
      @route="
        (routeName: selectedRoute) => {
          route = routeName
        }
      "
      :navigationList="navigationList"
    />

    <content-column :title="`${route.title}: ${route.route}`" :subtitle="handleSubtitle">
      <component :is="componentHandler"></component>
    </content-column>

    <third-column>
      <component :is="thirdColumnHandler" :table="route.route"></component>
    </third-column>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
