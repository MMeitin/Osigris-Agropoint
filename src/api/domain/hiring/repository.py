from api.models.index import db, Hiring

## GET HIRING
def get_all_hiring(user_id):
    id_farmer = Farmer.query.filter_by(user_owner=user_id).first()
    hiring = Hiring.query.filter_by(farmer_id=id_farmer).all()
    all_hiring = list(map(lambda x : x.serialize(), hiring))
    return all_hiring


## POST HIRING
def post_hiring(body):
    hiring = Hiring(body['crop_id'], body['service_id'], body['farmer_id'],body['technician_id'],body['status'])
    db.session.add(hiring)
    db.session.commit()
    return hiring.serialize()
    