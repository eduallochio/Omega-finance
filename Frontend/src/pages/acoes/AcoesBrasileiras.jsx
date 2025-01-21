import { useState } from "react";
const AcoesBrasileiras = () => {
  const [ticker, setTicker] = useState("");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultarAcao = async () => {
    if (!ticker) {
      setError("Por favor, insira um ticker.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/acao/${ticker}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResultado(data);
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao conectar com a API. Tente novamente.");
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
          <p><strong>Preço Atual:</strong> R$ {resultado.preco_atual}</p>
          <p><strong>Variação:</strong> {resultado.variacao}%</p>
          <p><strong>Volume Atual:</strong> {resultado.volume_atual}</p>
          <p><strong>P/L:</strong> {resultado.pl}</p>
          <p><strong>ROE:</strong> {resultado.roe}</p>
          <p><strong>Dividend Yield:</strong> {resultado.dividend_yield}%</p>
          <p><strong>Valor de Mercado:</strong> R$ {resultado.valor_mercado}</p>
        </div>
      )}
    </div>
  );
};

export default AcoesBrasileiras;
