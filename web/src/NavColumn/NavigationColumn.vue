<script setup lang="ts">
import NavSection from './NavSection.vue'
import NavHeader from './NavHeader.vue'
import { type MainRouter } from '@/router/types/MainRouter'
import Router from '../router/router'

const router: MainRouter[] = Router.getRoutes()

</script>

<template>
  <div class="nav-column-container">
    <nav-header />
    <nav-section :nav-list="router"/>
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

</style>
