import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBanner from './Landing';
import MovieList from './Movies';
import JoelPodcast from './Podcast';
import Navbar from './Navigation';

function App() {
  return (
    //Wrapped my div with the router tag so the routes within pages work
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<TopBanner title="Joel Hilton Website" />} />
          <Route path="/Podcast" element={<JoelPodcast />} />
          <Route path="/MovieList" element={<MovieList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
