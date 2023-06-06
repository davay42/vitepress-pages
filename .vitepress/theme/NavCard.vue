<script setup>
import { cleanLink } from '../../src/client';



const props = defineProps({
  page: { type: Object, default: () => ({}) }
})
</script>

<template>
  <a v-if="page" :href="cleanLink(page?.url || '')" :style="{ backgroundImage: `url(${page?.frontmatter?.cover})` }">
    <div>
      <slot></slot>
      <h3>{{ page?.frontmatter?.title }}</h3>
      <h4>{{ page?.frontmatter?.description }}</h4>
    </div>
  </a>
</template>