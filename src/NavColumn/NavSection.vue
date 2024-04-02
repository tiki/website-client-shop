<script setup lang="ts">
import { type PropType } from 'vue'

interface navSection {
  title: string
  navList: string[]
}

defineProps({
  navSection: {
    required: true,
    type: Object as PropType<navSection>
  }
})
</script>

<template>
  <p>{{ navSection.title }}</p>
  <ul>
    <li v-for="route in navSection.navList" :key="route">{{ route }}</li>
  </ul>
</template>

<style scoped>
p {
  font-weight: bold;
  font-size: 14px;
  margin-top: 2em;
}

li {
  list-style-type: none;
  padding: 0.3em 0 0.3em 1em;
  margin: 0.75em 0;
  cursor: pointer;
  font-size: 14px;
}

li:hover {
  color: #00b272;
  background-color: #00b27210;
  border-radius: 0.5em;
}
</style>
