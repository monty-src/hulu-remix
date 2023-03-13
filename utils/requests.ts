/**
 * @module utils/requests
 *
 *
 * @author montier.elliott@gmail.com
 */
const API_KEY = process.env.API_KEY;

/**
 * An object containing a movie title and its corresponding URL.
 * 
 * 
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie.
 * @property {string} url - The URL to fetch data for the movie.
 */
interface Movie {
  title: string;
  url: string;
}

/**
 * An object that maps string keys to `Movie` values.
 * 
 * @typedef {Object.<string, Movie>} Movies
 */
interface Movies {
  [key: string]: Movie;
}

/**
 * Movie categories.
 * 
 * 
 * @type {Movies}
 */
const movies: Movies = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  topRated: {
    title: 'Top Rated',
    url: `/discover/movie?api_key=${API_KEY}&language=en-US`
  },
  actionsMovies: {
    title: 'Action',
    url: `/trending/all/week?api_key=${API_KEY}&with_genres=28`
  },
  comedyMovies: {
    title: 'Comedy ',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  horrorMovies: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  romanceMovies: {
    title: 'Romance',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  mystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  sciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
  },
  western: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  animation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  tVMovie: {
    title: 'TV Movies',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  },
}

export default movies;