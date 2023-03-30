<template>
  <form class="w-full">
    <div class="flex">
      <Menu as="div" class="relative inline-block text-left items-center">
        <MenuButton
          class="inline-flex items-center min-w-max py-2.5 px-4 justify-center rounded-l-md bg-black border-2 border-gray-300 bg-opacity-20 text-sm font-medium ring-0 outline-none text-white hover:bg-gray-700 focus:outline-none"
        >
          Search By
          <ChevronDownIcon
            class="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </MenuButton>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none"
          >
            <MenuItem
              v-for="item in links"
              :key="item.name"
              v-slot="{ active }"
            >
              <button
                :href="item.href"
                :class="[
                  active ? 'bg-violet-500 text-white' : 'text-gray-900',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
              >
                {{ item.label }}
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
      <div class="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          class="flex p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg focus:rounded-l-sm border-l-gray-50 border-l-1 border-2 border-gray-300 focus:ring-gray-300 focus:border-gray-300"
          placeholder="Search Title, Description, Artists and Genres..."
          required
        />
        <button
          type="submit"
          class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-gray-900 rounded-r-lg border-2 border-gray-300 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
const links = [
  { href: '/account-settings', label: 'Title' },
  { href: '/support', label: 'Description' },
  { href: '/license', label: 'Artists' },
  { href: '/sign-out', label: 'Genres' },
];
</script>
