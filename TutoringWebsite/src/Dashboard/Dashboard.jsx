import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Logout from "./Logout";
import Profile from "./Profile";
import Assignments from "./Assignments";
import Resources from "./Resources";
import Timetable from "./Timetable";
import Support from "./Support";
import Notifications from "./Notifications";
import SideBar from "../SideBar";
import Header from "../Components/Header";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const [userId, setUserId] = useState(null);
  const [progress, setProgress] = useState({});
  const [assignments, setAssignments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        setUserId(user.uid);
      }
      const progressDoc = await getDoc(doc(db, `${userId}/progress`));
      if (progressDoc.exists()) {
        setProgress(progressDoc.data());
      }
      const assignmentsSnapshot = await getDocs(collection(db, "assignments"));

      setAssignments(assignmentsSnapshot.docs.map((doc) => doc.data()));

      const notificationsSnapshot = await getDocs(
        collection(db, "notifications")
      );

      setNotifications(notificationsSnapshot.map((doc) => doc.data()));
    };
    fetchData();
  }, [userId]);

  return (
    <div className="dashboard">
      <SideBar />
      <Header />
      <div className="dashboard-container">
        <div className="dashboard-wrapper">
          <h1 className="dashboard-heading">Dashboard</h1>
          <h2>Progress</h2>
          <p>Completed: {progress.completed}</p>
          <p>Pending: {progress.pending}</p>
          <h2>Assignments</h2>
          <ul>
            {assignments.map((assignment, idx) => (
              <li key={idx}>
                {assignment.title} -Due: {assignment.dueDate}
              </li>
            ))}
          </ul>
          <h2>Notifications</h2>

          <ul>
            {notifications.map((notif, idx) => {
              <li key={idx}>{notif.message}</li>;
            })}
          </ul>
        </div>
      </div>
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
