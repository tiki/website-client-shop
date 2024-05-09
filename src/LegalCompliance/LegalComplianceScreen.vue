<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import LegalComplianceContent from './LegalComplianceContent.vue'
import DataSourceAgreement from './DataSourceAgreement.vue'

defineProps({
  isOpen: {
    required: true,
    type: Boolean
  },
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  }
})
</script>

<template>
  <content-column :is-open="isOpen" :title="title" :subtitle="subtitle" @toggle="$emit('toggle')">
    <legal-compliance-content />
  </content-column>
  <third-column :is-open="isOpen" @click="$emit('close')">
    <DataSourceAgreement />
  </third-column>
</template>
