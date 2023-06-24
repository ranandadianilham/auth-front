import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Route, Routes } from 'react-router'
import Login from "./pages/login";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
