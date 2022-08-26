import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Inicio  from './Components/Inicio';
import Footer from './Components/Footer'
import { Routes, Route } from "react-router-dom";
import AboutMe from './Components/AboutMe'
import Gallery from './Components/Gallery';
import {Columbias} from './Components/Columbias';
import { Namiki } from './Components/Namiki';
import { Voyager } from './Components/Voyager';


function App() {
  return (
    <div className="App">
     <Navbar/>  
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="about" element={<AboutMe/>} /> 
        <Route path="Gallery" element={<Gallery/>}/>
        <Route path="Columbus" element={<Columbias/>}/>
        <Route path="Namiki" element={<Namiki/>}/>
        <Route path="Voyager" element={<Voyager/>}/>
      </Routes>
     <Footer/> 
    </div>
  );
}

export default App;
