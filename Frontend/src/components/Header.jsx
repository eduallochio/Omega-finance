// src/components/Header.jsx
import './Header.css';



const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">FinanceApp</div>
      <input
        type="text"
        className="header-search"
        placeholder="Buscar ações..."
      />
      <div className="header-icons">
        <span className="icon">⚙️</span>
        <span className="icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
