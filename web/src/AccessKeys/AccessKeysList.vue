<script setup lang="ts">
import { reactive, ref } from 'vue'

const labels = ['Key', 'Domain', 'Created', '']

const keys = reactive([
  {
    hashedKey: '******8f028',
    key: 'a8y901m8f028',
    domain: 'OAS Upload',
    created: '7 months ago',
    isHidden: true
  },
  {
    hashedKey: '******8f028',
    key: 'a8y901m8f028',
    domain: 'OAS Upload',
    created: '7 months ago',
    isHidden: true
  }
])

const isCreatingKey = ref<boolean>(false)

const toggleVisibility = (index: number) => {
  keys[index].isHidden = !keys[index].isHidden
}

const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value)
}

const newKey = ref<string>()

const addKey = () => {
  if (isCreatingKey && newKey.value) {
    // request api to create a key
    keys.push({
      hashedKey: '******8f028',
      key: 'a8y901m8f028',
      domain: newKey.value,
      created: '7 months ago',
      isHidden: true
    })

    newKey.value = undefined
  }
  isCreatingKey.value = !isCreatingKey.value
}
</script>

<template>
  <div class="list-header">
    <h2>Api Keys</h2>
    <div class="add-key-container">
      <input type="text" placeholder="Inform domain" v-if="isCreatingKey" v-model="newKey" />
      <button @click="addKey">
        {{ !isCreatingKey ? '+ Add Key' : 'OK' }}
      </button>
    </div>
  </div>
  <div class="grid">
    <span v-for="label in labels" :key="label" class="labels">
      {{ label }}
    </span>
    <template v-for="(keyItem, index) in keys" :key="index">
      <span>
        <div class="key-container">
          <p>{{ keyItem.isHidden ? keyItem.hashedKey : keyItem.key }}</p>
          <button @click="toggleVisibility(index)">
            <img src="../assets/visibility_on.svg" alt="" v-if="keyItem.isHidden" />
            <img src="../assets/visibility_off.svg" alt="" v-if="!keyItem.isHidden" />
          </button>
          <button @click="copyToClipboard(keyItem.key)">
            <img src="../assets/copy.svg" alt="" />
          </button>
        </div>
      </span>
      <span>{{ keyItem.domain }}</span>
      <span>{{ keyItem.created }}</span>
      <span class="options-button">
        <button>
          <img src="../assets/three_dots_icons.svg" alt="" />
        </button>
      </span>
    </template>
  </div>
</template>

<style scoped>
button {
  border: none;
  background: transparent;
  cursor: pointer;
}

.options-button{
  text-align: right;
}

.labels {
  text-transform: uppercase;
  font-weight: 500;
}
.key-container {
  display: flex;
  gap: 1em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.grid > span {
  padding: 8px 4px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
  align-items: center;
}

.list-header button {
  font-size: 1.2em;
  background: var(--accent-color);
  padding: 0.35em 0.5em;
  border: 1px solid var(--accent-color);
  border-radius: 0.25em;
  color: white;
}

.add-key-container {
  display: flex;
  gap: 1em;
}

.add-key-container input {
  border: 1px solid var(--secondary-text-color);
  border-radius: 0.25em;
  padding: 0.3em;
}
</style>
