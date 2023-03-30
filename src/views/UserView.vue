<template>
  <div>
    <AppNavigation />
  </div>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';

import AppNavigation from '../components/AppNavigation.vue';
</script>
