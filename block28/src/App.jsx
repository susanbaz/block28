import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Blue from './component/Blue';
import Red from './component/Red';
import Home from './component/Home';

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/blue" className="blue">
            Blue
          </Link>
          <Link to="/red" className="red">
            Red
          </Link>
          <Link to="/" className="home">
            Home
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
