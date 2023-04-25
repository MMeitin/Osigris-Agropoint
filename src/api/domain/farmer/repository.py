from api.models.index import db, Farmer

def add_farmer(body, user_id):
    new_farmer = Farmer(body['country'], body['ccaa'], body['company'],  body['pac_num'], user_id)
    db.session.add(new_farmer)
    db.session.commit()
    return new_farmer


