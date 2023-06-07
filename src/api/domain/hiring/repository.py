from api.models.index import db, Hiring

## GET HIRING
def get_all_hiring(id_farmer):
    hiring = Hiring.query.filter_by(farmer_id=id_farmer).all()
    all_hiring = list(map(lambda x : x.serialize(), hiring))
    return all_hiring

##GET ALL TECH HIRING
def get_all_tech_hiring(id_tech):
    hiring = Hiring.query.filter_by(technician_id=id_tech).all()
    all_hiring = list(map(lambda x : x.serialize(), hiring))
    return all_hiring

## POST HIRING
def post_hiring(body):
    print("HIRING FROM REPOSITORY -->", body)
    hiring = Hiring(body['crop_name'], body['tech_name'],body['crop_id'], body['service_id'], body['farmer_id'],body['technician_id'],body['status'])
    db.session.add(hiring)
    db.session.commit()
    return hiring.serialize()

## PUT HIRING
def put_hiring(hiring):
    hiring_put = hiring
    db.session.commit()
    return hiring_put.serialize()