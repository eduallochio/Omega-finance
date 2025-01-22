import yfinance as yf

def get_dados_acao(ticker):
    print(f"Consultando dados para o ticker: {ticker}")
    acao = yf.Ticker(f"{ticker}.SA")
    
    # Histórico (últimos 30 dias)
    dados = acao.history(period="1mo")
    print(f"Histórico retornado: {dados}")

    if dados.empty:
        print("Histórico está vazio.")
        return {"error": "Ticker inválido ou sem dados"}, 400

    # Preços
    preco_atual = float(dados['Close'].iloc[-1])
    variacao = round(((preco_atual - dados['Close'].iloc[-2]) / dados['Close'].iloc[-2]) * 100, 2)

    # Volume
    volume_atual = int(dados['Volume'].iloc[-1])

    # Indicadores Financeiros
    info = acao.info
    pl = info.get("forwardPE", "N/A")
    roe = info.get("returnOnEquity", "N/A")
    dividend_yield = round(info.get("dividendYield", 0) * 100, 2) if info.get("dividendYield") else "N/A"
    valor_mercado = info.get("marketCap", "N/A")

    return {
        "ticker": ticker,
        "preco_atual": preco_atual,
        "variacao": variacao,
        "volume_atual": volume_atual,
        "pl": pl,
        "roe": roe,
        "dividend_yield": dividend_yield,
        "valor_mercado": valor_mercado
    }
