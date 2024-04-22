<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['toggle'])

const closeDrawer = () => {
  if (props.isOpen && window.outerWidth < 1280) emit('toggle')
}
</script>

<template>
  <div class="table-column-container" @click="closeDrawer()">
    <slot />
  </div>
</template>

<style scoped>
.table-column-container {
  height: 100vh;
  width: 30%;
  margin-top: 1.5em;
  padding: 0 1.5em;
}

@media (max-width: 1279px) {
  .table-column-container {
    width: 100%;
    height: auto;
  }
}
</style>
