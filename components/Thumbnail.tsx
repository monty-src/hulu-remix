/**
 * @module components/Thumbnail
 *
 *
 * @author montier.elliott@gmail.com
 */
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef, ForwardRefRenderFunction } from "react";

import type { iResults } from "../types/results.d";

/**
 * Props
 *
 *
 * @typedef {Object} Props
 * @property {iResults} results
 */
interface Props {
  result: iResults;
}

/**
 * Thumbnail component
 *
 *
 * @typedef {Object} Props
 * @property {Object} result
 * @returns {JSX.Element}
 */
const Thumbnail: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { result },
  ref
) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div
      ref={ref}
      className="
        p-2
        transition
        duration-200
        transform
        sm:hover:scale-105
        hover:z-50
        group
        cursor-pointer
      "
      key={result.id}
    >
      <Image
        alt="test"
        priority={true}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <p className="truncate max-w-mf">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p
          className="
          flex
          items-center
          opacity-0
          group-hover:opacity-100"
        >
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.first_air_date} •{" "}
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

/** exporting */
export default forwardRef(Thumbnail);
