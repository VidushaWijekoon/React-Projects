import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const fullname = "vidusha wijekoon";

const App = () => {
  return (
    <>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <div class="cube"></div>
      <Header />
      <Home />
      <Footer fullname={fullname} />
    </>
  );
};

export default App;
