import yfinance as yf
import app.routes  as api_blueprint

def buscar_dados_acao(ticker):
    acao = yf.Ticker(f"{ticker}.SA")

    # Obtém o histórico de 1 mês
    dados = acao.history(period="1mo")
    if dados.empty:
        raise ValueError("Ticker inválido ou sem dados")

    # Preços e volume
    preco_atual = float(dados['Close'].iloc[-1])
    variacao = round(((preco_atual - dados['Close'].iloc[-2]) / dados['Close'].iloc[-2]) * 100, 2)
    volume_atual = int(dados['Volume'].iloc[-1])

    # Indicadores financeiros
    info = acao.info
    pl = info.get("forwardPE", "N/A")
    roe = info.get("returnOnEquity", "N/A")
    dividend_yield = round(info.get("dividendYield", 0) * 100, 2) if info.get("dividendYield") else "N/A"
    valor_mercado = info.get("marketCap", "N/A")

    # Outros dados relevantes
    setor = info.get("sector", "N/A")
    industria = info.get("industry", "N/A")
    website = info.get("website", "N/A")

    return {
        "ticker": ticker,
        "preco_atual": preco_atual,
        "variacao": variacao,
        "volume_atual": volume_atual,
        "pl": pl,
        "roe": roe,
        "dividend_yield": dividend_yield,
        "valor_mercado": valor_mercado,
        "setor": setor,
        "industria": industria,
        "website": website
    }
