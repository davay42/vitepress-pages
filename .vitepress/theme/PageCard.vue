<script setup>
import { computed } from 'vue';
const props = defineProps({
  page: {
    type: Object,
    default: () => ({})
  },
})

const hashStr = str => str.split('').reduce((prev, curr) => Math.imul(31, prev) + curr.charCodeAt(0) | 0, 0);

const border = computed(() => {
  return '1px'
  const hash = hashStr(props.page?.url)
  const hue = hash % 360
  const saturation = 20 + Math.random() * 20;
  const lightness = 22 + Math.random() * 8;
  return `solid 1px hsl(${hue}deg, ${saturation}%, ${lightness}%)`
})
</script>

<template>
  <a class="overflow-hidden pt-42 flex flex-col bg-dark-700 shadow-lg hover-bg-dark-200 hover-shadow-xl transition flex-1 opacity-50 hover-opacity-100 max-w-120 min-w-50"
    :href="page.path" :style="{ border }" style="padding-bottom:0;padding-left:0; padding-right:0; flex: 1 1 auto">
    <div class="bg-dark-100 p-2 bg-opacity-50 backdrop-blur-sm hover-backdrop-blur-lg transition">
      <div style="font-size:12px; line-height:16px">{{ page }}</div>
      <!-- <div class="text-xs">{{ page.frontmatter.date }}</div>
      <div class="text-2xl font-bold">{{ page.frontmatter.title }}</div>
      <div class="text-md">{{ page.frontmatter.description }}</div> -->
    </div>
  </a>
</template>