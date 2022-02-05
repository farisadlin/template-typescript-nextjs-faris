import { ApolloProvider } from "@apollo/client";
import { AppWrapper } from "context/state";
import client from "graphql/config/apollo-client";

type RootProps = {
  children: any;
};

const Root = ({ children }: RootProps) => {
  return (
    <ApolloProvider client={client}>
      <AppWrapper>{children}</AppWrapper>
    </ApolloProvider>
  );
};

export default Root;
