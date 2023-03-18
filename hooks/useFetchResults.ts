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
import { iResults } from "../types/results";

/**
 * @interface IRequest
 *
 *
 */
interface IRequest {
  url: string;
  [key: string]: any;
}

/**
 * @type Hook
 *
 *
 */
type Hook = [iResults[], DebouncedFunc<(query: string) => Promise<void>>];

/**
 * @function useFetchResults
 *
 *
 * @returns {}
 */
export const useFetchResults = (): Hook => {
  const [results, setResults] = useState<iResults[]>([]);

  /**
   * @function fetchResults
   * @description
   *
   *
   * @param {string} query
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
