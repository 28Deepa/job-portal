import { AllRoutes } from "./routes";
import { Navbar } from "./components";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/apollo";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <AllRoutes />
      </ApolloProvider>
    </>
  );
}

export default App;
