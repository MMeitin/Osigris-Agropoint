from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import Message
import api.domain.message.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt


api = Blueprint("api/message", __name__)


@api.route('/', methods=['POST'])
def create_message():
    
    body = request.get_json()
    message = Controller.create_message(body)
    
    return jsonify(message)

@api.route('/<int:id>', methods=['GET']) 
def get_convers(id):
    farmer_convers = Controller.get_farmer_convers(id)
    if farmer_convers:
        return jsonify(farmer_convers)
    else:
        technician_convers = Controller.get_technician_convers(id)
        if technician_convers:
            return jsonify(technician_convers)
        else:
            return jsonify({'msg': 'No conversations found for this id'})

@api.route('/<int:farmer_id>/<int:technician_id>', methods=['DELETE'])
def delete_convers(farmer_id, technician_id):
    deleted_count = Controller.delete_convers(farmer_id, technician_id)
    