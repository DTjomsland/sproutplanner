import React from "react";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import EditCategories from "./screens/EditCategories";
import EditActivities from "./screens/EditActivities";
import EditPlanner from "./screens/EditPlanner";
import Planner from "./screens/Planner";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/editcategories" element={<EditCategories />} />
      <Route path="/editactivities" element={<EditActivities />} />
      <Route path="/editplanner" element={<EditPlanner />} />
    </Routes>
  );
};

export default App;
