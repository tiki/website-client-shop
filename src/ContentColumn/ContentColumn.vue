<script setup lang="ts">
import ContentHeader from './ContentHeader.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
})

const emit = defineEmits(['toggle'])

</script>

<template>
  <div class="content-column-container">
    <content-header
      :title="title"
      :subtitle="subtitle"
      @toggle="$emit('toggle')"
    />
    <div class="slot-container">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.content-column-container {
  border-right: 1px solid #00000010;
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 3rem 1.6875rem;
  align-items: flex-start;
  align-self: stretch;
}

.slot-container {
  margin-top: 1.5rem;
  width: 100%;
}
</style>
