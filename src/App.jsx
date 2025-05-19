import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import Header from "./components/Header";
import Web3Slider from "./components/Slider";
import SmokeCursor from "./components/Smoke";
import InitiativesPage from "./pages/IntiativesPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={ <HomePage />} />
        <Route path="/about" element={<AboutPage />}/> 
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <> 
    
       <Router>
        <SmokeCursor/>
       <Header/>
      <AnimatedRoutes />
      <Web3Slider/>
      <InitiativesPage/>
    </Router>
    </>

  );
};

export default App;
