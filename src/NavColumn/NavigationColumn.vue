<script setup lang="ts">
import NavSection from './NavSection.vue'
import NavHeader from './NavHeader.vue'
import type { PropType } from 'vue'
import type { Route } from './types/route'
import type { selectedRoute } from './types/selectedRoute'

defineProps({
  navigationList: {
    required: true,
    type: Object as PropType<Route[]>
  }
})
</script>

<template>
  <div class="nav-column-container">
    <nav-header />
    <nav-section
      :nav-section="navigationList"
      @route="(route: selectedRoute) => $emit('route', route)"
    />
  </div>
</template>

<style scoped>
.nav-column-container {
  height: 100vh;
  border-right: 1px solid #00000010;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 2em;
  padding: 0 2em;
}
</style>
../router
