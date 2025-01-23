from flask import Flask
from app.routes import api_routes
from app.routes import api_blueprint


app = Flask(__name__)
app.register_blueprint(api_routes)

if __name__ == '__main__':
    app.run(debug=True)
