/**
 * @module pages/_app
 *
 *
 * @author montier.elliott@gmail.com
 */
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * A component that renders the given component with its page props.
 *
 * 
 * @param {AppProps} props - Component properties.
 * @param {React.ComponentType} props.Component - Component to render.
 * @param {object} props.pageProps - Component page properties.
 *
 * @returns {JSX.Element} - Rendered component.
 */
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
