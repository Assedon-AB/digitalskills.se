import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-full text-center relative top-0 left-0 right-0 py-2 text-sm bg-[#3A8DDE] text-white">
        All data på denna sida är för tillfället fake.
      </div>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
