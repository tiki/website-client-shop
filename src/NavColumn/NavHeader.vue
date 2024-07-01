<script setup lang="ts">
import { ref } from 'vue';
import LogoImg from './LogoImg.vue'
import InputText from 'primevue/inputtext';
const search = ref<string>()
</script>

<template>
  <div class="img-container">
    <logo-img />
  </div>
  <InputText type="text" v-model="search" class="input-text" size="small"/>
</template>

<style scoped>
.img-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-text{
  margin: 1.5em 0;
}
</style>