import React, { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile-icon.png";
import assignment from "../assets/assignment.png";
import resource from "../assets/resource.png";
import logout from "../assets/logout.png";
import notifications from "../assets/notification.png";
import support from "../assets/support.png";
import timetable from "../assets/timetable.png";
import logo from "../assets/icon-image.png";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li className="list-item">
            <Link to="/dashboard/profile" className="active">
              <img src={logo} className="dashboard-icon logo" />
              <span className="dashboard-title">Learner Dashboard</span>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/profile" className="active">
              <img src={profile} className="dashboard-icon" />
              <div className="dashboard-item">Profile</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/resources" className="active">
              <img src={resource} className="dashboard-icon" />
              <div className="dashboard-item">Resources</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/timetable" className="active">
              <img src={timetable} className="dashboard-icon" />
              <div className="dashboard-item">Timetable</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/assignments" className="active">
              <img src={assignment} className="dashboard-icon" />
              <div className="dashboard-item">Assignments</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/notifications" className="active">
              <img src={notifications} className="dashboard-icon" />
              <div className="dashboard-item">Notifications</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/support" className="active">
              <img src={support} className="dashboard-icon" />
              <div className="dashboard-item">Support</div>
            </Link>
          </li>
          <li className="list-item">
            <Link to="/dashboard/logout" className="active">
              <img src={logout} className="dashboard-icon" />
              <div className="dashboard-item">Logout</div>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
