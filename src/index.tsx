import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import { server } from './server';

if (process.env.NODE_ENV === 'development') {
  server();
}

ReactDOM.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
