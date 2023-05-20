import movieService from '../../APIServices/movieService';
import { Request, Response } from 'express';

const {
  getAllTrending,
  getMovieGenreList,
  getTVGenreList,
  getTrendingTvList,
  getTrendingMovieList,
  getNewMovieList,
  getNewTVList,
} = movieService;

const movieController = {
  getAllTrending: async (req: Request, res: Response) => {
    try {
      const allTrending = await getAllTrending();
      res.status(200).json(allTrending);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getMovieTrending: async (req: Request, res: Response) => {
    try {
      const movieTrending = await getTrendingMovieList();
      res.status(200).json(movieTrending);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getTVTrending: async (req: Request, res: Response) => {
    try {
      const TVTrending = await getTrendingTvList();
      res.status(200).json(TVTrending);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getMovieNew:async (req: Request, res: Response) => {
    try {
      const movieNew = await getNewMovieList();
      res.status(200).json(movieNew);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getTVNew:async (req: Request, res: Response) => {
    try {
      const TVNew = await getNewTVList();
      res.status(200).json(TVNew);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getMovieGenres: async (req: Request, res: Response) => {
    try {
      const allMovieGenres = await getMovieGenreList();
      res.status(200).json(allMovieGenres);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
  getTvGenres: async (req: Request, res: Response) => {
    try {
      const allTvGenres = await getTVGenreList();
      res.status(200).json(allTvGenres);
    } catch (e) {
      res.status(500).json({ message: 'server error' });
    }
  },
};

export default movieController;
