import React from 'react';
import Auth from './components/Auth';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';

const App=() => {
  const isAuth=Boolean(useSelector((state) => state.token));

  return (
    <div>
      <BrowserRouter>
        {isAuth&&<Navbar />}
        <Routes>
          <Route path="/" element={!isAuth? <Auth />:<Navigate to="/posts" />} />
          <Route path="/posts" element={isAuth? <Posts />:<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
