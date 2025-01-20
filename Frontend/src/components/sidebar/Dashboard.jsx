// src/components/sidebar/Dashboard.jsx

import { Link } from 'react-router-dom';
import './Dashboard.css'; // Certifique-se de que o caminho está correto

const Dashboard = () => {
  return (
    <div className="fixed">
      <nav>
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/acoes-brasileiras" className="text-white text-lg">Ações Brasileiras</Link>
      </nav>
    </div>
  );
};

export default Dashboard;
