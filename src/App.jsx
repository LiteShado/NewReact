import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Nav from "./components/Nav";
import Users from "./pages/Users";
import Person1 from "./pages/Person1";
import Person2 from "./pages/Person2";
import Person3 from "./pages/Person3";


function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person1" element={<Person1 />} />
          <Route path="/person2" element={<Person2 />} />
          <Route path="/person3" element={<Person3 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
