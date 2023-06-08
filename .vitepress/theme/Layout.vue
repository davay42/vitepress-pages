<script setup>
import DefaultTheme from 'vitepress/theme'
import { usePages, cleanLink } from '../../src/index';
import { useRoute, useData } from 'vitepress'
import { data } from '../../pages.data.js'
import NavCard from './NavCard.vue';

const { Layout } = DefaultTheme

const { frontmatter } = useData()

const { children, parents, siblings } = usePages(useRoute(), data)

</script>

<template>
  <Layout>

    <template #nav-bar-title-after>
      <nav id="parents" class="grid">
        <a v-for="parent in parents.slice(0, -1)" :key="parent.url" class="parent" :href="cleanLink(parent.url)">
          {{ parent.frontmatter?.title }}
        </a>
      </nav>

    </template>

    <template #doc-before>
      <h1>{{ frontmatter.title }}</h1>
    </template>

    <template #doc-after>
      <nav id="children" class="grid">
        <NavCard v-for="child in children" :key="child.url" :page="child" class="child">
        </NavCard>
      </nav>
      <nav id="siblings" class="grid">
        <template v-for="sb in ['prev', 'next']" :key="sb">
          <NavCard v-if="siblings?.[sb]" :page="siblings?.[sb]" class="sibling">
          </NavCard>
        </template>
      </nav>
    </template>
  </Layout>
</template>

<style>
nav {
  display: flex;
  gap: 1em;
  margin: 1em 0;
}

nav a {
  padding: 2em;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
}

nav a div {
  padding: 1em;
  background-color: hsla(0deg, 0%, 100%, 0.7);
}

h1 {
  font-size: 3em;
  line-height: 1em;
}
</style>