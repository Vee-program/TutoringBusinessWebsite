import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Testimonials from "./Pages/Testimonials";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Dashboard from "./Dashboard/Dashboard";
import Book from "./Pages/Book";

const App = () => {
  const location = useLocation();

  const noNavbarRoutes = [
    "/dashboard",
    "/dashboard/profile",
    "/dashboard/support",
    "/dashboard/resources",
    "/dashboard/timetable",
    "/dashboard/notifications",
    "/dashboard/assignments",
    "/dashboard/logout",
  ];
  return (
    <div>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book" element={<Book />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
