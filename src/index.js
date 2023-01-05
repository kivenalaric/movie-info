import ui from './ui';
import data from './data';
import api from './api';

ui.renderPage();
// ui.renderMovies();
api.getPopularMovies().then((movies) => {
  data.setMovies(movies.results);
  ui.renderMovies(data.getMovies());
});
