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
  min-width: 22.25rem;
}

@media (max-width: 1279px) {
  .table-column-container {
    height: auto;
    max-width: 22.25rem;
  }
}
</style>
