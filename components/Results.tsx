/**
 * @module components/Results
 *
 *
 * @author montier.elliott@gmail.com
 * @description NextJS configuration
 */
import React from "react";
import FlipMove from "react-flip-move";
import Thumbnail from "./Thumbnail";

interface Result {
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

interface Props {
  results: Result[];
}

const Results: React.FC<Props> = ({ results }) => {
  return (
    <FlipMove
      className="
      px-5
      my-10
      sm:grid
      sm:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
      3xl:grid-cols-5"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
