/**
 * @typedef {Object} Result
 * @property {number} id - The ID of the result.
 * @property {string} backdrop_path - The path of the backdrop image.
 * @property {string} poster_path - The path of the poster image.
 * @property {string} overview - The overview of the result.
 * @property {string=} title - The title of the result.
 * @property {string=} original_name - The original name of the result.
 * @property {string=} media_type - The media type of the result.
 * @property {string=} release_date - The release date of the result.
 * @property {string=} first_air_date - The first air date of the result.
 * @property {number} vote_count - The vote count of the result.
 *
 * @typedef {Object} Props
 * @property {Result[]} results - An array of results to display
 */
export interface iResults {
  id: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title?: string;
  original_name?: string;
  media_type?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count: number;
}
