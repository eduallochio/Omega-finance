import { useState } from 'react';


const StockInfo = () => {
  const [ticker, setTicker] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!ticker) {
      setError("Por favor, insira um ticker válido.");
      return;
    }

    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await fetch(`http://127.0.0.1:5000/api/acao/${ticker.toUpperCase()}`);
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || "Erro ao buscar dados.");
        return;
      }

      const result = await response.json();
      setData(result);
    } catch {
      setError("Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o ticker"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
      />
      <button onClick={fetchData}>Buscar</button>
      
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h3>Informações da Ação</h3>
          <p><strong>Ticker:</strong> {data.ticker}</p>
          <p><strong>Preço:</strong> R$ {data.preco.toFixed(2)}</p>
          <p><strong>Variação:</strong> {data.variacao.toFixed(2)}%</p>
          <p><strong>Volume:</strong> {data.volume}</p>
        </div>
      )}
    </div>
  );
};

export default StockInfo;
