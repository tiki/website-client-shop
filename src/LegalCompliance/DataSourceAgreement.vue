<script setup lang="ts">
import type { PropType } from 'vue'
import { type LegalComplianceRsp } from './types/LegalComplianceRsp'


defineProps({
  agreements: {
    type: Object as PropType<LegalComplianceRsp>,
    required: true
  }
})

</script>

<template>
  <div class="container">
    <h1>DATA SOURCE AGREEMENTS</h1>
    <div
      class="agreement-checkbox-container"
      v-for="dataset in agreements.data"
      :key="dataset.id"
    >
      <div class="checkbox-container">
        <input type="checkbox" :id="`${dataset.attributes.name}`" @click="console.log('test')" />
        <label :for="`${dataset.attributes.name}`"></label>
      </div>
      <div class="odd-div">{{ Number(dataset.attributes.records).toLocaleString() }} RECORDS</div>
      <span
        ><a :href="dataset.attributes.link" target="_blank">
          {{ dataset.attributes.name }}
        </a></span
      >
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 1.125rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  flex: 1 0 0;
  align-self: stretch;
}

.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 0.375rem 0.625rem;
  gap: 0.625rem;
  align-self: stretch;
}

h1 {
  color: var(--secondary-text-color);
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
}

input[type='checkbox'] + label {
  display: block;
  height: 1.2em;
  width: 0.6875rem;
  height: 0.6875rem;
  border: 1px solid var(--accent-color);
  border-radius: 0.1em;
  cursor: pointer;
}
input[type='checkbox']:checked + label:after {
  display: flex;
  align-items: center;
  justify-content: center;
  content: '\2713';
  font-size: 0.65em;
  cursor: pointer;
  color: #00000090;
}

input[type='checkbox'] {
  display: none;
}

.odd-div {
  display: block;
  border-left: 1px solid #00000020;
  border-right: 1px solid #00000020;
  padding: 0.375rem;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.agreement-checkbox-container {
  display: flex;
  border: 1px solid #00000020;
  border-radius: 0.25rem;
  width: 100%;
}

.agreement-checkbox-container span {
  padding-left: 0.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  text-transform: uppercase;
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
  outline: 0;
  cursor: pointer;
}
</style>
