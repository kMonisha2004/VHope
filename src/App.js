import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/header'
import Contact from './Components/contact'
import About from './Components/about'
import Home from './Components/Home'
import Footer from './Components/footer'
import Signup from './Components/signup'
import Login from './Components/login'
import Landing from './Components/landing'
import Regis from './Components/regis'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Signup/>}/>
    <Route path="/signup" element={<Login/>}/>
     <Route path="/landing" element={<Landing/>}/>
     <Route path="/regis" element={<Regis/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}
