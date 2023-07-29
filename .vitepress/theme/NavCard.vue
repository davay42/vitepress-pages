<script setup>
import { cleanLink, webP } from '../../src/index';

const props = defineProps({
  page: { type: Object, default: () => ({}) }
})
</script>

<template>
  <a v-if="page" :href="cleanLink(page?.url || '')"
    :style="{ backgroundImage: `url(${webP(page?.frontmatter?.cover)})` }">
    <div>
      <slot></slot>
      <h3>{{ page?.frontmatter?.title }}</h3>
      <h4>{{ page?.frontmatter?.description }}</h4>
    </div>
  </a>
</template>