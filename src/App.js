import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Slide from "./components/Slide";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Footer from "./components/Footer";
import LoginPage from "./components2/LoginPage";  
import Signup from "./components2/Signup";
import Forget from "./components2/Forget";


function MainPage(){
  return(
    <div>
      <Navbar />
      <Navbar2 />
      <Slide />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Footer />

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the main page layout */}
        <Route path="/" element={<MainPage />} />
        
        {/* Route for the login page (without other components) */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Route for the signup page (without other components) */}
        <Route path="/signup" element={<Signup />} />

        {/* Route for the forget password page (without other components) */}
        <Route path="/forget" element={<Forget />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
