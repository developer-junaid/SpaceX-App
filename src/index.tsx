import React from "react";
import ReactDOM from "react-dom";
import { client } from "./config/graphql_config";
import { ApolloProvider } from "@apollo/client";
import Main from "./container/Main";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
