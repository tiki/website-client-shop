<script setup lang="ts">
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
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
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
</style>
