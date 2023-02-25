import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Componentes/Home/Home';
import Mainbrand from './Componentes/brand/mainBrand/Mainbrand';
import MainBriefcase from './Componentes/briefcase/mainBriefcase/MainBriefcase';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Mainbrand />} />
        <Route path="/briefcase" element={<MainBriefcase />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
