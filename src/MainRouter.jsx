import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Card from './Pages/Card';
import { useState } from 'react';

export default function MainRouter() {
    let [card,setCard] = useState([]);
  return (
    <Routes>
         <Route path="/" element={<Home card={card} setCard={setCard} />}/>
         <Route path="/about" element={<About card={card} setCard={setCard}/>}/>
         <Route path="/card" element={<Card card={card} setCard={setCard}/>}/>
    </Routes>
  )
}
