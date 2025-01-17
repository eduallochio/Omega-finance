import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';

export function Home() {
  const [ticker, setTicker] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);

  const fetchStockData = async () => {
    // Validação: Verificar se o campo está vazio
    if (!ticker.trim()) {
      setFormError('O campo de ticker não pode estar vazio.');
      return;
    }

    // Limpar erros anteriores e iniciar a busca
    setFormError(null);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:5000/api/acao/${ticker}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Consulta de Ações</h1>
        <div className="flex space-x-2 mb-4">
          <Input
            placeholder="Digite o ticker (ex: PETR4)"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
          <Button onClick={fetchStockData}>Buscar</Button>
        </div>
        {formError && <p className="text-red-500 mb-2">{formError}</p>}
        {loading && <p>Carregando...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {data && (
          <div>
            <p>
              <strong>Ação:</strong> {data.ticker}
            </p>
            <p>
              <strong>Preço:</strong> R$ {data.preco.toFixed(2)}
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
