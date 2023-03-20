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
