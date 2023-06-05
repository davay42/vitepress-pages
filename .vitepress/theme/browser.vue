<script setup>
import { pages, routes } from './'
import { useRoute } from 'vitepress'
import { getPage, getParents, getSiblings, normalize } from '../../src/browser'

import PageCard from './PageCard.vue'

const route = useRoute()

const page = getPage(route.path, routes)
const parents = getParents(route.path, routes)
const siblings = getSiblings(route.path, routes)
</script>

<template >
  <section>
    <h2>Pages</h2>
    <div class="flex flex-wrap gap-2">
      <page-card v-for="page in pages" :key="page" :page="page[0]"></page-card>
    </div>
    <h2>Page</h2>
    <p>{{ page }}</p>
    <h3>Parents</h3>
    <p>{{ parents }}</p>
    <h3>Siblings</h3>
    <p>{{ siblings }}</p>
  </section>
</template>

<style scoped>
.list {
  display: flex;
  flex-flow: column;
}
</style>