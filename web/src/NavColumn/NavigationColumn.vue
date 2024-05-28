<script setup lang="ts">
import NavSection from './NavSection.vue'
import NavHeader from './NavHeader.vue'
import { type MainRouter } from '@/router/types/MainRouter'
import Router from '../router/router'

defineProps({
  isOpen: {
    required: true,
    type: Boolean
  },
})

const router: MainRouter[] = Router.getRoutes()


defineEmits(['route'])
</script>

<template>
  <div class="nav-column-container" v-show="isOpen">
    <nav-header />
    <nav-section :nav-list="router" @route="(route) => $emit('route', route)" />
  </div>
</template>

<style scoped>
.nav-column-container {
  height: 100vh;
  border-right: 1px solid #00000010;
  display: flex;
  flex-direction: column;
  width: 175px;
  margin-top: 1.125em;
  padding: 0 1.125em;
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
