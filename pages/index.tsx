/**
 * @module pages/index
 *
 *
 * @author montier.elliott@gmail.com
 * @description NextJS configuration
 */
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";

import requests from "../utils/requests";

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

/**
 * The Home component for the Hulu Remix app.
 *
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home: NextPage<Props> = ({ results }) => {
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const genre = context.query.genre;
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

export default Home;
