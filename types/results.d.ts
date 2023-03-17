/**
 * @module types/results.d
 *
 *
 * @author montier.elliott@gmail.com
 */

/**
 * Movie results
 * 
 * 
 * @interface
 * @typedef {Object} iResults
 * @property {number} id
 * @property {string} overview
 * @property {number} vote_count
 * @property {string} poster_path
 * @property {string} backdrop_path
 * @property {string} title
 * @property {string} media_type
 * @property {string} release_date
 * @property {string} original_name
 * @property {string} first_air_date
 */
export interface iResults {
  id: number;
  overview: string;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;

  title?: string;
  media_type?: string;
  release_date?: string;
  original_name?: string;
  first_air_date?: string;
  
}
