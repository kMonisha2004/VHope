
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import App from './App';
//import Header from './Components/header';
//import Home from './Components/Home';
//import Regis from './Components/regis';
//import Signup from './Components/signup';
//import LoginForm from './Components/forms';
//import Displaydata from './Components/displaydata';
//import FormValidation2 from './Components/nforms';
//import Login from './Components/login';

//import './home.css';
//import './index.css';
//import Counter from './HooksEX/Counter';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
