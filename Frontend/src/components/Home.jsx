
import { useCarteira } from "../context/CarteiraContext";
import "./Home.css";

const Home = () => {
  const { carteira } = useCarteira();

  return (
    <div className="home" style={{ padding: "20px", margin: "0", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ marginBottom: "20px" }}>Minha Carteira de Ações</h2>
      {carteira.length === 0 ? (
        <p>Você ainda não adicionou ações à carteira.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f9f9f9", houver: { backgroundColor: "#f1f1f1" } }}>
              <th>Ticker</th>
              <th>Quantidade</th>
              <th>Valor Pago</th>
              <th>Data da Compra</th>
            </tr>
          </thead>
          <tbody>
            {carteira.map((acao, index) => (
              <tr key={index}>
                <td>{acao.ticker}</td>
                <td>{acao.quantidade}</td>
                <td>R$ {acao.valorPago}</td>
                <td>{acao.dataCompra}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
