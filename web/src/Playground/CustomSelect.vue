<script setup lang="ts">
import { ref } from 'vue'

const options = ref<string[]>()

options.value = ['Github', 'Ocean', 'Lake', 'Something']

const optionSelected = ref<string>()
</script>

<template>
  <label for="cleanroom">Database</label>
  <select
    name="cleanroom"
    id="cleanroom"
    v-model="optionSelected"
    @change="$emit('changeCleanroom', optionSelected)"
    onchange="this.dataset.chosen = 'chosen'"
    class="text-tiki-gray/70"
  >
    <option value="undefined" disabled>Options</option>
    <option
      v-for="(option, index) in options"
      :value="option"
      :key="index"
    >
      {{ option }}
    </option>
  </select>
</template>

<style scoped>
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
#cleanroom[data-chosen='chosen'] {
  color: #505c59;
}
</style>
