// src/components/sidebar/FloatMenu.jsx

import { Link } from 'react-router-dom';
import './FloatMenu.css'; // Certifique-se de que o caminho está correto

const FloatMenu = () => {
  return (
    <div className="fixed">
      <nav>
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/acoes-brasileiras" className="text-white text-lg">Ações Brasileiras</Link>
      </nav>
    </div>
  );
};

export default FloatMenu;
