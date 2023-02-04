import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home";
import Admin from "./pages/admin";
import User from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
