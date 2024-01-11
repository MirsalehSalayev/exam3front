import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  BasketProvider  from './components/Context/BasketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
    <App />
    </BasketProvider>
  </React.StrictMode>
);
