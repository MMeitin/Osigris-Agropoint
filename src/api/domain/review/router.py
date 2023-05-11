from flask import request, jsonify, Blueprint
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt
import api.domain.review.controller as Controller


api = Blueprint("api/review", __name__)

## GET ALL REVIEWS
@api.route('/', methods=['GET'])
def get_all_reviews():
    review = Controller.get_all_review()
    return jsonify(review), 200

## GET ONE REVIEW
@api.route('/<int:id>', methods=['GET'])
def get_review_by_id(id):
    review = Controller.get_one_review(id)
    return jsonify(review), 200

## POST REVIEW
@api.route('/', methods=['POST'])
@jwt_required()
def post_review():
   info_token = get_jwt()
   print(info_token)
   #user = get_jwt_identity()
   #print(user)
   #user_id = user["id"]
   print("INFO-TOKEN BY ID",info_token['sub'])
   user = info_token['sub']
   print("INFO DEL USER --> ", user["id"])
   body = request.get_json()
   body["id_farmer"] = user["id"]
   review = Controller.post_review(body)
   return jsonify(review)