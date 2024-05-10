import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import App from "./components/app/App.tsx";
import { apolloClient, i18next } from "./configs";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
