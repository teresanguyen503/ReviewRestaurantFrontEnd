import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import RestaurantForm from "./components/RestaurantForm";
import RegistrationForm from "./components/RegistrationForm";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
