from api.models.index import db, Farmer, Technician

## POST FARMER
def add_farmer(body, user_id):
    new_farmer = Farmer(body["name"],body["sur_name"],body['country'], body['ccaa'], body['company'],  body['pac_num'], user_id)
    db.session.add(new_farmer)
    db.session.commit()
    return new_farmer

## GET ONLY FARMER ID
def get_only_farmer_id(user_id):
    farmer = Farmer.query.filter_by(user_owner=user_id).first()
    print("ESTE ES EL ID DEL GRANJERO --> ",farmer.serialize())
    farmer_serialize = farmer.serialize()
    farmer_id = farmer_serialize["id"]
    return farmer_id

### GET FARMER BY USER_OWNER
def get_farmer_by_user_owner(user_id):
    print('userid', user_id)
    farmer = Farmer.query.filter_by(user_owner=user_id).first()
    print('----------------', farmer)
    return farmer.serialize()

## FILTER TECH BY NAME
def filter_tech_by_name(name):
    tech = Technician.query.filter_by(name=name).all()
    tech_serialized = list(map(lambda x : x.serialize(),tech))
    return tech_serialized

## FILTER TECH BY CCAA
def filter_tech_by_ccaa(ccaa):
    tech = Technician.query.filter_by(ccaa=ccaa).all()
    tech_serialized = list(map(lambda x : x.serialize(),tech))
    return tech_serialized

## FILTER TECH BY SPECIALITY
def filter_tech_by_speciality(speciality):
    tech = Technician.query.filter_by(speciality=speciality).all()
    tech_serialized = list(map(lambda x : x.serialize(),tech))
    return tech_serialized

## ALL TECH
def get_all_tech():
    tech = Technician.query.all()
    tech_serialize = list(map(lambda x : x.serialize(), tech))
    return tech_serialize