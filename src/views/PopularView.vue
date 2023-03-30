<template>
  <AppNavigation />
  <main class="p-5 relative">
    <MovieLists :title="title" :path="apiRequests.fetchTopRated" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { apiRequests } from '../services/requests';

import AppNavigation from '../components/AppNavigation.vue';
import MovieLists from '../components/MovieLists.vue';

const title = ref('most viewed');
</script>

<style lang="scss" scoped></style>
