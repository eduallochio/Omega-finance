import requests

# URL da API
url = "http://127.0.0.1:5000/api/acao/PETR4"

try:
    response = requests.get(url)
    if response.status_code == 200:
        print("Resposta da API:")
        print(response.json())
    else:
        print(f"Erro: {response.status_code}")
        print(response.json())
except Exception as e:
    print(f"Erro ao conectar-se à API: {e}")
