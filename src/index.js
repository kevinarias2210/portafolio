import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from './Componentes/Container/header/Header';
import {Main} from './Componentes/Container/main/Main';
import {Aside} from './Componentes/Container/aside/Aside';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Main />
    <Aside />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
