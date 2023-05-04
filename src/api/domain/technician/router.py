from flask import request,Blueprint
from api.models.index import Technician
import api.domain.technician.controller as Controller

api = Blueprint("api/tech", __name__)

def tech_router(app):
    #GET ALL TECHNICIAN
    @app.route('/', methods=['GET'])
    def get_all_tech():
        return Controller.get_all_tech
    
    #GET ONE TECHNICIAN
    @app.route('/<int:id>', methods=['GET'])
    def get_one_tech(id):
        return Controller.get_one_tech(id)
    
    #POST TECHNICIAN --> FALTA USER_ID
    @app.route("/", methods=['POST'])
    def post_tech():
        body = request.get_json()
        return Controller.post_tech(body, user_id)