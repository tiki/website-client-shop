<script setup lang="ts">
import MenuIcon from '../Icons/MenuIcon.vue'
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
})

const emit = defineEmits(['toggle'])

const width = ref<number>(window.outerWidth)
</script>

<template>
  <div class="container">
    <div class="title-button-container">
      <h1>{{ title }}</h1>
      <button class="menu-button" @click="$emit('toggle')" v-if="width < 1280">
        <menu-icon />
      </button>
    </div>
    <h2>
      {{ subtitle }}
    </h2>
    <hr />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

h1 {
  color: var(--primary-text-color);
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.6875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

h2 {
  color: var(--secondary-text-color);
  font-size: 0.89063rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

hr {
  margin-top: 1.5rem;
  border-top: 1px solid #00000010;
}

.title-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-button {
  border-radius: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary-text-color);
  background-color: transparent;
  border: 1px solid var(--secondary-text-color);
  border: none;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 4px 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
