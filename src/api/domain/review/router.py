from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.review import Review
from api.domain.review.controller as Controller

api = Blueprint("api/review", __name__)

## GET ALL REVIEWS
@api.route('/', methods=['GET'])
def get_all_reviews():
    review = Controller.get_all_review()
    return jsonify(review), 200

## GET ONE REVIEW
@api.route('<int:id>', methods=['GET'])
def get_review_by_id(id):
    review = Controller.get_one_review(id)
    return jsonify(review), 200

## POST REVIEW
