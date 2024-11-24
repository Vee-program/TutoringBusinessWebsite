import React from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "./Logout";
import Profile from "./Profile";
import Assignments from "./Assignments";
import Resources from "./Resources";
import Timetable from "./Timetable";
import Support from "./Support";
import Notifications from "./Notifications";
import SideBar from "../SideBar";
import Header from "../Components/Header";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <Routes>
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/resources" element={<Resources />} />
        <Route path="/dashboard/support" element={<Support />} />
        <Route path="/dashboard/timetable" element={<Timetable />} />
        <Route path="/dashboard/logout" element={<Logout />} />
        <Route path="/dashboard/assignments" element={<Assignments />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
