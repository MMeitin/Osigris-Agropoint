from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import User
import api.domain.user.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt



api = Blueprint("api/user", __name__)

# SIGNUP USER
@api.route('/signup/farmer', methods=['POST'])
def register():
    body = request.get_json()
    user = Controller.post_user(body, "farmer")
    return jsonify(user.serialize())

## FOR FUTURE PROPOUSES TODO
@api.route('/private/<int:id>', methods=['GET'])
@jwt_required()
def get_user_id(id):
    user = User.query.get(id)
    token = get_jwt()
    print(token)
    return jsonify(user.serialize()), 201

##LOGIN USER
@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    token = Controller.login(body)

    if token.get('token'):
        return jsonify(token), 200
    return jsonify(token), token['status']

@api.route('/', methods=['GET'])
@jwt_required()
def get_user():
    info_token = get_jwt()
    user = info_token['sub']
    user_response = Controller.get_user(user)
    return jsonify(user_response.serialize()), 200