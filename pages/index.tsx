import type { NextPage } from "next";
import Head from "next/head";

// import Sidebar from "../components/Sidebar";

/**
 * The Home component for the Spotify Remix app.
 *
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Spotify Remix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Center */}
        <p>testing something right now</p>
      </main>

      <div>
        <p>testing something right now</p>
      </div>
    </div>
  );
};

export default Home;
