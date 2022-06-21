import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register } from './pages';
import SidebarBuyer from './pages/SidebarBuyer';
import SidebarSeller from './pages/SidebarSeller';
// import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register/>} />
          <Route path="/sidebarbuyer" element={<SidebarBuyer/>} />
          <Route path="/sidebarseller" element={<SidebarSeller/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
