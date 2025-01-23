// src/components/Header.jsx
const Header = () => {
  return (
    <header className="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#24292e', color: '#ffffff' }}>
      <div className="header-logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Omega Finance
      </div>
      <input
        type="text"
        className="header-search"
        placeholder="Buscar ações..." style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc',
           margin : '0 10px', flex: '1'  }}
      />
    </header>
  );
};

export default Header;
