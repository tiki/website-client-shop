<script setup lang="ts">
import { type PropType, ref, onMounted } from 'vue'
import { type MainRouter } from '@/router/types/MainRouter'
import { type Route } from '@/router/types/route'
import Router from '../router/router'

const props = defineProps({
  navSection: {
    required: true,
    type: Object as PropType<MainRouter[]>
  }
})

const emits = defineEmits(['route'])

const selectedRoute = ref<Route>(Router.getInitialRoute())

const handleRouting = (route: Route) => {
  selectedRoute.value = route
  emits('route', route)
}
</script>

<template>
  <div v-for="section in navSection">
    <p>{{ section.sectionName }}</p>
    <ul>
      <li
        v-for="route in section.navList"
        :key="route.route"
        @click="handleRouting(route)"
        :class="route.route === selectedRoute?.route ? 'selected-route' : ''"
      >
        {{ route.route }}
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

div,
ul {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

li {
  list-style-type: none;
  padding: 0.21875rem 0.5625rem;
  display: flex;
  align-items: center;
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
../router/types/route../router/types/selectedRoute
