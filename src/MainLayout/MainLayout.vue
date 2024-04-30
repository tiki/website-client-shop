<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import { onMounted, ref } from 'vue'
import { type Route } from '@/router/types/route'
import type { MainRouter } from '@/router/types/MainRouter'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'

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

    <content-column
      :title="`${selectedRoute.type}: ${selectedRoute.route}`"
      :subtitle="selectedRoute.subtitle"
      @toggle="isOpen = !isOpen"
      :isOpen="isOpen"
    >
      <component :is="selectedRoute.contentComponent"></component>
    </content-column>

    <third-column @click="closeDrawer()" :isOpen="isOpen">
      <component :is="selectedRoute.thirdColumnComponent" :table="selectedRoute.route"></component>
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
../router/router ../router/types/selectedRoute
