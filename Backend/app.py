from flask import Flask, jsonify
import yfinance as yf

app = Flask(__name__)

@app.route('/api/acao/<ticker>', methods=['GET'])
def get_acao(ticker):
    try:
        acao = yf.Ticker(f"{ticker}.SA")
        dados = acao.history(period="1d")
        preco_atual = dados['Close'].iloc[-1]
        return jsonify({"ticker": ticker, "preco": preco_atual})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
