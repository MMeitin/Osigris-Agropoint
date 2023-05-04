import domain.technician.repository as Repository
from flask import jsonify

##GET ALL TECH
def get_all_tech():
    all_tech = Repository.get_all_tech()
    if all_tech is None:
        return jsonify("No hay tecnicos")
    return all_tech

##GET ONE TECH
def get_one_tech(id):
    one_tech = Repository.get_one_tech(id)
    if one_tech is None:
        return jsonify("No encontramos el tecnico con id -->", id)
    return one_tech

##POST TECH  --> FALTA USER_ID
def post_tech(body):
    if body["description"] is None:
        return jsonify("Missing description", 400)
    if body["phone_number"] is None:
        return jsonify("Missing phone number", 400)
    if body["country"] is None:
        return jsonify("Missing country", 400)
    if body["ccaa"] is None:
        return jsonify("Missing ccaa", 400)
    if body["speciality"] is None:
        return jsonify("Missing speciality", 400)
    return Repository.post_tech(body), 201