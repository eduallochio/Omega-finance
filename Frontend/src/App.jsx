
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AcoesBrasileiras from './pages/AcoesBrasileiras';
import Dashboard from "./components/sidebar/Dashboard"; // Certifique-se de que o caminho está correto

function App() {
  return (
    <Router>
      <div className="relative">
        {/* Rotas da aplicação */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acoes-brasileiras" element={<AcoesBrasileiras />} />
        </Routes>

        {/* Menu Flutuante */}
        <Dashboard />
      </div>
    </Router>
  );
}

export default App;
