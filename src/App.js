//import react
import React from "react";
import { Routes, Route } from "react-router-dom";

//import component
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Logement from "./pages/Logement";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
