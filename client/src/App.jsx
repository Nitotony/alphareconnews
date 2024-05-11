


import './App.css'
import { Routes, Route } from "react-router-dom";
import Newsland from "./pages/newsland.jsx";
import Homepage from './pages/homepage';
import Signin from './pages/signin.jsx';
import Searchpage from './pages/searchpage.jsx';


import React from 'react'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/spec-news" element={<Newsland />} />
        <Route path="/searching/spec-news" element={<Newsland />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/searching" element={<Searchpage />} />
      </Routes>
    </div>
  );
}
