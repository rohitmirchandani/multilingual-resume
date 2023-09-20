import './App.css';
import React from 'react'
import Home from './pages/Home'
import Achivs from './pages/Achivs'
import Exp from './pages/Exp'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader';

function App() {
  //i18n.changeLanguage()
  return (
    <BrowserRouter>
      <AppHeader />
      <div className='page-div'>
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Exp/>} path="/experience"/>
        <Route element={<Achivs/>} path="/achievements"/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
