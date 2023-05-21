from flask import Flask, request, jsonify, Blueprint
from api.domain.hiring.controller as Controller
from flask_jwt_extended import jwt_required, get_jwt_identity

api = Blueprint("api/hiring", __name__)

@api.route('/', methods=['GET'])
@jwt_required()
def get_hiring():
    user = get_jwt_identity()
    id = user['id']
    hiring = Controller.get_all_hiring(id)
    return jsonify(hiring)

#@api.route("/", methods=['POST'])
#@jwt_required()
#def add_hiring(body):

