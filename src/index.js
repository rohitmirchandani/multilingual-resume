import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_en from './translations/en/global.json'
import global_hi from './translations/hi/global.json'
import global_fr from './translations/fr/global.json'
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  interpolation: {escapeValue:false},
  lng:"en",
  resources:{
    en : {
      global : global_en
    },
    hi : {
      global : global_hi
    },
    fr : {
      global : global_fr
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18next = {i18n}>
       <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
