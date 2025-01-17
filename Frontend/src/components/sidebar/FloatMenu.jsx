import { Link } from 'react-router-dom';

const FloatMenu = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-500 p-4 rounded-full shadow-lg z-50">
      <nav className="space-y-4">
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/acoes-brasileiras" className="text-white text-lg">Ações Brasileiras</Link>
      </nav>
    </div>
  );
};

export default FloatMenu;
