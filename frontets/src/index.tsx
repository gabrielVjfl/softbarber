import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/Routes'
import 'antd/dist/antd.css'; //
import 'react-calendar/dist/Calendar.css'
import ClienteProvider from './global/context/Action'
import GlobalContext from './global/context/index'
ReactDOM.render(

 
  <React.StrictMode>
  <ClienteProvider>


    <Routes />

    </ClienteProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
