import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Side from './components/HeaderSeller';
import { Home, Login, Register } from './pages';
// import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavigationBar /> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/side" element={<Side />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
