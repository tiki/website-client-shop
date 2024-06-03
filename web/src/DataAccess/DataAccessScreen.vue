<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import { useRoute } from 'vue-router'
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();

const route = useRoute()
const markdownContent = `# ${route.name}`

const title = `data access: ${route.name}`

const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia euismod eros id vehicula. Quisque elementum velit tincidunt nisi viverra aliquet. Donec vel mi eget dui aliquet sodales. Etiam pharetra, lacus in tempus porttitor, felis lorem dapibus neque, id imperdiet mauris tortor maximus nisl. Nullam rhoncus ut ex ornare tempus. Nunc auctor justo id tincidunt eleifend. Phasellus nulla justo, efficitur ut sapien sed, porttitor vehicula sem.`
</script>

<template>
  <content-column :title="title" :subtitle="subtitle">
    <div v-html="markdown.render(markdownContent)" />
  </content-column>
</template>

<style scoped></style>
