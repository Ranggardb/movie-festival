<template>
  <div>
    <Sidebar />

    <main class="p-4 sm:ml-64">
      <div
        class="p-4 border-2 border-gray-200 min-h-screen border-dashed rounded-lg dark:border-gray-700"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';
</script>
