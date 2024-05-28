<script setup lang="ts">
import NavigationColumn from '../NavColumn/NavigationColumn.vue'
import { onMounted, ref } from 'vue'


// const selectedRoute = ref<Route>(Router.getInitialRoute())

const isOpen = ref<boolean>(false)
const width = ref<number>(window.outerWidth)

const closeDrawer = () => {
  if (isOpen.value === true && width.value < 1280) isOpen.value = false
}
onMounted(() => {
  if (window.outerWidth >= 1280) isOpen.value = true
})

// const loadComponent = computed(() => {
//   if (selectedRoute.value.type === 'Datasets') return DatasetScreen
//   return selectedRoute.value.component
// })
</script>

<template>
  <div class="container" :class="isOpen ? 'content-layer' : ''">
      <navigation-column
        :isOpen="isOpen"
      />
      <RouterView />

    <!-- <component
      :title="`${selectedRoute.type}: ${selectedRoute.route}`"
      :subtitle="selectedRoute.subtitle"
      :table="selectedRoute.route"
      @toggle="isOpen = !isOpen"
      @close="closeDrawer()"
      :isOpen="isOpen"
      :is="loadComponent"
    /> -->
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
