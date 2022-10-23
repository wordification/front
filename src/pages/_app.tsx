import { SessionProvider } from "next-auth/react";

import QueryProvider from "../components/QueryProvider";
import "../styles/globals.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryProvider>
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  </QueryProvider>
);

export default MyApp;
