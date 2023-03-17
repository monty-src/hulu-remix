/**
 * @module components/Results
 *
 *
 * @author montier.elliott@gmail.com
 */
import React from "react";
import FlipMove from "react-flip-move";

import Thumbnail from "./Thumbnail";
import type { iResults } from "../types/results.d";

/**
 * Props
 *
 *
 * @typedef {Object} Props
 * @property {iResults[]} results
 */
interface Props {
  results: iResults[];
}

/**
 * Results component
 *
 *
 * @returns {JSX.Element}
 */
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

/** exporting */
export default Results;
