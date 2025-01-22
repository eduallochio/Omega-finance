// src/components/Header.jsx
import './Header.css';



const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Omega Finance</div>
      <input
        type="text"
        className="header-search"
        placeholder="Buscar ações..."
      />
    </header>
  );
};

export default Header;
