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
  font-weight: 700;
  font-size: 0.6875em;
  margin-top: 2rem;
  color: var(--primary-text-color);
  text-transform: uppercase;
}

li {
  list-style-type: none;
  padding: 0.21875rem 0.5625rem;
  display: flex;
  align-items: center;
  margin: 0.75em 0;
  cursor: pointer;
  font-size: 0.6875em;
  font-weight: 400;
  color: var(--primary-text-color);
}

li:hover,
.selected-route {
  color: var(--accent-color);
  background-color: color-mix(in srgb, currentColor 10%, transparent);
  border-radius: 0.1875em;
}
</style>
