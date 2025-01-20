
import { useCarteira } from "../context/CarteiraContext";
import "./Home.css";

const Home = () => {
  const { carteira } = useCarteira();

  return (
    <div className="home">
      <h2>Minha Carteira de Ações</h2>
      {carteira.length === 0 ? (
        <p>Você ainda não adicionou ações à carteira.</p>
      ) : (
        <table>
          <thead>
            <tr>
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
