import { Router } from 'express';
import movieController from '../controller/api/movieController';
export const movieRouter = Router();
const {
  getAllTrending,
  getTvGenres,
  getMovieGenres,
  getMovieTrending,
  getTVTrending, 
  getMovieNew, 
  getTVNew
} = movieController;
movieRouter.get('/trending', getAllTrending);
movieRouter.get('/movie_genres', getMovieGenres);
movieRouter.get('/tv_genres', getTvGenres);
movieRouter.get('/trendingTV', getTVTrending);
movieRouter.get('/trendingMovie', getMovieTrending);
movieRouter.get('/newMovie', getMovieNew);
movieRouter.get('newTV', getTVNew);

