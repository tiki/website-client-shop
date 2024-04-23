<script setup lang="ts">
import NavSection from './NavSection.vue'
import NavHeader from './NavHeader.vue'
import type { PropType } from 'vue'
import type { Route } from './types/route'
import type { selectedRoute } from './types/selectedRoute'

defineProps({
  isOpen: {
    required: true,
    type: Boolean
  },
  navigationList: {
    required: true,
    type: Object as PropType<Route[]>
  }
})
</script>

<template>
  <div class="nav-column-container" v-show="isOpen">
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
  /* width: 20%; */
  max-width: 230px;
  margin-top: 2em;
  padding: 0 2em;
}

@media (max-width: 1279px) {
  .nav-column-container {
    top: 0;
    right: 0;
    position: fixed;
    margin-top: 0;
    background-color: #fff;
    overflow-y: scroll;
  }
}
</style>
