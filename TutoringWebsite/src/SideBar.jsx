import React, { useState } from "react";
import logo from "./assets/icon-image.png";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <header className="sidebar-header">
          <Link to="/" className="header-logo">
            <img src={logo} alt="puzzle" className="logo-image" />
          </Link>
          <button className="toogler" onClick={toggleSidebar}>
            <span class="material-symbols-rounded">C</span>
          </button>
        </header>

        <nav className="sidebar-nav">
          <ul className="nav-list primary-nav">
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <span className="nav-icon" class="material-symbols-rounded">
                  D
                </span>
                <span className="nav-label">Dashboard</span>
              </Link>
              <span className="nav-tooltip">Dashboard</span>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/assignments" className="nav-link">
                <span className="nav-icon" class="material-symbols-rounded">
                  A
                </span>
                <span className="nav-label">Assignments</span>
              </Link>
              <span className="nav-tooltip">Assignments</span>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/resources" className="nav-link">
                <span className="nav-icon" class="material-symbols-rounded">
                  R
                </span>
                <span className="nav-label">Resources</span>
              </Link>
              <span className="nav-tooltip">Resources</span>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/timetable" className="nav-link">
                <span className="nav-icon" class="material-symbols-rounded">
                  T
                </span>
                <span className="nav-label">Timetable</span>
              </Link>
              <span className="nav-tooltip">Timetable</span>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/support" className="nav-link">
                <span className="nav-icon" class=" material-symbols-rounded">
                  S
                </span>
                <span className="nav-label">Support</span>
              </Link>
              <span className="nav-tooltip">Support</span>
            </li>
          </ul>

          <ul className="nav-list secondary-nav">
            <li className="nav-item">
              <Link to="/dashboard/profile" className="nav-link">
                <span className="nav-icon" class="material-symbols-rounded">
                  P
                </span>
                <span className="nav-label">Profile</span>
              </Link>
              <span className="nav-tooltip">Profile</span>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/logout" className="nav-link">
                <span className="nav-icon" class=" material-symbols-outlined">
                  L
                </span>
                <span className="nav-label">Logout</span>
              </Link>
              <span className="nav-tooltip">Logout</span>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;
