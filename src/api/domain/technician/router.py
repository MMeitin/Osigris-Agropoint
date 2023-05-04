from flask import request
from models.index import Technician
import domain.technician.controller as Controller

def tech_router(app):
    #GET ALL TECHNICIAN
    @app.route('/tech', methods=['GET'])
    def get_all_tech():
        return Controller.get_all_tech
    
    #GET ONE TECHNICIAN
    @app.route('/tech/<int:id>', methods=['GET'])
    def get_one_tech(id):
        return Controller.get_one_tech(id)
    
    #POST TECHNICIAN --> FALTA USER_ID
    @app.route("/tech", methods=['POST'])
    def post_tech():
        body = request.get_json()
        return Controller.post_tech(body)