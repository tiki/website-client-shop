<script setup lang="ts">
import MenuIcon from '../Icons/MenuIcon.vue'
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

defineEmits(['toggle'])
</script>

<template>
  <div class="container">
    <div class="title-button-container">
      <h1>{{ title }}</h1>
      <button class="menu-button" @click="$emit('toggle')">
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
}

h1 {
  color: var(--primary-text-color);
  font-weight: 600;
  text-transform: capitalize;
}

h2 {
  color: var(--secondary-text-color);
  font-size: 1em;
  font-weight: 300;
  margin-top: 0.5em;
  line-height: 1.3em;
}

hr {
  margin-top: 1.5em;
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
