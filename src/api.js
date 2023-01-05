const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '9e40927219b1f78b9193e6695e458e39';

function getPopularMovies() {
  return fetch(
    `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  )
    .then((res) => res.json())
    .then((res) => res.results);
}

function searchMovies(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`,
  ).then((res) => res.json())
    .then((res) => res.results);
}

export default { getPopularMovies, searchMovies };
