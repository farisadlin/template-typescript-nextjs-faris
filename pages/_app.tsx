import "styles/globals.css";
import type { AppProps } from "next/app";
import { AppWrapper } from "context/state";
import useLoading from "hooks/useLoading";
import { ApolloProvider } from "@apollo/client";
import client from "graphql/config/apollo-client";
import Loading from "components/loading/Loading";

function MyApp({ Component, pageProps }: AppProps) {
  const pageLoading = useLoading();
  return (
    <>
      {" "}
      {pageLoading ? (
        <Loading />
      ) : (
        <ApolloProvider client={client}>
          <AppWrapper>
            <Component {...pageProps} />
          </AppWrapper>
        </ApolloProvider>
      )}
    </>
  );
}

export default MyApp;
