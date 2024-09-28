import React, { useEffect } from 'react'
import "aos/dist/aos.css";

import {  Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Redmore from './pages/Redmore';
import { Toaster } from 'react-hot-toast';
import Apply from './pages/Apply';
import Faq from './pages/Faq';
import Ourteam from './pages/Ourteam';
import Price from './pages/Price';
import AOS from "aos";

export default function App() {
  useEffect (() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=' '>
  
        <Navbar />
        <div className="  overflow-x-hidden py-32">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/services" element={<Services />}></Route> 
            <Route path="/redmore" element={<Redmore />}></Route>
            <Route path="/apply" element={<Apply/>}></Route>
            <Route path="/faq" element={<Faq/>}></Route>
            <Route path="/team" element={<Ourteam/>}></Route>
            <Route path="/price" element={<Price/>}></Route>


          </Routes>{" "}
        </div>
        <Footer />
        <Toaster />
      
    </div>
  )
}