<template>
  <div class="md:grid md:grid-cols-2">
    <SummaryMovie />
    <SummaryGenre />
  </div>
</template>

<script setup>
import SummaryMovie from './SummaryMovie.vue';
import SummaryGenre from './SummaryGenre.vue';
</script>
