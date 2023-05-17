from flask import request,Blueprint, jsonify
from api.models.index import Technician
import api.domain.technician.controller as Controller

api = Blueprint("api/tech", __name__)

#GET ALL TECHNICIAN
@api.route('/', methods=['GET'])
def get_all_tech():
    all_tech = Controller.get_all_tech()
    print(all_tech)
    return jsonify(all_tech), 200
    
#GET ONE TECHNICIAN
@api.route('/<int:id>', methods=['GET'])
def get_one_tech(id):
    one_tech = Controller.get_tech_by_user_owner(id)
    return jsonify(one_tech), 200
