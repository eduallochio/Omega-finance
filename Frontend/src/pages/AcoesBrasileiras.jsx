// src/pages/AcoesBrasileiras.jsx
import { useState } from 'react';


const AcoesBrasileiras = () => {
  const [ticker, setTicker] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (!ticker) {
      setError('Por favor, insira um ticker válido.');
      return;
    }

    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await fetch(`http://127.0.0.1:5000/api/acao/${ticker.toUpperCase()}`);
      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Erro ao buscar dados. Tente novamente.');
        return;
      }

      setData(result);
    } catch {
      setError('Erro de conexão com o servidor. Verifique sua rede.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Consulta de Ações Brasileiras</h2>
      
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Digite o ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={fetchData}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-all"
        >
          Consultar
        </button>
      </div>

      {loading && <p className="text-gray-500">Carregando...</p>}

      {error && <div className="text-red-500">{error}</div>}

      {data && (
        <div className="bg-white p-4 shadow-md rounded-lg mt-4">
          <h3 className="text-xl font-semibold">Informações da Ação</h3>
          <p><strong>Ticker:</strong> {data.ticker}</p>
          <p><strong>Preço:</strong> R$ {data.preco.toFixed(2)}</p>
          <p><strong>Variação:</strong> {data.variacao.toFixed(2)}%</p>
          <p><strong>Volume:</strong> {data.volume}</p>
        </div>
      )}
    </div>
  );
};

export default AcoesBrasileiras;
