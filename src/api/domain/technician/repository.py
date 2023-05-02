from api.models.index import db, Technician

###POST TECHNICIAN - SIGNUP

def add_tech(body, user_id):
    new_tech = Technician(body['description'], body['phone_number'], body['country'], body['ccaa'], body['speciality'], body['num_ropo'], user_id)
    db.session.add(new_tech)
    db.session.commit()
    return new_tech