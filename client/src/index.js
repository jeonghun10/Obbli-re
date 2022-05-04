import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './service/auth_service';
import AxiosCall from './service/axiosCall';

const authService = new AuthService();
const getData = new AxiosCall();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} getData={getData} />
  </React.StrictMode>
);
