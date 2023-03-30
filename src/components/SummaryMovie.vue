<template>
  <div>
    <h2 class="text-2xl font-medium mb-5">Movie Summary</h2>
    <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      <li v-for="movie in movies" :key="movie.name" class="pb-3 sm:pb-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              :src="movie.imageSrc"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p
              class="text-sm font-medium text-gray-900 truncate dark:text-white"
            >
              {{ movie.name }}
            </p>
          </div>
          <div
            class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
          >
            <EyeIcon class="h-4 w-4 mr-3" />
            {{ movie.views }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { EyeIcon } from '@heroicons/vue/24/outline';

const movies = [
  {
    id: 1,
    name: 'Last Stand',
    href: '#',
    imageSrc:
      'https://marketplace.canva.com/EAFIeeg499w/1/0/1131w/canva-white-and-orange-simple-last-stand-movie-poster-9PrLei1H4r0.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    views: '35',
  },
];
</script>
