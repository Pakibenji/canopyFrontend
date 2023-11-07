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
import Footer from "./components/LayoutComp/Footer";
import useUserFromLocalStorage from "./utils/useFirebaseAuth";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
  useUserFromLocalStorage();
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plant/:id" element={<Plant />} />
        <Route element={<PrivateRoute />}>
          <Route path="/addPlants" element={<AddPlant />} />
          <Route path="/userInfo" element={<User />} />
          <Route path="/plant/:id/edit" element={<EditPlant />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
