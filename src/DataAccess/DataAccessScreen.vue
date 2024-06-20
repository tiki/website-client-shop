<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { type DataAccessRsp, type Attributes, type DataAccess } from './types/DataAccessRsp'

const markdown = new MarkdownIt()

const route = useRoute()

const title = `data access: ${String(route.name)}`

const content = ref<DataAccess>()

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
  const response: DataAccessRsp = await (
    await fetch(`${import.meta.env.VITE_API_URL}/data-accesses`, options)
  ).json()

  content.value = response.data.find((el: DataAccess) => el.attributes.name === route.name)
})
</script>

<template>
  <content-column :title="title" :subtitle="content.attributes.description" v-if="content">
    <div v-html="markdown.render(content.attributes.content)" />
  </content-column>
</template>

<style scoped></style>
