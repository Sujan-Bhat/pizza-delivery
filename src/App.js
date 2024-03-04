// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

import Signup from './signup';
import Login from './login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/blogs" element={<Login />} />
        <Route path="/about" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
