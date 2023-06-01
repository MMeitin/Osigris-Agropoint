from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.farmer import Farmer
import api.domain.farmer.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt



api = Blueprint("api/farmer", __name__)


@api.route('/<int:id>', methods=['GET'])
def get_farmer(id):
    farmer = Controller.get_farmer_by_user_owner(id)       
    return jsonify(farmer), 200
    
# FILTER TECH
@api.route('/', methods=['POST'])
@jwt_required()
def filter_tech():
    body = request.get_json()
    filtered_tech = Controller.filter_tech(body)
    return jsonify(filtered_tech), 200

@api.route('/<int:farmer_id>', methods=['PUT'])
@jwt_required()
def modifyFarmer(farmer_id):
    farmer = Farmer.query.get(farmer_id)
    
    if not farmer:
        return jsonify({'error': 'El agricultor no existe'}), 404
    
    body = request.get_json()
    modifiedFarmer = Controller.modifyFarmer(farmer, body)
    return jsonify(modifiedFarmer)