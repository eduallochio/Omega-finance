// src/pages/AcoesBrasileiras.jsx
import "./AcoesBrasileiras.css";
import { useState } from "react";

const AcoesBrasileiras = () => {
  const [ticker, setTicker] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultarAcao = async () => {
    if (!ticker) {
      setError("Por favor, insira um ticker válido.");
      return;
    }

    try {
      setError(null);
      setResultado(null);
      setLoading(true);

      const response = await fetch(`http://127.0.0.1:5000/api/acao/${ticker.toUpperCase()}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Erro ao buscar dados. Tente novamente.");
        return;
      }

      setResultado(data);
    } catch {
      setError("Erro de conexão com o servidor. Verifique sua rede.");
    } finally {
      setLoading(false);
    }
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
        <button onClick={consultarAcao} disabled={loading}>
          {loading ? "Consultando..." : "Consultar"}
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {resultado && (
        <div className="resultado">
          <p><strong>Nome:</strong> {resultado.nome}</p>
          <p><strong>Preço:</strong> R$ {resultado.preco}</p>
          <p><strong>Variação:</strong> {resultado.variacao}</p>
          <p><strong>Volume:</strong> {resultado.volume}</p>
        </div>
      )}
    </div>
  );
};

export default AcoesBrasileiras;
