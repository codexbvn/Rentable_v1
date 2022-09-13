import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";
import Home from "./core/Home";
import Navbar from "./components/Navbar/Navbar";

function Routess() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
