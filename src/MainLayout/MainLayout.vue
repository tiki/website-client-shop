<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import { computed, onMounted, ref } from 'vue'
import { type Route } from '@/router/types/route'
import type { MainRouter } from '@/router/types/MainRouter'
import DatasetScreen from '@/Dataset/DatasetScreen.vue'

import Router from '../router/router'

const router: MainRouter[] = Router.getRoutes()

const selectedRoute = ref<Route>(Router.getInitialRoute())

const isOpen = ref<boolean>(false)
const width = ref<number>(window.outerWidth)

const closeDrawer = () => {
  if (isOpen.value === true && width.value < 1280) isOpen.value = false
}
onMounted(() => {
  if (window.outerWidth >= 1280) isOpen.value = true
})

const loadComponent = computed(() => {
  if (selectedRoute.value.type === 'Datasets') return DatasetScreen
  return selectedRoute.value.component
})
</script>

<template>
  <div class="container" :class="isOpen ? 'content-layer' : ''">
    <navigation-column
      @route="
        (route: Route) => {
          selectedRoute = route
        }
      "
      :navigationList="router"
      :isOpen="isOpen"
    />
    <component
      :title="`${selectedRoute.type}: ${selectedRoute.route}`"
      :subtitle="selectedRoute.subtitle"
      :table="selectedRoute.route"
      @toggle="isOpen = !isOpen"
      @close="closeDrawer()"
      :isOpen="isOpen"
      :is="loadComponent"
    />
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
