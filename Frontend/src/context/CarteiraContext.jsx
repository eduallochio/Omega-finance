import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const CarteiraContext = createContext();

// Hook personalizado para acessar o contexto
export const useCarteira = () => {
  const context = useContext(CarteiraContext);
  if (!context) {
    throw new Error("useCarteira deve ser usado dentro de um CarteiraProvider.");
  }
  return context;
};

// Provedor do contexto
export const CarteiraProvider = ({ children }) => {
  const [carteira, setCarteira] = useState([]);

  const adicionarAcao = (acao) => {
    setCarteira((prev) => [...prev, acao]);
  };

  return (
    <CarteiraContext.Provider value={{ carteira, adicionarAcao }}>
      {children}
    </CarteiraContext.Provider>
  );
};

CarteiraProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
