<script setup lang="ts">
import { type PropType, computed } from 'vue'
import { ButtonState } from './ButtonState'
const props = defineProps({
  buttonText: {
    required: true,
    type: String
  },
  state: {
    required: true,
    type: Object as PropType<ButtonState>
  }
})

const buttonStateClass = computed(() => {
  switch (props.state) {
    case 'outlined':
      return 'outlined-button'
    case 'filled':
      return 'filled-button'
  }
})
</script>

<template>
  <button :class="buttonStateClass" class="custom-button">
    {{ buttonText }}
  </button>
</template>

<style scoped>
.custom-button {
  cursor: pointer;
  padding: 1em 1em;
  border: 1px solid #00000020;
  border-radius: 0.65em;
  width: 40%;
  margin: 1em 0;
  text-transform: Uppercase;
}

.filled-button {
  color: var(--accent-color);
  background-color: color-mix(in srgb, currentColor 10%, transparent);
}

.outlined-button {
  color: var(--accent-color);
  background-color: transparent;
}
</style>
