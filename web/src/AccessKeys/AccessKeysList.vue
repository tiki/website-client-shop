<script setup lang="ts">


const key = '******8f028'
</script>

<template>
  <!-- <div class="list-container">
        <div class="list-header">
            <p>Key</p>
            <p>Label</p>
            <p>Created</p>
            <p>Last Used</p>
            <p ></p>
        </div>
        <div class="list-body">
            <p>Key</p>
            <p>OAS Upload</p>
            <p>7 months ago</p>
            <p>6 months ago</p>
            <p></p>
        </div>
    </div> -->
  <table class="list-container">
    <thead>
      <tr class="list-header">
        <th>Key</th>
        <th>Label</th>
        <th>Created</th>
        <th>Last Used</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr class="list-body">
        <td>{{ key}}</td>
        <td>OAS Utdload</td>
        <td>7 months ago</td>
        <td>6 months ago</td>
        <td>
            <button>
                <img src="../assets/three_dots_icons.svg" alt="">
            </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>

.list-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1em;
}


button{
    border: none;
    background: transparent;
    cursor: pointer;
}

tbody {
  display: flex;
  flex-direction: column;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 1em 0;
  width: 100%;
  border-bottom: 1px solid #00000010;
  font-weight: 500;
}

.list-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em 0 0;
}
</style>
