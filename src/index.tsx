import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // 假设App.tsx在同一目录下
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
