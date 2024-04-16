<script setup lang="ts">
const datasets = [1, 2, 3]
</script>

<template>
  <div>
    <h1>DATA SOURCE AGREEMENTS</h1>
    <div class="agreement-checkbox-container" v-for="dataset in datasets" :key="dataset">
      <input type="checkbox" :id="`${dataset}`" @click="console.log('test')" />
      <label :for="`${dataset}`"></label>
      <div class="odd-div">3,103,398 RECORDS</div>
      <span>APP 1</span>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1em;
  margin-bottom: 1em;
  color: var(--secondary-text-color);
  font-weight: 600;
}

input[type='checkbox'] + label {
  display: block;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid var(--accent-color);
  border-radius: 0.25em;
  cursor: pointer;
}
input[type='checkbox']:checked + label:after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: '\2713';
  font-size: 0.85em;
}

input[type='checkbox'] {
  display: none;
}

.odd-div {
  display: block;
  border-left: 1px solid #00000020;
  border-right: 1px solid #00000020;
  padding: 0.5em 1em;
  width: 35%;
}
.agreement-checkbox-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #00000020;
  border-radius: 0.5em;
  margin-bottom: 1em;
}

.agreement-checkbox-container span {
  text-decoration: underline;
  width: 50%;
}
</style>
