from flask import Blueprint, jsonify
from app.services import get_dados_acao

api_routes = Blueprint('api', __name__)

@api_routes.route('/api/acao/<ticker>', methods=['GET'])
def get_acao(ticker):
    try:
        return get_dados_acao(ticker)
    except Exception as e:
        return jsonify({"error": f"Erro ao processar o ticker {ticker}. Detalhes: {str(e)}"}), 500
