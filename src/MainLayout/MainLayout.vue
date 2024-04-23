<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import TableColumn from '../TableColumn/TableColumn.vue'
import { computed, onMounted, ref, watch } from 'vue'
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
const isOpen = ref<boolean>(false)
const width = ref<number>(window.outerWidth)

const closeDrawer = () => {
  if (isOpen.value === true && width.value < 1280) isOpen.value = false
}
onMounted(() => {
  if (window.outerWidth >= 1280) isOpen.value = true
})
</script>

<template>
  <div class="container" :class="isOpen ? 'content-layer' : ''">
    <navigation-column
      @route="
        (routeName: selectedRoute) => {
          route = routeName
        }
      "
      :navigationList="navigationList"
      :isOpen="isOpen"
    />

    <content-column
      :title="`${route.title}: ${route.route}`"
      :subtitle="handleSubtitle"
      @toggle="isOpen = !isOpen"
      :isOpen="isOpen"
    >
      <component :is="componentHandler"></component>
    </content-column>

    <third-column @click="closeDrawer()" :isOpen="isOpen">
      <component :is="thirdColumnHandler" :table="route.route"></component>
    </third-column>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

@media (max-width: 1279px) {
  .container {
    flex-direction: column;
    position: relative;
  }

  .content-layer {
    background-color: #00000090;
  }
}
</style>
