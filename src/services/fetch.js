// fetch.js
import axios from 'axios';
import { ref } from 'vue';

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err));

  return { data, error };
}

export async function getUser(url) {
  let data;
  let error;

  try {
    const response = await axios.get(url);
    data = response.data.results;
  } catch (error) {
    error = error;
  }

  return { data, error };
}

export function getTopRated(url) {
  const data = ref(null);
  const error = ref(null);

  const request = axios.get(url);
  data.value = request.data;

  return { data, error };
}
