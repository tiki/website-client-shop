<script setup lang="ts">
import NavSection from './NavSection.vue'
import NavHeader from './NavHeader.vue'

const contentSection = [
  {
    title: 'MY ACCOUNT',
    navList: ['Organization', 'Billing and Usage', 'Access Keys', 'Legal Compliance']
  },
  {
    title: 'DATASETS',
    navList: ['Transactions', 'Receipts', 'Demographics']
  },
  {
    title: 'DATA ACCESS',
    navList: [
      'Playground',
      'AWS Athena',
      'Snowflake',
      'Apache Airflow',
      'Google BigQuery',
      'Apache Spark',
      'Databricks'
    ]
  }
]
</script>

<template>
  <div class="nav-column-container">
    <nav-header />
    <nav-section :nav-section="contentSection" @route="(route: string) => $emit('route', route)" />
  </div>
</template>

<style scoped>
.nav-column-container {
  height: 100vh;
  border-right: 1px solid #00000010;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-top: 2em;
  padding: 0 2em;
}
</style>
