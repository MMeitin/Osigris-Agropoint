from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import Message
import api.domain.message.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity, get_jwt

api = Blueprint("api/message", __name__)


@api.route('/', methods=['POST'])
@jwt_required()
def create_message():
    body = request.get_json()
    message = Controller.create_message( body)
    return jsonify(message)

@api.route('/<int:id>', methods=['GET']) 
@jwt_required()
def get_convers(id):
    user = get_jwt_identity()
    user_id = user['id']
    farmer_convers = Controller.get_farmer_convers(user_id)
    if farmer_convers:
        return jsonify(farmer_convers)
    else:
        technician_convers = Controller.get_technician_convers(user_id)
        if technician_convers:
            return jsonify(technician_convers)
        else:
            return jsonify({'msg': 'No conversations found for this id'})

@api.route('/<int:farmer_id>/<int:technician_id>', methods=['DELETE'])
@jwt_required()
def delete_convers(farmer_id, technician_id):
    deleted_count = Controller.delete_convers(farmer_id, technician_id)
    return deleted_count