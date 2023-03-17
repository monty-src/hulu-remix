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
 * Home Component
 *
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
const Home: NextPage<Props> = ({ results }: Props): JSX.Element => {
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
 * @param {Object} context
 * @returns {Promise<Props>}
 */
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const genre = context.query.genre as string;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
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
