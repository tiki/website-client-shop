<script setup lang="ts">
import LogoImg from './LogoImg.vue'
import SearchBar from './SearchBar.vue'
import NavSection from './NavSection.vue'

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
    <logo-img />
    <search-bar />
    <nav-section :nav-section="contentSection" />
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
