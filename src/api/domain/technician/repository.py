from api.models.index import db, Technician
from flask import jsonify

###POST TECHNICIAN - SIGNUP

def add_tech(body, user_id):
    new_tech = Technician(body['name'],body['sur_name'],body['description'], body['phone_number'], body['country'], body['ccaa'], body['speciality'], body['num_ropo'], user_id)
    db.session.add(new_tech)
    db.session.commit()
    return new_tech

###GET ALL TECHNICIAN
def get_all_tech():
   tech = Technician.query.all()
   print(tech)
   tech_serialized = list(map(lambda x : x.serialize(), tech))
   return tech_serialized

### GET TECH BY USER_OWNER
def get_tech_by_user_owner(user_id):
    return Technician.query.filter_by(user_owner=user_id).first()
#########################################################################
## FILTER TECH BY NAME
 def filter_tech_by_name(name):
    tech = Technician.query.filter_by(name=name).all()
    tech_serialized = list(map(lambda x : x.serialize()), tech)
    return tech_serialized

## FILTER TECH BY CCAA
def filter_tech_by_ccaa(ccaa):
    tech = Technician.query.filter_by(ccaa=ccaa).all()
    tech_serialized = list(map(lambda x : x.serialize()), tech)
    return tech_serialized

## FILTER TECH BY SPECIALITY
def filter_tech_by_speciality(speciality):
    tech = Technician.query.filter_by(speciality=speciality).all()
    tech_serialized = list(map(lambda x : x.serialize()), tech)
    return tech_serialized
    