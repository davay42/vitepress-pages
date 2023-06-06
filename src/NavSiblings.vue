<script setup>
import { usePages } from './browser';
import { data } from '../pages.data.js'
import NavCard from './NavCard.vue';
import { useRoute } from 'vitepress';

const { parents, siblings } = usePages(useRoute(), data)
</script>

<template>
  <nav class="grid grid-cols-2">
    <template v-for="step in ['prev', 'next']" :key="step">
      <NavCard :page="siblings?.[step]" v-if="siblings?.[step]">
        <div class="i-la-arrow-left" v-if="step == 'prev'">PREV</div>
        <div class="i-la-arrow-right" v-else>NEXT</div>
      </NavCard>
      <NavCard :page="parents[parents.length - 2]" v-else-if="parents?.length > 1">
        <div class="i-la-arrow-up">UP</div>
      </NavCard>
    </template>
  </nav>
</template>