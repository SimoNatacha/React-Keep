import React from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import RightBar from "../components/layout/rightContainer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="nav"><Navbar/></div>
      <div className="content">
        <div className="side"><Sidebar/></div>
        <div className="main"><RightBar/></div>
      </div>
    </div>
  );
};
export default Dashboard;
