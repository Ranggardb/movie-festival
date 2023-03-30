<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Movie Lists
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="movie in movies" :key="movie.id" class="group relative">
          <div
            class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="movie.imageSrc"
              :alt="movie.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-medium text-gray-700">
              <a :href="movie.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ movie.name }}
              </a>
            </h3>
            <div class="mt-4 flex justify-between">
              <p class="flex items-center mt-1 text-sm gap-x-1 text-indigo-700">
                <HandThumbUpIcon class="h-5 w-5" />
                {{ movie.voted }}
              </p>
              <p
                class="flex items-center text-sm gap-x-1 font-medium text-gray-700"
              >
                {{ movie.views }} <EyeIcon class="h-5 w-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EyeIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline';

const movies = [
  {
    id: 1,
    name: 'Last Stand asd asd asd asd asd ',
    href: '#',
    imageSrc:
      'https://marketplace.canva.com/EAFIeeg499w/1/0/1131w/canva-white-and-orange-simple-last-stand-movie-poster-9PrLei1H4r0.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    views: '35',
    voted: '3',
  },
];
</script>
