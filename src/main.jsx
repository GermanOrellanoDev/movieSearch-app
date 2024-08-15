import React from "react";
import ReactDOM from "react-dom/client";
import { MovieSearchApp } from "./MovieSearchApp";
import { Layout } from "./components/Layout/Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <MovieSearchApp />
    </Layout>
  </React.StrictMode>
);
