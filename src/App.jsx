import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./components/Review";
import Services from "./components/Services";
import WhyChooseus from "./components/Whychooseus";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="form" element={<Form/>} />
        </Routes>

        <main>
          <div id="home">
            <Home />
          </div>
          <div id="Services">
            <Services />
          </div>
          <div id="dishes">
            <Dishes />
          </div>
          <div id="menu">
            <Menu />
          </div>
          <div id="review">
            <Review />
          </div>
          <div id="">
            <WhyChooseus />
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
