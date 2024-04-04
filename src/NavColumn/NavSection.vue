<script setup lang="ts">
import { type PropType, ref } from 'vue'

interface navSection {
  title: string
  navList: string[]
}

defineProps({
  navSection: {
    required: true,
    type: Object as PropType<navSection[]>
  }
})

const emits = defineEmits(['route'])

const selectedRoute = ref<string>()

const handleRouting = (route: string) => {
  selectedRoute.value = route
  emits('route', route)
}
</script>

<template>
  <div v-for="section in navSection">
    <p>{{ section.title }}</p>
    <ul>
      <li
        v-for="route in section.navList"
        :key="route"
        @click="handleRouting(route)"
        :class="route === selectedRoute ? 'selected-route' : ''"
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
