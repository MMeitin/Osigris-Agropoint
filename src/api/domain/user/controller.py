import api.domain.user.repository as Repository
from api.models.index import User
import api.domain.farmer.repository as FarmerRepository
from flask import jsonify
import bcrypt
from flask_jwt_extended import create_access_token

def verify_user_email_and_pass(user):
    if user["email"] is None:
        return jsonify("Null Email!")
    if user["password"] is None:
        return jsonify("Null password")
    return user

def post_user(body, role):
    user_verify = verify_user_email_and_pass(body)
    if user_verify.get('error') is not None:
        return jsonify({ "msg": 'User not found', "error": True, "status": 404 })

    hashed = bcrypt.hashpw(body['password'].encode(), bcrypt.gensalt(14)) # encode convierte en bytes
    new_user = Repository.sign_in_user(body['email'], hashed.decode(), role)
    new_farmer = FarmerRepository.add_farmer(body, new_user.id)
    return new_user

def login(body):
    user_verify = verify_user_email_and_pass(body)
    user = User.query.filter_by(email=body['email']).first()
    if user_verify.get('error') is not None:
        return user_verify

    if user is None:
        return {"msg": "User not found", "error": True, "status": 404}

    if bcrypt.checkpw(body['password'].encode(), user.password.encode()):
        new_token = create_access_token(identity=user.serialize())
        return{"token": new_token}

    return {"msg": "User not found", "error": True, "status": 404}

def get_user(user):
    if isinstance(user, dict):
        user = User.query.filter_by(email=user['email']).first()
        print(user);
        if user is None:
            return {"msg": "User not found", "error": True, "status": 404}
        return user
    else:
        return {"msg": "Invalid user", "error": True, "status": 400}