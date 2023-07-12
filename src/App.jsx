import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/layout/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Products from "./components/layout/Products";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import SignUp from "./components/layout/SignUp";
import SignIn from "./components/layout/SignIn";

function App() {

  return (
    <div className="container-fluid">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
