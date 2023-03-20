/**
 * @module hooks/useFetchResults
 *
 *
 * @author montier.elliott@gmail.com
 */
import { useCallback, useState } from "react";

import debounce from "lodash/debounce";
import type { DebouncedFunc } from "lodash";

import requests from "../utils/requests";
import type { iResults } from "../types/results";

/**
 * @IRequest
 *
 *
 * @interface
 * @typedef {IRequest}
 */
interface IRequest {
  url: string;
  [key: string]: any;
}

/**
 * Hook
 *
 *
 * @type
 */
type Hook = [iResults[], DebouncedFunc<(query: string) => Promise<void>>];

/**
 * Use Fetch Results
 *
 *
 * @function
 * @returns {Hook}
 */
export const useFetchResults = (): Hook => {
  const [results, setResults] = useState<iResults[]>([]);

  /**
   * Fetch Results
   *
   *
   * @function
   * @param {string} query
   * @returns {void}
   */
  const fetchResults = useCallback(
    debounce(async (query: string) => {
      const requestUrl = `https://api.themoviedb.org/3${
        (requests[query] as IRequest)?.url || requests.trending.url
      }`;
      const response = await fetch(requestUrl);
      if (response.ok) {
        const { results: fetchedResults } = await response.json();
        setResults(fetchedResults);
      }
    }, 500),
    []
  );

  return [results, fetchResults];
};
