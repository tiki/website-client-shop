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
    type: String as PropType<ButtonState>
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
  display: flex;
  width: 10.3125rem;
  padding: 0.625rem 1.25rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
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
