import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/user/Signup";
import Home from "./core/Home";
import NavBar from "./core/NavBar";

function Routess() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routess;
