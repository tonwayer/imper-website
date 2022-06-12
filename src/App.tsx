import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './styles/app.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calculator from './pages/Calculator';

function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}

export default App;
