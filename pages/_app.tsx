/**
 * @module pages/_app
 *
 *
 * @author montier.elliott@gmail.com
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * NextJS higher-order component, wraps around each page component in application
 *
 *
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

/** exporting */
export default MyApp;
