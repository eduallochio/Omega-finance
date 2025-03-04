// src/components/Tabs.jsx
import './Tabs.css';
import { NavLink } from 'react-router-dom';

const Tabs = () => {
  return (
    <nav className="tabs" style={{ display: 'flex', borderBottom: '1px solid #e1e4e8', backgroundColor: '#f6f8fa'}}>
      <NavLink to="/" className="tab-link" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/acoes-brasileiras" className="tab-link" activeClassName="active">
        Ações Brasileiras
      </NavLink>
      <NavLink to="/relatorios" className="tab-link" activeClassName="active">
        Relatórios
      </NavLink>
      <NavLink to="/carteira" className="tab-link" activeClassName="active">
        Carteiras
      </NavLink>
    </nav>
  );
};

export default Tabs;
