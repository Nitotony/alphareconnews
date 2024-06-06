


import './App.css'
import { Routes, Route } from "react-router-dom";
import Newsland from "./pages/newsland.jsx";
import Homepage from './pages/homepage';
import Signin from './pages/signin.jsx';
import Business from './pages/business.jsx';
import Searchpage from './pages/searchpage.jsx';
import Technology from './pages/technology.jsx';

import { BrowserRouter } from "react-router-dom";


import React from 'react'
import Signup from './pages/signup.jsx';
import Saved from './pages/saved.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/business" element={<Business />} />
          <Route path="/spec-news" element={<Newsland />} />
          <Route path="/searching/spec-news" element={<Newsland />} />
          <Route path="/business/spec-news" element={<Newsland />} />
          <Route path="/entertainment/spec-news" element={<Newsland />} />
          <Route path="/technology/spec-news" element={<Newsland />} />
          <Route path="/technology" element={<Technology/>} />
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/searching" element={<Searchpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
