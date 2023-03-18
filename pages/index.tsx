/**
 * @module pages/index
 *
 *
 * @author montier.elliott@gmail.com
 */
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import type { iResults } from "../types/results.d";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";

import { useFetchResults } from "../hooks/useFetchResults";

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
const Home: NextPage<Props> = (): JSX.Element => {
  const router = useRouter();
  const [results, fetchResults] = useFetchResults();

  useEffect(() => {
    fetchResults(router.query.genre as string);
  }, [router.query.genre, fetchResults]);

  return (
    <div>
      <Head>
        <title>Hulu Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      {results && <Results results={results} />}
    </div>
  );
};

/** exporting */
export default Home;
