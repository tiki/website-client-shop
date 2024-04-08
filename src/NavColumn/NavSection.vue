<script setup lang="ts">
import { type PropType, ref, onMounted } from 'vue'
import { type Route } from './types/route'
import type { selectedRoute } from './types/selectedRoute'

const props = defineProps({
  navSection: {
    required: true,
    type: Object as PropType<Route[]>
  }
})

const emits = defineEmits(['route'])

const selectedRoute = ref<selectedRoute>()

const handleRouting = (route: string, title: string) => {
  selectedRoute.value = {
    title,
    route
  }
  emits('route', selectedRoute.value)
}

onMounted(() => {
  selectedRoute.value = { title: props.navSection[0].title, route: props.navSection[0].navList[2] }
})
</script>

<template>
  <div v-for="section in navSection">
    <p>{{ section.title }}</p>
    <ul>
      <li
        v-for="route in section.navList"
        :key="route"
        @click="handleRouting(route, section.title)"
        :class="route === selectedRoute?.route ? 'selected-route' : ''"
      >
        {{ route }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
p {
  font-weight: bold;
  font-size: 0.9em;
  margin-top: 2em;
}

li {
  list-style-type: none;
  padding: 0.3em 0 0.3em 1em;
  margin: 0.75em 0;
  cursor: pointer;
  font-size: 0.9em;
}

li:hover,
.selected-route {
  color: #00b272;
  background-color: #00b27210;
  border-radius: 0.5em;
}
</style>
