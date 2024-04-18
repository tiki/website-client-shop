<script setup lang="ts">
import ContentHeader from './ContentHeader.vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="content-column-container">
    <content-header :title="title" :subtitle="subtitle" />
    <div class="slot-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.content-column-container {
  height: 100vh;
  border-right: 1px solid #00000010;
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 5em;
  padding: 0 3em;
}

.slot-container {
  margin-top: 2em;
}
</style>
