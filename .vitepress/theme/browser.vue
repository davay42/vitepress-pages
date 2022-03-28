<script setup>
import { pages, routes } from './'
import { useRoute } from 'vitepress'
import { getPage, trailSlash } from '../../src/browser'

const route = useRoute()

const { page, siblings, parents } = getPage(route.path, routes)
</script>

<template >
  <section>
    <h2>All routes</h2>
    <div class="list">
      <a :href="trailSlash(p.path)" v-for="p in routes" :key="p">{{ p }}</a>
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