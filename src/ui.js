import './styles/styles.css';

const appContainer = document.getElementById('app');
let mainContainer;

function createSearchBar() {
  const searchBar = document.createElement('form');
  searchBar.classList.add('search');
  searchBar.innerHTML = "<input class='searchi' type='search' name='searchTerm'><button>Search</button>";
  return searchBar;
}

function createHeader() {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class="title">The Movie DB Trial</h1>';
  header.appendChild(createSearchBar());
  return header;
}

function createMovie(movie) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `<h2>${movie.title}</h2><p>${movie.overview}</p>`;
  const img = `https://image.imdb.org/t/p/original/${movie.backdrop_path}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function renderPage() {
  appContainer.innerHTML = '';
  appContainer.appendChild(createHeader());
  mainContainer = createMain();
  appContainer.appendChild(mainContainer);
}

function renderMovies(movies = [1, 2, 3, 4, 5]) {
  mainContainer.innerHTML = '';
  movies.forEach((movie) => {
    mainContainer.appendChild(createMovie(movie));
  });
}

export default {
  renderPage,
  renderMovies,
};
