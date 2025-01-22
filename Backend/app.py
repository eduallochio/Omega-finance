from flask import Flask
from flask_cors import CORS
from app.routes import api_routes

app = Flask(__name__)
CORS(app)

# Registra as rotas
app.register_blueprint(api_routes)

if __name__ == '__main__':
    app.run(debug=True)
