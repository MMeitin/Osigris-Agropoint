"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models.index import db
from api.admin import setup_admin
from api.commands import setup_commands
import api.domain.user.router as user_router
import api.domain.crop.router as crop_router
import api.domain.farmer.router as farmer_router
import api.domain.technician.router as tech_router
from flask_jwt_extended import JWTManager


ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(
    os.path.dirname(os.path.realpath(__file__)), "../public/"
)
app = Flask(__name__)
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "super-secret"
app.url_map.strict_slashes = False

# database condiguration
db_url = os.getenv("DATABASE_URL")
if db_url is not None:
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url.replace(
        "postgres://", "postgresql://"
    )
else:
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////tmp/test.db"

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# add the admin
setup_commands(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(user_router.api, url_prefix="/api/user")
app.register_blueprint(crop_router.api, url_prefix="/api/crop")
app.register_blueprint(farmer_router.api, url_prefix="/api/farmer")
app.register_blueprint(tech_router.api, url_prefix="/api/tech")
app.register_blueprint(review_router.api, url_prefix="/api/review")
app.register_blueprint(serv_router.api, url_prefix="/api/serv")

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


# generate sitemap with all your endpoints
@app.route("/")
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, "index.html")

## USERS
#user = user_router(app)

# any other endpoint will try to serve it like a static file
@app.route("/<path:path>", methods=["GET"])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = "index.html"
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0  # avoid cache memory
    return response






# this only runs if `$ python src/main.py` is executed
if __name__ == "__main__":
    
    PORT = int(os.environ.get("PORT", 3001))
    app.run(host="0.0.0.0", port=PORT, debug=True)
