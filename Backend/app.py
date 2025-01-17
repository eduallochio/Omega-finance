from flask import Flask, jsonify
from flask_cors import CORS
import yfinance as yf

app = Flask(__name__)
CORS(app)

@app.route('/api/acao/<ticker>', methods=['GET'])
def get_acao(ticker):
    try:
        print(f"Consultando dados para o ticker: {ticker}")
        acao = yf.Ticker(f"{ticker}.SA")
        
        # Pega o histórico (últimos 5 dias)
        dados = acao.history(period="5d")
        print(f"Histórico retornado: {dados}")
        
        if dados.empty:
            print("Histórico está vazio.")
            return jsonify({"error": "Ticker inválido ou sem dados"}), 400

        # Preços e volume
        preco_atual = float(dados['Close'].iloc[-1])
        preco_anterior = float(dados['Close'].iloc[-2]) if len(dados) > 1 else preco_atual
        variacao = round(((preco_atual - preco_anterior) / preco_anterior) * 100, 2) if preco_anterior != 0 else 0
        volume = int(dados['Volume'].iloc[-1])

        return jsonify({
            "ticker": ticker,
            "preco": preco_atual,
            "variacao": variacao,
            "volume": volume
        })
    except Exception as e:
        print(f"Erro ao processar o ticker {ticker}: {e}")
        # Erro genérico retornado com mensagem de contexto
        return jsonify({"error": f"Erro ao processar o ticker {ticker}. Detalhes: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)
