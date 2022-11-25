import React from "react";
import Authentication from "./screens/Authentication";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import EditCategories from "./screens/EditCategories";
import CreateCategory from "./screens/CreateCategory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Authentication />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/createcategory" element={<CreateCategory />} />
      <Route path="/editcategories" element={<EditCategories />} />
    </Routes>
    // <Home />
  );
};

export default App;
