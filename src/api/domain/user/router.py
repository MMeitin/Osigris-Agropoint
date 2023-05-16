from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import User
import api.domain.user.controller as Controller
from flask_jwt_extended import create_access_token, jwt_required, get_jwt



api = Blueprint("api/user", __name__)

# SIGNUP USER TECH
@api.route('/signup/tech', methods=['POST'])
def register_tech():
    body = request.get_json()
    print(body)
    user = Controller.post_user(body, "tech")
    return jsonify(user), 200

# SIGNUP USER FARMER
@api.route('/signup/farmer', methods=['POST'])
def register_farmer():
    body = request.get_json()
    user = Controller.post_user(body, "farmer")
    return jsonify(user), 200

##LOGIN USER
@api.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    user = Controller.login(body)
    print(user)
    return user


# GET USER 
@api.route('/', methods=['GET'])
@jwt_required()
def get_user():
    info_token = get_jwt()
    user = info_token['sub']
    user_response = Controller.get_user(user)
    return user_response.serialize(), 200