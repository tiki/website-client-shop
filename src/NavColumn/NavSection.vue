<script setup lang="ts">
import { useRouter } from 'vue-router'
import camelize from '@/utils/camelize'
import { type MainRouter } from '@/router/types/MainRouter'
import Router from '../router/router'
import { onBeforeMount, ref } from 'vue'
import Menu from 'primevue/menu'

const navList = ref<MainRouter[]>()

const items = ref()

onBeforeMount(async () => {
  navList.value = await Router.getRoutes()
  items.value = navList.value.map((item) => ({
    label: item.sectionName.charAt(0).toUpperCase() + item.sectionName.slice(1), // Capitalizing the first letter
    items: item.navList.map((navItem) => ({
      label: navItem,
      command: () => {
        handleRouting(navItem,item.sectionName)
      }
    })),
  }
  ))
})

const router = useRouter()

const selectedRoute = ref<string>(Router.getInitialRoute())

const handleRouting = (route: string, section: string) => {
  selectedRoute.value = route
  const nextRoute = `/${camelize(section)}/${camelize(route)}`
  router.push(nextRoute)
}
</script>

<template>
  <div class="card flex justify-center">
    <Menu :model="items" :command="(evt:any)=>console.log('test', evt)"/>
  </div>
</template>

<style scoped>
.nav-menu {
  display: flex;
  gap: 5em;
}

.nav-span {
  cursor: pointer;
}
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
