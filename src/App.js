import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Homepage';
import About from './components/About/about';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/project';
import Contacts from './components/Contacts/contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
       
      </Routes>
    </Router>
  );
};

export default App;

