<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import LegalComplianceContent from './LegalComplianceContent.vue'
import DataSourceAgreement from './DataSourceAgreement.vue'
import { onMounted, ref } from 'vue'
import { type LegalComplianceRsp } from './types/LegalComplianceRsp'

const content = ref<LegalComplianceRsp>()

onMounted(async () => {
  const headers = new Headers()
  headers.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbGllbnRfaWQiLCJhdWQiOiJteXRpa2kuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.C_xGCt8BsAUjfFm6dJ60VoMu1qyxu7LAzbe6bm0B7Rw'
  )
  const options = {
    method: 'GET',
    headers: headers
  }
  content.value = await (
    await fetch(`${import.meta.env.VITE_API_URL}/legal-compliances`, options)
  ).json()


  console.log(content.value)
})

const subtitle =
  'All data provided is licensed directly from the legal owner. Review and select the agreements that meet your due-diligence criteria to get started. '
</script>

<template>
  <div id="legal-compliance-screen" v-if="content">
    <content-column :title="'my account: legal compliance'" :subtitle="subtitle">
      <legal-compliance-content />
    </content-column>
    <third-column>
      <DataSourceAgreement :agreements="content"/>
    </third-column>
  </div>
</template>

<style scoped>
#legal-compliance-screen {
  display: flex;
}
</style>
