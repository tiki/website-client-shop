<script setup lang="ts"></script>

<template>
  <div>
    <h1>DATA SOURCE AGREEMENTS</h1>
    <div class="agreement-checkbox-container">
      <input type="checkbox" id="cb1" />
      <label for="cb1"></label>
      <span>3,103,398 RECORDS</span>
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

input[id='cb1'] + label {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 1px solid var(--accent-color);
  border-radius: 0.25em;
  cursor: pointer;
}
input[id='cb1']:checked + label:after {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  content: '\2713';
  font-size: 0.85em;
}
input[id='cb1'] {
  display: none;
}

.agreement-checkbox-container {
  display: flex;
  align-items: center;
  gap: 2em;
  border: 1px solid #00000020;
  padding: 0.5em 1em;
  border-radius: 0.5em;
}
</style>
