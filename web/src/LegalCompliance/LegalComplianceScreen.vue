<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import LegalComplianceContent from './LegalComplianceContent.vue'
import DataSourceAgreement from './DataSourceAgreement.vue'

// defineProps({
//   isOpen: {
//     required: true,
//     type: Boolean
//   },
//   title: {
//     required: true,
//     type: String
//   },
//   subtitle: {
//     required: true,
//     type: String
//   }
// })

defineEmits(['toggle', 'close'])

const subtitle = 'All data provided is licensed directly from the legal owner. Review and select the agreements that meet your due-diligence criteria to get started. '
</script>

<template>
    <content-column :title="'my account: legal compliance'" :subtitle="subtitle" @toggle="$emit('toggle')">
      <legal-compliance-content />
    </content-column>
    <third-column @click="$emit('close')">
      <DataSourceAgreement />
    </third-column>
</template>
