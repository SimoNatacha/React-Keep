/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import RightBar from "../components/layout/rightContainer";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <RightBar />
    </div>
  );
};
export default Dashboard;
