from api.models.index import db, Review
from flask import jsonify

## GET ALL REVIEW
def get_all_review():
    review = Review.query.all()
    print(review)
    review_serialized = list(map(lambda x: x.serialize(), review))
    return review_serialized

## GET ONE REVIEW BY ID
def get_one_review(id):
    review = Review.query.get(id)
    return review.serialize()

## POST REVIEW
def post_review(body):