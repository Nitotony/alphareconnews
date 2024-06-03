


import './App.css'
import { Routes, Route } from "react-router-dom";
import Newsland from "./pages/newsland.jsx";
import Homepage from './pages/homepage';
import Signin from './pages/signin.jsx';
import Searchpage from './pages/searchpage.jsx';
import { BrowserRouter } from "react-router-dom";


import React from 'react'
import Signup from './pages/signup.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/spec-news" element={<Newsland />} />
          <Route path="/searching/spec-news" element={<Newsland />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/searching" element={<Searchpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
