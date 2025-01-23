from flask import Flask
from flask_cors import CORS
from flasgger import Swagger
from config.settings import swagger_config
from app.routes import api_blueprint

def create_app():
    app = Flask(__name__)
    CORS(app)
    Swagger(app, template=swagger_config)

    # Registrar rotas
    app.register_blueprint(api_blueprint, url_prefix='/api/acao')
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
