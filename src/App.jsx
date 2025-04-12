import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <>
      <Router>
        <nav>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/contact">Contact</Link>

        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
