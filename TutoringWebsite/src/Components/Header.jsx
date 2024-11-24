import React, { useState } from "react";
import notifications from "../assets/notification.png";
import profile from "../assets/profile-icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const toggleNotifications = () => {
    setNotificationsOpen((prev) => !prev);
  };

  return (
    <header style={styles.header}>
      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <input type="text" placeholder="Search..." style={styles.searchInput} />
      </div>

      {/* Notifications and Profile */}
      <div style={styles.actions}>
        {/* Notifications */}
        <div style={styles.iconWrapper}>
          <button style={styles.iconButton} onClick={toggleNotifications}>
            <img src={notifications} style={styles.headerIcon} />
          </button>
          {isNotificationsOpen && (
            <div style={styles.notificationsPopup}>
              <p>You have no new notifications.</p>
            </div>
          )}
        </div>

        {/* Profile */}
        <div style={styles.iconWrapper}>
          <button style={styles.iconButton} onClick={toggleProfileDropdown}>
            <img src={profile} style={styles.headerIcon} />
          </button>
          {isProfileDropdownOpen && (
            <div style={styles.profileDropdown}>
              <ul style={styles.dropdownMenu}>
                <li style={styles.dropDownList}>
                  <Link to="/dashboard/profile" style={styles.link}>
                    Profile
                  </Link>
                </li>
                <li style={styles.dropDownList}>
                  <Link to="/dashboard/support" style={styles.link}>
                    Support
                  </Link>
                </li>
                <li style={styles.dropDownList}>
                  <Link to="/dashboard/logout" style={styles.link}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 30px",
    backgroundColor: "#003366",
    color: "#fff",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  searchContainer: {
    flex: 1,
    marginLeft: "5em",
  },
  searchInput: {
    width: "60%",
    height: "40px",
    paddingLeft: "1.5em",
    borderRadius: "10px",
    fontSize: "1.2rem",
    border: "none",
    display: "block",
    margin: "0 auto",
  },
  headerIcon: {
    width: "35px",
  },
  actions: {
    display: "flex",
    alignItems: "center",
  },
  iconWrapper: {
    position: "relative",
    marginLeft: "10px",
  },
  iconButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
  notificationsPopup: {
    position: "absolute",
    top: "40px",
    right: "0",
    background: "#fff",
    color: "#000",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  profileDropdown: {
    position: "absolute",
    top: "40px",
    right: "0",
    background: "#fff",
    color: "#000",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "2em",
  },
  dropdownMenu: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  dropDownList: {
    paddingBottom: "0.9em",
  },
  dropdownMenuItem: {
    padding: "8px 0",
    cursor: "pointer",
  },
};

export default Header;
