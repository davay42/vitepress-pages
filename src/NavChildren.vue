<script setup>
import { useChildren } from './browser';
import { data } from '../pages.data.js'
import NavCard from './NavCard.vue';
import { useRoute } from 'vitepress';

const props = defineProps({
  data: { type: Array, default: () => [] },
})

const children = useChildren(useRoute(), data)
</script>

<template>
  <nav v-if="children" aria-label="children">
    <NavCard :page="child" v-for="child in children" :key="child"></NavCard>
  </nav>
</template>