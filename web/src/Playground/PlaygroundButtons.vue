<script setup lang="ts"></script>

<template>
    <div class="button-row">
        <button class="run-button">
            Run Query
        </button>
        <button class="clear-button">
            Clear
        </button>
    </div>
</template>

<style scoped>

.button-row{
    display: flex;
    gap: 1em;
}
.button-row button {
  font-size: 1.2em;
  padding: 0.35em 1em;
  border-radius: 0.25em;
  cursor: pointer;
  font-size: 1em;
}

.run-button{
  border: 1px solid var(--accent-color);
  background-color: var(--accent-color);
  color: white;
}

.clear-button{
    border: 1px solid black;
    background: transparent;
}
</style>e