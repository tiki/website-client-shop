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
  <div class="content-column-container">
    <content-header
      :title="title"
      :subtitle="subtitle"
      @toggle="$emit('toggle')"
      :is-open="isOpen"
    />
    <div class="slot-container" @click="closeDrawer()">
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
}

@media (max-width: 1279px) {
  .content-column-container {
    width: 100%;
    height: auto;
  }
}
</style>
