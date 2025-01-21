import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import AcoesBrasileiras from "./pages/acoes/AcoesBrasileiras";
import Carteira from "./pages/carteira/carteira";
import { CarteiraProvider } from "./context/CarteiraContext"; 
function App() {
  return (
    <CarteiraProvider>
      <Router>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acoes-brasileiras" element={<AcoesBrasileiras />} />
            <Route path="/carteira" element={<Carteira />} /> 
          </Routes>
        </Dashboard>
      </Router>
    </CarteiraProvider>
  );
}

export default App;
