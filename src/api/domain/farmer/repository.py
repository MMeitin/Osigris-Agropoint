from api.models.index import db, Farmer

## POST FARMER
def add_farmer(body, user_id):
    new_farmer = Farmer(body["name"],body["sur_name"],body['country'], body['ccaa'], body['company'],  body['pac_num'], user_id)
    db.session.add(new_farmer)
    db.session.commit()
    return new_farmer


### GET FARMER BY USER_OWNER
def get_farmer_by_user_owner(user_id):
    farmer = Farmer.query.filter_by(user_owner=user_id).first()
    return farmer