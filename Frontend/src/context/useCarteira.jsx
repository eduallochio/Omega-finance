import { useContext } from "react";
import CarteiraContext from "./CarteiraContext";


export const useCarteira = () => {
  const context = useContext(CarteiraContext);
  if (!context) {
    throw new Error("useCarteira deve ser usado dentro de um CarteiraProvider");
  }
  return context;
};

export default useCarteira;