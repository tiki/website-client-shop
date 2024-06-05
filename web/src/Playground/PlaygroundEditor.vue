<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as monaco from 'monaco-editor'
import PlaygroundButtons from './PlaygroundButtons.vue'
import PlaygroundResults from './PlaygroundResults.vue'

let editorMonaco: monaco.editor.IStandaloneCodeEditor

onMounted(() => {
  monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs',
    inherit: true,
    rules: [],
    colors: {
      'editor.foreground': '#505C59',
      'editorLineNumber.foreground': '#505C59',
      'editorActiveLineNumber.foreground': '#505C59',
      'editor.lineHighlightBorder': '#FFFFFF'
    }
  })

  monaco.editor.setTheme('myCustomTheme')

  editorMonaco = monaco.editor.create(editor.value, {
    value: `SELECT * FROM TABLE`,
    language: '',
    automaticLayout: true,
    minimap: {
      enabled: false
    },
    fontFamily: 'SF Mono',
    fontSize: 12,
    fontWeight: '300',
    scrollbar: {
      horizontal: 'hidden',
      vertical: 'hidden',
      verticalScrollbarSize: 0
    }
  })
})

const editor = ref()

const emits = defineEmits(['update'])
</script>

<template>
  <div class="editor-container">
    <div
    class="editor"
    >
      <div id="editor" ref="editor" style="height: 15rem; width: 100%;"></div>
    </div>
    <playground-buttons />
    <playground-results />
  </div>
</template>

<style scoped>
.editor-container{
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.editor{
    border: 1px solid #00000030;
    border-radius: 0.35em;
    gap: 1em;
    padding: 1em;
}

</style>