/**
 * @module pages/index
 *
 *
 * @author montier.elliott@gmail.com
 */
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";

import type { NextPage } from "next";

import { useFetchResults } from "../hooks/useFetchResults";

import Nav from "../components/Nav";
import Header from "../components/Header";
import Results from "../components/Results";

/**
 * Home Component
 *
 *
 * @component
 * @returns {JSX.Element}
 */
const Home: NextPage = (): JSX.Element => {
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
