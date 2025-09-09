import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";// Your Navbar component
import Home from "./Component/Home/Home";
import Navbar from "./Component/Home/Navbar/Navbar";
import Footer from "./Component/Home/Footer/Footer";


const App = () => {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
