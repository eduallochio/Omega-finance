
import Header from "../Header"; 
import Tabs from "../Tabs"; 
import "./Dashboard.css";
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
  return (
    <div className="dashboard">
      {/* Cabeçalho */}
      <Header />
      
      {/* Conteúdo do Dashboard */}
      <div className="dashboard-content">
        {/* Área Principal */}
        <main className="dashboard-main">
          {/* Tabs para navegação adicional */}
          <Tabs />
          
          {/* Conteúdo principal */}
          {children}
        </main>
      </div>
    </div>
  );
};
Dashboard.propTypes = {
  children: PropTypes.node
};

export default Dashboard;

