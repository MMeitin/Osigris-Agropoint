from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import Message
import api.domain.message.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt
from api.models.farmer import Farmer
from api.models.technician import Technician
api = Blueprint("api/message", __name__)


@api.route('/', methods=['POST'])
@jwt_required()
def create_message():
    user = get_jwt_identity()
    body = request.get_json()
    message = Controller.create_message( body,user)
    return jsonify(message)

@api.route('/', methods=['GET']) 
@jwt_required()
def get_convers():
    user = get_jwt_identity()
    user_id = user['id']
    user_role = user['role']
    
    if user_role == 'farmer':
        farmer = Farmer.query.filter_by(user_owner=user_id).first()
        if farmer is not None:
            
            farmer_convers = Controller.get_farmer_convers(farmer.id)
            if farmer_convers:
                return jsonify(farmer_convers)
            else:
                return jsonify({'msg': 'No conversations found for this id'})
        else:
            return jsonify({'msg': 'Farmer not found'})

    elif user_role == 'tech':
        technician = Technician.query.filter_by(user_owner=user_id).first()
        if technician is not None:
            
            technician_convers = Controller.get_technician_convers(technician.id)
            
            if technician_convers:
                return jsonify(technician_convers)
            else:
                return jsonify({'msg': 'No conversations found for this tech_id'})
        else:
            return jsonify({'msg': 'Technician not found'})
    
    else:
        return jsonify({'msg': 'Invalid user role'})

@api.route('/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_convers(id):
    user = get_jwt_identity()
    user_role = user['role']
    user_id = user['id']
    if user_role == 'farmer':

        deleted_count = Controller.delete_farmer_convers(user_id, id)
        return deleted_count
    elif user_role == 'technician':
        deleted_count = Controller.delete_technician_convers(user_id, id)
        return deleted_count
    else :
        return jsonify("No messages found for this user")
   