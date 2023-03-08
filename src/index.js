import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameForm from './Form2';
import reportWebVitals from './reportWebVitals';
import Form from './Form3';
import Form4 from './Form4';
import Form5 from './Form5'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Form />
  <Form5 />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
