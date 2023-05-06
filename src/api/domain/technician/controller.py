import api.domain.technician.repository as Repository
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
    return one_tech.serialize()

