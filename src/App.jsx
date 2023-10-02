import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from "./components/pages/Services";
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/aboutus" element={<AboutUs/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;