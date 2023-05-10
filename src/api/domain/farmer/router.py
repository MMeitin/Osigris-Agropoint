from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.farmer import Farmer
import api.domain.farmer.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt



api = Blueprint("api/farmer", __name__)



@api.route('/<int:id>', methods=['GET'])
def get_farmer(id):
    
    farmer = Controller.get_farmer(id)       
    return jsonify(farmer), 200