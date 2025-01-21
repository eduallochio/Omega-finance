import { useCarteira } from "../../context/CarteiraContext";

const Carteira = () => {
  const { carteira } = useCarteira();

  return (
    <div>
      <h2>Minha Carteira</h2>
      {carteira.length === 0 ? (
        <p>Você ainda não adicionou ações à sua carteira.</p>
      ) : (
        <ul>
          {carteira.map((acao, index) => (
            <li key={index}>
              <strong>Ticker:</strong> {acao.ticker} | <strong>Quantidade:</strong> {acao.quantidade} | <strong>Valor Pago:</strong> R$ {acao.valorPago} | <strong>Data:</strong> {acao.data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carteira;
