import api.domain.technician.repository as Repository
from flask import jsonify
from api.models.index import db
##GET ALL TECH
def get_all_tech():
    all_tech = Repository.get_all_tech()
    if all_tech is None:
        return jsonify("No hay tecnicos") 
    return all_tech

##GET ONE USER BY USERID
def get_one_tech(id):
    one_tech = Repository.get_one_tech(id)
    if one_tech is None:
        return jsonify("No encontramos el tecnico con id -->", id)
    return one_tech.serialize()

## GET TECH BY USER_ID
def get_tech_by_user_owner(user_id):
    tech = Repository.get_tech_by_user_owner(user_id)
    if tech is None:
        return jsonify('No existe ese técnico')
    return tech.serialize()

def modifyTechnician(technician, body):
    technician.name = body.get("name", technician.name)
    technician.sur_name = body.get("sur_name", technician.sur_name)
    technician.country = body.get("country", technician.country)
    technician.ccaa = body.get("ccaa", technician.ccaa)
    technician.speciality = body.get("speciality", technician.speciality)
    technician.num_ropo = body.get("num_ropo", technician.num_ropo)
    technician.phone_number = body.get("phone_number", technician.phone_number)
    technician.description = body.get("description", technician.description)

    db.session.commit()

    return technician.serialize()

    