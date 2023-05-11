import api.domain.review.repository as Repository
from api.models.index import Farmer
from api.models.review import Review

## GET ALL REVIEW
def get_all_review():
    reviews = Repository.get_all_review()
    if reviews is None:
        return jsonify("No hay reviews")
    else:
        return reviews

## GET ONE REVIEW BY ID "WE MAY NEED THIS FOR FUTURE PROPOUSES"
def get_one_review(id):
    review = Repository.get_one_review(id)
    if review is None:
        return jsonify("No encontre la review")
    else:
        return review

# POST REVIEW
def post_review(body, role):
    if role == "farmer":
        id_farmer = Farmer.query.filter_by(user_owner=body["id_farmer"]).first()
        print("ID FARMER AFTER QUERY",id_farmer)
        body["id_famer"] = id_farmer
        review = Repository.post_review(body)
        if body['text'] is None:
            return jsonify("No hay texto en la review")
        else:
            return review
    else:
        return jsonify("El role no es granjero.")