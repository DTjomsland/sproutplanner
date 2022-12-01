import React from "react";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import EditCategories from "./screens/EditCategories";
import {
  Route,
  Routes
} 
from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/editcategories" element={<EditCategories />} />
    </Routes>
    // <Home />
  );
};

export default App;
