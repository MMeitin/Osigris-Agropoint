from flask import Flask, request, jsonify, Blueprint
import api.domain.hiring.controller as Controller
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

api = Blueprint("api/hiring", __name__)

@api.route('/', methods=['GET'])
@jwt_required()
def get_hiring():
    user = get_jwt_identity()
    id = user['id']
    hiring = Controller.get_all_hiring(id)
    return jsonify(hiring)

@api.route("/", methods=['POST'])
@jwt_required()
def add_hiring():
    user_token = get_jwt()
    user = user_token['sub']
    user_id = user["id"]
    body = request.get_json()
    req = Controller.post_hiring(body, user_id)
    return jsonify(req)

