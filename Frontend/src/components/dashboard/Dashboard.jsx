// src/components/dashboard/Dashboard.jsx
import Header from "../Header";
import Tabs from "../Tabs";
import "./Dashboard.css";
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      <Header />
      <Tabs />
      <main className="dashboard-content">{children}</main>
    </div>
  );
};


Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;
