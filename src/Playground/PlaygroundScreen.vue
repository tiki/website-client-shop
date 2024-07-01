<script setup lang="ts">
import ContentColumn from '../ContentColumn/ContentColumn.vue'
import ThirdColumn from '../ThirdColumn/ThirdColumn.vue'
import PlaygroundEditor from './PlaygroundEditor.vue'
import TableSelection from './TableSelection.vue'

const title = 'data access: playground'

const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia euismod eros id vehicula. Quisque elementum velit tincidunt nisi viverra aliquet. Donec vel mi eget dui aliquet sodales. Etiam pharetra, lacus in tempus porttitor, felis lorem dapibus neque, id imperdiet mauris tortor maximus nisl. Nullam rhoncus ut ex ornare tempus. Nunc auctor justo id tincidunt eleifend. Phasellus nulla justo, efficitur ut sapien sed, porttitor vehicula sem.`
</script>

<template>
  <content-column :title="title" :subtitle="subtitle">
    <playground-editor />
  </content-column>
  <third-column>
    <table-selection />
  </third-column>
</template>

<style scoped></style>
