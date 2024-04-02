<script setup lang="ts"></script>

<template>
  <input type="text" placeholder="Jump to" />
</template>

<style scoped>
input {
  padding: 0.5em 0.5em;
  width: 50%;
  border-radius: 0.5em;
  border: 0.15em solid rgba(0, 0, 0, 0.7);
  background: url('src/assets/searchBarSuffix.svg') no-repeat scroll 150px 7px;
}

input::placeholder {
  color: black;
}
</style>
