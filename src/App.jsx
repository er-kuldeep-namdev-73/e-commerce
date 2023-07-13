import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./components/layout/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from "./components/layout/Products";
import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import SignUp from "./components/layout/SignUp";
import SignIn from "./components/layout/SignIn";
import Profile from "./components/layout/Profile";
import Cart from "./components/layout/Cart";

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
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
