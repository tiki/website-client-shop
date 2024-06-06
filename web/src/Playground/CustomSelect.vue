<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  options: {
    type: Array<String>,
    required: true
  }
})

defineEmits(['change'])

const optionSelected = ref<string>()
</script>

<template>
  <div>
    <label for="cleanroom">{{ name }}</label>
    <select
      name="cleanroom"
      id="cleanroom"
      v-model="optionSelected"
      @change="$emit('change', optionSelected)"
      class="text-tiki-gray/70"
    >
      <option value="undefined" disabled>Select the {{ name }}</option>
      <option v-for="(option, index) in options" :value="option" :key="index">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>
label {
  text-transform: capitalize;
  font-size: 0.85em;
}
select {
  width: 100%;
  color: var(--secondary-text-color);
  padding: 0.35em;
  border: 1px solid #00000030;
  border-radius: 0.35em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('@/assets/select-arrow.svg');
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.7em top 50%,
    0 0;
  background-size:
    0.65em auto,
    100%;
}
</style>
