<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import AccessKeysList from './AccessKeysList.vue'

const title = `My Account: Access Keys`

const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia euismod eros id vehicula. Quisque elementum velit tincidunt nisi viverra aliquet. Donec vel mi eget dui aliquet sodales. Etiam pharetra, lacus in tempus porttitor, felis lorem dapibus neque, id imperdiet mauris tortor maximus nisl. Nullam rhoncus ut ex ornare tempus. Nunc auctor justo id tincidunt eleifend. Phasellus nulla justo, efficitur ut sapien sed, porttitor vehicula sem.`
</script>

<template>
  <content-column :title="title" :subtitle="subtitle">
    <access-keys-list />
  </content-column>
</template>

<style scoped></style>
