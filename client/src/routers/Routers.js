import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import HomeUser from "../pages/HomeUser";
import About from "../pages/About";
import CarList from "../pages/CarList";
import CarDetail from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddCars from "../pages/AddCars";
import TestPage from "../pages/TestPage";
import EditCar from "../pages/EditCar";

const Routers = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomeUser />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/addcar" element={<AddCars />} />
      <Route path="/editcar/:slug" element={<EditCar />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/cars/:slug" element={<CarDetail />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
