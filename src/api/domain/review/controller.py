import api.domain.review.repository as Repository
from api.models.review import Review

## GET ALL REVIEW
def get_all_review():
    reviews = Repository.get_all_review()
    if review is None:
        return jsonify("No hay reviews")
    else
    return review

## GET ONE REVIEW BY ID
def get_one_review(id):
    review = Repository.get_one_review(id)
    if review is None:
        return jsonify("No encontre la review")
    else:
    return review