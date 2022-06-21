import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderSeller from "./components/HeaderSeller";
import "./App.css";

function AppSeller(){
    return (
        <div className="App">
        <BrowserRouter>
            <HeaderSeller />
        </BrowserRouter>
        </div>
    )
}

export default AppSeller;