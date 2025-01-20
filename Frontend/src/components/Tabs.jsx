// src/components/Tabs.jsx
import './Tabs.css';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <nav className="tabs">
      <NavLink to="/" className="tab-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/acoes-brasileiras" className="tab-link" activeClassName="active">
        Ações Brasileiras
      </NavLink>
      <NavLink to="/relatorios" className="tab-link" activeClassName="active">
        Relatórios
      </NavLink>
    </nav>
  );
};

export default Tabs;
