<template>
  <AppNavigation />
  <main class="p-5 relative">
    <MovieLists :title="title" :path="apiRequests.fetchTrending" />
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { apiRequests } from '../services/requests';

import AppNavigation from '../components/AppNavigation.vue';
import MovieLists from '../components/MovieLists.vue';

const title = ref('trending');
</script>
