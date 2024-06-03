<script setup lang="ts">
import type { routeLocationKey } from 'vue-router'
import type { LogarithmicScale } from 'chart.js'
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = `data access: ${route.name}`

const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia euismod eros id vehicula. Quisque elementum velit tincidunt nisi viverra aliquet. Donec vel mi eget dui aliquet sodales. Etiam pharetra, lacus in tempus porttitor, felis lorem dapibus neque, id imperdiet mauris tortor maximus nisl. Nullam rhoncus ut ex ornare tempus. Nunc auctor justo id tincidunt eleifend. Phasellus nulla justo, efficitur ut sapien sed, porttitor vehicula sem.`
</script>

<template>
  <content-column :title="title" :subtitle="subtitle">
    <h1>{{ $route.name }}</h1>
  </content-column>
</template>

<style scoped></style>
