import { ApolloProvider } from "@apollo/client";
import { client } from '../lib/apollo'; // Use named import for "client"

import '../styles/globals.css'

import ReactGA from 'react-ga';

import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  ReactGA.initialize('5967830790');

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
