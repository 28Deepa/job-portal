import { AllRoutes } from "./routes";
import { Navbar } from "./components";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/apollo";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
