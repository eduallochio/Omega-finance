import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/Home";
import AcoesBrasileiras from "./pages/AcoesBrasileiras";
import { CarteiraProvider } from "./context/CarteiraContext";

function App() {
  return (
    <CarteiraProvider>
      <Router>
        <Dashboard>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acoes-brasileiras" element={<AcoesBrasileiras />} />
          </Routes>
        </Dashboard>
      </Router>
      </CarteiraProvider>
      );
}

      export default App;
