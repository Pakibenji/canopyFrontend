import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddPlant from "./pages/plants/AddPlant";
import Plant from "./pages/plants/Plant";
import EditPlant from "./pages/plants/EditPlant";
import Header from "./components/LayoutComp/Header";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import User from "./pages/auth/User";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plant/:id" element={<Plant />} />
        <Route path="/plant/edit/:id" element={<EditPlant />} />
        <Route path="/addPlants" element={<AddPlant />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userInfo" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
