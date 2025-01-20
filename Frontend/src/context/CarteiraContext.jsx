import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CarteiraContext = createContext();

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

// Exportar o contexto
export default CarteiraContext;
