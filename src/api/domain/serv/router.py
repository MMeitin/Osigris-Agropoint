from flask import Flask, request, jsonify, url_for, Blueprint
import api.domain.serv.controller as Controller
import api.domain.technician.repository as Tech_repo
from api.models.index import Service
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint("api/serv", __name__)

def serialize_service(all_service):
    return list(map(lambda Service: Service.serialize(), all_service))

@api.route('/addServ', methods=['POST'])
@jwt_required()
def create_serv():
    body = request.get_json()
    user = get_jwt_identity()
    tech_id = Tech_repo.get_idtech_by_user_owner(user['id'])
    serv = Controller.create_serv(tech_id, body)
    return jsonify(serv), 200;

@api.route('/', methods=['GET'])
@jwt_required()
def get_own_serv():
    user = get_jwt_identity()
    all_service = Controller.get_own_serv(user['id'])
    return jsonify(serialize_service(all_service)), 200;

@api.route('/<int:tech_id>', methods=['GET'])
@jwt_required()
def get_own_serv_given_tech(tech_id):
    all_service = Controller.get_own_serv_by_tech(tech_id)
    return jsonify(serialize_service(all_service)), 200;
