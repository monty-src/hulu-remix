/**
 * @module types/movies.d
 *
 *
 * @author montier.elliott@gmail.com
 */

/**
 * Movie information
 *
 *
 * @interface
 * @typedef {Object} iMovie
 */
export interface iMovie {
  url: string;
  title: string;
}

/**
 * Movie categories
 *
 * 
 * @interface
 * @typedef {Object.<string, Movie>} Movies
 */
export interface iMovies {
  [key: string]: iMovie;
}
