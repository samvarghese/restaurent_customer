import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Contact from './pages/Contact/Contact';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FoodDetail from './pages/FoodDetails/FoodDetail';

function App() {

  return (
   <div>
    <div><NavBar></NavBar></div>
    <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/foodDetail/:id" element={<FoodDetail />} />
          </Routes>
        </div>
   </div>
  
  );
}

export default App
