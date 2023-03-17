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
 * @property {string} backdrop_path
 * @property {string} poster_path
 * @property {string} overview
 * @property {string} title
 * @property {string} original_name
 * @property {string} media_type
 * @property {string} release_date
 * @property {string} first_air_date
 * @property {number} vote_count
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
