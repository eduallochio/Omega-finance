import  { useState } from "react";
import "./AcoesBrasileiras.css";
import { useCarteira } from "../context/CarteiraContext";

const AcoesBrasileiras = () => {
  const [ticker, setTicker] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valorPago, setValorPago] = useState("");
  const [dataCompra, setDataCompra] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { adicionarAcao } = useCarteira();

  const fetchData = async () => {
    if (!ticker) {
      setError("Por favor, insira um ticker válido.");
      return;
    }

    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await fetch(
        `http://127.0.0.1:5000/api/acao/${ticker.toUpperCase()}`
      );
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Erro ao buscar dados. Tente novamente.");
        return;
      }

      setData(result);
    } catch {
      setError("Erro de conexão com o servidor. Verifique sua rede.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCarteira = () => {
    if (!ticker || !quantidade || !valorPago || !dataCompra) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    adicionarAcao({ ticker, quantidade, valorPago, dataCompra });
    alert("Ação adicionada à carteira com sucesso!");
    setTicker("");
    setQuantidade("");
    setValorPago("");
    setDataCompra("");
  };

  return (
    <div className="acoes-brasileiras">
      <h2>Consultar Ações Brasileiras</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Digite o ticker (ex: PETR4)"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <button onClick={fetchData}>Consultar</button>
      </div>
      {loading && <p>Carregando...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div className="resultado">
          <p><strong>Nome:</strong> {data.nome}</p>
          <p><strong>Preço:</strong> R$ {data.preco}</p>
          <p><strong>Variação:</strong> {data.variacao}</p>
          <p><strong>Volume:</strong> {data.volume}</p>
        </div>
      )}

      <div className="form adicionar-carteira">
        <h3>Adicionar à Carteira</h3>
        <input
          type="text"
          placeholder="Ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value.toUpperCase())}
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor Pago (R$)"
          value={valorPago}
          onChange={(e) => setValorPago(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data da Compra"
          value={dataCompra}
          onChange={(e) => setDataCompra(e.target.value)}
        />
        <button onClick={handleAddToCarteira}>Adicionar</button>
      </div>
    </div>
  );
};

export default AcoesBrasileiras;
