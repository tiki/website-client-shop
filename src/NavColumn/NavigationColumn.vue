<script setup lang="ts">
import LogoImg from './LogoImg.vue'
import SearchBar from './SearchBar.vue'
</script>

<template>
  <div class="nav-column-container">
    <logo-img />
    <search-bar />
  </div>
</template>

<style scoped>
.nav-column-container {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 20%;
  align-items: center;
  gap: 1em;
}
</style>
