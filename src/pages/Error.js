import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";

const Error = () => (
  <main className="error-page">
    <h1>404</h1>
    <h2>{"Oups! La page que \n vous avez demandé n'existe pas."}</h2>
    <div className="link">
      <Link to="/">Retourner sur la page accueil</Link>
    </div>
  </main>
);

export default Error;
