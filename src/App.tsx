import React from 'react';
import { BrowserRouter } from "react-router-dom";

import './styles/app.css';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (<BrowserRouter>
    <Layout>
      <Home />
    </Layout>
  </BrowserRouter>);
}

export default App;
