import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import LoginPage from "./components2/LoginPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/Navbar" element={<Navbar/>} /> */}
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
export default App;
