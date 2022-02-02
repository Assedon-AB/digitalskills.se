import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full text-center relative top-0 left-0 right-0 py-2 text-sm bg-blue-500 text-white">
        All data på denna sida är fake data.
      </div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
