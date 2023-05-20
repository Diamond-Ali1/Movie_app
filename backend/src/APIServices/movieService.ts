import getMovieData from '../utils/getMovieDAta';

//making request from movie API
const movieService = {
  getAllTrending: () => getMovieData('/trending/all/week'),
  getTVGenreList: () => getMovieData('/genre/tv/list'),
  getMovieGenreList: () => getMovieData('/genre/movie/list'),
  getNewMovieList: () => getMovieData('/movie/on_the_air'), 
  getNewTVList: () => getMovieData('/tv/on_the_air'), 
  getTrendingMovieList: () => getMovieData('/trending/movie/week'),
  getTrendingTvList: () => getMovieData('/trending/tv/week')
};

export default movieService;
