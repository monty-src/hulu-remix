/**
 * @module pages/index
 *
 *
 * @author montier.elliott@gmail.com
 */
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import type { iResults } from "../types/results.d";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";

import requests from "../utils/requests";

/**
 * Home Props
 *
 *
 * @typedef {Object} Props
 * @property {iResults[]} results - Movie search results
 */
interface Props {
  results: iResults[];
}

/**
 * Home component
 *
 *
 * @returns {JSX.Element}
 */
const Home: NextPage<Props> = ({ results }): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Hulu Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </div>
  );
};

/**
 * Fetches Home component props on server-side
 *
 *
 * @function
 * @async
 * @param {Object} context - Request object
 * @returns {Promise<Props>} - Props containing search results
 */
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const genre = context.query.genre as string;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
};

/** exporting */
export default Home;
