<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 capitalize">
        {{ title }}
      </h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div v-for="movie in movies" :key="movie.id" class="group relative">
          <div
            class="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="imageUrl + movie.poster_path"
              :alt="movie.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-medium text-gray-700">
              <a :href="movie.href">
                <span aria-hidden="true" class="absolute inset-0" />
                {{ movie.title }}
              </a>
            </h3>
            <div class="mt-4 flex justify-between">
              <p class="flex items-center mt-1 text-sm gap-x-1 text-indigo-700">
                <HandThumbUpIcon class="h-5 w-5" />
                {{ movie.vote_count }}
              </p>
              <p
                class="flex items-center text-sm gap-x-1 font-medium text-gray-700"
              >
                {{ movie.popularity }} <EyeIcon class="h-5 w-5" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

import { EyeIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline';

const baseUrl = import.meta.env.VITE_BASE_MOVIE;
const imageUrl = import.meta.env.VITE_BASE_MOVIE_IMAGE;
const path = props.path;
const fetchUrl = baseUrl + path;

const movies = ref(null);

axios
  .get(fetchUrl)
  .then(function (response) {
    movies.value = response.data.results;
    console.log(response.data.results);
  })
  .catch(function (error) {
    console.log(error);
  });

const props = defineProps({
  title: String,
  path: String,
});

console.log(props.title);
</script>
