<template>
  <button
    data-drawer-target="sidebar-multi-level-sidebar"
    data-drawer-toggle="sidebar-multi-level-sidebar"
    aria-controls="sidebar-multi-level-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <RouterLink class="flex items-center pl-2.5 mb-5" :to="'/'">
        <img
          class="h-8 w-8 -ml-3"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <span
          class="self-center text-slate-700 text-xl ml-3 font-semibold whitespace-nowrap dark:text-white"
          >Home</span
        >
      </RouterLink>
      <ul class="space-y-2 font-medium">
        <li v-for="item in adminMenu">
          <RouterLink
            :key="item.name"
            :to="item.href"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const adminMenu = [
  { name: 'Upload', href: '/admin/upload', current: true },
  { name: 'Update', href: '/admin/update', current: false },
  {
    name: 'Summary',
    href: '/admin/admin-summary',
    current: false,
  },
  { name: 'List Movie', href: '/', current: true },
  { name: 'Search Movie', href: '#', current: false },
  { name: 'Most Viewed Movies', href: '/popular', current: false },
];
</script>

<style lang="scss" scoped></style>
